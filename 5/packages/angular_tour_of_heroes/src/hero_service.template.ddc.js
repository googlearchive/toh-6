define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_tour_of_heroes/src/hero_service', 'packages/http/src/base_client', 'packages/angular_tour_of_heroes/src/hero.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, hero_service, base_client, hero, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero_service = hero_service.src__hero_service;
  const src__client = base_client.src__client;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_service$46template = Object.create(_root);
  let ClientToHeroService = () => (ClientToHeroService = dart.constFn(dart.fnType(src__hero_service.HeroService, [src__client.Client])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_service$46template, {
    /*src__hero_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__hero_service$46template.initReflector = function() {
    if (dart.test(src__hero_service$46template._visited)) {
      return;
    }
    src__hero_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__hero_service.HeroService), dart.fn(p0 => new src__hero_service.HeroService.new(p0), ClientToHeroService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__hero_service.HeroService), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__client.Client)], core.Object))], ListOfObject())));
    src__hero$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_service.template.ddc", {
    "package:angular_tour_of_heroes/src/hero_service.template.dart": src__hero_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAiBI,qCAAQ;YAAG;;;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,kCAAe,CAAC,4CAAW,EAAE,QAAC,EAAa,IAAK,IAAI,iCAAW,CAAC,EAAE;AACzE,IAAO,uCAAoB,CAAC,4CAAW,EAAE,sCACvC,oCAAW,iCAAM;AAEnB,IAAM,kCAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_service.template.ddc.js"}');
  // Exports:
  return {
    src__hero_service$46template: src__hero_service$46template
  };
});

//# sourceMappingURL=hero_service.template.ddc.js.map
