
gdjs.evtsExt__WebXR_Archery__VrHittable = gdjs.evtsExt__WebXR_Archery__VrHittable || {};

/**
 * Behavior generated from VrHittable
 */
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable = class VrHittable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.getSharedData(
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
 * Shared data generated from VrHittable
 */
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.SharedData = class VrHittableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_Archery_VrHittableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_Archery_VrHittableSharedData = new gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_Archery_VrHittableSharedData;
}

// Methods:
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.userFunc0x2b09278 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
if (!gdjs._webxrVrHittableRegistry) gdjs._webxrVrHittableRegistry = [];
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._justHit = false;
    beh._seenStuck = [];
    beh._lastHitSpeed = 0;
    beh._lastHitVelX = 0;
    beh._lastHitVelY = 0;
    beh._lastHitVelZ = 0;
    beh._hitCount = 0;
    beh._lastHitArrowTag = '';
    beh._lastHitArrowName = '';
    gdjs._webxrVrHittableRegistry.push({ obj: obj, beh: beh });
}
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.userFunc0x2b09278(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.userFunc0x254ff88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
if (!gdjs._webxrVrHittableRegistry) return;
for (var i = 0; i < objs.length; i++) {
    var dead = objs[i];
    gdjs._webxrVrHittableRegistry = gdjs._webxrVrHittableRegistry.filter(function(e) { return e.obj !== dead; });
}
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.userFunc0x254ff88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.userFunc0x2b43b50 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var arrowReg = gdjs._webxrVrArrowRegistry || [];
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._justHit = false;
    var tThree = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
    if (!tThree) continue;
    for (var j = 0; j < arrowReg.length; j++) {
        var arw = arrowReg[j];
        var arwBeh = arw.beh;
        if (!arwBeh || arwBeh._archeryState !== 'stuck' || !arwBeh._stuckHitObject) {
            var evictIdx = beh._seenStuck.indexOf(arw.obj);
            if (evictIdx >= 0) {
                beh._seenStuck.splice(evictIdx, 1);
                if (arwBeh && arwBeh._stuckInObjectName === obj.getName()) arwBeh._stuckInObjectName = '';
            }
            continue;
        }
        var node = arwBeh._stuckHitObject;
        var found = false;
        while (node) { if (node === tThree) { found = true; break; } node = node.parent; }
        if (found) {
            if (beh._seenStuck.indexOf(arw.obj) < 0) {
                beh._justHit = true;
                beh._lastHitSpeed = arwBeh._hitSpeed || 0;
                beh._lastHitVelX = arwBeh._hitVelX || 0;
                beh._lastHitVelY = arwBeh._hitVelY || 0;
                beh._lastHitVelZ = arwBeh._hitVelZ || 0;
                beh._lastHitArrowTag = arwBeh._getArrowTag ? String(arwBeh._getArrowTag()) : '';
                beh._lastHitArrowName = arw.obj.getName();
                beh._hitCount++;
                beh._seenStuck.push(arw.obj);
                arwBeh._stuckInObjectName = obj.getName();
            }
        } else {
            var removeIdx = beh._seenStuck.indexOf(arw.obj);
            if (removeIdx >= 0) {
                beh._seenStuck.splice(removeIdx, 1);
                if (arwBeh._stuckInObjectName === obj.getName()) arwBeh._stuckInObjectName = '';
            }
        }
    }
}
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.userFunc0x2b43b50(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.userFunc0x254ff88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._justHit);
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.userFunc0x254ff88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHit = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.JustHitContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.userFunc0x254ff88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = !!(beh && beh._hitCount > 0);
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.userFunc0x254ff88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHit = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.WasEverHitContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.userFunc0x254ff88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._hitCount || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.userFunc0x254ff88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCount = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.HitCountContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.userFunc0x10ff9c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._lastHitSpeed || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.userFunc0x10ff9c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitSpeedContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.userFunc0x254ff88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._lastHitVelX || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.userFunc0x254ff88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.userFunc0x10ff9c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._lastHitVelY || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.userFunc0x10ff9c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.userFunc0x254ff88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._lastHitVelZ || 0) : 0;
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.userFunc0x254ff88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZ = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitVelZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.userFunc0x10ff9c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._lastHitArrowTag || '') : '';
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.userFunc0x10ff9c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTag = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowTagContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.userFunc0x10ff9c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh ? (beh._lastHitArrowName || '') : '';
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.userFunc0x10ff9c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.LastHitArrowNameContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext = {};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.userFunc0x254ff88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (!beh) continue;
    beh._justHit = false;
    beh._seenStuck = [];
    beh._hitCount = 0;
    beh._lastHitSpeed = 0;
    beh._lastHitVelX = 0;
    beh._lastHitVelY = 0;
    beh._lastHitVelZ = 0;
    beh._lastHitArrowTag = '';
    beh._lastHitArrowName = '';
}
};
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.userFunc0x254ff88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHits = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
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

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable.prototype.ResetHitsContext.GDObjectObjects1.length = 0;


return;
}


gdjs.registerBehavior("WebXR_Archery::VrHittable", gdjs.evtsExt__WebXR_Archery__VrHittable.VrHittable);
