
gdjs.evtsExt__WebXR__VrTargetable = gdjs.evtsExt__WebXR__VrTargetable || {};

/**
 * Behavior generated from VR Targetable (WebXR)
 */
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable = class VrTargetable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TargetableEnabled = behaviorData.TargetableEnabled !== undefined ? behaviorData.TargetableEnabled : true;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.TargetableEnabled !== undefined)
      this._behaviorData.TargetableEnabled = behaviorOverriding.TargetableEnabled;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    TargetableEnabled: this._behaviorData.TargetableEnabled,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.TargetableEnabled !== undefined)
      this._behaviorData.TargetableEnabled = networkSyncData.props.TargetableEnabled;
  }

  // Properties:
  
  _getTargetableEnabled() {
    return this._behaviorData.TargetableEnabled !== undefined ? this._behaviorData.TargetableEnabled : true;
  }
  _setTargetableEnabled(newValue) {
    this._behaviorData.TargetableEnabled = newValue;
  }
  _toggleTargetableEnabled() {
    this._setTargetableEnabled(!this._getTargetableEnabled());
  }
}

/**
 * Shared data generated from VR Targetable (WebXR)
 */
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.SharedData = class VrTargetableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrTargetableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrTargetableSharedData = new gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrTargetableSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.userFunc0x1853b18 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
if (!gdjs._webxrVrTargetableRegistry) gdjs._webxrVrTargetableRegistry = [];
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._isTargeted = false;
    beh._justTargeted = false;
    beh._targetingHand = '';
    beh._targetCount = 0;
    beh._everTargeted = false;
    beh._hitPointX = 0;
    beh._hitPointY = 0;
    beh._hitPointZ = 0;
    beh._targetedLeft = false;
    beh._targetedRight = false;
    gdjs._webxrVrTargetableRegistry.push({ obj: obj, beh: beh });
}
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.userFunc0x1853b18(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.userFunc0x12c2ba8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
if (!gdjs._webxrVrTargetableRegistry) return;
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    gdjs._webxrVrTargetableRegistry = gdjs._webxrVrTargetableRegistry.filter(function(e) { return e.obj !== obj; });
}
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.userFunc0x12c2ba8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.userFunc0x18e64b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var controllers = gdjs._webxrVrControllers;
var anchor = gdjs._webxrVrAnchor;
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    var wasT = beh._isTargeted;
    beh._isTargeted = false;
    beh._justTargeted = false;
    beh._targetingHand = '';
    beh._targetedLeft = false;
    beh._targetedRight = false;
    var enabled = beh._getTargetableEnabled ? (beh._getTargetableEnabled() === 'true' || beh._getTargetableEnabled() === true) : true;
    var tThree = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    if (!enabled || !controllers || !tThree) continue;
    var hitLeft = false, hitRight = false;
    var hands = ['left', 'right'];
    for (var h = 0; h < 2; h++) {
        var entry = controllers[hands[h]];
        var hitMesh = (entry && entry.vrBeh) ? entry.vrBeh._laserHitThreeObject : null;
        if (!entry || !entry.connected || !entry.vrBeh || !hitMesh) continue;
        var found = false;
        tThree.traverse(function(child) { if (child === hitMesh) found = true; });
        if (found) {
            if (hands[h] === 'left') hitLeft = true; else hitRight = true;
            var hp = entry.vrBeh._laserHitPointThree;
            if (hp && anchor) {
                beh._hitPointX = anchor.x + (hp.x - anchor.threeX);
                beh._hitPointY = anchor.y - (hp.y - anchor.threeY);
                beh._hitPointZ = anchor.z + (hp.z - anchor.threeZ);
            }
        }
    }
    beh._targetedLeft = hitLeft;
    beh._targetedRight = hitRight;
    beh._isTargeted = hitLeft || hitRight;
    beh._targetingHand = (hitLeft && hitRight) ? 'both' : (hitLeft ? 'left' : (hitRight ? 'right' : ''));
    if (beh._isTargeted && !wasT) {
        beh._justTargeted = true;
        beh._targetCount = (beh._targetCount || 0) + 1;
        beh._everTargeted = true;
    }
}
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.userFunc0x18e64b0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.userFunc0x12c28c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._isTargeted);
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.userFunc0x12c28c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargeted = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.userFunc0x24b7ce0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._justTargeted);
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.userFunc0x24b7ce0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargeted = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.JustTargetedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.userFunc0x188d1a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._everTargeted);
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.userFunc0x188d1a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargeted = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.WasEverTargetedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.userFunc0x24b7ce0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._targetingHand || '') : '';
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.userFunc0x24b7ce0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHand = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingHandContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.userFunc0x24b7c98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var hand = ('' + (eventsFunctionContext.getArgument('Hand') || '')).toLowerCase();
var ok = false;
if (beh) {
    if (hand === 'left') ok = !!beh._targetedLeft;
    else if (hand === 'right') ok = !!beh._targetedRight;
    else if (hand === 'both') ok = !!(beh._targetedLeft && beh._targetedRight);
    else ok = !!beh._isTargeted;
}
eventsFunctionContext.returnValue = ok;
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.userFunc0x24b7c98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHand = function(Hand, parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.IsTargetedByHandContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.userFunc0x188d1b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._targetCount || 0) : 0;
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.userFunc0x188d1b8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCount = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetCountContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.userFunc0x24b7cf0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitPointX || 0) : 0;
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.userFunc0x24b7cf0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.userFunc0x188d1b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitPointY || 0) : 0;
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.userFunc0x188d1b8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.userFunc0x24b7cf0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitPointZ || 0) : 0;
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.userFunc0x24b7cf0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZ = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetPointZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.userFunc0x188d170 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setTargetableEnabled) beh._setTargetableEnabled('true');
}
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.userFunc0x188d170(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargeting = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.EnableTargetingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.userFunc0x12c2868 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setTargetableEnabled) beh._setTargetableEnabled('false');
}
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.userFunc0x12c2868(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargeting = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.DisableTargetingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.userFunc0x18e64f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
var v = beh && beh._getTargetableEnabled ? beh._getTargetableEnabled() : 'true';
eventsFunctionContext.returnValue = (v === 'true' || v === true) ? 1 : 0;
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.userFunc0x18e64f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.TargetingEnabledContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext = {};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.userFunc0x24b7ca8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    beh._targetCount = 0;
    beh._everTargeted = false;
}
};
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.userFunc0x24b7ca8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargeting = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrTargetable.VrTargetable.prototype.ResetTargetingContext.GDObjectObjects1.length = 0;


return;
}


gdjs.registerBehavior("WebXR::VrTargetable", gdjs.evtsExt__WebXR__VrTargetable.VrTargetable);
