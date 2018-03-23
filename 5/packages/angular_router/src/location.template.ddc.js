define(['dart_sdk', 'packages/angular_router/src/location/browser_platform_location.template', 'packages/angular_router/src/location/hash_location_strategy.template', 'packages/angular_router/src/location/location.template', 'packages/angular_router/src/location/location_strategy.template', 'packages/angular_router/src/location/path_location_strategy.template', 'packages/angular_router/src/location/platform_location.template'], function(dart_sdk, browser_platform_location, hash_location_strategy, location, location_strategy, path_location_strategy, platform_location) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location__browser_platform_location$46template = browser_platform_location.src__location__browser_platform_location$46template;
  const src__location__hash_location_strategy$46template = hash_location_strategy.src__location__hash_location_strategy$46template;
  const src__location__location$46template = location.src__location__location$46template;
  const src__location__location_strategy$46template = location_strategy.src__location__location_strategy$46template;
  const src__location__path_location_strategy$46template = path_location_strategy.src__location__path_location_strategy$46template;
  const src__location__platform_location$46template = platform_location.src__location__platform_location$46template;
  const _root = Object.create(null);
  const src__location$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__location$46template, {
    /*src__location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__location$46template.initReflector = function() {
    if (dart.test(src__location$46template._visited)) {
      return;
    }
    src__location$46template._visited = true;
    src__location__browser_platform_location$46template.initReflector();
    src__location__hash_location_strategy$46template.initReflector();
    src__location__location$46template.initReflector();
    src__location__location_strategy$46template.initReflector();
    src__location__path_location_strategy$46template.initReflector();
    src__location__platform_location$46template.initReflector();
  };
  dart.fn(src__location$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/location.template.ddc", {
    "package:angular_router/src/location.template.dart": src__location$46template
  }, '{"version":3,"sourceRoot":"","sources":["location.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAcI,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAM,iEAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,yDAAa;EACrB","file":"location.template.ddc.js"}');
  // Exports:
  return {
    src__location$46template: src__location$46template
  };
});

//# sourceMappingURL=location.template.ddc.js.map
