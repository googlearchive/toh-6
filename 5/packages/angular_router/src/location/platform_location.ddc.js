define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__location__platform_location = Object.create(_root);
  src__location__platform_location.PlatformLocation = class PlatformLocation extends core.Object {};
  (src__location__platform_location.PlatformLocation.new = function() {
  }).prototype = src__location__platform_location.PlatformLocation.prototype;
  dart.addTypeTests(src__location__platform_location.PlatformLocation);
  src__location__platform_location.BaseHRefFromDOMProvider = dart.typedef('BaseHRefFromDOMProvider', () => dart.fnType(core.String, []));
  dart.defineLazy(src__location__platform_location, {
    /*src__location__platform_location.baseHRefFromDOM*/get baseHRefFromDOM() {
      return null;
    },
    set baseHRefFromDOM(_) {}
  });
  dart.trackLibraries("packages/angular_router/src/location/platform_location.ddc", {
    "package:angular_router/src/location/platform_location.dart": src__location__platform_location
  }, '{"version":3,"sourceRoot":"","sources":["platform_location.dart"],"names":[],"mappings":";;;;;;;;;EAmCA;;;;MAKwB,gDAAe","file":"platform_location.ddc.js"}');
  // Exports:
  return {
    src__location__platform_location: src__location__platform_location
  };
});

//# sourceMappingURL=platform_location.ddc.js.map
