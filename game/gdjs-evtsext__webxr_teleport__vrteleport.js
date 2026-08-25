
gdjs.evtsExt__WebXR_Teleport__VrTeleport = gdjs.evtsExt__WebXR_Teleport__VrTeleport || {};

/**
 * Behavior generated from VR Teleport indicator (WebXR)
 */
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport = class VrTeleport extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ArcSpeed = behaviorData.ArcSpeed !== undefined ? behaviorData.ArcSpeed : Number("800") || 0;
    this._behaviorData.ArcGravity = behaviorData.ArcGravity !== undefined ? behaviorData.ArcGravity : Number("980") || 0;
    this._behaviorData.DrawArc = behaviorData.DrawArc !== undefined ? behaviorData.DrawArc : false;
    this._behaviorData.ArcColor = behaviorData.ArcColor !== undefined ? behaviorData.ArcColor : "0;0;255";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.ArcSpeed !== undefined)
      this._behaviorData.ArcSpeed = behaviorOverriding.ArcSpeed;
    if (behaviorOverriding.ArcGravity !== undefined)
      this._behaviorData.ArcGravity = behaviorOverriding.ArcGravity;
    if (behaviorOverriding.DrawArc !== undefined)
      this._behaviorData.DrawArc = behaviorOverriding.DrawArc;
    if (behaviorOverriding.ArcColor !== undefined)
      this._behaviorData.ArcColor = behaviorOverriding.ArcColor;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    ArcSpeed: this._behaviorData.ArcSpeed,
    ArcGravity: this._behaviorData.ArcGravity,
    DrawArc: this._behaviorData.DrawArc,
    ArcColor: this._behaviorData.ArcColor,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.ArcSpeed !== undefined)
      this._behaviorData.ArcSpeed = networkSyncData.props.ArcSpeed;
    if (networkSyncData.props.ArcGravity !== undefined)
      this._behaviorData.ArcGravity = networkSyncData.props.ArcGravity;
    if (networkSyncData.props.DrawArc !== undefined)
      this._behaviorData.DrawArc = networkSyncData.props.DrawArc;
    if (networkSyncData.props.ArcColor !== undefined)
      this._behaviorData.ArcColor = networkSyncData.props.ArcColor;
  }

  // Properties:
  
  _getArcSpeed() {
    return this._behaviorData.ArcSpeed !== undefined ? this._behaviorData.ArcSpeed : Number("800") || 0;
  }
  _setArcSpeed(newValue) {
    this._behaviorData.ArcSpeed = newValue;
  }
  _getArcGravity() {
    return this._behaviorData.ArcGravity !== undefined ? this._behaviorData.ArcGravity : Number("980") || 0;
  }
  _setArcGravity(newValue) {
    this._behaviorData.ArcGravity = newValue;
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
    return this._behaviorData.ArcColor !== undefined ? this._behaviorData.ArcColor : "0;0;255";
  }
  _setArcColor(newValue) {
    this._behaviorData.ArcColor = newValue;
  }
}

/**
 * Shared data generated from VR Teleport indicator (WebXR)
 */
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.SharedData = class VrTeleportSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_Teleport_VrTeleportSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_Teleport_VrTeleportSharedData = new gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_Teleport_VrTeleportSharedData;
}

// Methods:
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.userFunc0x2a2a080 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    beh._hitValid = false;
    beh._hitGdX = 0;
    beh._hitGdY = 0;
    beh._hitGdZ = 0;
    beh._facingAngle = 0;
    beh._arcLine = null;
    beh._arcScene = null;
    beh._arcCalledThisFrame = false;
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.userFunc0x2a2a080(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreated = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.userFunc0x1f000f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh) {
        beh._hitValid = false;
        if (beh._arcLine) {
            if (beh._arcScene) beh._arcScene.remove(beh._arcLine);
            beh._arcLine.geometry.dispose();
            beh._arcLine.material.dispose();
            beh._arcLine = null;
            beh._arcScene = null;
        }
    }
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.userFunc0x1f000f0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroy = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.userFunc0x1f00190 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.userFunc0x1f00190(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.userFunc0x1f001a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    if (!beh._arcCalledThisFrame && beh._arcLine) {
        if (beh._arcScene) beh._arcScene.remove(beh._arcLine);
        beh._arcLine.geometry.dispose();
        beh._arcLine.material.dispose();
        beh._arcLine = null;
        beh._arcScene = null;
    }
    beh._arcCalledThisFrame = false;
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.userFunc0x1f001a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.userFunc0x28f7c78 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var hand = String(eventsFunctionContext.getArgument('Hand') || 'left');
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var entry = controllers[hand];
if (!entry || !entry.grip || !entry.connected) return;
var teleportables = gdjs._webxrVrTeleportableRegistry;
if (!teleportables || teleportables.length === 0) return;

// Collect teleportable Three.js meshes (lazy-capture threeObj if not yet ready)
var targetMeshes = [];
for (var t = 0; t < teleportables.length; t++) {
    var reg = teleportables[t];
    if (!reg.threeObj && reg.obj.get3DRendererObject) {
        reg.threeObj = reg.obj.get3DRendererObject();
    }
    if (reg.threeObj) targetMeshes.push(reg.threeObj);
}
if (targetMeshes.length === 0) return;

// Collect teleport-blocker meshes (lazy-capture, honors behavior activation)
var blockers = gdjs._webxrVrBlockTeleportRegistry || [];
var blockMeshes = [];
for (var b = 0; b < blockers.length; b++) {
    var breg = blockers[b];
    if (breg.beh && !breg.beh.activated()) continue;
    if (!breg.threeObj && breg.obj.get3DRendererObject) breg.threeObj = breg.obj.get3DRendererObject();
    if (breg.threeObj) blockMeshes.push(breg.threeObj);
}

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    var arcSpeed = beh._getArcSpeed ? Number(beh._getArcSpeed()) : 800;
    var arcGravity = beh._getArcGravity ? Number(beh._getArcGravity()) : 980;

    // Controller grip world position and forward direction
    var gripPos = new THREE.Vector3();
    entry.grip.getWorldPosition(gripPos);
    var gripQuat = new THREE.Quaternion();
    entry.grip.getWorldQuaternion(gripQuat);
    var fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(gripQuat).normalize();

    // Parabolic arc simulation (Z-up in this Three.js scene).
    // Gravity = (0, 0, -arcGravity) pulls the arc downward.
    var pos = gripPos.clone();
    var vel = fwd.clone().multiplyScalar(arcSpeed);
    var gravityVec = new THREE.Vector3(0, 0, -arcGravity);
    var dt = 1 / 30;
    var maxSteps = 90;
    var arcPoints = [pos.clone()];
    for (var step = 0; step < maxSteps; step++) {
        vel.addScaledVector(gravityVec, dt);
        pos.addScaledVector(vel, dt);
        arcPoints.push(pos.clone());
    }

    // Raycast each arc segment against teleportables and any registered blockers.
    // Nearest hit on the earliest segment wins: blocker before teleportable = blocked.
    var probeMeshes = blockMeshes.length > 0 ? targetMeshes.concat(blockMeshes) : targetMeshes;
    var raycaster = new THREE.Raycaster();
    raycaster.near = 0;
    var hitFound = false;
    var blocked = false;
    var hit = null;

    for (var seg = 0; seg < arcPoints.length - 1; seg++) {
        var fromPt = arcPoints[seg];
        var toPt = arcPoints[seg + 1];
        var segDir = new THREE.Vector3().subVectors(toPt, fromPt);
        var segLen = segDir.length();
        if (segLen < 0.001) continue;
        segDir.divideScalar(segLen);
        raycaster.set(fromPt, segDir);
        raycaster.far = segLen;

        var hits = raycaster.intersectObjects(probeMeshes, true);
        if (hits.length === 0) continue;

        hit = hits[0];
        // Check nearest hit against blockers first
        var isBlocked = false;
        for (var b2 = 0; b2 < blockers.length; b2++) {
            if (!blockers[b2].threeObj) continue;
            var cur = hit.object;
            while (cur) {
                if (cur === blockers[b2].threeObj) { isBlocked = true; break; }
                cur = cur.parent;
            }
            if (isBlocked) break;
        }
        if (isBlocked) {
            beh._hitValid = false;
            blocked = true;
            break;
        }
        // Match hit mesh to a teleportable registry entry via parent chain
        var hitReg = null;
        for (var r = 0; r < teleportables.length; r++) {
            if (!teleportables[r].threeObj) continue;
            var cur = hit.object;
            while (cur) {
                if (cur === teleportables[r].threeObj) { hitReg = teleportables[r]; break; }
                cur = cur.parent;
            }
            if (hitReg) break;
        }
        if (!hitReg) continue;

        // AABB top Z: highest point of the teleportable in Three.js world space.
        // Three.js Z = GDevelop Z (no flip on Z), so this equals GDevelop top Z.
        var box3 = new THREE.Box3().setFromObject(hitReg.threeObj);
        var aabbTopZ = box3.max.z;

        // Convert hit XY to GDevelop coords (gdX = threeX, gdY = -threeY, gdZ = threeZ)
        var gdX = hit.point.x;
        var gdY = -hit.point.y;
        var gdZ = aabbTopZ;

        beh._hitGdX = gdX;
        beh._hitGdY = gdY;
        beh._hitGdZ = gdZ;

        // Line-of-sight check: ray from the player's head to the landing point.
        // If any VrBlockTeleport mesh sits between them the teleport is rejected,
        // even when the controller was poked through the wall (the head cannot be).
        var _losCam = runtimeScene.getLayer('').getRenderer().getThreeCamera();
        if (_losCam && blockMeshes.length > 0) {
            var _losOrigin = _losCam.getWorldPosition(new THREE.Vector3());
            var _losTarget = hit.point.clone();
            var _losDir = new THREE.Vector3().subVectors(_losTarget, _losOrigin);
            var _losDist = _losDir.length();
            if (_losDist > 0.001) {
                _losDir.divideScalar(_losDist);
                // Shrink far end slightly so a teleportable flush with a wall doesn't self-block.
                var _losRc = new THREE.Raycaster(_losOrigin, _losDir, 0.05, _losDist - 0.05);
                var _losHits = _losRc.intersectObjects(blockMeshes, true);
                if (_losHits.length > 0) {
                    beh._hitValid = false;
                    blocked = true;
                    break;
                }
            }
        }

        beh._hitValid = true;

        // Move indicator to hit position, facing current facing angle, flat on floor
        obj.setX(gdX);
        obj.setY(gdY);
        obj.setZ(gdZ);
        obj.setAngle(beh._facingAngle);
        if (obj.setRotationX) obj.setRotationX(0);
        if (obj.setRotationY) obj.setRotationY(0);

        hitFound = true;
        break;
    }

    if (!hitFound) {
        beh._hitValid = false;
    }

    // === Arc line rendering ===
    beh._arcCalledThisFrame = true;
    var drawArc = beh._getDrawArc ? (beh._getDrawArc() === 'true' || beh._getDrawArc() === true) : false;
    if (!drawArc) {
        if (beh._arcLine) {
            if (beh._arcScene) beh._arcScene.remove(beh._arcLine);
            beh._arcLine.geometry.dispose();
            beh._arcLine.material.dispose();
            beh._arcLine = null;
            beh._arcScene = null;
        }
        continue;
    }
    var _ac = (beh._getArcColor ? String(beh._getArcColor()) : '0;0;255').split(';');
    var ar = Math.max(0,Math.min(255,+_ac[0]||0))/255;
    var ag = Math.max(0,Math.min(255,+_ac[1]||0))/255;
    var ab = Math.max(0,Math.min(255,+_ac[2]||0))/255;
    // Build visible arc points; trim at teleportable hit or blocker
    var visiblePoints = [];
    if (hitFound || blocked) {
        for (var vp = 0; vp <= seg; vp++) {
            visiblePoints.push(new THREE.Vector3(arcPoints[vp].x, -arcPoints[vp].y, arcPoints[vp].z));
        }
        if (hit) visiblePoints.push(new THREE.Vector3(hit.point.x, -hit.point.y, hit.point.z));
    } else {
        for (var vp = 0; vp < arcPoints.length; vp++) {
            visiblePoints.push(new THREE.Vector3(arcPoints[vp].x, -arcPoints[vp].y, arcPoints[vp].z));
        }
    }
    if (!gdjs._webxrSuppressLaserUntil) gdjs._webxrSuppressLaserUntil = { left: 0, right: 0 };
    gdjs._webxrSuppressLaserUntil[hand] = performance.now() + 50;
    if (!beh._arcLine) {
        var arcGeom = new THREE.BufferGeometry().setFromPoints(visiblePoints);
        var arcMat = new THREE.LineBasicMaterial({ color: new THREE.Color(ar, ag, ab) });
        beh._arcLine = new THREE.Line(arcGeom, arcMat);
        beh._arcLine.raycast = function() {};
        beh._arcLine.frustumCulled = false;
        var arcSceneRef = null;
        try {
            var alr = runtimeScene.getLayer('');
            var alr3d = alr.getRenderer ? alr.getRenderer() : null;
            if (alr3d) arcSceneRef = alr3d._threeScene || alr3d.threeScene || (alr3d.getThreeScene ? alr3d.getThreeScene() : null);
        } catch(e) {}
        if (arcSceneRef) { arcSceneRef.add(beh._arcLine); beh._arcScene = arcSceneRef; }
    } else {
        beh._arcLine.geometry.dispose();
        beh._arcLine.geometry = new THREE.BufferGeometry().setFromPoints(visiblePoints);
        beh._arcLine.material.color.setRGB(ar, ag, ab);
    }
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.userFunc0x28f7c78(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArc = function(Hand, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ProjectArcContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.userFunc0x28f7cb0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var angle = Number(eventsFunctionContext.getArgument('Angle') || 0);
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._facingAngle = angle;
    obj.setAngle(angle);
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.userFunc0x28f7cb0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngle = function(Angle, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetFacingAngleContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.userFunc0x27063d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var delta = Number(eventsFunctionContext.getArgument('Delta') || 0);
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._facingAngle += delta;
    obj.setAngle(beh._facingAngle);
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.userFunc0x27063d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacing = function(Delta, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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
if (argName === "Delta") return Delta;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.RotateFacingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.userFunc0x24d3ae0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    if (!beh._hitValid) continue;

    var playerObj = gdjs._webxrVrAnchorObject;
    if (!playerObj) continue;

    var gdX = beh._hitGdX;
    var gdY = beh._hitGdY;
    var gdZ = beh._hitGdZ;
    var angle = beh._facingAngle;

    playerObj.setX(gdX);
    playerObj.setY(gdY);
    playerObj.setZ(gdZ);
    playerObj.setAngle(angle);

    // Teleport Jolt physics body if present
    var phys = null;
    try { phys = playerObj.getBehavior('Physics3D'); } catch(e) {}
    if (phys && phys._body && typeof Jolt !== 'undefined') {
        var _tpBi = phys._sharedData.bodyInterface;
        var _tpId = phys._body.GetID();
        var _tpInv = phys._sharedData.worldInvScale;
        var _tpCurQ = phys._body.GetRotation();
        var _tpRvec = phys.getRVec3(gdX * _tpInv, gdY * _tpInv, gdZ * _tpInv);
        var _tpQuat = phys.getQuat(_tpCurQ.GetX(), _tpCurQ.GetY(), _tpCurQ.GetZ(), _tpCurQ.GetW());
        _tpBi.SetPositionAndRotation(_tpId, _tpRvec, _tpQuat, Jolt.EActivation_Activate);
        _tpBi.SetLinearVelocity(_tpId, phys.getVec3(0, 0, 0));
        _tpBi.SetAngularVelocity(_tpId, phys.getVec3(0, 0, 0));
    }
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.userFunc0x24d3ae0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayer = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.TeleportPlayerContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.userFunc0x24d3ae0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._hitValid);
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.userFunc0x24d3ae0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValid = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.IsHitValidContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.userFunc0x24d3aa8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitGdX || 0) : 0;
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.userFunc0x24d3aa8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitX = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.userFunc0x24d3aa8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitGdY || 0) : 0;
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.userFunc0x24d3aa8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitY = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.userFunc0x24d3aa8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitGdZ || 0) : 0;
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.userFunc0x24d3aa8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZ = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.HitZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.userFunc0x24d3ae0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._facingAngle || 0) : 0;
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.userFunc0x24d3ae0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngle = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.FacingAngleContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.userFunc0x1a7e898 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setArcSpeed) beh._setArcSpeed(String(v));
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.userFunc0x1a7e898(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeed = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcSpeedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.userFunc0x2a2a080 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getArcSpeed ? Number(beh._getArcSpeed()) || 800 : 800;
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.userFunc0x2a2a080(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeed = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcSpeedContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.userFunc0x24d3f98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var v = Number(eventsFunctionContext.getArgument("Value"));
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setArcGravity) beh._setArcGravity(String(v));
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.userFunc0x24d3f98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravity = function(Value, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcGravityContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.userFunc0x1a7e3a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getArcGravity ? Number(beh._getArcGravity()) || 980 : 980;
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.userFunc0x1a7e3a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravity = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcGravityContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.userFunc0x286fc50 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setDrawArc) beh._setDrawArc('true');
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.userFunc0x286fc50(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArc = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.EnableDrawArcContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.userFunc0xa3abd0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setDrawArc) beh._setDrawArc('false');
}
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.userFunc0xa3abd0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArc = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DisableDrawArcContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.userFunc0x16c1900 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getDrawArc ? beh._getDrawArc() : 'false';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.userFunc0x16c1900(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArc = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.DrawArcContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.userFunc0x24d3b50 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var s = String(eventsFunctionContext.getArgument('Color') || '').trim();
var r = 0, g = 0, b = 255;
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
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.userFunc0x24d3b50(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColor = function(Color, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.SetArcColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext = {};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.userFunc0x24d3b50 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getArcColor ? String(beh._getArcColor()) : '0;0;255';
};
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.userFunc0x24d3b50(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColor = function(Color, parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebXR_Teleport"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebXR_Teleport"),
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

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport.prototype.ArcColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("WebXR_Teleport::VrTeleport", gdjs.evtsExt__WebXR_Teleport__VrTeleport.VrTeleport);
