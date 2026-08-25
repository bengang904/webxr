
gdjs.evtsExt__WebXR__VrHolster = gdjs.evtsExt__WebXR__VrHolster || {};

/**
 * Behavior generated from VR Holster
 */
gdjs.evtsExt__WebXR__VrHolster.VrHolster = class VrHolster extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrHolster.VrHolster.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.AcceptedTags = behaviorData.AcceptedTags !== undefined ? behaviorData.AcceptedTags : "";
    this._behaviorData.HoldingHapticIntensity = behaviorData.HoldingHapticIntensity !== undefined ? behaviorData.HoldingHapticIntensity : Number("0.4") || 0;
    this._behaviorData.HoldingHapticDuration = behaviorData.HoldingHapticDuration !== undefined ? behaviorData.HoldingHapticDuration : Number("40") || 0;
    this._behaviorData.EmptyHandHapticIntensity = behaviorData.EmptyHandHapticIntensity !== undefined ? behaviorData.EmptyHandHapticIntensity : Number("0.25") || 0;
    this._behaviorData.EmptyHandHapticDuration = behaviorData.EmptyHandHapticDuration !== undefined ? behaviorData.EmptyHandHapticDuration : Number("25") || 0;
    this._behaviorData.MaxItems = behaviorData.MaxItems !== undefined ? behaviorData.MaxItems : Number("1") || 0;
    this._behaviorData.StackOffsetX = behaviorData.StackOffsetX !== undefined ? behaviorData.StackOffsetX : Number("0") || 0;
    this._behaviorData.StackOffsetY = behaviorData.StackOffsetY !== undefined ? behaviorData.StackOffsetY : Number("0") || 0;
    this._behaviorData.StackOffsetZ = behaviorData.StackOffsetZ !== undefined ? behaviorData.StackOffsetZ : Number("0") || 0;
    this._behaviorData.AllowMagneticRetrieval = behaviorData.AllowMagneticRetrieval !== undefined ? behaviorData.AllowMagneticRetrieval : false;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.AcceptedTags !== undefined)
      this._behaviorData.AcceptedTags = behaviorOverriding.AcceptedTags;
    if (behaviorOverriding.HoldingHapticIntensity !== undefined)
      this._behaviorData.HoldingHapticIntensity = behaviorOverriding.HoldingHapticIntensity;
    if (behaviorOverriding.HoldingHapticDuration !== undefined)
      this._behaviorData.HoldingHapticDuration = behaviorOverriding.HoldingHapticDuration;
    if (behaviorOverriding.EmptyHandHapticIntensity !== undefined)
      this._behaviorData.EmptyHandHapticIntensity = behaviorOverriding.EmptyHandHapticIntensity;
    if (behaviorOverriding.EmptyHandHapticDuration !== undefined)
      this._behaviorData.EmptyHandHapticDuration = behaviorOverriding.EmptyHandHapticDuration;
    if (behaviorOverriding.MaxItems !== undefined)
      this._behaviorData.MaxItems = behaviorOverriding.MaxItems;
    if (behaviorOverriding.StackOffsetX !== undefined)
      this._behaviorData.StackOffsetX = behaviorOverriding.StackOffsetX;
    if (behaviorOverriding.StackOffsetY !== undefined)
      this._behaviorData.StackOffsetY = behaviorOverriding.StackOffsetY;
    if (behaviorOverriding.StackOffsetZ !== undefined)
      this._behaviorData.StackOffsetZ = behaviorOverriding.StackOffsetZ;
    if (behaviorOverriding.AllowMagneticRetrieval !== undefined)
      this._behaviorData.AllowMagneticRetrieval = behaviorOverriding.AllowMagneticRetrieval;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    AcceptedTags: this._behaviorData.AcceptedTags,
    HoldingHapticIntensity: this._behaviorData.HoldingHapticIntensity,
    HoldingHapticDuration: this._behaviorData.HoldingHapticDuration,
    EmptyHandHapticIntensity: this._behaviorData.EmptyHandHapticIntensity,
    EmptyHandHapticDuration: this._behaviorData.EmptyHandHapticDuration,
    MaxItems: this._behaviorData.MaxItems,
    StackOffsetX: this._behaviorData.StackOffsetX,
    StackOffsetY: this._behaviorData.StackOffsetY,
    StackOffsetZ: this._behaviorData.StackOffsetZ,
    AllowMagneticRetrieval: this._behaviorData.AllowMagneticRetrieval,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.AcceptedTags !== undefined)
      this._behaviorData.AcceptedTags = networkSyncData.props.AcceptedTags;
    if (networkSyncData.props.HoldingHapticIntensity !== undefined)
      this._behaviorData.HoldingHapticIntensity = networkSyncData.props.HoldingHapticIntensity;
    if (networkSyncData.props.HoldingHapticDuration !== undefined)
      this._behaviorData.HoldingHapticDuration = networkSyncData.props.HoldingHapticDuration;
    if (networkSyncData.props.EmptyHandHapticIntensity !== undefined)
      this._behaviorData.EmptyHandHapticIntensity = networkSyncData.props.EmptyHandHapticIntensity;
    if (networkSyncData.props.EmptyHandHapticDuration !== undefined)
      this._behaviorData.EmptyHandHapticDuration = networkSyncData.props.EmptyHandHapticDuration;
    if (networkSyncData.props.MaxItems !== undefined)
      this._behaviorData.MaxItems = networkSyncData.props.MaxItems;
    if (networkSyncData.props.StackOffsetX !== undefined)
      this._behaviorData.StackOffsetX = networkSyncData.props.StackOffsetX;
    if (networkSyncData.props.StackOffsetY !== undefined)
      this._behaviorData.StackOffsetY = networkSyncData.props.StackOffsetY;
    if (networkSyncData.props.StackOffsetZ !== undefined)
      this._behaviorData.StackOffsetZ = networkSyncData.props.StackOffsetZ;
    if (networkSyncData.props.AllowMagneticRetrieval !== undefined)
      this._behaviorData.AllowMagneticRetrieval = networkSyncData.props.AllowMagneticRetrieval;
  }

  // Properties:
  
  _getAcceptedTags() {
    return this._behaviorData.AcceptedTags !== undefined ? this._behaviorData.AcceptedTags : "";
  }
  _setAcceptedTags(newValue) {
    this._behaviorData.AcceptedTags = newValue;
  }
  _getHoldingHapticIntensity() {
    return this._behaviorData.HoldingHapticIntensity !== undefined ? this._behaviorData.HoldingHapticIntensity : Number("0.4") || 0;
  }
  _setHoldingHapticIntensity(newValue) {
    this._behaviorData.HoldingHapticIntensity = newValue;
  }
  _getHoldingHapticDuration() {
    return this._behaviorData.HoldingHapticDuration !== undefined ? this._behaviorData.HoldingHapticDuration : Number("40") || 0;
  }
  _setHoldingHapticDuration(newValue) {
    this._behaviorData.HoldingHapticDuration = newValue;
  }
  _getEmptyHandHapticIntensity() {
    return this._behaviorData.EmptyHandHapticIntensity !== undefined ? this._behaviorData.EmptyHandHapticIntensity : Number("0.25") || 0;
  }
  _setEmptyHandHapticIntensity(newValue) {
    this._behaviorData.EmptyHandHapticIntensity = newValue;
  }
  _getEmptyHandHapticDuration() {
    return this._behaviorData.EmptyHandHapticDuration !== undefined ? this._behaviorData.EmptyHandHapticDuration : Number("25") || 0;
  }
  _setEmptyHandHapticDuration(newValue) {
    this._behaviorData.EmptyHandHapticDuration = newValue;
  }
  _getMaxItems() {
    return this._behaviorData.MaxItems !== undefined ? this._behaviorData.MaxItems : Number("1") || 0;
  }
  _setMaxItems(newValue) {
    this._behaviorData.MaxItems = newValue;
  }
  _getStackOffsetX() {
    return this._behaviorData.StackOffsetX !== undefined ? this._behaviorData.StackOffsetX : Number("0") || 0;
  }
  _setStackOffsetX(newValue) {
    this._behaviorData.StackOffsetX = newValue;
  }
  _getStackOffsetY() {
    return this._behaviorData.StackOffsetY !== undefined ? this._behaviorData.StackOffsetY : Number("0") || 0;
  }
  _setStackOffsetY(newValue) {
    this._behaviorData.StackOffsetY = newValue;
  }
  _getStackOffsetZ() {
    return this._behaviorData.StackOffsetZ !== undefined ? this._behaviorData.StackOffsetZ : Number("0") || 0;
  }
  _setStackOffsetZ(newValue) {
    this._behaviorData.StackOffsetZ = newValue;
  }
  _getAllowMagneticRetrieval() {
    return this._behaviorData.AllowMagneticRetrieval !== undefined ? this._behaviorData.AllowMagneticRetrieval : false;
  }
  _setAllowMagneticRetrieval(newValue) {
    this._behaviorData.AllowMagneticRetrieval = newValue;
  }
  _toggleAllowMagneticRetrieval() {
    this._setAllowMagneticRetrieval(!this._getAllowMagneticRetrieval());
  }
}

/**
 * Shared data generated from VR Holster
 */
gdjs.evtsExt__WebXR__VrHolster.VrHolster.SharedData = class VrHolsterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrHolster.VrHolster.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrHolsterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrHolsterSharedData = new gdjs.evtsExt__WebXR__VrHolster.VrHolster.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrHolsterSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.userFunc0x1ad3bd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._holsterRegEntry = null;
    beh._hoverMesh = null;
    beh._insideState = {};
    if (!gdjs._webxrVrHolsterHelpersInstalled) {
        gdjs._webxrVrHolsterHelpersInstalled = true;
        gdjs._webxrVrHolsterRegistry = gdjs._webxrVrHolsterRegistry || [];
        gdjs._webxrVrHolsterFireHaptic = function(hand, intensity, durationMs) {
            var sc = gdjs._webxrRtSceneRef;
            if (!sc) return;
            var tr2 = sc.getGame().getRenderer().getThreeRenderer();
            if (!tr2 || !tr2.xr) return;
            var sess = tr2.xr.getSession ? tr2.xr.getSession() : null;
            if (!sess) return;
            var srcs = sess.inputSources || [];
            for (var _si = 0; _si < srcs.length; _si++) {
                var _src = srcs[_si];
                if (_src.handedness === hand && _src.gamepad &&
                    _src.gamepad.hapticActuators && _src.gamepad.hapticActuators.length > 0) {
                    _src.gamepad.hapticActuators[0].pulse(intensity, durationMs);
                    break;
                }
            }
        };
        gdjs._webxrVrHolsterTagMatches = function(grabbableTag, acceptedCsv) {
            if (!acceptedCsv || acceptedCsv.trim() === '') return true;
            if (!grabbableTag || grabbableTag.trim() === '') return false;
            var acc = acceptedCsv.split(',');
            for (var _ti = 0; _ti < acc.length; _ti++) {
                if (acc[_ti].trim().toLowerCase() === grabbableTag.trim().toLowerCase()) return true;
            }
            return false;
        };
        gdjs._webxrVrHolsterTryDockOnRelease = function(obj, beh, hand, handEntry) {
            if (gdjs._webxrArcheryActive && gdjs._webxrArcheryActive[hand] > performance.now()) return false;
            if (beh._noRedockUntil && beh._noRedockUntil > performance.now()) return false;
            var reg = gdjs._webxrVrHolsterRegistry;
            if (!reg || !handEntry) return false;
            var wp = handEntry._adjustedWP;
            if (!wp) return false;
            var tag = beh._getHolsterTag ? beh._getHolsterTag() : '';
            var _tAnc = gdjs._webxrVrAnchor;
            // Pass 1: hand in zone bounds (preferred - deliberate release), pick closest zone to hand
            var _p1Best = null, _p1BestDist = Infinity;
            var _holdBonus = 10;
            for (var _ri = 0; _ri < reg.length; _ri++) {
                var _e = reg[_ri];
                if (gdjs._webxrVrHolsterIsFull(_e)) continue;
                if (!gdjs._webxrVrHolsterTagMatches(tag, _e.acceptedTags || '')) continue;
                if (_e.source === 'vrDoorKeyZone') {
                    var _dkBeh = null; try { _dkBeh = obj.getBehavior('VrKey'); } catch(_ek) {}
                    if (!_dkBeh) continue;
                    var _dkTag = _dkBeh._getKeyTag ? String(_dkBeh._getKeyTag()) : '';
                    if (!gdjs._webxrVrHolsterTagMatches(_dkTag, _e.acceptedKeyTags || '')) continue;
                    if (!_tAnc) continue;
                    var _hGdXdk = _tAnc.x + (wp.x - _tAnc.threeX);
                    var _hGdYdk = _tAnc.y - (wp.y - _tAnc.threeY);
                    var _hGdZdk = _tAnc.z + (wp.z - _tAnc.threeZ);
                    var _dxDk = _hGdXdk - (_e.gdX||0), _dyDk = _hGdYdk - (_e.gdY||0), _dzDk = _hGdZdk - (_e.gdZ||0);
                    var _p1Dist = Math.sqrt(_dxDk*_dxDk + _dyDk*_dyDk + _dzDk*_dzDk);
                    if (_p1Dist <= _e.radius + _holdBonus && _p1Dist < _p1BestDist) { _p1BestDist = _p1Dist; _p1Best = _e; }
                    continue;
                }
                var _hit;
                var _p1Dist = Infinity;
                if (_e.holsterObj) {
                    var _hO = _e.holsterObj;
                    var _hOWP = _e.worldPos;
                    var _hORadius = Math.max(_hO.getWidth(), _hO.getHeight(), _hO.getDepth()) / 2 + _holdBonus;
                    var _h2dx = wp.x - _hOWP.x, _h2dy = wp.y - _hOWP.y, _h2dz = wp.z - _hOWP.z;
                    var _h2DistSq = _h2dx*_h2dx + _h2dy*_h2dy + _h2dz*_h2dz;
                    _hit = _h2DistSq <= _hORadius*_hORadius;
                    if (_hit) _p1Dist = Math.sqrt(_h2DistSq);
                } else {
                    var _zp = _e.worldPos; if (!_zp) continue;
                    var _dx = wp.x - _zp.x, _dy = wp.y - _zp.y, _dz = wp.z - _zp.z;
                    _p1Dist = Math.sqrt(_dx*_dx + _dy*_dy + _dz*_dz);
                    if (_e.shape === 'box') {
                        var _cy = Math.cos(-_e.parentYaw), _sy = Math.sin(-_e.parentYaw);
                        var _lx =  _dx * _cy - _dy * _sy;
                        var _ly =  _dx * _sy + _dy * _cy;
                        _hit = Math.abs(_lx) <= _e.sizeX * 0.5 + _holdBonus
                            && Math.abs(_ly) <= _e.sizeY * 0.5 + _holdBonus
                            && Math.abs(_dz) <= _e.sizeZ * 0.5 + _holdBonus;
                    } else {
                        _hit = _p1Dist <= _e.radius + _holdBonus;
                    }
                }
                if (!_hit) continue;
                if (_p1Dist < _p1BestDist) { _p1BestDist = _p1Dist; _p1Best = _e; }
            }
            if (_p1Best) {
                gdjs._webxrVrHolsterAdd(_p1Best, obj, beh);
                beh._holsterEntry = _p1Best;
                if (gdjs._webxrVrHolsterFireHaptic)
                    gdjs._webxrVrHolsterFireHaptic(hand, _p1Best.holdingHapticIntensity || 0.4, _p1Best.holdingHapticDuration || 40);
                return true;
            }
            // Pass 2: object AABB overlaps zone bounds (fallback - sword tip reaches into zone while hand is outside), pick closest zone to hand
            var _dAnc = gdjs._webxrVrAnchor;
            if (!_dAnc || !obj) return false;
            var _dohw = (obj.getWidth  ? obj.getWidth()  : 0) / 2;
            var _dohh = (obj.getHeight ? obj.getHeight() : 0) / 2;
            var _dohd = (obj.getDepth  ? obj.getDepth()  : 0) / 2;
            var _dox = obj.getX(), _doy = obj.getY(), _doz = obj.getZ();
            var _p2Best = null, _p2BestDist = Infinity;
            for (var _ri2 = 0; _ri2 < reg.length; _ri2++) {
                var _e2 = reg[_ri2];
                if (gdjs._webxrVrHolsterIsFull(_e2)) continue;
                if (!gdjs._webxrVrHolsterTagMatches(tag, _e2.acceptedTags || '')) continue;
                if (_e2.source === 'vrDoorKeyZone') {
                    var _dkBeh2 = null; try { _dkBeh2 = obj.getBehavior('VrKey'); } catch(_ek2) {}
                    if (!_dkBeh2) continue;
                    var _dkTag2 = _dkBeh2._getKeyTag ? String(_dkBeh2._getKeyTag()) : '';
                    if (!gdjs._webxrVrHolsterTagMatches(_dkTag2, _e2.acceptedKeyTags || '')) continue;
                    var _zGxDk = _e2.gdX||0, _zGyDk = _e2.gdY||0, _zGzDk = _e2.gdZ||0;
                    var _dqxDk = Math.max(_dox-_dohw, Math.min(_zGxDk, _dox+_dohw));
                    var _dqyDk = Math.max(_doy-_dohh, Math.min(_zGyDk, _doy+_dohh));
                    var _dqzDk = Math.max(_doz-_dohd, Math.min(_zGzDk, _doz+_dohd));
                    var _dqdxDk=_dqxDk-_zGxDk,_dqdyDk=_dqyDk-_zGyDk,_dqdzDk=_dqzDk-_zGzDk;
                    if (Math.sqrt(_dqdxDk*_dqdxDk+_dqdyDk*_dqdyDk+_dqdzDk*_dqdzDk) > _e2.radius) continue;
                    var _p2Dist = _tAnc ? (function(){
                        var _rX=_tAnc.x+(wp.x-_tAnc.threeX)-_zGxDk,_rY=_tAnc.y-(wp.y-_tAnc.threeY)-_zGyDk,_rZ=_tAnc.z+(wp.z-_tAnc.threeZ)-_zGzDk;
                        return Math.sqrt(_rX*_rX+_rY*_rY+_rZ*_rZ);
                    })() : 0;
                    if (_p2Dist < _p2BestDist) { _p2BestDist = _p2Dist; _p2Best = _e2; }
                    continue;
                }
                var _hit2;
                if (_e2.holsterObj) {
                    var _hO2 = _e2.holsterObj;
                    var _hO2R = Math.max(_hO2.getWidth(), _hO2.getHeight(), _hO2.getDepth()) / 2 + _holdBonus;
                    var _d2Three = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                    if (_d2Three) {
                        var _d2WP = new THREE.Vector3(); _d2Three.getWorldPosition(_d2WP);
                        var _d2dx = _d2WP.x - _e2.worldPos.x, _d2dy = _d2WP.y - _e2.worldPos.y, _d2dz = _d2WP.z - _e2.worldPos.z;
                        _hit2 = _d2dx*_d2dx + _d2dy*_d2dy + _d2dz*_d2dz <= _hO2R*_hO2R;
                    }
                } else {
                    var _zp2 = _e2.worldPos;
                    if (!_zp2) continue;
                    var _zGx = _dAnc.x + (_zp2.x - _dAnc.threeX);
                    var _zGy = _dAnc.y - (_zp2.y - _dAnc.threeY);
                    var _zGz = _dAnc.z + (_zp2.z - _dAnc.threeZ);
                    var _dqx = Math.max(_dox-_dohw, Math.min(_zGx, _dox+_dohw));
                    var _dqy = Math.max(_doy-_dohh, Math.min(_zGy, _doy+_dohh));
                    var _dqz = Math.max(_doz-_dohd, Math.min(_zGz, _doz+_dohd));
                    var _dqdx = _dqx-_zGx, _dqdy = _dqy-_zGy, _dqdz = _dqz-_zGz;
                    if (_e2.shape === 'box') {
                        var _dbcy = Math.cos(_e2.parentYaw), _dbsy = Math.sin(_e2.parentYaw);
                        var _dblx = _dqdx*_dbcy - _dqdy*_dbsy;
                        var _dbly = _dqdx*_dbsy + _dqdy*_dbcy;
                        _hit2 = Math.abs(_dblx) <= _e2.sizeX*0.5
                             && Math.abs(_dbly) <= _e2.sizeY*0.5
                             && Math.abs(_dqdz) <= _e2.sizeZ*0.5;
                    } else {
                        _hit2 = Math.sqrt(_dqdx*_dqdx + _dqdy*_dqdy + _dqdz*_dqdz) <= _e2.radius;
                    }
                }
                if (!_hit2) continue;
                var _p2Dist = _e2.worldPos ? Math.sqrt(
                    (wp.x-_e2.worldPos.x)*(wp.x-_e2.worldPos.x) +
                    (wp.y-_e2.worldPos.y)*(wp.y-_e2.worldPos.y) +
                    (wp.z-_e2.worldPos.z)*(wp.z-_e2.worldPos.z)) : 0;
                if (_p2Dist < _p2BestDist) { _p2BestDist = _p2Dist; _p2Best = _e2; }
            }
            if (_p2Best) {
                gdjs._webxrVrHolsterAdd(_p2Best, obj, beh);
                beh._holsterEntry = _p2Best;
                if (gdjs._webxrVrHolsterFireHaptic)
                    gdjs._webxrVrHolsterFireHaptic(hand, _p2Best.holdingHapticIntensity || 0.4, _p2Best.holdingHapticDuration || 40);
                return true;
            }
            return false;
        };
        gdjs._webxrVrHolsterBeginGrabFromZone = function(zoneEntry, handEntry, hand, targetOcc) {
            var occ = (targetOcc && targetOcc.obj) ? gdjs._webxrVrHolsterRemoveObj(zoneEntry, targetOcc.obj) : gdjs._webxrVrHolsterRemoveTop(zoneEntry);
            if (!occ) occ = gdjs._webxrVrHolsterRemoveTop(zoneEntry);
            if (!occ) return false;
            var obj = occ.obj, beh = occ.beh;
            beh._holsterEntry = null;
            var grip = handEntry.handAnchor || handEntry.grip;
            if (!grip) return false;
            var gWP = new THREE.Vector3(), gWQ = new THREE.Quaternion();
            grip.getWorldPosition(gWP);
            grip.getWorldQuaternion(gWQ);
            var gWQInv = gWQ.clone().invert();
            var threeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
            if (threeObj) {
                beh._grabOuterDeltaX = threeObj.position.x - obj.getX();
                beh._grabOuterDeltaY = threeObj.position.y - obj.getY();
                beh._grabOuterDeltaZ = threeObj.position.z - obj.getZ();
            } else {
                beh._grabOuterDeltaX = beh._grabOuterDeltaY = beh._grabOuterDeltaZ = 0;
            }
            var _zMode = (beh._getGrabMode ? String(beh._getGrabMode()) : 'AABB');
            if (_zMode === 'Center') {
                var _zhx = beh._getHoldOffsetX ? Number(beh._getHoldOffsetX()) : 0;
                var _zhy = beh._getHoldOffsetY ? Number(beh._getHoldOffsetY()) : 0;
                var _zhz = beh._getHoldOffsetZ ? Number(beh._getHoldOffsetZ()) : 0;
                var _zrxD = beh._getHoldRotationX ? Number(beh._getHoldRotationX()) : 0;
                var _zryD = beh._getHoldRotationY ? Number(beh._getHoldRotationY()) : 0;
                var _zrzD = beh._getHoldRotationZ ? Number(beh._getHoldRotationZ()) : 0;
                var _D2R = Math.PI / 180;
                beh._grabLocalQuat = new THREE.Quaternion().setFromEuler(
                    new THREE.Euler(_zrxD*_D2R, _zryD*_D2R, _zrzD*_D2R, 'ZYX'));
                var _zWs = gdjs._webxrVrWorldScale || 100;
                var _zAncOff = handEntry.handAnchor ? handEntry.handAnchor.position : {x:0,y:0,z:0};
                var _zHoldPos = new THREE.Vector3(
                    _zhx - _zAncOff.x * _zWs,
                    _zhy - _zAncOff.y * _zWs,
                    _zhz - _zAncOff.z * _zWs
                );
                beh._grabLocalPos = _zHoldPos.clone();
                beh._grabLocalPosTarget = _zHoldPos.clone();
            } else {
                var oWP = new THREE.Vector3(), oWQ = new THREE.Quaternion();
                if (threeObj) {
                    threeObj.getWorldPosition(oWP);
                    threeObj.getWorldQuaternion(oWQ);
                }
                beh._grabLocalPos = threeObj ? oWP.clone().sub(gWP).applyQuaternion(gWQInv) : new THREE.Vector3();
                beh._grabLocalQuat = gWQInv.clone().multiply(oWQ);
                beh._grabLocalPosTarget = beh._grabLocalPos.clone();
            }
            beh._grabWorldQuat = gWQ.clone();
            beh._state = 'grabbed';
            beh._grabbingHand = hand;
            beh._otherHoldingHand = null;
            beh._noRedockUntil = performance.now() + 1000;
            handEntry._grabGripEdgeAvailable = false;
            beh._stickyGrabActive = !!(beh._getStickyGrab && (beh._getStickyGrab() === 'true' || beh._getStickyGrab() === true));
            if (!beh._stickyGrabActive) {
                var _fgHeld = handEntry._grabGripPrev !== false;
                if (!_fgHeld) beh._suppressThrowVelocityOnNextRelease = true;
            }
            return true;
        };
        gdjs._webxrVrHolsterApplyHangTransform = function(entry) {
            var list = gdjs._webxrVrHolsterList(entry);
            if (!list.length) return;
            var anchor = gdjs._webxrVrAnchor;
            if (!anchor) return;
            var zWP = entry.worldPos, zWQ = entry.worldQuat;
            if (!zWP || !zWQ) return;
            var sHB = entry.holsterBeh;
            var sX = (sHB && sHB._getStackOffsetX) ? Number(sHB._getStackOffsetX()) : 0;
            var sY = (sHB && sHB._getStackOffsetY) ? Number(sHB._getStackOffsetY()) : 0;
            var sZ = (sHB && sHB._getStackOffsetZ) ? Number(sHB._getStackOffsetZ()) : 0;
            for (var _hti = 0; _hti < list.length; _hti++) {
                var occ = list[_hti];
                var obj = occ.obj, beh = occ.beh;
                if (!obj || !beh) continue;
                var hX = (beh._getHangOffsetX ? Number(beh._getHangOffsetX()) : 0) + _hti * sX;
                var hY = (beh._getHangOffsetY ? Number(beh._getHangOffsetY()) : 0) + _hti * sY;
                var hZ = (beh._getHangOffsetZ ? Number(beh._getHangOffsetZ()) : 0) + _hti * sZ;
                var hRX = beh._getHangRotationX ? Number(beh._getHangRotationX()) : 0;
                var hRY = beh._getHangRotationY ? Number(beh._getHangRotationY()) : 0;
                var hRZ = beh._getHangRotationZ ? Number(beh._getHangRotationZ()) : 0;
                var off = new THREE.Vector3(hX, hY, hZ).applyQuaternion(zWQ);
                var fWP = zWP.clone().add(off);
                obj.setX(anchor.x + (fWP.x - anchor.threeX));
                obj.setY(anchor.y - (fWP.y - anchor.threeY));
                if (obj.setZ) obj.setZ(anchor.z + (fWP.z - anchor.threeZ));
                var zWQGd = new THREE.Quaternion(-zWQ.x, zWQ.y, -zWQ.z, zWQ.w);
                var D2R = Math.PI / 180;
                var hQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(hRX*D2R, hRY*D2R, hRZ*D2R, 'ZYX'));
                var fQ = zWQGd.clone().multiply(hQ);
                var eu = new THREE.Euler().setFromQuaternion(fQ, 'ZYX');
                obj.setAngle(eu.z * 180/Math.PI);
                if (obj.setRotationX) obj.setRotationX(eu.x * 180/Math.PI);
                if (obj.setRotationY) obj.setRotationY(eu.y * 180/Math.PI);
                var tObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                if (tObj) { tObj.quaternion.copy(fQ); tObj.updateMatrix(); }
                var phys = null;
                try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
                if (phys && phys._body && typeof Jolt !== 'undefined') {
                    var bi = phys._sharedData.bodyInterface, id = phys._body.GetID();
                    bi.SetLinearVelocity(id, phys.getVec3(0, 0, 0));
                    bi.SetAngularVelocity(id, phys.getVec3(0, 0, 0));
                    bi.ActivateBody(id);
                }
            }
        };
        gdjs._webxrVrHolsterList = function(e) {
            return (e.occupants && e.occupants.length) ? e.occupants : (e.occupant ? [e.occupant] : []);
        };
        gdjs._webxrVrHolsterCount = function(e) {
            return gdjs._webxrVrHolsterList(e).length;
        };
        gdjs._webxrVrHolsterIsFull = function(e) {
            return gdjs._webxrVrHolsterCount(e) >= (e.maxItems || 1);
        };
        gdjs._webxrVrHolsterAdd = function(e, obj, beh) {
            if (!e.occupants) e.occupants = [];
            e.occupants.push({obj: obj, beh: beh});
            e.occupant = e.occupants[e.occupants.length - 1];
        };
        gdjs._webxrVrHolsterRemoveTop = function(e) {
            if (e.occupants && e.occupants.length) {
                var o = e.occupants.pop();
                e.occupant = e.occupants.length ? e.occupants[e.occupants.length - 1] : null;
                return o;
            }
            var o = e.occupant; e.occupant = null; return o;
        };
        gdjs._webxrVrHolsterRemoveObj = function(e, targetObj) {
            if (e.occupants && e.occupants.length) {
                var idx = -1;
                for (var _roi = 0; _roi < e.occupants.length; _roi++) {
                    if (e.occupants[_roi].obj === targetObj) { idx = _roi; break; }
                }
                if (idx < 0) return null;
                var removed = e.occupants.splice(idx, 1)[0];
                e.occupant = e.occupants.length ? e.occupants[e.occupants.length - 1] : null;
                return removed;
            }
            if (e.occupant && e.occupant.obj === targetObj) {
                var o = e.occupant; e.occupant = null; return o;
            }
            return null;
        };
    }
}
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.userFunc0x1ad3bd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.userFunc0x1d58b98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    var entry = beh._holsterRegEntry;
    if (entry) {
        var _doList = (entry.occupants && entry.occupants.length) ? entry.occupants.slice() : (entry.occupant ? [entry.occupant] : []);
        for (var _doi = 0; _doi < _doList.length; _doi++) {
            var _dOcc = _doList[_doi];
            var _doBeh = _dOcc ? _dOcc.beh : null;
            var _doObj = _dOcc ? _dOcc.obj : null;
            if (_doBeh) {
                _doBeh._holsterEntry = null;
                _doBeh._state = 'idle';
                var _doPhys = null;
                try { _doPhys = _doObj.getBehavior('Physics3D'); } catch(e) {}
                if (_doPhys && _doPhys._body && typeof Jolt !== 'undefined') {
                    var _doMt = _doBeh._origJoltMotionType !== undefined ? _doBeh._origJoltMotionType : Jolt.EMotionType_Dynamic;
                    _doPhys._sharedData.bodyInterface.SetMotionType(_doPhys._body.GetID(), _doMt, Jolt.EActivation_Activate);
                    _doBeh._origJoltMotionType = undefined;
                    if (typeof _doBeh._origGravScale === 'number') _doPhys.setGravityScale(_doBeh._origGravScale);
                }
            }
        }
        entry.occupants = [];
        entry.occupant = null;
        if (gdjs._webxrVrHolsterRegistry) {
            gdjs._webxrVrHolsterRegistry = gdjs._webxrVrHolsterRegistry.filter(function(e) { return e !== entry; });
        }
        beh._holsterRegEntry = null;
    }
    if (beh._hoverMesh) {
        if (beh._hoverMesh.geometry) beh._hoverMesh.geometry.dispose();
        if (beh._hoverMesh.material) beh._hoverMesh.material.dispose();
        if (beh._hoverMesh.parent) beh._hoverMesh.parent.remove(beh._hoverMesh);
        beh._hoverMesh = null;
    }
}
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.userFunc0x1d58b98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.userFunc0x1ad3d18 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;
gdjs._webxrRtSceneRef = runtimeScene;

// Idempotent grip edge update (shared with VrGrabbable)
function _getGamepadHz(hand) {
    var sess = tr.xr.getSession ? tr.xr.getSession() : null;
    if (!sess || !sess.inputSources) return null;
    for (var _gsi = 0; _gsi < sess.inputSources.length; _gsi++) {
        var _gs = sess.inputSources[_gsi];
        if (_gs.handedness === hand && _gs.gamepad) return _gs.gamepad;
    }
    return null;
}
var _tickTime = runtimeScene.getTimeManager().getTimeFromStart();
if (gdjs._webxrVrGrabbableGripTickTime !== _tickTime) {
    gdjs._webxrVrGrabbableGripTickTime = _tickTime;
    var _tickHands = ['left', 'right'];
    for (var _thi = 0; _thi < _tickHands.length; _thi++) {
        var _thHand = _tickHands[_thi];
        var _thEntry = controllers[_thHand];
        if (!_thEntry) continue;
        var _thGp = _getGamepadHz(_thHand);
        var _thCur = _thGp && _thGp.buttons[1] ? _thGp.buttons[1].value > 0.5 : false;
        var _thPrev = _thEntry._grabGripPrev === true;
        _thEntry._grabGripEdgeAvailable = (_thCur && !_thPrev);
        _thEntry._grabGripPrev = _thCur;
    }
}

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    var accTags   = beh._getAcceptedTags ? String(beh._getAcceptedTags()) : '';
    var holdHapI  = beh._getHoldingHapticIntensity ? Number(beh._getHoldingHapticIntensity()) : 0.4;
    var holdHapD  = beh._getHoldingHapticDuration  ? Number(beh._getHoldingHapticDuration())  : 40;
    var emtyHapI  = beh._getEmptyHandHapticIntensity ? Number(beh._getEmptyHandHapticIntensity()) : 0.25;
    var emtyHapD  = beh._getEmptyHandHapticDuration  ? Number(beh._getEmptyHandHapticDuration())  : 25;
    var maxI      = beh._getMaxItems ? Math.max(1, Number(beh._getMaxItems())) : 1;

    // Create registry entry if needed
    if (!beh._holsterRegEntry) {
        beh._holsterRegEntry = {
            source: 'manual', holsterObj: obj, holsterBeh: beh,
            worldPos: new THREE.Vector3(), worldQuat: new THREE.Quaternion(),
            acceptedTags: accTags, occupant: null, occupants: [], maxItems: maxI,
            holdingHapticIntensity: holdHapI, holdingHapticDuration: holdHapD,
            emptyHandHapticIntensity: emtyHapI, emptyHandHapticDuration: emtyHapD
        };
        if (!gdjs._webxrVrHolsterRegistry) gdjs._webxrVrHolsterRegistry = [];
        gdjs._webxrVrHolsterRegistry.push(beh._holsterRegEntry);
    }
    var rEntry = beh._holsterRegEntry;
    rEntry.acceptedTags = accTags;
    rEntry.maxItems = maxI;
    rEntry.holdingHapticIntensity = holdHapI;
    rEntry.holdingHapticDuration = holdHapD;
    rEntry.emptyHandHapticIntensity = emtyHapI;
    rEntry.emptyHandHapticDuration = emtyHapD;
    rEntry.allowMagneticRetrieval = !!(beh._getAllowMagneticRetrieval && (beh._getAllowMagneticRetrieval() === 'true' || beh._getAllowMagneticRetrieval() === true));

    // Update world position and quaternion from the GDevelop object
    var threeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    if (threeObj) {
        threeObj.getWorldPosition(rEntry.worldPos);
        threeObj.getWorldQuaternion(rEntry.worldQuat);
    } else {
        // Fallback: use GDevelop coordinates converted to Three.js space
        rEntry.worldPos.set(
            anchor.threeX + (obj.getX() - anchor.x),
            anchor.threeY - (obj.getY() - anchor.y),
            anchor.threeZ + (obj.getZ() - anchor.z)
        );
        rEntry.worldQuat.identity();
    }

    // Hover sphere removed - holster object's own AABB defines the zone (see detection below).

    var gReg = gdjs._webxrVrGrabbableRegistry || [];
    var handsArr = ['left', 'right'];
    var anyInZone = false;

    for (var _hi = 0; _hi < handsArr.length; _hi++) {
        var hand = handsArr[_hi];
        if (gdjs._webxrArcheryActive && gdjs._webxrArcheryActive[hand] > performance.now()) continue;
        var hEntry = controllers[hand];
        if (!hEntry || !hEntry.connected) continue;
        var hwp = hEntry._adjustedWP;
        if (!hwp) continue;
        // AABB detection: convert hand position to GDevelop frame, check against holster object's AABB
        var _hGdX = anchor.x + (hwp.x - anchor.threeX);
        var _hGdY = anchor.y - (hwp.y - anchor.threeY);
        var _hGdZ = anchor.z + (hwp.z - anchor.threeZ);
        var _hHW = obj.getWidth()  / 2, _hHH = obj.getHeight() / 2, _hHD = obj.getDepth()  / 2;
        var _hRadius = Math.max(_hHW, _hHH, _hHD);
        var _hDx = hwp.x - rEntry.worldPos.x, _hDy = hwp.y - rEntry.worldPos.y, _hDz = hwp.z - rEntry.worldPos.z;
        var inside = _hDx*_hDx + _hDy*_hDy + _hDz*_hDz <= _hRadius*_hRadius;
        if (!beh._holsterGrabTarget) beh._holsterGrabTarget = {};
        beh._holsterGrabTarget[hand] = null;
        if (!inside) {
            // Widen: any occupant's own AABB + GrabRange (pickup affordance for items sticking out)
            var _occList = gdjs._webxrVrHolsterList ? gdjs._webxrVrHolsterList(rEntry) : [];
            var _nearestOcc = null, _nearestDist = Infinity;
            for (var _oi = 0; _oi < _occList.length; _oi++) {
                var _occ = _occList[_oi];
                if (!_occ || !_occ.obj || !_occ.beh) continue;
                var _oObj = _occ.obj;
                var _oHw = (_oObj.getWidth  ? _oObj.getWidth()  : 0) / 2;
                var _oHh = (_oObj.getHeight ? _oObj.getHeight() : 0) / 2;
                var _oHd = (_oObj.getDepth  ? _oObj.getDepth()  : 0) / 2;
                var _oNx = Math.max(_oObj.getX()-_oHw, Math.min(_hGdX, _oObj.getX()+_oHw));
                var _oNy = Math.max(_oObj.getY()-_oHh, Math.min(_hGdY, _oObj.getY()+_oHh));
                var _oNz = Math.max(_oObj.getZ()-_oHd, Math.min(_hGdZ, _oObj.getZ()+_oHd));
                var _oDdx = _oNx - _hGdX, _oDdy = _oNy - _hGdY, _oDdz = _oNz - _hGdZ;
                var _oDist = Math.sqrt(_oDdx*_oDdx + _oDdy*_oDdy + _oDdz*_oDdz);
                var _oRange = _occ.beh._getGrabRange ? Number(_occ.beh._getGrabRange()) : 5;
                if (_oDist <= _oRange && _oDist < _nearestDist) { _nearestDist = _oDist; _nearestOcc = _occ; }
            }
            if (_nearestOcc) { inside = true; beh._holsterGrabTarget[hand] = _nearestOcc; }
            // Widen: held-grabbable center inside holster AABB (drop-off affordance, only when not full)
            if (!inside && !gdjs._webxrVrHolsterIsFull(rEntry)) {
                for (var _hgri4 = 0; _hgri4 < gReg.length; _hgri4++) {
                    var _hhge = gReg[_hgri4];
                    var _hhst = _hhge.beh._state;
                    if ((_hhst !== 'grabbed' && _hhst !== 'flyingToCtrl') || _hhge.beh._grabbingHand !== hand) continue;
                    if (!gdjs._webxrVrHolsterTagMatches(_hhge.beh._getHolsterTag ? _hhge.beh._getHolsterTag() : '', accTags)) continue;
                    var _hhObj = _hhge.obj; if (!_hhObj) continue;
                    var _hhThree = _hhObj.get3DRendererObject ? _hhObj.get3DRendererObject() : null;
                    if (!_hhThree) continue;
                    var _hhWP = new THREE.Vector3(); _hhThree.getWorldPosition(_hhWP);
                    var _ahdx = _hhWP.x - rEntry.worldPos.x, _ahdy = _hhWP.y - rEntry.worldPos.y, _ahdz = _hhWP.z - rEntry.worldPos.z;
                    if (_ahdx*_ahdx + _ahdy*_ahdy + _ahdz*_ahdz <= _hRadius*_hRadius) { inside = true; break; }
                }
            }
        }
        // Per-frame: compute holdingMatch and emptyHand for highlight gating
        var holdingMatch = false;
        for (var _gri = 0; _gri < gReg.length; _gri++) {
            var _ge = gReg[_gri];
            if ((_ge.beh._state === 'grabbed' || _ge.beh._state === 'flyingToCtrl') &&
                _ge.beh._grabbingHand === hand &&
                gdjs._webxrVrHolsterTagMatches(_ge.beh._getHolsterTag ? _ge.beh._getHolsterTag() : '', accTags)) {
                holdingMatch = true; break;
            }
        }
        var emptyHand = true;
        for (var _gri2 = 0; _gri2 < gReg.length; _gri2++) {
            var _ge2 = gReg[_gri2];
            if ((_ge2.beh._state === 'grabbed' || _ge2.beh._state === 'flyingToCtrl') && _ge2.beh._grabbingHand === hand)
                { emptyHand = false; break; }
        }
        var _rIsFull = gdjs._webxrVrHolsterIsFull(rEntry);
        var _rHasItems = gdjs._webxrVrHolsterCount(rEntry) > 0;
        var wasIn = beh._insideState[hand] === true;
        if (inside && !wasIn) {
            if (holdingMatch && !_rIsFull && gdjs._webxrVrHolsterFireHaptic)
                gdjs._webxrVrHolsterFireHaptic(hand, holdHapI, holdHapD);
            if (emptyHand && _rHasItems && gdjs._webxrVrHolsterFireHaptic)
                gdjs._webxrVrHolsterFireHaptic(hand, emtyHapI, emtyHapD);
        }
        beh._insideState[hand] = inside;
        // Highlight when: holding matching item (not full) OR empty hand (has items to grab)
        var shouldHighlight = (holdingMatch && !_rIsFull) || (emptyHand && _rHasItems);
        if (inside && shouldHighlight) anyInZone = true;
        if (inside && hEntry._grabGripEdgeAvailable && _rHasItems && gdjs._webxrVrHolsterBeginGrabFromZone &&
            !(gdjs._webxrVrHandIsClimbing && gdjs._webxrVrHandIsClimbing[hand]))
            gdjs._webxrVrHolsterBeginGrabFromZone(rEntry, hEntry, hand, beh._holsterGrabTarget && beh._holsterGrabTarget[hand]);
    }

    // Drive holstered object transform: moved to doStepPostEvents so the rig is current.
}
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.userFunc0x1ad3d18(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.userFunc0x1ad3c78 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;
if (!gdjs._webxrVrHolsterApplyHangTransform) return;

// Ensure the rig world matrix is current before reading object positions.
if (gdjs._webxrVrEnsureRigCurrent) gdjs._webxrVrEnsureRigCurrent();

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    var rEntry = beh._holsterRegEntry;
    if (!rEntry) continue;
    // Skip if a VrFollower on the same object already pushed this entry.
    // We still re-apply here so static holsters (no VrFollower) also work.
    // Re-sample worldPos/worldQuat from the Three.js renderer directly.
    var threeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    if (threeObj) {
        threeObj.getWorldPosition(rEntry.worldPos);
        threeObj.getWorldQuaternion(rEntry.worldQuat);
    }
    gdjs._webxrVrHolsterApplyHangTransform(rEntry);
}
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.userFunc0x1ad3c78(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.userFunc0x1ad3d18 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._holsterRegEntry && beh._holsterRegEntry.occupant);
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.userFunc0x1ad3d18(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupied = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterOccupiedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.userFunc0x1ad3cc0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var handStr = String(eventsFunctionContext.getArgument("Hand")).toLowerCase();
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._insideState && beh._insideState[handStr]);
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.userFunc0x1ad3cc0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolster = function(Hand, parentEventsFunctionContext) {

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
if (argName === "Hand") return Hand;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHandInHolsterContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.userFunc0x1ad3c78 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh || !beh._holsterRegEntry || !beh._holsterRegEntry.occupant) {
    eventsFunctionContext.returnValue = ''; return;
}
var occ = beh._holsterRegEntry.occupant;
eventsFunctionContext.returnValue = (occ.obj && occ.obj.getName) ? occ.obj.getName() : '';
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.userFunc0x1ad3c78(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectName = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HolsteredObjectNameContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.GDObjectObjects1= [];
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.GDTargetObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.userFunc0x1ad3d18 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var targetObjs = eventsFunctionContext.getObjects("TargetObject");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh || !beh._holsterRegEntry || targetObjs.length === 0) return;
var entry = beh._holsterRegEntry;
if (gdjs._webxrVrHolsterIsFull && gdjs._webxrVrHolsterIsFull(entry)) return;
var tObj = targetObjs[0];
var tBeh = null;
var gReg = gdjs._webxrVrGrabbableRegistry || [];
for (var gi = 0; gi < gReg.length; gi++) {
    if (gReg[gi].obj === tObj) { tBeh = gReg[gi].beh; break; }
}
if (!tBeh) return;
var tag = tBeh._getHolsterTag ? tBeh._getHolsterTag() : '';
if (!gdjs._webxrVrHolsterTagMatches(tag, entry.acceptedTags || '')) return;
if (tBeh._state === 'grabbed' || tBeh._state === 'flyingToCtrl' || tBeh._state === 'targeted') {
    tBeh._state = 'idle';
    tBeh._targetingHand = null;
    tBeh._grabbingHand = null;
    tBeh._grabLocalPos = null;
    tBeh._grabLocalQuat = null;
    tBeh._grabWorldQuat = null;
    tBeh._grabOuterDeltaX = tBeh._grabOuterDeltaY = tBeh._grabOuterDeltaZ = null;
    tBeh._otherHoldingHand = null;
}
var phys = null;
try { phys = tObj.getBehavior('Physics3D'); } catch(ex) {}
if (phys && phys._body && typeof Jolt !== 'undefined') {
    if (tBeh._origJoltMotionType === undefined) {
        var origType = phys.bodyType || 'Dynamic';
        tBeh._origJoltMotionType = origType === 'Kinematic' ? Jolt.EMotionType_Kinematic :
                                   origType === 'Static'    ? Jolt.EMotionType_Static :
                                                              Jolt.EMotionType_Dynamic;
        tBeh._origGravScale = typeof phys.gravityScale === 'number' ? phys.gravityScale : 1;
    }
    phys._sharedData.bodyInterface.SetMotionType(phys._body.GetID(), Jolt.EMotionType_Kinematic, Jolt.EActivation_Activate);
}
if (gdjs._webxrVrHolsterAdd) gdjs._webxrVrHolsterAdd(entry, tObj, tBeh);
else entry.occupant = {obj: tObj, beh: tBeh};
tBeh._holsterEntry = entry;
tBeh._noRedockUntil = performance.now() + 2000;
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.userFunc0x1ad3d18(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolster = function(TargetObject, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceHolsterContext.GDTargetObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.userFunc0x1ad3d18 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var handStr = String(eventsFunctionContext.getArgument("Hand")).toLowerCase();
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh || !beh._holsterRegEntry || !beh._holsterRegEntry.occupant) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var hEntry = controllers[handStr];
if (!hEntry) return;
if (gdjs._webxrVrHolsterBeginGrabFromZone) gdjs._webxrVrHolsterBeginGrabFromZone(beh._holsterRegEntry, hEntry, handStr);
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.userFunc0x1ad3d18(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHand = function(Hand, parentEventsFunctionContext) {

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
if (argName === "Hand") return Hand;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.ForceRetrieveToHandContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.userFunc0x2827dd8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var targetName = eventsFunctionContext.getArgument('TargetObject');
var targetObjs = runtimeScene.getObjects(targetName) || [];
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh || !beh._holsterRegEntry) { eventsFunctionContext.returnValue = false; return; }
var _iohList = gdjs._webxrVrHolsterList ? gdjs._webxrVrHolsterList(beh._holsterRegEntry) : (beh._holsterRegEntry.occupant ? [beh._holsterRegEntry.occupant] : []);
if (!_iohList.length) { eventsFunctionContext.returnValue = false; return; }
for (var i = 0; i < targetObjs.length; i++) {
    for (var _iohi = 0; _iohi < _iohList.length; _iohi++) {
        if (targetObjs[i] === _iohList[_iohi].obj) { eventsFunctionContext.returnValue = true; return; }
    }
}
eventsFunctionContext.returnValue = false;
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.userFunc0x2827dd8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolster = function(TargetObject, parentEventsFunctionContext) {

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
if (argName === "TargetObject") return TargetObject;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsObjectInHolsterContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.userFunc0x1ad3c20 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var entry = beh ? beh._holsterRegEntry : null;
eventsFunctionContext.returnValue = entry && gdjs._webxrVrHolsterCount ? gdjs._webxrVrHolsterCount(entry) : (entry && entry.occupant ? 1 : 0);
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.userFunc0x1ad3c20(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCount = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.HeldItemCountContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.userFunc0x1ad3d18 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var entry = beh ? beh._holsterRegEntry : null;
eventsFunctionContext.returnValue = !!(entry && gdjs._webxrVrHolsterIsFull ? gdjs._webxrVrHolsterIsFull(entry) : (entry && entry.occupant));
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.userFunc0x1ad3d18(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFull = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsHolsterFullContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.userFunc0x1ad3bd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getAllowMagneticRetrieval ? beh._getAllowMagneticRetrieval() : 'false';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.userFunc0x1ad3bd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.IsMagneticRetrievalAllowedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.userFunc0x1ad3bd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setAllowMagneticRetrieval) beh._setAllowMagneticRetrieval('true');
    if (beh._holsterRegEntry) beh._holsterRegEntry.allowMagneticRetrieval = true;
}
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.userFunc0x1ad3bd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrieval = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.EnableMagneticRetrievalContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext = {};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.userFunc0x1ad3bd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setAllowMagneticRetrieval) beh._setAllowMagneticRetrieval('false');
    if (beh._holsterRegEntry) beh._holsterRegEntry.allowMagneticRetrieval = false;
}
};
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.userFunc0x1ad3bd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrieval = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrHolster.VrHolster.prototype.DisableMagneticRetrievalContext.GDObjectObjects1.length = 0;


return;
}


gdjs.registerBehavior("WebXR::VrHolster", gdjs.evtsExt__WebXR__VrHolster.VrHolster);
