
gdjs.evtsExt__WebXR_Archery__VrBow = gdjs.evtsExt__WebXR_Archery__VrBow || {};

/**
 * Behavior generated from VR Bow
 */
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow = class VrBow extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.AcceptedArrowTags = behaviorData.AcceptedArrowTags !== undefined ? behaviorData.AcceptedArrowTags : "";
    this._behaviorData.BowForwardAxisX = behaviorData.BowForwardAxisX !== undefined ? behaviorData.BowForwardAxisX : Number("0") || 0;
    this._behaviorData.BowForwardAxisY = behaviorData.BowForwardAxisY !== undefined ? behaviorData.BowForwardAxisY : Number("1") || 0;
    this._behaviorData.BowForwardAxisZ = behaviorData.BowForwardAxisZ !== undefined ? behaviorData.BowForwardAxisZ : Number("0") || 0;
    this._behaviorData.MaxDrawDistance = behaviorData.MaxDrawDistance !== undefined ? behaviorData.MaxDrawDistance : Number("60") || 0;
    this._behaviorData.MaxArrowSpeed = behaviorData.MaxArrowSpeed !== undefined ? behaviorData.MaxArrowSpeed : Number("2500") || 0;
    this._behaviorData.LateralDisconnectTolerance = behaviorData.LateralDisconnectTolerance !== undefined ? behaviorData.LateralDisconnectTolerance : Number("20") || 0;
    this._behaviorData.NockHapticIntensity = behaviorData.NockHapticIntensity !== undefined ? behaviorData.NockHapticIntensity : Number("0.4") || 0;
    this._behaviorData.NockHapticDuration = behaviorData.NockHapticDuration !== undefined ? behaviorData.NockHapticDuration : Number("50") || 0;
    this._behaviorData.DrawHapticIntensity = behaviorData.DrawHapticIntensity !== undefined ? behaviorData.DrawHapticIntensity : Number("0.15") || 0;
    this._behaviorData.DrawHapticDuration = behaviorData.DrawHapticDuration !== undefined ? behaviorData.DrawHapticDuration : Number("10") || 0;
    this._behaviorData.DrawHapticPulsePerUnit = behaviorData.DrawHapticPulsePerUnit !== undefined ? behaviorData.DrawHapticPulsePerUnit : Number("1") || 0;
    this._behaviorData.BowstringEnabled = behaviorData.BowstringEnabled !== undefined ? behaviorData.BowstringEnabled : false;
    this._behaviorData.BowstringStartX = behaviorData.BowstringStartX !== undefined ? behaviorData.BowstringStartX : Number("0") || 0;
    this._behaviorData.BowstringStartY = behaviorData.BowstringStartY !== undefined ? behaviorData.BowstringStartY : Number("50") || 0;
    this._behaviorData.BowstringStartZ = behaviorData.BowstringStartZ !== undefined ? behaviorData.BowstringStartZ : Number("0") || 0;
    this._behaviorData.BowstringEndX = behaviorData.BowstringEndX !== undefined ? behaviorData.BowstringEndX : Number("0") || 0;
    this._behaviorData.BowstringEndY = behaviorData.BowstringEndY !== undefined ? behaviorData.BowstringEndY : Number("-50") || 0;
    this._behaviorData.BowstringEndZ = behaviorData.BowstringEndZ !== undefined ? behaviorData.BowstringEndZ : Number("0") || 0;
    this._behaviorData.BowstringColor = behaviorData.BowstringColor !== undefined ? behaviorData.BowstringColor : "255;255;255";
    this._behaviorData.BowstringSnapBackSeconds = behaviorData.BowstringSnapBackSeconds !== undefined ? behaviorData.BowstringSnapBackSeconds : Number("0.08") || 0;
    this._behaviorData.NockSnapRadius = behaviorData.NockSnapRadius !== undefined ? behaviorData.NockSnapRadius : Number("5") || 0;
    this._behaviorData.DrawNockingSphere = behaviorData.DrawNockingSphere !== undefined ? behaviorData.DrawNockingSphere : false;
    this._behaviorData.NockSphereColor = behaviorData.NockSphereColor !== undefined ? behaviorData.NockSphereColor : "255;255;0";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.AcceptedArrowTags !== undefined)
      this._behaviorData.AcceptedArrowTags = behaviorOverriding.AcceptedArrowTags;
    if (behaviorOverriding.BowForwardAxisX !== undefined)
      this._behaviorData.BowForwardAxisX = behaviorOverriding.BowForwardAxisX;
    if (behaviorOverriding.BowForwardAxisY !== undefined)
      this._behaviorData.BowForwardAxisY = behaviorOverriding.BowForwardAxisY;
    if (behaviorOverriding.BowForwardAxisZ !== undefined)
      this._behaviorData.BowForwardAxisZ = behaviorOverriding.BowForwardAxisZ;
    if (behaviorOverriding.MaxDrawDistance !== undefined)
      this._behaviorData.MaxDrawDistance = behaviorOverriding.MaxDrawDistance;
    if (behaviorOverriding.MaxArrowSpeed !== undefined)
      this._behaviorData.MaxArrowSpeed = behaviorOverriding.MaxArrowSpeed;
    if (behaviorOverriding.LateralDisconnectTolerance !== undefined)
      this._behaviorData.LateralDisconnectTolerance = behaviorOverriding.LateralDisconnectTolerance;
    if (behaviorOverriding.NockHapticIntensity !== undefined)
      this._behaviorData.NockHapticIntensity = behaviorOverriding.NockHapticIntensity;
    if (behaviorOverriding.NockHapticDuration !== undefined)
      this._behaviorData.NockHapticDuration = behaviorOverriding.NockHapticDuration;
    if (behaviorOverriding.DrawHapticIntensity !== undefined)
      this._behaviorData.DrawHapticIntensity = behaviorOverriding.DrawHapticIntensity;
    if (behaviorOverriding.DrawHapticDuration !== undefined)
      this._behaviorData.DrawHapticDuration = behaviorOverriding.DrawHapticDuration;
    if (behaviorOverriding.DrawHapticPulsePerUnit !== undefined)
      this._behaviorData.DrawHapticPulsePerUnit = behaviorOverriding.DrawHapticPulsePerUnit;
    if (behaviorOverriding.BowstringEnabled !== undefined)
      this._behaviorData.BowstringEnabled = behaviorOverriding.BowstringEnabled;
    if (behaviorOverriding.BowstringStartX !== undefined)
      this._behaviorData.BowstringStartX = behaviorOverriding.BowstringStartX;
    if (behaviorOverriding.BowstringStartY !== undefined)
      this._behaviorData.BowstringStartY = behaviorOverriding.BowstringStartY;
    if (behaviorOverriding.BowstringStartZ !== undefined)
      this._behaviorData.BowstringStartZ = behaviorOverriding.BowstringStartZ;
    if (behaviorOverriding.BowstringEndX !== undefined)
      this._behaviorData.BowstringEndX = behaviorOverriding.BowstringEndX;
    if (behaviorOverriding.BowstringEndY !== undefined)
      this._behaviorData.BowstringEndY = behaviorOverriding.BowstringEndY;
    if (behaviorOverriding.BowstringEndZ !== undefined)
      this._behaviorData.BowstringEndZ = behaviorOverriding.BowstringEndZ;
    if (behaviorOverriding.BowstringColor !== undefined)
      this._behaviorData.BowstringColor = behaviorOverriding.BowstringColor;
    if (behaviorOverriding.BowstringSnapBackSeconds !== undefined)
      this._behaviorData.BowstringSnapBackSeconds = behaviorOverriding.BowstringSnapBackSeconds;
    if (behaviorOverriding.NockSnapRadius !== undefined)
      this._behaviorData.NockSnapRadius = behaviorOverriding.NockSnapRadius;
    if (behaviorOverriding.DrawNockingSphere !== undefined)
      this._behaviorData.DrawNockingSphere = behaviorOverriding.DrawNockingSphere;
    if (behaviorOverriding.NockSphereColor !== undefined)
      this._behaviorData.NockSphereColor = behaviorOverriding.NockSphereColor;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    AcceptedArrowTags: this._behaviorData.AcceptedArrowTags,
    BowForwardAxisX: this._behaviorData.BowForwardAxisX,
    BowForwardAxisY: this._behaviorData.BowForwardAxisY,
    BowForwardAxisZ: this._behaviorData.BowForwardAxisZ,
    MaxDrawDistance: this._behaviorData.MaxDrawDistance,
    MaxArrowSpeed: this._behaviorData.MaxArrowSpeed,
    LateralDisconnectTolerance: this._behaviorData.LateralDisconnectTolerance,
    NockHapticIntensity: this._behaviorData.NockHapticIntensity,
    NockHapticDuration: this._behaviorData.NockHapticDuration,
    DrawHapticIntensity: this._behaviorData.DrawHapticIntensity,
    DrawHapticDuration: this._behaviorData.DrawHapticDuration,
    DrawHapticPulsePerUnit: this._behaviorData.DrawHapticPulsePerUnit,
    BowstringEnabled: this._behaviorData.BowstringEnabled,
    BowstringStartX: this._behaviorData.BowstringStartX,
    BowstringStartY: this._behaviorData.BowstringStartY,
    BowstringStartZ: this._behaviorData.BowstringStartZ,
    BowstringEndX: this._behaviorData.BowstringEndX,
    BowstringEndY: this._behaviorData.BowstringEndY,
    BowstringEndZ: this._behaviorData.BowstringEndZ,
    BowstringColor: this._behaviorData.BowstringColor,
    BowstringSnapBackSeconds: this._behaviorData.BowstringSnapBackSeconds,
    NockSnapRadius: this._behaviorData.NockSnapRadius,
    DrawNockingSphere: this._behaviorData.DrawNockingSphere,
    NockSphereColor: this._behaviorData.NockSphereColor,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.AcceptedArrowTags !== undefined)
      this._behaviorData.AcceptedArrowTags = networkSyncData.props.AcceptedArrowTags;
    if (networkSyncData.props.BowForwardAxisX !== undefined)
      this._behaviorData.BowForwardAxisX = networkSyncData.props.BowForwardAxisX;
    if (networkSyncData.props.BowForwardAxisY !== undefined)
      this._behaviorData.BowForwardAxisY = networkSyncData.props.BowForwardAxisY;
    if (networkSyncData.props.BowForwardAxisZ !== undefined)
      this._behaviorData.BowForwardAxisZ = networkSyncData.props.BowForwardAxisZ;
    if (networkSyncData.props.MaxDrawDistance !== undefined)
      this._behaviorData.MaxDrawDistance = networkSyncData.props.MaxDrawDistance;
    if (networkSyncData.props.MaxArrowSpeed !== undefined)
      this._behaviorData.MaxArrowSpeed = networkSyncData.props.MaxArrowSpeed;
    if (networkSyncData.props.LateralDisconnectTolerance !== undefined)
      this._behaviorData.LateralDisconnectTolerance = networkSyncData.props.LateralDisconnectTolerance;
    if (networkSyncData.props.NockHapticIntensity !== undefined)
      this._behaviorData.NockHapticIntensity = networkSyncData.props.NockHapticIntensity;
    if (networkSyncData.props.NockHapticDuration !== undefined)
      this._behaviorData.NockHapticDuration = networkSyncData.props.NockHapticDuration;
    if (networkSyncData.props.DrawHapticIntensity !== undefined)
      this._behaviorData.DrawHapticIntensity = networkSyncData.props.DrawHapticIntensity;
    if (networkSyncData.props.DrawHapticDuration !== undefined)
      this._behaviorData.DrawHapticDuration = networkSyncData.props.DrawHapticDuration;
    if (networkSyncData.props.DrawHapticPulsePerUnit !== undefined)
      this._behaviorData.DrawHapticPulsePerUnit = networkSyncData.props.DrawHapticPulsePerUnit;
    if (networkSyncData.props.BowstringEnabled !== undefined)
      this._behaviorData.BowstringEnabled = networkSyncData.props.BowstringEnabled;
    if (networkSyncData.props.BowstringStartX !== undefined)
      this._behaviorData.BowstringStartX = networkSyncData.props.BowstringStartX;
    if (networkSyncData.props.BowstringStartY !== undefined)
      this._behaviorData.BowstringStartY = networkSyncData.props.BowstringStartY;
    if (networkSyncData.props.BowstringStartZ !== undefined)
      this._behaviorData.BowstringStartZ = networkSyncData.props.BowstringStartZ;
    if (networkSyncData.props.BowstringEndX !== undefined)
      this._behaviorData.BowstringEndX = networkSyncData.props.BowstringEndX;
    if (networkSyncData.props.BowstringEndY !== undefined)
      this._behaviorData.BowstringEndY = networkSyncData.props.BowstringEndY;
    if (networkSyncData.props.BowstringEndZ !== undefined)
      this._behaviorData.BowstringEndZ = networkSyncData.props.BowstringEndZ;
    if (networkSyncData.props.BowstringColor !== undefined)
      this._behaviorData.BowstringColor = networkSyncData.props.BowstringColor;
    if (networkSyncData.props.BowstringSnapBackSeconds !== undefined)
      this._behaviorData.BowstringSnapBackSeconds = networkSyncData.props.BowstringSnapBackSeconds;
    if (networkSyncData.props.NockSnapRadius !== undefined)
      this._behaviorData.NockSnapRadius = networkSyncData.props.NockSnapRadius;
    if (networkSyncData.props.DrawNockingSphere !== undefined)
      this._behaviorData.DrawNockingSphere = networkSyncData.props.DrawNockingSphere;
    if (networkSyncData.props.NockSphereColor !== undefined)
      this._behaviorData.NockSphereColor = networkSyncData.props.NockSphereColor;
  }

  // Properties:
  
  _getAcceptedArrowTags() {
    return this._behaviorData.AcceptedArrowTags !== undefined ? this._behaviorData.AcceptedArrowTags : "";
  }
  _setAcceptedArrowTags(newValue) {
    this._behaviorData.AcceptedArrowTags = newValue;
  }
  _getBowForwardAxisX() {
    return this._behaviorData.BowForwardAxisX !== undefined ? this._behaviorData.BowForwardAxisX : Number("0") || 0;
  }
  _setBowForwardAxisX(newValue) {
    this._behaviorData.BowForwardAxisX = newValue;
  }
  _getBowForwardAxisY() {
    return this._behaviorData.BowForwardAxisY !== undefined ? this._behaviorData.BowForwardAxisY : Number("1") || 0;
  }
  _setBowForwardAxisY(newValue) {
    this._behaviorData.BowForwardAxisY = newValue;
  }
  _getBowForwardAxisZ() {
    return this._behaviorData.BowForwardAxisZ !== undefined ? this._behaviorData.BowForwardAxisZ : Number("0") || 0;
  }
  _setBowForwardAxisZ(newValue) {
    this._behaviorData.BowForwardAxisZ = newValue;
  }
  _getMaxDrawDistance() {
    return this._behaviorData.MaxDrawDistance !== undefined ? this._behaviorData.MaxDrawDistance : Number("60") || 0;
  }
  _setMaxDrawDistance(newValue) {
    this._behaviorData.MaxDrawDistance = newValue;
  }
  _getMaxArrowSpeed() {
    return this._behaviorData.MaxArrowSpeed !== undefined ? this._behaviorData.MaxArrowSpeed : Number("2500") || 0;
  }
  _setMaxArrowSpeed(newValue) {
    this._behaviorData.MaxArrowSpeed = newValue;
  }
  _getLateralDisconnectTolerance() {
    return this._behaviorData.LateralDisconnectTolerance !== undefined ? this._behaviorData.LateralDisconnectTolerance : Number("20") || 0;
  }
  _setLateralDisconnectTolerance(newValue) {
    this._behaviorData.LateralDisconnectTolerance = newValue;
  }
  _getNockHapticIntensity() {
    return this._behaviorData.NockHapticIntensity !== undefined ? this._behaviorData.NockHapticIntensity : Number("0.4") || 0;
  }
  _setNockHapticIntensity(newValue) {
    this._behaviorData.NockHapticIntensity = newValue;
  }
  _getNockHapticDuration() {
    return this._behaviorData.NockHapticDuration !== undefined ? this._behaviorData.NockHapticDuration : Number("50") || 0;
  }
  _setNockHapticDuration(newValue) {
    this._behaviorData.NockHapticDuration = newValue;
  }
  _getDrawHapticIntensity() {
    return this._behaviorData.DrawHapticIntensity !== undefined ? this._behaviorData.DrawHapticIntensity : Number("0.15") || 0;
  }
  _setDrawHapticIntensity(newValue) {
    this._behaviorData.DrawHapticIntensity = newValue;
  }
  _getDrawHapticDuration() {
    return this._behaviorData.DrawHapticDuration !== undefined ? this._behaviorData.DrawHapticDuration : Number("10") || 0;
  }
  _setDrawHapticDuration(newValue) {
    this._behaviorData.DrawHapticDuration = newValue;
  }
  _getDrawHapticPulsePerUnit() {
    return this._behaviorData.DrawHapticPulsePerUnit !== undefined ? this._behaviorData.DrawHapticPulsePerUnit : Number("1") || 0;
  }
  _setDrawHapticPulsePerUnit(newValue) {
    this._behaviorData.DrawHapticPulsePerUnit = newValue;
  }
  _getBowstringEnabled() {
    return this._behaviorData.BowstringEnabled !== undefined ? this._behaviorData.BowstringEnabled : false;
  }
  _setBowstringEnabled(newValue) {
    this._behaviorData.BowstringEnabled = newValue;
  }
  _toggleBowstringEnabled() {
    this._setBowstringEnabled(!this._getBowstringEnabled());
  }
  _getBowstringStartX() {
    return this._behaviorData.BowstringStartX !== undefined ? this._behaviorData.BowstringStartX : Number("0") || 0;
  }
  _setBowstringStartX(newValue) {
    this._behaviorData.BowstringStartX = newValue;
  }
  _getBowstringStartY() {
    return this._behaviorData.BowstringStartY !== undefined ? this._behaviorData.BowstringStartY : Number("50") || 0;
  }
  _setBowstringStartY(newValue) {
    this._behaviorData.BowstringStartY = newValue;
  }
  _getBowstringStartZ() {
    return this._behaviorData.BowstringStartZ !== undefined ? this._behaviorData.BowstringStartZ : Number("0") || 0;
  }
  _setBowstringStartZ(newValue) {
    this._behaviorData.BowstringStartZ = newValue;
  }
  _getBowstringEndX() {
    return this._behaviorData.BowstringEndX !== undefined ? this._behaviorData.BowstringEndX : Number("0") || 0;
  }
  _setBowstringEndX(newValue) {
    this._behaviorData.BowstringEndX = newValue;
  }
  _getBowstringEndY() {
    return this._behaviorData.BowstringEndY !== undefined ? this._behaviorData.BowstringEndY : Number("-50") || 0;
  }
  _setBowstringEndY(newValue) {
    this._behaviorData.BowstringEndY = newValue;
  }
  _getBowstringEndZ() {
    return this._behaviorData.BowstringEndZ !== undefined ? this._behaviorData.BowstringEndZ : Number("0") || 0;
  }
  _setBowstringEndZ(newValue) {
    this._behaviorData.BowstringEndZ = newValue;
  }
  _getBowstringColor() {
    return this._behaviorData.BowstringColor !== undefined ? this._behaviorData.BowstringColor : "255;255;255";
  }
  _setBowstringColor(newValue) {
    this._behaviorData.BowstringColor = newValue;
  }
  _getBowstringSnapBackSeconds() {
    return this._behaviorData.BowstringSnapBackSeconds !== undefined ? this._behaviorData.BowstringSnapBackSeconds : Number("0.08") || 0;
  }
  _setBowstringSnapBackSeconds(newValue) {
    this._behaviorData.BowstringSnapBackSeconds = newValue;
  }
  _getNockSnapRadius() {
    return this._behaviorData.NockSnapRadius !== undefined ? this._behaviorData.NockSnapRadius : Number("5") || 0;
  }
  _setNockSnapRadius(newValue) {
    this._behaviorData.NockSnapRadius = newValue;
  }
  _getDrawNockingSphere() {
    return this._behaviorData.DrawNockingSphere !== undefined ? this._behaviorData.DrawNockingSphere : false;
  }
  _setDrawNockingSphere(newValue) {
    this._behaviorData.DrawNockingSphere = newValue;
  }
  _toggleDrawNockingSphere() {
    this._setDrawNockingSphere(!this._getDrawNockingSphere());
  }
  _getNockSphereColor() {
    return this._behaviorData.NockSphereColor !== undefined ? this._behaviorData.NockSphereColor : "255;255;0";
  }
  _setNockSphereColor(newValue) {
    this._behaviorData.NockSphereColor = newValue;
  }
}

/**
 * Shared data generated from VR Bow
 */
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.SharedData = class VrBowSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_Archery_VrBowSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_Archery_VrBowSharedData = new gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_Archery_VrBowSharedData;
}

// Methods:
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.userFunc0x2963d68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
if (!gdjs._webxrVrBowRegistry) gdjs._webxrVrBowRegistry = [];
if (!gdjs._webxrSuppressLaserUntil) gdjs._webxrSuppressLaserUntil = { left: 0, right: 0 };
if (!gdjs._webxrBowstringHelpersInstalled) {
    gdjs._webxrBowstringHelpersInstalled = true;
    gdjs._webxrDrawBowstringLine = function(scene, visiblePoints, r, g, b, beh) {
        if (!scene) return;
        if (!beh._bowstringLine) {
            var geom = new THREE.BufferGeometry().setFromPoints(visiblePoints);
            var mat = new THREE.LineBasicMaterial({ color: new THREE.Color(r, g, b) });
            beh._bowstringLine = new THREE.Line(geom, mat);
            beh._bowstringLine.raycast = function() {};
            beh._bowstringLine.frustumCulled = false;
            scene.add(beh._bowstringLine);
            beh._bowstringScene = scene;
        } else {
            beh._bowstringLine.geometry.dispose();
            beh._bowstringLine.geometry = new THREE.BufferGeometry().setFromPoints(visiblePoints);
            beh._bowstringLine.material.color.setRGB(r, g, b);
        }
    };
    gdjs._webxrDisposeBowstringLine = function(beh) {
        if (beh._bowstringLine) {
            if (beh._bowstringScene) beh._bowstringScene.remove(beh._bowstringLine);
            beh._bowstringLine.geometry.dispose();
            beh._bowstringLine.material.dispose();
            beh._bowstringLine = null;
            beh._bowstringScene = null;
        }
    };
}
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._holdingHand = '';
    beh._currentArrowBeh = null;
    beh._bowstringLine = null;
    beh._bowstringScene = null;
    beh._lastBreakWorld = null;
    beh._releaseTimer = 0;
    beh._wasNocked = false;
    gdjs._webxrVrBowRegistry.push({ obj: obj, beh: beh });
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.userFunc0x2963d68(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.userFunc0x1a24878 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    if (gdjs._webxrVrBowRegistry) {
        gdjs._webxrVrBowRegistry = gdjs._webxrVrBowRegistry.filter(function(e){ return e.obj !== obj; });
    }
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.userFunc0x1a24878(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.userFunc0x2963dd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    beh._holdingHand = '';
    var grabReg = gdjs._webxrVrGrabbableRegistry;
    if (grabReg) {
        for (var gi = 0; gi < grabReg.length; gi++) {
            if (grabReg[gi].obj === obj) {
                beh._holdingHand = grabReg[gi].beh._grabbingHand || '';
                break;
            }
        }
    }
    beh._aabbHW = (obj.getWidth  ? obj.getWidth()  : 0) / 2;
    beh._aabbHH = (obj.getHeight ? obj.getHeight() : 0) / 2;
    beh._aabbHD = (obj.getDepth  ? obj.getDepth()  : 0) / 2;
    beh._currentArrowBeh = null;
    // Suppress laser on bow-holding hand
    if (beh._holdingHand) {
        if (!gdjs._webxrSuppressLaserUntil) gdjs._webxrSuppressLaserUntil = { left: 0, right: 0 };
        gdjs._webxrSuppressLaserUntil[beh._holdingHand] = performance.now() + 100;
    }
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.userFunc0x2963dd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;

// Ensure the VR rig matrix is current so getWorldPosition() calls below return current-frame values.
if (gdjs._webxrVrEnsureRigCurrent) gdjs._webxrVrEnsureRigCurrent();

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    var bsEnabled = beh._getBowstringEnabled ? (beh._getBowstringEnabled() === 'true' || beh._getBowstringEnabled() === true) : false;
    if (!bsEnabled) {
        if (gdjs._webxrDisposeBowstringLine) gdjs._webxrDisposeBowstringLine(beh);
        beh._releaseTimer = 0;
        beh._wasNocked = false;
        continue;
    }

    var bowThree = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    if (!bowThree) continue;
    // Sync bowThree.position/quaternion from current-frame GDevelop coords before reading limb anchors.
    // VrGrabbable.doStepPostEvents writes the bow's GDevelop coords but the Three.js renderer only
    // syncs them at render time -- ensureUpToDate() pulls them in now, mirroring VrFollower's pattern.
    var _bowRend = obj.getRenderer ? obj.getRenderer() : null;
    if (_bowRend && _bowRend.ensureUpToDate) _bowRend.ensureUpToDate();

    var bsSX = beh._getBowstringStartX ? Number(beh._getBowstringStartX()) : 0;
    var bsSY = beh._getBowstringStartY ? Number(beh._getBowstringStartY()) : 50;
    var bsSZ = beh._getBowstringStartZ ? Number(beh._getBowstringStartZ()) : 0;
    var bsEX = beh._getBowstringEndX ? Number(beh._getBowstringEndX()) : 0;
    var bsEY = beh._getBowstringEndY ? Number(beh._getBowstringEndY()) : -50;
    var bsEZ = beh._getBowstringEndZ ? Number(beh._getBowstringEndZ()) : 0;
    // Use position+quaternion only — localToWorld would also apply the bow's outer scale=(W,H,D)
    // which amplifies inputs by the bow's game-unit dimensions (e.g. depth=100 → 100× too long).
    // bowThree.position/.quaternion are already in _threeScene-local frame (parent is identity _threeGroup).
    var bowPosSL  = bowThree.position;
    var bowQuatSL = bowThree.quaternion;
    var startWorld = bowPosSL.clone().add(new THREE.Vector3(bsSX, -bsSY, bsSZ).applyQuaternion(bowQuatSL));
    var endWorld   = bowPosSL.clone().add(new THREE.Vector3(bsEX, -bsEY, bsEZ).applyQuaternion(bowQuatSL));
    var midpointWorld = startWorld.clone().lerp(endWorld, 0.5);

    var dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
    var snapBackSec = beh._getBowstringSnapBackSeconds ? Number(beh._getBowstringSnapBackSeconds()) : 0.08;
    if (snapBackSec <= 0) snapBackSec = 0.001;

    var arrowBeh = beh._currentArrowBeh;
    var isNockedNow = arrowBeh && (arrowBeh._archeryState === 'nocked' || arrowBeh._archeryState === 'drawn');

    // Detect nocked→released transition: start snap-back timer
    if (beh._wasNocked && !isNockedNow && beh._lastBreakWorld) {
        beh._releaseTimer = snapBackSec;
    }
    beh._wasNocked = isNockedNow;

    var breakWorld;
    if (isNockedNow) {
        // Find arrow object via registry
        var arrowObj = null;
        if (gdjs._webxrVrArrowRegistry) {
            for (var ai = 0; ai < gdjs._webxrVrArrowRegistry.length; ai++) {
                if (gdjs._webxrVrArrowRegistry[ai].beh === arrowBeh) {
                    arrowObj = gdjs._webxrVrArrowRegistry[ai].obj;
                    break;
                }
            }
        }
        var arrowThree = arrowObj && arrowObj.get3DRendererObject ? arrowObj.get3DRendererObject() : null;
        if (arrowThree) {
            // Find the drawing hand read-only via the grabbable registry (same pattern as VrBow.doStepPreEvents).
            var _drawHand = '';
            var _grabReg2 = gdjs._webxrVrGrabbableRegistry;
            if (_grabReg2 && arrowObj) {
                for (var _gi2 = 0; _gi2 < _grabReg2.length; _gi2++) {
                    if (_grabReg2[_gi2].obj === arrowObj) {
                        _drawHand = _grabReg2[_gi2].beh._grabbingHand || '';
                        break;
                    }
                }
            }
            // Prefer a fresh current-frame handAnchor world position (order-independent; handAnchor
            // is a static child of the grip, so getWorldPosition() is current after _webxrVrEnsureRigCurrent).
            // Fall back to cached _nockHandX/Y/Z (preEvents sample) if handAnchor is unavailable.
            var _dhEntry = _drawHand && gdjs._webxrVrControllers && gdjs._webxrVrControllers[_drawHand];
            var _dhAnchor = _dhEntry && _dhEntry.handAnchor;
            var _anc = gdjs._webxrVrAnchor;
            if (_dhAnchor && _anc) {
                var _hwp = new THREE.Vector3();
                _dhAnchor.getWorldPosition(_hwp);
                breakWorld = new THREE.Vector3(
                    _anc.x + (_hwp.x - _anc.threeX),
                    _anc.y - (_hwp.y - _anc.threeY),
                    _anc.z + (_hwp.z - _anc.threeZ));
            } else if (arrowBeh._nockHandX !== undefined) {
                // Fallback: cached drawing-hand position from VrArrow.doStepPreEvents (one frame old)
                breakWorld = new THREE.Vector3(arrowBeh._nockHandX, arrowBeh._nockHandY, arrowBeh._nockHandZ);
            } else {
                // Last-resort fallback (no XR hand data): arrow tail from launchDir
                var awW = arrowObj.getWidth ? arrowObj.getWidth() : 0;
                var awH = arrowObj.getHeight ? arrowObj.getHeight() : 0;
                var awD = arrowObj.getDepth ? arrowObj.getDepth() : 0;
                var awLongest = Math.max(awW, awH, awD);
                var tailOffsetSL = new THREE.Vector3(arrowBeh._launchDirX, -arrowBeh._launchDirY, arrowBeh._launchDirZ).multiplyScalar(-awLongest * 0.5);
                breakWorld = arrowThree.position.clone().add(tailOffsetSL);
            }
            beh._lastBreakWorld = breakWorld.clone();
            beh._releaseTimer = 0;
        } else {
            breakWorld = midpointWorld.clone();
        }
    } else if (beh._releaseTimer > 0) {
        beh._releaseTimer = Math.max(0, beh._releaseTimer - dt);
        var t = beh._releaseTimer / snapBackSec;
        breakWorld = midpointWorld.clone().lerp(beh._lastBreakWorld, t);
    } else {
        beh._lastBreakWorld = null;
        breakWorld = midpointWorld.clone();
    }

    // startWorld/breakWorld/endWorld are already in _threeScene-local frame — use directly as Line vertices.
    var visPoints = [
        new THREE.Vector3(startWorld.x,  startWorld.y,  startWorld.z),
        new THREE.Vector3(breakWorld.x,  breakWorld.y,  breakWorld.z),
        new THREE.Vector3(endWorld.x,    endWorld.y,    endWorld.z)
    ];
    var _bsc = (beh._getBowstringColor ? String(beh._getBowstringColor()) : '255;255;255').split(';');
    var bsCR = Math.max(0,Math.min(255,+_bsc[0]||0))/255;
    var bsCG = Math.max(0,Math.min(255,+_bsc[1]||0))/255;
    var bsCB = Math.max(0,Math.min(255,+_bsc[2]||0))/255;
    var bsScene = null;
    try {
        var bslr = runtimeScene.getLayer('');
        var bslr3d = bslr.getRenderer ? bslr.getRenderer() : null;
        if (bslr3d) bsScene = bslr3d._threeScene || bslr3d.threeScene || (bslr3d.getThreeScene ? bslr3d.getThreeScene() : null);
    } catch(eBs) {}
    if (gdjs._webxrDrawBowstringLine) gdjs._webxrDrawBowstringLine(bsScene, visPoints, bsCR, bsCG, bsCB, beh);

    // Nocking sphere — visible while bow is held; follows the V bending point
    var drawNockSph = beh._getDrawNockingSphere ? (beh._getDrawNockingSphere() === 'true' || beh._getDrawNockingSphere() === true) : false;
    var showNockSph = drawNockSph && beh._holdingHand && beh._holdingHand !== '';
    if (showNockSph) {
        var nSpR = beh._getNockSnapRadius ? Number(beh._getNockSnapRadius()) : 5;
        var _nsc = (beh._getNockSphereColor ? String(beh._getNockSphereColor()) : '255;255;0').split(';');
        var nSpCR = Math.max(0,Math.min(255,+_nsc[0]||0))/255;
        var nSpCG = Math.max(0,Math.min(255,+_nsc[1]||0))/255;
        var nSpCB = Math.max(0,Math.min(255,+_nsc[2]||0))/255;
        if (!beh._nockSphere) {
            var _nsm = new THREE.MeshBasicMaterial({ color: new THREE.Color(nSpCR, nSpCG, nSpCB), wireframe: true });
            beh._nockSphere = new THREE.Mesh(new THREE.SphereGeometry(nSpR, 12, 8), _nsm);
            beh._nockSphere.raycast = function(){};
            beh._nockSphere.frustumCulled = false;
            beh._nockSphere._builtRadius = nSpR;
            if (bsScene) bsScene.add(beh._nockSphere);
        }
        if (beh._nockSphere._builtRadius !== nSpR) {
            beh._nockSphere.geometry.dispose();
            beh._nockSphere.geometry = new THREE.SphereGeometry(nSpR, 12, 8);
            beh._nockSphere._builtRadius = nSpR;
        }
        beh._nockSphere.material.color.setRGB(nSpCR, nSpCG, nSpCB);
        beh._nockSphere.position.copy(breakWorld);
        beh._nockSphere.visible = true;
    } else if (beh._nockSphere) {
        beh._nockSphere.visible = false;
    }
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.userFunc0x1a24ac8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setAcceptedArrowTags(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.userFunc0x1a24ac8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTags = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetAcceptedArrowTagsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.userFunc0x2963e70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setBowForwardAxisX(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.userFunc0x2963e70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.userFunc0x295d4a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setBowForwardAxisY(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.userFunc0x295d4a0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.userFunc0x2963ea8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setBowForwardAxisZ(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.userFunc0x2963ea8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowForwardAxisZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.userFunc0x1a24ac8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setMaxDrawDistance(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.userFunc0x1a24ac8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistance = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxDrawDistanceContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.userFunc0x295d4a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setMaxArrowSpeed(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.userFunc0x295d4a0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeed = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetMaxArrowSpeedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.userFunc0x2963fa0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setLateralDisconnectTolerance(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.userFunc0x2963fa0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectTolerance = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetLateralDisconnectToleranceContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.userFunc0x295d450 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setNockHapticIntensity(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.userFunc0x295d450(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticIntensityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.userFunc0x1a24ac8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setNockHapticDuration(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.userFunc0x1a24ac8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDuration = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockHapticDurationContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.userFunc0x1ad3848 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setDrawHapticIntensity(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.userFunc0x1ad3848(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticIntensityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.userFunc0x295d4a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setDrawHapticDuration(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.userFunc0x295d4a0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDuration = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticDurationContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.userFunc0x2963ed8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) beh._setDrawHapticPulsePerUnit(String(eventsFunctionContext.getArgument('Value')));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.userFunc0x2963ed8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnit = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawHapticPulsePerUnitContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.userFunc0x1a249e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._holdingHand !== '') : false;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.userFunc0x1a249e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeld = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsHeldContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.userFunc0x1a249e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._currentArrowBeh !== null) : false;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.userFunc0x1a249e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNocked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsNockedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.userFunc0x295d388 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._holdingHand || '') : '';
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.userFunc0x295d388(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHand = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.HoldingHandContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.userFunc0x1a24a68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = (beh && beh._currentArrowBeh && beh._currentArrowBeh._getArrowTag) ? String(beh._currentArrowBeh._getArrowTag()) : '';
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.userFunc0x1a24a68(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTag = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockedArrowTagContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.userFunc0x295d388 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = (beh && beh._currentArrowBeh) ? (beh._currentArrowBeh._drawDist || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.userFunc0x295d388(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistance = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawDistanceContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.userFunc0x2963ee0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = (beh && beh._currentArrowBeh) ? (beh._currentArrowBeh._tightness || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.userFunc0x2963ee0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.Tightness = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.TightnessContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.userFunc0x295d3e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = (beh && beh._getMaxDrawDistance) ? Number(beh._getMaxDrawDistance()) : 60;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.userFunc0x295d3e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistance = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxDrawDistanceContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.userFunc0x1a24a68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = (beh && beh._getMaxArrowSpeed) ? Number(beh._getMaxArrowSpeed()) : 2500;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.userFunc0x1a24a68(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.MaxArrowSpeedContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.userFunc0x1a24aa0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = (beh && beh._getLateralDisconnectTolerance) ? Number(beh._getLateralDisconnectTolerance()) : 20;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.userFunc0x1a24aa0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectTolerance = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.LateralDisconnectToleranceContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = (beh && beh._getAcceptedArrowTags) ? String(beh._getAcceptedArrowTags()) : '';
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTags = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.AcceptedArrowTagsContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.userFunc0x2963ec8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setNockSnapRadius) beh._setNockSnapRadius(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.userFunc0x2963ec8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadius = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSnapRadiusContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.userFunc0x1a24b00 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getNockSnapRadius ? Number(beh._getNockSnapRadius()) : 5) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.userFunc0x1a24b00(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadius = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSnapRadiusContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.userFunc0x1a24b58 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringEnabled) beh._setBowstringEnabled('true');
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.userFunc0x1a24b58(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstring = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.EnableBowstringContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.userFunc0x2963ef0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringEnabled) beh._setBowstringEnabled('false');
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.userFunc0x2963ef0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstring = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DisableBowstringContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringStartX) beh._setBowstringStartX(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringStartY) beh._setBowstringStartY(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringStartZ) beh._setBowstringStartZ(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringEndX) beh._setBowstringEndX(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringEndY) beh._setBowstringEndY(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringEndZ) beh._setBowstringEndZ(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.userFunc0x1a24b40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var v = String(eventsFunctionContext.getArgument('Value'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringSnapBackSeconds) beh._setBowstringSnapBackSeconds(v);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.userFunc0x1a24b40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSeconds = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringSnapBackSecondsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.userFunc0x1a24850 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var x = String(eventsFunctionContext.getArgument('X'));
var y = String(eventsFunctionContext.getArgument('Y'));
var z = String(eventsFunctionContext.getArgument('Z'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringStartX) beh._setBowstringStartX(x);
    if (beh._setBowstringStartY) beh._setBowstringStartY(y);
    if (beh._setBowstringStartZ) beh._setBowstringStartZ(z);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.userFunc0x1a24850(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStart = function(X, Y, Z, parentEventsFunctionContext) {

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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringStartContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.userFunc0x1ad3900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var x = String(eventsFunctionContext.getArgument('X'));
var y = String(eventsFunctionContext.getArgument('Y'));
var z = String(eventsFunctionContext.getArgument('Z'));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringEndX) beh._setBowstringEndX(x);
    if (beh._setBowstringEndY) beh._setBowstringEndY(y);
    if (beh._setBowstringEndZ) beh._setBowstringEndZ(z);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.userFunc0x1ad3900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEnd = function(X, Y, Z, parentEventsFunctionContext) {

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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringEndContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.userFunc0x2963e70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var s = String(eventsFunctionContext.getArgument('Color') || '').trim();
var r = 255, g = 255, b = 255;
var parts = s.split(';');
if (parts.length >= 3) {
    r = Math.max(0, Math.min(255, Math.round(Number(parts[0]))));
    g = Math.max(0, Math.min(255, Math.round(Number(parts[1]))));
    b = Math.max(0, Math.min(255, Math.round(Number(parts[2]))));
}
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (beh._setBowstringColor) beh._setBowstringColor(r + ';' + g + ';' + b);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.userFunc0x2963e70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColor = function(Color, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetBowstringColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getBowstringEnabled ? (beh._getBowstringEnabled() === 'true' || beh._getBowstringEnabled() === true) : false) : false;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.IsBowstringEnabledContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.userFunc0x295d4a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getBowstringStartX ? Number(beh._getBowstringStartX()) : 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.userFunc0x295d4a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.userFunc0x2963e98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getBowstringStartY ? Number(beh._getBowstringStartY()) : 50) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.userFunc0x2963e98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.userFunc0x2963e90 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getBowstringStartZ ? Number(beh._getBowstringStartZ()) : 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.userFunc0x2963e90(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringStartZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.userFunc0x2963ef0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getBowstringEndX ? Number(beh._getBowstringEndX()) : 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.userFunc0x2963ef0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.userFunc0x1a24a10 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getBowstringEndY ? Number(beh._getBowstringEndY()) : -50) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.userFunc0x1a24a10(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.userFunc0x1a24b58 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getBowstringEndZ ? Number(beh._getBowstringEndZ()) : 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.userFunc0x1a24b58(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringEndZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.userFunc0x2963e70 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getBowstringColor ? String(beh._getBowstringColor()) : '255;255;255';
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.userFunc0x2963e70(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColor = function(Color, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._getBowstringSnapBackSeconds ? Number(beh._getBowstringSnapBackSeconds()) : 0.08) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSeconds = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.BowstringSnapBackSecondsContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var s = String(eventsFunctionContext.getArgument('Color') || '').trim();
var r = 255, g = 255, b = 0;
var parts = s.split(';');
if (parts.length >= 3) {
    r = Math.max(0, Math.min(255, Math.round(Number(parts[0]))));
    g = Math.max(0, Math.min(255, Math.round(Number(parts[1]))));
    b = Math.max(0, Math.min(255, Math.round(Number(parts[2]))));
}
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setNockSphereColor) beh._setNockSphereColor(r + ';' + g + ';' + b);
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColor = function(Color, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetNockSphereColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.userFunc0x295d4a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getNockSphereColor ? String(beh._getNockSphereColor()) : '255;255;0';
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.userFunc0x295d4a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColor = function(Color, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.NockSphereColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.userFunc0x2963ea8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setDrawNockingSphere) beh._setDrawNockingSphere(eventsFunctionContext.getArgument('Value'));
}
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.userFunc0x2963ea8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphere = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.SetDrawNockingSphereContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext = {};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.userFunc0x1a24ad8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getDrawNockingSphere ? (beh._getDrawNockingSphere() === 'true' || beh._getDrawNockingSphere() === true) : false;
};
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.userFunc0x1a24ad8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphere = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrBow.VrBow.prototype.DrawNockingSphereContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("WebXR_Archery::VrBow", gdjs.evtsExt__WebXR_Archery__VrBow.VrBow);
