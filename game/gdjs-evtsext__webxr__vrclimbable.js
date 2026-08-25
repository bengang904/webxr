
gdjs.evtsExt__WebXR__VrClimbable = gdjs.evtsExt__WebXR__VrClimbable || {};

/**
 * Behavior generated from VR Climbable (WebXR)
 */
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable = class VrClimbable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.GrabRadius = behaviorData.GrabRadius !== undefined ? behaviorData.GrabRadius : Number("10") || 0;
    this._behaviorData.LaunchScale = behaviorData.LaunchScale !== undefined ? behaviorData.LaunchScale : Number("2") || 0;
    this._behaviorData.MantleBoost = behaviorData.MantleBoost !== undefined ? behaviorData.MantleBoost : Number("300") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.GrabRadius !== undefined)
      this._behaviorData.GrabRadius = behaviorOverriding.GrabRadius;
    if (behaviorOverriding.LaunchScale !== undefined)
      this._behaviorData.LaunchScale = behaviorOverriding.LaunchScale;
    if (behaviorOverriding.MantleBoost !== undefined)
      this._behaviorData.MantleBoost = behaviorOverriding.MantleBoost;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    GrabRadius: this._behaviorData.GrabRadius,
    LaunchScale: this._behaviorData.LaunchScale,
    MantleBoost: this._behaviorData.MantleBoost,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.GrabRadius !== undefined)
      this._behaviorData.GrabRadius = networkSyncData.props.GrabRadius;
    if (networkSyncData.props.LaunchScale !== undefined)
      this._behaviorData.LaunchScale = networkSyncData.props.LaunchScale;
    if (networkSyncData.props.MantleBoost !== undefined)
      this._behaviorData.MantleBoost = networkSyncData.props.MantleBoost;
  }

  // Properties:
  
  _getGrabRadius() {
    return this._behaviorData.GrabRadius !== undefined ? this._behaviorData.GrabRadius : Number("10") || 0;
  }
  _setGrabRadius(newValue) {
    this._behaviorData.GrabRadius = newValue;
  }
  _getLaunchScale() {
    return this._behaviorData.LaunchScale !== undefined ? this._behaviorData.LaunchScale : Number("2") || 0;
  }
  _setLaunchScale(newValue) {
    this._behaviorData.LaunchScale = newValue;
  }
  _getMantleBoost() {
    return this._behaviorData.MantleBoost !== undefined ? this._behaviorData.MantleBoost : Number("300") || 0;
  }
  _setMantleBoost(newValue) {
    this._behaviorData.MantleBoost = newValue;
  }
}

/**
 * Shared data generated from VR Climbable (WebXR)
 */
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.SharedData = class VrClimbableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrClimbableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrClimbableSharedData = new gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrClimbableSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.userFunc0x1d447c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._leftAnchor = null;
    beh._rightAnchor = null;
    beh._prevObjPos = null;
}
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.userFunc0x1d447c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.userFunc0x24b7c00 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;
var playerObj = gdjs._webxrVrAnchorObject;
if (!playerObj) return;
var dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
gdjs._webxrRtSceneRef = runtimeScene;
if (typeof gdjs._webxrDebugThrow === 'undefined') gdjs._webxrDebugThrow = true;
if (!gdjs._webxrDebugLines) gdjs._webxrDebugLines = {};
if (!gdjs._webxrDbgFn) {
    gdjs._webxrDbgFn = function(key, text) {
        if (!gdjs._webxrDebugThrow || !gdjs._webxrRtSceneRef) return;
        gdjs._webxrDebugLines[key] = text;
        var _o=['track.L','track.R','throw.enter','throw.cond','throw','throw.hist','throw.rb','throw.post','launch','launch.rb'];
        var _s = [];
        for (var _i = 0; _i < _o.length; _i++) {
            if (gdjs._webxrDebugLines[_o[_i]]) _s.push(gdjs._webxrDebugLines[_o[_i]]);
        }
        try { gdjs._webxrRtSceneRef.getGame().getVariables().get('VrDebug').setString(_s.join('\n')); } catch(e) {}
    };
}
if (!gdjs._webxrThrowVelFromHistory) {
    gdjs._webxrThrowVelFromHistory = function(vh, now, windowMs) {
        if (!vh || vh.length === 0) return {x:0, y:0, z:0, n:0};
        var _pk = null, _pkSq = -1, _pkT = 0;
        for (var _ti = 0; _ti < vh.length; _ti++) {
            var _age = now - vh[_ti].t;
            if (_age < 20 || _age > windowMs) continue;
            var _s = vh[_ti].vx*vh[_ti].vx + vh[_ti].vy*vh[_ti].vy + vh[_ti].vz*vh[_ti].vz;
            if (_s > _pkSq) { _pkSq = _s; _pk = vh[_ti]; _pkT = vh[_ti].t; }
        }
        if (!_pk) {
            var _sx=0,_sy=0,_sz=0,_n=0;
            for (var _tj = vh.length - 1; _tj >= 0 && _n < 3; _tj--) {
                if (now - vh[_tj].t < 20) continue;
                _sx += vh[_tj].vx; _sy += vh[_tj].vy; _sz += vh[_tj].vz; _n++;
            }
            return _n > 0 ? {x:_sx/_n, y:_sy/_n, z:_sz/_n, n:_n} : {x:0, y:0, z:0, n:0};
        }
        var _half = 45;
        var _ax=0,_ay=0,_az=0,_an=0;
        for (var _tk = 0; _tk < vh.length; _tk++) {
            if (Math.abs(vh[_tk].t - _pkT) > _half) continue;
            if (now - vh[_tk].t < 20) continue;
            _ax += vh[_tk].vx; _ay += vh[_tk].vy; _az += vh[_tk].vz; _an++;
        }
        if (_an === 0) return {x:_pk.vx, y:_pk.vy, z:_pk.vz, n:1};
        return {x:_ax/_an, y:_ay/_an, z:_az/_an, n:_an};
    };
}

function _getGamepadClimb(hand) {
    var sess = tr.xr.getSession ? tr.xr.getSession() : null;
    if (!sess || !sess.inputSources) return null;
    for (var si = 0; si < sess.inputSources.length; si++) {
        var src = sess.inputSources[si];
        if (src.handedness === hand && src.gamepad) return src.gamepad;
    }
    return null;
}

function _ctrlPosClimb(hand) {
    var entry = controllers[hand];
    if (!entry || !entry.grip || !entry.connected) return null;
    var wp = entry._adjustedWP ? entry._adjustedWP.clone() : new THREE.Vector3();
    if (!entry._adjustedWP) entry.grip.getWorldPosition(wp);
    return { x: anchor.x + (wp.x - anchor.threeX), y: anchor.y - (wp.y - anchor.threeY), z: anchor.z + (wp.z - anchor.threeZ) };
}

if (!gdjs._webxrVrHandIsClimbing) gdjs._webxrVrHandIsClimbing = { left: false, right: false };
gdjs._webxrVrHandIsClimbing.left = false;
gdjs._webxrVrHandIsClimbing.right = false;
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    // Track platform movement (for kinematic objects)
    var objNowX = obj.getX(), objNowY = obj.getY(), objNowZ = obj.getZ();
    var platDX = 0, platDY = 0, platDZ = 0;
    var physBeh = null;
    try { physBeh = obj.getBehavior('Physics3D'); } catch(e) {}
    if (physBeh && physBeh._bodyType === 'Kinematic' && beh._prevObjPos) {
        platDX = objNowX - beh._prevObjPos.x;
        platDY = objNowY - beh._prevObjPos.y;
        platDZ = objNowZ - beh._prevObjPos.z;
    }
    beh._prevObjPos = {x: objNowX, y: objNowY, z: objNowZ};

    // World-space AABB in GDevelop coords - uses Three.js Box3.setFromObject so
    // rotation, GLB pivot, and origin/center settings are all handled correctly.
    var _aabb = null;
    var _climbThree = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    var _climbRend  = obj.getRenderer ? obj.getRenderer() : null;
    if (_climbRend && _climbRend.ensureUpToDate) _climbRend.ensureUpToDate();
    if (_climbThree && typeof THREE !== 'undefined') {
        var _cb3 = new THREE.Box3().setFromObject(_climbThree);
        if (isFinite(_cb3.min.x) && isFinite(_cb3.max.x)) {
            _aabb = { minX: _cb3.min.x, maxX: _cb3.max.x,
                      minY: -_cb3.max.y, maxY: -_cb3.min.y,
                      minZ: _cb3.min.z, maxZ: _cb3.max.z };
        }
    }
    if (!_aabb) {
        var _chw = (obj.getWidth  ? obj.getWidth()  : 0) / 2;
        var _chh = (obj.getHeight ? obj.getHeight() : 0) / 2;
        var _chd = (obj.getDepth  ? obj.getDepth()  : 0) / 2;
        _aabb = { minX: obj.getX() - _chw, maxX: obj.getX() + _chw,
                  minY: obj.getY() - _chh, maxY: obj.getY() + _chh,
                  minZ: obj.getZ() - _chd, maxZ: obj.getZ() + _chd };
    }

    beh._isLaunching = false; // reset each frame
    var prevLeft = !!beh._leftAnchor;
    var prevRight = !!beh._rightAnchor;

    var grabRadius = beh._getGrabRadius ? Number(beh._getGrabRadius()) : 10;
    var hands = ['left', 'right'];
    for (var hi = 0; hi < hands.length; hi++) {
        var hand = hands[hi];
        var entry = controllers[hand];
        if (!entry) continue;
        var gp = _getGamepadClimb(hand);
        var curGrip = gp && gp.buttons[1] ? gp.buttons[1].value > 0.5 : false;
        var climbKey = '_climbPrevGrip_' + obj.id;
        var prevGrip = entry[climbKey] || false;
        entry[climbKey] = curGrip;
        var anchorSlot = (hand === 'left') ? '_leftAnchor' : '_rightAnchor';
        if (curGrip && !prevGrip) {
            var cp = _ctrlPosClimb(hand);
            if (cp) {
                var nearX = Math.max(_aabb.minX, Math.min(cp.x, _aabb.maxX));
                var nearY = Math.max(_aabb.minY, Math.min(cp.y, _aabb.maxY));
                var nearZ = Math.max(_aabb.minZ, Math.min(cp.z, _aabb.maxZ));
                var dd2 = Math.sqrt((cp.x-nearX)*(cp.x-nearX)+(cp.y-nearY)*(cp.y-nearY)+(cp.z-nearZ)*(cp.z-nearZ));
                if (dd2 <= grabRadius) { beh[anchorSlot] = {x: cp.x, y: cp.y, z: cp.z}; }
            }
        }
        if (!curGrip) { beh[anchorSlot] = null; }
        if (beh[anchorSlot]) gdjs._webxrVrHandIsClimbing[hand] = true;
    }

    var nowLeft = !!beh._leftAnchor;
    var nowRight = !!beh._rightAnchor;

    // ============ LAUNCH: both hands just released simultaneously ============
    if (prevLeft && prevRight && !nowLeft && !nowRight) {
        var lVh = (controllers.left && controllers.left._velHistory) || [];
        var rVh = (controllers.right && controllers.right._velHistory) || [];
        var ls = beh._getLaunchScale ? Number(beh._getLaunchScale()) : 2;
        var launchNow = performance.now();
        function _weightedAvgVel(vh) { return gdjs._webxrThrowVelFromHistory ? gdjs._webxrThrowVelFromHistory(vh, performance.now(), 200) : {x:0,y:0,z:0}; }
        var lAvg = _weightedAvgVel(lVh);
        var rAvg = _weightedAvgVel(rVh);
        var launchX = ((lAvg.x + rAvg.x) / 2) * ls;
        var launchY = ((lAvg.y + rAvg.y) / 2) * ls;
        var launchZ = ((lAvg.z + rAvg.z) / 2) * ls;
        // Clamp to max plausible speed (2000 units/s = 20 m/s at worldScale 100)
        var launchSpd = Math.sqrt(launchX*launchX + launchY*launchY + launchZ*launchZ);
        if (launchSpd > 2000) { var lsc = 2000/launchSpd; launchX*=lsc; launchY*=lsc; launchZ*=lsc; }
        // Mantle boost: player Z is above climbable top - add horizontal impulse over the ledge
        var climbableTopZ = _aabb.maxZ;
        var mantleBoost = beh._getMantleBoost ? Number(beh._getMantleBoost()) : 300;
        if (mantleBoost > 0 && playerObj.getZ() >= climbableTopZ) {
            // Direction from climbable center to player in GDevelop XY plane
            var _aabbCx = (_aabb.minX + _aabb.maxX) * 0.5;
            var _aabbCy = (_aabb.minY + _aabb.maxY) * 0.5;
            var mdx = playerObj.getX() - _aabbCx;
            var mdy = playerObj.getY() - _aabbCy;
            var mLen = Math.sqrt(mdx*mdx + mdy*mdy);
            if (mLen > 1e-6) { mdx /= mLen; mdy /= mLen; } else {
                var pRad = playerObj.getAngle ? playerObj.getAngle() * Math.PI / 180 : 0;
                mdx = Math.cos(pRad); mdy = Math.sin(pRad);
            }
            launchX += mdx * mantleBoost;
            launchY += mdy * mantleBoost;
        }
        // Store in GDevelop coords for expression accessors
        beh._launchVelX = launchX;
        beh._launchVelY = launchY;
        beh._launchVelZ = launchZ;
        beh._isLaunching = true;
        var playerPhysL = null;
        try { playerPhysL = playerObj.getBehavior('Physics3D'); } catch(e) {}
        if (playerPhysL && playerPhysL._body && typeof Jolt !== 'undefined') {
            gdjs._webxrDbgFn('launch',
                'LNC l=' + lAvg.x.toFixed(0) + ',' + lAvg.y.toFixed(0) + ',' + lAvg.z.toFixed(0) +
                ' r=' + rAvg.x.toFixed(0) + ',' + rAvg.y.toFixed(0) + ',' + rAvg.z.toFixed(0) +
                ' out=' + launchX.toFixed(0) + ',' + launchY.toFixed(0) + ',' + launchZ.toFixed(0));
            var _lBi = playerPhysL._sharedData.bodyInterface;
            var _lId = playerPhysL._body.GetID();
            var _lInv = playerPhysL._sharedData.worldInvScale;
            _lBi.SetLinearVelocity(_lId, playerPhysL.getVec3(launchX * _lInv, launchY * _lInv, launchZ * _lInv));
            _lBi.ActivateBody(_lId);
            try {
                var _rvL = playerPhysL._body.GetLinearVelocity();
                var _lWsc = playerPhysL._sharedData.worldScale;
                gdjs._webxrDbgFn('launch.rb', 'LRB set=' + launchX.toFixed(0) + ',' + launchY.toFixed(0) + ',' + launchZ.toFixed(0) + ' got=' + (_rvL.GetX()*_lWsc).toFixed(0) + ',' + (_rvL.GetY()*_lWsc).toFixed(0) + ',' + (_rvL.GetZ()*_lWsc).toFixed(0));
            } catch(e) { gdjs._webxrDbgFn('launch.rb', 'LRB err'); }
        }
        continue; // skip the movement+velocity-zero block
    }

    if (!nowLeft && !nowRight) continue; // nothing anchored, fall normally

    // Compute movement from anchored hands
    var moveX = 0, moveY = 0, moveZ = 0, moveCount = 0;
    var anchorsToUpdate = [];
    for (var hi2 = 0; hi2 < hands.length; hi2++) {
        var hand2 = hands[hi2];
        var aSlot = (hand2 === 'left') ? '_leftAnchor' : '_rightAnchor';
        if (!beh[aSlot]) continue;
        var cp2 = _ctrlPosClimb(hand2);
        if (!cp2) continue;
        moveX += beh[aSlot].x - cp2.x;
        moveY += beh[aSlot].y - cp2.y;
        moveZ += beh[aSlot].z - cp2.z;
        moveCount++;
        anchorsToUpdate.push({slot: aSlot, x: cp2.x, y: cp2.y, z: cp2.z});
    }
    if (moveCount > 0) { moveX /= moveCount; moveY /= moveCount; moveZ /= moveCount; }
    for (var ai = 0; ai < anchorsToUpdate.length; ai++) {
        var au = anchorsToUpdate[ai];
        beh[au.slot] = {x: au.x + moveX, y: au.y + moveY, z: au.z + moveZ};
    }

    // Apply movement to player via Bullet body teleport
    var newX = playerObj.getX() + moveX + platDX;
    var newY = playerObj.getY() + moveY + platDY;
    var newZ = playerObj.getZ() + moveZ + platDZ;
    playerObj.setX(newX); playerObj.setY(newY); playerObj.setZ(newZ);
    var playerPhys = null;
    try { playerPhys = playerObj.getBehavior('Physics3D'); } catch(e) {}
    if (playerPhys && playerPhys._body && typeof Jolt !== 'undefined') {
        var _pBi = playerPhys._sharedData.bodyInterface;
        var _pId = playerPhys._body.GetID();
        var _pInv = playerPhys._sharedData.worldInvScale;
        var _pCurQ = playerPhys._body.GetRotation();
        var _pRvec = playerPhys.getRVec3(newX * _pInv, newY * _pInv, newZ * _pInv);
        var _pQuat = playerPhys.getQuat(_pCurQ.GetX(), _pCurQ.GetY(), _pCurQ.GetZ(), _pCurQ.GetW());
        _pBi.SetPositionAndRotation(_pId, _pRvec, _pQuat, Jolt.EActivation_Activate);
        _pBi.SetLinearVelocity(_pId, playerPhys.getVec3(0, 0, 0));
        _pBi.SetAngularVelocity(_pId, playerPhys.getVec3(0, 0, 0));
    }
}
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.userFunc0x24b7c00(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.userFunc0x1221fc0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.userFunc0x1221fc0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.userFunc0x1221fc0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && (beh._leftAnchor || beh._rightAnchor));
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.userFunc0x1221fc0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbing = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsClimbingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.userFunc0x188d170 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._leftAnchor);
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.userFunc0x188d170(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchored = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLeftHandAnchoredContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.userFunc0x188d118 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._rightAnchor);
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.userFunc0x188d118(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchored = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsRightHandAnchoredContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.userFunc0x188d180 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._isLaunching);
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.userFunc0x188d180(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunching = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.IsLaunchingContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.userFunc0x188d1b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._launchVelX || 0) : 0;
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.userFunc0x188d1b8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.userFunc0x1221fc0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._launchVelY || 0) : 0;
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.userFunc0x1221fc0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.userFunc0x18e6538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._launchVelZ || 0) : 0;
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.userFunc0x18e6538(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchVelZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.userFunc0x1d447c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setGrabRadius) beh._setGrabRadius(String(v));
}
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.userFunc0x1d447c0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadius = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetGrabRadiusContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.userFunc0x188d0c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getGrabRadius ? Number(beh._getGrabRadius()) || 10 : 10;
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.userFunc0x188d0c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadius = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.GrabRadiusContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.userFunc0x18e64a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setLaunchScale) beh._setLaunchScale(String(v));
}
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.userFunc0x18e64a0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScale = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetLaunchScaleContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.userFunc0x18e6510 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getLaunchScale ? Number(beh._getLaunchScale()) : 0;
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.userFunc0x18e6510(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScale = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.LaunchScaleContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.userFunc0x188d120 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setMantleBoost) beh._setMantleBoost(String(v));
}
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.userFunc0x188d120(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoost = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.SetMantleBoostContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext = {};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.userFunc0x18e6510 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getMantleBoost ? Number(beh._getMantleBoost()) : 0;
};
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.userFunc0x18e6510(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoost = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrClimbable.VrClimbable.prototype.MantleBoostContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("WebXR::VrClimbable", gdjs.evtsExt__WebXR__VrClimbable.VrClimbable);
