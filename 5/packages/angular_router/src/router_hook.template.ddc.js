define(['dart_sdk', 'packages/angular_router/src/router/navigation_params.template', 'packages/angular_router/src/router/router_state.template'], function(dart_sdk, navigation_params, router_state) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__router__navigation_params$46template = navigation_params.src__router__navigation_params$46template;
  const src__router__router_state$46template = router_state.src__router__router_state$46template;
  const _root = Object.create(null);
  const src__router_hook$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__router_hook$46template, {
    /*src__router_hook$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router_hook$46template.initReflector = function() {
    if (dart.test(src__router_hook$46template._visited)) {
      return;
    }
    src__router_hook$46template._visited = true;
    src__router__navigation_params$46template.initReflector();
    src__router__router_state$46template.initReflector();
  };
  dart.fn(src__router_hook$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/router_hook.template.ddc", {
    "package:angular_router/src/router_hook.template.dart": src__router_hook$46template
  }, '{"version":3,"sourceRoot":"","sources":["router_hook.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,oCAAQ;YAAG;;;;;AAEb,kBAAI,oCAAQ,GAAE;AACZ;;AAEF,2CAAW;AAEX,IAAM,uDAAa;AACnB,IAAM,kDAAa;EACrB","file":"router_hook.template.ddc.js"}');
  // Exports:
  return {
    src__router_hook$46template: src__router_hook$46template
  };
});

//# sourceMappingURL=router_hook.template.ddc.js.map
