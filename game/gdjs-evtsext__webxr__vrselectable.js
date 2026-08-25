
gdjs.evtsExt__WebXR__VrSelectable = gdjs.evtsExt__WebXR__VrSelectable || {};

/**
 * Behavior generated from VR Selectable (WebXR)
 */
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable = class VrSelectable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.MagneticGrabEnabled = behaviorData.MagneticGrabEnabled !== undefined ? behaviorData.MagneticGrabEnabled : true;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.MagneticGrabEnabled !== undefined)
      this._behaviorData.MagneticGrabEnabled = behaviorOverriding.MagneticGrabEnabled;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    MagneticGrabEnabled: this._behaviorData.MagneticGrabEnabled,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.MagneticGrabEnabled !== undefined)
      this._behaviorData.MagneticGrabEnabled = networkSyncData.props.MagneticGrabEnabled;
  }

  // Properties:
  
  _getMagneticGrabEnabled() {
    return this._behaviorData.MagneticGrabEnabled !== undefined ? this._behaviorData.MagneticGrabEnabled : true;
  }
  _setMagneticGrabEnabled(newValue) {
    this._behaviorData.MagneticGrabEnabled = newValue;
  }
  _toggleMagneticGrabEnabled() {
    this._setMagneticGrabEnabled(!this._getMagneticGrabEnabled());
  }
}

/**
 * Shared data generated from VR Selectable (WebXR)
 */
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.SharedData = class VrSelectableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrSelectableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrSelectableSharedData = new gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrSelectableSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.userFunc0x1d3fd98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
if (!gdjs._webxrVrSelectableRegistry) gdjs._webxrVrSelectableRegistry = [];
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._state = 'idle';
    beh._selectingHand = null;
    gdjs._webxrVrSelectableRegistry.push({obj: obj, beh: beh});
}
};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.userFunc0x1d3fd98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.userFunc0x1bfc660 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    if (gdjs._webxrVrSelectableRegistry) {
        gdjs._webxrVrSelectableRegistry = gdjs._webxrVrSelectableRegistry.filter(function(e){ return e.obj !== obj; });
    }
}
};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.userFunc0x1bfc660(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.userFunc0x1bfc688 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;

// Helper: get controller GDevelop position
function _ctrlPos(hand) {
    var entry = controllers[hand];
    if (!entry || !entry.grip || !entry.connected) return null;
    var wp = entry._adjustedWP ? entry._adjustedWP.clone() : new THREE.Vector3();
    if (!entry._adjustedWP) entry.grip.getWorldPosition(wp);
    return { x: anchor.x + (wp.x - anchor.threeX), y: anchor.y - (wp.y - anchor.threeY), z: anchor.z + (wp.z - anchor.threeZ) };
}

// Helper: check if a GDevelop-coord point is inside obj's AABB (center-based)
function _inAABB(px, py, pz, obj) {
    var hw = (obj.getWidth ? obj.getWidth() : 0) / 2;
    var hh = (obj.getHeight ? obj.getHeight() : 0) / 2;
    var hd = (obj.getDepth ? obj.getDepth() : 0) / 2;
    return px >= obj.getX() - hw && px <= obj.getX() + hw &&
           py >= obj.getY() - hh && py <= obj.getY() + hh &&
           pz >= obj.getZ() - hd && pz <= obj.getZ() + hd;
}

// Helper: get Three.js scene
function _getThreeScene() {
    try {
        var lr = runtimeScene.getLayer('');
        var lr3d = lr.getRenderer ? lr.getRenderer() : null;
        if (lr3d) return lr3d._threeScene || lr3d.threeScene || (lr3d.getThreeScene ? lr3d.getThreeScene() : null);
    } catch(e) {}
    return null;
}

// Same interpretation as VrGrabbable MagneticGrabEnabled (missing getter / unknown => ray selection ON).
function _webxrReadSelectableMagneticEnabled(b) {
    if (!b || !b._getMagneticGrabEnabled) return true;
    var v = b._getMagneticGrabEnabled();
    if (v === false || v === 'false' || v === 'False' || v === 0 || v === '0') return false;
    return true;
}

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    var state = beh._state;

    // ============ IDLE ============
    if (state === 'idle') {
        var hands = ['left', 'right'];
        for (var hi = 0; hi < hands.length; hi++) {
            var hand = hands[hi];
            var entry = controllers[hand];
            if (!entry || !entry.connected) continue;

            var selected = false;

            // 1. AABB touch check (cheap, no raycast needed)
            var cp = _ctrlPos(hand);
            if (cp && _inAABB(cp.x, cp.y, cp.z, obj)) {
                selected = true;
            }

            // 2. Raycast check (controller forward ray hits bounding box)
            var selRayMagOn = _webxrReadSelectableMagneticEnabled(beh);
            if (gdjs._webxrDebugMagneticGrabProp) {
                var _rawS = beh._getMagneticGrabEnabled ? beh._getMagneticGrabEnabled() : '(no getter)';
                var _sigS = String(_rawS) + '|' + selRayMagOn;
                if (beh._webxrDbgSelRaySig !== _sigS) { beh._webxrDbgSelRaySig = _sigS; console.log('[WebXR VrSelectable MagneticGrabEnabled]', { object: obj.getName ? obj.getName() : '', raw: _rawS, raySelectionOn: selRayMagOn, hasGetter: !!beh._getMagneticGrabEnabled }); }
            }
            if (!selected && selRayMagOn && entry.grip) {
                var gripPos = new THREE.Vector3();
                entry.grip.getWorldPosition(gripPos);
                var selRaySrc = entry.ray || entry.grip;
                var fwdQuat = new THREE.Quaternion();
                selRaySrc.getWorldQuaternion(fwdQuat);
                var selPitchDeg = Number(entry._laserPitchOffset) || 0;
                if (selPitchDeg !== 0) { fwdQuat.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), selPitchDeg * Math.PI / 180)); }
                var fwdDir = new THREE.Vector3(0, 0, -1).applyQuaternion(fwdQuat).normalize();
                var _wsMag2 = gdjs._webxrVrWorldScale || 100;
                var raycaster = new THREE.Raycaster(gripPos, fwdDir, _wsMag2 * 0.06, (entry._magneticGrabLength > 0 ? entry._magneticGrabLength : 1000));
                var threeScene = _getThreeScene();
                if (threeScene) {
                    var hits = raycaster.intersectObjects(threeScene.children, true);
                    if (gdjs._webxrHitIsController) hits = hits.filter(function(h) { return !gdjs._webxrHitIsController(h); });
                    if (hits.length > 0) {
                        var hp = hits[0].point;
                        var hitGdX = anchor.x + (hp.x - anchor.threeX);
                        var hitGdY = anchor.y - (hp.y - anchor.threeY);
                        var hitGdZ = anchor.z + (hp.z - anchor.threeZ);
                        if (_inAABB(hitGdX, hitGdY, hitGdZ, obj)) {
                            selected = true;
                        }
                    }
                }
            }

            if (selected) {
                // Mutual exclusion: only one selectable selected per hand at a time
                var alreadySelected = false;
                var reg = gdjs._webxrVrSelectableRegistry || [];
                for (var ri = 0; ri < reg.length; ri++) {
                    if (reg[ri].beh._state === 'selected' && reg[ri].beh._selectingHand === hand) {
                        alreadySelected = true;
                        break;
                    }
                }
                if (!alreadySelected) {
                    beh._selectingHand = hand;
                    beh._state = 'selected';
                    break;
                }
            }
        }
    }

    // ============ SELECTED ============
    else if (state === 'selected') {
        var sHand = beh._selectingHand;
        var sEntry = sHand ? controllers[sHand] : null;
        if (!sEntry || !sEntry.connected) {
            beh._state = 'idle';
            beh._selectingHand = null;
        } else {
            var stillSelected = false;

            // AABB touch check
            var scp = _ctrlPos(sHand);
            if (scp && _inAABB(scp.x, scp.y, scp.z, obj)) {
                stillSelected = true;
            }

            var selRayMagOnS = _webxrReadSelectableMagneticEnabled(beh);
            // Raycast check
            if (!stillSelected && selRayMagOnS && sEntry.grip) {
                var sGripPos = new THREE.Vector3();
                sEntry.grip.getWorldPosition(sGripPos);
                var sRaySrc = sEntry.ray || sEntry.grip;
                var sFwdQuat = new THREE.Quaternion();
                sRaySrc.getWorldQuaternion(sFwdQuat);
                var sPitchDeg = Number(sEntry._laserPitchOffset) || 0;
                if (sPitchDeg !== 0) { sFwdQuat.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), sPitchDeg * Math.PI / 180)); }
                var sFwdDir = new THREE.Vector3(0, 0, -1).applyQuaternion(sFwdQuat).normalize();
                var _wsMagS = gdjs._webxrVrWorldScale || 100;
                var sRaycaster = new THREE.Raycaster(sGripPos, sFwdDir, _wsMagS * 0.06, (sEntry._magneticGrabLength > 0 ? sEntry._magneticGrabLength : 1000));
                var sScene = _getThreeScene();
                if (sScene) {
                    var sHits = sRaycaster.intersectObjects(sScene.children, true);
                    if (gdjs._webxrHitIsController) sHits = sHits.filter(function(h) { return !gdjs._webxrHitIsController(h); });
                    if (sHits.length > 0) {
                        var sHp = sHits[0].point;
                        var sHitGdX = anchor.x + (sHp.x - anchor.threeX);
                        var sHitGdY = anchor.y - (sHp.y - anchor.threeY);
                        var sHitGdZ = anchor.z + (sHp.z - anchor.threeZ);
                        if (_inAABB(sHitGdX, sHitGdY, sHitGdZ, obj)) {
                            stillSelected = true;
                        }
                    }
                }
            }

            if (!stillSelected) {
                beh._state = 'idle';
                beh._selectingHand = null;
            }
        }
    }
}
};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.userFunc0x1bfc688(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.userFunc0x1bfc688 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.userFunc0x1bfc688(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.userFunc0x28ef150 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._state === 'selected');
};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.userFunc0x28ef150(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelected = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.IsSelectedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.userFunc0x1bfc660 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._selectingHand || '') : '';
};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.userFunc0x1bfc660(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHand = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.SelectingHandContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.userFunc0x1bfc5e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMagneticGrabEnabled) beh._setMagneticGrabEnabled('true');
}
};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.userFunc0x1bfc5e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrab = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.EnableMagneticGrabContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.userFunc0x2290958 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMagneticGrabEnabled) beh._setMagneticGrabEnabled('false');
}
};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.userFunc0x2290958(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrab = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.DisableMagneticGrabContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext = {};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.userFunc0x1bfc660 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getMagneticGrabEnabled ? beh._getMagneticGrabEnabled() : 'true';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.userFunc0x1bfc660(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrSelectable.VrSelectable.prototype.MagneticGrabEnabledContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("WebXR::VrSelectable", gdjs.evtsExt__WebXR__VrSelectable.VrSelectable);
