gdjs.ToolShedCode = {};
gdjs.ToolShedCode.localVariables = [];
gdjs.ToolShedCode.idToCallbackMap = new Map();
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1_1final = [];

gdjs.ToolShedCode.GDGroundObjects1= [];
gdjs.ToolShedCode.GDGroundObjects2= [];
gdjs.ToolShedCode.GDGroundObjects3= [];
gdjs.ToolShedCode.GDGroundObjects4= [];
gdjs.ToolShedCode.GDObstacleObjects1= [];
gdjs.ToolShedCode.GDObstacleObjects2= [];
gdjs.ToolShedCode.GDObstacleObjects3= [];
gdjs.ToolShedCode.GDObstacleObjects4= [];
gdjs.ToolShedCode.GDPushableBoxObjects1= [];
gdjs.ToolShedCode.GDPushableBoxObjects2= [];
gdjs.ToolShedCode.GDPushableBoxObjects3= [];
gdjs.ToolShedCode.GDPushableBoxObjects4= [];
gdjs.ToolShedCode.GDSkyboxObjects1= [];
gdjs.ToolShedCode.GDSkyboxObjects2= [];
gdjs.ToolShedCode.GDSkyboxObjects3= [];
gdjs.ToolShedCode.GDSkyboxObjects4= [];
gdjs.ToolShedCode.GDPlayerObjects1= [];
gdjs.ToolShedCode.GDPlayerObjects2= [];
gdjs.ToolShedCode.GDPlayerObjects3= [];
gdjs.ToolShedCode.GDPlayerObjects4= [];
gdjs.ToolShedCode.GDLControllerObjects1= [];
gdjs.ToolShedCode.GDLControllerObjects2= [];
gdjs.ToolShedCode.GDLControllerObjects3= [];
gdjs.ToolShedCode.GDLControllerObjects4= [];
gdjs.ToolShedCode.GDRControllerObjects1= [];
gdjs.ToolShedCode.GDRControllerObjects2= [];
gdjs.ToolShedCode.GDRControllerObjects3= [];
gdjs.ToolShedCode.GDRControllerObjects4= [];
gdjs.ToolShedCode.GDGrabbableCubeObjects1= [];
gdjs.ToolShedCode.GDGrabbableCubeObjects2= [];
gdjs.ToolShedCode.GDGrabbableCubeObjects3= [];
gdjs.ToolShedCode.GDGrabbableCubeObjects4= [];
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1= [];
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2= [];
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects3= [];
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects4= [];
gdjs.ToolShedCode.GDDebugTextObjects1= [];
gdjs.ToolShedCode.GDDebugTextObjects2= [];
gdjs.ToolShedCode.GDDebugTextObjects3= [];
gdjs.ToolShedCode.GDDebugTextObjects4= [];
gdjs.ToolShedCode.GDShoesObjects1= [];
gdjs.ToolShedCode.GDShoesObjects2= [];
gdjs.ToolShedCode.GDShoesObjects3= [];
gdjs.ToolShedCode.GDShoesObjects4= [];
gdjs.ToolShedCode.GDClimbableObstacleObjects1= [];
gdjs.ToolShedCode.GDClimbableObstacleObjects2= [];
gdjs.ToolShedCode.GDClimbableObstacleObjects3= [];
gdjs.ToolShedCode.GDClimbableObstacleObjects4= [];
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects1= [];
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects2= [];
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects3= [];
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects4= [];
gdjs.ToolShedCode.GDSwordObjects1= [];
gdjs.ToolShedCode.GDSwordObjects2= [];
gdjs.ToolShedCode.GDSwordObjects3= [];
gdjs.ToolShedCode.GDSwordObjects4= [];
gdjs.ToolShedCode.GDPistolObjects1= [];
gdjs.ToolShedCode.GDPistolObjects2= [];
gdjs.ToolShedCode.GDPistolObjects3= [];
gdjs.ToolShedCode.GDPistolObjects4= [];
gdjs.ToolShedCode.GDBowObjects1= [];
gdjs.ToolShedCode.GDBowObjects2= [];
gdjs.ToolShedCode.GDBowObjects3= [];
gdjs.ToolShedCode.GDBowObjects4= [];
gdjs.ToolShedCode.GDArrowObjects1= [];
gdjs.ToolShedCode.GDArrowObjects2= [];
gdjs.ToolShedCode.GDArrowObjects3= [];
gdjs.ToolShedCode.GDArrowObjects4= [];


gdjs.ToolShedCode.eventsList0 = function(runtimeScene) {

{

gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2);
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2[k] = gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1_1final.indexOf(gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2[j]) === -1 )
            gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1_1final.push(gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1_1final, gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__WebXR__startImmersiveSession.func(runtimeScene, null);
}
}

}


};gdjs.ToolShedCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ToolShedCode.GDLControllerObjects2, gdjs.ToolShedCode.GDLControllerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects3[i].getBehavior("VrController").JoyY(null) < -0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects3[k] = gdjs.ToolShedCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(36098300);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects3);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").HoldRotationY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").HoldRotationY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").HoldRotationY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").HoldRotationY(null)) + 1, null);
}
}
}

}


{

gdjs.copyArray(gdjs.ToolShedCode.GDLControllerObjects2, gdjs.ToolShedCode.GDLControllerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects3[i].getBehavior("VrController").JoyY(null) > 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects3[k] = gdjs.ToolShedCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10075396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects3);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").HoldRotationY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").HoldRotationY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").HoldRotationY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").HoldRotationY(null)) - 1, null);
}
}
}

}


{

gdjs.copyArray(gdjs.ToolShedCode.GDLControllerObjects2, gdjs.ToolShedCode.GDLControllerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects3[i].getBehavior("VrController").JoyX(null) < -0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects3[k] = gdjs.ToolShedCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(35074164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects3);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").HoldRotationX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").HoldRotationX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").HoldRotationX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").HoldRotationX(null)) - 1, null);
}
}
}

}


{

gdjs.copyArray(gdjs.ToolShedCode.GDLControllerObjects2, gdjs.ToolShedCode.GDLControllerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects3[i].getBehavior("VrController").JoyX(null) > 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects3[k] = gdjs.ToolShedCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20943580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects3);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").HoldRotationX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").HoldRotationX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").HoldRotationX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").HoldRotationX(null)) + 1, null);
}
}
}

}


{

gdjs.copyArray(gdjs.ToolShedCode.GDLControllerObjects2, gdjs.ToolShedCode.GDLControllerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects3.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects3[i].getBehavior("VrController").IsPrimaryButtonJustReleased(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects3[k] = gdjs.ToolShedCode.GDLControllerObjects3[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects3);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects3);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDSwordObjects3[i].getBehavior("VrGrabbable").HoldRotationZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDBowObjects3[i].getBehavior("VrGrabbable").HoldRotationZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDPistolObjects3[i].getBehavior("VrGrabbable").HoldRotationZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDArrowObjects3[i].getBehavior("VrGrabbable").HoldRotationZ(null)) - 1, null);
}
}
}

}


{

/* Reuse gdjs.ToolShedCode.GDLControllerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").IsSecondaryButtonJustReleased(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) + 1, null);
}
}
}

}


};gdjs.ToolShedCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").JoyY(null) < -0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12720436);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) + 1, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").JoyY(null) > 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14169884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) - 1, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").JoyX(null) < -0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9546460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) - 1, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").JoyX(null) > 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23659284);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) + 1, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").IsPrimaryButtonJustReleased(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) - 1, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects1.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects1[i].getBehavior("VrController").IsSecondaryButtonJustReleased(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects1[k] = gdjs.ToolShedCode.GDLControllerObjects1[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ToolShedCode.GDArrowObjects1 */
/* Reuse gdjs.ToolShedCode.GDBowObjects1 */
/* Reuse gdjs.ToolShedCode.GDPistolObjects1 */
/* Reuse gdjs.ToolShedCode.GDSwordObjects1 */
{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects1[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDSwordObjects1[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects1[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDBowObjects1[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects1[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDPistolObjects1[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects1[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDArrowObjects1[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) + 1, null);
}
}
}

}


};gdjs.ToolShedCode.eventsList3 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) + 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetX((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetX(null)) - 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) + 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetY((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetY(null)) - 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) + 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldOffsetZ((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldOffsetZ(null)) - 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldRotationX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldRotationX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldRotationX(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldRotationX(null)) + 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldRotationX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldRotationX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldRotationX(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationX((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldRotationX(null)) - 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "o");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldRotationY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldRotationY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldRotationY(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldRotationY(null)) + 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldRotationY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldRotationY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldRotationY(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationY((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldRotationY(null)) - 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) + 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) + 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDSwordObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDSwordObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDBowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDBowObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDPistolObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) - 1, null);
}
for(var i = 0, len = gdjs.ToolShedCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").SetHoldRotationZ((gdjs.ToolShedCode.GDArrowObjects2[i].getBehavior("VrGrabbable").HoldRotationZ(null)) - 1, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.ToolShedCode.GDArrowObjects1, gdjs.ToolShedCode.GDArrowObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDBowObjects1, gdjs.ToolShedCode.GDBowObjects2);

gdjs.copyArray(runtimeScene.getObjects("DebugText"), gdjs.ToolShedCode.GDDebugTextObjects2);
gdjs.copyArray(gdjs.ToolShedCode.GDPistolObjects1, gdjs.ToolShedCode.GDPistolObjects2);

gdjs.copyArray(gdjs.ToolShedCode.GDSwordObjects1, gdjs.ToolShedCode.GDSwordObjects2);

{for(var i = 0, len = gdjs.ToolShedCode.GDDebugTextObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDDebugTextObjects2[i].getBehavior("Text").setText((( gdjs.ToolShedCode.GDArrowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDPistolObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDBowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDSwordObjects2.length === 0 ) ? "" :gdjs.ToolShedCode.GDSwordObjects2[0].getName()) :gdjs.ToolShedCode.GDBowObjects2[0].getName()) :gdjs.ToolShedCode.GDPistolObjects2[0].getName()) :gdjs.ToolShedCode.GDArrowObjects2[0].getName()) + gdjs.evtTools.string.newLine() + "x=" + gdjs.evtTools.common.toString((( gdjs.ToolShedCode.GDArrowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDPistolObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDBowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDSwordObjects2.length === 0 ) ? 0 :gdjs.ToolShedCode.GDSwordObjects2[0].getBehavior("VrGrabbable").HoldOffsetX(null)) :gdjs.ToolShedCode.GDBowObjects2[0].getBehavior("VrGrabbable").HoldOffsetX(null)) :gdjs.ToolShedCode.GDPistolObjects2[0].getBehavior("VrGrabbable").HoldOffsetX(null)) :gdjs.ToolShedCode.GDArrowObjects2[0].getBehavior("VrGrabbable").HoldOffsetX(null))) + " y=" + gdjs.evtTools.common.toString((( gdjs.ToolShedCode.GDArrowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDPistolObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDBowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDSwordObjects2.length === 0 ) ? 0 :gdjs.ToolShedCode.GDSwordObjects2[0].getBehavior("VrGrabbable").HoldOffsetY(null)) :gdjs.ToolShedCode.GDBowObjects2[0].getBehavior("VrGrabbable").HoldOffsetY(null)) :gdjs.ToolShedCode.GDPistolObjects2[0].getBehavior("VrGrabbable").HoldOffsetY(null)) :gdjs.ToolShedCode.GDArrowObjects2[0].getBehavior("VrGrabbable").HoldOffsetY(null))) + " z=" + gdjs.evtTools.common.toString((( gdjs.ToolShedCode.GDArrowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDPistolObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDBowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDSwordObjects2.length === 0 ) ? 0 :gdjs.ToolShedCode.GDSwordObjects2[0].getBehavior("VrGrabbable").HoldOffsetZ(null)) :gdjs.ToolShedCode.GDBowObjects2[0].getBehavior("VrGrabbable").HoldOffsetZ(null)) :gdjs.ToolShedCode.GDPistolObjects2[0].getBehavior("VrGrabbable").HoldOffsetZ(null)) :gdjs.ToolShedCode.GDArrowObjects2[0].getBehavior("VrGrabbable").HoldOffsetZ(null))) + gdjs.evtTools.string.newLine() + "rx=" + gdjs.evtTools.common.toString((( gdjs.ToolShedCode.GDArrowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDPistolObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDBowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDSwordObjects2.length === 0 ) ? 0 :gdjs.ToolShedCode.GDSwordObjects2[0].getBehavior("VrGrabbable").HoldRotationX(null)) :gdjs.ToolShedCode.GDBowObjects2[0].getBehavior("VrGrabbable").HoldRotationX(null)) :gdjs.ToolShedCode.GDPistolObjects2[0].getBehavior("VrGrabbable").HoldRotationX(null)) :gdjs.ToolShedCode.GDArrowObjects2[0].getBehavior("VrGrabbable").HoldRotationX(null))) + " ry=" + gdjs.evtTools.common.toString((( gdjs.ToolShedCode.GDArrowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDPistolObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDBowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDSwordObjects2.length === 0 ) ? 0 :gdjs.ToolShedCode.GDSwordObjects2[0].getBehavior("VrGrabbable").HoldRotationY(null)) :gdjs.ToolShedCode.GDBowObjects2[0].getBehavior("VrGrabbable").HoldRotationY(null)) :gdjs.ToolShedCode.GDPistolObjects2[0].getBehavior("VrGrabbable").HoldRotationY(null)) :gdjs.ToolShedCode.GDArrowObjects2[0].getBehavior("VrGrabbable").HoldRotationY(null))) + " rz=" + gdjs.evtTools.common.toString((( gdjs.ToolShedCode.GDArrowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDPistolObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDBowObjects2.length === 0 ) ? (( gdjs.ToolShedCode.GDSwordObjects2.length === 0 ) ? 0 :gdjs.ToolShedCode.GDSwordObjects2[0].getBehavior("VrGrabbable").HoldRotationZ(null)) :gdjs.ToolShedCode.GDBowObjects2[0].getBehavior("VrGrabbable").HoldRotationZ(null)) :gdjs.ToolShedCode.GDPistolObjects2[0].getBehavior("VrGrabbable").HoldRotationZ(null)) :gdjs.ToolShedCode.GDArrowObjects2[0].getBehavior("VrGrabbable").HoldRotationZ(null))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").IsTriggerPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ToolShedCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {

{ //Subevents
gdjs.ToolShedCode.eventsList2(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.ToolShedCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").JoyY(null) < -0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24543308);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ToolShedCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ToolShedCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").simulateForwardKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").JoyY(null) > 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20390420);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ToolShedCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ToolShedCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").simulateBackwardKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").JoyX(null) < -0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19090932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ToolShedCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ToolShedCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").simulateLeftKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LController"), gdjs.ToolShedCode.GDLControllerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDLControllerObjects2.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDLControllerObjects2[i].getBehavior("VrController").JoyX(null) > 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDLControllerObjects2[k] = gdjs.ToolShedCode.GDLControllerObjects2[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDLControllerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19090532);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ToolShedCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ToolShedCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ToolShedCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.ToolShedCode.GDRControllerObjects2);
{for(var i = 0, len = gdjs.ToolShedCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPlayerObjects2[i].rotateTowardAngle((gdjs.ToolShedCode.GDPlayerObjects2[i].getAngle()) + (( gdjs.ToolShedCode.GDRControllerObjects2.length === 0 ) ? 0 :gdjs.ToolShedCode.GDRControllerObjects2[0].getBehavior("VrController").JoyX(null)) * 90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 45, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RController"), gdjs.ToolShedCode.GDRControllerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDRControllerObjects1.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDRControllerObjects1[i].getBehavior("VrController").IsPrimaryButtonJustPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDRControllerObjects1[k] = gdjs.ToolShedCode.GDRControllerObjects1[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDRControllerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ToolShedCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.ToolShedCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").simulateJumpKey();
}
}
}

}


};gdjs.ToolShedCode.eventsList5 = function(runtimeScene) {

{


gdjs.ToolShedCode.eventsList4(runtimeScene);
}


};gdjs.ToolShedCode.eventsList6 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ToolShedCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shoes"), gdjs.ToolShedCode.GDShoesObjects1);
{for(var i = 0, len = gdjs.ToolShedCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.ToolShedCode.GDShoesObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDShoesObjects1[i].hide();
}
}
}

}


{


gdjs.ToolShedCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__WebXR__isImmersiveVRActive.func(runtimeScene, null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19345940);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1);
{for(var i = 0, len = gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__WebXR__isImmersiveVRActive.func(runtimeScene, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21394676);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1);
{for(var i = 0, len = gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.ToolShedCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bow"), gdjs.ToolShedCode.GDBowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pistol"), gdjs.ToolShedCode.GDPistolObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sword"), gdjs.ToolShedCode.GDSwordObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDSwordObjects1.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDSwordObjects1[i].getBehavior("VrGrabbable").IsGrabbed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDSwordObjects1[k] = gdjs.ToolShedCode.GDSwordObjects1[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDSwordObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDBowObjects1.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDBowObjects1[i].getBehavior("VrGrabbable").IsGrabbed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDBowObjects1[k] = gdjs.ToolShedCode.GDBowObjects1[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDBowObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDPistolObjects1.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDPistolObjects1[i].getBehavior("VrGrabbable").IsGrabbed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDPistolObjects1[k] = gdjs.ToolShedCode.GDPistolObjects1[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDPistolObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.ToolShedCode.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.ToolShedCode.GDArrowObjects1[i].getBehavior("VrGrabbable").IsGrabbed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ToolShedCode.GDArrowObjects1[k] = gdjs.ToolShedCode.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.ToolShedCode.GDArrowObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.ToolShedCode.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {

{ //Subevents
gdjs.ToolShedCode.eventsList5(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.ToolShedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ToolShedCode.GDGroundObjects1.length = 0;
gdjs.ToolShedCode.GDGroundObjects2.length = 0;
gdjs.ToolShedCode.GDGroundObjects3.length = 0;
gdjs.ToolShedCode.GDGroundObjects4.length = 0;
gdjs.ToolShedCode.GDObstacleObjects1.length = 0;
gdjs.ToolShedCode.GDObstacleObjects2.length = 0;
gdjs.ToolShedCode.GDObstacleObjects3.length = 0;
gdjs.ToolShedCode.GDObstacleObjects4.length = 0;
gdjs.ToolShedCode.GDPushableBoxObjects1.length = 0;
gdjs.ToolShedCode.GDPushableBoxObjects2.length = 0;
gdjs.ToolShedCode.GDPushableBoxObjects3.length = 0;
gdjs.ToolShedCode.GDPushableBoxObjects4.length = 0;
gdjs.ToolShedCode.GDSkyboxObjects1.length = 0;
gdjs.ToolShedCode.GDSkyboxObjects2.length = 0;
gdjs.ToolShedCode.GDSkyboxObjects3.length = 0;
gdjs.ToolShedCode.GDSkyboxObjects4.length = 0;
gdjs.ToolShedCode.GDPlayerObjects1.length = 0;
gdjs.ToolShedCode.GDPlayerObjects2.length = 0;
gdjs.ToolShedCode.GDPlayerObjects3.length = 0;
gdjs.ToolShedCode.GDPlayerObjects4.length = 0;
gdjs.ToolShedCode.GDLControllerObjects1.length = 0;
gdjs.ToolShedCode.GDLControllerObjects2.length = 0;
gdjs.ToolShedCode.GDLControllerObjects3.length = 0;
gdjs.ToolShedCode.GDLControllerObjects4.length = 0;
gdjs.ToolShedCode.GDRControllerObjects1.length = 0;
gdjs.ToolShedCode.GDRControllerObjects2.length = 0;
gdjs.ToolShedCode.GDRControllerObjects3.length = 0;
gdjs.ToolShedCode.GDRControllerObjects4.length = 0;
gdjs.ToolShedCode.GDGrabbableCubeObjects1.length = 0;
gdjs.ToolShedCode.GDGrabbableCubeObjects2.length = 0;
gdjs.ToolShedCode.GDGrabbableCubeObjects3.length = 0;
gdjs.ToolShedCode.GDGrabbableCubeObjects4.length = 0;
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects3.length = 0;
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects4.length = 0;
gdjs.ToolShedCode.GDDebugTextObjects1.length = 0;
gdjs.ToolShedCode.GDDebugTextObjects2.length = 0;
gdjs.ToolShedCode.GDDebugTextObjects3.length = 0;
gdjs.ToolShedCode.GDDebugTextObjects4.length = 0;
gdjs.ToolShedCode.GDShoesObjects1.length = 0;
gdjs.ToolShedCode.GDShoesObjects2.length = 0;
gdjs.ToolShedCode.GDShoesObjects3.length = 0;
gdjs.ToolShedCode.GDShoesObjects4.length = 0;
gdjs.ToolShedCode.GDClimbableObstacleObjects1.length = 0;
gdjs.ToolShedCode.GDClimbableObstacleObjects2.length = 0;
gdjs.ToolShedCode.GDClimbableObstacleObjects3.length = 0;
gdjs.ToolShedCode.GDClimbableObstacleObjects4.length = 0;
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects1.length = 0;
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects2.length = 0;
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects3.length = 0;
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects4.length = 0;
gdjs.ToolShedCode.GDSwordObjects1.length = 0;
gdjs.ToolShedCode.GDSwordObjects2.length = 0;
gdjs.ToolShedCode.GDSwordObjects3.length = 0;
gdjs.ToolShedCode.GDSwordObjects4.length = 0;
gdjs.ToolShedCode.GDPistolObjects1.length = 0;
gdjs.ToolShedCode.GDPistolObjects2.length = 0;
gdjs.ToolShedCode.GDPistolObjects3.length = 0;
gdjs.ToolShedCode.GDPistolObjects4.length = 0;
gdjs.ToolShedCode.GDBowObjects1.length = 0;
gdjs.ToolShedCode.GDBowObjects2.length = 0;
gdjs.ToolShedCode.GDBowObjects3.length = 0;
gdjs.ToolShedCode.GDBowObjects4.length = 0;
gdjs.ToolShedCode.GDArrowObjects1.length = 0;
gdjs.ToolShedCode.GDArrowObjects2.length = 0;
gdjs.ToolShedCode.GDArrowObjects3.length = 0;
gdjs.ToolShedCode.GDArrowObjects4.length = 0;

gdjs.ToolShedCode.eventsList6(runtimeScene);
gdjs.ToolShedCode.GDGroundObjects1.length = 0;
gdjs.ToolShedCode.GDGroundObjects2.length = 0;
gdjs.ToolShedCode.GDGroundObjects3.length = 0;
gdjs.ToolShedCode.GDGroundObjects4.length = 0;
gdjs.ToolShedCode.GDObstacleObjects1.length = 0;
gdjs.ToolShedCode.GDObstacleObjects2.length = 0;
gdjs.ToolShedCode.GDObstacleObjects3.length = 0;
gdjs.ToolShedCode.GDObstacleObjects4.length = 0;
gdjs.ToolShedCode.GDPushableBoxObjects1.length = 0;
gdjs.ToolShedCode.GDPushableBoxObjects2.length = 0;
gdjs.ToolShedCode.GDPushableBoxObjects3.length = 0;
gdjs.ToolShedCode.GDPushableBoxObjects4.length = 0;
gdjs.ToolShedCode.GDSkyboxObjects1.length = 0;
gdjs.ToolShedCode.GDSkyboxObjects2.length = 0;
gdjs.ToolShedCode.GDSkyboxObjects3.length = 0;
gdjs.ToolShedCode.GDSkyboxObjects4.length = 0;
gdjs.ToolShedCode.GDPlayerObjects1.length = 0;
gdjs.ToolShedCode.GDPlayerObjects2.length = 0;
gdjs.ToolShedCode.GDPlayerObjects3.length = 0;
gdjs.ToolShedCode.GDPlayerObjects4.length = 0;
gdjs.ToolShedCode.GDLControllerObjects1.length = 0;
gdjs.ToolShedCode.GDLControllerObjects2.length = 0;
gdjs.ToolShedCode.GDLControllerObjects3.length = 0;
gdjs.ToolShedCode.GDLControllerObjects4.length = 0;
gdjs.ToolShedCode.GDRControllerObjects1.length = 0;
gdjs.ToolShedCode.GDRControllerObjects2.length = 0;
gdjs.ToolShedCode.GDRControllerObjects3.length = 0;
gdjs.ToolShedCode.GDRControllerObjects4.length = 0;
gdjs.ToolShedCode.GDGrabbableCubeObjects1.length = 0;
gdjs.ToolShedCode.GDGrabbableCubeObjects2.length = 0;
gdjs.ToolShedCode.GDGrabbableCubeObjects3.length = 0;
gdjs.ToolShedCode.GDGrabbableCubeObjects4.length = 0;
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects3.length = 0;
gdjs.ToolShedCode.GDGreenButtonWithShadowObjects4.length = 0;
gdjs.ToolShedCode.GDDebugTextObjects1.length = 0;
gdjs.ToolShedCode.GDDebugTextObjects2.length = 0;
gdjs.ToolShedCode.GDDebugTextObjects3.length = 0;
gdjs.ToolShedCode.GDDebugTextObjects4.length = 0;
gdjs.ToolShedCode.GDShoesObjects1.length = 0;
gdjs.ToolShedCode.GDShoesObjects2.length = 0;
gdjs.ToolShedCode.GDShoesObjects3.length = 0;
gdjs.ToolShedCode.GDShoesObjects4.length = 0;
gdjs.ToolShedCode.GDClimbableObstacleObjects1.length = 0;
gdjs.ToolShedCode.GDClimbableObstacleObjects2.length = 0;
gdjs.ToolShedCode.GDClimbableObstacleObjects3.length = 0;
gdjs.ToolShedCode.GDClimbableObstacleObjects4.length = 0;
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects1.length = 0;
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects2.length = 0;
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects3.length = 0;
gdjs.ToolShedCode.GDGrabbableMagneticCubeObjects4.length = 0;
gdjs.ToolShedCode.GDSwordObjects1.length = 0;
gdjs.ToolShedCode.GDSwordObjects2.length = 0;
gdjs.ToolShedCode.GDSwordObjects3.length = 0;
gdjs.ToolShedCode.GDSwordObjects4.length = 0;
gdjs.ToolShedCode.GDPistolObjects1.length = 0;
gdjs.ToolShedCode.GDPistolObjects2.length = 0;
gdjs.ToolShedCode.GDPistolObjects3.length = 0;
gdjs.ToolShedCode.GDPistolObjects4.length = 0;
gdjs.ToolShedCode.GDBowObjects1.length = 0;
gdjs.ToolShedCode.GDBowObjects2.length = 0;
gdjs.ToolShedCode.GDBowObjects3.length = 0;
gdjs.ToolShedCode.GDBowObjects4.length = 0;
gdjs.ToolShedCode.GDArrowObjects1.length = 0;
gdjs.ToolShedCode.GDArrowObjects2.length = 0;
gdjs.ToolShedCode.GDArrowObjects3.length = 0;
gdjs.ToolShedCode.GDArrowObjects4.length = 0;


return;

}

gdjs['ToolShedCode'] = gdjs.ToolShedCode;
