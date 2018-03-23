define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_router/src/location/hash_location_strategy', 'packages/angular_router/src/location/platform_location', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/core/di/decorators', 'packages/angular_router/src/location/location.template', 'packages/angular_router/src/location/location_strategy.template', 'packages/angular/angular.template', 'packages/angular_router/src/location/platform_location.template'], function(dart_sdk, reflector, hash_location_strategy, platform_location, opaque_token, decorators, location, location_strategy, angular, platform_location$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__location__hash_location_strategy = hash_location_strategy.src__location__hash_location_strategy;
  const src__location__platform_location = platform_location.src__location__platform_location;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const src__location__location$46template = location.src__location__location$46template;
  const src__location__location_strategy$46template = location_strategy.src__location__location_strategy$46template;
  const angular$46template = angular.angular$46template;
  const src__location__platform_location$46template = platform_location$.src__location__platform_location$46template;
  const _root = Object.create(null);
  const src__location__hash_location_strategy$46template = Object.create(_root);
  let PlatformLocationAndStringToHashLocationStrategy = () => (PlatformLocationAndStringToHashLocationStrategy = dart.constFn(dart.fnType(src__location__hash_location_strategy.HashLocationStrategy, [src__location__platform_location.PlatformLocation, core.String])))();
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__location__hash_location_strategy$46template, {
    /*src__location__hash_location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  src__location__hash_location_strategy$46template.initReflector = function() {
    if (dart.test(src__location__hash_location_strategy$46template._visited)) {
      return;
    }
    src__location__hash_location_strategy$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__location__hash_location_strategy.HashLocationStrategy), dart.fn((p0, p1) => new src__location__hash_location_strategy.HashLocationStrategy.new(p0, p1), PlatformLocationAndStringToHashLocationStrategy()));
    src__di__reflector.registerDependencies(dart.wrapType(src__location__hash_location_strategy.HashLocationStrategy), const$4 || (const$4 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__location__platform_location.PlatformLocation)], core.Object)), const$3 || (const$3 = dart.constList([const$1 || (const$1 = dart.const(new src__core__di__decorators.Inject.new(const$0 || (const$0 = dart.const(new (OpaqueTokenOfString()).new('appBaseHref')))))), const$2 || (const$2 = dart.const(new src__core__di__decorators.Optional.new()))], core.Object))], ListOfObject())));
    src__location__location$46template.initReflector();
    src__location__location_strategy$46template.initReflector();
    angular$46template.initReflector();
    src__location__platform_location$46template.initReflector();
  };
  dart.fn(src__location__hash_location_strategy$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/location/hash_location_strategy.template.ddc", {
    "package:angular_router/src/location/hash_location_strategy.template.dart": src__location__hash_location_strategy$46template
  }, '{"version":3,"sourceRoot":"","sources":["hash_location_strategy.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAoBI,yDAAQ;YAAG;;;;;;;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAO,kCAAe,CAAC,yEAAoB,EAAE,SAAC,EAAuB,EAAE,EAAS,KAAK,IAAI,8DAAoB,CAAC,EAAE,EAAE,EAAE;AACpH,IAAO,uCAAoB,CAAC,yEAAoB,EAAE,sCAChD,oCAAW,gEAAgB,kBAC3B,sCAAO,qCAAM,oCAAa,CAAC,qCAAM,2BAAuB,CAAC,qBAAiB,qCAAM,sCAAe;AAEjG,IAAM,gDAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,yDAAa;EACrB","file":"hash_location_strategy.template.ddc.js"}');
  // Exports:
  return {
    src__location__hash_location_strategy$46template: src__location__hash_location_strategy$46template
  };
});

//# sourceMappingURL=hash_location_strategy.template.ddc.js.map
