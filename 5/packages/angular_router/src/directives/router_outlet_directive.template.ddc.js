define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_router/src/lifecycle.template', 'packages/angular_router/src/route_definition.template', 'packages/angular_router/src/router/router_state.template', 'packages/angular_router/src/router_hook.template', 'packages/angular/src/runtime.template', 'packages/angular_router/src/router/navigation_params.template'], function(dart_sdk, angular, lifecycle, route_definition, router_state, router_hook, runtime, navigation_params) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const src__lifecycle$46template = lifecycle.src__lifecycle$46template;
  const src__route_definition$46template = route_definition.src__route_definition$46template;
  const src__router__router_state$46template = router_state.src__router__router_state$46template;
  const src__router_hook$46template = router_hook.src__router_hook$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__router__navigation_params$46template = navigation_params.src__router__navigation_params$46template;
  const _root = Object.create(null);
  const src__router__router_outlet_token$46template = Object.create(_root);
  const src__directives__router_outlet_directive$46template = Object.create(_root);
  const src__router__router$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__router__router_outlet_token$46template, {
    /*src__router__router_outlet_token$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router__router_outlet_token$46template.initReflector = function() {
    if (dart.test(src__router__router_outlet_token$46template._visited)) {
      return;
    }
    src__router__router_outlet_token$46template._visited = true;
    src__directives__router_outlet_directive$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__router__router_outlet_token$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__directives__router_outlet_directive$46template, {
    /*src__directives__router_outlet_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__router_outlet_directive$46template.initReflector = function() {
    if (dart.test(src__directives__router_outlet_directive$46template._visited)) {
      return;
    }
    src__directives__router_outlet_directive$46template._visited = true;
    src__lifecycle$46template.initReflector();
    src__route_definition$46template.initReflector();
    src__router__router$46template.initReflector();
    src__router__router_outlet_token$46template.initReflector();
    src__router__router_state$46template.initReflector();
    src__router_hook$46template.initReflector();
    angular$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.fn(src__directives__router_outlet_directive$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__router__router$46template, {
    /*src__router__router$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__router__router$46template.initReflector = function() {
    if (dart.test(src__router__router$46template._visited)) {
      return;
    }
    src__router__router$46template._visited = true;
    src__directives__router_outlet_directive$46template.initReflector();
    src__router__navigation_params$46template.initReflector();
    src__router__router_state$46template.initReflector();
  };
  dart.fn(src__router__router$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/directives/router_outlet_directive.template.ddc", {
    "package:angular_router/src/router/router_outlet_token.template.dart": src__router__router_outlet_token$46template,
    "package:angular_router/src/directives/router_outlet_directive.template.dart": src__directives__router_outlet_directive$46template,
    "package:angular_router/src/router/router.template.dart": src__router__router$46template
  }, '{"version":3,"sourceRoot":"","sources":["../router/router_outlet_token.template.dart","router_outlet_directive.template.dart","../router/router.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAYI,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAM,iEAAa;AACnB,IAAM,gCAAa;EACrB;;;MCII,4DAAQ;YAAG;;;;;AAEb,kBAAI,4DAAQ,GAAE;AACZ;;AAEF,mEAAW;AAEX,IAAM,uCAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,yCAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,qCAAa;EACrB;;;MCzBI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,iEAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,kDAAa;EACrB","file":"router_outlet_directive.template.ddc.js"}');
  // Exports:
  return {
    src__router__router_outlet_token$46template: src__router__router_outlet_token$46template,
    src__directives__router_outlet_directive$46template: src__directives__router_outlet_directive$46template,
    src__router__router$46template: src__router__router$46template
  };
});

//# sourceMappingURL=router_outlet_directive.template.ddc.js.map
