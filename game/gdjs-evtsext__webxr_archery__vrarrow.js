
gdjs.evtsExt__WebXR_Archery__VrArrow = gdjs.evtsExt__WebXR_Archery__VrArrow || {};

/**
 * Behavior generated from VR Arrow
 */
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow = class VrArrow extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ArrowTag = behaviorData.ArrowTag !== undefined ? behaviorData.ArrowTag : "";
    this._behaviorData.DrawArc = behaviorData.DrawArc !== undefined ? behaviorData.DrawArc : false;
    this._behaviorData.ArcColor = behaviorData.ArcColor !== undefined ? behaviorData.ArcColor : "0;255;0";
    this._behaviorData.ArcGravity = behaviorData.ArcGravity !== undefined ? behaviorData.ArcGravity : Number("980") || 0;
    this._behaviorData.MinTightnessToFire = behaviorData.MinTightnessToFire !== undefined ? behaviorData.MinTightnessToFire : Number("0.1") || 0;
    this._behaviorData.RotateAlongVelocity = behaviorData.RotateAlongVelocity !== undefined ? behaviorData.RotateAlongVelocity : true;
    this._behaviorData.AlignToBowWhenNocked = behaviorData.AlignToBowWhenNocked !== undefined ? behaviorData.AlignToBowWhenNocked : true;
    this._behaviorData.Sticky = behaviorData.Sticky !== undefined ? behaviorData.Sticky : true;
    this._behaviorData.MaxPenetrationFraction = behaviorData.MaxPenetrationFraction !== undefined ? behaviorData.MaxPenetrationFraction : Number("0.5") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.ArrowTag !== undefined)
      this._behaviorData.ArrowTag = behaviorOverriding.ArrowTag;
    if (behaviorOverriding.DrawArc !== undefined)
      this._behaviorData.DrawArc = behaviorOverriding.DrawArc;
    if (behaviorOverriding.ArcColor !== undefined)
      this._behaviorData.ArcColor = behaviorOverriding.ArcColor;
    if (behaviorOverriding.ArcGravity !== undefined)
      this._behaviorData.ArcGravity = behaviorOverriding.ArcGravity;
    if (behaviorOverriding.MinTightnessToFire !== undefined)
      this._behaviorData.MinTightnessToFire = behaviorOverriding.MinTightnessToFire;
    if (behaviorOverriding.RotateAlongVelocity !== undefined)
      this._behaviorData.RotateAlongVelocity = behaviorOverriding.RotateAlongVelocity;
    if (behaviorOverriding.AlignToBowWhenNocked !== undefined)
      this._behaviorData.AlignToBowWhenNocked = behaviorOverriding.AlignToBowWhenNocked;
    if (behaviorOverriding.Sticky !== undefined)
      this._behaviorData.Sticky = behaviorOverriding.Sticky;
    if (behaviorOverriding.MaxPenetrationFraction !== undefined)
      this._behaviorData.MaxPenetrationFraction = behaviorOverriding.MaxPenetrationFraction;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    ArrowTag: this._behaviorData.ArrowTag,
    DrawArc: this._behaviorData.DrawArc,
    ArcColor: this._behaviorData.ArcColor,
    ArcGravity: this._behaviorData.ArcGravity,
    MinTightnessToFire: this._behaviorData.MinTightnessToFire,
    RotateAlongVelocity: this._behaviorData.RotateAlongVelocity,
    AlignToBowWhenNocked: this._behaviorData.AlignToBowWhenNocked,
    Sticky: this._behaviorData.Sticky,
    MaxPenetrationFraction: this._behaviorData.MaxPenetrationFraction,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.ArrowTag !== undefined)
      this._behaviorData.ArrowTag = networkSyncData.props.ArrowTag;
    if (networkSyncData.props.DrawArc !== undefined)
      this._behaviorData.DrawArc = networkSyncData.props.DrawArc;
    if (networkSyncData.props.ArcColor !== undefined)
      this._behaviorData.ArcColor = networkSyncData.props.ArcColor;
    if (networkSyncData.props.ArcGravity !== undefined)
      this._behaviorData.ArcGravity = networkSyncData.props.ArcGravity;
    if (networkSyncData.props.MinTightnessToFire !== undefined)
      this._behaviorData.MinTightnessToFire = networkSyncData.props.MinTightnessToFire;
    if (networkSyncData.props.RotateAlongVelocity !== undefined)
      this._behaviorData.RotateAlongVelocity = networkSyncData.props.RotateAlongVelocity;
    if (networkSyncData.props.AlignToBowWhenNocked !== undefined)
      this._behaviorData.AlignToBowWhenNocked = networkSyncData.props.AlignToBowWhenNocked;
    if (networkSyncData.props.Sticky !== undefined)
      this._behaviorData.Sticky = networkSyncData.props.Sticky;
    if (networkSyncData.props.MaxPenetrationFraction !== undefined)
      this._behaviorData.MaxPenetrationFraction = networkSyncData.props.MaxPenetrationFraction;
  }

  // Properties:
  
  _getArrowTag() {
    return this._behaviorData.ArrowTag !== undefined ? this._behaviorData.ArrowTag : "";
  }
  _setArrowTag(newValue) {
    this._behaviorData.ArrowTag = newValue;
  }
  _getDrawArc() {
    return this._behaviorData.DrawArc !== undefined ? this._behaviorData.DrawArc : false;
  }
  _setDrawArc(newValue) {
    this._behaviorData.DrawArc = newValue;
  }
  _toggleDrawArc() {
    this._setDrawArc(!this._getDrawArc());
  }
  _getArcColor() {
    return this._behaviorData.ArcColor !== undefined ? this._behaviorData.ArcColor : "0;255;0";
  }
  _setArcColor(newValue) {
    this._behaviorData.ArcColor = newValue;
  }
  _getArcGravity() {
    return this._behaviorData.ArcGravity !== undefined ? this._behaviorData.ArcGravity : Number("980") || 0;
  }
  _setArcGravity(newValue) {
    this._behaviorData.ArcGravity = newValue;
  }
  _getMinTightnessToFire() {
    return this._behaviorData.MinTightnessToFire !== undefined ? this._behaviorData.MinTightnessToFire : Number("0.1") || 0;
  }
  _setMinTightnessToFire(newValue) {
    this._behaviorData.MinTightnessToFire = newValue;
  }
  _getRotateAlongVelocity() {
    return this._behaviorData.RotateAlongVelocity !== undefined ? this._behaviorData.RotateAlongVelocity : true;
  }
  _setRotateAlongVelocity(newValue) {
    this._behaviorData.RotateAlongVelocity = newValue;
  }
  _toggleRotateAlongVelocity() {
    this._setRotateAlongVelocity(!this._getRotateAlongVelocity());
  }
  _getAlignToBowWhenNocked() {
    return this._behaviorData.AlignToBowWhenNocked !== undefined ? this._behaviorData.AlignToBowWhenNocked : true;
  }
  _setAlignToBowWhenNocked(newValue) {
    this._behaviorData.AlignToBowWhenNocked = newValue;
  }
  _toggleAlignToBowWhenNocked() {
    this._setAlignToBowWhenNocked(!this._getAlignToBowWhenNocked());
  }
  _getSticky() {
    return this._behaviorData.Sticky !== undefined ? this._behaviorData.Sticky : true;
  }
  _setSticky(newValue) {
    this._behaviorData.Sticky = newValue;
  }
  _toggleSticky() {
    this._setSticky(!this._getSticky());
  }
  _getMaxPenetrationFraction() {
    return this._behaviorData.MaxPenetrationFraction !== undefined ? this._behaviorData.MaxPenetrationFraction : Number("0.5") || 0;
  }
  _setMaxPenetrationFraction(newValue) {
    this._behaviorData.MaxPenetrationFraction = newValue;
  }
}

/**
 * Shared data generated from VR Arrow
 */
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.SharedData = class VrArrowSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_Archery_VrArrowSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_Archery_VrArrowSharedData = new gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_Archery_VrArrowSharedData;
}

// Methods:
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.userFunc0x270bc78 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
if (!gdjs._webxrVrArrowRegistry) gdjs._webxrVrArrowRegistry = [];
if (!gdjs._webxrSuppressLaserUntil) gdjs._webxrSuppressLaserUntil = { left: 0, right: 0 };
if (!gdjs._webxrDrawArcLine) {
    gdjs._webxrDrawArcLine = function(scene, visiblePoints, r, g, b, beh) {
        if (!scene) return;
        if (!beh._bowArcLine) {
            var geom = new THREE.BufferGeometry().setFromPoints(visiblePoints);
            var mat = new THREE.LineBasicMaterial({ color: new THREE.Color(r, g, b) });
            beh._bowArcLine = new THREE.Line(geom, mat);
            beh._bowArcLine.raycast = function() {};
            beh._bowArcLine.frustumCulled = false;
            scene.add(beh._bowArcLine);
            beh._bowArcScene = scene;
        } else {
            beh._bowArcLine.geometry.dispose();
            beh._bowArcLine.geometry = new THREE.BufferGeometry().setFromPoints(visiblePoints);
            beh._bowArcLine.material.color.setRGB(r, g, b);
        }
    };
}
if (!gdjs._webxrDisposeBowArcLine) {
    gdjs._webxrDisposeBowArcLine = function(beh) {
        if (beh._bowArcLine) {
            if (beh._bowArcScene) beh._bowArcScene.remove(beh._bowArcLine);
            beh._bowArcLine.geometry.dispose();
            beh._bowArcLine.material.dispose();
            beh._bowArcLine = null;
            beh._bowArcScene = null;
        }
    };
}
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._archeryState = 'idle';
    beh._drawDist = 0;
    beh._tightness = 0;
    beh._launchDirX = 0; beh._launchDirY = 0; beh._launchDirZ = 0;
    beh._launchRotOffset = new THREE.Quaternion();
    beh._lastDrawClickN = 0;
    beh._justLaunched = false;
    beh._pendingLaunchVelX = undefined;
    beh._arrowPeakSpeed = 0;
    beh._arrowRotFrozen = false;
    beh._lastGoodQuat = null;
    beh._arcCalledThisFrame = false;
    beh._bowArcLine = null;
    beh._bowArcScene = null;
    beh._nockedBowEntry = null;
    beh._wasGrabbed = false;
    beh._origStickyMotionType = null;
    beh._stuckHitObject = null;
    beh._stuckLocalOffset = null;
    beh._stuckLocalQuat = null;
    beh._hitVelX = 0; beh._hitVelY = 0; beh._hitVelZ = 0;
    beh._hitSpeed = 0;
    beh._justStuck = false;
    beh._stuckInObjectName = '';
    gdjs._webxrVrArrowRegistry.push({ obj: obj, beh: beh });
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.userFunc0x270bc78(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreated = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.userFunc0x270bbb8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
    if (gdjs._webxrVrArrowRegistry) {
        gdjs._webxrVrArrowRegistry = gdjs._webxrVrArrowRegistry.filter(function(e){ return e.obj !== obj; });
    }
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.userFunc0x270bbb8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroy = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.userFunc0x16781f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
var isPresenting = tr && tr.xr && tr.xr.isPresenting;

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    beh._arcCalledThisFrame = false;
    beh._justLaunched = false;
    beh._justStuck = false;

    // Determine if arrow is grabbed via VrGrabbable registry
    var isGrabbed = false;
    var arrowHand = '';
    var grabReg = gdjs._webxrVrGrabbableRegistry;
    if (grabReg) {
        for (var gi = 0; gi < grabReg.length; gi++) {
            if (grabReg[gi].obj === obj) {
                arrowHand = grabReg[gi].beh._grabbingHand || '';
                isGrabbed = (arrowHand !== '' && arrowHand !== null);
                break;
            }
        }
    }
    // Suppress laser + holsters/body-zones on both hands when nocked or drawn
    if (arrowHand && (beh._archeryState === 'nocked' || beh._archeryState === 'drawn')) {
        if (!gdjs._webxrSuppressLaserUntil) gdjs._webxrSuppressLaserUntil = { left: 0, right: 0 };
        gdjs._webxrSuppressLaserUntil[arrowHand] = performance.now() + 100;
        if (!gdjs._webxrArcheryActive) gdjs._webxrArcheryActive = { left: 0, right: 0 };
        gdjs._webxrArcheryActive[arrowHand] = performance.now() + 100;
        var _bowHandA = beh._nockedBowEntry && beh._nockedBowEntry.beh ? beh._nockedBowEntry.beh._holdingHand : '';
        if (_bowHandA) gdjs._webxrArcheryActive[_bowHandA] = performance.now() + 100;
    }

    // === Disconnecting state: if still grabbed, return to held so player can re-nock ===
    if (beh._archeryState === 'disconnecting' && isGrabbed) {
        beh._archeryState = 'held';
    }

    // === Stuck state ===
    if (beh._archeryState === 'stuck') {
        if (isGrabbed) {
            var physS = null; try { physS = obj.getBehavior('Physics3D'); } catch(eS) {}
            if (physS && physS._body && typeof Jolt !== 'undefined' && beh._origStickyMotionType !== null) {
                physS._sharedData.bodyInterface.SetMotionType(
                    physS._body.GetID(), beh._origStickyMotionType, Jolt.EActivation_Activate);
                beh._origStickyMotionType = null;
            }
            beh._stuckHitObject = null;
            beh._stuckLocalOffset = null;
            beh._stuckLocalQuat = null;
            beh._archeryState = 'held';
        } else {
            // Follow hit object if it moves
            if (beh._stuckHitObject && beh._stuckLocalOffset && beh._stuckLocalQuat) {
                var newWP = beh._stuckLocalOffset.clone().applyMatrix4(beh._stuckHitObject.matrixWorld);
                var folAnc = gdjs._webxrVrAnchor;
                if (folAnc) {
                    var newGdX = folAnc.x + (newWP.x - folAnc.threeX);
                    var newGdY = folAnc.y - (newWP.y - folAnc.threeY);
                    var newGdZ = folAnc.z + (newWP.z - folAnc.threeZ);
                    obj.setX(newGdX); obj.setY(newGdY); obj.setZ(newGdZ);
                    var physFol = null; try { physFol = obj.getBehavior('Physics3D'); } catch(eFol) {}
                    if (physFol && physFol._body && typeof Jolt !== 'undefined') {
                        var invScFol = physFol._sharedData.worldInvScale || 0.01;
                        var hitWQF = new THREE.Quaternion();
                        beh._stuckHitObject.getWorldQuaternion(hitWQF);
                        var newWQF = hitWQF.clone().multiply(beh._stuckLocalQuat);
                        physFol._sharedData.bodyInterface.SetPositionAndRotation(
                            physFol._body.GetID(),
                            physFol.getQuat(-newWQF.x, newWQF.y, -newWQF.z, newWQF.w),
                            physFol.getVec3(newGdX * invScFol, newGdY * invScFol, newGdZ * invScFol),
                            Jolt.EActivation_DontActivate);
                        var arwFolThree = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                        if (arwFolThree) {
                            arwFolThree.quaternion.copy(newWQF);
                            arwFolThree.updateMatrix();
                        }
                    }
                }
            }
            continue;
        }
    }

    // === Handle flying state rotation ===
    if (beh._archeryState === 'flying') {
        var rotAlongVel = beh._getRotateAlongVelocity ? (beh._getRotateAlongVelocity() === 'true' || beh._getRotateAlongVelocity() === true) : true;
        if (rotAlongVel && isPresenting) {
            var phys = null;
            try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
            if (phys && phys._body && typeof Jolt !== 'undefined') {
                var vel = phys._body.GetLinearVelocity();
                var vx = vel.GetX(), vy = vel.GetY(), vz = vel.GetZ();
                var vspd = Math.sqrt(vx*vx + vy*vy + vz*vz);
                var threeObjRot = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                if (vspd > (beh._arrowPeakSpeed || 0)) beh._arrowPeakSpeed = vspd;
                var _vdl = (beh._arrowPeakSpeed > 1 && vspd > 0.01) ?
                    (vx*beh._launchDirX + vy*beh._launchDirY + vz*beh._launchDirZ) / vspd : 1;
                if (!beh._arrowRotFrozen && vspd > 10 && _vdl >= 0.3 && threeObjRot) {
                    var velDirR = new THREE.Vector3(vx, -vy, vz).normalize();
                    var upR = new THREE.Vector3(0, 0, 1);
                    if (Math.abs(velDirR.dot(upR)) > 0.99) upR.set(1, 0, 0);
                    var _rqR = new THREE.Quaternion().setFromRotationMatrix(
                        new THREE.Matrix4().lookAt(new THREE.Vector3(0,0,0), velDirR, upR));
                    if (beh._launchRotOffset) _rqR.multiply(beh._launchRotOffset);
                    if (!beh._lastGoodQuat) beh._lastGoodQuat = new THREE.Quaternion();
                    beh._lastGoodQuat.copy(_rqR);
                    threeObjRot.quaternion.copy(_rqR);
                    threeObjRot.updateMatrix();
                } else if (!beh._arrowRotFrozen && beh._arrowPeakSpeed > 1 &&
                           (vspd < beh._arrowPeakSpeed * 0.3 || _vdl < 0.3)) {
                    beh._arrowRotFrozen = true;
                    phys._sharedData.bodyInterface.SetAngularVelocity(phys._body.GetID(), phys.getVec3(0,0,0));
                }
                if (beh._arrowRotFrozen && beh._lastGoodQuat && threeObjRot) {
                    threeObjRot.quaternion.copy(beh._lastGoodQuat);
                    threeObjRot.updateMatrix();
                }
            }
        }
        if (!isGrabbed) {
            var sticky = beh._getSticky ? (beh._getSticky() === 'true' || beh._getSticky() === true) : true;
            if (sticky && isPresenting) {
                var physSt = null; try { physSt = obj.getBehavior('Physics3D'); } catch(eSt) {}
                if (physSt && physSt._body && typeof Jolt !== 'undefined') {
                    var velSt = physSt._body.GetLinearVelocity();
                    var vxSt = velSt.GetX(), vySt = velSt.GetY(), vzSt = velSt.GetZ();
                    var spdSt = Math.sqrt(vxSt*vxSt + vySt*vySt + vzSt*vzSt);
                    if (spdSt > 5) {
                        var arwThreeSt = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                        var wSt = obj.getWidth ? obj.getWidth() : 0;
                        var hSt = obj.getHeight ? obj.getHeight() : 0;
                        var dSt = obj.getDepth ? obj.getDepth() : 0;
                        var longestSt = Math.max(wSt, hSt, dSt);
                        var dtSt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
                        var rayLenSt = spdSt * dtSt + longestSt * 0.6;
                        var stScene = null;
                        try {
                            var sslr = runtimeScene.getLayer('');
                            var sslr3d = sslr.getRenderer ? sslr.getRenderer() : null;
                            if (sslr3d) stScene = sslr3d._threeScene || sslr3d.threeScene || (sslr3d.getThreeScene ? sslr3d.getThreeScene() : null);
                        } catch(eSc) {}
                        if (stScene) {
                            var stOrigin = new THREE.Vector3();
                            if (arwThreeSt) arwThreeSt.getWorldPosition(stOrigin);
                            var stDirX = vxSt / spdSt, stDirY = -vySt / spdSt, stDirZ = vzSt / spdSt;
                            var stArrowMeshes = new Set();
                            if (arwThreeSt) stArrowMeshes.add(arwThreeSt);
                            if (gdjs._webxrVrArrowRegistry) {
                                for (var stAi = 0; stAi < gdjs._webxrVrArrowRegistry.length; stAi++) {
                                    var stAO = gdjs._webxrVrArrowRegistry[stAi].obj;
                                    var stAM = stAO.get3DRendererObject ? stAO.get3DRendererObject() : null;
                                    if (stAM) stArrowMeshes.add(stAM);
                                }
                            }
                            var stCandidates = [];
                            for (var stCi = 0; stCi < stScene.children.length; stCi++) {
                                var stCh = stScene.children[stCi];
                                if (stCh === gdjs._webxrVrRig) continue;
                                if (gdjs._webxrVrControllerMeshes && gdjs._webxrVrControllerMeshes.has(stCh)) continue;
                                if (stArrowMeshes.has(stCh)) continue;
                                stCandidates.push(stCh);
                            }
                            var stRc = new THREE.Raycaster(stOrigin, new THREE.Vector3(stDirX, stDirY, stDirZ), 0, rayLenSt);
                            var stHits = stRc.intersectObjects(stCandidates, true);
                            if (stHits.length > 0) {
                                var stHit = stHits[0];
                                var maxPenFrac = beh._getMaxPenetrationFraction ? Number(beh._getMaxPenetrationFraction()) : 0.5;
                                var embedDepthSt = longestSt * maxPenFrac;
                                var velDirGdX = vxSt / spdSt, velDirGdY = vySt / spdSt, velDirGdZ = vzSt / spdSt;
                                var stAnchor = gdjs._webxrVrAnchor;
                                var hitGdX = stAnchor ? stAnchor.x + (stHit.point.x - stAnchor.threeX) : stHit.point.x;
                                var hitGdY = stAnchor ? stAnchor.y - (stHit.point.y - stAnchor.threeY) : -stHit.point.y;
                                var hitGdZ = stAnchor ? stAnchor.z + (stHit.point.z - stAnchor.threeZ) : stHit.point.z;
                                var offset = embedDepthSt - longestSt * 0.5;
                                obj.setX(hitGdX + velDirGdX * offset);
                                obj.setY(hitGdY + velDirGdY * offset);
                                obj.setZ(hitGdZ + velDirGdZ * offset);
                                var _impWs = (physSt._sharedData && physSt._sharedData.worldScale) || 100;
                                beh._hitVelX =  vxSt * _impWs;
                                beh._hitVelY = -vySt * _impWs;
                                beh._hitVelZ =  vzSt * _impWs;
                                beh._hitSpeed = Math.sqrt(beh._hitVelX*beh._hitVelX + beh._hitVelY*beh._hitVelY + beh._hitVelZ*beh._hitVelZ);
                                beh._origStickyMotionType = physSt._body.GetMotionType();
                                physSt._sharedData.bodyInterface.SetMotionType(
                                    physSt._body.GetID(), Jolt.EMotionType_Kinematic, Jolt.EActivation_Activate);
                                physSt._sharedData.bodyInterface.SetLinearVelocity(physSt._body.GetID(), physSt.getVec3(0, 0, 0));
                                physSt._sharedData.bodyInterface.SetAngularVelocity(physSt._body.GetID(), physSt.getVec3(0, 0, 0));
                                if (arwThreeSt) {
                                    var _invScSt = physSt._sharedData.worldInvScale || 0.01;
                                    var _arwQSt = arwThreeSt.quaternion;
                                    physSt._sharedData.bodyInterface.SetPositionAndRotation(
                                        physSt._body.GetID(),
                                        physSt.getQuat(-_arwQSt.x, _arwQSt.y, -_arwQSt.z, _arwQSt.w),
                                        physSt.getVec3(obj.getX() * _invScSt, obj.getY() * _invScSt, obj.getZ() * _invScSt),
                                        Jolt.EActivation_DontActivate);
                                }
                                beh._stuckHitObject = stHit.object;
                                // Capture arrow in hit-object local space for follow-on-move
                                if (stAnchor) {
                                    var impThreeX = stAnchor.threeX + (obj.getX() - stAnchor.x);
                                    var impThreeY = stAnchor.threeY - (obj.getY() - stAnchor.y);
                                    var impThreeZ = stAnchor.threeZ + (obj.getZ() - stAnchor.z);
                                    var impWP = new THREE.Vector3(impThreeX, impThreeY, impThreeZ);
                                    var hitInvMat = new THREE.Matrix4().copy(stHit.object.matrixWorld).invert();
                                    beh._stuckLocalOffset = impWP.applyMatrix4(hitInvMat);
                                    var hitWQ0 = new THREE.Quaternion();
                                    stHit.object.getWorldQuaternion(hitWQ0);
                                    var impArwQ = arwThreeSt ? arwThreeSt.quaternion.clone() : new THREE.Quaternion();
                                    beh._stuckLocalQuat = hitWQ0.clone().invert().multiply(impArwQ);
                                }
                                beh._archeryState = 'stuck';
                                beh._justStuck = true;
                                beh._wasGrabbed = false;
                                continue;
                            }
                        }
                    }
                }
            }
            beh._wasGrabbed = false;
            continue;
        }
        // Re-grabbed (from flight or stuck) — reset to held
        beh._archeryState = 'held';
        beh._nockedBowEntry = null;
        beh._stuckHitObject = null;
        beh._justStuck = false;
    }

    // === Not grabbed ===
    if (!isGrabbed) {
        if (beh._wasGrabbed) {
            // Just released — check if we should launch
            if ((beh._archeryState === 'drawn' || beh._archeryState === 'nocked') && beh._nockedBowEntry) {
                var minT = beh._getMinTightnessToFire ? Number(beh._getMinTightnessToFire()) : 0.1;
                if (beh._tightness >= minT) {
                    // Launch!
                    beh._archeryState = 'flying';
                    beh._justLaunched = true;
                    beh._arrowPeakSpeed = 0;
                    beh._arrowRotFrozen = false;
                    var bowEntry = beh._nockedBowEntry;
                    var maxSpd = bowEntry.beh._getMaxArrowSpeed ? Number(bowEntry.beh._getMaxArrowSpeed()) : 2500;
                    var launchSpd = beh._tightness * maxSpd;
                    var ldx = beh._launchDirX, ldy = beh._launchDirY, ldz = beh._launchDirZ;
                    var phys2 = null;
                    try { phys2 = obj.getBehavior('Physics3D'); } catch(e2) {}
                    if (phys2 && phys2._body && typeof Jolt !== 'undefined') {
                        var invScale = phys2._sharedData.worldInvScale || 0.01;
                        var bi = phys2._sharedData.bodyInterface;
                        var id = phys2._body.GetID();
                        bi.SetLinearVelocity(id, phys2.getVec3(ldx * launchSpd * invScale, ldy * launchSpd * invScale, ldz * launchSpd * invScale));
                        bi.SetAngularVelocity(id, phys2.getVec3(0, 0, 0));
                        bi.ActivateBody(id);
                        // Store for doStepPostEvents — overrides VrGrabbable throw that runs in postEvents
                        beh._pendingLaunchVelX = ldx * launchSpd * invScale;
                        beh._pendingLaunchVelY = ldy * launchSpd * invScale;
                        beh._pendingLaunchVelZ = ldz * launchSpd * invScale;
                    }
                    // Capture orientation delta: hold-pose vs velocity-aligned rotation.
                    // Applied each flying frame so the arrow preserves tip-forward regardless of GLB convention.
                    var _arwRotC = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                    if (_arwRotC) {
                        var _vdC = new THREE.Vector3(ldx, -ldy, ldz).normalize();
                        var _upC = new THREE.Vector3(0, 0, 1);
                        if (Math.abs(_vdC.dot(_upC)) > 0.99) _upC.set(1, 0, 0);
                        var _velQC = new THREE.Quaternion().setFromRotationMatrix(
                            new THREE.Matrix4().lookAt(new THREE.Vector3(0,0,0), _vdC, _upC));
                        beh._launchRotOffset = _velQC.clone().invert().multiply(_arwRotC.quaternion.clone());
                    } else { beh._launchRotOffset = new THREE.Quaternion(); }
                    if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
                    beh._nockedBowEntry = null;
                }
            }
        }
        if (beh._archeryState !== 'flying') beh._archeryState = 'idle';
        beh._wasGrabbed = false;
        beh._drawDist = 0;
        beh._tightness = 0;
        beh._nockedBowEntry = null;
        if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
        continue;
    }

    beh._wasGrabbed = true;

    // === Find a compatible held bow ===
    var bowEntry = beh._nockedBowEntry;
    if (!bowEntry || bowEntry.beh._holdingHand === '' || bowEntry.beh._holdingHand === null) {
        // Previous bow was dropped or never set — find a new one
        if (bowEntry && (bowEntry.beh._holdingHand === '' || bowEntry.beh._holdingHand === null)) {
            // Bow was dropped while arrow was nocked — go to disconnecting
            if (beh._archeryState === 'nocked' || beh._archeryState === 'drawn') {
                beh._archeryState = 'disconnecting';
            }
        }
        beh._nockedBowEntry = null;
        bowEntry = null;
        var arrowTag = beh._getArrowTag ? String(beh._getArrowTag()) : '';
        var bowReg = gdjs._webxrVrBowRegistry;
        if (bowReg) {
            for (var bi2 = 0; bi2 < bowReg.length; bi2++) {
                var candidate = bowReg[bi2];
                if (candidate.beh._holdingHand === '' || !candidate.beh._holdingHand) continue;
                if (candidate.beh._holdingHand === arrowHand) continue; // same hand
                var acceptedTags = candidate.beh._getAcceptedArrowTags ? String(candidate.beh._getAcceptedArrowTags()) : '';
                if (gdjs._webxrVrHolsterTagMatches && !gdjs._webxrVrHolsterTagMatches(arrowTag, acceptedTags)) continue;
                bowEntry = candidate;
                break;
            }
        }
    }

    if (!bowEntry) {
        // No compatible bow found
        if (beh._archeryState === 'nocked' || beh._archeryState === 'drawn') {
            beh._archeryState = 'disconnecting';
        } else if (beh._archeryState !== 'disconnecting') {
            beh._archeryState = 'held';
        }
        beh._nockedBowEntry = null;
        beh._drawDist = 0;
        beh._tightness = 0;
        if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
        continue;
    }

    // === Compute bow and arrow world positions (GDevelop coords) ===
    var bowObj = bowEntry.obj;
    var bowBeh = bowEntry.beh;
    var bowX = bowObj.getX(), bowY = bowObj.getY(), bowZ = bowObj.getZ();
    var arwX = obj.getX(), arwY = obj.getY(), arwZ = obj.getZ();

    var fwdLX = bowBeh._getBowForwardAxisX ? Number(bowBeh._getBowForwardAxisX()) : 0;
    var fwdLY = bowBeh._getBowForwardAxisY ? Number(bowBeh._getBowForwardAxisY()) : 1;
    var fwdLZ = bowBeh._getBowForwardAxisZ ? Number(bowBeh._getBowForwardAxisZ()) : 0;
    var bowThreeObj = bowObj.get3DRendererObject ? bowObj.get3DRendererObject() : null;
    var fwdW = new THREE.Vector3(fwdLX, -fwdLY, fwdLZ);
    if (bowThreeObj) {
        var bowWQ = new THREE.Quaternion();
        bowThreeObj.getWorldQuaternion(bowWQ);
        fwdW.applyQuaternion(bowWQ).normalize();
    }
    var fwdGdX = fwdW.x, fwdGdY = -fwdW.y, fwdGdZ = fwdW.z;
    var fwdLen = Math.sqrt(fwdGdX*fwdGdX + fwdGdY*fwdGdY + fwdGdZ*fwdGdZ);
    if (fwdLen > 0) { fwdGdX /= fwdLen; fwdGdY /= fwdLen; fwdGdZ /= fwdLen; }

    var drawDirX = -fwdGdX, drawDirY = -fwdGdY, drawDirZ = -fwdGdZ;

    // Drawing-hand position in GDevelop frame (anchor-converted, same pattern as nock check)
    var _ctrlEntry = gdjs._webxrVrControllers && gdjs._webxrVrControllers[arrowHand];
    var _anchor = gdjs._webxrVrAnchor;
    var _handGd = null;
    if (_ctrlEntry && _ctrlEntry.connected && _anchor) {
        var _wp = _ctrlEntry._adjustedWP ? _ctrlEntry._adjustedWP.clone() : new THREE.Vector3();
        if (!_ctrlEntry._adjustedWP && _ctrlEntry.grip) _ctrlEntry.grip.getWorldPosition(_wp);
        _handGd = { x: _anchor.x + (_wp.x - _anchor.threeX),
                    y: _anchor.y - (_wp.y - _anchor.threeY),
                    z: _anchor.z + (_wp.z - _anchor.threeZ) };
    }

    var dX = arwX - bowX, dY = arwY - bowY, dZ = arwZ - bowZ;
    // Hand-based draw vector — starts near 0 at nock time (hand at string), not offset by half-arrow-length
    var dHX = _handGd ? (_handGd.x - bowX) : dX;
    var dHY = _handGd ? (_handGd.y - bowY) : dY;
    var dHZ = _handGd ? (_handGd.z - bowZ) : dZ;

    var drawDist = Math.max(0, dHX*drawDirX + dHY*drawDirY + dHZ*drawDirZ);

    var latX = dHX - drawDist*drawDirX;
    var latY = dHY - drawDist*drawDirY;
    var latZ = dHZ - drawDist*drawDirZ;
    var lateralOffset = Math.sqrt(latX*latX + latY*latY + latZ*latZ);

    var latTolerance = Math.max(bowBeh._aabbHW || 0, bowBeh._aabbHH || 0, bowBeh._aabbHD || 0);
    var extraTol = bowBeh._getLateralDisconnectTolerance ? Number(bowBeh._getLateralDisconnectTolerance()) : 20;
    latTolerance += extraTol;

    var maxDraw = bowBeh._getMaxDrawDistance ? Number(bowBeh._getMaxDrawDistance()) : 60;
    var tightness = Math.min(1, drawDist / (maxDraw > 0 ? maxDraw : 60));

    // === Nock proximity check (drawing-hand → bowstring midpoint sphere, GDevelop frame) ===
    var snapRadius = bowBeh._getNockSnapRadius ? Number(bowBeh._getNockSnapRadius()) : 5;
    var canNock = false;
    var bsEnabledNock = bowBeh._getBowstringEnabled &&
        (bowBeh._getBowstringEnabled() === 'true' || bowBeh._getBowstringEnabled() === true);
    if (bsEnabledNock && bowThreeObj) {
        var _bsSX = bowBeh._getBowstringStartX ? Number(bowBeh._getBowstringStartX()) : 0;
        var _bsSY = bowBeh._getBowstringStartY ? Number(bowBeh._getBowstringStartY()) : 50;
        var _bsSZ = bowBeh._getBowstringStartZ ? Number(bowBeh._getBowstringStartZ()) : 0;
        var _bsEX = bowBeh._getBowstringEndX   ? Number(bowBeh._getBowstringEndX())   : 0;
        var _bsEY = bowBeh._getBowstringEndY   ? Number(bowBeh._getBowstringEndY())   : -50;
        var _bsEZ = bowBeh._getBowstringEndZ   ? Number(bowBeh._getBowstringEndZ())   : 0;
        var _bQ = bowThreeObj.quaternion;
        var _strS = bowThreeObj.position.clone().add(new THREE.Vector3(_bsSX, -_bsSY, _bsSZ).applyQuaternion(_bQ));
        var _strE = bowThreeObj.position.clone().add(new THREE.Vector3(_bsEX, -_bsEY, _bsEZ).applyQuaternion(_bQ));
        var _nockPoint = _strS.clone().lerp(_strE, 0.5);
        if (_handGd) {
            var _dgx = _handGd.x - _nockPoint.x;
            var _dgy = _handGd.y - _nockPoint.y;
            var _dgz = _handGd.z - _nockPoint.z;
            canNock = Math.sqrt(_dgx*_dgx + _dgy*_dgy + _dgz*_dgz) <= snapRadius;
        }
    } else if (_handGd && bowThreeObj) {
        var _dgx2 = _handGd.x - bowX;
        var _dgy2 = _handGd.y - bowY;
        var _dgz2 = _handGd.z - bowZ;
        canNock = Math.sqrt(_dgx2*_dgx2 + _dgy2*_dgy2 + _dgz2*_dgz2) <= snapRadius;
    } else {
        var arwHW = (obj.getWidth  ? obj.getWidth()  : 0) / 2;
        var arwHH = (obj.getHeight ? obj.getHeight() : 0) / 2;
        var arwHD = (obj.getDepth  ? obj.getDepth()  : 0) / 2;
        var arwMaxHalf = Math.max(arwHW, arwHH, arwHD);
        var centerDist = Math.sqrt(dX*dX + dY*dY + dZ*dZ);
        canNock = centerDist <= snapRadius + arwMaxHalf;
    }
    // Cache hand position for VrBow.doStepPostEvents bowstring break-point
    if (_handGd) { beh._nockHandX = _handGd.x; beh._nockHandY = _handGd.y; beh._nockHandZ = _handGd.z; }
    var bowHW = bowBeh._aabbHW || 0, bowHH = bowBeh._aabbHH || 0, bowHD = bowBeh._aabbHD || 0;

    // === State transitions ===
    var prevState = beh._archeryState;
    if (prevState === 'idle' || prevState === 'held') {
        if (canNock) {
            beh._archeryState = 'nocked';
            beh._nockedBowEntry = bowEntry;
            if (gdjs._webxrVrHolsterFireHaptic) {
                var nh_i = bowBeh._getNockHapticIntensity ? Number(bowBeh._getNockHapticIntensity()) : 0.4;
                var nh_d = bowBeh._getNockHapticDuration ? Number(bowBeh._getNockHapticDuration()) : 50;
                gdjs._webxrVrHolsterFireHaptic(arrowHand, nh_i, nh_d);
                gdjs._webxrVrHolsterFireHaptic(bowEntry.beh._holdingHand, nh_i, nh_d);
            }
        }
    } else if (prevState === 'nocked' || prevState === 'drawn') {
        if (lateralOffset > latTolerance) {
            beh._archeryState = 'disconnecting';
            beh._nockedBowEntry = null;
            if (gdjs._webxrVrHolsterFireHaptic) {
                var nh_i2 = bowBeh._getNockHapticIntensity ? Number(bowBeh._getNockHapticIntensity()) : 0.4;
                var nh_d2 = bowBeh._getNockHapticDuration ? Number(bowBeh._getNockHapticDuration()) : 50;
                gdjs._webxrVrHolsterFireHaptic(arrowHand, nh_i2, nh_d2);
                gdjs._webxrVrHolsterFireHaptic(bowEntry.beh._holdingHand, nh_i2, nh_d2);
            }
            if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
            beh._drawDist = 0; beh._tightness = 0;
            continue;
        }
        if (drawDist > 0) beh._archeryState = 'drawn';
        var ppu = bowBeh._getDrawHapticPulsePerUnit ? Number(bowBeh._getDrawHapticPulsePerUnit()) : 1;
        var clickN = Math.floor(drawDist * (ppu > 0 ? ppu : 1));
        if (clickN > (beh._lastDrawClickN || 0) && gdjs._webxrVrHolsterFireHaptic && arrowHand) {
            var dh_i = bowBeh._getDrawHapticIntensity ? Number(bowBeh._getDrawHapticIntensity()) : 0.15;
            var dh_d = bowBeh._getDrawHapticDuration ? Number(bowBeh._getDrawHapticDuration()) : 10;
            gdjs._webxrVrHolsterFireHaptic(arrowHand, dh_i, dh_d);
        }
        beh._lastDrawClickN = clickN;
        beh._drawDist = drawDist;
        beh._tightness = tightness;
        var maxSpd2 = bowBeh._getMaxArrowSpeed ? Number(bowBeh._getMaxArrowSpeed()) : 2500;
        var launchSpd2 = tightness * maxSpd2;
        // Use drawing-hand position for launch direction (arrow center is past the bow with hand-based nocking)
        var lDX = _handGd ? (_handGd.x - bowX) : dX;
        var lDY = _handGd ? (_handGd.y - bowY) : dY;
        var lDZ = _handGd ? (_handGd.z - bowZ) : dZ;
        var launchMag = Math.sqrt(lDX*lDX + lDY*lDY + lDZ*lDZ);
        if (launchMag > 0) {
            beh._launchDirX = -lDX / launchMag;
            beh._launchDirY = -lDY / launchMag;
            beh._launchDirZ = -lDZ / launchMag;
        }
        bowEntry.beh._currentArrowBeh = beh;
        // Store flag for postEvents visual alignment (moved there so rig is current).
        beh._launchMagOk = (launchMag > 1);

        // === Arc rendering ===
        var drawArc = beh._getDrawArc ? (beh._getDrawArc() === 'true' || beh._getDrawArc() === true) : false;
        if (drawArc && launchSpd2 > 0 && isPresenting) {
            beh._arcCalledThisFrame = true;
            if (!gdjs._webxrSuppressLaserUntil) gdjs._webxrSuppressLaserUntil = { left: 0, right: 0 };
            gdjs._webxrSuppressLaserUntil[arrowHand] = performance.now() + 50;
            // Arc starts at the bow-hand controller (same Three.js frame as _adjustedWP)
            var _bhHand = bowEntry.beh._holdingHand;
            var _bhEntry = _bhHand && gdjs._webxrVrControllers && gdjs._webxrVrControllers[_bhHand];
            var _bhWP = _bhEntry && _bhEntry._adjustedWP;
            var tStartX, tStartY, tStartZ;
            if (_bhWP) {
                tStartX = _bhWP.x; tStartY = _bhWP.y; tStartZ = _bhWP.z;
            } else {
                tStartX = anchor.threeX + (arwX - anchor.x);
                tStartY = anchor.threeY - (arwY - anchor.y);
                tStartZ = anchor.threeZ + (arwZ - anchor.z);
            }
            // Direction: drawing hand → bow hand in Three.js frame (always forward, no arrow-center dependency)
            var tDirX, tDirY, tDirZ;
            var _dwWP = _ctrlEntry && _ctrlEntry._adjustedWP;
            if (_bhWP && _dwWP) {
                var _adx = _bhWP.x - _dwWP.x, _ady = _bhWP.y - _dwWP.y, _adz = _bhWP.z - _dwWP.z;
                var _amag = Math.sqrt(_adx*_adx + _ady*_ady + _adz*_adz);
                if (_amag > 1) { tDirX = _adx/_amag; tDirY = _ady/_amag; tDirZ = _adz/_amag; }
                else { tDirX = beh._launchDirX; tDirY = -beh._launchDirY; tDirZ = beh._launchDirZ; }
            } else {
                tDirX = beh._launchDirX; tDirY = -beh._launchDirY; tDirZ = beh._launchDirZ;
            }
            var arcGrav = beh._getArcGravity ? Number(beh._getArcGravity()) : 980;
            var dt = 1/30, maxSteps = 90;
            var pos = new THREE.Vector3(tStartX, tStartY, tStartZ);
            var vel = new THREE.Vector3(tDirX * launchSpd2, tDirY * launchSpd2, tDirZ * launchSpd2);
            var gravVec = new THREE.Vector3(0, 0, -arcGrav);
            var arcPoints = [pos.clone()];
            for (var step = 0; step < maxSteps; step++) {
                vel.addScaledVector(gravVec, dt);
                pos.addScaledVector(vel, dt);
                arcPoints.push(pos.clone());
            }
            var visPoints = [];
            for (var vpi = 0; vpi < arcPoints.length; vpi++) {
                visPoints.push(new THREE.Vector3(arcPoints[vpi].x, -arcPoints[vpi].y, arcPoints[vpi].z));
            }
            var _arc = (beh._getArcColor ? String(beh._getArcColor()) : '0;255;0').split(';');
            var ar = Math.max(0,Math.min(255,+_arc[0]||0))/255;
            var ag = Math.max(0,Math.min(255,+_arc[1]||0))/255;
            var ab = Math.max(0,Math.min(255,+_arc[2]||0))/255;
            var arcScene = null;
            try {
                var alr = runtimeScene.getLayer('');
                var alr3d = alr.getRenderer ? alr.getRenderer() : null;
                if (alr3d) arcScene = alr3d._threeScene || alr3d.threeScene || (alr3d.getThreeScene ? alr3d.getThreeScene() : null);
            } catch(e) {}
            if (gdjs._webxrDrawArcLine) gdjs._webxrDrawArcLine(arcScene, visPoints, ar, ag, ab, beh);
        } else {
            if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
        }
    }
    // disconnecting — no-op until arrow is removed from scene
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.userFunc0x16781f0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.userFunc0x2b45060 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    // === Visual alignment when nocked/drawn (moved from preEvents so rig is current) ===
    if ((beh._archeryState === 'nocked' || beh._archeryState === 'drawn') && beh._launchMagOk) {
        var alignToBow = beh._getAlignToBowWhenNocked ? (beh._getAlignToBowWhenNocked() === 'true' || beh._getAlignToBowWhenNocked() === true) : true;
        if (alignToBow && beh._launchDirX !== undefined) {
            var arwThreeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
            if (arwThreeObj) {
                var aimDir = new THREE.Vector3(beh._launchDirX, -beh._launchDirY, beh._launchDirZ).normalize();
                var aimUp = new THREE.Vector3(0, 0, 1);
                if (Math.abs(aimDir.dot(aimUp)) > 0.99) aimUp.set(1, 0, 0);
                var aimMx = new THREE.Matrix4().lookAt(new THREE.Vector3(0,0,0), aimDir, aimUp);
                arwThreeObj.quaternion.setFromRotationMatrix(aimMx);
                arwThreeObj.updateMatrix();
            }
        }
    }
    // Override VrGrabbable throw with archery velocity (VrGrabbable.postEvents ran before this)
    if (beh._archeryState === 'flying' && beh._pendingLaunchVelX !== undefined) {
        var phys3 = null;
        try { phys3 = obj.getBehavior('Physics3D'); } catch(e3) {}
        if (phys3 && phys3._body && typeof Jolt !== 'undefined') {
            var bi3 = phys3._sharedData.bodyInterface;
            var id3 = phys3._body.GetID();
            bi3.SetLinearVelocity(id3, phys3.getVec3(beh._pendingLaunchVelX, beh._pendingLaunchVelY, beh._pendingLaunchVelZ));
            bi3.SetAngularVelocity(id3, phys3.getVec3(0, 0, 0));
        }
        beh._pendingLaunchVelX = undefined;
    }
    if (!beh._arcCalledThisFrame) {
        if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
    }
    beh._justLaunched = false;
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.userFunc0x2b45060(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.userFunc0x22985e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = eventsFunctionContext.getArgument('Tag');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setArrowTag(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.userFunc0x22985e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTag = function(Tag, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Tag") return Tag;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArrowTagContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.userFunc0x1205ac8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setDrawArc('true');
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.userFunc0x1205ac8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArc = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableDrawArcContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.userFunc0x17d6558 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setDrawArc('false');
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.userFunc0x17d6558(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArc = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableDrawArcContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.userFunc0x2b45010 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var s = String(eventsFunctionContext.getArgument('Color') || '').trim();
var r = 0, g = 255, b = 0;
var parts = s.split(';');
if (parts.length >= 3) {
    r = Math.max(0, Math.min(255, Math.round(Number(parts[0]))));
    g = Math.max(0, Math.min(255, Math.round(Number(parts[1]))));
    b = Math.max(0, Math.min(255, Math.round(Number(parts[2]))));
}
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setArcColor) beh._setArcColor(r + ';' + g + ';' + b);
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.userFunc0x2b45010(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColor = function(Color, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.userFunc0x12059d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = eventsFunctionContext.getArgument('Value');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setArcGravity(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.userFunc0x12059d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravity = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetArcGravityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.userFunc0x1678170 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = eventsFunctionContext.getArgument('Value');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setMinTightnessToFire(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.userFunc0x1678170(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFire = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMinTightnessToFireContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.userFunc0x2b45010 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setRotateAlongVelocity('true');
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.userFunc0x2b45010(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocity = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableRotateAlongVelocityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.userFunc0x270bbf8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setRotateAlongVelocity('false');
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.userFunc0x270bbf8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocity = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableRotateAlongVelocityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.userFunc0x12059d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setAlignToBowWhenNocked('true');
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.userFunc0x12059d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBow = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableAlignToBowContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.userFunc0x27fcee8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setAlignToBowWhenNocked('false');
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.userFunc0x27fcee8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBow = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableAlignToBowContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.userFunc0x1205a18 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._archeryState = 'held';
    beh._nockedBowEntry = null;
    beh._drawDist = 0;
    beh._tightness = 0;
    if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.userFunc0x1205a18(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.Cancel = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.CancelContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.userFunc0x205d888 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var launchSpd = Number(eventsFunctionContext.getArgument('Speed'));
var ldx = Number(eventsFunctionContext.getArgument('DirX'));
var ldy = Number(eventsFunctionContext.getArgument('DirY'));
var ldz = Number(eventsFunctionContext.getArgument('DirZ'));
var mag = Math.sqrt(ldx*ldx + ldy*ldy + ldz*ldz);
if (mag > 0) { ldx /= mag; ldy /= mag; ldz /= mag; }
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._archeryState = 'flying';
    beh._justLaunched = true;
    beh._launchDirX = ldx; beh._launchDirY = ldy; beh._launchDirZ = ldz;
    beh._nockedBowEntry = null;
    if (gdjs._webxrDisposeBowArcLine) gdjs._webxrDisposeBowArcLine(beh);
    var phys = null;
    try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
    if (phys && phys._body && typeof Jolt !== 'undefined') {
        var invScale = phys._sharedData.worldInvScale || 0.01;
        var bi = phys._sharedData.bodyInterface;
        var id = phys._body.GetID();
        bi.SetLinearVelocity(id, phys.getVec3(ldx * launchSpd * invScale, ldy * launchSpd * invScale, ldz * launchSpd * invScale));
        bi.SetAngularVelocity(id, phys.getVec3(0, 0, 0));
        bi.ActivateBody(id);
    }
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.userFunc0x205d888(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.Launch = function(Speed, DirX, DirY, DirZ, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Speed") return Speed;
if (argName === "DirX") return DirX;
if (argName === "DirY") return DirY;
if (argName === "DirZ") return DirZ;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.userFunc0x2b45060 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = false;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._archeryState !== 'idle') { result = true; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.userFunc0x2b45060(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeld = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsHeldContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.userFunc0x27fce98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = false;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && (beh._archeryState === 'nocked' || beh._archeryState === 'drawn')) { result = true; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.userFunc0x27fce98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNocked = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsNockedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.userFunc0x27fce98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = false;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._archeryState === 'drawn') { result = true; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.userFunc0x27fce98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawn = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawnContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.userFunc0x27fce98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = false;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._archeryState === 'flying') { result = true; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.userFunc0x27fce98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlying = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsFlyingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.userFunc0x27fcec0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = false;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._justLaunched === true) { result = true; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.userFunc0x27fcec0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunched = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustLaunchedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.userFunc0x1205a08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = false;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._getDrawArc && (beh._getDrawArc() === 'true' || beh._getDrawArc() === true)) { result = true; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.userFunc0x1205a08(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabled = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsDrawArcEnabledContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.userFunc0x27fcee8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = false;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._getRotateAlongVelocity && (beh._getRotateAlongVelocity() === 'true' || beh._getRotateAlongVelocity() === true)) { result = true; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.userFunc0x27fcee8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabled = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsRotateAlongVelocityEnabledContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.userFunc0x1678170 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = false;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._getAlignToBowWhenNocked && (beh._getAlignToBowWhenNocked() === 'true' || beh._getAlignToBowWhenNocked() === true)) { result = true; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.userFunc0x1678170(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabled = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsAlignToBowEnabledContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.userFunc0x2b45060 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 0;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._drawDist || 0; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.userFunc0x2b45060(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistance = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DrawDistanceContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.userFunc0x2b09250 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 0;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._tightness || 0; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.userFunc0x2b09250(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.Tightness = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.TightnessContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.userFunc0x2b45060 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 0;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) {
        var maxSpd = beh._nockedBowEntry ? (beh._nockedBowEntry.beh._getMaxArrowSpeed ? Number(beh._nockedBowEntry.beh._getMaxArrowSpeed()) : 2500) : 0;
        result = (beh._tightness || 0) * maxSpd;
        break;
    }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.userFunc0x2b45060(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeed = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.PredictedSpeedContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.userFunc0x27fce98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 0;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._launchDirX || 0; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.userFunc0x27fce98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirX = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.userFunc0x27fce98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 0;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._launchDirY || 0; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.userFunc0x27fce98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirY = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.userFunc0x27fce98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 0;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._launchDirZ || 0; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.userFunc0x27fce98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZ = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.LaunchDirZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.userFunc0x27fce98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 980;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._getArcGravity ? Number(beh._getArcGravity()) : 980; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.userFunc0x27fce98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravity = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcGravityContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.userFunc0x12059d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 0.1;
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._getMinTightnessToFire ? Number(beh._getMinTightnessToFire()) : 0.1; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.userFunc0x12059d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFire = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MinTightnessToFireContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.userFunc0x1205980 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getArcColor ? String(beh._getArcColor()) : '0;255;0';
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.userFunc0x1205980(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColor = function(Color, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.userFunc0x2b09250 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = '';
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._getArrowTag ? String(beh._getArrowTag()) : ''; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.userFunc0x2b09250(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTag = function(Tag, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Tag") return Tag;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArrowTagContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.userFunc0x2b45010 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var result = 'idle';
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) { result = beh._archeryState || 'idle'; break; }
}
eventsFunctionContext.returnValue = result;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.userFunc0x2b45010(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryState = function(State, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "State") return State;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.ArcheryStateContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.userFunc0x12059a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setSticky) beh._setSticky('true');
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.userFunc0x12059a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableSticky = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.EnableStickyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.userFunc0x17d6558 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setSticky) beh._setSticky('false');
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.userFunc0x17d6558(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableSticky = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.DisableStickyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.userFunc0x2b45078 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setMaxPenetrationFraction) beh._setMaxPenetrationFraction(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.userFunc0x2b45078(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFraction = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.SetMaxPenetrationFractionContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.userFunc0x16781f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i]; var beh = obj.getBehavior(behaviorName); if (!beh) continue;
    if (beh._archeryState !== 'stuck') continue;
    var physU = null; try { physU = obj.getBehavior('Physics3D'); } catch(eU) {}
    if (physU && physU._body && typeof Jolt !== 'undefined' && beh._origStickyMotionType !== null) {
        physU._sharedData.bodyInterface.SetMotionType(physU._body.GetID(), beh._origStickyMotionType, Jolt.EActivation_Activate);
        beh._origStickyMotionType = null;
    }
    beh._stuckHitObject = null; beh._archeryState = 'idle';
}
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.userFunc0x16781f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.Unstick = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.UnstickContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.userFunc0x2b45098 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getSticky ? (beh._getSticky() === 'true' || beh._getSticky() === true) : true) : false;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.userFunc0x2b45098(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabled = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStickyEnabledContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.userFunc0x270bbb8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._archeryState === 'stuck') : false;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.userFunc0x270bbb8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuck = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.userFunc0x17d64f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getMaxPenetrationFraction ? Number(beh._getMaxPenetrationFraction()) : 0.5) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.userFunc0x17d64f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFraction = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.MaxPenetrationFractionContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.userFunc0x2b45098 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? !!beh._justStuck : false;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.userFunc0x2b45098(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuck = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.JustStuckContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.userFunc0x270bbd8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitVelX || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.userFunc0x270bbd8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelX = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.userFunc0xef5c28 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitVelY || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.userFunc0xef5c28(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelY = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.userFunc0x2b45038 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitVelZ || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.userFunc0x2b45038(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZ = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitVelZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.userFunc0x270bb90 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitSpeed || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.userFunc0x270bb90(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeed = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.HitSpeedContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.userFunc0x1205a10 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var arrows = eventsFunctionContext.getObjects('Object');
var behName = eventsFunctionContext.getBehaviorName('Behavior');
var targetName = eventsFunctionContext.getArgument('Target');
var targets = runtimeScene.getObjects(targetName);
if (!targets || targets.length === 0) { eventsFunctionContext.returnValue = false; return; }
var hit = false;
for (var i = 0; i < arrows.length && !hit; i++) {
    var beh = arrows[i].getBehavior(behName);
    if (!beh || beh._archeryState !== 'stuck' || !beh._stuckHitObject) continue;
    for (var j = 0; j < targets.length && !hit; j++) {
        var tThree = targets[j].get3DRendererObject ? targets[j].get3DRendererObject() : null;
        if (!tThree) continue;
        var node = beh._stuckHitObject;
        while (node) {
            if (node === tThree) { hit = true; break; }
            node = node.parent;
        }
    }
}
eventsFunctionContext.returnValue = hit;
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.userFunc0x1205a10(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckIn = function(Target, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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
if (argName === "Target") return Target;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.IsStuckInContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext = {};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.userFunc0x1678270 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._stuckInObjectName || '') : '';
};
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.userFunc0x1678270(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectName = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Archery"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Archery"),
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

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow.prototype.StuckInObjectNameContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("WebXR_Archery::VrArrow", gdjs.evtsExt__WebXR_Archery__VrArrow.VrArrow);
