define(['dart_sdk', 'packages/angular_router/angular_router.template'], function(dart_sdk, angular_router) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular_router$46template = angular_router.angular_router$46template;
  const _root = Object.create(null);
  const src__route_paths$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__route_paths$46template, {
    /*src__route_paths$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__route_paths$46template.initReflector = function() {
    if (dart.test(src__route_paths$46template._visited)) {
      return;
    }
    src__route_paths$46template._visited = true;
    angular_router$46template.initReflector();
  };
  dart.fn(src__route_paths$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/route_paths.template.ddc", {
    "package:angular_tour_of_heroes/src/route_paths.template.dart": src__route_paths$46template
  }, '{"version":3,"sourceRoot":"","sources":["route_paths.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,oCAAQ;YAAG;;;;;AAEb,kBAAI,oCAAQ,GAAE;AACZ;;AAEF,2CAAW;AAEX,IAAM,uCAAa;EACrB","file":"route_paths.template.ddc.js"}');
  // Exports:
  return {
    src__route_paths$46template: src__route_paths$46template
  };
});

//# sourceMappingURL=route_paths.template.ddc.js.map
