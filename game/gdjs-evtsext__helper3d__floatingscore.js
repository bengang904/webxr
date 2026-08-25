
gdjs.evtsExt__Helper3D__FloatingScore = gdjs.evtsExt__Helper3D__FloatingScore || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore = class FloatingScore extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.originZ = Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.originZ !== undefined)
      this._behaviorData.originZ = behaviorOverriding.originZ;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    originZ: this._behaviorData.originZ,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.originZ !== undefined)
      this._behaviorData.originZ = networkSyncData.props.originZ;
  }

  // Properties:
  
  _getoriginZ() {
    return this._behaviorData.originZ !== undefined ? this._behaviorData.originZ : Number("0") || 0;
  }
  _setoriginZ(newValue) {
    this._behaviorData.originZ = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.SharedData = class FloatingScoreSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Helper3D_FloatingScoreSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Helper3D_FloatingScoreSharedData = new gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.SharedData(
      initialData
    );
  }
  return instanceContainer._Helper3D_FloatingScoreSharedData;
}

// Methods:
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext = {};
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.idToCallbackMap = new Map();
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1= [];
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects2= [];
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects1= [];
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects2= [];
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1= [];
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects2= [];


gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("enemy"), gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationX(270);
}
}
{for(var i = 0, len = gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].setX((( gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1[0].getX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].setY((( gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1[0].getY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((( gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("+ " + ("" + eventsFunctionContext.getArgument("points")) + " pts");
}
}
{for(var i = 0, len = gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].getVariables().get("originZ")).setNumber((gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].setAngle((gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1[i].getAngleToObject((gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects1.length !== 0 ? gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects1[0] : null))) - 90);
}
}
}

}


};

gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.update = function(player, enemy, points, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "player": player
, "enemy": enemy
},
  _objectArraysMap: {
"Object": thisObjectList
, "player": gdjs.objectsListsToArray(player)
, "enemy": gdjs.objectsListsToArray(enemy)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Helper3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Helper3D"),
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
if (argName === "points") return points;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects1.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects2.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects2.length = 0;

gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects1.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDplayerObjects2.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects1.length = 0;
gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.updateContext.GDenemyObjects2.length = 0;


return;
}

gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Helper3D::FloatingScore", gdjs.evtsExt__Helper3D__FloatingScore.FloatingScore);
