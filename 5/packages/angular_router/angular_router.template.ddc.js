define(['dart_sdk', 'packages/angular_router/src/constants.template', 'packages/angular_router/src/directives/router_link_active_directive.template', 'packages/angular_router/src/directives/router_link_directive.template', 'packages/angular_router/src/directives/router_outlet_directive.template', 'packages/angular_router/src/lifecycle.template', 'packages/angular_router/src/location.template', 'packages/angular_router/src/route_definition.template', 'packages/angular_router/src/router/navigation_params.template', 'packages/angular_router/src/router/router_state.template', 'packages/angular_router/src/router_hook.template'], function(dart_sdk, constants, router_link_active_directive, router_link_directive, router_outlet_directive, lifecycle, location, route_definition, navigation_params, router_state, router_hook) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__constants$46template = constants.src__constants$46template;
  const src__directives__router_link_active_directive$46template = router_link_active_directive.src__directives__router_link_active_directive$46template;
  const src__directives__router_link_directive$46template = router_link_directive.src__directives__router_link_directive$46template;
  const src__directives__router_outlet_directive$46template = router_outlet_directive.src__directives__router_outlet_directive$46template;
  const src__router__router$46template = router_outlet_directive.src__router__router$46template;
  const src__lifecycle$46template = lifecycle.src__lifecycle$46template;
  const src__location$46template = location.src__location$46template;
  const src__route_definition$46template = route_definition.src__route_definition$46template;
  const src__route_path$46template = route_definition.src__route_path$46template;
  const src__router__navigation_params$46template = navigation_params.src__router__navigation_params$46template;
  const src__router__router_state$46template = router_state.src__router__router_state$46template;
  const src__router_hook$46template = router_hook.src__router_hook$46template;
  const _root = Object.create(null);
  const angular_router$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(angular_router$46template, {
    /*angular_router$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  angular_router$46template.initReflector = function() {
    if (dart.test(angular_router$46template._visited)) {
      return;
    }
    angular_router$46template._visited = true;
    src__constants$46template.initReflector();
    src__directives__router_link_active_directive$46template.initReflector();
    src__directives__router_link_directive$46template.initReflector();
    src__directives__router_outlet_directive$46template.initReflector();
    src__lifecycle$46template.initReflector();
    src__location$46template.initReflector();
    src__route_definition$46template.initReflector();
    src__route_path$46template.initReflector();
    src__router__navigation_params$46template.initReflector();
    src__router__router$46template.initReflector();
    src__router__router_state$46template.initReflector();
    src__router_hook$46template.initReflector();
  };
  dart.fn(angular_router$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/angular_router.template.ddc", {
    "package:angular_router/angular_router.template.dart": angular_router$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_router.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAoBI,kCAAQ;YAAG;;;;;AAEb,kBAAI,kCAAQ,GAAE;AACZ;;AAEF,yCAAW;AAEX,IAAM,uCAAa;AACnB,IAAM,sEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,4CAAa;AACnB,IAAO,kDAAa;AACpB,IAAO,yCAAa;EACtB","file":"angular_router.template.ddc.js"}');
  // Exports:
  return {
    angular_router$46template: angular_router$46template
  };
});

//# sourceMappingURL=angular_router.template.ddc.js.map
