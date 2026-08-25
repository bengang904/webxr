
if (typeof gdjs.evtsExt__WebXR__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebXR__onFirstSceneLoaded = {};
gdjs.evtsExt__WebXR__onFirstSceneLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__WebXR__onFirstSceneLoaded.userFunc0x2226f20 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (typeof gdjs !== 'undefined' && gdjs._WebXRVR_InitDone) {
    return;
}
gdjs._WebXRVR_InitDone = true;
gdjs._WebXRVRSupported = false;
gdjs._WebXRVR_WasPresenting = false;
gdjs._webxrVrXrBaseSpace = null;
gdjs._webxrVrWorldScale = 100;
gdjs._webxrVrFrame = null;
gdjs._webxrVrAnchor = null;
gdjs._webxrVrFrustumCullEnabled  = true;
gdjs._webxrVrCullRadiusScale     = 2.0;
gdjs._webxrVrCullMarginMeters    = 1.0;
gdjs._webxrVrCullNearKeepMeters  = 5.0;
gdjs._webxrVrCullSphere          = null;
gdjs._webxrVrHeadWorld           = null;

gdjs._webxrVrDbg = function () {
    if (typeof window !== 'undefined' && window.__WEBXR_VR_DEBUG__ === false) {
        return;
    }
    var a = ['[WebXR_VR]'].concat(Array.prototype.slice.call(arguments));
    console.log.apply(console, a);
};

if (navigator.xr && navigator.xr.isSessionSupported) {
    navigator.xr.isSessionSupported('immersive-vr').then(function (ok) {
        gdjs._WebXRVRSupported = !!ok;
        if (typeof gdjs._webxrVrDbg === 'function') {
            gdjs._webxrVrDbg('isSessionSupported(immersive-vr) ->', ok);
        }
    }).catch(function (err) {
        gdjs._WebXRVRSupported = false;
        if (typeof gdjs._webxrVrDbg === 'function') {
            gdjs._webxrVrDbg('isSessionSupported rejected', err);
        }
    });
} else {
    gdjs._WebXRVRSupported = false;
    if (typeof gdjs._webxrVrDbg === 'function') {
        gdjs._webxrVrDbg('navigator.xr missing');
    }
}

var renderer = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (renderer) {
    renderer.xr.enabled = true;
}

gdjs._webxrVrControllers = { left: { grip: null, ray: null, connected: false }, right: { grip: null, ray: null, connected: false } };

// Fixed model-space correction applied to every tracked controller frame: the
// design-time mesh orientation (captured once per controller from the loaded GLB,
// independent of any runtime pose) composed with the optional user RotationOffset
// property. This never depends on where/how the controller was posed when it
// connected, so orientation is correct whether the session starts with controllers
// already in hand or with hand tracking followed by a later pickup from the table.
gdjs._webxrControllerCorrection = function (beh) {
    var rx = beh._getRotationOffsetX ? Number(beh._getRotationOffsetX()) || 0 : 0;
    var ry = beh._getRotationOffsetY ? Number(beh._getRotationOffsetY()) || 0 : 0;
    var rz = beh._getRotationOffsetZ ? Number(beh._getRotationOffsetZ()) || 0 : 0;
    var qBase = beh._qMeshInit ? beh._qMeshInit.clone() : new THREE.Quaternion();
    if (!rx && !ry && !rz) return qBase;
    var qUser = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx * Math.PI / 180, ry * Math.PI / 180, rz * Math.PI / 180, 'ZYX'));
    return qBase.multiply(qUser);
};

// Shared by the CalibrateRotation action and the CalibrationPreview expression: solves
// for the RotationOffset that would make the model reproduce its design-time orientation
// exactly at the controller's current physical pose - i.e. treats the pose the controller
// is held in right now as the correct/aligned reference. Returns null if the controller
// isn't currently tracked (no grip yet, or the mesh orientation hasn't been captured).
gdjs._webxrSolveRotationOffsetDegrees = function (beh) {
    if (!beh || !beh._vrGrip || !beh._qMeshInit) return null;
    var wq = new THREE.Quaternion();
    beh._vrGrip.getWorldQuaternion(wq);
    var wqLocal = new THREE.Quaternion(-wq.x, wq.y, -wq.z, wq.w);
    var qUser = beh._qMeshInit.clone().invert().multiply(wqLocal.clone().invert()).multiply(beh._qMeshInit);
    var eu = new THREE.Euler().setFromQuaternion(qUser, 'ZYX');
    return { x: eu.x * 180 / Math.PI, y: eu.y * 180 / Math.PI, z: eu.z * 180 / Math.PI };
};

var vrRig = new THREE.Group();
gdjs._webxrVrRig = vrRig;
if (renderer) {
    for (var _ci = 0; _ci < 2; _ci++) {
        (function(grip) {
            grip.addEventListener('connected', function(event) {
                var h = event.data.handedness;
                if (h === 'left' || h === 'right') {
                    var handAnchor = new THREE.Group();
                    handAnchor.name = 'webxrHandAnchor_' + h;
                    grip.add(handAnchor);
                    gdjs._webxrVrControllers[h].grip = grip;
                    gdjs._webxrVrControllers[h].handAnchor = handAnchor;
                    gdjs._webxrVrControllers[h].connected = true;
                    vrRig.add(grip);
                    if (typeof gdjs._webxrVrDbg === 'function') {
                        gdjs._webxrVrDbg('controller connected:', h, 'grip added to vrRig');
                    }
                }
            });
            grip.addEventListener('disconnected', function() {
                var keys = ['left', 'right'];
                for (var k = 0; k < keys.length; k++) {
                    if (gdjs._webxrVrControllers[keys[k]].grip === grip) {
                        gdjs._webxrVrControllers[keys[k]].grip = null;
                        gdjs._webxrVrControllers[keys[k]].handAnchor = null;
                        gdjs._webxrVrControllers[keys[k]].connected = false;
                        grip.removeFromParent();
                        if (typeof gdjs._webxrVrDbg === 'function') {
                            gdjs._webxrVrDbg('controller disconnected:', keys[k]);
                        }
                    }
                }
            });
        })(renderer.xr.getControllerGrip(_ci));
        (function(ray) {
            ray.addEventListener('connected', function(event) {
                var h = event.data.handedness;
                if (h === 'left' || h === 'right') {
                    gdjs._webxrVrControllers[h].ray = ray;
                    vrRig.add(ray);
                }
            });
            ray.addEventListener('disconnected', function() {
                var keys = ['left', 'right'];
                for (var k = 0; k < keys.length; k++) {
                    if (gdjs._webxrVrControllers[keys[k]].ray === ray) {
                        gdjs._webxrVrControllers[keys[k]].ray = null;
                        ray.removeFromParent();
                    }
                }
            });
        })(renderer.xr.getController(_ci));
    }
}

var originalLoop = gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop;
if (gdjs.RuntimeGamePixiRenderer.prototype._webxrVrLoopInstalled) {
    if (typeof gdjs._webxrVrDbg === 'function') {
        gdjs._webxrVrDbg('startGameLoop already patched by WebXR_VR; skip duplicate');
    }
} else {
    gdjs.RuntimeGamePixiRenderer.prototype._webxrVrLoopInstalled = true;
    gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop = function startGameLoop(fn) {
        var oldTime = 0;
        var threeRenderer = this.getThreeRenderer();
        if (!threeRenderer) {
            gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop = originalLoop;
            this.startGameLoop(fn);
            throw new Error('WebXR VR requires a 3D scene (place at least one 3D object).');
        }
        var start = Date.now();
        var game = this.getGame();
        var doStep = function () {
            var time = Date.now() - start;
            var dt = oldTime ? time - oldTime : 0;
            oldTime = time;
            if (!fn(dt)) {
                threeRenderer.setAnimationLoop(null);
            }
        };
        var gameLoop = function (timestamp, frame) {
            gdjs._webxrVrFrame = frame || null;
            if (threeRenderer.xr.isPresenting) {
                game.getSceneStack().getCurrentScene().getRenderer().renderForVR();
                queueMicrotask(doStep);
            } else {
                doStep();
            }
        };
        threeRenderer.setAnimationLoop(gameLoop);
    };
}

if (typeof gdjs._webxrVrDbg === 'function') {
    gdjs._webxrVrDbg('onFirstSceneLoaded: xr.enabled + startGameLoop hook installed, threeRenderer=', !!renderer);
}
};
gdjs.evtsExt__WebXR__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebXR__onFirstSceneLoaded.userFunc0x2226f20(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WebXR__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__WebXR__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__WebXR__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
