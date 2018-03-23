define(['dart_sdk', 'packages/angular_router/src/directives/router_link_active_directive.template', 'packages/angular_router/src/directives/router_link_directive.template', 'packages/angular_router/src/directives/router_outlet_directive.template', 'packages/angular_router/src/location.template', 'packages/angular/angular.template', 'packages/angular_router/src/router/router_impl.template'], function(dart_sdk, router_link_active_directive, router_link_directive, router_outlet_directive, location, angular, router_impl) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__router_link_active_directive$46template = router_link_active_directive.src__directives__router_link_active_directive$46template;
  const src__directives__router_link_directive$46template = router_link_directive.src__directives__router_link_directive$46template;
  const src__directives__router_outlet_directive$46template = router_outlet_directive.src__directives__router_outlet_directive$46template;
  const src__router__router$46template = router_outlet_directive.src__router__router$46template;
  const src__location$46template = location.src__location$46template;
  const angular$46template = angular.angular$46template;
  const src__router__router_impl$46template = router_impl.src__router__router_impl$46template;
  const _root = Object.create(null);
  const src__constants$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__constants$46template, {
    /*src__constants$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__constants$46template.initReflector = function() {
    if (dart.test(src__constants$46template._visited)) {
      return;
    }
    src__constants$46template._visited = true;
    src__directives__router_link_active_directive$46template.initReflector();
    src__directives__router_link_directive$46template.initReflector();
    src__directives__router_outlet_directive$46template.initReflector();
    src__location$46template.initReflector();
    angular$46template.initReflector();
    src__router__router$46template.initReflector();
    src__router__router_impl$46template.initReflector();
  };
  dart.fn(src__constants$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/constants.template.ddc", {
    "package:angular_router/src/constants.template.dart": src__constants$46template
  }, '{"version":3,"sourceRoot":"","sources":["constants.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAsBI,kCAAQ;YAAG;;;;;AAEb,kBAAI,kCAAQ,GAAE;AACZ;;AAEF,yCAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,iDAAa;EACrB","file":"constants.template.ddc.js"}');
  // Exports:
  return {
    src__constants$46template: src__constants$46template
  };
});

//# sourceMappingURL=constants.template.ddc.js.map
