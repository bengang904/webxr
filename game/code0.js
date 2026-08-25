gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.forEachIndex2 = 0;

gdjs.Game_32SceneCode.forEachIndex3 = 0;

gdjs.Game_32SceneCode.forEachObjects2 = [];

gdjs.Game_32SceneCode.forEachObjects3 = [];

gdjs.Game_32SceneCode.forEachTemporary2 = null;

gdjs.Game_32SceneCode.forEachTemporary3 = null;

gdjs.Game_32SceneCode.forEachTotalCount2 = 0;

gdjs.Game_32SceneCode.forEachTotalCount3 = 0;

gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDGroundObjects3= [];
gdjs.Game_32SceneCode.GDGroundObjects4= [];
gdjs.Game_32SceneCode.GDObstacleObjects1= [];
gdjs.Game_32SceneCode.GDObstacleObjects2= [];
gdjs.Game_32SceneCode.GDObstacleObjects3= [];
gdjs.Game_32SceneCode.GDObstacleObjects4= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects1= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects2= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects3= [];
gdjs.Game_32SceneCode.GDPushableBoxObjects4= [];
gdjs.Game_32SceneCode.GDSkyboxObjects1= [];
gdjs.Game_32SceneCode.GDSkyboxObjects2= [];
gdjs.Game_32SceneCode.GDSkyboxObjects3= [];
gdjs.Game_32SceneCode.GDSkyboxObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDLControllerObjects1= [];
gdjs.Game_32SceneCode.GDLControllerObjects2= [];
gdjs.Game_32SceneCode.GDLControllerObjects3= [];
gdjs.Game_32SceneCode.GDLControllerObjects4= [];
gdjs.Game_32SceneCode.GDRControllerObjects1= [];
gdjs.Game_32SceneCode.GDRControllerObjects2= [];
gdjs.Game_32SceneCode.GDRControllerObjects3= [];
gdjs.Game_32SceneCode.GDRControllerObjects4= [];
gdjs.Game_32SceneCode.GDGrabbableCubeObjects1= [];
gdjs.Game_32SceneCode.GDGrabbableCubeObjects2= [];
gdjs.Game_32SceneCode.GDGrabbableCubeObjects3= [];
gdjs.Game_32SceneCode.GDGrabbableCubeObjects4= [];
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects1= [];
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2= [];
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects3= [];
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects4= [];
gdjs.Game_32SceneCode.GDDebugTextObjects1= [];
gdjs.Game_32SceneCode.GDDebugTextObjects2= [];
gdjs.Game_32SceneCode.GDDebugTextObjects3= [];
gdjs.Game_32SceneCode.GDDebugTextObjects4= [];
gdjs.Game_32SceneCode.GDShoesObjects1= [];
gdjs.Game_32SceneCode.GDShoesObjects2= [];
gdjs.Game_32SceneCode.GDShoesObjects3= [];
gdjs.Game_32SceneCode.GDShoesObjects4= [];
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects1= [];
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects2= [];
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects3= [];
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects4= [];
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1= [];
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects2= [];
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects3= [];
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects4= [];
gdjs.Game_32SceneCode.GDSwordObjects1= [];
gdjs.Game_32SceneCode.GDSwordObjects2= [];
gdjs.Game_32SceneCode.GDSwordObjects3= [];
gdjs.Game_32SceneCode.GDSwordObjects4= [];
gdjs.Game_32SceneCode.GDPistolObjects1= [];
gdjs.Game_32SceneCode.GDPistolObjects2= [];
gdjs.Game_32SceneCode.GDPistolObjects3= [];
gdjs.Game_32SceneCode.GDPistolObjects4= [];
gdjs.Game_32SceneCode.GDTextHUDObjects1= [];
gdjs.Game_32SceneCode.GDTextHUDObjects2= [];
gdjs.Game_32SceneCode.GDTextHUDObjects3= [];
gdjs.Game_32SceneCode.GDTextHUDObjects4= [];
gdjs.Game_32SceneCode.GDBowObjects1= [];
gdjs.Game_32SceneCode.GDBowObjects2= [];
gdjs.Game_32SceneCode.GDBowObjects3= [];
gdjs.Game_32SceneCode.GDBowObjects4= [];
gdjs.Game_32SceneCode.GDArrowObjects1= [];
gdjs.Game_32SceneCode.GDArrowObjects2= [];
gdjs.Game_32SceneCode.GDArrowObjects3= [];
gdjs.Game_32SceneCode.GDArrowObjects4= [];
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects1= [];
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects2= [];
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects3= [];
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects4= [];
gdjs.Game_32SceneCode.GDCube_9595BricksObjects1= [];
gdjs.Game_32SceneCode.GDCube_9595BricksObjects2= [];
gdjs.Game_32SceneCode.GDCube_9595BricksObjects3= [];
gdjs.Game_32SceneCode.GDCube_9595BricksObjects4= [];
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects1= [];
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects2= [];
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects3= [];
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects4= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects3= [];
gdjs.Game_32SceneCode.GDWallObjects4= [];
gdjs.Game_32SceneCode.GDLadder_9595LongObjects1= [];
gdjs.Game_32SceneCode.GDLadder_9595LongObjects2= [];
gdjs.Game_32SceneCode.GDLadder_9595LongObjects3= [];
gdjs.Game_32SceneCode.GDLadder_9595LongObjects4= [];
gdjs.Game_32SceneCode.GDKey_9595MetalObjects1= [];
gdjs.Game_32SceneCode.GDKey_9595MetalObjects2= [];
gdjs.Game_32SceneCode.GDKey_9595MetalObjects3= [];
gdjs.Game_32SceneCode.GDKey_9595MetalObjects4= [];
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects1= [];
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects2= [];
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects3= [];
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects4= [];
gdjs.Game_32SceneCode.GDfloor_9595detailObjects1= [];
gdjs.Game_32SceneCode.GDfloor_9595detailObjects2= [];
gdjs.Game_32SceneCode.GDfloor_9595detailObjects3= [];
gdjs.Game_32SceneCode.GDfloor_9595detailObjects4= [];
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects1= [];
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects2= [];
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects3= [];
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects4= [];
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects1= [];
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects2= [];
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects3= [];
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects4= [];
gdjs.Game_32SceneCode.GDInfoTextObjects1= [];
gdjs.Game_32SceneCode.GDInfoTextObjects2= [];
gdjs.Game_32SceneCode.GDInfoTextObjects3= [];
gdjs.Game_32SceneCode.GDInfoTextObjects4= [];
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects1= [];
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects2= [];
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects3= [];
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects4= [];
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects1= [];
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects2= [];
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects3= [];
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects4= [];
gdjs.Game_32SceneCode.GDTable_9595LargeObjects1= [];
gdjs.Game_32SceneCode.GDTable_9595LargeObjects2= [];
gdjs.Game_32SceneCode.GDTable_9595LargeObjects3= [];
gdjs.Game_32SceneCode.GDTable_9595LargeObjects4= [];
gdjs.Game_32SceneCode.GDWheelObjects1= [];
gdjs.Game_32SceneCode.GDWheelObjects2= [];
gdjs.Game_32SceneCode.GDWheelObjects3= [];
gdjs.Game_32SceneCode.GDWheelObjects4= [];
gdjs.Game_32SceneCode.GDDock_9595PoleObjects1= [];
gdjs.Game_32SceneCode.GDDock_9595PoleObjects2= [];
gdjs.Game_32SceneCode.GDDock_9595PoleObjects3= [];
gdjs.Game_32SceneCode.GDDock_9595PoleObjects4= [];
gdjs.Game_32SceneCode.GDbuttonRoundObjects1= [];
gdjs.Game_32SceneCode.GDbuttonRoundObjects2= [];
gdjs.Game_32SceneCode.GDbuttonRoundObjects3= [];
gdjs.Game_32SceneCode.GDbuttonRoundObjects4= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects1= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects2= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects3= [];
gdjs.Game_32SceneCode.GDNewSpotLightObjects4= [];
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1= [];
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2= [];
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects3= [];
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects4= [];
gdjs.Game_32SceneCode.GDDummyObjects1= [];
gdjs.Game_32SceneCode.GDDummyObjects2= [];
gdjs.Game_32SceneCode.GDDummyObjects3= [];
gdjs.Game_32SceneCode.GDDummyObjects4= [];
gdjs.Game_32SceneCode.GDTextPtsObjects1= [];
gdjs.Game_32SceneCode.GDTextPtsObjects2= [];
gdjs.Game_32SceneCode.GDTextPtsObjects3= [];
gdjs.Game_32SceneCode.GDTextPtsObjects4= [];
gdjs.Game_32SceneCode.GDUITextObjects1= [];
gdjs.Game_32SceneCode.GDUITextObjects2= [];
gdjs.Game_32SceneCode.GDUITextObjects3= [];
gdjs.Game_32SceneCode.GDUITextObjects4= [];
gdjs.Game_32SceneCode.GDQuiverObjects1= [];
gdjs.Game_32SceneCode.GDQuiverObjects2= [];
gdjs.Game_32SceneCode.GDQuiverObjects3= [];
gdjs.Game_32SceneCode.GDQuiverObjects4= [];
gdjs.Game_32SceneCode.GDBasketballObjects1= [];
gdjs.Game_32SceneCode.GDBasketballObjects2= [];
gdjs.Game_32SceneCode.GDBasketballObjects3= [];
gdjs.Game_32SceneCode.GDBasketballObjects4= [];
gdjs.Game_32SceneCode.GDMagnetObjects1= [];
gdjs.Game_32SceneCode.GDMagnetObjects2= [];
gdjs.Game_32SceneCode.GDMagnetObjects3= [];
gdjs.Game_32SceneCode.GDMagnetObjects4= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Floating_Target"), gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariables().getFromIndex(1)).setNumber((gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getBehavior("Object3D").getZ()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.Game_32SceneCode.GDInfoTextObjects2);

for (gdjs.Game_32SceneCode.forEachIndex3 = 0;gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.GDInfoTextObjects2.length;++gdjs.Game_32SceneCode.forEachIndex3) {
gdjs.Game_32SceneCode.GDInfoTextObjects3.length = 0;


gdjs.Game_32SceneCode.forEachTemporary3 = gdjs.Game_32SceneCode.GDInfoTextObjects2[gdjs.Game_32SceneCode.forEachIndex3];
gdjs.Game_32SceneCode.GDInfoTextObjects3.push(gdjs.Game_32SceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInfoTextObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInfoTextObjects3[i].getBehavior("Text").setText(gdjs.Game_32SceneCode.GDInfoTextObjects3[i].getVariables().getFromIndex(0).getAsString());
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UIText"), gdjs.Game_32SceneCode.GDUITextObjects2);

for (gdjs.Game_32SceneCode.forEachIndex3 = 0;gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.GDUITextObjects2.length;++gdjs.Game_32SceneCode.forEachIndex3) {
gdjs.Game_32SceneCode.GDUITextObjects3.length = 0;


gdjs.Game_32SceneCode.forEachTemporary3 = gdjs.Game_32SceneCode.GDUITextObjects2[gdjs.Game_32SceneCode.forEachIndex3];
gdjs.Game_32SceneCode.GDUITextObjects3.push(gdjs.Game_32SceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDUITextObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDUITextObjects3[i].getBehavior("Text").setText(gdjs.Game_32SceneCode.GDUITextObjects3[i].getVariables().getFromIndex(0).getAsString());
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Game_32SceneCode.GDGroundObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDGroundObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDGroundObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDGroundObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDGroundObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDGroundObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDGroundObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDGroundObjects2[k] = gdjs.Game_32SceneCode.GDGroundObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDGroundObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGroundObjects2[i].activateBehavior("VrTeleportable", false);
}
}
}
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDShoesObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDShoesObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDShoesObjects3[i].getBehavior("VrTeleport").IsHitValid(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDShoesObjects3[k] = gdjs.Game_32SceneCode.GDShoesObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDShoesObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDShoesObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDShoesObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDShoesObjects3[i].getBehavior("VrTeleport").TeleportPlayer(null);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects3[i].getBehavior("VrController").IsTriggerJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects3[k] = gdjs.Game_32SceneCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Shoes"), gdjs.Game_32SceneCode.GDShoesObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDShoesObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDShoesObjects3[i].getBehavior("VrTeleport").SetFacingAngle((( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getAngle()), null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDShoesObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDShoesObjects3[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects3[i].getBehavior("VrController").IsTriggerPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects3[k] = gdjs.Game_32SceneCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Shoes"), gdjs.Game_32SceneCode.GDShoesObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDShoesObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDShoesObjects3[i].getBehavior("VrTeleport").ProjectArc("left", null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects3[i].getBehavior("VrController").IsTriggerJustReleased(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects3[k] = gdjs.Game_32SceneCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Shoes"), gdjs.Game_32SceneCode.GDShoesObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDShoesObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDShoesObjects3[i].hide();
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.Game_32SceneCode.GDRControllerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRControllerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRControllerObjects3[i].getBehavior("VrController").JoyX(null) < -0.70 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRControllerObjects3[k] = gdjs.Game_32SceneCode.GDRControllerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRControllerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30207940);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].setAngle(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getAngle() - (30));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.Game_32SceneCode.GDRControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRControllerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRControllerObjects2[i].getBehavior("VrController").JoyX(null) > 0.70 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRControllerObjects2[k] = gdjs.Game_32SceneCode.GDRControllerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27159196);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].setAngle(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getAngle() + (30));
}
}
}

}


};gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList6(runtimeScene);
}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(38339820);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").setShouldBindObjectAndForwardAngle(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").setForwardAngle((gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("VrHeadAnchor").MovementForwardAngle(null)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects3[i].getBehavior("VrController").JoyY(null) < -0.5 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects3[k] = gdjs.Game_32SceneCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateForwardKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects3[i].getBehavior("VrController").JoyY(null) > 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects3[k] = gdjs.Game_32SceneCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateBackwardKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects3[i].getBehavior("VrController").JoyX(null) < -0.5 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects3[k] = gdjs.Game_32SceneCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateLeftKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects3[i].getBehavior("VrController").JoyX(null) > 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects3[k] = gdjs.Game_32SceneCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.Game_32SceneCode.GDRControllerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].rotateTowardAngle((gdjs.Game_32SceneCode.GDPlayerObjects2[i].getAngle()) + (( gdjs.Game_32SceneCode.GDRControllerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDRControllerObjects2[0].getBehavior("VrController").JoyX(null)) * 90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 45, runtimeScene);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList8(runtimeScene);
}


};gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("VrHeadAnchor").IsCrouching(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("VrHeadAnchor").StartCrouching(null);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("VrHeadAnchor").IsCrouching(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("VrHeadAnchor").StopCrouching(null);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Teleport");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList7(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList9(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.Game_32SceneCode.GDRControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRControllerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRControllerObjects2[i].getBehavior("VrController").IsPrimaryButtonJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRControllerObjects2[k] = gdjs.Game_32SceneCode.GDRControllerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRControllerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects1[i].getBehavior("VrController").IsPrimaryButtonJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects1[k] = gdjs.Game_32SceneCode.GDLControllerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList10(runtimeScene);} //End of subevents
}

}

}

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDInfoTextObjects2Objects = Hashtable.newFrom({"InfoText": gdjs.Game_32SceneCode.GDInfoTextObjects2});
gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dummy"), gdjs.Game_32SceneCode.GDDummyObjects2);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.Game_32SceneCode.GDInfoTextObjects2);
{gdjs.evtTools.object.pickNearestObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDInfoTextObjects2Objects, (( gdjs.Game_32SceneCode.GDDummyObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDummyObjects2[0].getX()), (( gdjs.Game_32SceneCode.GDDummyObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDummyObjects2[0].getY()));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInfoTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInfoTextObjects2[i].SetFontSize(40, null);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2[k] = gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__WebXR__startImmersiveSession.func(runtimeScene, null);
}
{gdjs.evtsExt__WebXR__setVrFrustumCulling.func(runtimeScene, false, null);
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "background-outside.ogg", 1, true, 100, 1);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__WebXR__isImmersiveVRActive.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42420628);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__WebXR__isImmersiveVRActive.func(runtimeScene, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17381460);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}
}

}


};gdjs.Game_32SceneCode.eventsList14 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("NewSpotLight"), gdjs.Game_32SceneCode.GDNewSpotLightObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDNewSpotLightObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDNewSpotLightObjects2[i].Intensity(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDNewSpotLightObjects2[k] = gdjs.Game_32SceneCode.GDNewSpotLightObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDNewSpotLightObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDNewSpotLightObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSpotLightObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSpotLightObjects2[i].SetIntensity(1, null);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("NewSpotLight"), gdjs.Game_32SceneCode.GDNewSpotLightObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSpotLightObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSpotLightObjects1[i].SetIntensity(0, null);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Game_32SceneCode.eventsList15 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects1Objects = Hashtable.newFrom({"TextPts": gdjs.Game_32SceneCode.GDTextPtsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFloating_95959595TargetObjects1Objects = Hashtable.newFrom({"Floating_Target": gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects1Objects = Hashtable.newFrom({"TextPts": gdjs.Game_32SceneCode.GDTextPtsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDummyObjects1Objects = Hashtable.newFrom({"Dummy": gdjs.Game_32SceneCode.GDDummyObjects1});
gdjs.Game_32SceneCode.eventsList16 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSwordObjects1Objects = Hashtable.newFrom({"Sword": gdjs.Game_32SceneCode.GDSwordObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDummyObjects1Objects = Hashtable.newFrom({"Dummy": gdjs.Game_32SceneCode.GDDummyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects1Objects = Hashtable.newFrom({"TextPts": gdjs.Game_32SceneCode.GDTextPtsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDummyObjects1Objects = Hashtable.newFrom({"Dummy": gdjs.Game_32SceneCode.GDDummyObjects1});
gdjs.Game_32SceneCode.eventsList17 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setString("❤️🤍");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).concatenateString("| 🧲");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TextHUD"), gdjs.Game_32SceneCode.GDTextHUDObjects1);
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).concatenateString(gdjs.evtTools.string.newLine() + "Pts: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextHUDObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextHUDObjects1[i].getBehavior("Text").setText(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString());
}
}
}

}


};gdjs.Game_32SceneCode.eventsList19 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList20 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList21 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList22 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1, gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariables().getFromIndex(2)) == "up" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getBehavior("Tween").addObjectPositionZTween2("Object3D", "move", gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariables().getFromIndex(1).getAsNumber() + 300, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1, gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariables().getFromIndex(2)) == "down" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getBehavior("Tween").addObjectPositionZTween2("Object3D", "move", gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariables().getFromIndex(1).getAsNumber(), "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1, gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getBehavior("Object3D").getZ() <= gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariables().getFromIndex(1).getAsNumber() + 5 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2[i].getVariables().getFromIndex(2)).setString("up");
}
}
}

}


{

/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getBehavior("Object3D").getZ() >= gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getVariables().getFromIndex(1).getAsNumber() + 295 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getVariables().getFromIndex(2)).setString("down");
}
}
}

}


};gdjs.Game_32SceneCode.eventsList24 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDUITextObjects1Objects = Hashtable.newFrom({"UIText": gdjs.Game_32SceneCode.GDUITextObjects1});
gdjs.Game_32SceneCode.eventsList25 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList26 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects2Objects = Hashtable.newFrom({"TextPts": gdjs.Game_32SceneCode.GDTextPtsObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDummyObjects2Objects = Hashtable.newFrom({"Dummy": gdjs.Game_32SceneCode.GDDummyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects1Objects = Hashtable.newFrom({"TextPts": gdjs.Game_32SceneCode.GDTextPtsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFloating_95959595TargetObjects1Objects = Hashtable.newFrom({"Floating_Target": gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1});
gdjs.Game_32SceneCode.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dummy"), gdjs.Game_32SceneCode.GDDummyObjects2);
gdjs.copyArray(gdjs.Game_32SceneCode.GDLControllerObjects1, gdjs.Game_32SceneCode.GDLControllerObjects2);

gdjs.copyArray(gdjs.Game_32SceneCode.GDRControllerObjects1, gdjs.Game_32SceneCode.GDRControllerObjects2);


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("pts", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDummyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDummyObjects2[i].getBehavior("VrTargetable").IsTargetedByHand((( gdjs.Game_32SceneCode.GDRControllerObjects2.length === 0 ) ? (( gdjs.Game_32SceneCode.GDLControllerObjects2.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDLControllerObjects2[0].getBehavior("VrController").Handedness(null)) :gdjs.Game_32SceneCode.GDRControllerObjects2[0].getBehavior("VrController").Handedness(null)), null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDummyObjects2[k] = gdjs.Game_32SceneCode.GDDummyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDummyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDummyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
gdjs.Game_32SceneCode.GDTextPtsObjects2.length = 0;

{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(gdjs.randomInRange(100, 150));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects2Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextPtsObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextPtsObjects2[i].getBehavior("FloatingScore").update(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDummyObjects2Objects, gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDummyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDummyObjects2[i].getBehavior("Physics3D").applyForce(1500, 1500, 1500, (gdjs.Game_32SceneCode.GDDummyObjects2[i].getBehavior("VrTargetable").TargetPointX(null)), (gdjs.Game_32SceneCode.GDDummyObjects2[i].getBehavior("VrTargetable").TargetPointY(null)), (gdjs.Game_32SceneCode.GDDummyObjects2[i].getBehavior("VrTargetable").TargetPointZ(null)));
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("Floating_Target"), gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1);
/* Reuse gdjs.Game_32SceneCode.GDLControllerObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDRControllerObjects1 */

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("pts", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getBehavior("VrTargetable").IsTargetedByHand((( gdjs.Game_32SceneCode.GDRControllerObjects1.length === 0 ) ? (( gdjs.Game_32SceneCode.GDLControllerObjects1.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDLControllerObjects1[0].getBehavior("VrController").Handedness(null)) :gdjs.Game_32SceneCode.GDRControllerObjects1[0].getBehavior("VrController").Handedness(null)), null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDTextPtsObjects1.length = 0;

{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(10 * ((gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextPtsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextPtsObjects1[i].getBehavior("FloatingScore").update(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFloating_95959595TargetObjects1Objects, gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].setAngle(179);
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


};gdjs.Game_32SceneCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPistolObjects1, gdjs.Game_32SceneCode.GDPistolObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPistolObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").GrabbingHand(null) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPistolObjects2[k] = gdjs.Game_32SceneCode.GDPistolObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPistolObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPistolObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX(3, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY(-3, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ(-1, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX(182, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY(-45, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ(-107, null);
}
}
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPistolObjects1, gdjs.Game_32SceneCode.GDPistolObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPistolObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").GrabbingHand(null) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPistolObjects2[k] = gdjs.Game_32SceneCode.GDPistolObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPistolObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPistolObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX(-1, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY(-4, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ(-2, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX(180, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY(-45, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ(-72, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects1);
/* Reuse gdjs.Game_32SceneCode.GDPistolObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.Game_32SceneCode.GDRControllerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLControllerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLControllerObjects1[i].getBehavior("VrController").IsTriggerJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLControllerObjects1[k] = gdjs.Game_32SceneCode.GDLControllerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLControllerObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRControllerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRControllerObjects1[i].getBehavior("VrController").IsTriggerJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRControllerObjects1[k] = gdjs.Game_32SceneCode.GDRControllerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRControllerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPistolObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPistolObjects1[i].getBehavior("VrGrabbable").GrabbingHand(null) == (( gdjs.Game_32SceneCode.GDRControllerObjects1.length === 0 ) ? (( gdjs.Game_32SceneCode.GDLControllerObjects1.length === 0 ) ? "" :gdjs.Game_32SceneCode.GDLControllerObjects1[0].getBehavior("VrController").Handedness(null)) :gdjs.Game_32SceneCode.GDRControllerObjects1[0].getBehavior("VrController").Handedness(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPistolObjects1[k] = gdjs.Game_32SceneCode.GDPistolObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPistolObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "d3f175cd0b845107446c68bdec2ce23d9c448062ef9f184825fb7dd644b79e16_Gun 1.aac", false, 100, 1);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList29 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList30 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDInfoTextObjects1Objects = Hashtable.newFrom({"InfoText": gdjs.Game_32SceneCode.GDInfoTextObjects1});
gdjs.Game_32SceneCode.eventsList31 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList32 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DebugText"), gdjs.Game_32SceneCode.GDDebugTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("InvisibleObstacle"), gdjs.Game_32SceneCode.GDInvisibleObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shoes"), gdjs.Game_32SceneCode.GDShoesObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDShoesObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDShoesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDebugTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDebugTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInvisibleObstacleObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInvisibleObstacleObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{gdjs.evtsExt__WebXR__setWorldScale.func(runtimeScene, 100, null);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32SceneCode.eventsList11(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList13(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Key_Metal"), gdjs.Game_32SceneCode.GDKey_9595MetalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__WebXR__isImmersiveVRActive.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDKey_9595MetalObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDKey_9595MetalObjects1[i].getBehavior("VrGrabbable").IsTargeted(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDKey_9595MetalObjects1[k] = gdjs.Game_32SceneCode.GDKey_9595MetalObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDKey_9595MetalObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDKey_9595MetalObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDKey_9595MetalObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDKey_9595MetalObjects1[i].rotate(45, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ladder_Long"), gdjs.Game_32SceneCode.GDLadder_9595LongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLadder_9595LongObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLadder_9595LongObjects1[i].getBehavior("VrClimbable").IsClimbing(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLadder_9595LongObjects1[k] = gdjs.Game_32SceneCode.GDLadder_9595LongObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLadder_9595LongObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLadder_9595LongObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("Physics3D", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLadder_9595LongObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLadder_9595LongObjects1[i].activateBehavior("Physics3D", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ladder_Long"), gdjs.Game_32SceneCode.GDLadder_9595LongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLadder_9595LongObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDLadder_9595LongObjects1[i].getBehavior("VrClimbable").IsClimbing(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLadder_9595LongObjects1[k] = gdjs.Game_32SceneCode.GDLadder_9595LongObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLadder_9595LongObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLadder_9595LongObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].activateBehavior("Physics3D", true);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLadder_9595LongObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLadder_9595LongObjects1[i].activateBehavior("Physics3D", true);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dock_Pole"), gdjs.Game_32SceneCode.GDDock_9595PoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSpotLight"), gdjs.Game_32SceneCode.GDNewSpotLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wheel"), gdjs.Game_32SceneCode.GDWheelObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSpotLightObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSpotLightObjects1[i].SetConeLength((( gdjs.Game_32SceneCode.GDDock_9595PoleObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDock_9595PoleObjects1[0].getBehavior("VrInteractable").GetValue(null)) * 100, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNewSpotLightObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNewSpotLightObjects1[i].getBehavior("Object3D").setRotationY(45 + (( gdjs.Game_32SceneCode.GDWheelObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDWheelObjects1[0].getBehavior("VrInteractable").GetValue(null)) * 45);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("buttonRound"), gdjs.Game_32SceneCode.GDbuttonRoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDbuttonRoundObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDbuttonRoundObjects1[i].getBehavior("VrInteractable").IsInteracting(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDbuttonRoundObjects1[k] = gdjs.Game_32SceneCode.GDbuttonRoundObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDbuttonRoundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20512692);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32SceneCode.eventsList15(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Game_32SceneCode.GDArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowObjects1[i].getBehavior("VrArrow").JustLaunched(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowObjects1[k] = gdjs.Game_32SceneCode.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "3bd7554e8249d64b0e2b62bbef263214ed7a0dffca63a3b55b3a9a9b5256e203_Arrow.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floating_Target"), gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("pts", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getBehavior("VrHittable").JustHit(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDTextPtsObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "47145ef21ad7fe6be02a0ba478b5df0761869213c56c4bcf2835f84c6c8c76af_Hit 10.aac", false, 100, 1);
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(5 * ((gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].setAngle(179);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextPtsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextPtsObjects1[i].getBehavior("FloatingScore").update(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFloating_95959595TargetObjects1Objects, gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("Dummy"), gdjs.Game_32SceneCode.GDDummyObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("pts", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDummyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDummyObjects1[i].getBehavior("VrHittable").JustHit(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDummyObjects1[k] = gdjs.Game_32SceneCode.GDDummyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDummyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDummyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDTextPtsObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "47145ef21ad7fe6be02a0ba478b5df0761869213c56c4bcf2835f84c6c8c76af_Hit 10.aac", false, 100, 1);
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(Math.round((( gdjs.Game_32SceneCode.GDDummyObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDDummyObjects1[0].getBehavior("VrHittable").LastHitSpeed(null)) / 10));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextPtsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextPtsObjects1[i].getBehavior("FloatingScore").update(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDummyObjects1Objects, gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDummyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDummyObjects1[i].getBehavior("Physics3D").applyForce(500, 500, 500, (gdjs.Game_32SceneCode.GDDummyObjects1[i].getBehavior("VrTargetable").TargetPointX(null)), (gdjs.Game_32SceneCode.GDDummyObjects1[i].getBehavior("VrTargetable").TargetPointY(null)), (gdjs.Game_32SceneCode.GDDummyObjects1[i].getBehavior("VrTargetable").TargetPointZ(null)));
}
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


gdjs.Game_32SceneCode.eventsList16(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Dummy"), gdjs.Game_32SceneCode.GDDummyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sword"), gdjs.Game_32SceneCode.GDSwordObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("pts", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSwordObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSwordObjects1[i].getBehavior("VrGrabbable").IsGrabbed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDSwordObjects1[k] = gdjs.Game_32SceneCode.GDSwordObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSwordObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSwordObjects1Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDummyObjects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28878612);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDummyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.Game_32SceneCode.GDRControllerObjects1);
gdjs.Game_32SceneCode.GDTextPtsObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "47145ef21ad7fe6be02a0ba478b5df0761869213c56c4bcf2835f84c6c8c76af_Hit 10.aac", false, 100, 1);
}
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).setNumber(Math.round(Math.max(Math.max((( gdjs.Game_32SceneCode.GDLControllerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDLControllerObjects1[0].getBehavior("VrController").StabSpeed(null)), (( gdjs.Game_32SceneCode.GDLControllerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDLControllerObjects1[0].getBehavior("VrController").SwingSpeed(null)) * 100) / 10, Math.max((( gdjs.Game_32SceneCode.GDRControllerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDRControllerObjects1[0].getBehavior("VrController").StabSpeed(null)), (( gdjs.Game_32SceneCode.GDRControllerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDRControllerObjects1[0].getBehavior("VrController").SwingSpeed(null)) * 100) / 10)));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTextPtsObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextPtsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextPtsObjects1[i].getBehavior("FloatingScore").update(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDummyObjects1Objects, gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


gdjs.Game_32SceneCode.eventsList17(runtimeScene);
}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("status", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Game_32SceneCode.eventsList18(runtimeScene);} //End of subevents
}
gdjs.Game_32SceneCode.localVariables.pop();

}


{


gdjs.Game_32SceneCode.eventsList19(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("TextPts"), gdjs.Game_32SceneCode.GDTextPtsObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDTextPtsObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
gdjs.Game_32SceneCode.GDTextPtsObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDTextPtsObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDTextPtsObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextPtsObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextPtsObjects2[i].getBehavior("Tween").addObjectPositionZTween2("Object3D", "up", gdjs.Game_32SceneCode.GDTextPtsObjects2[i].getVariables().getFromIndex(0).getAsNumber() + 200, "linear", 1, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextPtsObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextPtsObjects2[i].setAngle((gdjs.Game_32SceneCode.GDTextPtsObjects2[i].getAngleToObject((gdjs.Game_32SceneCode.GDPlayerObjects2.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects2[0] : null))) - 90);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextPts"), gdjs.Game_32SceneCode.GDTextPtsObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDTextPtsObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDTextPtsObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDTextPtsObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDTextPtsObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDTextPtsObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDTextPtsObjects2[i].getBehavior("Object3D").getZ() >= gdjs.Game_32SceneCode.GDTextPtsObjects2[i].getVariables().getFromIndex(0).getAsNumber() + 190 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDTextPtsObjects2[k] = gdjs.Game_32SceneCode.GDTextPtsObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDTextPtsObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTextPtsObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTextPtsObjects2[i].deleteFromScene(runtimeScene);
}
}
}
}

}


{


gdjs.Game_32SceneCode.eventsList22(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Floating_Target"), gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32SceneCode.eventsList24(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("UIText"), gdjs.Game_32SceneCode.GDUITextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDUITextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDUITextObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDUITextObjects1[i].getVariables().getFromIndex(1)) != "0" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDUITextObjects1[k] = gdjs.Game_32SceneCode.GDUITextObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDUITextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDUITextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDUITextObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDUITextObjects1[i].getVariables().getFromIndex(1)) != runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDUITextObjects1[k] = gdjs.Game_32SceneCode.GDUITextObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDUITextObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDUITextObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDUITextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDUITextObjects1[i].getBehavior("Text").setText("[  ] " + gdjs.Game_32SceneCode.GDUITextObjects1[i].getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UIText"), gdjs.Game_32SceneCode.GDUITextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDUITextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDUITextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDUITextObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDUITextObjects1[i].getVariables().getFromIndex(1)) != "" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDUITextObjects1[k] = gdjs.Game_32SceneCode.GDUITextObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDUITextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDUITextObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(((gdjs.Game_32SceneCode.GDUITextObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDUITextObjects1[0].getVariables()).getFromIndex(1).getAsString());
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDUITextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDUITextObjects1[i].getBehavior("Text").setText("[x] " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


gdjs.Game_32SceneCode.eventsList25(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Quiver"), gdjs.Game_32SceneCode.GDQuiverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDQuiverObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDQuiverObjects1[i].getBehavior("VrGrabbable").IsGrabbed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDQuiverObjects1[k] = gdjs.Game_32SceneCode.GDQuiverObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDQuiverObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDQuiverObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDQuiverObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDQuiverObjects1[i].getBehavior("VrGrabbable").ForceRelease(true, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDQuiverObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDQuiverObjects1[i].activateBehavior("VrGrabbable", false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDQuiverObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDQuiverObjects1[i].getBehavior("VrFollower").SetTargetObjectName("Player", null);
}
}
}

}


{


gdjs.Game_32SceneCode.eventsList26(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Pistol"), gdjs.Game_32SceneCode.GDPistolObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPistolObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPistolObjects1[i].getBehavior("VrGrabbable").IsGrabbed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPistolObjects1[k] = gdjs.Game_32SceneCode.GDPistolObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPistolObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32SceneCode.eventsList29(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Floating_Target"), gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getAngle() < 180 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getAngle() >= -180 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[k] = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1[i].getBehavior("Tween").addObjectAngleTween2("rotate", -180, "linear", 1, false);
}
}
}

}


{


gdjs.Game_32SceneCode.eventsList30(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Magnet"), gdjs.Game_32SceneCode.GDMagnetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDMagnetObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDMagnetObjects1[i].getBehavior("VrGrabbable").IsGrabbed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDMagnetObjects1[k] = gdjs.Game_32SceneCode.GDMagnetObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDMagnetObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.Game_32SceneCode.GDInfoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.Game_32SceneCode.GDLControllerObjects1);
/* Reuse gdjs.Game_32SceneCode.GDMagnetObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.Game_32SceneCode.GDRControllerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLControllerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLControllerObjects1[i].getBehavior("VrController").EnableMagneticGrab(null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLControllerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLControllerObjects1[i].getBehavior("VrController").EnableLaserPointer(null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRControllerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRControllerObjects1[i].getBehavior("VrController").EnableMagneticGrab(null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRControllerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRControllerObjects1[i].getBehavior("VrController").EnableLaserPointer(null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMagnetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMagnetObjects1[i].getBehavior("VrGrabbable").ForceRelease(false, null);
}
}
{gdjs.evtTools.object.pickNearestObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDInfoTextObjects1Objects, (( gdjs.Game_32SceneCode.GDMagnetObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDMagnetObjects1[0].getX()), (( gdjs.Game_32SceneCode.GDMagnetObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDMagnetObjects1[0].getY()));
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDInfoTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDInfoTextObjects1[i].getBehavior("Text").setText("Now turn around and try grabbing one of the bigger cubes from afar");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMagnetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMagnetObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


gdjs.Game_32SceneCode.eventsList31(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("GrabbableMagneticCube"), gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1[i].getBehavior("VrGrabbable").IsTargeted(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1[k] = gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1[i].getBehavior("Object3D").turnAroundZ(45 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDLControllerObjects1.length = 0;
gdjs.Game_32SceneCode.GDLControllerObjects2.length = 0;
gdjs.Game_32SceneCode.GDLControllerObjects3.length = 0;
gdjs.Game_32SceneCode.GDLControllerObjects4.length = 0;
gdjs.Game_32SceneCode.GDRControllerObjects1.length = 0;
gdjs.Game_32SceneCode.GDRControllerObjects2.length = 0;
gdjs.Game_32SceneCode.GDRControllerObjects3.length = 0;
gdjs.Game_32SceneCode.GDRControllerObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrabbableCubeObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrabbableCubeObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrabbableCubeObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrabbableCubeObjects4.length = 0;
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects3.length = 0;
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects4.length = 0;
gdjs.Game_32SceneCode.GDDebugTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDDebugTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDDebugTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDDebugTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDShoesObjects1.length = 0;
gdjs.Game_32SceneCode.GDShoesObjects2.length = 0;
gdjs.Game_32SceneCode.GDShoesObjects3.length = 0;
gdjs.Game_32SceneCode.GDShoesObjects4.length = 0;
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects4.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects1.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects2.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects3.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects4.length = 0;
gdjs.Game_32SceneCode.GDPistolObjects1.length = 0;
gdjs.Game_32SceneCode.GDPistolObjects2.length = 0;
gdjs.Game_32SceneCode.GDPistolObjects3.length = 0;
gdjs.Game_32SceneCode.GDPistolObjects4.length = 0;
gdjs.Game_32SceneCode.GDTextHUDObjects1.length = 0;
gdjs.Game_32SceneCode.GDTextHUDObjects2.length = 0;
gdjs.Game_32SceneCode.GDTextHUDObjects3.length = 0;
gdjs.Game_32SceneCode.GDTextHUDObjects4.length = 0;
gdjs.Game_32SceneCode.GDBowObjects1.length = 0;
gdjs.Game_32SceneCode.GDBowObjects2.length = 0;
gdjs.Game_32SceneCode.GDBowObjects3.length = 0;
gdjs.Game_32SceneCode.GDBowObjects4.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects1.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects2.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects3.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects4.length = 0;
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects1.length = 0;
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects3.length = 0;
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects4.length = 0;
gdjs.Game_32SceneCode.GDCube_9595BricksObjects1.length = 0;
gdjs.Game_32SceneCode.GDCube_9595BricksObjects2.length = 0;
gdjs.Game_32SceneCode.GDCube_9595BricksObjects3.length = 0;
gdjs.Game_32SceneCode.GDCube_9595BricksObjects4.length = 0;
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects3.length = 0;
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDLadder_9595LongObjects1.length = 0;
gdjs.Game_32SceneCode.GDLadder_9595LongObjects2.length = 0;
gdjs.Game_32SceneCode.GDLadder_9595LongObjects3.length = 0;
gdjs.Game_32SceneCode.GDLadder_9595LongObjects4.length = 0;
gdjs.Game_32SceneCode.GDKey_9595MetalObjects1.length = 0;
gdjs.Game_32SceneCode.GDKey_9595MetalObjects2.length = 0;
gdjs.Game_32SceneCode.GDKey_9595MetalObjects3.length = 0;
gdjs.Game_32SceneCode.GDKey_9595MetalObjects4.length = 0;
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects1.length = 0;
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects2.length = 0;
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects3.length = 0;
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects4.length = 0;
gdjs.Game_32SceneCode.GDfloor_9595detailObjects1.length = 0;
gdjs.Game_32SceneCode.GDfloor_9595detailObjects2.length = 0;
gdjs.Game_32SceneCode.GDfloor_9595detailObjects3.length = 0;
gdjs.Game_32SceneCode.GDfloor_9595detailObjects4.length = 0;
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects3.length = 0;
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects4.length = 0;
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects1.length = 0;
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects2.length = 0;
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects3.length = 0;
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects4.length = 0;
gdjs.Game_32SceneCode.GDInfoTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDInfoTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDInfoTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDInfoTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects1.length = 0;
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects2.length = 0;
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects3.length = 0;
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects4.length = 0;
gdjs.Game_32SceneCode.GDTable_9595LargeObjects1.length = 0;
gdjs.Game_32SceneCode.GDTable_9595LargeObjects2.length = 0;
gdjs.Game_32SceneCode.GDTable_9595LargeObjects3.length = 0;
gdjs.Game_32SceneCode.GDTable_9595LargeObjects4.length = 0;
gdjs.Game_32SceneCode.GDWheelObjects1.length = 0;
gdjs.Game_32SceneCode.GDWheelObjects2.length = 0;
gdjs.Game_32SceneCode.GDWheelObjects3.length = 0;
gdjs.Game_32SceneCode.GDWheelObjects4.length = 0;
gdjs.Game_32SceneCode.GDDock_9595PoleObjects1.length = 0;
gdjs.Game_32SceneCode.GDDock_9595PoleObjects2.length = 0;
gdjs.Game_32SceneCode.GDDock_9595PoleObjects3.length = 0;
gdjs.Game_32SceneCode.GDDock_9595PoleObjects4.length = 0;
gdjs.Game_32SceneCode.GDbuttonRoundObjects1.length = 0;
gdjs.Game_32SceneCode.GDbuttonRoundObjects2.length = 0;
gdjs.Game_32SceneCode.GDbuttonRoundObjects3.length = 0;
gdjs.Game_32SceneCode.GDbuttonRoundObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects4.length = 0;
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length = 0;
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length = 0;
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects3.length = 0;
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects4.length = 0;
gdjs.Game_32SceneCode.GDDummyObjects1.length = 0;
gdjs.Game_32SceneCode.GDDummyObjects2.length = 0;
gdjs.Game_32SceneCode.GDDummyObjects3.length = 0;
gdjs.Game_32SceneCode.GDDummyObjects4.length = 0;
gdjs.Game_32SceneCode.GDTextPtsObjects1.length = 0;
gdjs.Game_32SceneCode.GDTextPtsObjects2.length = 0;
gdjs.Game_32SceneCode.GDTextPtsObjects3.length = 0;
gdjs.Game_32SceneCode.GDTextPtsObjects4.length = 0;
gdjs.Game_32SceneCode.GDUITextObjects1.length = 0;
gdjs.Game_32SceneCode.GDUITextObjects2.length = 0;
gdjs.Game_32SceneCode.GDUITextObjects3.length = 0;
gdjs.Game_32SceneCode.GDUITextObjects4.length = 0;
gdjs.Game_32SceneCode.GDQuiverObjects1.length = 0;
gdjs.Game_32SceneCode.GDQuiverObjects2.length = 0;
gdjs.Game_32SceneCode.GDQuiverObjects3.length = 0;
gdjs.Game_32SceneCode.GDQuiverObjects4.length = 0;
gdjs.Game_32SceneCode.GDBasketballObjects1.length = 0;
gdjs.Game_32SceneCode.GDBasketballObjects2.length = 0;
gdjs.Game_32SceneCode.GDBasketballObjects3.length = 0;
gdjs.Game_32SceneCode.GDBasketballObjects4.length = 0;
gdjs.Game_32SceneCode.GDMagnetObjects1.length = 0;
gdjs.Game_32SceneCode.GDMagnetObjects2.length = 0;
gdjs.Game_32SceneCode.GDMagnetObjects3.length = 0;
gdjs.Game_32SceneCode.GDMagnetObjects4.length = 0;

gdjs.Game_32SceneCode.eventsList32(runtimeScene);
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects1.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects2.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects3.length = 0;
gdjs.Game_32SceneCode.GDPushableBoxObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDLControllerObjects1.length = 0;
gdjs.Game_32SceneCode.GDLControllerObjects2.length = 0;
gdjs.Game_32SceneCode.GDLControllerObjects3.length = 0;
gdjs.Game_32SceneCode.GDLControllerObjects4.length = 0;
gdjs.Game_32SceneCode.GDRControllerObjects1.length = 0;
gdjs.Game_32SceneCode.GDRControllerObjects2.length = 0;
gdjs.Game_32SceneCode.GDRControllerObjects3.length = 0;
gdjs.Game_32SceneCode.GDRControllerObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrabbableCubeObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrabbableCubeObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrabbableCubeObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrabbableCubeObjects4.length = 0;
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects3.length = 0;
gdjs.Game_32SceneCode.GDGreenButtonWithShadowObjects4.length = 0;
gdjs.Game_32SceneCode.GDDebugTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDDebugTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDDebugTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDDebugTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDShoesObjects1.length = 0;
gdjs.Game_32SceneCode.GDShoesObjects2.length = 0;
gdjs.Game_32SceneCode.GDShoesObjects3.length = 0;
gdjs.Game_32SceneCode.GDShoesObjects4.length = 0;
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDInvisibleObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrabbableMagneticCubeObjects4.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects1.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects2.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects3.length = 0;
gdjs.Game_32SceneCode.GDSwordObjects4.length = 0;
gdjs.Game_32SceneCode.GDPistolObjects1.length = 0;
gdjs.Game_32SceneCode.GDPistolObjects2.length = 0;
gdjs.Game_32SceneCode.GDPistolObjects3.length = 0;
gdjs.Game_32SceneCode.GDPistolObjects4.length = 0;
gdjs.Game_32SceneCode.GDTextHUDObjects1.length = 0;
gdjs.Game_32SceneCode.GDTextHUDObjects2.length = 0;
gdjs.Game_32SceneCode.GDTextHUDObjects3.length = 0;
gdjs.Game_32SceneCode.GDTextHUDObjects4.length = 0;
gdjs.Game_32SceneCode.GDBowObjects1.length = 0;
gdjs.Game_32SceneCode.GDBowObjects2.length = 0;
gdjs.Game_32SceneCode.GDBowObjects3.length = 0;
gdjs.Game_32SceneCode.GDBowObjects4.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects1.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects2.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects3.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects4.length = 0;
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects1.length = 0;
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects3.length = 0;
gdjs.Game_32SceneCode.GDDoor_9595Rotate_9595Square_9595CObjects4.length = 0;
gdjs.Game_32SceneCode.GDCube_9595BricksObjects1.length = 0;
gdjs.Game_32SceneCode.GDCube_9595BricksObjects2.length = 0;
gdjs.Game_32SceneCode.GDCube_9595BricksObjects3.length = 0;
gdjs.Game_32SceneCode.GDCube_9595BricksObjects4.length = 0;
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects3.length = 0;
gdjs.Game_32SceneCode.GDWall_9595DoorwayObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDLadder_9595LongObjects1.length = 0;
gdjs.Game_32SceneCode.GDLadder_9595LongObjects2.length = 0;
gdjs.Game_32SceneCode.GDLadder_9595LongObjects3.length = 0;
gdjs.Game_32SceneCode.GDLadder_9595LongObjects4.length = 0;
gdjs.Game_32SceneCode.GDKey_9595MetalObjects1.length = 0;
gdjs.Game_32SceneCode.GDKey_9595MetalObjects2.length = 0;
gdjs.Game_32SceneCode.GDKey_9595MetalObjects3.length = 0;
gdjs.Game_32SceneCode.GDKey_9595MetalObjects4.length = 0;
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects1.length = 0;
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects2.length = 0;
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects3.length = 0;
gdjs.Game_32SceneCode.GDArrow_9595StandingObjects4.length = 0;
gdjs.Game_32SceneCode.GDfloor_9595detailObjects1.length = 0;
gdjs.Game_32SceneCode.GDfloor_9595detailObjects2.length = 0;
gdjs.Game_32SceneCode.GDfloor_9595detailObjects3.length = 0;
gdjs.Game_32SceneCode.GDfloor_9595detailObjects4.length = 0;
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects3.length = 0;
gdjs.Game_32SceneCode.GDCommon_9595Tree_95951Objects4.length = 0;
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects1.length = 0;
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects2.length = 0;
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects3.length = 0;
gdjs.Game_32SceneCode.GDResource_9595Pine_9595TreeObjects4.length = 0;
gdjs.Game_32SceneCode.GDInfoTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDInfoTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDInfoTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDInfoTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects1.length = 0;
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects2.length = 0;
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects3.length = 0;
gdjs.Game_32SceneCode.GDFence_9595FortifiedObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrass_9595LargeObjects4.length = 0;
gdjs.Game_32SceneCode.GDTable_9595LargeObjects1.length = 0;
gdjs.Game_32SceneCode.GDTable_9595LargeObjects2.length = 0;
gdjs.Game_32SceneCode.GDTable_9595LargeObjects3.length = 0;
gdjs.Game_32SceneCode.GDTable_9595LargeObjects4.length = 0;
gdjs.Game_32SceneCode.GDWheelObjects1.length = 0;
gdjs.Game_32SceneCode.GDWheelObjects2.length = 0;
gdjs.Game_32SceneCode.GDWheelObjects3.length = 0;
gdjs.Game_32SceneCode.GDWheelObjects4.length = 0;
gdjs.Game_32SceneCode.GDDock_9595PoleObjects1.length = 0;
gdjs.Game_32SceneCode.GDDock_9595PoleObjects2.length = 0;
gdjs.Game_32SceneCode.GDDock_9595PoleObjects3.length = 0;
gdjs.Game_32SceneCode.GDDock_9595PoleObjects4.length = 0;
gdjs.Game_32SceneCode.GDbuttonRoundObjects1.length = 0;
gdjs.Game_32SceneCode.GDbuttonRoundObjects2.length = 0;
gdjs.Game_32SceneCode.GDbuttonRoundObjects3.length = 0;
gdjs.Game_32SceneCode.GDbuttonRoundObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpotLightObjects4.length = 0;
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects1.length = 0;
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects2.length = 0;
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects3.length = 0;
gdjs.Game_32SceneCode.GDFloating_9595TargetObjects4.length = 0;
gdjs.Game_32SceneCode.GDDummyObjects1.length = 0;
gdjs.Game_32SceneCode.GDDummyObjects2.length = 0;
gdjs.Game_32SceneCode.GDDummyObjects3.length = 0;
gdjs.Game_32SceneCode.GDDummyObjects4.length = 0;
gdjs.Game_32SceneCode.GDTextPtsObjects1.length = 0;
gdjs.Game_32SceneCode.GDTextPtsObjects2.length = 0;
gdjs.Game_32SceneCode.GDTextPtsObjects3.length = 0;
gdjs.Game_32SceneCode.GDTextPtsObjects4.length = 0;
gdjs.Game_32SceneCode.GDUITextObjects1.length = 0;
gdjs.Game_32SceneCode.GDUITextObjects2.length = 0;
gdjs.Game_32SceneCode.GDUITextObjects3.length = 0;
gdjs.Game_32SceneCode.GDUITextObjects4.length = 0;
gdjs.Game_32SceneCode.GDQuiverObjects1.length = 0;
gdjs.Game_32SceneCode.GDQuiverObjects2.length = 0;
gdjs.Game_32SceneCode.GDQuiverObjects3.length = 0;
gdjs.Game_32SceneCode.GDQuiverObjects4.length = 0;
gdjs.Game_32SceneCode.GDBasketballObjects1.length = 0;
gdjs.Game_32SceneCode.GDBasketballObjects2.length = 0;
gdjs.Game_32SceneCode.GDBasketballObjects3.length = 0;
gdjs.Game_32SceneCode.GDBasketballObjects4.length = 0;
gdjs.Game_32SceneCode.GDMagnetObjects1.length = 0;
gdjs.Game_32SceneCode.GDMagnetObjects2.length = 0;
gdjs.Game_32SceneCode.GDMagnetObjects3.length = 0;
gdjs.Game_32SceneCode.GDMagnetObjects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
