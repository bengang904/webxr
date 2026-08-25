
gdjs.evtsExt__WebXR__VrInteractable = gdjs.evtsExt__WebXR__VrInteractable || {};

/**
 * Behavior generated from VR Interactable
 */
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable = class VrInteractable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Type = behaviorData.Type !== undefined ? behaviorData.Type : "Lever";
    this._behaviorData.Axis = behaviorData.Axis !== undefined ? behaviorData.Axis : "Z";
    this._behaviorData.Min = behaviorData.Min !== undefined ? behaviorData.Min : Number("0") || 0;
    this._behaviorData.Max = behaviorData.Max !== undefined ? behaviorData.Max : Number("90") || 0;
    this._behaviorData.Toggle = behaviorData.Toggle !== undefined ? behaviorData.Toggle : false;
    this._behaviorData.GrabRange = behaviorData.GrabRange !== undefined ? behaviorData.GrabRange : Number("50") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Type !== undefined)
      this._behaviorData.Type = behaviorOverriding.Type;
    if (behaviorOverriding.Axis !== undefined)
      this._behaviorData.Axis = behaviorOverriding.Axis;
    if (behaviorOverriding.Min !== undefined)
      this._behaviorData.Min = behaviorOverriding.Min;
    if (behaviorOverriding.Max !== undefined)
      this._behaviorData.Max = behaviorOverriding.Max;
    if (behaviorOverriding.Toggle !== undefined)
      this._behaviorData.Toggle = behaviorOverriding.Toggle;
    if (behaviorOverriding.GrabRange !== undefined)
      this._behaviorData.GrabRange = behaviorOverriding.GrabRange;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Type: this._behaviorData.Type,
    Axis: this._behaviorData.Axis,
    Min: this._behaviorData.Min,
    Max: this._behaviorData.Max,
    Toggle: this._behaviorData.Toggle,
    GrabRange: this._behaviorData.GrabRange,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Type !== undefined)
      this._behaviorData.Type = networkSyncData.props.Type;
    if (networkSyncData.props.Axis !== undefined)
      this._behaviorData.Axis = networkSyncData.props.Axis;
    if (networkSyncData.props.Min !== undefined)
      this._behaviorData.Min = networkSyncData.props.Min;
    if (networkSyncData.props.Max !== undefined)
      this._behaviorData.Max = networkSyncData.props.Max;
    if (networkSyncData.props.Toggle !== undefined)
      this._behaviorData.Toggle = networkSyncData.props.Toggle;
    if (networkSyncData.props.GrabRange !== undefined)
      this._behaviorData.GrabRange = networkSyncData.props.GrabRange;
  }

  // Properties:
  
  _getType() {
    return this._behaviorData.Type !== undefined ? this._behaviorData.Type : "Lever";
  }
  _setType(newValue) {
    this._behaviorData.Type = newValue;
  }
  _getAxis() {
    return this._behaviorData.Axis !== undefined ? this._behaviorData.Axis : "Z";
  }
  _setAxis(newValue) {
    this._behaviorData.Axis = newValue;
  }
  _getMin() {
    return this._behaviorData.Min !== undefined ? this._behaviorData.Min : Number("0") || 0;
  }
  _setMin(newValue) {
    this._behaviorData.Min = newValue;
  }
  _getMax() {
    return this._behaviorData.Max !== undefined ? this._behaviorData.Max : Number("90") || 0;
  }
  _setMax(newValue) {
    this._behaviorData.Max = newValue;
  }
  _getToggle() {
    return this._behaviorData.Toggle !== undefined ? this._behaviorData.Toggle : false;
  }
  _setToggle(newValue) {
    this._behaviorData.Toggle = newValue;
  }
  _toggleToggle() {
    this._setToggle(!this._getToggle());
  }
  _getGrabRange() {
    return this._behaviorData.GrabRange !== undefined ? this._behaviorData.GrabRange : Number("50") || 0;
  }
  _setGrabRange(newValue) {
    this._behaviorData.GrabRange = newValue;
  }
}

/**
 * Shared data generated from VR Interactable
 */
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.SharedData = class VrInteractableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrInteractableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrInteractableSharedData = new gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrInteractableSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.userFunc0x188d120 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    var minVal = beh._getMin ? Number(beh._getMin()) : 0;
    beh._state = 'idle';
    beh._value = 0;
    beh._physValue = minVal;
    beh._grabbingHand = null;
    beh._grabOriginThree = null;
    beh._grabOriginPhysValue = 0;
    beh._grabAxisWorld = null;
    beh._grabAxisLocal = null;
    beh._grabOriginObjQuat = null;
    beh._grabOriginObjPos = null;
    beh._grabObjCenter = null;
    beh._locked = false;
    beh._wasAtMin = false;
    beh._wasAtMax = false;
    beh._buttonToggleState = false;
}
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.userFunc0x188d120(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.userFunc0x1853ae8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._state = 'idle';
    beh._grabbingHand = null;
}
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.userFunc0x1853ae8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.userFunc0x188d0c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;

function _getGamepad(hand) {
    var sess = tr.xr.getSession ? tr.xr.getSession() : null;
    if (!sess || !sess.inputSources) return null;
    for (var si = 0; si < sess.inputSources.length; si++) {
        var src = sess.inputSources[si];
        if (src.handedness === hand && src.gamepad) return src.gamepad;
    }
    return null;
}

function _ctrlPos(hand) {
    var entry = controllers[hand];
    if (!entry || !entry.grip || !entry.connected) return null;
    var wp = entry._adjustedWP ? entry._adjustedWP.clone() : new THREE.Vector3();
    if (!entry._adjustedWP) entry.grip.getWorldPosition(wp);
    return { x: anchor.x + (wp.x - anchor.threeX), y: anchor.y - (wp.y - anchor.threeY), z: anchor.z + (wp.z - anchor.threeZ) };
}

function _ctrlThreePos(hand) {
    var entry = controllers[hand];
    if (!entry || !entry.grip || !entry.connected) return null;
    var wp = entry._adjustedWP ? entry._adjustedWP.clone() : new THREE.Vector3();
    if (!entry._adjustedWP) entry.grip.getWorldPosition(wp);
    return wp;
}

function _haptic(hand, intensity, durationMs) {
    var sess = tr.xr.getSession ? tr.xr.getSession() : null;
    if (!sess || !sess.inputSources) return;
    for (var si = 0; si < sess.inputSources.length; si++) {
        var src = sess.inputSources[si];
        if (src.handedness === hand && src.gamepad &&
            src.gamepad.hapticActuators && src.gamepad.hapticActuators.length > 0) {
            src.gamepad.hapticActuators[0].pulse(intensity, durationMs);
            return;
        }
    }
}

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    var typeProp = beh._getType ? beh._getType() : 'Lever';
    var axisProp = beh._getAxis ? beh._getAxis() : 'Z';
    var minVal = beh._getMin ? Number(beh._getMin()) : 0;
    var maxVal = beh._getMax ? Number(beh._getMax()) : 90;
    var toggleProp = beh._getToggle ? (beh._getToggle() === 'true' || beh._getToggle() === true) : false;
    var grabRange = beh._getGrabRange ? Number(beh._getGrabRange()) : 50;
    if (maxVal === minVal) maxVal = minVal + 1;

    // ============ IDLE ============
    if (beh._state === 'idle') {
        if (beh._locked) continue;
        var hands = ['left', 'right'];
        for (var hi = 0; hi < hands.length; hi++) {
            var hand = hands[hi];
            var entry = controllers[hand];
            if (!entry || !entry.connected) continue;
            var gp = _getGamepad(hand);
            if (!gp) continue;
            var curGrip = gp.buttons[1] ? gp.buttons[1].value > 0.5 : false;
            var prevKey = '_interactPrevGrip_' + obj.id;
            var prevGrip = entry[prevKey] || false;
            entry[prevKey] = curGrip;
            if (!curGrip || prevGrip) continue;
            var _iBusy = false;
            if (gdjs._webxrVrGrabbableRegistry) {
                for (var _ibi = 0; _ibi < gdjs._webxrVrGrabbableRegistry.length; _ibi++) {
                    if (gdjs._webxrVrGrabbableRegistry[_ibi].beh._grabbingHand === hand) { _iBusy = true; break; }
                }
            }
            if (_iBusy) continue;

            // Toggle button: second press unlatches immediately
            if (typeProp === 'Button' && toggleProp && beh._buttonToggleState) {
                beh._buttonToggleState = false;
                beh._physValue = minVal;
                beh._value = 0;
                beh._wasAtMin = false;
                beh._wasAtMax = false;
                if (beh._grabOriginObjPos && beh._grabAxisWorld) {
                    var ulDisp = minVal - beh._grabOriginPhysValue;
                    obj.setX(beh._grabOriginObjPos.x + beh._grabAxisWorld.x * ulDisp);
                    obj.setY(beh._grabOriginObjPos.y - beh._grabAxisWorld.y * ulDisp);
                    obj.setZ(beh._grabOriginObjPos.z + beh._grabAxisWorld.z * ulDisp);
                }
                break;
            }

            // Proximity check - nearest point on AABB to controller
            var cp = _ctrlPos(hand);
            if (!cp) continue;
            var hw = obj.getWidth ? obj.getWidth()/2 : 0;
            var hh = obj.getHeight ? obj.getHeight()/2 : 0;
            var hd = obj.getDepth ? obj.getDepth()/2 : 0;
            var nearX = Math.max(obj.getX()-hw, Math.min(cp.x, obj.getX()+hw));
            var nearY = Math.max(obj.getY()-hh, Math.min(cp.y, obj.getY()+hh));
            var nearZ = Math.max(obj.getZ()-hd, Math.min(cp.z, obj.getZ()+hd));
            var ddx = nearX - cp.x, ddy = nearY - cp.y, ddz = nearZ - cp.z;
            var grabDist = Math.sqrt(ddx*ddx + ddy*ddy + ddz*ddz);
            if (grabDist > grabRange) continue;

            // Enter interacting state
            var ctrlT = _ctrlThreePos(hand);
            if (!ctrlT) continue;
            beh._state = 'interacting';
            beh._grabbingHand = hand;
            beh._grabOriginThree = ctrlT.clone();
            beh._grabOriginPhysValue = beh._physValue;
            beh._grabOriginObjPos = { x: obj.getX(), y: obj.getY(), z: obj.getZ() };

            // Compute object quaternion from GDevelop rotation (ZYX Euler)
            var orx = obj.getRotationX ? obj.getRotationX() * Math.PI / 180 : 0;
            var ory = obj.getRotationY ? obj.getRotationY() * Math.PI / 180 : 0;
            var orz = obj.getAngle() * Math.PI / 180;
            beh._grabOriginObjQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(orx, ory, orz, 'ZYX'));

            // World-space axis from object-local axis
            var axisLocalVec = axisProp === 'X' ? new THREE.Vector3(1,0,0) : axisProp === 'Y' ? new THREE.Vector3(0,1,0) : new THREE.Vector3(0,0,1);
            beh._grabAxisLocal = axisLocalVec.clone();
            beh._grabAxisWorld = axisLocalVec.clone().applyQuaternion(beh._grabOriginObjQuat).normalize();
            beh._grabAxisWorld.y = -beh._grabAxisWorld.y; // GDevelop Y-down -> THREE.js Y-up

            // Object pivot in THREE.js coords (for Lever)
            beh._grabObjCenter = new THREE.Vector3(
                anchor.threeX + (obj.getX() - anchor.x),
                anchor.threeY - (obj.getY() - anchor.y),
                anchor.threeZ + (obj.getZ() - anchor.z)
            );
            break;
        }
    }

    // ============ INTERACTING ============
    else if (beh._state === 'interacting') {
        var gHand = beh._grabbingHand;
        var gEntry = controllers[gHand];
        var gGp = _getGamepad(gHand);
        var gCurGrip = gGp && gGp.buttons[1] ? gGp.buttons[1].value > 0.5 : false;
        if (gEntry) gEntry['_interactPrevGrip_' + obj.id] = gCurGrip;

        if (!gCurGrip) {
            // Released
            if (typeProp === 'Button' && !toggleProp) {
                beh._physValue = minVal;
                beh._value = 0;
                beh._wasAtMin = false;
                beh._wasAtMax = false;
                if (beh._grabOriginObjPos && beh._grabAxisWorld) {
                    var spDisp = minVal - beh._grabOriginPhysValue;
                    obj.setX(beh._grabOriginObjPos.x + beh._grabAxisWorld.x * spDisp);
                    obj.setY(beh._grabOriginObjPos.y - beh._grabAxisWorld.y * spDisp);
                    obj.setZ(beh._grabOriginObjPos.z + beh._grabAxisWorld.z * spDisp);
                }
            }
            beh._state = 'idle';
            beh._grabbingHand = null;
            continue;
        }

        var ctrlT2 = _ctrlThreePos(gHand);
        if (!ctrlT2) continue;
        var axisW = beh._grabAxisWorld;
        if (!axisW) continue;

        var newPhys;
        if (typeProp === 'Slider' || typeProp === 'Button') {
            var delta = new THREE.Vector3().subVectors(ctrlT2, beh._grabOriginThree);
            var proj = delta.dot(axisW);
            newPhys = beh._grabOriginPhysValue + proj;
        } else {
            // Lever: positional arc angle around object pivot
            var objCtr = beh._grabObjCenter;
            var toOrigin = new THREE.Vector3().subVectors(beh._grabOriginThree, objCtr);
            var toCurrent = new THREE.Vector3().subVectors(ctrlT2, objCtr);
            toOrigin.sub(axisW.clone().multiplyScalar(toOrigin.dot(axisW)));
            toCurrent.sub(axisW.clone().multiplyScalar(toCurrent.dot(axisW)));
            var toOLen = toOrigin.length(), toCLen = toCurrent.length();
            if (toOLen < 0.001 || toCLen < 0.001) {
                newPhys = beh._grabOriginPhysValue;
            } else {
                toOrigin.divideScalar(toOLen);
                toCurrent.divideScalar(toCLen);
                var crossV = new THREE.Vector3().crossVectors(toOrigin, toCurrent);
                var sinA = crossV.dot(axisW);
                var cosA = toOrigin.dot(toCurrent);
                newPhys = beh._grabOriginPhysValue + Math.atan2(sinA, cosA) * 180 / Math.PI;
            }
        }

        newPhys = Math.max(minVal, Math.min(maxVal, newPhys));
        var newNorm = (newPhys - minVal) / (maxVal - minVal);

        // Haptic pulse on edge crossing
        var atMin = newNorm <= 0.01;
        var atMax = newNorm >= 0.99;
        if ((atMin && !beh._wasAtMin) || (atMax && !beh._wasAtMax)) {
            _haptic(gHand, 0.5, 50);
        }
        beh._wasAtMin = atMin;
        beh._wasAtMax = atMax;
        beh._physValue = newPhys;
        beh._value = newNorm;

        // Auto-latch toggle button
        if (typeProp === 'Button' && toggleProp && newNorm >= 0.99) {
            beh._buttonToggleState = true;
            beh._state = 'idle';
            beh._grabbingHand = null;
        }

        // Apply object transform
        if (typeProp === 'Slider' || typeProp === 'Button') {
            var op = beh._grabOriginObjPos;
            var disp = newPhys - beh._grabOriginPhysValue;
            obj.setX(op.x + axisW.x * disp);
            obj.setY(op.y - axisW.y * disp);
            obj.setZ(op.z + axisW.z * disp);
        } else {
            var axL = beh._grabAxisLocal;
            var dq = new THREE.Quaternion().setFromAxisAngle(axL, (newPhys - beh._grabOriginPhysValue) * Math.PI / 180);
            var fq = beh._grabOriginObjQuat.clone().multiply(dq);
            var eu = new THREE.Euler().setFromQuaternion(fq, 'ZYX');
            obj.setAngle(eu.z * 180 / Math.PI);
            if (obj.setRotationX) obj.setRotationX(eu.x * 180 / Math.PI);
            if (obj.setRotationY) obj.setRotationY(eu.y * 180 / Math.PI);
        }
    }
}
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.userFunc0x188d0c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.userFunc0x28ef158 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.userFunc0x28ef158(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.userFunc0x28ef140 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._state === 'interacting');
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.userFunc0x28ef140(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteracting = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsInteractingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.userFunc0x28ef108 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._value <= 0.01);
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.userFunc0x28ef108(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMin = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMinContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.userFunc0x28ef108 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._value >= 0.99);
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.userFunc0x28ef108(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMax = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.IsAtMaxContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.userFunc0x28ef118 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._value || 0) : 0;
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.userFunc0x28ef118(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValue = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GetValueContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.userFunc0x28ef0d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._locked = true;
    if (beh._state === 'interacting') { beh._state = 'idle'; beh._grabbingHand = null; }
}
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.userFunc0x28ef0d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.Lock = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.LockContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.userFunc0x28ef0d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._locked = false;
}
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.userFunc0x28ef0d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.Unlock = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.UnlockContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.userFunc0x28ef108 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getType ? String(beh._getType()) : 'Lever';
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.userFunc0x28ef108(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.Type = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.TypeContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.userFunc0x28ef108 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getAxis ? String(beh._getAxis()) : 'Z';
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.userFunc0x28ef108(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.Axis = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.AxisContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.userFunc0x28ef168 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMin) beh._setMin(String(v));
}
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.userFunc0x28ef168(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMin = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMinContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.userFunc0x28ef140 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getMin ? Number(beh._getMin()) : 0;
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.userFunc0x28ef140(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.Min = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MinContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.userFunc0x28ef168 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMax) beh._setMax(String(v));
}
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.userFunc0x28ef168(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMax = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetMaxContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.userFunc0x28ef140 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getMax ? Number(beh._getMax()) : 0;
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.userFunc0x28ef140(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.Max = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.MaxContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.userFunc0x28ef140 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getToggle ? beh._getToggle() : 'false';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.userFunc0x28ef140(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.Toggle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.ToggleContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.userFunc0x28ef1a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setGrabRange) beh._setGrabRange(String(v));
}
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.userFunc0x28ef1a0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRange = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.SetGrabRangeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext = {};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.userFunc0x28ef140 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getGrabRange ? Number(beh._getGrabRange()) || 50 : 50;
};
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.userFunc0x28ef140(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRange = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrInteractable.VrInteractable.prototype.GrabRangeContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("WebXR::VrInteractable", gdjs.evtsExt__WebXR__VrInteractable.VrInteractable);
