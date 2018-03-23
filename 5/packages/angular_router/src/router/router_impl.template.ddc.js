define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_router/src/router/router_impl', 'packages/angular_router/src/location/location', 'packages/angular_router/src/router_hook', 'packages/angular/src/core/di/decorators', 'packages/angular_router/src/directives/router_outlet_directive.template', 'packages/angular_router/src/lifecycle.template', 'packages/angular_router/src/location.template', 'packages/angular_router/src/route_definition.template', 'packages/angular_router/src/router_hook.template', 'packages/angular_router/src/url.template', 'packages/angular_router/src/router/navigation_params.template', 'packages/angular/angular.template', 'packages/angular_router/src/router/router_state.template'], function(dart_sdk, reflector, router_impl, location, router_hook, decorators, router_outlet_directive, lifecycle, location$, route_definition, router_hook$, url, navigation_params, angular, router_state) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__router__router_impl = router_impl.src__router__router_impl;
  const src__location__location = location.src__location__location;
  const src__router_hook = router_hook.src__router_hook;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const src__directives__router_outlet_directive$46template = router_outlet_directive.src__directives__router_outlet_directive$46template;
  const src__router__router$46template = router_outlet_directive.src__router__router$46template;
  const src__router__router_outlet_token$46template = router_outlet_directive.src__router__router_outlet_token$46template;
  const src__lifecycle$46template = lifecycle.src__lifecycle$46template;
  const src__location$46template = location$.src__location$46template;
  const src__route_definition$46template = route_definition.src__route_definition$46template;
  const src__router_hook$46template = router_hook$.src__router_hook$46template;
  const src__url$46template = url.src__url$46template;
  const src__router__navigation_params$46template = navigation_params.src__router__navigation_params$46template;
  const angular$46template = angular.angular$46template;
  const src__router__router_state$46template = router_state.src__router__router_state$46template;
  const _root = Object.create(null);
  const src__router__router_impl$46template = Object.create(_root);
  let LocationAndRouterHookToRouterImpl = () => (LocationAndRouterHookToRouterImpl = dart.constFn(dart.fnType(src__router__router_impl.RouterImpl, [src__location__location.Location, src__router_hook.RouterHook])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__router__router_impl$46template, {
    /*src__router__router_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  src__router__router_impl$46template.initReflector = function() {
    if (dart.test(src__router__router_impl$46template._visited)) {
      return;
    }
    src__router__router_impl$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__router__router_impl.RouterImpl), dart.fn((p0, p1) => new src__router__router_impl.RouterImpl.new(p0, p1), LocationAndRouterHookToRouterImpl()));
    src__di__reflector.registerDependencies(dart.wrapType(src__router__router_impl.RouterImpl), const$2 || (const$2 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__location__location.Location)], core.Object)), const$1 || (const$1 = dart.constList([dart.wrapType(src__router_hook.RouterHook), const$0 || (const$0 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    src__directives__router_outlet_directive$46template.initReflector();
    src__lifecycle$46template.initReflector();
    src__location$46template.initReflector();
    src__route_definition$46template.initReflector();
    src__router_hook$46template.initReflector();
    src__url$46template.initReflector();
    src__router__navigation_params$46template.initReflector();
    angular$46template.initReflector();
    src__router__router$46template.initReflector();
    src__router__router_outlet_token$46template.initReflector();
    src__router__router_state$46template.initReflector();
  };
  dart.fn(src__router__router_impl$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/router/router_impl.template.ddc", {
    "package:angular_router/src/router/router_impl.template.dart": src__router__router_impl$46template
  }, '{"version":3,"sourceRoot":"","sources":["router_impl.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;MAmCI,4CAAQ;YAAG;;;;;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAO,kCAAe,CAAC,kDAAU,EAAE,SAAC,EAAe,EAAE,EAAiB,KAAK,IAAI,uCAAU,CAAC,EAAE,EAAE,EAAE;AAChG,IAAO,uCAAoB,CAAC,kDAAU,EAAE,sCACtC,oCAAW,+CAAQ,kBACnB,sCAAW,0CAAU,EAAE,qCAAM,sCAAe;AAE9C,IAAM,iEAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,yCAAa;AACnB,IAAM,iCAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,yDAAa;AACnB,IAAO,kDAAa;EACtB","file":"router_impl.template.ddc.js"}');
  // Exports:
  return {
    src__router__router_impl$46template: src__router__router_impl$46template
  };
});

//# sourceMappingURL=router_impl.template.ddc.js.map
