define(['dart_sdk', 'packages/angular_router/src/router/router_state.template'], function(dart_sdk, router_state) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__router__router_state$46template = router_state.src__router__router_state$46template;
  const _root = Object.create(null);
  const src__lifecycle$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__lifecycle$46template, {
    /*src__lifecycle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__lifecycle$46template.initReflector = function() {
    if (dart.test(src__lifecycle$46template._visited)) {
      return;
    }
    src__lifecycle$46template._visited = true;
    src__router__router_state$46template.initReflector();
  };
  dart.fn(src__lifecycle$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/lifecycle.template.ddc", {
    "package:angular_router/src/lifecycle.template.dart": src__lifecycle$46template
  }, '{"version":3,"sourceRoot":"","sources":["lifecycle.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,kCAAQ;YAAG;;;;;AAEb,kBAAI,kCAAQ,GAAE;AACZ;;AAEF,yCAAW;AAEX,IAAM,kDAAa;EACrB","file":"lifecycle.template.ddc.js"}');
  // Exports:
  return {
    src__lifecycle$46template: src__lifecycle$46template
  };
});

//# sourceMappingURL=lifecycle.template.ddc.js.map
