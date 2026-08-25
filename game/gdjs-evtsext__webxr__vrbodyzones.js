
gdjs.evtsExt__WebXR__VrBodyZones = gdjs.evtsExt__WebXR__VrBodyZones || {};

/**
 * Behavior generated from VR Body Zones
 */
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones = class VrBodyZones extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ZoneVisibility = behaviorData.ZoneVisibility !== undefined ? behaviorData.ZoneVisibility : "WhenHoldingGrabbable";
    this._behaviorData.SphereRadius = behaviorData.SphereRadius !== undefined ? behaviorData.SphereRadius : Number("5") || 0;
    this._behaviorData.DefaultColor = behaviorData.DefaultColor !== undefined ? behaviorData.DefaultColor : "120;180;255";
    this._behaviorData.HoverColor = behaviorData.HoverColor !== undefined ? behaviorData.HoverColor : "255;220;80";
    this._behaviorData.DefaultOpacity = behaviorData.DefaultOpacity !== undefined ? behaviorData.DefaultOpacity : Number("0.25") || 0;
    this._behaviorData.HoverOpacity = behaviorData.HoverOpacity !== undefined ? behaviorData.HoverOpacity : Number("0.55") || 0;
    this._behaviorData.HoldingHapticIntensity = behaviorData.HoldingHapticIntensity !== undefined ? behaviorData.HoldingHapticIntensity : Number("0.4") || 0;
    this._behaviorData.HoldingHapticDuration = behaviorData.HoldingHapticDuration !== undefined ? behaviorData.HoldingHapticDuration : Number("40") || 0;
    this._behaviorData.EmptyHandHapticIntensity = behaviorData.EmptyHandHapticIntensity !== undefined ? behaviorData.EmptyHandHapticIntensity : Number("0.25") || 0;
    this._behaviorData.EmptyHandHapticDuration = behaviorData.EmptyHandHapticDuration !== undefined ? behaviorData.EmptyHandHapticDuration : Number("25") || 0;
    this._behaviorData.EnableHipLeft = behaviorData.EnableHipLeft !== undefined ? behaviorData.EnableHipLeft : true;
    this._behaviorData.EnableHipRight = behaviorData.EnableHipRight !== undefined ? behaviorData.EnableHipRight : true;
    this._behaviorData.EnableShoulderLeft = behaviorData.EnableShoulderLeft !== undefined ? behaviorData.EnableShoulderLeft : true;
    this._behaviorData.EnableShoulderRight = behaviorData.EnableShoulderRight !== undefined ? behaviorData.EnableShoulderRight : true;
    this._behaviorData.EnableChest = behaviorData.EnableChest !== undefined ? behaviorData.EnableChest : false;
    this._behaviorData.EnableHead = behaviorData.EnableHead !== undefined ? behaviorData.EnableHead : false;
    this._behaviorData.EnableMouth = behaviorData.EnableMouth !== undefined ? behaviorData.EnableMouth : false;
    this._behaviorData.HipDropFromHead = behaviorData.HipDropFromHead !== undefined ? behaviorData.HipDropFromHead : Number("65") || 0;
    this._behaviorData.HipForward = behaviorData.HipForward !== undefined ? behaviorData.HipForward : Number("0") || 0;
    this._behaviorData.ShoulderDropFromHead = behaviorData.ShoulderDropFromHead !== undefined ? behaviorData.ShoulderDropFromHead : Number("18") || 0;
    this._behaviorData.ShoulderWidth = behaviorData.ShoulderWidth !== undefined ? behaviorData.ShoulderWidth : Number("30") || 0;
    this._behaviorData.ShoulderForward = behaviorData.ShoulderForward !== undefined ? behaviorData.ShoulderForward : Number("0") || 0;
    this._behaviorData.ChestDropFromHead = behaviorData.ChestDropFromHead !== undefined ? behaviorData.ChestDropFromHead : Number("30") || 0;
    this._behaviorData.ChestForward = behaviorData.ChestForward !== undefined ? behaviorData.ChestForward : Number("12") || 0;
    this._behaviorData.ChestBoxDepth = behaviorData.ChestBoxDepth !== undefined ? behaviorData.ChestBoxDepth : Number("5") || 0;
    this._behaviorData.ChestBoxWidth = behaviorData.ChestBoxWidth !== undefined ? behaviorData.ChestBoxWidth : Number("25") || 0;
    this._behaviorData.ChestBoxHeight = behaviorData.ChestBoxHeight !== undefined ? behaviorData.ChestBoxHeight : Number("5") || 0;
    this._behaviorData.HeadOffsetVertical = behaviorData.HeadOffsetVertical !== undefined ? behaviorData.HeadOffsetVertical : Number("25") || 0;
    this._behaviorData.MouthDropFromHead = behaviorData.MouthDropFromHead !== undefined ? behaviorData.MouthDropFromHead : Number("10") || 0;
    this._behaviorData.MouthForward = behaviorData.MouthForward !== undefined ? behaviorData.MouthForward : Number("12") || 0;
    this._behaviorData.AcceptedTagsHip = behaviorData.AcceptedTagsHip !== undefined ? behaviorData.AcceptedTagsHip : "";
    this._behaviorData.AcceptedTagsShoulder = behaviorData.AcceptedTagsShoulder !== undefined ? behaviorData.AcceptedTagsShoulder : "";
    this._behaviorData.AcceptedTagsChest = behaviorData.AcceptedTagsChest !== undefined ? behaviorData.AcceptedTagsChest : "";
    this._behaviorData.AcceptedTagsHead = behaviorData.AcceptedTagsHead !== undefined ? behaviorData.AcceptedTagsHead : "";
    this._behaviorData.AcceptedTagsMouth = behaviorData.AcceptedTagsMouth !== undefined ? behaviorData.AcceptedTagsMouth : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.ZoneVisibility !== undefined)
      this._behaviorData.ZoneVisibility = behaviorOverriding.ZoneVisibility;
    if (behaviorOverriding.SphereRadius !== undefined)
      this._behaviorData.SphereRadius = behaviorOverriding.SphereRadius;
    if (behaviorOverriding.DefaultColor !== undefined)
      this._behaviorData.DefaultColor = behaviorOverriding.DefaultColor;
    if (behaviorOverriding.HoverColor !== undefined)
      this._behaviorData.HoverColor = behaviorOverriding.HoverColor;
    if (behaviorOverriding.DefaultOpacity !== undefined)
      this._behaviorData.DefaultOpacity = behaviorOverriding.DefaultOpacity;
    if (behaviorOverriding.HoverOpacity !== undefined)
      this._behaviorData.HoverOpacity = behaviorOverriding.HoverOpacity;
    if (behaviorOverriding.HoldingHapticIntensity !== undefined)
      this._behaviorData.HoldingHapticIntensity = behaviorOverriding.HoldingHapticIntensity;
    if (behaviorOverriding.HoldingHapticDuration !== undefined)
      this._behaviorData.HoldingHapticDuration = behaviorOverriding.HoldingHapticDuration;
    if (behaviorOverriding.EmptyHandHapticIntensity !== undefined)
      this._behaviorData.EmptyHandHapticIntensity = behaviorOverriding.EmptyHandHapticIntensity;
    if (behaviorOverriding.EmptyHandHapticDuration !== undefined)
      this._behaviorData.EmptyHandHapticDuration = behaviorOverriding.EmptyHandHapticDuration;
    if (behaviorOverriding.EnableHipLeft !== undefined)
      this._behaviorData.EnableHipLeft = behaviorOverriding.EnableHipLeft;
    if (behaviorOverriding.EnableHipRight !== undefined)
      this._behaviorData.EnableHipRight = behaviorOverriding.EnableHipRight;
    if (behaviorOverriding.EnableShoulderLeft !== undefined)
      this._behaviorData.EnableShoulderLeft = behaviorOverriding.EnableShoulderLeft;
    if (behaviorOverriding.EnableShoulderRight !== undefined)
      this._behaviorData.EnableShoulderRight = behaviorOverriding.EnableShoulderRight;
    if (behaviorOverriding.EnableChest !== undefined)
      this._behaviorData.EnableChest = behaviorOverriding.EnableChest;
    if (behaviorOverriding.EnableHead !== undefined)
      this._behaviorData.EnableHead = behaviorOverriding.EnableHead;
    if (behaviorOverriding.EnableMouth !== undefined)
      this._behaviorData.EnableMouth = behaviorOverriding.EnableMouth;
    if (behaviorOverriding.HipDropFromHead !== undefined)
      this._behaviorData.HipDropFromHead = behaviorOverriding.HipDropFromHead;
    if (behaviorOverriding.HipForward !== undefined)
      this._behaviorData.HipForward = behaviorOverriding.HipForward;
    if (behaviorOverriding.ShoulderDropFromHead !== undefined)
      this._behaviorData.ShoulderDropFromHead = behaviorOverriding.ShoulderDropFromHead;
    if (behaviorOverriding.ShoulderWidth !== undefined)
      this._behaviorData.ShoulderWidth = behaviorOverriding.ShoulderWidth;
    if (behaviorOverriding.ShoulderForward !== undefined)
      this._behaviorData.ShoulderForward = behaviorOverriding.ShoulderForward;
    if (behaviorOverriding.ChestDropFromHead !== undefined)
      this._behaviorData.ChestDropFromHead = behaviorOverriding.ChestDropFromHead;
    if (behaviorOverriding.ChestForward !== undefined)
      this._behaviorData.ChestForward = behaviorOverriding.ChestForward;
    if (behaviorOverriding.ChestBoxDepth !== undefined)
      this._behaviorData.ChestBoxDepth = behaviorOverriding.ChestBoxDepth;
    if (behaviorOverriding.ChestBoxWidth !== undefined)
      this._behaviorData.ChestBoxWidth = behaviorOverriding.ChestBoxWidth;
    if (behaviorOverriding.ChestBoxHeight !== undefined)
      this._behaviorData.ChestBoxHeight = behaviorOverriding.ChestBoxHeight;
    if (behaviorOverriding.HeadOffsetVertical !== undefined)
      this._behaviorData.HeadOffsetVertical = behaviorOverriding.HeadOffsetVertical;
    if (behaviorOverriding.MouthDropFromHead !== undefined)
      this._behaviorData.MouthDropFromHead = behaviorOverriding.MouthDropFromHead;
    if (behaviorOverriding.MouthForward !== undefined)
      this._behaviorData.MouthForward = behaviorOverriding.MouthForward;
    if (behaviorOverriding.AcceptedTagsHip !== undefined)
      this._behaviorData.AcceptedTagsHip = behaviorOverriding.AcceptedTagsHip;
    if (behaviorOverriding.AcceptedTagsShoulder !== undefined)
      this._behaviorData.AcceptedTagsShoulder = behaviorOverriding.AcceptedTagsShoulder;
    if (behaviorOverriding.AcceptedTagsChest !== undefined)
      this._behaviorData.AcceptedTagsChest = behaviorOverriding.AcceptedTagsChest;
    if (behaviorOverriding.AcceptedTagsHead !== undefined)
      this._behaviorData.AcceptedTagsHead = behaviorOverriding.AcceptedTagsHead;
    if (behaviorOverriding.AcceptedTagsMouth !== undefined)
      this._behaviorData.AcceptedTagsMouth = behaviorOverriding.AcceptedTagsMouth;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    ZoneVisibility: this._behaviorData.ZoneVisibility,
    SphereRadius: this._behaviorData.SphereRadius,
    DefaultColor: this._behaviorData.DefaultColor,
    HoverColor: this._behaviorData.HoverColor,
    DefaultOpacity: this._behaviorData.DefaultOpacity,
    HoverOpacity: this._behaviorData.HoverOpacity,
    HoldingHapticIntensity: this._behaviorData.HoldingHapticIntensity,
    HoldingHapticDuration: this._behaviorData.HoldingHapticDuration,
    EmptyHandHapticIntensity: this._behaviorData.EmptyHandHapticIntensity,
    EmptyHandHapticDuration: this._behaviorData.EmptyHandHapticDuration,
    EnableHipLeft: this._behaviorData.EnableHipLeft,
    EnableHipRight: this._behaviorData.EnableHipRight,
    EnableShoulderLeft: this._behaviorData.EnableShoulderLeft,
    EnableShoulderRight: this._behaviorData.EnableShoulderRight,
    EnableChest: this._behaviorData.EnableChest,
    EnableHead: this._behaviorData.EnableHead,
    EnableMouth: this._behaviorData.EnableMouth,
    HipDropFromHead: this._behaviorData.HipDropFromHead,
    HipForward: this._behaviorData.HipForward,
    ShoulderDropFromHead: this._behaviorData.ShoulderDropFromHead,
    ShoulderWidth: this._behaviorData.ShoulderWidth,
    ShoulderForward: this._behaviorData.ShoulderForward,
    ChestDropFromHead: this._behaviorData.ChestDropFromHead,
    ChestForward: this._behaviorData.ChestForward,
    ChestBoxDepth: this._behaviorData.ChestBoxDepth,
    ChestBoxWidth: this._behaviorData.ChestBoxWidth,
    ChestBoxHeight: this._behaviorData.ChestBoxHeight,
    HeadOffsetVertical: this._behaviorData.HeadOffsetVertical,
    MouthDropFromHead: this._behaviorData.MouthDropFromHead,
    MouthForward: this._behaviorData.MouthForward,
    AcceptedTagsHip: this._behaviorData.AcceptedTagsHip,
    AcceptedTagsShoulder: this._behaviorData.AcceptedTagsShoulder,
    AcceptedTagsChest: this._behaviorData.AcceptedTagsChest,
    AcceptedTagsHead: this._behaviorData.AcceptedTagsHead,
    AcceptedTagsMouth: this._behaviorData.AcceptedTagsMouth,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.ZoneVisibility !== undefined)
      this._behaviorData.ZoneVisibility = networkSyncData.props.ZoneVisibility;
    if (networkSyncData.props.SphereRadius !== undefined)
      this._behaviorData.SphereRadius = networkSyncData.props.SphereRadius;
    if (networkSyncData.props.DefaultColor !== undefined)
      this._behaviorData.DefaultColor = networkSyncData.props.DefaultColor;
    if (networkSyncData.props.HoverColor !== undefined)
      this._behaviorData.HoverColor = networkSyncData.props.HoverColor;
    if (networkSyncData.props.DefaultOpacity !== undefined)
      this._behaviorData.DefaultOpacity = networkSyncData.props.DefaultOpacity;
    if (networkSyncData.props.HoverOpacity !== undefined)
      this._behaviorData.HoverOpacity = networkSyncData.props.HoverOpacity;
    if (networkSyncData.props.HoldingHapticIntensity !== undefined)
      this._behaviorData.HoldingHapticIntensity = networkSyncData.props.HoldingHapticIntensity;
    if (networkSyncData.props.HoldingHapticDuration !== undefined)
      this._behaviorData.HoldingHapticDuration = networkSyncData.props.HoldingHapticDuration;
    if (networkSyncData.props.EmptyHandHapticIntensity !== undefined)
      this._behaviorData.EmptyHandHapticIntensity = networkSyncData.props.EmptyHandHapticIntensity;
    if (networkSyncData.props.EmptyHandHapticDuration !== undefined)
      this._behaviorData.EmptyHandHapticDuration = networkSyncData.props.EmptyHandHapticDuration;
    if (networkSyncData.props.EnableHipLeft !== undefined)
      this._behaviorData.EnableHipLeft = networkSyncData.props.EnableHipLeft;
    if (networkSyncData.props.EnableHipRight !== undefined)
      this._behaviorData.EnableHipRight = networkSyncData.props.EnableHipRight;
    if (networkSyncData.props.EnableShoulderLeft !== undefined)
      this._behaviorData.EnableShoulderLeft = networkSyncData.props.EnableShoulderLeft;
    if (networkSyncData.props.EnableShoulderRight !== undefined)
      this._behaviorData.EnableShoulderRight = networkSyncData.props.EnableShoulderRight;
    if (networkSyncData.props.EnableChest !== undefined)
      this._behaviorData.EnableChest = networkSyncData.props.EnableChest;
    if (networkSyncData.props.EnableHead !== undefined)
      this._behaviorData.EnableHead = networkSyncData.props.EnableHead;
    if (networkSyncData.props.EnableMouth !== undefined)
      this._behaviorData.EnableMouth = networkSyncData.props.EnableMouth;
    if (networkSyncData.props.HipDropFromHead !== undefined)
      this._behaviorData.HipDropFromHead = networkSyncData.props.HipDropFromHead;
    if (networkSyncData.props.HipForward !== undefined)
      this._behaviorData.HipForward = networkSyncData.props.HipForward;
    if (networkSyncData.props.ShoulderDropFromHead !== undefined)
      this._behaviorData.ShoulderDropFromHead = networkSyncData.props.ShoulderDropFromHead;
    if (networkSyncData.props.ShoulderWidth !== undefined)
      this._behaviorData.ShoulderWidth = networkSyncData.props.ShoulderWidth;
    if (networkSyncData.props.ShoulderForward !== undefined)
      this._behaviorData.ShoulderForward = networkSyncData.props.ShoulderForward;
    if (networkSyncData.props.ChestDropFromHead !== undefined)
      this._behaviorData.ChestDropFromHead = networkSyncData.props.ChestDropFromHead;
    if (networkSyncData.props.ChestForward !== undefined)
      this._behaviorData.ChestForward = networkSyncData.props.ChestForward;
    if (networkSyncData.props.ChestBoxDepth !== undefined)
      this._behaviorData.ChestBoxDepth = networkSyncData.props.ChestBoxDepth;
    if (networkSyncData.props.ChestBoxWidth !== undefined)
      this._behaviorData.ChestBoxWidth = networkSyncData.props.ChestBoxWidth;
    if (networkSyncData.props.ChestBoxHeight !== undefined)
      this._behaviorData.ChestBoxHeight = networkSyncData.props.ChestBoxHeight;
    if (networkSyncData.props.HeadOffsetVertical !== undefined)
      this._behaviorData.HeadOffsetVertical = networkSyncData.props.HeadOffsetVertical;
    if (networkSyncData.props.MouthDropFromHead !== undefined)
      this._behaviorData.MouthDropFromHead = networkSyncData.props.MouthDropFromHead;
    if (networkSyncData.props.MouthForward !== undefined)
      this._behaviorData.MouthForward = networkSyncData.props.MouthForward;
    if (networkSyncData.props.AcceptedTagsHip !== undefined)
      this._behaviorData.AcceptedTagsHip = networkSyncData.props.AcceptedTagsHip;
    if (networkSyncData.props.AcceptedTagsShoulder !== undefined)
      this._behaviorData.AcceptedTagsShoulder = networkSyncData.props.AcceptedTagsShoulder;
    if (networkSyncData.props.AcceptedTagsChest !== undefined)
      this._behaviorData.AcceptedTagsChest = networkSyncData.props.AcceptedTagsChest;
    if (networkSyncData.props.AcceptedTagsHead !== undefined)
      this._behaviorData.AcceptedTagsHead = networkSyncData.props.AcceptedTagsHead;
    if (networkSyncData.props.AcceptedTagsMouth !== undefined)
      this._behaviorData.AcceptedTagsMouth = networkSyncData.props.AcceptedTagsMouth;
  }

  // Properties:
  
  _getZoneVisibility() {
    return this._behaviorData.ZoneVisibility !== undefined ? this._behaviorData.ZoneVisibility : "WhenHoldingGrabbable";
  }
  _setZoneVisibility(newValue) {
    this._behaviorData.ZoneVisibility = newValue;
  }
  _getSphereRadius() {
    return this._behaviorData.SphereRadius !== undefined ? this._behaviorData.SphereRadius : Number("5") || 0;
  }
  _setSphereRadius(newValue) {
    this._behaviorData.SphereRadius = newValue;
  }
  _getDefaultColor() {
    return this._behaviorData.DefaultColor !== undefined ? this._behaviorData.DefaultColor : "120;180;255";
  }
  _setDefaultColor(newValue) {
    this._behaviorData.DefaultColor = newValue;
  }
  _getHoverColor() {
    return this._behaviorData.HoverColor !== undefined ? this._behaviorData.HoverColor : "255;220;80";
  }
  _setHoverColor(newValue) {
    this._behaviorData.HoverColor = newValue;
  }
  _getDefaultOpacity() {
    return this._behaviorData.DefaultOpacity !== undefined ? this._behaviorData.DefaultOpacity : Number("0.25") || 0;
  }
  _setDefaultOpacity(newValue) {
    this._behaviorData.DefaultOpacity = newValue;
  }
  _getHoverOpacity() {
    return this._behaviorData.HoverOpacity !== undefined ? this._behaviorData.HoverOpacity : Number("0.55") || 0;
  }
  _setHoverOpacity(newValue) {
    this._behaviorData.HoverOpacity = newValue;
  }
  _getHoldingHapticIntensity() {
    return this._behaviorData.HoldingHapticIntensity !== undefined ? this._behaviorData.HoldingHapticIntensity : Number("0.4") || 0;
  }
  _setHoldingHapticIntensity(newValue) {
    this._behaviorData.HoldingHapticIntensity = newValue;
  }
  _getHoldingHapticDuration() {
    return this._behaviorData.HoldingHapticDuration !== undefined ? this._behaviorData.HoldingHapticDuration : Number("40") || 0;
  }
  _setHoldingHapticDuration(newValue) {
    this._behaviorData.HoldingHapticDuration = newValue;
  }
  _getEmptyHandHapticIntensity() {
    return this._behaviorData.EmptyHandHapticIntensity !== undefined ? this._behaviorData.EmptyHandHapticIntensity : Number("0.25") || 0;
  }
  _setEmptyHandHapticIntensity(newValue) {
    this._behaviorData.EmptyHandHapticIntensity = newValue;
  }
  _getEmptyHandHapticDuration() {
    return this._behaviorData.EmptyHandHapticDuration !== undefined ? this._behaviorData.EmptyHandHapticDuration : Number("25") || 0;
  }
  _setEmptyHandHapticDuration(newValue) {
    this._behaviorData.EmptyHandHapticDuration = newValue;
  }
  _getEnableHipLeft() {
    return this._behaviorData.EnableHipLeft !== undefined ? this._behaviorData.EnableHipLeft : true;
  }
  _setEnableHipLeft(newValue) {
    this._behaviorData.EnableHipLeft = newValue;
  }
  _toggleEnableHipLeft() {
    this._setEnableHipLeft(!this._getEnableHipLeft());
  }
  _getEnableHipRight() {
    return this._behaviorData.EnableHipRight !== undefined ? this._behaviorData.EnableHipRight : true;
  }
  _setEnableHipRight(newValue) {
    this._behaviorData.EnableHipRight = newValue;
  }
  _toggleEnableHipRight() {
    this._setEnableHipRight(!this._getEnableHipRight());
  }
  _getEnableShoulderLeft() {
    return this._behaviorData.EnableShoulderLeft !== undefined ? this._behaviorData.EnableShoulderLeft : true;
  }
  _setEnableShoulderLeft(newValue) {
    this._behaviorData.EnableShoulderLeft = newValue;
  }
  _toggleEnableShoulderLeft() {
    this._setEnableShoulderLeft(!this._getEnableShoulderLeft());
  }
  _getEnableShoulderRight() {
    return this._behaviorData.EnableShoulderRight !== undefined ? this._behaviorData.EnableShoulderRight : true;
  }
  _setEnableShoulderRight(newValue) {
    this._behaviorData.EnableShoulderRight = newValue;
  }
  _toggleEnableShoulderRight() {
    this._setEnableShoulderRight(!this._getEnableShoulderRight());
  }
  _getEnableChest() {
    return this._behaviorData.EnableChest !== undefined ? this._behaviorData.EnableChest : false;
  }
  _setEnableChest(newValue) {
    this._behaviorData.EnableChest = newValue;
  }
  _toggleEnableChest() {
    this._setEnableChest(!this._getEnableChest());
  }
  _getEnableHead() {
    return this._behaviorData.EnableHead !== undefined ? this._behaviorData.EnableHead : false;
  }
  _setEnableHead(newValue) {
    this._behaviorData.EnableHead = newValue;
  }
  _toggleEnableHead() {
    this._setEnableHead(!this._getEnableHead());
  }
  _getEnableMouth() {
    return this._behaviorData.EnableMouth !== undefined ? this._behaviorData.EnableMouth : false;
  }
  _setEnableMouth(newValue) {
    this._behaviorData.EnableMouth = newValue;
  }
  _toggleEnableMouth() {
    this._setEnableMouth(!this._getEnableMouth());
  }
  _getHipDropFromHead() {
    return this._behaviorData.HipDropFromHead !== undefined ? this._behaviorData.HipDropFromHead : Number("65") || 0;
  }
  _setHipDropFromHead(newValue) {
    this._behaviorData.HipDropFromHead = newValue;
  }
  _getHipForward() {
    return this._behaviorData.HipForward !== undefined ? this._behaviorData.HipForward : Number("0") || 0;
  }
  _setHipForward(newValue) {
    this._behaviorData.HipForward = newValue;
  }
  _getShoulderDropFromHead() {
    return this._behaviorData.ShoulderDropFromHead !== undefined ? this._behaviorData.ShoulderDropFromHead : Number("18") || 0;
  }
  _setShoulderDropFromHead(newValue) {
    this._behaviorData.ShoulderDropFromHead = newValue;
  }
  _getShoulderWidth() {
    return this._behaviorData.ShoulderWidth !== undefined ? this._behaviorData.ShoulderWidth : Number("30") || 0;
  }
  _setShoulderWidth(newValue) {
    this._behaviorData.ShoulderWidth = newValue;
  }
  _getShoulderForward() {
    return this._behaviorData.ShoulderForward !== undefined ? this._behaviorData.ShoulderForward : Number("0") || 0;
  }
  _setShoulderForward(newValue) {
    this._behaviorData.ShoulderForward = newValue;
  }
  _getChestDropFromHead() {
    return this._behaviorData.ChestDropFromHead !== undefined ? this._behaviorData.ChestDropFromHead : Number("30") || 0;
  }
  _setChestDropFromHead(newValue) {
    this._behaviorData.ChestDropFromHead = newValue;
  }
  _getChestForward() {
    return this._behaviorData.ChestForward !== undefined ? this._behaviorData.ChestForward : Number("12") || 0;
  }
  _setChestForward(newValue) {
    this._behaviorData.ChestForward = newValue;
  }
  _getChestBoxDepth() {
    return this._behaviorData.ChestBoxDepth !== undefined ? this._behaviorData.ChestBoxDepth : Number("5") || 0;
  }
  _setChestBoxDepth(newValue) {
    this._behaviorData.ChestBoxDepth = newValue;
  }
  _getChestBoxWidth() {
    return this._behaviorData.ChestBoxWidth !== undefined ? this._behaviorData.ChestBoxWidth : Number("25") || 0;
  }
  _setChestBoxWidth(newValue) {
    this._behaviorData.ChestBoxWidth = newValue;
  }
  _getChestBoxHeight() {
    return this._behaviorData.ChestBoxHeight !== undefined ? this._behaviorData.ChestBoxHeight : Number("5") || 0;
  }
  _setChestBoxHeight(newValue) {
    this._behaviorData.ChestBoxHeight = newValue;
  }
  _getHeadOffsetVertical() {
    return this._behaviorData.HeadOffsetVertical !== undefined ? this._behaviorData.HeadOffsetVertical : Number("25") || 0;
  }
  _setHeadOffsetVertical(newValue) {
    this._behaviorData.HeadOffsetVertical = newValue;
  }
  _getMouthDropFromHead() {
    return this._behaviorData.MouthDropFromHead !== undefined ? this._behaviorData.MouthDropFromHead : Number("10") || 0;
  }
  _setMouthDropFromHead(newValue) {
    this._behaviorData.MouthDropFromHead = newValue;
  }
  _getMouthForward() {
    return this._behaviorData.MouthForward !== undefined ? this._behaviorData.MouthForward : Number("12") || 0;
  }
  _setMouthForward(newValue) {
    this._behaviorData.MouthForward = newValue;
  }
  _getAcceptedTagsHip() {
    return this._behaviorData.AcceptedTagsHip !== undefined ? this._behaviorData.AcceptedTagsHip : "";
  }
  _setAcceptedTagsHip(newValue) {
    this._behaviorData.AcceptedTagsHip = newValue;
  }
  _getAcceptedTagsShoulder() {
    return this._behaviorData.AcceptedTagsShoulder !== undefined ? this._behaviorData.AcceptedTagsShoulder : "";
  }
  _setAcceptedTagsShoulder(newValue) {
    this._behaviorData.AcceptedTagsShoulder = newValue;
  }
  _getAcceptedTagsChest() {
    return this._behaviorData.AcceptedTagsChest !== undefined ? this._behaviorData.AcceptedTagsChest : "";
  }
  _setAcceptedTagsChest(newValue) {
    this._behaviorData.AcceptedTagsChest = newValue;
  }
  _getAcceptedTagsHead() {
    return this._behaviorData.AcceptedTagsHead !== undefined ? this._behaviorData.AcceptedTagsHead : "";
  }
  _setAcceptedTagsHead(newValue) {
    this._behaviorData.AcceptedTagsHead = newValue;
  }
  _getAcceptedTagsMouth() {
    return this._behaviorData.AcceptedTagsMouth !== undefined ? this._behaviorData.AcceptedTagsMouth : "";
  }
  _setAcceptedTagsMouth(newValue) {
    this._behaviorData.AcceptedTagsMouth = newValue;
  }
}

/**
 * Shared data generated from VR Body Zones
 */
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.SharedData = class VrBodyZonesSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebXR_VrBodyZonesSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebXR_VrBodyZonesSharedData = new gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.SharedData(
      initialData
    );
  }
  return instanceContainer._WebXR_VrBodyZonesSharedData;
}

// Methods:
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.userFunc0x1e9fc48 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    beh._zoneHeadRoot = null;
    beh._zoneBodyRoot = null;
    beh._zoneSpheres = {};
    beh._zoneInsideState = {};
    beh._zoneEntries = [];
    if (!gdjs._webxrVrHolsterHelpersInstalled) {
        gdjs._webxrVrHolsterHelpersInstalled = true;
        gdjs._webxrVrHolsterRegistry = gdjs._webxrVrHolsterRegistry || [];
        gdjs._webxrVrHolsterFireHaptic = function(hand, intensity, durationMs) {
            var sc = gdjs._webxrRtSceneRef;
            if (!sc) return;
            var tr2 = sc.getGame().getRenderer().getThreeRenderer();
            if (!tr2 || !tr2.xr) return;
            var sess = tr2.xr.getSession ? tr2.xr.getSession() : null;
            if (!sess) return;
            var srcs = sess.inputSources || [];
            for (var _si = 0; _si < srcs.length; _si++) {
                var _src = srcs[_si];
                if (_src.handedness === hand && _src.gamepad &&
                    _src.gamepad.hapticActuators && _src.gamepad.hapticActuators.length > 0) {
                    _src.gamepad.hapticActuators[0].pulse(intensity, durationMs);
                    break;
                }
            }
        };
        gdjs._webxrVrHolsterTagMatches = function(grabbableTag, acceptedCsv) {
            if (!acceptedCsv || acceptedCsv.trim() === '') return true;
            if (!grabbableTag || grabbableTag.trim() === '') return false;
            var acc = acceptedCsv.split(',');
            for (var _ti = 0; _ti < acc.length; _ti++) {
                if (acc[_ti].trim().toLowerCase() === grabbableTag.trim().toLowerCase()) return true;
            }
            return false;
        };
        gdjs._webxrVrHolsterTryDockOnRelease = function(obj, beh, hand, handEntry) {
            if (gdjs._webxrArcheryActive && gdjs._webxrArcheryActive[hand] > performance.now()) return false;
            if (beh._noRedockUntil && beh._noRedockUntil > performance.now()) return false;
            var reg = gdjs._webxrVrHolsterRegistry;
            if (!reg || !handEntry) return false;
            var wp = handEntry._adjustedWP;
            if (!wp) return false;
            var tag = beh._getHolsterTag ? beh._getHolsterTag() : '';
            var _tAnc = gdjs._webxrVrAnchor;
            // Pass 1: hand in zone bounds (preferred - deliberate release), pick closest zone to hand
            var _p1Best = null, _p1BestDist = Infinity;
            var _holdBonus = 10;
            for (var _ri = 0; _ri < reg.length; _ri++) {
                var _e = reg[_ri];
                if (gdjs._webxrVrHolsterIsFull(_e)) continue;
                if (!gdjs._webxrVrHolsterTagMatches(tag, _e.acceptedTags || '')) continue;
                if (_e.source === 'vrDoorKeyZone') {
                    var _dkBeh = null; try { _dkBeh = obj.getBehavior('VrKey'); } catch(_ek) {}
                    if (!_dkBeh) continue;
                    var _dkTag = _dkBeh._getKeyTag ? String(_dkBeh._getKeyTag()) : '';
                    if (!gdjs._webxrVrHolsterTagMatches(_dkTag, _e.acceptedKeyTags || '')) continue;
                    if (!_tAnc) continue;
                    var _hGdXdk = _tAnc.x + (wp.x - _tAnc.threeX);
                    var _hGdYdk = _tAnc.y - (wp.y - _tAnc.threeY);
                    var _hGdZdk = _tAnc.z + (wp.z - _tAnc.threeZ);
                    var _dxDk = _hGdXdk - (_e.gdX||0), _dyDk = _hGdYdk - (_e.gdY||0), _dzDk = _hGdZdk - (_e.gdZ||0);
                    var _p1Dist = Math.sqrt(_dxDk*_dxDk + _dyDk*_dyDk + _dzDk*_dzDk);
                    if (_p1Dist <= _e.radius + _holdBonus && _p1Dist < _p1BestDist) { _p1BestDist = _p1Dist; _p1Best = _e; }
                    continue;
                }
                var _hit;
                var _p1Dist = Infinity;
                if (_e.holsterObj) {
                    var _hO = _e.holsterObj;
                    var _hOWP = _e.worldPos;
                    var _hORadius = Math.max(_hO.getWidth(), _hO.getHeight(), _hO.getDepth()) / 2 + _holdBonus;
                    var _h2dx = wp.x - _hOWP.x, _h2dy = wp.y - _hOWP.y, _h2dz = wp.z - _hOWP.z;
                    var _h2DistSq = _h2dx*_h2dx + _h2dy*_h2dy + _h2dz*_h2dz;
                    _hit = _h2DistSq <= _hORadius*_hORadius;
                    if (_hit) _p1Dist = Math.sqrt(_h2DistSq);
                } else {
                    var _zp = _e.worldPos; if (!_zp) continue;
                    var _dx = wp.x - _zp.x, _dy = wp.y - _zp.y, _dz = wp.z - _zp.z;
                    _p1Dist = Math.sqrt(_dx*_dx + _dy*_dy + _dz*_dz);
                    if (_e.shape === 'box') {
                        var _cy = Math.cos(-_e.parentYaw), _sy = Math.sin(-_e.parentYaw);
                        var _lx =  _dx * _cy - _dy * _sy;
                        var _ly =  _dx * _sy + _dy * _cy;
                        _hit = Math.abs(_lx) <= _e.sizeX * 0.5 + _holdBonus
                            && Math.abs(_ly) <= _e.sizeY * 0.5 + _holdBonus
                            && Math.abs(_dz) <= _e.sizeZ * 0.5 + _holdBonus;
                    } else {
                        _hit = _p1Dist <= _e.radius + _holdBonus;
                    }
                }
                if (!_hit) continue;
                if (_p1Dist < _p1BestDist) { _p1BestDist = _p1Dist; _p1Best = _e; }
            }
            if (_p1Best) {
                gdjs._webxrVrHolsterAdd(_p1Best, obj, beh);
                beh._holsterEntry = _p1Best;
                if (gdjs._webxrVrHolsterFireHaptic)
                    gdjs._webxrVrHolsterFireHaptic(hand, _p1Best.holdingHapticIntensity || 0.4, _p1Best.holdingHapticDuration || 40);
                return true;
            }
            // Pass 2: object AABB overlaps zone bounds (fallback - sword tip reaches into zone while hand is outside), pick closest zone to hand
            var _dAnc = gdjs._webxrVrAnchor;
            if (!_dAnc || !obj) return false;
            var _dohw = (obj.getWidth  ? obj.getWidth()  : 0) / 2;
            var _dohh = (obj.getHeight ? obj.getHeight() : 0) / 2;
            var _dohd = (obj.getDepth  ? obj.getDepth()  : 0) / 2;
            var _dox = obj.getX(), _doy = obj.getY(), _doz = obj.getZ();
            var _p2Best = null, _p2BestDist = Infinity;
            for (var _ri2 = 0; _ri2 < reg.length; _ri2++) {
                var _e2 = reg[_ri2];
                if (gdjs._webxrVrHolsterIsFull(_e2)) continue;
                if (!gdjs._webxrVrHolsterTagMatches(tag, _e2.acceptedTags || '')) continue;
                if (_e2.source === 'vrDoorKeyZone') {
                    var _dkBeh2 = null; try { _dkBeh2 = obj.getBehavior('VrKey'); } catch(_ek2) {}
                    if (!_dkBeh2) continue;
                    var _dkTag2 = _dkBeh2._getKeyTag ? String(_dkBeh2._getKeyTag()) : '';
                    if (!gdjs._webxrVrHolsterTagMatches(_dkTag2, _e2.acceptedKeyTags || '')) continue;
                    var _zGxDk = _e2.gdX||0, _zGyDk = _e2.gdY||0, _zGzDk = _e2.gdZ||0;
                    var _dqxDk = Math.max(_dox-_dohw, Math.min(_zGxDk, _dox+_dohw));
                    var _dqyDk = Math.max(_doy-_dohh, Math.min(_zGyDk, _doy+_dohh));
                    var _dqzDk = Math.max(_doz-_dohd, Math.min(_zGzDk, _doz+_dohd));
                    var _dqdxDk=_dqxDk-_zGxDk,_dqdyDk=_dqyDk-_zGyDk,_dqdzDk=_dqzDk-_zGzDk;
                    if (Math.sqrt(_dqdxDk*_dqdxDk+_dqdyDk*_dqdyDk+_dqdzDk*_dqdzDk) > _e2.radius) continue;
                    var _p2Dist = _tAnc ? (function(){
                        var _rX=_tAnc.x+(wp.x-_tAnc.threeX)-_zGxDk,_rY=_tAnc.y-(wp.y-_tAnc.threeY)-_zGyDk,_rZ=_tAnc.z+(wp.z-_tAnc.threeZ)-_zGzDk;
                        return Math.sqrt(_rX*_rX+_rY*_rY+_rZ*_rZ);
                    })() : 0;
                    if (_p2Dist < _p2BestDist) { _p2BestDist = _p2Dist; _p2Best = _e2; }
                    continue;
                }
                var _hit2;
                if (_e2.holsterObj) {
                    var _hO2 = _e2.holsterObj;
                    var _hO2R = Math.max(_hO2.getWidth(), _hO2.getHeight(), _hO2.getDepth()) / 2 + _holdBonus;
                    var _d2Three = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                    if (_d2Three) {
                        var _d2WP = new THREE.Vector3(); _d2Three.getWorldPosition(_d2WP);
                        var _d2dx = _d2WP.x - _e2.worldPos.x, _d2dy = _d2WP.y - _e2.worldPos.y, _d2dz = _d2WP.z - _e2.worldPos.z;
                        _hit2 = _d2dx*_d2dx + _d2dy*_d2dy + _d2dz*_d2dz <= _hO2R*_hO2R;
                    }
                } else {
                    var _zp2 = _e2.worldPos;
                    if (!_zp2) continue;
                    var _zGx = _dAnc.x + (_zp2.x - _dAnc.threeX);
                    var _zGy = _dAnc.y - (_zp2.y - _dAnc.threeY);
                    var _zGz = _dAnc.z + (_zp2.z - _dAnc.threeZ);
                    var _dqx = Math.max(_dox-_dohw, Math.min(_zGx, _dox+_dohw));
                    var _dqy = Math.max(_doy-_dohh, Math.min(_zGy, _doy+_dohh));
                    var _dqz = Math.max(_doz-_dohd, Math.min(_zGz, _doz+_dohd));
                    var _dqdx = _dqx-_zGx, _dqdy = _dqy-_zGy, _dqdz = _dqz-_zGz;
                    if (_e2.shape === 'box') {
                        var _dbcy = Math.cos(_e2.parentYaw), _dbsy = Math.sin(_e2.parentYaw);
                        var _dblx = _dqdx*_dbcy - _dqdy*_dbsy;
                        var _dbly = _dqdx*_dbsy + _dqdy*_dbcy;
                        _hit2 = Math.abs(_dblx) <= _e2.sizeX*0.5
                             && Math.abs(_dbly) <= _e2.sizeY*0.5
                             && Math.abs(_dqdz) <= _e2.sizeZ*0.5;
                    } else {
                        _hit2 = Math.sqrt(_dqdx*_dqdx + _dqdy*_dqdy + _dqdz*_dqdz) <= _e2.radius;
                    }
                }
                if (!_hit2) continue;
                var _p2Dist = _e2.worldPos ? Math.sqrt(
                    (wp.x-_e2.worldPos.x)*(wp.x-_e2.worldPos.x) +
                    (wp.y-_e2.worldPos.y)*(wp.y-_e2.worldPos.y) +
                    (wp.z-_e2.worldPos.z)*(wp.z-_e2.worldPos.z)) : 0;
                if (_p2Dist < _p2BestDist) { _p2BestDist = _p2Dist; _p2Best = _e2; }
            }
            if (_p2Best) {
                gdjs._webxrVrHolsterAdd(_p2Best, obj, beh);
                beh._holsterEntry = _p2Best;
                if (gdjs._webxrVrHolsterFireHaptic)
                    gdjs._webxrVrHolsterFireHaptic(hand, _p2Best.holdingHapticIntensity || 0.4, _p2Best.holdingHapticDuration || 40);
                return true;
            }
            return false;
        };
        gdjs._webxrVrHolsterBeginGrabFromZone = function(zoneEntry, handEntry, hand, targetOcc) {
            var occ = (targetOcc && targetOcc.obj) ? gdjs._webxrVrHolsterRemoveObj(zoneEntry, targetOcc.obj) : gdjs._webxrVrHolsterRemoveTop(zoneEntry);
            if (!occ) occ = gdjs._webxrVrHolsterRemoveTop(zoneEntry);
            if (!occ) return false;
            var obj = occ.obj, beh = occ.beh;
            beh._holsterEntry = null;
            var grip = handEntry.handAnchor || handEntry.grip;
            if (!grip) return false;
            var gWP = new THREE.Vector3(), gWQ = new THREE.Quaternion();
            grip.getWorldPosition(gWP);
            grip.getWorldQuaternion(gWQ);
            var gWQInv = gWQ.clone().invert();
            var threeObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
            if (threeObj) {
                beh._grabOuterDeltaX = threeObj.position.x - obj.getX();
                beh._grabOuterDeltaY = threeObj.position.y - obj.getY();
                beh._grabOuterDeltaZ = threeObj.position.z - obj.getZ();
            } else {
                beh._grabOuterDeltaX = beh._grabOuterDeltaY = beh._grabOuterDeltaZ = 0;
            }
            var _zMode = (beh._getGrabMode ? String(beh._getGrabMode()) : 'AABB');
            if (_zMode === 'Center') {
                var _zhx = beh._getHoldOffsetX ? Number(beh._getHoldOffsetX()) : 0;
                var _zhy = beh._getHoldOffsetY ? Number(beh._getHoldOffsetY()) : 0;
                var _zhz = beh._getHoldOffsetZ ? Number(beh._getHoldOffsetZ()) : 0;
                var _zrxD = beh._getHoldRotationX ? Number(beh._getHoldRotationX()) : 0;
                var _zryD = beh._getHoldRotationY ? Number(beh._getHoldRotationY()) : 0;
                var _zrzD = beh._getHoldRotationZ ? Number(beh._getHoldRotationZ()) : 0;
                var _D2R = Math.PI / 180;
                beh._grabLocalQuat = new THREE.Quaternion().setFromEuler(
                    new THREE.Euler(_zrxD*_D2R, _zryD*_D2R, _zrzD*_D2R, 'ZYX'));
                var _zWs = gdjs._webxrVrWorldScale || 100;
                var _zAncOff = handEntry.handAnchor ? handEntry.handAnchor.position : {x:0,y:0,z:0};
                var _zHoldPos = new THREE.Vector3(
                    _zhx - _zAncOff.x * _zWs,
                    _zhy - _zAncOff.y * _zWs,
                    _zhz - _zAncOff.z * _zWs
                );
                beh._grabLocalPos = _zHoldPos.clone();
                beh._grabLocalPosTarget = _zHoldPos.clone();
            } else {
                var oWP = new THREE.Vector3(), oWQ = new THREE.Quaternion();
                if (threeObj) {
                    threeObj.getWorldPosition(oWP);
                    threeObj.getWorldQuaternion(oWQ);
                }
                beh._grabLocalPos = threeObj ? oWP.clone().sub(gWP).applyQuaternion(gWQInv) : new THREE.Vector3();
                beh._grabLocalQuat = gWQInv.clone().multiply(oWQ);
                beh._grabLocalPosTarget = beh._grabLocalPos.clone();
            }
            beh._grabWorldQuat = gWQ.clone();
            beh._state = 'grabbed';
            beh._grabbingHand = hand;
            beh._otherHoldingHand = null;
            beh._noRedockUntil = performance.now() + 1000;
            handEntry._grabGripEdgeAvailable = false;
            beh._stickyGrabActive = !!(beh._getStickyGrab && (beh._getStickyGrab() === 'true' || beh._getStickyGrab() === true));
            if (!beh._stickyGrabActive) {
                var _fgHeld = handEntry._grabGripPrev !== false;
                if (!_fgHeld) beh._suppressThrowVelocityOnNextRelease = true;
            }
            return true;
        };
        gdjs._webxrVrHolsterApplyHangTransform = function(entry) {
            var list = gdjs._webxrVrHolsterList(entry);
            if (!list.length) return;
            var anchor = gdjs._webxrVrAnchor;
            if (!anchor) return;
            var zWP = entry.worldPos, zWQ = entry.worldQuat;
            if (!zWP || !zWQ) return;
            var sHB = entry.holsterBeh;
            var sX = (sHB && sHB._getStackOffsetX) ? Number(sHB._getStackOffsetX()) : 0;
            var sY = (sHB && sHB._getStackOffsetY) ? Number(sHB._getStackOffsetY()) : 0;
            var sZ = (sHB && sHB._getStackOffsetZ) ? Number(sHB._getStackOffsetZ()) : 0;
            for (var _hti = 0; _hti < list.length; _hti++) {
                var occ = list[_hti];
                var obj = occ.obj, beh = occ.beh;
                if (!obj || !beh) continue;
                var hX = (beh._getHangOffsetX ? Number(beh._getHangOffsetX()) : 0) + _hti * sX;
                var hY = (beh._getHangOffsetY ? Number(beh._getHangOffsetY()) : 0) + _hti * sY;
                var hZ = (beh._getHangOffsetZ ? Number(beh._getHangOffsetZ()) : 0) + _hti * sZ;
                var hRX = beh._getHangRotationX ? Number(beh._getHangRotationX()) : 0;
                var hRY = beh._getHangRotationY ? Number(beh._getHangRotationY()) : 0;
                var hRZ = beh._getHangRotationZ ? Number(beh._getHangRotationZ()) : 0;
                var off = new THREE.Vector3(hX, hY, hZ).applyQuaternion(zWQ);
                var fWP = zWP.clone().add(off);
                obj.setX(anchor.x + (fWP.x - anchor.threeX));
                obj.setY(anchor.y - (fWP.y - anchor.threeY));
                if (obj.setZ) obj.setZ(anchor.z + (fWP.z - anchor.threeZ));
                var zWQGd = new THREE.Quaternion(-zWQ.x, zWQ.y, -zWQ.z, zWQ.w);
                var D2R = Math.PI / 180;
                var hQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(hRX*D2R, hRY*D2R, hRZ*D2R, 'ZYX'));
                var fQ = zWQGd.clone().multiply(hQ);
                var eu = new THREE.Euler().setFromQuaternion(fQ, 'ZYX');
                obj.setAngle(eu.z * 180/Math.PI);
                if (obj.setRotationX) obj.setRotationX(eu.x * 180/Math.PI);
                if (obj.setRotationY) obj.setRotationY(eu.y * 180/Math.PI);
                var tObj = obj.get3DRendererObject ? obj.get3DRendererObject() : null;
                if (tObj) { tObj.quaternion.copy(fQ); tObj.updateMatrix(); }
                var phys = null;
                try { phys = obj.getBehavior('Physics3D'); } catch(e) {}
                if (phys && phys._body && typeof Jolt !== 'undefined') {
                    var bi = phys._sharedData.bodyInterface, id = phys._body.GetID();
                    bi.SetLinearVelocity(id, phys.getVec3(0, 0, 0));
                    bi.SetAngularVelocity(id, phys.getVec3(0, 0, 0));
                    bi.ActivateBody(id);
                }
            }
        };
        gdjs._webxrVrHolsterList = function(e) {
            return (e.occupants && e.occupants.length) ? e.occupants : (e.occupant ? [e.occupant] : []);
        };
        gdjs._webxrVrHolsterCount = function(e) {
            return gdjs._webxrVrHolsterList(e).length;
        };
        gdjs._webxrVrHolsterIsFull = function(e) {
            return gdjs._webxrVrHolsterCount(e) >= (e.maxItems || 1);
        };
        gdjs._webxrVrHolsterAdd = function(e, obj, beh) {
            if (!e.occupants) e.occupants = [];
            e.occupants.push({obj: obj, beh: beh});
            e.occupant = e.occupants[e.occupants.length - 1];
        };
        gdjs._webxrVrHolsterRemoveTop = function(e) {
            if (e.occupants && e.occupants.length) {
                var o = e.occupants.pop();
                e.occupant = e.occupants.length ? e.occupants[e.occupants.length - 1] : null;
                return o;
            }
            var o = e.occupant; e.occupant = null; return o;
        };
        gdjs._webxrVrHolsterRemoveObj = function(e, targetObj) {
            if (e.occupants && e.occupants.length) {
                var idx = -1;
                for (var _roi = 0; _roi < e.occupants.length; _roi++) {
                    if (e.occupants[_roi].obj === targetObj) { idx = _roi; break; }
                }
                if (idx < 0) return null;
                var removed = e.occupants.splice(idx, 1)[0];
                e.occupant = e.occupants.length ? e.occupants[e.occupants.length - 1] : null;
                return removed;
            }
            if (e.occupant && e.occupant.obj === targetObj) {
                var o = e.occupant; e.occupant = null; return o;
            }
            return null;
        };
    }
}
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.userFunc0x1e9fc48(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onCreatedContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.userFunc0x1da4138 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh) continue;
    var entries = beh._zoneEntries || [];
    for (var ei = 0; ei < entries.length; ei++) {
        var entry = entries[ei];
        if (entry.occupant) {
            var oBeh = entry.occupant ? entry.occupant.beh : null;
            var oObj = entry.occupant ? entry.occupant.obj : null;
            entry.occupant = null;
            if (oBeh) {
                oBeh._holsterEntry = null;
                oBeh._state = 'idle';
                var phys = null;
                try { phys = oObj.getBehavior('Physics3D'); } catch(e) {}
                if (phys && phys._body && typeof Jolt !== 'undefined') {
                    var mt = oBeh._origJoltMotionType !== undefined ? oBeh._origJoltMotionType : Jolt.EMotionType_Dynamic;
                    phys._sharedData.bodyInterface.SetMotionType(phys._body.GetID(), mt, Jolt.EActivation_Activate);
                    oBeh._origJoltMotionType = undefined;
                    if (typeof oBeh._origGravScale === 'number') phys.setGravityScale(oBeh._origGravScale);
                }
            }
        }
        if (entry.mesh) {
            if (entry.mesh.geometry) entry.mesh.geometry.dispose();
            if (entry.mesh.material) entry.mesh.material.dispose();
            if (entry.mesh.parent) entry.mesh.parent.remove(entry.mesh);
        }
    }
    if (gdjs._webxrVrHolsterRegistry) {
        gdjs._webxrVrHolsterRegistry = gdjs._webxrVrHolsterRegistry.filter(function(e) {
            return !(e.source === 'body' && e.bodyZoneBeh === beh);
        });
    }
    beh._zoneEntries = [];
    if (beh._zoneHeadRoot) {
        if (beh._zoneHeadRoot.parent) beh._zoneHeadRoot.parent.remove(beh._zoneHeadRoot);
        beh._zoneHeadRoot = null;
    }
    if (beh._zoneBodyRoot) {
        if (beh._zoneBodyRoot.parent) beh._zoneBodyRoot.parent.remove(beh._zoneBodyRoot);
        beh._zoneBodyRoot = null;
    }
    beh._zoneSpheres = {};
}
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.userFunc0x1da4138(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.userFunc0xec1fb0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
var anchor = gdjs._webxrVrAnchor;
if (!anchor) return;
gdjs._webxrRtSceneRef = runtimeScene;

// Idempotent grip edge update (shared with VrGrabbable)
function _getGamepadHz(hand) {
    var sess = tr.xr.getSession ? tr.xr.getSession() : null;
    if (!sess || !sess.inputSources) return null;
    for (var _gsi = 0; _gsi < sess.inputSources.length; _gsi++) {
        var _gs = sess.inputSources[_gsi];
        if (_gs.handedness === hand && _gs.gamepad) return _gs.gamepad;
    }
    return null;
}
var _tickTime = runtimeScene.getTimeManager().getTimeFromStart();
if (gdjs._webxrVrGrabbableGripTickTime !== _tickTime) {
    gdjs._webxrVrGrabbableGripTickTime = _tickTime;
    var _tickHands = ['left', 'right'];
    for (var _thi = 0; _thi < _tickHands.length; _thi++) {
        var _thHand = _tickHands[_thi];
        var _thEntry = controllers[_thHand];
        if (!_thEntry) continue;
        var _thGp = _getGamepadHz(_thHand);
        var _thCur = _thGp && _thGp.buttons[1] ? _thGp.buttons[1].value > 0.5 : false;
        var _thPrev = _thEntry._grabGripPrev === true;
        _thEntry._grabGripEdgeAvailable = (_thCur && !_thPrev);
        _thEntry._grabGripPrev = _thCur;
    }
}

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;

    var radius    = beh._getSphereRadius ? Number(beh._getSphereRadius()) : 10;
    if (!(radius > 0)) radius = 10;
    var zoneVis   = beh._getZoneVisibility ? String(beh._getZoneVisibility()) : 'WhenHoldingGrabbable';
    var _dc = (beh._getDefaultColor ? String(beh._getDefaultColor()) : '120;180;255').split(';');
    var defR = Math.max(0,Math.min(255,+_dc[0]||0));
    var defG = Math.max(0,Math.min(255,+_dc[1]||0));
    var defB = Math.max(0,Math.min(255,+_dc[2]||0));
    var _hc = (beh._getHoverColor ? String(beh._getHoverColor()) : '255;220;80').split(';');
    var hovR = Math.max(0,Math.min(255,+_hc[0]||0));
    var hovG = Math.max(0,Math.min(255,+_hc[1]||0));
    var hovB = Math.max(0,Math.min(255,+_hc[2]||0));
    var defOp   = beh._getDefaultOpacity ? Number(beh._getDefaultOpacity()) : 0.25;
    var hovOp   = beh._getHoverOpacity   ? Number(beh._getHoverOpacity())   : 0.55;
    var holdHapI = beh._getHoldingHapticIntensity ? Number(beh._getHoldingHapticIntensity()) : 0.4;
    var holdHapD = beh._getHoldingHapticDuration  ? Number(beh._getHoldingHapticDuration())  : 40;
    var emtyHapI = beh._getEmptyHandHapticIntensity ? Number(beh._getEmptyHandHapticIntensity()) : 0.25;
    var emtyHapD = beh._getEmptyHandHapticDuration  ? Number(beh._getEmptyHandHapticDuration())  : 25;
    var hipDrop    = beh._getHipDropFromHead    ? Number(beh._getHipDropFromHead())    : 65;
    var hipFwd     = beh._getHipForward         ? Number(beh._getHipForward())         : 0;
    var shoDrop    = beh._getShoulderDropFromHead ? Number(beh._getShoulderDropFromHead()) : 18;
    var shoW       = beh._getShoulderWidth      ? Number(beh._getShoulderWidth())      : 30;
    var shoFwd     = beh._getShoulderForward    ? Number(beh._getShoulderForward())    : 0;
    var chestDrop  = beh._getChestDropFromHead  ? Number(beh._getChestDropFromHead())  : 30;
    var chestFwd   = beh._getChestForward       ? Number(beh._getChestForward())       : 12;
    var chBoxD     = beh._getChestBoxDepth      ? Number(beh._getChestBoxDepth())      : 5;
    var chBoxW     = beh._getChestBoxWidth      ? Number(beh._getChestBoxWidth())      : 25;
    var chBoxH     = beh._getChestBoxHeight     ? Number(beh._getChestBoxHeight())     : 25;
    if (!(chBoxD > 0)) chBoxD = 5;
    if (!(chBoxW > 0)) chBoxW = 25;
    if (!(chBoxH > 0)) chBoxH = 25;
    var headVert   = beh._getHeadOffsetVertical ? Number(beh._getHeadOffsetVertical()) : 25;
    var mouthDrop  = beh._getMouthDropFromHead  ? Number(beh._getMouthDropFromHead())  : 10;
    var mouthFwd   = beh._getMouthForward       ? Number(beh._getMouthForward())       : 12;

    function _boolProp(getter, def) {
        if (!getter) return def;
        var v = getter.call(beh);
        return (v === true || v === 'true' || v === 'True');
    }
    var enHL = _boolProp(beh._getEnableHipLeft,      true);
    var enHR = _boolProp(beh._getEnableHipRight,     true);
    var enSL = _boolProp(beh._getEnableShoulderLeft, true);
    var enSR = _boolProp(beh._getEnableShoulderRight,true);
    var enCh = _boolProp(beh._getEnableChest,        false);
    var enHd = _boolProp(beh._getEnableHead,         false);
    var enMo = _boolProp(beh._getEnableMouth,        false);

    var tagHip = beh._getAcceptedTagsHip      ? String(beh._getAcceptedTagsHip())      : '';
    var tagSho = beh._getAcceptedTagsShoulder ? String(beh._getAcceptedTagsShoulder()) : '';
    var tagCh  = beh._getAcceptedTagsChest    ? String(beh._getAcceptedTagsChest())    : '';
    var tagHd  = beh._getAcceptedTagsHead     ? String(beh._getAcceptedTagsHead())     : '';
    var tagMo  = beh._getAcceptedTagsMouth    ? String(beh._getAcceptedTagsMouth())    : '';

    // [zoneId, enabled, localX(fwd), localY(left), localZ(up), tags, group, shape]
    var zoneDefs = [
        ['HipLeft',       enHL, hipFwd,   shoW,    -hipDrop,  tagHip, 'body', 'sphere'],
        ['HipRight',      enHR, hipFwd,  -shoW,    -hipDrop,  tagHip, 'body', 'sphere'],
        ['ShoulderLeft',  enSL, shoFwd,   shoW,    -shoDrop,  tagSho, 'body', 'sphere'],
        ['ShoulderRight', enSR, shoFwd,  -shoW,    -shoDrop,  tagSho, 'body', 'sphere'],
        ['Chest',         enCh, chestFwd, 0,       -chestDrop,tagCh,  'body', 'box'],
        ['Head',          enHd, 0,        0,        headVert, tagHd,  'head', 'sphere'],
        ['Mouth',         enMo, mouthFwd, 0,       -mouthDrop,tagMo,  'head', 'sphere']
    ];

    var cam = null;
    try { cam = runtimeScene.getLayer('').getRenderer().getThreeCamera(); } catch(e) {}
    if (!cam) continue;

    // Lazy-create zone roots (head and body, both attached to Three.js scene)
    if (!beh._zoneHeadRoot) {
        var _zScene2 = null;
        try {
            var _zlr3d2 = runtimeScene.getLayer('').getRenderer();
            if (_zlr3d2) _zScene2 = _zlr3d2._threeScene || _zlr3d2.threeScene || (_zlr3d2.getThreeScene ? _zlr3d2.getThreeScene() : null);
        } catch(e) {}
        beh._zoneHeadRoot = new THREE.Group();
        beh._zoneHeadRoot.frustumCulled = false;
        beh._zoneBodyRoot = new THREE.Group();
        beh._zoneBodyRoot.frustumCulled = false;
        if (_zScene2) {
            _zScene2.add(beh._zoneHeadRoot);
            _zScene2.add(beh._zoneBodyRoot);
            beh._zoneScene = _zScene2;
        }
        beh._zoneSpheres = {};
        beh._zoneEntries = beh._zoneEntries || [];
        beh._zoneInsideState = {};
    }

    // Is any hand currently holding a grabbable?
    var anyHolding = false;
    var gReg = gdjs._webxrVrGrabbableRegistry || [];
    for (var _gri = 0; _gri < gReg.length; _gri++) {
        var _gs = gReg[_gri].beh._state;
        if (_gs === 'grabbed' || _gs === 'flyingToCtrl') { anyHolding = true; break; }
    }
    var showZones = (zoneVis === 'Always') || (zoneVis === 'WhenHoldingGrabbable' && anyHolding);

    // Head yaw (follows HMD - for Head and Mouth zones)
    var camWP = new THREE.Vector3();
    cam.getWorldPosition(camWP);
    var camWQ = new THREE.Quaternion();
    cam.getWorldQuaternion(camWQ);
    var camFwd = new THREE.Vector3(0, 0, -1).applyQuaternion(camWQ);
    var headYaw = Math.atan2(camFwd.y, camFwd.x);
    var headYawQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), headYaw);
    beh._zoneHeadRoot.position.set(camWP.x, -camWP.y, camWP.z);
    beh._zoneHeadRoot.quaternion.set(-headYawQ.x, headYawQ.y, -headYawQ.z, headYawQ.w);
    beh._zoneHeadRoot.updateMatrixWorld(true);

    // Body yaw (virtual-torso, deadzone-leashed to head yaw - for Hip, Shoulder, Chest zones)
    var bodyYaw = ((anchor && anchor.bodyYaw != null) ? anchor.bodyYaw : anchor.angle) * Math.PI / 180;
    var bodyYawQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), bodyYaw);
    beh._zoneBodyRoot.position.set(camWP.x, -camWP.y, camWP.z);
    beh._zoneBodyRoot.quaternion.set(-bodyYawQ.x, bodyYawQ.y, -bodyYawQ.z, bodyYawQ.w);
    beh._zoneBodyRoot.updateMatrixWorld(true);


    var hReg = gdjs._webxrVrHolsterRegistry || [];
    var handsArr = ['left', 'right'];
    var _zoneCandidates = [];

    for (var zi = 0; zi < zoneDefs.length; zi++) {
        var zId = zoneDefs[zi][0], zEn = zoneDefs[zi][1];
        var zlx = zoneDefs[zi][2], zly = zoneDefs[zi][3], zlz = zoneDefs[zi][4];
        var zTags = zoneDefs[zi][5];
        var zGroup = zoneDefs[zi][6];
        var zShape = zoneDefs[zi][7];
        var parentRoot = (zGroup === 'head') ? beh._zoneHeadRoot : beh._zoneBodyRoot;
        var parentYaw  = (zGroup === 'head') ? headYaw : bodyYaw;
        var parentYawQ = (zGroup === 'head') ? headYawQ : bodyYawQ;

        // Find or create registry entry
        var rEntry = null;
        for (var _hri = 0; _hri < hReg.length; _hri++) {
            if (hReg[_hri].source === 'body' && hReg[_hri].zoneId === zId && hReg[_hri].bodyZoneBeh === beh) {
                rEntry = hReg[_hri]; break;
            }
        }
        if (zEn && !rEntry) {
            rEntry = {
                source: 'body', zoneId: zId, bodyZoneBeh: beh, mesh: null,
                worldPos: new THREE.Vector3(), worldQuat: new THREE.Quaternion(),
                radius: radius, acceptedTags: zTags, occupant: null,
                shape: zShape, sizeX: 0, sizeY: 0, sizeZ: 0, parentYaw: parentYaw,
                holdingHapticIntensity: holdHapI, holdingHapticDuration: holdHapD,
                emptyHandHapticIntensity: emtyHapI, emptyHandHapticDuration: emtyHapD
            };
            gdjs._webxrVrHolsterRegistry.push(rEntry);
            beh._zoneEntries.push(rEntry);
        } else if (!zEn && rEntry) {
            if (rEntry.occupant) {
                var _rOcc = rEntry.occupant; rEntry.occupant = null;
                if (_rOcc.beh) { _rOcc.beh._holsterEntry = null; _rOcc.beh._state = 'idle'; }
            }
            gdjs._webxrVrHolsterRegistry = gdjs._webxrVrHolsterRegistry.filter(function(e){ return e !== rEntry; });
            beh._zoneEntries = beh._zoneEntries.filter(function(e){ return e !== rEntry; });
            if (rEntry.mesh) {
                if (rEntry.mesh.geometry) rEntry.mesh.geometry.dispose();
                if (rEntry.mesh.material) rEntry.mesh.material.dispose();
                if (rEntry.mesh.parent) rEntry.mesh.parent.remove(rEntry.mesh);
                rEntry.mesh = null;
            }
            beh._zoneSpheres[zId] = null;
            continue;
        }
        if (!zEn) continue;

        rEntry.radius = radius;
        rEntry.shape = zShape;
        rEntry.sizeX = (zShape === 'box') ? chBoxD : 0;
        rEntry.sizeY = (zShape === 'box') ? chBoxW : 0;
        rEntry.sizeZ = (zShape === 'box') ? chBoxH : 0;
        rEntry.parentYaw = parentYaw;
        rEntry.acceptedTags = zTags;
        rEntry.holdingHapticIntensity = holdHapI;
        rEntry.holdingHapticDuration = holdHapD;
        rEntry.emptyHandHapticIntensity = emtyHapI;
        rEntry.emptyHandHapticDuration = emtyHapD;

        // Lazy-create zone mesh (sphere or box)
        if (!beh._zoneSpheres[zId]) {
            var _sg = (zShape === 'box')
                ? new THREE.BoxGeometry(chBoxD, chBoxW, chBoxH)
                : new THREE.SphereGeometry(radius, 16, 12);
            var _sm = new THREE.MeshBasicMaterial({
                color: new THREE.Color(defR/255, defG/255, defB/255),
                transparent: true, opacity: defOp, depthWrite: false
            });
            var _sp = new THREE.Mesh(_sg, _sm);
            _sp.raycast = function(){};
            _sp.frustumCulled = false;
            _sp._builtRadius = (zShape === 'box') ? null : radius;
            _sp._builtBox = (zShape === 'box') ? {d: chBoxD, w: chBoxW, h: chBoxH} : null;
            parentRoot.add(_sp);
            beh._zoneSpheres[zId] = _sp;
            rEntry.mesh = _sp;
        }
        var sp = beh._zoneSpheres[zId];
        sp.position.set(zlx, -zly, zlz);
        sp.updateMatrixWorld(true);
        sp.getWorldPosition(rEntry.worldPos);
        rEntry.worldQuat.copy(parentYawQ);

        if (zShape === 'box') {
            var _bb = sp._builtBox;
            if (!_bb || _bb.d !== chBoxD || _bb.w !== chBoxW || _bb.h !== chBoxH) {
                sp.geometry.dispose();
                sp.geometry = new THREE.BoxGeometry(chBoxD, chBoxW, chBoxH);
                sp._builtBox = {d: chBoxD, w: chBoxW, h: chBoxH};
            }
        } else {
            if (sp._builtRadius !== radius) {
                sp.geometry.dispose();
                sp.geometry = new THREE.SphereGeometry(radius, 16, 12);
                sp._builtRadius = radius;
            }
        }

        // Hand proximity checks
        for (var _hi = 0; _hi < handsArr.length; _hi++) {
            var hand = handsArr[_hi];
            if (gdjs._webxrArcheryActive && gdjs._webxrArcheryActive[hand] > performance.now()) continue;
            var hEntry = controllers[hand];
            if (!hEntry || !hEntry.connected) continue;
            var hwp = hEntry._adjustedWP;
            if (!hwp) continue;
            // Compute holdingMatch and emptyHand before inside test (needed for radius bonus)
            var holdingMatch = false;
            for (var _gri2 = 0; _gri2 < gReg.length; _gri2++) {
                var _ge = gReg[_gri2];
                if ((_ge.beh._state === 'grabbed' || _ge.beh._state === 'flyingToCtrl') &&
                    _ge.beh._grabbingHand === hand &&
                    gdjs._webxrVrHolsterTagMatches(_ge.beh._getHolsterTag ? _ge.beh._getHolsterTag() : '', zTags)) {
                    holdingMatch = true; break;
                }
            }
            var emptyHand = true;
            for (var _gri3 = 0; _gri3 < gReg.length; _gri3++) {
                var _gReg2 = gReg[_gri3];
                if (_gReg2.beh._grabbingHand === hand &&
                    (_gReg2.beh._state === 'grabbed' || _gReg2.beh._state === 'flyingToCtrl'))
                    { emptyHand = false; break; }
            }
            // Extra reach for sphere zones when stowing - helps objects with large HoldOffset reach the zone
            var _testRadius = (rEntry.shape !== 'box' && holdingMatch && !rEntry.occupant)
                ? rEntry.radius + 10 : rEntry.radius;
            var _ddx = hwp.x - rEntry.worldPos.x;
            var _ddy = hwp.y - rEntry.worldPos.y;
            var _ddz = hwp.z - rEntry.worldPos.z;
            var inside;
            if (rEntry.shape === 'box') {
                var _cy = Math.cos(-rEntry.parentYaw), _sy = Math.sin(-rEntry.parentYaw);
                var _lx =  _ddx * _cy - _ddy * _sy;
                var _ly =  _ddx * _sy + _ddy * _cy;
                inside = Math.abs(_lx) <= rEntry.sizeX * 0.5
                      && Math.abs(_ly) <= rEntry.sizeY * 0.5
                      && Math.abs(_ddz) <= rEntry.sizeZ * 0.5;
            } else {
                inside = Math.sqrt(_ddx*_ddx + _ddy*_ddy + _ddz*_ddz) <= _testRadius;
            }
            if (!inside) {
                var zGx = anchor.x + (rEntry.worldPos.x - anchor.threeX);
                var zGy = anchor.y - (rEntry.worldPos.y - anchor.threeY);
                var zGz = anchor.z + (rEntry.worldPos.z - anchor.threeZ);
                if (rEntry.occupant && rEntry.occupant.obj) {
                    var hGx = anchor.x + (hwp.x - anchor.threeX);
                    var hGy = anchor.y - (hwp.y - anchor.threeY);
                    var hGz = anchor.z + (hwp.z - anchor.threeZ);
                    var _oObj = rEntry.occupant.obj;
                    var _ohw = (_oObj.getWidth  ? _oObj.getWidth()  : 0) / 2;
                    var _ohh = (_oObj.getHeight ? _oObj.getHeight() : 0) / 2;
                    var _ohd = (_oObj.getDepth  ? _oObj.getDepth()  : 0) / 2;
                    var _ox = _oObj.getX(), _oy = _oObj.getY(), _oz = _oObj.getZ();
                    if (hGx >= _ox-_ohw && hGx <= _ox+_ohw &&
                        hGy >= _oy-_ohh && hGy <= _oy+_ohh &&
                        hGz >= _oz-_ohd && hGz <= _oz+_ohd) inside = true;
                } else {
                    for (var _gri4 = 0; _gri4 < gReg.length; _gri4++) {
                        var _hge = gReg[_gri4];
                        var _hst = _hge.beh._state;
                        if ((_hst !== 'grabbed' && _hst !== 'flyingToCtrl') ||
                            _hge.beh._grabbingHand !== hand) continue;
                        if (!gdjs._webxrVrHolsterTagMatches(
                            _hge.beh._getHolsterTag ? _hge.beh._getHolsterTag() : '', zTags)) continue;
                        var _hObj = _hge.obj; if (!_hObj) continue;
                        var _hhw = (_hObj.getWidth  ? _hObj.getWidth()  : 0) / 2;
                        var _hhh = (_hObj.getHeight ? _hObj.getHeight() : 0) / 2;
                        var _hhd = (_hObj.getDepth  ? _hObj.getDepth()  : 0) / 2;
                        var _hox = _hObj.getX(), _hoy = _hObj.getY(), _hoz = _hObj.getZ();
                        var _qx = Math.max(_hox-_hhw, Math.min(zGx, _hox+_hhw));
                        var _qy = Math.max(_hoy-_hhh, Math.min(zGy, _hoy+_hhh));
                        var _qz = Math.max(_hoz-_hhd, Math.min(zGz, _hoz+_hhd));
                        var _qdx = _qx-zGx, _qdy = _qy-zGy, _qdz = _qz-zGz;
                        var _ovlp;
                        if (rEntry.shape === 'box') {
                            var _bcy = Math.cos(rEntry.parentYaw), _bsy = Math.sin(rEntry.parentYaw);
                            var _blx = _qdx*_bcy - _qdy*_bsy;
                            var _bly = _qdx*_bsy + _qdy*_bcy;
                            _ovlp = Math.abs(_blx) <= rEntry.sizeX*0.5
                                 && Math.abs(_bly) <= rEntry.sizeY*0.5
                                 && Math.abs(_qdz) <= rEntry.sizeZ*0.5;
                        } else {
                            _ovlp = Math.sqrt(_qdx*_qdx + _qdy*_qdy + _qdz*_qdz) <= rEntry.radius;
                        }
                        if (_ovlp) { inside = true; break; }
                    }
                }
            }
            var stKey = zId + '_' + hand;
            var wasIn = beh._zoneInsideState[stKey] === true;
            if (inside && !wasIn) {
                if (holdingMatch && gdjs._webxrVrHolsterFireHaptic)
                    gdjs._webxrVrHolsterFireHaptic(hand, holdHapI, holdHapD);
                if (emptyHand && rEntry.occupant && gdjs._webxrVrHolsterFireHaptic)
                    gdjs._webxrVrHolsterFireHaptic(hand, emtyHapI, emtyHapD);
            }
            beh._zoneInsideState[stKey] = inside;
            var shouldHighlight = (holdingMatch && !rEntry.occupant) || (emptyHand && !!rEntry.occupant);
            if (inside && shouldHighlight) {
                var _hdist = Math.sqrt(_ddx*_ddx + _ddy*_ddy + _ddz*_ddz);
                _zoneCandidates.push({rEntry: rEntry, hand: hand, dist: _hdist});
            }
            // Retrieve on grip edge
            if (inside && hEntry._grabGripEdgeAvailable && rEntry.occupant && gdjs._webxrVrHolsterBeginGrabFromZone &&
                !(gdjs._webxrVrHandIsClimbing && gdjs._webxrVrHandIsClimbing[hand]))
                gdjs._webxrVrHolsterBeginGrabFromZone(rEntry, hEntry, hand);
        }

        sp.visible = (zId === 'Head' || zId === 'Mouth') ? false : ((zoneVis === 'WhenEmpty') ? !rEntry.occupant : (showZones || !!rEntry.occupant));

        // Drive holstered object: moved to doStepPostEvents so the rig is current.
    }

    // Best-zone arbitration: for each hand only the closest candidate zone gets the hover highlight
    var _wonByHand = {left: null, right: null};
    var _wonDistByHand = {left: Infinity, right: Infinity};
    for (var _ci = 0; _ci < _zoneCandidates.length; _ci++) {
        var _cand = _zoneCandidates[_ci];
        if (_cand.dist < _wonDistByHand[_cand.hand]) {
            _wonDistByHand[_cand.hand] = _cand.dist;
            _wonByHand[_cand.hand] = _cand.rEntry;
        }
    }
    // Visual update: apply hover/default color to each zone based on winner
    for (var _zvi = 0; _zvi < zoneDefs.length; _zvi++) {
        if (!zoneDefs[_zvi][1]) continue;
        var _zvId = zoneDefs[_zvi][0];
        var _zvSp = beh._zoneSpheres[_zvId];
        if (!_zvSp || !_zvSp.material) continue;
        var _zvEntry = null;
        for (var _zvri = 0; _zvri < hReg.length; _zvri++) {
            if (hReg[_zvri].source === 'body' && hReg[_zvri].zoneId === _zvId && hReg[_zvri].bodyZoneBeh === beh) {
                _zvEntry = hReg[_zvri]; break;
            }
        }
        if (!_zvEntry) continue;
        var _zvAny = (_wonByHand.left === _zvEntry || _wonByHand.right === _zvEntry);
        var _zvOcc = !!_zvEntry.occupant;
        if (_zvAny) {
            _zvSp.material.color.setRGB(hovR/255, hovG/255, hovB/255);
            _zvSp.material.opacity = hovOp;
        } else if (_zvOcc) {
            _zvSp.material.color.setRGB(defR/255, defG/255, defB/255);
            _zvSp.material.opacity = Math.min(1, defOp * 2);
        } else {
            _zvSp.material.color.setRGB(defR/255, defG/255, defB/255);
            _zvSp.material.opacity = defOp;
        }
    }
}
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.userFunc0xec1fb0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.userFunc0xabd1f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var tr = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (!tr || !tr.xr || !tr.xr.isPresenting) return;
if (!gdjs._webxrVrHolsterApplyHangTransform) return;

// Ensure the rig world matrix is current before re-sampling body-zone positions.
if (gdjs._webxrVrEnsureRigCurrent) gdjs._webxrVrEnsureRigCurrent();

for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var beh = obj.getBehavior(behaviorName);
    if (!beh || !beh.activated()) continue;
    var entries = beh._zoneEntries;
    if (!entries || !entries.length) continue;
    for (var ei = 0; ei < entries.length; ei++) {
        var rEntry = entries[ei];
        if (!rEntry || !rEntry.occupant) continue;
        var sp = rEntry.mesh;
        if (!sp) continue;
        // Re-sample zone world position with the now-current rig matrix.
        sp.getWorldPosition(rEntry.worldPos);
        sp.getWorldQuaternion(rEntry.worldQuat);
        gdjs._webxrVrHolsterApplyHangTransform(rEntry);
    }
}
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.userFunc0xabd1f8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.userFunc0x1da4858 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var zoneName = eventsFunctionContext.getArgument("ZoneName");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = false; return; }
var reg = gdjs._webxrVrHolsterRegistry || [];
for (var i = 0; i < reg.length; i++) {
    var e = reg[i];
    if (e.source !== 'body' || e.bodyZoneBeh !== beh || e.zoneId !== String(zoneName)) continue;
    eventsFunctionContext.returnValue = !!e.occupant;
    return;
}
eventsFunctionContext.returnValue = false;
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.userFunc0x1da4858(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupied = function(ZoneName, parentEventsFunctionContext) {

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
if (argName === "ZoneName") return ZoneName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsZoneOccupiedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.userFunc0x285dc88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var zoneName = eventsFunctionContext.getArgument("ZoneName");
var handStr = String(eventsFunctionContext.getArgument("Hand")).toLowerCase();
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh || !beh._zoneInsideState) { eventsFunctionContext.returnValue = false; return; }
eventsFunctionContext.returnValue = !!beh._zoneInsideState[String(zoneName) + '_' + handStr];
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.userFunc0x285dc88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZone = function(ZoneName, Hand, parentEventsFunctionContext) {

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
if (argName === "ZoneName") return ZoneName;
if (argName === "Hand") return Hand;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsHandInZoneContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.userFunc0x12dc790 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var zoneName = eventsFunctionContext.getArgument("ZoneName");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = ''; return; }
var reg = gdjs._webxrVrHolsterRegistry || [];
for (var i = 0; i < reg.length; i++) {
    var e = reg[i];
    if (e.source !== 'body' || e.bodyZoneBeh !== beh || e.zoneId !== String(zoneName)) continue;
    eventsFunctionContext.returnValue = (e.occupant && e.occupant.obj && e.occupant.obj.getName) ? e.occupant.obj.getName() : '';
    return;
}
eventsFunctionContext.returnValue = '';
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.userFunc0x12dc790(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectName = function(ZoneName, parentEventsFunctionContext) {

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
if (argName === "ZoneName") return ZoneName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HolsteredObjectNameContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.GDObjectObjects1= [];
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.GDTargetObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.userFunc0x238f398 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var zoneName = eventsFunctionContext.getArgument("ZoneName");
var targetObjs = eventsFunctionContext.getObjects("TargetObject");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh || targetObjs.length === 0) return;
var tObj = targetObjs[0];
var reg = gdjs._webxrVrHolsterRegistry || [];
for (var i = 0; i < reg.length; i++) {
    var e = reg[i];
    if (e.source !== 'body' || e.bodyZoneBeh !== beh || e.zoneId !== String(zoneName)) continue;
    if (e.occupant) return; // slot occupied
    var tBeh = null;
    try { tBeh = tObj.getBehavior('VrGrabbable'); } catch(ex) {}
    if (!tBeh) {
        // Try to find VrGrabbable by registry
        var gReg = gdjs._webxrVrGrabbableRegistry || [];
        for (var gi = 0; gi < gReg.length; gi++) {
            if (gReg[gi].obj === tObj) { tBeh = gReg[gi].beh; break; }
        }
    }
    if (!tBeh) return;
    var tag = tBeh._getHolsterTag ? tBeh._getHolsterTag() : '';
    if (!gdjs._webxrVrHolsterTagMatches(tag, e.acceptedTags || '')) return;
    // If currently grabbed or magnetically targeted, tear down active state
    if (tBeh._state === 'grabbed' || tBeh._state === 'flyingToCtrl' || tBeh._state === 'targeted') {
        tBeh._state = 'idle';
        tBeh._targetingHand = null;
        tBeh._grabbingHand = null;
        tBeh._grabLocalPos = null;
        tBeh._grabLocalQuat = null;
        tBeh._grabWorldQuat = null;
        tBeh._grabOuterDeltaX = tBeh._grabOuterDeltaY = tBeh._grabOuterDeltaZ = null;
        tBeh._otherHoldingHand = null;
    }
    // Make kinematic if not already
    var phys = null;
    try { phys = tObj.getBehavior('Physics3D'); } catch(ex) {}
    if (phys && phys._body && typeof Jolt !== 'undefined') {
        if (tBeh._origJoltMotionType === undefined) {
            var origType = phys.bodyType || 'Dynamic';
            tBeh._origJoltMotionType = origType === 'Kinematic' ? Jolt.EMotionType_Kinematic :
                                       origType === 'Static'    ? Jolt.EMotionType_Static :
                                                                  Jolt.EMotionType_Dynamic;
            tBeh._origGravScale = typeof phys.gravityScale === 'number' ? phys.gravityScale : 1;
        }
        phys._sharedData.bodyInterface.SetMotionType(phys._body.GetID(), Jolt.EMotionType_Kinematic, Jolt.EActivation_Activate);
    }
    e.occupant = {obj: tObj, beh: tBeh};
    tBeh._holsterEntry = e;
    tBeh._noRedockUntil = performance.now() + 2000;
    return;
}
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.userFunc0x238f398(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolster = function(ZoneName, TargetObject, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
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
if (argName === "ZoneName") return ZoneName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceHolsterContext.GDTargetObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.userFunc0x114e400 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var zoneName = eventsFunctionContext.getArgument("ZoneName");
var handStr = String(eventsFunctionContext.getArgument("Hand")).toLowerCase();
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) return;
var reg = gdjs._webxrVrHolsterRegistry || [];
var controllers = gdjs._webxrVrControllers;
if (!controllers) return;
for (var i = 0; i < reg.length; i++) {
    var e = reg[i];
    if (e.source !== 'body' || e.bodyZoneBeh !== beh || e.zoneId !== String(zoneName)) continue;
    if (!e.occupant) return;
    var hEntry = controllers[handStr];
    if (!hEntry) return;
    if (gdjs._webxrVrHolsterBeginGrabFromZone) gdjs._webxrVrHolsterBeginGrabFromZone(e, hEntry, handStr);
    return;
}
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.userFunc0x114e400(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHand = function(ZoneName, Hand, parentEventsFunctionContext) {

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
if (argName === "ZoneName") return ZoneName;
if (argName === "Hand") return Hand;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.ForceRetrieveToHandContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.userFunc0xabdb30 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var s = String(eventsFunctionContext.getArgument('Color') || '').trim();
var r = 120, g = 180, b = 255;
var parts = s.split(';');
if (parts.length >= 3) {
    r = Math.max(0, Math.min(255, Math.round(Number(parts[0]))));
    g = Math.max(0, Math.min(255, Math.round(Number(parts[1]))));
    b = Math.max(0, Math.min(255, Math.round(Number(parts[2]))));
}
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setDefaultColor) beh._setDefaultColor(r + ';' + g + ';' + b);
}
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.userFunc0xabdb30(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetDefaultColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.userFunc0x1477df0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getDefaultColor ? String(beh._getDefaultColor()) : '120;180;255';
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.userFunc0x1477df0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.DefaultColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.userFunc0x1c5c4d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var s = String(eventsFunctionContext.getArgument('Color') || '').trim();
var r = 255, g = 220, b = 80;
var parts = s.split(';');
if (parts.length >= 3) {
    r = Math.max(0, Math.min(255, Math.round(Number(parts[0]))));
    g = Math.max(0, Math.min(255, Math.round(Number(parts[1]))));
    b = Math.max(0, Math.min(255, Math.round(Number(parts[2]))));
}
for (var i = 0; i < objs.length; i++) {
    var beh = objs[i].getBehavior(behaviorName);
    if (beh && beh._setHoverColor) beh._setHoverColor(r + ';' + g + ';' + b);
}
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.userFunc0x1c5c4d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.SetHoverColorContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.userFunc0xabd1a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects("Object");
var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
eventsFunctionContext.returnValue = beh && beh._getHoverColor ? String(beh._getHoverColor()) : '255;220;80';
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.userFunc0xabd1a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.HoverColorContext.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext = {};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.GDObjectObjects1= [];


gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.userFunc0x28e35d0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var objs = eventsFunctionContext.getObjects('Object');
var behaviorName = eventsFunctionContext.getBehaviorName('Behavior');
var zoneName = eventsFunctionContext.getArgument('ZoneName');
var targetName = eventsFunctionContext.getArgument('TargetObject');
var targetObjs = runtimeScene.getObjects(targetName) || [];
var beh = objs.length > 0 ? objs[0].getBehavior(behaviorName) : null;
if (!beh) { eventsFunctionContext.returnValue = false; return; }
var reg = gdjs._webxrVrHolsterRegistry || [];
for (var i = 0; i < reg.length; i++) {
    var e = reg[i];
    if (e.source !== 'body' || e.bodyZoneBeh !== beh || e.zoneId !== String(zoneName)) continue;
    if (!e.occupant) { eventsFunctionContext.returnValue = false; return; }
    for (var j = 0; j < targetObjs.length; j++) {
        if (targetObjs[j] === e.occupant.obj) { eventsFunctionContext.returnValue = true; return; }
    }
    eventsFunctionContext.returnValue = false;
    return;
}
eventsFunctionContext.returnValue = false;
};
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.GDObjectObjects1;
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.userFunc0x28e35d0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZone = function(ZoneName, TargetObject, parentEventsFunctionContext) {

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
if (argName === "ZoneName") return ZoneName;
if (argName === "TargetObject") return TargetObject;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones.prototype.IsObjectInZoneContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("WebXR::VrBodyZones", gdjs.evtsExt__WebXR__VrBodyZones.VrBodyZones);
