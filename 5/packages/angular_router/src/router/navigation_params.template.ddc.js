define(['dart_sdk', 'packages/angular/src/runtime.template'], function(dart_sdk, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__router__navigation_params$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__router__navigation_params$46template, {
    /*src__router__navigation_params$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router__navigation_params$46template.initReflector = function() {
    if (dart.test(src__router__navigation_params$46template._visited)) {
      return;
    }
    src__router__navigation_params$46template._visited = true;
    src__runtime$46template.initReflector();
  };
  dart.fn(src__router__navigation_params$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/router/navigation_params.template.ddc", {
    "package:angular_router/src/router/navigation_params.template.dart": src__router__navigation_params$46template
  }, '{"version":3,"sourceRoot":"","sources":["navigation_params.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,qCAAa;EACrB","file":"navigation_params.template.ddc.js"}');
  // Exports:
  return {
    src__router__navigation_params$46template: src__router__navigation_params$46template
  };
});

//# sourceMappingURL=navigation_params.template.ddc.js.map
