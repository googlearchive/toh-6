define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_router/src/location/location', 'packages/angular_router/src/location/location_strategy', 'packages/angular_router/src/location/location_strategy.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, location, location_strategy, location_strategy$, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__location__location = location.src__location__location;
  const src__location__location_strategy = location_strategy.src__location__location_strategy;
  const src__location__location_strategy$46template = location_strategy$.src__location__location_strategy$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__location__location$46template = Object.create(_root);
  let LocationStrategyToLocation = () => (LocationStrategyToLocation = dart.constFn(dart.fnType(src__location__location.Location, [src__location__location_strategy.LocationStrategy])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__location__location$46template, {
    /*src__location__location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__location__location$46template.initReflector = function() {
    if (dart.test(src__location__location$46template._visited)) {
      return;
    }
    src__location__location$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__location__location.Location), dart.fn(p0 => new src__location__location.Location.new(p0), LocationStrategyToLocation()));
    src__di__reflector.registerDependencies(dart.wrapType(src__location__location.Location), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__location__location_strategy.LocationStrategy)], core.Object))], ListOfObject())));
    src__location__location_strategy$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__location__location$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/location/location.template.ddc", {
    "package:angular_router/src/location/location.template.dart": src__location__location$46template
  }, '{"version":3,"sourceRoot":"","sources":["location.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAeI,2CAAQ;YAAG;;;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAO,kCAAe,CAAC,+CAAQ,EAAE,QAAC,EAAuB,IAAK,IAAI,oCAAQ,CAAC,EAAE;AAC7E,IAAO,uCAAoB,CAAC,+CAAQ,EAAE,sCACpC,oCAAW,gEAAgB;AAE7B,IAAM,yDAAa;AACnB,IAAM,gCAAa;EACrB","file":"location.template.ddc.js"}');
  // Exports:
  return {
    src__location__location$46template: src__location__location$46template
  };
});

//# sourceMappingURL=location.template.ddc.js.map
