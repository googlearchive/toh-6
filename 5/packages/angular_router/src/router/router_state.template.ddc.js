define(['dart_sdk', 'packages/angular_router/src/route_definition.template', 'packages/angular_router/src/url.template', 'packages/angular/angular.template'], function(dart_sdk, route_definition, url, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_definition$46template = route_definition.src__route_definition$46template;
  const src__route_path$46template = route_definition.src__route_path$46template;
  const src__url$46template = url.src__url$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__router__router_state$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__router__router_state$46template, {
    /*src__router__router_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router__router_state$46template.initReflector = function() {
    if (dart.test(src__router__router_state$46template._visited)) {
      return;
    }
    src__router__router_state$46template._visited = true;
    src__route_definition$46template.initReflector();
    src__route_path$46template.initReflector();
    src__url$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__router__router_state$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/router/router_state.template.ddc", {
    "package:angular_router/src/router/router_state.template.dart": src__router__router_state$46template
  }, '{"version":3,"sourceRoot":"","sources":["router_state.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAiBI,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAM,8CAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,iCAAa;AACnB,IAAM,gCAAa;EACrB","file":"router_state.template.ddc.js"}');
  // Exports:
  return {
    src__router__router_state$46template: src__router__router_state$46template
  };
});

//# sourceMappingURL=router_state.template.ddc.js.map
