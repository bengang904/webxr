
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport = gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport || {};

/**
 * Behavior generated from VR Teleport blocker (WebXR)
 */
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport = class VrBlockTeleport extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from VR Teleport blocker (WebXR)
 */
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.SharedData = class VrBlockTeleportSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_Teleport_VrBlockTeleportSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_Teleport_VrBlockTeleportSharedData = new gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_Teleport_VrBlockTeleportSharedData;
}

// Methods:
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.userFunc0x2541888 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
if (!gdjs._webxrVrBlockTeleportRegistry) gdjs._webxrVrBlockTeleportRegistry = [];
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    var threeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    gdjs._webxrVrBlockTeleportRegistry.push({ obj: obj, beh: beh, threeObj: threeObj });
}
};
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.userFunc0x2541888(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.userFunc0x24b41d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
if (!gdjs._webxrVrBlockTeleportRegistry) return;
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    gdjs._webxrVrBlockTeleportRegistry = gdjs._webxrVrBlockTeleportRegistry.filter(function(e) { return e.obj !== obj; });
}
};
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.userFunc0x24b41d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.userFunc0x1402d58 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.userFunc0x1402d58(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.userFunc0x1b39b00 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.userFunc0x1b39b00(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}


gdjs.registerBehavior("WebXR_Teleport::VrBlockTeleport", gdjs.evtsExt__WebXR_Teleport__VrBlockTeleport.VrBlockTeleport);
