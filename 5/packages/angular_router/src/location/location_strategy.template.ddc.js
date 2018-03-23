define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__location__location_strategy$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__location__location_strategy$46template, {
    /*src__location__location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__location__location_strategy$46template.initReflector = function() {
    if (dart.test(src__location__location_strategy$46template._visited)) {
      return;
    }
    src__location__location_strategy$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(src__location__location_strategy$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/location/location_strategy.template.ddc", {
    "package:angular_router/src/location/location_strategy.template.dart": src__location__location_strategy$46template
  }, '{"version":3,"sourceRoot":"","sources":["location_strategy.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAM,gCAAa;EACrB","file":"location_strategy.template.ddc.js"}');
  // Exports:
  return {
    src__location__location_strategy$46template: src__location__location_strategy$46template
  };
});

//# sourceMappingURL=location_strategy.template.ddc.js.map
