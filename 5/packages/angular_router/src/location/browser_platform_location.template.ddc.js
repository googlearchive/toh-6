define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_router/src/location/browser_platform_location', 'packages/angular_router/src/location/base_href.template', 'packages/angular/angular.template', 'packages/angular_router/src/location/platform_location.template'], function(dart_sdk, reflector, browser_platform_location, base_href, angular, platform_location) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__location__browser_platform_location = browser_platform_location.src__location__browser_platform_location;
  const src__location__base_href$46template = base_href.src__location__base_href$46template;
  const angular$46template = angular.angular$46template;
  const src__location__platform_location$46template = platform_location.src__location__platform_location$46template;
  const _root = Object.create(null);
  const src__location__browser_platform_location$46template = Object.create(_root);
  let VoidToBrowserPlatformLocation = () => (VoidToBrowserPlatformLocation = dart.constFn(dart.fnType(src__location__browser_platform_location.BrowserPlatformLocation, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__location__browser_platform_location$46template, {
    /*src__location__browser_platform_location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__location__browser_platform_location$46template.initReflector = function() {
    if (dart.test(src__location__browser_platform_location$46template._visited)) {
      return;
    }
    src__location__browser_platform_location$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__location__browser_platform_location.BrowserPlatformLocation), dart.fn(() => new src__location__browser_platform_location.BrowserPlatformLocation.new(), VoidToBrowserPlatformLocation()));
    src__location__base_href$46template.initReflector();
    angular$46template.initReflector();
    src__location__platform_location$46template.initReflector();
  };
  dart.fn(src__location__browser_platform_location$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/location/browser_platform_location.template.ddc", {
    "package:angular_router/src/location/browser_platform_location.template.dart": src__location__browser_platform_location$46template
  }, '{"version":3,"sourceRoot":"","sources":["browser_platform_location.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAgBI,4DAAQ;YAAG;;;;;AAEb,kBAAI,4DAAQ,GAAE;AACZ;;AAEF,mEAAW;AAEX,IAAO,kCAAe,CAAC,+EAAuB,EAAE,cAAM,IAAI,oEAAuB;AACjF,IAAM,iDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,yDAAa;EACrB","file":"browser_platform_location.template.ddc.js"}');
  // Exports:
  return {
    src__location__browser_platform_location$46template: src__location__browser_platform_location$46template
  };
});

//# sourceMappingURL=browser_platform_location.template.ddc.js.map
