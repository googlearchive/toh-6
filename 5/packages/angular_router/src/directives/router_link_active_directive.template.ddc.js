define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive.template', 'packages/angular_router/src/router/router_state.template', 'packages/angular/angular.template', 'packages/angular/src/runtime.template', 'packages/angular_router/src/directives/router_link_directive.template'], function(dart_sdk, router_outlet_directive, router_state, angular, runtime, router_link_directive) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__router__router$46template = router_outlet_directive.src__router__router$46template;
  const src__router__router_state$46template = router_state.src__router__router_state$46template;
  const angular$46template = angular.angular$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__directives__router_link_directive$46template = router_link_directive.src__directives__router_link_directive$46template;
  const _root = Object.create(null);
  const src__directives__router_link_active_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__directives__router_link_active_directive$46template, {
    /*src__directives__router_link_active_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__router_link_active_directive$46template.initReflector = function() {
    if (dart.test(src__directives__router_link_active_directive$46template._visited)) {
      return;
    }
    src__directives__router_link_active_directive$46template._visited = true;
    src__router__router$46template.initReflector();
    src__router__router_state$46template.initReflector();
    angular$46template.initReflector();
    src__runtime$46template.initReflector();
    src__directives__router_link_directive$46template.initReflector();
  };
  dart.fn(src__directives__router_link_active_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/directives/router_link_active_directive.template.ddc", {
    "package:angular_router/src/directives/router_link_active_directive.template.dart": src__directives__router_link_active_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["router_link_active_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAqBI,iEAAQ;YAAG;;;;;AAEb,kBAAI,iEAAQ,GAAE;AACZ;;AAEF,wEAAW;AAEX,IAAM,4CAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,+DAAa;EACrB","file":"router_link_active_directive.template.ddc.js"}');
  // Exports:
  return {
    src__directives__router_link_active_directive$46template: src__directives__router_link_active_directive$46template
  };
});

//# sourceMappingURL=router_link_active_directive.template.ddc.js.map
