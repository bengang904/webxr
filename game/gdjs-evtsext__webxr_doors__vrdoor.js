
gdjs.evtsExt__WebXR_Doors__VrDoor = gdjs.evtsExt__WebXR_Doors__VrDoor || {};

/**
 * Behavior generated from VR Door (WebXR)
 */
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor = class VrDoor extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.DoorType = behaviorData.DoorType !== undefined ? behaviorData.DoorType : "Rotating";
    this._behaviorData.HingeStartX = behaviorData.HingeStartX !== undefined ? behaviorData.HingeStartX : Number("0") || 0;
    this._behaviorData.HingeStartY = behaviorData.HingeStartY !== undefined ? behaviorData.HingeStartY : Number("0") || 0;
    this._behaviorData.HingeStartZ = behaviorData.HingeStartZ !== undefined ? behaviorData.HingeStartZ : Number("-100") || 0;
    this._behaviorData.HingeEndX = behaviorData.HingeEndX !== undefined ? behaviorData.HingeEndX : Number("0") || 0;
    this._behaviorData.HingeEndY = behaviorData.HingeEndY !== undefined ? behaviorData.HingeEndY : Number("0") || 0;
    this._behaviorData.HingeEndZ = behaviorData.HingeEndZ !== undefined ? behaviorData.HingeEndZ : Number("100") || 0;
    this._behaviorData.Min = behaviorData.Min !== undefined ? behaviorData.Min : Number("-180") || 0;
    this._behaviorData.Max = behaviorData.Max !== undefined ? behaviorData.Max : Number("180") || 0;
    this._behaviorData.HandleOffsetX = behaviorData.HandleOffsetX !== undefined ? behaviorData.HandleOffsetX : Number("0") || 0;
    this._behaviorData.HandleOffsetY = behaviorData.HandleOffsetY !== undefined ? behaviorData.HandleOffsetY : Number("0") || 0;
    this._behaviorData.HandleOffsetZ = behaviorData.HandleOffsetZ !== undefined ? behaviorData.HandleOffsetZ : Number("0") || 0;
    this._behaviorData.HandleRadius = behaviorData.HandleRadius !== undefined ? behaviorData.HandleRadius : Number("8") || 0;
    this._behaviorData.HandleColor = behaviorData.HandleColor !== undefined ? behaviorData.HandleColor : "0;255;0";
    this._behaviorData.KeyOffsetX = behaviorData.KeyOffsetX !== undefined ? behaviorData.KeyOffsetX : Number("0") || 0;
    this._behaviorData.KeyOffsetY = behaviorData.KeyOffsetY !== undefined ? behaviorData.KeyOffsetY : Number("0") || 0;
    this._behaviorData.KeyOffsetZ = behaviorData.KeyOffsetZ !== undefined ? behaviorData.KeyOffsetZ : Number("0") || 0;
    this._behaviorData.KeyRadius = behaviorData.KeyRadius !== undefined ? behaviorData.KeyRadius : Number("5") || 0;
    this._behaviorData.KeyColor = behaviorData.KeyColor !== undefined ? behaviorData.KeyColor : "255;200;0";
    this._behaviorData.AcceptedKeyTags = behaviorData.AcceptedKeyTags !== undefined ? behaviorData.AcceptedKeyTags : "";
    this._behaviorData.Latchable = behaviorData.Latchable !== undefined ? behaviorData.Latchable : true;
    this._behaviorData.Locked = behaviorData.Locked !== undefined ? behaviorData.Locked : false;
    this._behaviorData.AutoUnlockOnKeyInsert = behaviorData.AutoUnlockOnKeyInsert !== undefined ? behaviorData.AutoUnlockOnKeyInsert : true;
    this._behaviorData.AutoUnlatchOnUnlock = behaviorData.AutoUnlatchOnUnlock !== undefined ? behaviorData.AutoUnlatchOnUnlock : true;
    this._behaviorData.PushEnabled = behaviorData.PushEnabled !== undefined ? behaviorData.PushEnabled : true;
    this._behaviorData.PushForceFactor = behaviorData.PushForceFactor !== undefined ? behaviorData.PushForceFactor : Number("1") || 0;
    this._behaviorData.Friction = behaviorData.Friction !== undefined ? behaviorData.Friction : Number("30") || 0;
    this._behaviorData.DrawDebug = behaviorData.DrawDebug !== undefined ? behaviorData.DrawDebug : false;
    this._behaviorData.HingeLineDebugColor = behaviorData.HingeLineDebugColor !== undefined ? behaviorData.HingeLineDebugColor : "255;0;255";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.DoorType !== undefined)
      this._behaviorData.DoorType = behaviorOverriding.DoorType;
    if (behaviorOverriding.HingeStartX !== undefined)
      this._behaviorData.HingeStartX = behaviorOverriding.HingeStartX;
    if (behaviorOverriding.HingeStartY !== undefined)
      this._behaviorData.HingeStartY = behaviorOverriding.HingeStartY;
    if (behaviorOverriding.HingeStartZ !== undefined)
      this._behaviorData.HingeStartZ = behaviorOverriding.HingeStartZ;
    if (behaviorOverriding.HingeEndX !== undefined)
      this._behaviorData.HingeEndX = behaviorOverriding.HingeEndX;
    if (behaviorOverriding.HingeEndY !== undefined)
      this._behaviorData.HingeEndY = behaviorOverriding.HingeEndY;
    if (behaviorOverriding.HingeEndZ !== undefined)
      this._behaviorData.HingeEndZ = behaviorOverriding.HingeEndZ;
    if (behaviorOverriding.Min !== undefined)
      this._behaviorData.Min = behaviorOverriding.Min;
    if (behaviorOverriding.Max !== undefined)
      this._behaviorData.Max = behaviorOverriding.Max;
    if (behaviorOverriding.HandleOffsetX !== undefined)
      this._behaviorData.HandleOffsetX = behaviorOverriding.HandleOffsetX;
    if (behaviorOverriding.HandleOffsetY !== undefined)
      this._behaviorData.HandleOffsetY = behaviorOverriding.HandleOffsetY;
    if (behaviorOverriding.HandleOffsetZ !== undefined)
      this._behaviorData.HandleOffsetZ = behaviorOverriding.HandleOffsetZ;
    if (behaviorOverriding.HandleRadius !== undefined)
      this._behaviorData.HandleRadius = behaviorOverriding.HandleRadius;
    if (behaviorOverriding.HandleColor !== undefined)
      this._behaviorData.HandleColor = behaviorOverriding.HandleColor;
    if (behaviorOverriding.KeyOffsetX !== undefined)
      this._behaviorData.KeyOffsetX = behaviorOverriding.KeyOffsetX;
    if (behaviorOverriding.KeyOffsetY !== undefined)
      this._behaviorData.KeyOffsetY = behaviorOverriding.KeyOffsetY;
    if (behaviorOverriding.KeyOffsetZ !== undefined)
      this._behaviorData.KeyOffsetZ = behaviorOverriding.KeyOffsetZ;
    if (behaviorOverriding.KeyRadius !== undefined)
      this._behaviorData.KeyRadius = behaviorOverriding.KeyRadius;
    if (behaviorOverriding.KeyColor !== undefined)
      this._behaviorData.KeyColor = behaviorOverriding.KeyColor;
    if (behaviorOverriding.AcceptedKeyTags !== undefined)
      this._behaviorData.AcceptedKeyTags = behaviorOverriding.AcceptedKeyTags;
    if (behaviorOverriding.Latchable !== undefined)
      this._behaviorData.Latchable = behaviorOverriding.Latchable;
    if (behaviorOverriding.Locked !== undefined)
      this._behaviorData.Locked = behaviorOverriding.Locked;
    if (behaviorOverriding.AutoUnlockOnKeyInsert !== undefined)
      this._behaviorData.AutoUnlockOnKeyInsert = behaviorOverriding.AutoUnlockOnKeyInsert;
    if (behaviorOverriding.AutoUnlatchOnUnlock !== undefined)
      this._behaviorData.AutoUnlatchOnUnlock = behaviorOverriding.AutoUnlatchOnUnlock;
    if (behaviorOverriding.PushEnabled !== undefined)
      this._behaviorData.PushEnabled = behaviorOverriding.PushEnabled;
    if (behaviorOverriding.PushForceFactor !== undefined)
      this._behaviorData.PushForceFactor = behaviorOverriding.PushForceFactor;
    if (behaviorOverriding.Friction !== undefined)
      this._behaviorData.Friction = behaviorOverriding.Friction;
    if (behaviorOverriding.DrawDebug !== undefined)
      this._behaviorData.DrawDebug = behaviorOverriding.DrawDebug;
    if (behaviorOverriding.HingeLineDebugColor !== undefined)
      this._behaviorData.HingeLineDebugColor = behaviorOverriding.HingeLineDebugColor;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    DoorType: this._behaviorData.DoorType,
    HingeStartX: this._behaviorData.HingeStartX,
    HingeStartY: this._behaviorData.HingeStartY,
    HingeStartZ: this._behaviorData.HingeStartZ,
    HingeEndX: this._behaviorData.HingeEndX,
    HingeEndY: this._behaviorData.HingeEndY,
    HingeEndZ: this._behaviorData.HingeEndZ,
    Min: this._behaviorData.Min,
    Max: this._behaviorData.Max,
    HandleOffsetX: this._behaviorData.HandleOffsetX,
    HandleOffsetY: this._behaviorData.HandleOffsetY,
    HandleOffsetZ: this._behaviorData.HandleOffsetZ,
    HandleRadius: this._behaviorData.HandleRadius,
    HandleColor: this._behaviorData.HandleColor,
    KeyOffsetX: this._behaviorData.KeyOffsetX,
    KeyOffsetY: this._behaviorData.KeyOffsetY,
    KeyOffsetZ: this._behaviorData.KeyOffsetZ,
    KeyRadius: this._behaviorData.KeyRadius,
    KeyColor: this._behaviorData.KeyColor,
    AcceptedKeyTags: this._behaviorData.AcceptedKeyTags,
    Latchable: this._behaviorData.Latchable,
    Locked: this._behaviorData.Locked,
    AutoUnlockOnKeyInsert: this._behaviorData.AutoUnlockOnKeyInsert,
    AutoUnlatchOnUnlock: this._behaviorData.AutoUnlatchOnUnlock,
    PushEnabled: this._behaviorData.PushEnabled,
    PushForceFactor: this._behaviorData.PushForceFactor,
    Friction: this._behaviorData.Friction,
    DrawDebug: this._behaviorData.DrawDebug,
    HingeLineDebugColor: this._behaviorData.HingeLineDebugColor,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.DoorType !== undefined)
      this._behaviorData.DoorType = networkSyncData.props.DoorType;
    if (networkSyncData.props.HingeStartX !== undefined)
      this._behaviorData.HingeStartX = networkSyncData.props.HingeStartX;
    if (networkSyncData.props.HingeStartY !== undefined)
      this._behaviorData.HingeStartY = networkSyncData.props.HingeStartY;
    if (networkSyncData.props.HingeStartZ !== undefined)
      this._behaviorData.HingeStartZ = networkSyncData.props.HingeStartZ;
    if (networkSyncData.props.HingeEndX !== undefined)
      this._behaviorData.HingeEndX = networkSyncData.props.HingeEndX;
    if (networkSyncData.props.HingeEndY !== undefined)
      this._behaviorData.HingeEndY = networkSyncData.props.HingeEndY;
    if (networkSyncData.props.HingeEndZ !== undefined)
      this._behaviorData.HingeEndZ = networkSyncData.props.HingeEndZ;
    if (networkSyncData.props.Min !== undefined)
      this._behaviorData.Min = networkSyncData.props.Min;
    if (networkSyncData.props.Max !== undefined)
      this._behaviorData.Max = networkSyncData.props.Max;
    if (networkSyncData.props.HandleOffsetX !== undefined)
      this._behaviorData.HandleOffsetX = networkSyncData.props.HandleOffsetX;
    if (networkSyncData.props.HandleOffsetY !== undefined)
      this._behaviorData.HandleOffsetY = networkSyncData.props.HandleOffsetY;
    if (networkSyncData.props.HandleOffsetZ !== undefined)
      this._behaviorData.HandleOffsetZ = networkSyncData.props.HandleOffsetZ;
    if (networkSyncData.props.HandleRadius !== undefined)
      this._behaviorData.HandleRadius = networkSyncData.props.HandleRadius;
    if (networkSyncData.props.HandleColor !== undefined)
      this._behaviorData.HandleColor = networkSyncData.props.HandleColor;
    if (networkSyncData.props.KeyOffsetX !== undefined)
      this._behaviorData.KeyOffsetX = networkSyncData.props.KeyOffsetX;
    if (networkSyncData.props.KeyOffsetY !== undefined)
      this._behaviorData.KeyOffsetY = networkSyncData.props.KeyOffsetY;
    if (networkSyncData.props.KeyOffsetZ !== undefined)
      this._behaviorData.KeyOffsetZ = networkSyncData.props.KeyOffsetZ;
    if (networkSyncData.props.KeyRadius !== undefined)
      this._behaviorData.KeyRadius = networkSyncData.props.KeyRadius;
    if (networkSyncData.props.KeyColor !== undefined)
      this._behaviorData.KeyColor = networkSyncData.props.KeyColor;
    if (networkSyncData.props.AcceptedKeyTags !== undefined)
      this._behaviorData.AcceptedKeyTags = networkSyncData.props.AcceptedKeyTags;
    if (networkSyncData.props.Latchable !== undefined)
      this._behaviorData.Latchable = networkSyncData.props.Latchable;
    if (networkSyncData.props.Locked !== undefined)
      this._behaviorData.Locked = networkSyncData.props.Locked;
    if (networkSyncData.props.AutoUnlockOnKeyInsert !== undefined)
      this._behaviorData.AutoUnlockOnKeyInsert = networkSyncData.props.AutoUnlockOnKeyInsert;
    if (networkSyncData.props.AutoUnlatchOnUnlock !== undefined)
      this._behaviorData.AutoUnlatchOnUnlock = networkSyncData.props.AutoUnlatchOnUnlock;
    if (networkSyncData.props.PushEnabled !== undefined)
      this._behaviorData.PushEnabled = networkSyncData.props.PushEnabled;
    if (networkSyncData.props.PushForceFactor !== undefined)
      this._behaviorData.PushForceFactor = networkSyncData.props.PushForceFactor;
    if (networkSyncData.props.Friction !== undefined)
      this._behaviorData.Friction = networkSyncData.props.Friction;
    if (networkSyncData.props.DrawDebug !== undefined)
      this._behaviorData.DrawDebug = networkSyncData.props.DrawDebug;
    if (networkSyncData.props.HingeLineDebugColor !== undefined)
      this._behaviorData.HingeLineDebugColor = networkSyncData.props.HingeLineDebugColor;
  }

  // Properties:
  
  _getDoorType() {
    return this._behaviorData.DoorType !== undefined ? this._behaviorData.DoorType : "Rotating";
  }
  _setDoorType(newValue) {
    this._behaviorData.DoorType = newValue;
  }
  _getHingeStartX() {
    return this._behaviorData.HingeStartX !== undefined ? this._behaviorData.HingeStartX : Number("0") || 0;
  }
  _setHingeStartX(newValue) {
    this._behaviorData.HingeStartX = newValue;
  }
  _getHingeStartY() {
    return this._behaviorData.HingeStartY !== undefined ? this._behaviorData.HingeStartY : Number("0") || 0;
  }
  _setHingeStartY(newValue) {
    this._behaviorData.HingeStartY = newValue;
  }
  _getHingeStartZ() {
    return this._behaviorData.HingeStartZ !== undefined ? this._behaviorData.HingeStartZ : Number("-100") || 0;
  }
  _setHingeStartZ(newValue) {
    this._behaviorData.HingeStartZ = newValue;
  }
  _getHingeEndX() {
    return this._behaviorData.HingeEndX !== undefined ? this._behaviorData.HingeEndX : Number("0") || 0;
  }
  _setHingeEndX(newValue) {
    this._behaviorData.HingeEndX = newValue;
  }
  _getHingeEndY() {
    return this._behaviorData.HingeEndY !== undefined ? this._behaviorData.HingeEndY : Number("0") || 0;
  }
  _setHingeEndY(newValue) {
    this._behaviorData.HingeEndY = newValue;
  }
  _getHingeEndZ() {
    return this._behaviorData.HingeEndZ !== undefined ? this._behaviorData.HingeEndZ : Number("100") || 0;
  }
  _setHingeEndZ(newValue) {
    this._behaviorData.HingeEndZ = newValue;
  }
  _getMin() {
    return this._behaviorData.Min !== undefined ? this._behaviorData.Min : Number("-180") || 0;
  }
  _setMin(newValue) {
    this._behaviorData.Min = newValue;
  }
  _getMax() {
    return this._behaviorData.Max !== undefined ? this._behaviorData.Max : Number("180") || 0;
  }
  _setMax(newValue) {
    this._behaviorData.Max = newValue;
  }
  _getHandleOffsetX() {
    return this._behaviorData.HandleOffsetX !== undefined ? this._behaviorData.HandleOffsetX : Number("0") || 0;
  }
  _setHandleOffsetX(newValue) {
    this._behaviorData.HandleOffsetX = newValue;
  }
  _getHandleOffsetY() {
    return this._behaviorData.HandleOffsetY !== undefined ? this._behaviorData.HandleOffsetY : Number("0") || 0;
  }
  _setHandleOffsetY(newValue) {
    this._behaviorData.HandleOffsetY = newValue;
  }
  _getHandleOffsetZ() {
    return this._behaviorData.HandleOffsetZ !== undefined ? this._behaviorData.HandleOffsetZ : Number("0") || 0;
  }
  _setHandleOffsetZ(newValue) {
    this._behaviorData.HandleOffsetZ = newValue;
  }
  _getHandleRadius() {
    return this._behaviorData.HandleRadius !== undefined ? this._behaviorData.HandleRadius : Number("8") || 0;
  }
  _setHandleRadius(newValue) {
    this._behaviorData.HandleRadius = newValue;
  }
  _getHandleColor() {
    return this._behaviorData.HandleColor !== undefined ? this._behaviorData.HandleColor : "0;255;0";
  }
  _setHandleColor(newValue) {
    this._behaviorData.HandleColor = newValue;
  }
  _getKeyOffsetX() {
    return this._behaviorData.KeyOffsetX !== undefined ? this._behaviorData.KeyOffsetX : Number("0") || 0;
  }
  _setKeyOffsetX(newValue) {
    this._behaviorData.KeyOffsetX = newValue;
  }
  _getKeyOffsetY() {
    return this._behaviorData.KeyOffsetY !== undefined ? this._behaviorData.KeyOffsetY : Number("0") || 0;
  }
  _setKeyOffsetY(newValue) {
    this._behaviorData.KeyOffsetY = newValue;
  }
  _getKeyOffsetZ() {
    return this._behaviorData.KeyOffsetZ !== undefined ? this._behaviorData.KeyOffsetZ : Number("0") || 0;
  }
  _setKeyOffsetZ(newValue) {
    this._behaviorData.KeyOffsetZ = newValue;
  }
  _getKeyRadius() {
    return this._behaviorData.KeyRadius !== undefined ? this._behaviorData.KeyRadius : Number("5") || 0;
  }
  _setKeyRadius(newValue) {
    this._behaviorData.KeyRadius = newValue;
  }
  _getKeyColor() {
    return this._behaviorData.KeyColor !== undefined ? this._behaviorData.KeyColor : "255;200;0";
  }
  _setKeyColor(newValue) {
    this._behaviorData.KeyColor = newValue;
  }
  _getAcceptedKeyTags() {
    return this._behaviorData.AcceptedKeyTags !== undefined ? this._behaviorData.AcceptedKeyTags : "";
  }
  _setAcceptedKeyTags(newValue) {
    this._behaviorData.AcceptedKeyTags = newValue;
  }
  _getLatchable() {
    return this._behaviorData.Latchable !== undefined ? this._behaviorData.Latchable : true;
  }
  _setLatchable(newValue) {
    this._behaviorData.Latchable = newValue;
  }
  _toggleLatchable() {
    this._setLatchable(!this._getLatchable());
  }
  _getLocked() {
    return this._behaviorData.Locked !== undefined ? this._behaviorData.Locked : false;
  }
  _setLocked(newValue) {
    this._behaviorData.Locked = newValue;
  }
  _toggleLocked() {
    this._setLocked(!this._getLocked());
  }
  _getAutoUnlockOnKeyInsert() {
    return this._behaviorData.AutoUnlockOnKeyInsert !== undefined ? this._behaviorData.AutoUnlockOnKeyInsert : true;
  }
  _setAutoUnlockOnKeyInsert(newValue) {
    this._behaviorData.AutoUnlockOnKeyInsert = newValue;
  }
  _toggleAutoUnlockOnKeyInsert() {
    this._setAutoUnlockOnKeyInsert(!this._getAutoUnlockOnKeyInsert());
  }
  _getAutoUnlatchOnUnlock() {
    return this._behaviorData.AutoUnlatchOnUnlock !== undefined ? this._behaviorData.AutoUnlatchOnUnlock : true;
  }
  _setAutoUnlatchOnUnlock(newValue) {
    this._behaviorData.AutoUnlatchOnUnlock = newValue;
  }
  _toggleAutoUnlatchOnUnlock() {
    this._setAutoUnlatchOnUnlock(!this._getAutoUnlatchOnUnlock());
  }
  _getPushEnabled() {
    return this._behaviorData.PushEnabled !== undefined ? this._behaviorData.PushEnabled : true;
  }
  _setPushEnabled(newValue) {
    this._behaviorData.PushEnabled = newValue;
  }
  _togglePushEnabled() {
    this._setPushEnabled(!this._getPushEnabled());
  }
  _getPushForceFactor() {
    return this._behaviorData.PushForceFactor !== undefined ? this._behaviorData.PushForceFactor : Number("1") || 0;
  }
  _setPushForceFactor(newValue) {
    this._behaviorData.PushForceFactor = newValue;
  }
  _getFriction() {
    return this._behaviorData.Friction !== undefined ? this._behaviorData.Friction : Number("30") || 0;
  }
  _setFriction(newValue) {
    this._behaviorData.Friction = newValue;
  }
  _getDrawDebug() {
    return this._behaviorData.DrawDebug !== undefined ? this._behaviorData.DrawDebug : false;
  }
  _setDrawDebug(newValue) {
    this._behaviorData.DrawDebug = newValue;
  }
  _toggleDrawDebug() {
    this._setDrawDebug(!this._getDrawDebug());
  }
  _getHingeLineDebugColor() {
    return this._behaviorData.HingeLineDebugColor !== undefined ? this._behaviorData.HingeLineDebugColor : "255;0;255";
  }
  _setHingeLineDebugColor(newValue) {
    this._behaviorData.HingeLineDebugColor = newValue;
  }
}

/**
 * Shared data generated from VR Door (WebXR)
 */
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.SharedData = class VrDoorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_Doors_VrDoorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_Doors_VrDoorSharedData = new gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_Doors_VrDoorSharedData;
}

// Methods:
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.userFunc0x26a72e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){
    var obj=objs[i];var beh=obj.getBehavior(behaviorName);if(!beh)continue;
    if(!gdjs._webxrVrDoorRegistry)gdjs._webxrVrDoorRegistry=[];
    beh._pos=0;beh._vel=0;beh._latched=beh._getLatchable?(beh._getLatchable()==='true'||beh._getLatchable()===true):true;
    beh._locked=beh._getLocked?(beh._getLocked()==='true'||beh._getLocked()===true):false;
    beh._grabbedHand=null;beh._restInit=false;
    beh._handInHandle={left:false,right:false};beh._handInKeyZone={left:false,right:false};
    beh._isKeyJustInserted=false;beh._isKeyJustRemoved=false;beh._isJustUnlocked=false;beh._keyInZonePrev=false;
    beh._prevHandP={};beh._hingeLine=null;beh._handleSphere=null;beh._keySphere=null;beh._dbgHingeWS=null;beh._dbgHingeWE=null;
    gdjs._webxrVrDoorRegistry.push({obj:obj,beh:beh});
    if(!gdjs._webxrVrHolsterRegistry)gdjs._webxrVrHolsterRegistry=[];
    var accKT=beh._getAcceptedKeyTags?String(beh._getAcceptedKeyTags()):'';
    var kRad0=beh._getKeyRadius?Number(beh._getKeyRadius()):5;
    beh._keyZoneHolsterEntry={source:'vrDoorKeyZone',holsterObj:null,
        worldPos:new THREE.Vector3(),worldQuat:new THREE.Quaternion(),
        gdX:0,gdY:0,gdZ:0,doorObj:obj,acceptedKeyTags:accKT,
        radius:kRad0,acceptedTags:'',occupant:null,
        holdingHapticIntensity:0.3,holdingHapticDuration:30,
        emptyHandHapticIntensity:0.15,emptyHandHapticDuration:20};
    gdjs._webxrVrHolsterRegistry.push(beh._keyZoneHolsterEntry);
}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.userFunc0x26a72e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreated = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.userFunc0x261bb48 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){
    var obj=objs[i];var beh=obj.getBehavior(behaviorName);if(!beh)continue;
    var dbgSc=null;try{var dlr=runtimeScene.getLayer('');var dlr3d=dlr.getRenderer?dlr.getRenderer():null;
        if(dlr3d)dbgSc=dlr3d._threeScene||dlr3d.threeScene||(dlr3d.getThreeScene?dlr3d.getThreeScene():null);}catch(e){}
    function _disposeMesh(m){if(!m)return;if(dbgSc)dbgSc.remove(m);if(m.geometry)m.geometry.dispose();if(m.material)m.material.dispose();}
    _disposeMesh(beh._hingeLine);_disposeMesh(beh._handleSphere);_disposeMesh(beh._keySphere);
    beh._hingeLine=null;beh._handleSphere=null;beh._keySphere=null;
    if(gdjs._webxrVrDoorRegistry)gdjs._webxrVrDoorRegistry=gdjs._webxrVrDoorRegistry.filter(function(e){return e.obj!==obj;});
    if(gdjs._webxrVrHolsterRegistry&&beh._keyZoneHolsterEntry)
        gdjs._webxrVrHolsterRegistry=gdjs._webxrVrHolsterRegistry.filter(function(e){return e!==beh._keyZoneHolsterEntry;});
}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.userFunc0x261bb48(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroy = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.userFunc0x2963fe8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var tr=runtimeScene.getGame().getRenderer().getThreeRenderer();
if(!tr||!tr.xr||!tr.xr.isPresenting)return;
var controllers=gdjs._webxrVrControllers;if(!controllers)return;
var anchor=gdjs._webxrVrAnchor;if(!anchor)return;
var DEG2RAD=Math.PI/180;
var dt=runtimeScene.getTimeManager().getElapsedTime()/1000;if(dt<=0||dt>0.1)dt=0.016;
// Install door keyhole transform helper once
if(!gdjs._webxrVrDoorHelpersInstalled){
    gdjs._webxrVrDoorHelpersInstalled=true;
    gdjs._webxrVrDoorApplyKeyholeTransform=function(entry){
        var occ=entry.occupant;if(!occ)return;
        var obj=occ.obj,beh=occ.beh;if(!obj||!beh)return;
        var doorObj=entry.doorObj;if(!doorObj)return;
        var doorThree=doorObj.get3DRendererObject?doorObj.get3DRendererObject():null;if(!doorThree)return;
        var keyBeh=null;try{keyBeh=obj.getBehavior('VrKey');}catch(e){}
        var khOX,khOY,khOZ,khRX,khRY,khRZ;
        var hasKh=keyBeh&&(Number(keyBeh._getKeyholeOffsetX?keyBeh._getKeyholeOffsetX():0)||Number(keyBeh._getKeyholeOffsetY?keyBeh._getKeyholeOffsetY():0)||Number(keyBeh._getKeyholeOffsetZ?keyBeh._getKeyholeOffsetZ():0)||Number(keyBeh._getKeyholeRotationX?keyBeh._getKeyholeRotationX():0)||Number(keyBeh._getKeyholeRotationY?keyBeh._getKeyholeRotationY():0)||Number(keyBeh._getKeyholeRotationZ?keyBeh._getKeyholeRotationZ():0));
        if(hasKh){khOX=Number(keyBeh._getKeyholeOffsetX());khOY=Number(keyBeh._getKeyholeOffsetY());khOZ=Number(keyBeh._getKeyholeOffsetZ());khRX=Number(keyBeh._getKeyholeRotationX());khRY=Number(keyBeh._getKeyholeRotationY());khRZ=Number(keyBeh._getKeyholeRotationZ());}
        else if(beh._getHangOffsetX){khOX=Number(beh._getHangOffsetX());khOY=Number(beh._getHangOffsetY?beh._getHangOffsetY():0);khOZ=Number(beh._getHangOffsetZ?beh._getHangOffsetZ():0);khRX=Number(beh._getHangRotationX?beh._getHangRotationX():0);khRY=Number(beh._getHangRotationY?beh._getHangRotationY():0);khRZ=Number(beh._getHangRotationZ?beh._getHangRotationZ():0);}
        else{khOX=khOY=khOZ=khRX=khRY=khRZ=0;}
        var D2R=Math.PI/180;
        // GD-space: rotate keyhole offset by door's local quat (same -Y convention as per-hand detection)
        var rotated=new THREE.Vector3(khOX,-khOY,khOZ).applyQuaternion(doorThree.quaternion);
        obj.setX(entry.gdX+rotated.x);
        obj.setY(entry.gdY+rotated.y);
        if(obj.setZ)obj.setZ(entry.gdZ+rotated.z);
        var khQ=new THREE.Quaternion().setFromEuler(new THREE.Euler(khRX*D2R,khRY*D2R,khRZ*D2R,'ZYX'));
        var finalQ=doorThree.quaternion.clone().multiply(khQ);
        var eu=new THREE.Euler().setFromQuaternion(finalQ,'ZYX');
        obj.setAngle(eu.z*180/Math.PI);
        if(obj.setRotationX)obj.setRotationX(eu.x*180/Math.PI);
        if(obj.setRotationY)obj.setRotationY(eu.y*180/Math.PI);
        try{var phys=obj.getBehavior('Physics3D');
            if(phys&&phys._body&&typeof Jolt!=='undefined'){
                var bi=phys._sharedData.bodyInterface,id=phys._body.GetID();
                bi.SetLinearVelocity(id,phys.getVec3(0,0,0));
                bi.SetAngularVelocity(id,phys.getVec3(0,0,0));bi.ActivateBody(id);
            }}catch(e){}
    };
}
if(!gdjs._webxrVrDoorRegistry)gdjs._webxrVrDoorRegistry=[];
// Idempotent grip edge update (shared with VrGrabbable/VrHolster)
var _tickTime=runtimeScene.getTimeManager().getTimeFromStart();
if(gdjs._webxrVrGrabbableGripTickTime!==_tickTime){
    gdjs._webxrVrGrabbableGripTickTime=_tickTime;
    var _tH=['left','right'];
    for(var _thi=0;_thi<_tH.length;_thi++){
        var _thHand=_tH[_thi];var _thE=controllers[_thHand];if(!_thE)continue;
        var _sess0=tr.xr.getSession?tr.xr.getSession():null;var _thGp=null;
        if(_sess0&&_sess0.inputSources)for(var _gsi0=0;_gsi0<_sess0.inputSources.length;_gsi0++){
            var _gs0=_sess0.inputSources[_gsi0];if(_gs0.handedness===_thHand&&_gs0.gamepad){_thGp=_gs0.gamepad;break;}}
        var _thCur=_thGp&&_thGp.buttons[1]?_thGp.buttons[1].value>0.5:false;
        var _thPrev=_thE._grabGripPrev===true;
        _thE._grabGripEdgeAvailable=(_thCur&&!_thPrev);_thE._grabGripPrev=_thCur;
    }
}
var gReg=gdjs._webxrVrGrabbableRegistry||[];
if(!gdjs._webxrVrDoorVibrate){gdjs._webxrVrDoorVibrate=function(trRef,hand,val,ms){
    var sess=trRef.xr&&trRef.xr.getSession?trRef.xr.getSession():null;if(!sess||!sess.inputSources)return;
    for(var _vi=0;_vi<sess.inputSources.length;_vi++){var _vs=sess.inputSources[_vi];
        if(_vs.handedness===hand&&_vs.gamepad&&_vs.gamepad.hapticActuators&&_vs.gamepad.hapticActuators.length>0){
            _vs.gamepad.hapticActuators[0].pulse(val,ms);break;}}};
}
for(var i=0;i<objs.length;i++){
    var obj=objs[i];var beh=obj.getBehavior(behaviorName);
    if(!beh||!beh.activated())continue;
    var doorType=beh._getDoorType?String(beh._getDoorType()):'Rotating';
    var isRot=doorType!=='Sliding';
    var minV=beh._getMin?Number(beh._getMin()):-180;
    var maxV=beh._getMax?Number(beh._getMax()):180;
    var friction=beh._getFriction?Number(beh._getFriction()):30;
    var latchable=beh._getLatchable?(beh._getLatchable()==='true'||beh._getLatchable()===true):true;
    var pushEn=beh._getPushEnabled?(beh._getPushEnabled()==='true'||beh._getPushEnabled()===true):true;
    var pushF=beh._getPushForceFactor?Number(beh._getPushForceFactor()):1.0;
    var hRad=beh._getHandleRadius?Number(beh._getHandleRadius()):8;
    var kRad=beh._getKeyRadius?Number(beh._getKeyRadius()):5;
    var accKT=beh._getAcceptedKeyTags?String(beh._getAcceptedKeyTags()):'';
    var autoUnlock=beh._getAutoUnlockOnKeyInsert?(beh._getAutoUnlockOnKeyInsert()==='true'||beh._getAutoUnlockOnKeyInsert()===true):true;
    var autoUnlatchOnUnlock=beh._getAutoUnlatchOnUnlock?(beh._getAutoUnlatchOnUnlock()==='true'||beh._getAutoUnlatchOnUnlock()===true):true;
    var _lockedWas=beh._locked;
    var drawDbg=beh._getDrawDebug?(beh._getDrawDebug()==='true'||beh._getDrawDebug()===true):false;
    var threeObj=obj.get3DRendererObject?obj.get3DRendererObject():null;
    var dbgSc=null;if(drawDbg){try{var dlr=runtimeScene.getLayer('');var dlr3d=dlr.getRenderer?dlr.getRenderer():null;if(dlr3d)dbgSc=dlr3d._threeScene||dlr3d.threeScene||(dlr3d.getThreeScene?dlr3d.getThreeScene():null);}catch(e){}}
    // Lazy-init rest pose and hinge. Derived from GDevelop coordinates — NOT from
    // threeObj.matrixWorld, which is stale on the first frame (renderer runs after behaviors).
    if(!beh._restInit&&threeObj&&anchor){
        beh._restInit=true;
        // restWQ: built from GDevelop instance angles (avoids scale.y=-1 world-quat artifact).
        beh._restWQ=new THREE.Quaternion().setFromEuler(new THREE.Euler(
            (obj.getRotationX?obj.getRotationX():0)*DEG2RAD,
            (obj.getRotationY?obj.getRotationY():0)*DEG2RAD,
            (obj.getAngle?obj.getAngle():0)*DEG2RAD,'ZYX'));
        var sxL=beh._getHingeStartX?Number(beh._getHingeStartX()):0;
        var syL=beh._getHingeStartY?Number(beh._getHingeStartY()):0;
        var szL=beh._getHingeStartZ?Number(beh._getHingeStartZ()):-100;
        var exL=beh._getHingeEndX?Number(beh._getHingeEndX()):0;
        var eyL=beh._getHingeEndY?Number(beh._getHingeEndY()):0;
        var ezL=beh._getHingeEndZ?Number(beh._getHingeEndZ()):100;
        // Work entirely in scene-local space (= GD space), same as threeObj.position.
        // All offsets (hinge, handle, key zone) are relative to threeObj.position — consistent with VrBow.
        var _sl=threeObj.position;
        beh._restWP=_sl.clone();
        beh._csX=_sl.x-obj.getX();
        beh._csY=_sl.y-obj.getY();
        beh._csZ=_sl.z-(obj.getZ?obj.getZ():0);
        beh._hingeWS=new THREE.Vector3(sxL,-syL,szL).applyQuaternion(beh._restWQ).add(_sl.clone());
        beh._hingeWE=new THREE.Vector3(exL,-eyL,ezL).applyQuaternion(beh._restWQ).add(_sl.clone());
        beh._hingeAx=new THREE.Vector3().subVectors(beh._hingeWE,beh._hingeWS).normalize();
        var toC=beh._restWP.clone().sub(beh._hingeWS);
        var prjLen=toC.dot(beh._hingeAx);
        beh._hingeP=beh._hingeWS.clone().addScaledVector(beh._hingeAx,prjLen);
        beh._restFromH=beh._restWP.clone().sub(beh._hingeP);
        beh._dbgHingeWS=new THREE.Vector3(sxL,-syL,szL).applyQuaternion(threeObj.quaternion).add(_sl.clone());
        beh._dbgHingeWE=new THREE.Vector3(exL,-eyL,ezL).applyQuaternion(threeObj.quaternion).add(_sl.clone());
    }
    if(!beh._restInit)continue;
    // Current door world transform from beh._pos
    var curP=new THREE.Vector3(),curQ=new THREE.Quaternion();
    if(isRot){
        var Qr=new THREE.Quaternion().setFromAxisAngle(beh._hingeAx,beh._pos*DEG2RAD);
        curP.copy(beh._hingeP).add(beh._restFromH.clone().applyQuaternion(Qr));
        curQ.copy(Qr).multiply(beh._restWQ);
    }else{
        curP.copy(beh._restWP).addScaledVector(beh._hingeAx,beh._pos);
        curQ.copy(beh._restWQ);
    }
    // Handle and key zone world centers (local offsets in current door frame)
    var hOX=beh._getHandleOffsetX?Number(beh._getHandleOffsetX()):0;
    var hOY=beh._getHandleOffsetY?Number(beh._getHandleOffsetY()):0;
    var hOZ=beh._getHandleOffsetZ?Number(beh._getHandleOffsetZ()):0;
    var hCtr=new THREE.Vector3(hOX,-hOY,hOZ).applyQuaternion(curQ).add(curP);
    var kOX=beh._getKeyOffsetX?Number(beh._getKeyOffsetX()):0;
    var kOY=beh._getKeyOffsetY?Number(beh._getKeyOffsetY()):0;
    var kOZ=beh._getKeyOffsetZ?Number(beh._getKeyOffsetZ()):0;
    // Key zone center in GD space — mirrors per-hand detection formula exactly
    var _kOffGd=new THREE.Vector3(kOX,-kOY,kOZ).applyQuaternion(threeObj.quaternion);
    var _kGdX=threeObj.position.x+_kOffGd.x;
    var _kGdY=threeObj.position.y+_kOffGd.y;
    var _kGdZ=threeObj.position.z+_kOffGd.z;
    var kCtr=new THREE.Vector3(_kGdX,_kGdY,_kGdZ);
    // Sync key zone holster entry — store GD-space center for dock/applier
    if(beh._keyZoneHolsterEntry){
        beh._keyZoneHolsterEntry.gdX=_kGdX;
        beh._keyZoneHolsterEntry.gdY=_kGdY;
        beh._keyZoneHolsterEntry.gdZ=_kGdZ;
        beh._keyZoneHolsterEntry.acceptedTags='';
        beh._keyZoneHolsterEntry.acceptedKeyTags=accKT;
        beh._keyZoneHolsterEntry.radius=kRad;
        beh._keyZoneHolsterEntry.worldPos.set(_kGdX,-_kGdY,_kGdZ);
        beh._keyZoneHolsterEntry.worldQuat.set(-curQ.x,curQ.y,-curQ.z,curQ.w);
    }
    // Drive docked key position/rotation
    if(beh._keyZoneHolsterEntry&&beh._keyZoneHolsterEntry.occupant&&gdjs._webxrVrDoorApplyKeyholeTransform)
        gdjs._webxrVrDoorApplyKeyholeTransform(beh._keyZoneHolsterEntry);
    // Per-hand: handle/key zone sphere checks + grip logic
    var hands=['left','right'];
    var _prevHandInHandle=beh._handInHandle||{left:false,right:false};
    beh._handInHandle={left:false,right:false};beh._handInKeyZone={left:false,right:false};
    for(var _hi=0;_hi<hands.length;_hi++){
        var hand=hands[_hi];
        var hE=controllers[hand];if(!hE||!hE.connected)continue;
        var hwp=hE._adjustedWP;if(!hwp)continue;
        var hp=new THREE.Vector3(hwp.x,hwp.y,hwp.z);
        // Convert hand to scene-local (= GD position for controllers without ObjectCenter shift)
        var _hgdx=anchor.x+(hwp.x-anchor.threeX),_hgdy=anchor.y-(hwp.y-anchor.threeY),_hgdz=anchor.z+(hwp.z-anchor.threeZ);
        // Zone centers: same formula as debug spheres — threeObj.position + rotated offset with -Y convention
        var _hOff=new THREE.Vector3(hOX,-hOY,hOZ).applyQuaternion(threeObj.quaternion);
        var _kOff=new THREE.Vector3(kOX,-kOY,kOZ).applyQuaternion(threeObj.quaternion);
        var _hzx=threeObj.position.x+_hOff.x,_hzy=threeObj.position.y+_hOff.y,_hzz=threeObj.position.z+_hOff.z;
        var _kzx=threeObj.position.x+_kOff.x,_kzy=threeObj.position.y+_kOff.y,_kzz=threeObj.position.z+_kOff.z;
        var _hDx=_hgdx-_hzx,_hDy=_hgdy-_hzy,_hDz=_hgdz-_hzz;
        var _kDx=_hgdx-_kzx,_kDy=_hgdy-_kzy,_kDz=_hgdz-_kzz;
        var _wasInHandle=_prevHandInHandle[hand];
        var _hDist=Math.sqrt(_hDx*_hDx+_hDy*_hDy+_hDz*_hDz);
        beh._handInHandle[hand]=_hDist<hRad;
        beh._handInKeyZone[hand]=Math.sqrt(_kDx*_kDx+_kDy*_kDy+_kDz*_kDz)<kRad;
        var hp_sl=new THREE.Vector3(_hgdx,_hgdy,_hgdz);
        beh._prevHandP[hand]=hp_sl.clone();
        if(!_wasInHandle&&beh._handInHandle[hand])gdjs._webxrVrDoorVibrate(tr,hand,0.3,80);
        if(hE._grabGripEdgeAvailable&&beh._handInHandle[hand]){
            if(beh._latched&&!beh._locked){
                beh._latched=false;hE._grabGripEdgeAvailable=false;beh._grabbedHand=hand;
                var toH=hp_sl.clone().sub(beh._hingeP);var prjH=toH.dot(beh._hingeAx);
                beh._grabHInP=toH.clone().addScaledVector(beh._hingeAx,-prjH);
                beh._grabDPos=beh._pos;beh._grabHSlide=hp_sl.dot(beh._hingeAx);
            }else if(!beh._latched&&!beh._locked&&beh._grabbedHand===null){
                hE._grabGripEdgeAvailable=false;beh._grabbedHand=hand;
                var toH2=hp_sl.clone().sub(beh._hingeP);var prjH2=toH2.dot(beh._hingeAx);
                beh._grabHInP=toH2.clone().addScaledVector(beh._hingeAx,-prjH2);
                beh._grabDPos=beh._pos;beh._grabHSlide=hp_sl.dot(beh._hingeAx);
            }else if(beh._locked){hE._grabGripEdgeAvailable=false;
                var _skipBuzz=false;
                for(var _bzi=0;_bzi<gReg.length;_bzi++){var _bge=gReg[_bzi];
                    if(_bge.beh._state==='grabbed'&&_bge.beh._grabbingHand===hand&&_bge.obj){
                        var _bhk=null;try{_bhk=_bge.obj.getBehavior('VrKey');}catch(e){}
                        if(_bhk){var _bhkt=_bhk._getKeyTag?String(_bhk._getKeyTag()):'';
                            if(gdjs._webxrVrHolsterTagMatches&&gdjs._webxrVrHolsterTagMatches(_bhkt,accKT)){_skipBuzz=true;break;}}}}
                if(!_skipBuzz)gdjs._webxrVrDoorVibrate(tr,hand,0.8,400);}
        }
        if(beh._grabbedHand===hand){
            var _sess1=tr.xr.getSession?tr.xr.getSession():null;var _gpR=null;
            if(_sess1&&_sess1.inputSources)for(var _gsi1=0;_gsi1<_sess1.inputSources.length;_gsi1++){
                var _gs1=_sess1.inputSources[_gsi1];if(_gs1.handedness===hand&&_gs1.gamepad){_gpR=_gs1.gamepad;break;}}
            if(!(_gpR&&_gpR.buttons[1]&&_gpR.buttons[1].value>0.5))beh._grabbedHand=null;
        }
    }
    // Track door position while grabbed
    if(beh._grabbedHand){
        var gH=beh._grabbedHand;var gE=controllers[gH];
        if(gE&&gE._adjustedWP){
            var gwp=gE._adjustedWP;
            var ghp=new THREE.Vector3(anchor.x+(gwp.x-anchor.threeX),anchor.y-(gwp.y-anchor.threeY),anchor.z+(gwp.z-anchor.threeZ));
            if(isRot&&beh._grabHInP&&beh._grabHInP.length()>0.001){
                var toGH=ghp.clone().sub(beh._hingeP);var prjGH=toGH.dot(beh._hingeAx);
                var curIP=toGH.clone().addScaledVector(beh._hingeAx,-prjGH);
                if(curIP.length()>0.001){
                    var ang=beh._grabHInP.angleTo(curIP);
                    var cross=new THREE.Vector3().crossVectors(beh._grabHInP,curIP);
                    if(cross.dot(beh._hingeAx)<0)ang=-ang;
                    var newPos=Math.max(minV,Math.min(maxV,beh._grabDPos+ang*(180/Math.PI)));
                    beh._vel=(newPos-beh._pos)/Math.max(dt,0.001);beh._pos=newPos;
                }
            }else if(!isRot){
                var curSl=ghp.dot(beh._hingeAx);
                var newD=Math.max(minV,Math.min(maxV,beh._grabDPos+(curSl-beh._grabHSlide)));
                beh._vel=(newD-beh._pos)/Math.max(dt,0.001);beh._pos=newD;
            }
        }
    }else{
        // Free: push from hands + held grabbables
        if(pushEn&&!beh._latched){
            var pushV=0;
            // Rotation-aware AABB in GD/threeObj.position space — same frame as _pp and _prevHandP
            var _doorAabb=null;
            var _hw=(obj.getWidth?obj.getWidth():0)/2,_hh=(obj.getHeight?obj.getHeight():0)/2,_hd=(obj.getDepth?obj.getDepth():0)/2;
            if(threeObj&&(_hw||_hh||_hd)){
                var _q=threeObj.quaternion;
                var _cX=threeObj.position.x,_cY=threeObj.position.y,_cZ=threeObj.position.z;
                var _eX=Math.abs(1-2*(_q.y*_q.y+_q.z*_q.z))*_hw+2*Math.abs(_q.x*_q.y-_q.w*_q.z)*_hh+2*Math.abs(_q.x*_q.z+_q.w*_q.y)*_hd;
                var _eY=Math.abs(2*(_q.x*_q.y+_q.w*_q.z))*_hw+Math.abs(1-2*(_q.x*_q.x+_q.z*_q.z))*_hh+2*Math.abs(_q.y*_q.z-_q.w*_q.x)*_hd;
                var _eZ=Math.abs(2*(_q.x*_q.z-_q.w*_q.y))*_hw+2*Math.abs(_q.y*_q.z+_q.w*_q.x)*_hh+Math.abs(1-2*(_q.x*_q.x+_q.y*_q.y))*_hd;
                _doorAabb={minX:_cX-_eX,maxX:_cX+_eX,minY:_cY-_eY,maxY:_cY+_eY,minZ:_cZ-_eZ,maxZ:_cZ+_eZ};
            }
            if(!_doorAabb){_doorAabb={minX:obj.getX()-_hw,maxX:obj.getX()+_hw,minY:obj.getY()-_hh,maxY:obj.getY()+_hh,minZ:(obj.getZ?obj.getZ():0)-_hd,maxZ:(obj.getZ?obj.getZ():0)+_hd};}
            // Per-contact tang/radius: use contact point, not door center (fixes center-pivot where curP=hingeP).
            function _ptang(pt){
                if(!isRot)return{tang:beh._hingeAx.clone(),r:1};
                var _d=pt.clone().sub(beh._hingeP);var _prj=_d.dot(beh._hingeAx);
                _d.addScaledVector(beh._hingeAx,-_prj);
                return _d.length()>0.001?{tang:new THREE.Vector3().crossVectors(beh._hingeAx,_d).normalize(),r:_d.length()}:{tang:new THREE.Vector3(),r:1};
            }
            for(var _phi=0;_phi<hands.length;_phi++){
                var _ph=hands[_phi];var _pe=controllers[_ph];
                if(!_pe||!_pe.connected||!_pe._adjustedWP)continue;
                var _pawp=_pe._adjustedWP;
                var _pp=new THREE.Vector3(anchor.x+(_pawp.x-anchor.threeX),anchor.y-(_pawp.y-anchor.threeY),anchor.z+(_pawp.z-anchor.threeZ));
                if(_pp.x<_doorAabb.minX-2||_pp.x>_doorAabb.maxX+2)continue;
                if(_pp.y<_doorAabb.minY-2||_pp.y>_doorAabb.maxY+2)continue;
                if(_pp.z<_doorAabb.minZ-2||_pp.z>_doorAabb.maxZ+2)continue;
                var _pprev=beh._prevHandP[_ph]||null;
                var _pvel=_pprev&&dt>0?_pp.clone().sub(_pprev).divideScalar(dt):new THREE.Vector3();
                var _pt=_ptang(_pp);var _vC=_pvel.dot(_pt.tang);
                pushV+=isRot?(_vC/_pt.r)*(180/Math.PI)*pushF:_vC*pushF;
            }
            for(var _gri=0;_gri<gReg.length;_gri++){
                var _ge=gReg[_gri];
                if(_ge.beh._state!=='grabbed'&&_ge.beh._state!=='flyingToCtrl')continue;
                var _gObj=_ge.obj;if(!_gObj)continue;
                var _gpX=_gObj.getX(),_gpY=_gObj.getY(),_gpZ=_gObj.getZ?_gObj.getZ():0;
                var _gHalfW=(_gObj.getWidth?_gObj.getWidth():0)/2,_gHalfH=(_gObj.getHeight?_gObj.getHeight():0)/2,_gHalfD=(_gObj.getDepth?_gObj.getDepth():0)/2;
                if(_gpX<_doorAabb.minX-_gHalfW-2||_gpX>_doorAabb.maxX+_gHalfW+2)continue;
                if(_gpY<_doorAabb.minY-_gHalfH-2||_gpY>_doorAabb.maxY+_gHalfH+2)continue;
                if(_gpZ<_doorAabb.minZ-_gHalfD-2||_gpZ>_doorAabb.maxZ+_gHalfD+2)continue;
                var _ghE=controllers[_ge.beh._grabbingHand];
                if(!_ghE||!_ghE._adjustedWP)continue;
                var _ghawp=_ghE._adjustedWP;
                var _ghp=new THREE.Vector3(anchor.x+(_ghawp.x-anchor.threeX),anchor.y-(_ghawp.y-anchor.threeY),anchor.z+(_ghawp.z-anchor.threeZ));
                var _gprev=beh._prevHandP[_ge.beh._grabbingHand]||null;
                var _gvel=_gprev&&dt>0?_ghp.clone().sub(_gprev).divideScalar(dt):new THREE.Vector3();
                var _gt=_ptang(_ghp);var _gvC=_gvel.dot(_gt.tang);
                pushV+=isRot?(_gvC/_gt.r)*(180/Math.PI)*pushF:_gvC*pushF;
            }
            beh._vel+=pushV;
        }
        // Coulomb friction + position integration
        if(beh._vel>0){beh._vel-=friction*dt;if(beh._vel<0)beh._vel=0;}
        else if(beh._vel<0){beh._vel+=friction*dt;if(beh._vel>0)beh._vel=0;}
        beh._pos+=beh._vel*dt;
        if(beh._pos>maxV){beh._pos=maxV;beh._vel=0;}
        if(beh._pos<minV){beh._pos=minV;beh._vel=0;}
        // Auto-relatch when coast stops at rest
        if(latchable&&!beh._latched&&beh._vel===0&&Math.abs(beh._pos)<0.5&&(beh._locked||!autoUnlatchOnUnlock)){beh._pos=0;beh._latched=true;}
    }
    // Apply: Kinematic — drive door to hinge-constrained position each frame
    if(isRot){
        var Qr2=new THREE.Quaternion().setFromAxisAngle(beh._hingeAx,beh._pos*DEG2RAD);
        curP.copy(beh._hingeP).add(beh._restFromH.clone().applyQuaternion(Qr2));
        curQ.copy(Qr2).multiply(beh._restWQ);
    }else{
        curP.copy(beh._restWP).addScaledVector(beh._hingeAx,beh._pos);
        curQ.copy(beh._restWQ);
    }
    // curP = scene-local geometric center. setX/Y/Z = curP minus center offset.
    obj.setX(curP.x-beh._csX);
    obj.setY(curP.y-beh._csY);
    if(obj.setZ)obj.setZ(curP.z-beh._csZ);
    var euGd=new THREE.Euler().setFromQuaternion(curQ,'ZYX');
    obj.setAngle(euGd.z*180/Math.PI);
    if(obj.setRotationX)obj.setRotationX(euGd.x*180/Math.PI);
    if(obj.setRotationY)obj.setRotationY(euGd.y*180/Math.PI);
    // Note: do NOT set threeObj.quaternion here — GDevelop renderer updates it from setAngle/setRotationX/Y.
    try{var _physK=obj.getBehavior('Physics3D');
        if(_physK&&_physK._body&&typeof Jolt!=='undefined')
            _physK._sharedData.bodyInterface.ActivateBody(_physK._body.GetID());
    }catch(e){}
    // Key zone change detection + auto-unlock
    // Key zone change detection + auto-unlock
    // Eject non-VrKey occupants (key zone only accepts VrKey objects)
    var keyOcc=beh._keyZoneHolsterEntry?beh._keyZoneHolsterEntry.occupant:null;
    if(keyOcc&&keyOcc.obj){
        var _isVrKey=false;try{var _kvb=keyOcc.obj.getBehavior('VrKey');_isVrKey=!!_kvb;}catch(e){}
        if(!_isVrKey){
            // Not a VrKey — eject: restore VrGrabbable state to idle
            try{var _kgb=keyOcc.obj.getBehavior('VrGrabbable');
                if(_kgb){_kgb._state='idle';_kgb._holsterEntry=null;
                    try{var _kphy=keyOcc.obj.getBehavior('Physics3D');
                        if(_kphy&&_kphy._body&&typeof Jolt!=='undefined'){
                            var _kbi=_kphy._sharedData.bodyInterface,_kid=_kphy._body.GetID();
                            _kbi.SetMotionType(_kid,_kgb._origJoltMotionType||Jolt.EMotionType_Dynamic,Jolt.EActivation_Activate);
                        }}catch(e2){}
                }}catch(e){}
            beh._keyZoneHolsterEntry.occupant=null;
            keyOcc=null;
        }
    }
    var keyInZ=!!keyOcc;
    // KeyTag vs AcceptedKeyTags — completely independent of HolsterTag
    var kBeh2=null;try{if(keyOcc&&keyOcc.obj)kBeh2=keyOcc.obj.getBehavior('VrKey');}catch(e){}
    var kTag2=kBeh2&&kBeh2._getKeyTag?String(kBeh2._getKeyTag()):'';
    var tagMatch=gdjs._webxrVrHolsterTagMatches?gdjs._webxrVrHolsterTagMatches(kTag2,accKT):true;
    if(keyInZ&&!beh._keyInZonePrev){
        beh._isKeyJustInserted=true;
        if(autoUnlock&&tagMatch&&beh._locked){beh._locked=false;beh._isJustUnlocked=true;}
        // Vibrate the hand holding the key, only when tag matches
        if(tagMatch){var _kvgb=null;try{if(keyOcc&&keyOcc.obj)_kvgb=keyOcc.obj.getBehavior('VrGrabbable');}catch(e){}
        var _kvHand=_kvgb&&_kvgb._grabbingHand?_kvgb._grabbingHand:null;
        if(_kvHand)gdjs._webxrVrDoorVibrate(tr,_kvHand,0.3,80);}
    }
    if(!keyInZ&&beh._keyInZonePrev)beh._isKeyJustRemoved=true;
    beh._keyInZonePrev=keyInZ;
    // Auto-unlatch when door transitions from locked to unlocked (any cause)
    if(_lockedWas&&!beh._locked&&autoUnlatchOnUnlock)beh._latched=false;
    // Debug rendering — VrBow pattern: threeObj.position/.quaternion, local offsets with -Y
    if(drawDbg&&dbgSc&&threeObj){
        var _dbgP=threeObj.position;
        var _dbgQ=threeObj.quaternion;
        // Hinge line (fixed at rest pose, computed once at init)
        if(beh._dbgHingeWS&&beh._dbgHingeWE){
            if(!beh._hingeLine){
                beh._hingeLine=new THREE.Line(
                    new THREE.BufferGeometry().setFromPoints([beh._dbgHingeWS.clone(),beh._dbgHingeWE.clone()]),
                    new THREE.LineBasicMaterial({color:new THREE.Color(1,0,1)}));
                beh._hingeLine.frustumCulled=false;beh._hingeLine.raycast=function(){};
                dbgSc.add(beh._hingeLine);
            }else{
                beh._hingeLine.geometry.setFromPoints([beh._dbgHingeWS.clone(),beh._dbgHingeWE.clone()]);
            }
            beh._hingeLine.visible=true;
        }
        // Handle sphere (green translucent) — follows door
        var _dbgHCtr=new THREE.Vector3(hOX,-hOY,hOZ).applyQuaternion(_dbgQ).add(_dbgP);
        if(!beh._handleSphere||beh._handleSphere._builtR!==hRad){
            if(beh._handleSphere){dbgSc.remove(beh._handleSphere);beh._handleSphere.geometry.dispose();beh._handleSphere.material.dispose();}
            beh._handleSphere=new THREE.Mesh(
                new THREE.SphereGeometry(hRad,12,8),
                new THREE.MeshBasicMaterial({color:new THREE.Color(0,1,0),transparent:true,opacity:0.35}));
            beh._handleSphere.frustumCulled=false;beh._handleSphere.raycast=function(){};beh._handleSphere._builtR=hRad;
            dbgSc.add(beh._handleSphere);
        }
        beh._handleSphere.position.copy(_dbgHCtr);
        var _anyInHandle=!!(beh._handInHandle&&(beh._handInHandle.left||beh._handInHandle.right));
        beh._handleSphere.material.opacity=_anyInHandle?0.75:0.35;
        beh._handleSphere.material.color.setRGB(_anyInHandle?0.2:0,_anyInHandle?1:1,_anyInHandle?0.2:0);
        beh._handleSphere.visible=true;
        // Key zone sphere (yellow/red wireframe→solid when active) — follows door
        var _dbgKCtr=new THREE.Vector3(kOX,-kOY,kOZ).applyQuaternion(_dbgQ).add(_dbgP);
        if(!beh._keySphere||beh._keySphere._builtR!==kRad){
            if(beh._keySphere){dbgSc.remove(beh._keySphere);beh._keySphere.geometry.dispose();beh._keySphere.material.dispose();}
            beh._keySphere=new THREE.Mesh(
                new THREE.SphereGeometry(kRad,12,8),
                new THREE.MeshBasicMaterial({color:new THREE.Color(1,0.8,0),wireframe:true,transparent:true,opacity:0.35}));
            beh._keySphere.frustumCulled=false;beh._keySphere.raycast=function(){};beh._keySphere._builtR=kRad;
            dbgSc.add(beh._keySphere);
        }
        var _anyInKey=!!(beh._handInKeyZone&&(beh._handInKeyZone.left||beh._handInKeyZone.right));
        beh._keySphere.material.wireframe=!_anyInKey;
        beh._keySphere.material.opacity=_anyInKey?0.7:0.35;
        beh._keySphere.material.color.setRGB(1,_anyInKey?1:0.8,_anyInKey?0:0);
        beh._keySphere.position.copy(_dbgKCtr);
        beh._keySphere.visible=true;
    }else{
        if(beh._hingeLine)beh._hingeLine.visible=false;
        if(beh._handleSphere)beh._handleSphere.visible=false;
        if(beh._keySphere)beh._keySphere.visible=false;
    }
}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.userFunc0x2963fe8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.userFunc0x2966e08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){
    var beh=objs[i].getBehavior(behaviorName);if(!beh)continue;
    beh._isKeyJustInserted=false;beh._isKeyJustRemoved=false;beh._isJustUnlocked=false;
}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.userFunc0x2966e08(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.userFunc0x2966d80 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh){beh._locked=true;}}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.userFunc0x2966d80(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.Lock = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LockContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.userFunc0x2966d38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._locked){beh._locked=false;beh._isJustUnlocked=true;}}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.userFunc0x2966d38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.Unlock = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlockContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.userFunc0x2966d38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(!beh)continue;
    if(beh._locked){beh._locked=false;beh._isJustUnlocked=true;}else{beh._locked=true;}}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.userFunc0x2966d38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLock = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.ToggleLockContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.userFunc0x2966d70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(beh._locked));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.userFunc0x2966d70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLocked = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLockedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.userFunc0x2966d70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(!beh._locked));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.userFunc0x2966d70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlocked = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsUnlockedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.userFunc0x2966df0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(beh._isJustUnlocked));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.userFunc0x2966df0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlocked = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsJustUnlockedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.userFunc0x2966d80 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh){beh._latched=true;beh._pos=0;beh._vel=0;}}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.userFunc0x2966d80(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.Latch = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.LatchContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.userFunc0x2966d38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&!beh._locked)beh._latched=false;}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.userFunc0x2966d38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.Unlatch = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.UnlatchContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.userFunc0x2966d70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(beh._latched));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.userFunc0x2966d70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatched = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.userFunc0x2966dd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setLatchable)beh._setLatchable(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.userFunc0x2966dd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchable = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetLatchableContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.userFunc0x2966d98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&beh._getLatchable&&(beh._getLatchable()==='true'||beh._getLatchable()===true));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.userFunc0x2966d98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchable = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsLatchableContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.userFunc0x2966e88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setAutoUnlatchOnUnlock)beh._setAutoUnlatchOnUnlock(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.userFunc0x2966e88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlock = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAutoUnlatchOnUnlockContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.userFunc0x2966e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&beh._getAutoUnlatchOnUnlock&&(beh._getAutoUnlatchOnUnlock()==='true'||beh._getAutoUnlatchOnUnlock()===true));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.userFunc0x2966e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlock = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAutoUnlatchOnUnlockContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.userFunc0x2966d70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(Math.abs(beh._pos||0)/(Math.max(Math.abs(beh._getMax?Number(beh._getMax()):180),Math.abs(beh._getMin?Number(beh._getMin()):-180))||1)>0.05));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.userFunc0x2966d70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpen = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsOpenContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.userFunc0x2966d70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(Math.abs(beh._pos||0)<0.5&&Math.abs(beh._vel||0)<0.5));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.userFunc0x2966d70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRest = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsAtRestContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.userFunc0x2966d80 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(!beh)continue;
    beh._pos=0;beh._vel=0;if(beh._getLatchable&&(beh._getLatchable()==='true'||beh._getLatchable()===true))beh._latched=true;}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.userFunc0x2966d80(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.Close = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.CloseContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.userFunc0x2966da8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh?Number(beh._pos||0):0;
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.userFunc0x2966da8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPosition = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorPositionContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.userFunc0x2966da8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
if(!beh){eventsFunctionContext.returnValue=0;return;}
var pos=Number(beh._pos||0);
var minV=beh._getMin?Number(beh._getMin()):-180;
var maxV=beh._getMax?Number(beh._getMax()):180;
var range=Math.max(maxV-minV,0.001);
eventsFunctionContext.returnValue=Math.max(0,Math.min(1,(pos-minV)/range));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.userFunc0x2966da8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpenness = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DoorOpennessContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.userFunc0x2966e28 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=Number(eventsFunctionContext.getArgument('Value'));
for(var i=0;i<objs.length;i++){
    var beh=objs[i].getBehavior(behaviorName);if(!beh)continue;
    var minV=beh._getMin?Number(beh._getMin()):-180;
    var maxV=beh._getMax?Number(beh._getMax()):180;
    beh._pos=Math.max(minV,Math.min(maxV,v));beh._vel=0;
    if(beh._getLatchable&&(beh._getLatchable()==='true'||beh._getLatchable()===true)&&Math.abs(beh._pos)<0.5){beh._pos=0;beh._latched=true;}
}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.userFunc0x2966e28(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPosition = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetDoorPositionContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.userFunc0x2966da8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setMin)beh._setMin(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.userFunc0x2966da8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMin = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMinContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.userFunc0x2966dc8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getMin?Number(beh._getMin()):0;
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.userFunc0x2966dc8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.Min = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MinContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.userFunc0x2966da8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setMax)beh._setMax(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.userFunc0x2966da8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMax = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetMaxContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.userFunc0x2966dc8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getMax?Number(beh._getMax()):0;
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.userFunc0x2966dc8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.Max = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.MaxContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.userFunc0x2966e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&((beh._handInHandle&&(beh._handInHandle.left||beh._handInHandle.right))));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.userFunc0x2966e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZone = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInHandleZoneContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.userFunc0x2966df0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&((beh._handInKeyZone&&(beh._handInKeyZone.left||beh._handInKeyZone.right))));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.userFunc0x2966df0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZone = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandInKeyZoneContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.userFunc0x2966e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(beh._grabbedHand!==null&&beh._grabbedHand!==undefined));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.userFunc0x2966e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoor = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsHandHoldingDoorContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.userFunc0x2966d98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(!!(beh._keyZoneHolsterEntry&&beh._keyZoneHolsterEntry.occupant)));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.userFunc0x2966d98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZone = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyInZoneContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.userFunc0x2966e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
if(!beh||!beh._keyZoneHolsterEntry||!beh._keyZoneHolsterEntry.occupant){eventsFunctionContext.returnValue=false;return;}
var occ=beh._keyZoneHolsterEntry.occupant;
var kBeh=null;try{kBeh=occ.obj.getBehavior('VrKey');}catch(e){}
if(!kBeh){eventsFunctionContext.returnValue=false;return;}
// KeyTag vs AcceptedKeyTags — independent of HolsterTag
var kTag=kBeh._getKeyTag?String(kBeh._getKeyTag()):'';
var accKT=beh._getAcceptedKeyTags?String(beh._getAcceptedKeyTags()):'';
eventsFunctionContext.returnValue=!!(gdjs._webxrVrHolsterTagMatches&&gdjs._webxrVrHolsterTagMatches(kTag,accKT));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.userFunc0x2966e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZone = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsMatchingKeyInZoneContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.userFunc0x2966e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(beh._isKeyJustInserted));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.userFunc0x2966e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInserted = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustInsertedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.userFunc0x2966e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&(beh._isKeyJustRemoved));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.userFunc0x2966e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemoved = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsKeyJustRemovedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.userFunc0x2966e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
var occ=beh&&beh._keyZoneHolsterEntry?beh._keyZoneHolsterEntry.occupant:null;
eventsFunctionContext.returnValue=occ&&occ.obj&&occ.obj.getName?occ.obj.getName():'';
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.userFunc0x2966e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectName = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneObjectNameContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.userFunc0x2966d98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
var occ=beh&&beh._keyZoneHolsterEntry?beh._keyZoneHolsterEntry.occupant:null;
var kBeh=null;try{if(occ&&occ.obj)kBeh=occ.obj.getBehavior('VrKey');}catch(e){}
eventsFunctionContext.returnValue=kBeh&&kBeh._getKeyTag?String(kBeh._getKeyTag()):'';
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.userFunc0x2966d98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTag = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyInZoneTagContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.userFunc0x2966e78 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setPushForceFactor)beh._setPushForceFactor(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.userFunc0x2966e78(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactor = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetPushForceFactorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.userFunc0x2966db8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getPushForceFactor?Number(beh._getPushForceFactor()):1;
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.userFunc0x2966db8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactor = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.PushForceFactorContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.userFunc0x2966dd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setFriction)beh._setFriction(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.userFunc0x2966dd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFriction = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetFrictionContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.userFunc0x2966d80 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getFriction?Number(beh._getFriction()):30;
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.userFunc0x2966d80(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.Friction = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.FrictionContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.userFunc0x2966e78 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=String(eventsFunctionContext.getArgument('Value'));
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setAcceptedKeyTags)beh._setAcceptedKeyTags(v);}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.userFunc0x2966e78(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTags = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetAcceptedKeyTagsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.userFunc0x2966df0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getAcceptedKeyTags?String(beh._getAcceptedKeyTags()):'';
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.userFunc0x2966df0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTags = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.AcceptedKeyTagsContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.userFunc0x2966d60 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setDrawDebug)beh._setDrawDebug('true');}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.userFunc0x2966d60(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebug = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.EnableDebugContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.userFunc0x2966d60 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setDrawDebug)beh._setDrawDebug('false');}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.userFunc0x2966d60(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebug = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.DisableDebugContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.userFunc0x2966df0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=!!(beh&&beh._getDrawDebug&&(beh._getDrawDebug()==='true'||beh._getDrawDebug()===true));
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.userFunc0x2966df0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabled = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.IsDebugEnabledContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.userFunc0x2966e28 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=String(eventsFunctionContext.getArgument('Color'));
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setHandleColor)beh._setHandleColor(v);}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.userFunc0x2966e28(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColor = function(Color, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHandleColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.userFunc0x2966d98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getHandleColor?String(beh._getHandleColor()):'255;255;255';
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.userFunc0x2966d98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColor = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HandleColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.userFunc0x2966dd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=String(eventsFunctionContext.getArgument('Color'));
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setKeyColor)beh._setKeyColor(v);}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.userFunc0x2966dd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColor = function(Color, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetKeyColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.userFunc0x2966d70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getKeyColor?String(beh._getKeyColor()):'255;255;255';
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.userFunc0x2966d70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColor = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.KeyColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.userFunc0x2966e88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=String(eventsFunctionContext.getArgument('Color'));
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setHingeLineDebugColor)beh._setHingeLineDebugColor(v);}
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.userFunc0x2966e88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColor = function(Color, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.SetHingeLineDebugColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext = {};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.userFunc0x2966e40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getHingeLineDebugColor?String(beh._getHingeLineDebugColor()):'255;255;255';
};
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.userFunc0x2966e40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColor = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Doors"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Doors"),
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

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor.prototype.HingeLineDebugColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("WebXR_Doors::VrDoor", gdjs.evtsExt__WebXR_Doors__VrDoor.VrDoor);
