
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes || {};

/**
 * Behavior generated from Show 3D Collision Shapes
 */
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes = class Show3DCollisionShapes extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Physics3D = behaviorData.Physics3D !== undefined ? behaviorData.Physics3D : "";
    this._behaviorData.ShowCollisionShape = behaviorData.ShowCollisionShape !== undefined ? behaviorData.ShowCollisionShape : true;
    this._behaviorData.DepthTest = behaviorData.DepthTest !== undefined ? behaviorData.DepthTest : false;
    this._behaviorData.Color = behaviorData.Color !== undefined ? behaviorData.Color : "0;255;0";
    this._behaviorData.ShowInEditor = behaviorData.ShowInEditor !== undefined ? behaviorData.ShowInEditor : true;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Physics3D !== undefined)
      this._behaviorData.Physics3D = behaviorOverriding.Physics3D;
    if (behaviorOverriding.ShowCollisionShape !== undefined)
      this._behaviorData.ShowCollisionShape = behaviorOverriding.ShowCollisionShape;
    if (behaviorOverriding.DepthTest !== undefined)
      this._behaviorData.DepthTest = behaviorOverriding.DepthTest;
    if (behaviorOverriding.Color !== undefined)
      this._behaviorData.Color = behaviorOverriding.Color;
    if (behaviorOverriding.ShowInEditor !== undefined)
      this._behaviorData.ShowInEditor = behaviorOverriding.ShowInEditor;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Physics3D: this._behaviorData.Physics3D,
    ShowCollisionShape: this._behaviorData.ShowCollisionShape,
    DepthTest: this._behaviorData.DepthTest,
    Color: this._behaviorData.Color,
    ShowInEditor: this._behaviorData.ShowInEditor,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Physics3D !== undefined)
      this._behaviorData.Physics3D = networkSyncData.props.Physics3D;
    if (networkSyncData.props.ShowCollisionShape !== undefined)
      this._behaviorData.ShowCollisionShape = networkSyncData.props.ShowCollisionShape;
    if (networkSyncData.props.DepthTest !== undefined)
      this._behaviorData.DepthTest = networkSyncData.props.DepthTest;
    if (networkSyncData.props.Color !== undefined)
      this._behaviorData.Color = networkSyncData.props.Color;
    if (networkSyncData.props.ShowInEditor !== undefined)
      this._behaviorData.ShowInEditor = networkSyncData.props.ShowInEditor;
  }

  // Properties:
  
  _getPhysics3D() {
    return this._behaviorData.Physics3D !== undefined ? this._behaviorData.Physics3D : "";
  }
  _setPhysics3D(newValue) {
    this._behaviorData.Physics3D = newValue;
  }
  _getShowCollisionShape() {
    return this._behaviorData.ShowCollisionShape !== undefined ? this._behaviorData.ShowCollisionShape : true;
  }
  _setShowCollisionShape(newValue) {
    this._behaviorData.ShowCollisionShape = newValue;
  }
  _toggleShowCollisionShape() {
    this._setShowCollisionShape(!this._getShowCollisionShape());
  }
  _getDepthTest() {
    return this._behaviorData.DepthTest !== undefined ? this._behaviorData.DepthTest : false;
  }
  _setDepthTest(newValue) {
    this._behaviorData.DepthTest = newValue;
  }
  _toggleDepthTest() {
    this._setDepthTest(!this._getDepthTest());
  }
  _getColor() {
    return this._behaviorData.Color !== undefined ? this._behaviorData.Color : "0;255;0";
  }
  _setColor(newValue) {
    this._behaviorData.Color = newValue;
  }
  _getShowInEditor() {
    return this._behaviorData.ShowInEditor !== undefined ? this._behaviorData.ShowInEditor : true;
  }
  _setShowInEditor(newValue) {
    this._behaviorData.ShowInEditor = newValue;
  }
  _toggleShowInEditor() {
    this._setShowInEditor(!this._getShowInEditor());
  }
}

/**
 * Shared data generated from Show 3D Collision Shapes
 */
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.SharedData = class Show3DCollisionShapesSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Show3DCollisionShapes_Show3DCollisionShapesSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Show3DCollisionShapes_Show3DCollisionShapesSharedData = new gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.SharedData(
      initialData
    );
  }
  return instanceContainer._Show3DCollisionShapes_Show3DCollisionShapesSharedData;
}

// Methods:
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__Show3DCollisionShapes__IsInGameEdition.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ShowInEditor(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateUpdateCollisionShapes(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ShowCollisionShape(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1[k] = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetShowCollisionShape(false, eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetShowCollisionShape(true, eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibility = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleVisibilityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DepthTest(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1[k] = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetDepthTest(false, eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetDepthTest(true, eventsFunctionContext);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTest = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ToggleDepthTestContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShowCollisionShape();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShape = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowCollisionShapeContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShowCollisionShape(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShowCollisionShape(true)
}
}

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShape = function(Value, parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowCollisionShapeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDepthTest();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTest = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.DepthTestContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDepthTest(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDepthTest(true)
}
}

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTest = function(Value, parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetDepthTestContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateUpdateCollisionShapes(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.GDObjectObjects1= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.userFunc0x16e20e0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const currentObjectInstance = objects[0];
const physics3DBehavior = currentObjectInstance.getBehavior("Physics3D");
const character3DBehavior = currentObjectInstance.getBehavior("PhysicsCharacter3D");
const showCollisionShapesBehavior = currentObjectInstance.getBehavior("Show3DCollisionShapes");

if (currentObjectInstance && physics3DBehavior && showCollisionShapesBehavior) {
    const objectThreeRendererObject = currentObjectInstance.get3DRendererObject();
    if (!objectThreeRendererObject) return;

    // DYNAMIC PROPERTY FETCHING 
    const isCollisionShapeVisible = showCollisionShapesBehavior._getShowCollisionShape();
    const isDepthTestEnabled = showCollisionShapesBehavior._getDepthTest();

    // Fetch current world-space dimensions
    const currentObjectWorldWidth = currentObjectInstance.getWidth();
    const currentObjectWorldHeight = currentObjectInstance.getHeight();
    const currentObjectWorldDepth = (currentObjectInstance.getDepth) ? currentObjectInstance.getDepth() : currentObjectWorldWidth;

    // Check if dimensions have changed since the last frame update
    const haveObjectDimensionsChanged = (
        currentObjectWorldWidth !== currentObjectInstance._lastKnownWorldWidth ||
        currentObjectWorldHeight !== currentObjectInstance._lastKnownWorldHeight ||
        currentObjectWorldDepth !== currentObjectInstance._lastKnownWorldDepth
    );

    // THE CREATION & SYNC
    // This block executes only during the first initialization or when dimensions are modified
    if (!currentObjectInstance._debugWireframeMesh || haveObjectDimensionsChanged) {
        
        // Update the cached state to track changes in the next frame
        currentObjectInstance._lastKnownWorldWidth = currentObjectWorldWidth;
        currentObjectInstance._lastKnownWorldHeight = currentObjectWorldHeight;
        currentObjectInstance._lastKnownWorldDepth = currentObjectWorldDepth;

        // Clean up existing geometry from GPU memory to prevent performance degradation
        if (currentObjectInstance._debugWireframeMesh) {
            currentObjectInstance._debugWireframeMesh.geometry.dispose();
        }

        // Convert the "R;G;B" color string into a numeric Hex format
        const gdevelopColorString = showCollisionShapesBehavior._getColor();
        const colorRgbComponents = gdevelopColorString.split(";");
        const wireframeHexColor = gdjs.rgbToHexNumber(
            parseInt(colorRgbComponents[0] || 0, 10), 
            parseInt(colorRgbComponents[1] || 0, 10), 
            parseInt(colorRgbComponents[2] || 0, 10)
        );

        const collisionShapeType = physics3DBehavior._shape;
        const collisionShapeOrientation = physics3DBehavior.shapeOrientation;
        
        let targetShapeWidth = 0;
        let targetShapeHeight = 0;
        let targetShapeDepth = 0;
        let targetShapeRadius = 0;
        let targetShapeTotalHeight = 0;

        const calculateAutoRadiusFromDimensions = (dimensionA, dimensionB) => Math.sqrt(dimensionA * dimensionB) / 2;

        // CALCULATION LOGIC
        if (collisionShapeType === "Box") {
            targetShapeWidth = (physics3DBehavior.shapeDimensionA === 0) ? currentObjectWorldWidth : physics3DBehavior.shapeDimensionA;
            targetShapeHeight = (physics3DBehavior.shapeDimensionB === 0) ? currentObjectWorldHeight : physics3DBehavior.shapeDimensionB;
            targetShapeDepth = (physics3DBehavior.shapeDimensionC === 0) ? currentObjectWorldDepth : physics3DBehavior.shapeDimensionC;
            targetShapeTotalHeight = targetShapeDepth;
        } 
        else if (collisionShapeType === "Sphere") {
            const calculatedVolumeRadius = Math.pow(currentObjectWorldWidth * currentObjectWorldHeight * currentObjectWorldDepth, 1/3) / 2;
            targetShapeRadius = (physics3DBehavior.shapeDimensionA === 0) ? calculatedVolumeRadius : physics3DBehavior.shapeDimensionA;
            targetShapeWidth = targetShapeHeight = targetShapeDepth = targetShapeRadius * 2;
            targetShapeTotalHeight = targetShapeRadius * 2; 
        } 
        else {
            let radiusReferenceA, radiusReferenceB, heightReference;
            if (collisionShapeOrientation === "X") { 
                radiusReferenceA = currentObjectWorldHeight; radiusReferenceB = currentObjectWorldDepth; heightReference = currentObjectWorldWidth; 
            }
            else if (collisionShapeOrientation === "Y") { 
                radiusReferenceA = currentObjectWorldWidth; radiusReferenceB = currentObjectWorldDepth; heightReference = currentObjectWorldHeight; 
            }
            else { 
                radiusReferenceA = currentObjectWorldWidth; radiusReferenceB = currentObjectWorldHeight; heightReference = currentObjectWorldDepth; 
            }

            targetShapeRadius = (physics3DBehavior.shapeDimensionA === 0) ? calculateAutoRadiusFromDimensions(radiusReferenceA, radiusReferenceB) : physics3DBehavior.shapeDimensionA;
            targetShapeTotalHeight = (physics3DBehavior.shapeDimensionB === 0) ? heightReference : physics3DBehavior.shapeDimensionB;

            if (collisionShapeOrientation === "X") { 
                targetShapeWidth = targetShapeTotalHeight; targetShapeHeight = targetShapeDepth = targetShapeRadius * 2; 
            }
            else if (collisionShapeOrientation === "Y") { 
                targetShapeHeight = targetShapeTotalHeight; targetShapeWidth = targetShapeDepth = targetShapeRadius * 2; 
            }
            else { 
                targetShapeDepth = targetShapeTotalHeight; targetShapeWidth = targetShapeHeight = targetShapeRadius * 2; 
            }
        }

        // GEOMETRY RE-CONSTRUCTION
        let collisionWireframeGeometry;
        if (collisionShapeType === "Box") {
            collisionWireframeGeometry = new THREE.BoxGeometry(targetShapeWidth, targetShapeHeight, targetShapeDepth);
        } else if (collisionShapeType === "Sphere") {
            collisionWireframeGeometry = new THREE.SphereGeometry(targetShapeRadius, 12, 12);
        } else if (collisionShapeType === "Capsule") {
            const internalCylinderHeight = Math.max(0, targetShapeTotalHeight - (targetShapeRadius * 2));
            collisionWireframeGeometry = new THREE.CapsuleGeometry(targetShapeRadius, internalCylinderHeight, 2, 12);
        } else {
            collisionWireframeGeometry = new THREE.CylinderGeometry(targetShapeRadius, targetShapeRadius, targetShapeTotalHeight, 12);
        }

        // Apply Rotation for Capsule/Cylinder orientation
        if (collisionShapeType !== "Box" && collisionShapeType !== "Sphere") {
            if (collisionShapeOrientation === "Z") collisionWireframeGeometry.rotateX(Math.PI / 2);
            if (collisionShapeOrientation === "X") collisionWireframeGeometry.rotateZ(Math.PI / 2);
        }

        // Reuse existing mesh material or create new if first run
        if (currentObjectInstance._debugWireframeMesh) {
            currentObjectInstance._debugWireframeMesh.geometry = collisionWireframeGeometry;
        } else {
            const collisionWireframeMaterial = new THREE.MeshBasicMaterial({ 
                color: wireframeHexColor, 
                wireframe: true, 
                depthTest: isDepthTestEnabled 
            });
            const newCollisionDebugMesh = new THREE.Mesh(collisionWireframeGeometry, collisionWireframeMaterial);
            currentObjectInstance._debugWireframeMesh = newCollisionDebugMesh;
            objectThreeRendererObject.add(newCollisionDebugMesh);
        }

        // CHARACTER 3D SPECIFIC CENTERING & OFFSET
        const activeCollisionDebugMesh = currentObjectInstance._debugWireframeMesh;
        const parentInverseScaleX = 1 / objectThreeRendererObject.scale.x;
        const parentInverseScaleY = 1 / objectThreeRendererObject.scale.y;
        const parentInverseScaleZ = 1 / objectThreeRendererObject.scale.z;
        
        activeCollisionDebugMesh.scale.set(parentInverseScaleX, parentInverseScaleY, parentInverseScaleZ);

        let finalWorldOffsetX = (physics3DBehavior.shapeOffsetX || 0);
        let finalWorldOffsetY = (physics3DBehavior.shapeOffsetY || 0);
        let finalWorldOffsetZ = (physics3DBehavior.shapeOffsetZ || 0);

        if (character3DBehavior) {
            const halfShapeTotalHeight = targetShapeTotalHeight / 2;

            if (collisionShapeType === "Box") {
                // Boxes shift strictly up on Z to sit on bottom origin
                finalWorldOffsetZ += halfShapeTotalHeight;
            } 
            else if (collisionShapeType === "Sphere") {
                // Spheres shift strictly up on Z by radius to sit on bottom origin
                finalWorldOffsetZ += targetShapeRadius;
            } 
            else { 
                // Capsule or Cylinder centering logic
                if (collisionShapeOrientation === "Z") {
                    // Move up on Z
                    finalWorldOffsetZ += halfShapeTotalHeight;
                } else if (collisionShapeOrientation === "Y") {
                    // Move up on Z by radius
                    finalWorldOffsetZ += targetShapeRadius;
                } else if (collisionShapeOrientation === "X") {
                    // Move up on Z by radius
                    finalWorldOffsetZ += targetShapeRadius;
                }
            }
        }

        // Final local coordinate assignment
        activeCollisionDebugMesh.position.set(
            finalWorldOffsetX * parentInverseScaleX, 
            finalWorldOffsetY * parentInverseScaleY, 
            finalWorldOffsetZ * parentInverseScaleZ
        );
    }

    // THE UPDATE CHUNK PER-FRAME
    const activeDebugMeshInstance = currentObjectInstance._debugWireframeMesh;
    
    activeDebugMeshInstance.visible = isCollisionShapeVisible;

    if (activeDebugMeshInstance.material.depthTest !== isDepthTestEnabled) {
        activeDebugMeshInstance.material.depthTest = isDepthTestEnabled;
        activeDebugMeshInstance.material.needsUpdate = true;
    }
}
};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.GDObjectObjects1);

const objects = gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.GDObjectObjects1;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.userFunc0x16e20e0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapes = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.CreateUpdateCollisionShapesContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShowInEditor();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditor = function(parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.ShowInEditorContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext = {};
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.idToCallbackMap = new Map();
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.GDObjectObjects1= [];
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.GDObjectObjects2= [];


gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShowInEditor(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShowInEditor(true)
}
}

}


};

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditor = function(Value, parentEventsFunctionContext) {

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
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Show3DCollisionShapes"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Show3DCollisionShapes"),
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

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.SetShowInEditorContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Show3DCollisionShapes::Show3DCollisionShapes", gdjs.evtsExt__Show3DCollisionShapes__Show3DCollisionShapes.Show3DCollisionShapes);
