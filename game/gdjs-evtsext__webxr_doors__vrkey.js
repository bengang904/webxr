
gdjs.evtsExt__WebXR_Doors__VrKey = gdjs.evtsExt__WebXR_Doors__VrKey || {};

/**
 * Behavior generated from VR Key (WebXR)
 */
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey = class VrKey extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.KeyTag = behaviorData.KeyTag !== undefined ? behaviorData.KeyTag : "";
    this._behaviorData.KeyholeOffsetX = behaviorData.KeyholeOffsetX !== undefined ? behaviorData.KeyholeOffsetX : Number("0") || 0;
    this._behaviorData.KeyholeOffsetY = behaviorData.KeyholeOffsetY !== undefined ? behaviorData.KeyholeOffsetY : Number("0") || 0;
    this._behaviorData.KeyholeOffsetZ = behaviorData.KeyholeOffsetZ !== undefined ? behaviorData.KeyholeOffsetZ : Number("0") || 0;
    this._behaviorData.KeyholeRotationX = behaviorData.KeyholeRotationX !== undefined ? behaviorData.KeyholeRotationX : Number("0") || 0;
    this._behaviorData.KeyholeRotationY = behaviorData.KeyholeRotationY !== undefined ? behaviorData.KeyholeRotationY : Number("0") || 0;
    this._behaviorData.KeyholeRotationZ = behaviorData.KeyholeRotationZ !== undefined ? behaviorData.KeyholeRotationZ : Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.KeyTag !== undefined)
      this._behaviorData.KeyTag = behaviorOverriding.KeyTag;
    if (behaviorOverriding.KeyholeOffsetX !== undefined)
      this._behaviorData.KeyholeOffsetX = behaviorOverriding.KeyholeOffsetX;
    if (behaviorOverriding.KeyholeOffsetY !== undefined)
      this._behaviorData.KeyholeOffsetY = behaviorOverriding.KeyholeOffsetY;
    if (behaviorOverriding.KeyholeOffsetZ !== undefined)
      this._behaviorData.KeyholeOffsetZ = behaviorOverriding.KeyholeOffsetZ;
    if (behaviorOverriding.KeyholeRotationX !== undefined)
      this._behaviorData.KeyholeRotationX = behaviorOverriding.KeyholeRotationX;
    if (behaviorOverriding.KeyholeRotationY !== undefined)
      this._behaviorData.KeyholeRotationY = behaviorOverriding.KeyholeRotationY;
    if (behaviorOverriding.KeyholeRotationZ !== undefined)
      this._behaviorData.KeyholeRotationZ = behaviorOverriding.KeyholeRotationZ;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    KeyTag: this._behaviorData.KeyTag,
    KeyholeOffsetX: this._behaviorData.KeyholeOffsetX,
    KeyholeOffsetY: this._behaviorData.KeyholeOffsetY,
    KeyholeOffsetZ: this._behaviorData.KeyholeOffsetZ,
    KeyholeRotationX: this._behaviorData.KeyholeRotationX,
    KeyholeRotationY: this._behaviorData.KeyholeRotationY,
    KeyholeRotationZ: this._behaviorData.KeyholeRotationZ,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.KeyTag !== undefined)
      this._behaviorData.KeyTag = networkSyncData.props.KeyTag;
    if (networkSyncData.props.KeyholeOffsetX !== undefined)
      this._behaviorData.KeyholeOffsetX = networkSyncData.props.KeyholeOffsetX;
    if (networkSyncData.props.KeyholeOffsetY !== undefined)
      this._behaviorData.KeyholeOffsetY = networkSyncData.props.KeyholeOffsetY;
    if (networkSyncData.props.KeyholeOffsetZ !== undefined)
      this._behaviorData.KeyholeOffsetZ = networkSyncData.props.KeyholeOffsetZ;
    if (networkSyncData.props.KeyholeRotationX !== undefined)
      this._behaviorData.KeyholeRotationX = networkSyncData.props.KeyholeRotationX;
    if (networkSyncData.props.KeyholeRotationY !== undefined)
      this._behaviorData.KeyholeRotationY = networkSyncData.props.KeyholeRotationY;
    if (networkSyncData.props.KeyholeRotationZ !== undefined)
      this._behaviorData.KeyholeRotationZ = networkSyncData.props.KeyholeRotationZ;
  }

  // Properties:
  
  _getKeyTag() {
    return this._behaviorData.KeyTag !== undefined ? this._behaviorData.KeyTag : "";
  }
  _setKeyTag(newValue) {
    this._behaviorData.KeyTag = newValue;
  }
  _getKeyholeOffsetX() {
    return this._behaviorData.KeyholeOffsetX !== undefined ? this._behaviorData.KeyholeOffsetX : Number("0") || 0;
  }
  _setKeyholeOffsetX(newValue) {
    this._behaviorData.KeyholeOffsetX = newValue;
  }
  _getKeyholeOffsetY() {
    return this._behaviorData.KeyholeOffsetY !== undefined ? this._behaviorData.KeyholeOffsetY : Number("0") || 0;
  }
  _setKeyholeOffsetY(newValue) {
    this._behaviorData.KeyholeOffsetY = newValue;
  }
  _getKeyholeOffsetZ() {
    return this._behaviorData.KeyholeOffsetZ !== undefined ? this._behaviorData.KeyholeOffsetZ : Number("0") || 0;
  }
  _setKeyholeOffsetZ(newValue) {
    this._behaviorData.KeyholeOffsetZ = newValue;
  }
  _getKeyholeRotationX() {
    return this._behaviorData.KeyholeRotationX !== undefined ? this._behaviorData.KeyholeRotationX : Number("0") || 0;
  }
  _setKeyholeRotationX(newValue) {
    this._behaviorData.KeyholeRotationX = newValue;
  }
  _getKeyholeRotationY() {
    return this._behaviorData.KeyholeRotationY !== undefined ? this._behaviorData.KeyholeRotationY : Number("0") || 0;
  }
  _setKeyholeRotationY(newValue) {
    this._behaviorData.KeyholeRotationY = newValue;
  }
  _getKeyholeRotationZ() {
    return this._behaviorData.KeyholeRotationZ !== undefined ? this._behaviorData.KeyholeRotationZ : Number("0") || 0;
  }
  _setKeyholeRotationZ(newValue) {
    this._behaviorData.KeyholeRotationZ = newValue;
  }
}

/**
 * Shared data generated from VR Key (WebXR)
 */
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.SharedData = class VrKeySharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_Doors_VrKeySharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_Doors_VrKeySharedData = new gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_Doors_VrKeySharedData;
}

// Methods:
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.userFunc0x1451bf0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var obj=objs[i];var beh=obj.getBehavior(behaviorName);if(!beh)continue;}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.userFunc0x1451bf0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.userFunc0x1451ba8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
for(var i=0;i<objs.length;i++){var obj=objs[i];var beh=obj.getBehavior(behaviorName);if(!beh)continue;}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.userFunc0x1451ba8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.userFunc0x28e0868 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// VrKey has no per-frame work; KeyTag is read directly by VrDoor for unlocking.
// HolsterTag on VrGrabbable is managed independently by the user and controls
// which holsters/body zones this key can dock in.
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.userFunc0x28e0868(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.userFunc0x1b36648 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=String(eventsFunctionContext.getArgument('Value'));
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setKeyTag)beh._setKeyTag(v);}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.userFunc0x1b36648(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTag = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyTagContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.userFunc0x2719460 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getKeyTag?String(beh._getKeyTag()):'';
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.userFunc0x2719460(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTag = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyTagContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.userFunc0x1451c10 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setKeyholeOffsetX)beh._setKeyholeOffsetX(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.userFunc0x1451c10(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.userFunc0x27f2b98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getKeyholeOffsetX?Number(beh._getKeyholeOffsetX()):0;
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.userFunc0x27f2b98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.userFunc0x1451bb0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setKeyholeRotationX)beh._setKeyholeRotationX(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.userFunc0x1451bb0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationXContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.userFunc0x28e0888 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getKeyholeRotationX?Number(beh._getKeyholeRotationX()):0;
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.userFunc0x28e0888(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.userFunc0x111b4e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setKeyholeOffsetY)beh._setKeyholeOffsetY(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.userFunc0x111b4e8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.userFunc0x111b528 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getKeyholeOffsetY?Number(beh._getKeyholeOffsetY()):0;
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.userFunc0x111b528(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.userFunc0x273d648 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setKeyholeRotationY)beh._setKeyholeRotationY(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.userFunc0x273d648(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationYContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.userFunc0x111b480 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getKeyholeRotationY?Number(beh._getKeyholeRotationY()):0;
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.userFunc0x111b480(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.userFunc0x28e08f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setKeyholeOffsetZ)beh._setKeyholeOffsetZ(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.userFunc0x28e08f0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeOffsetZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.userFunc0x28e0930 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getKeyholeOffsetZ?Number(beh._getKeyholeOffsetZ()):0;
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.userFunc0x28e0930(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeOffsetZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.userFunc0x1c25288 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var v=eventsFunctionContext.getArgument('Value');
for(var i=0;i<objs.length;i++){var beh=objs[i].getBehavior(behaviorName);if(beh&&beh._setKeyholeRotationZ)beh._setKeyholeRotationZ(String(v));}
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.userFunc0x1c25288(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZ = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.SetKeyholeRotationZContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.userFunc0x28e0888 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var beh=objs.length>0?objs[0].getBehavior(behaviorName):null;
eventsFunctionContext.returnValue=beh&&beh._getKeyholeRotationZ?Number(beh._getKeyholeRotationZ()):0;
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.userFunc0x28e0888(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.KeyholeRotationZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.userFunc0x111b498 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var obj=objs.length>0?objs[0]:null;if(!obj){eventsFunctionContext.returnValue=false;return;}
var reg=gdjs._webxrVrHolsterRegistry||[];
var found=false;
for(var _ri=0;_ri<reg.length;_ri++){
    var _e=reg[_ri];if(_e.source!=='vrDoorKeyZone')continue;
    if(_e.occupant&&_e.occupant.obj===obj){found=true;break;}
}
eventsFunctionContext.returnValue=found;
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.userFunc0x111b498(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZone = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.IsInDoorKeyZoneContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext = {};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.userFunc0x28e0878 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs=eventsFunctionContext.getObjects('Object');
var behaviorName=eventsFunctionContext.getBehaviorName('Behavior');
var obj=objs.length>0?objs[0]:null;
if(!obj){eventsFunctionContext.returnValue='';return;}
var reg=gdjs._webxrVrHolsterRegistry||[];
var name='';
for(var _ri=0;_ri<reg.length;_ri++){
    var _e=reg[_ri];if(_e.source!=='vrDoorKeyZone')continue;
    if(_e.occupant&&_e.occupant.obj===obj&&_e.holsterObj&&_e.holsterObj.getName){name=_e.holsterObj.getName();break;}
}
eventsFunctionContext.returnValue=name;
};
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.userFunc0x28e0878(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectName = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Doors__VrKey.VrKey.prototype.OwningDoorObjectNameContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("WebXR_Doors::VrKey", gdjs.evtsExt__WebXR_Doors__VrKey.VrKey);
