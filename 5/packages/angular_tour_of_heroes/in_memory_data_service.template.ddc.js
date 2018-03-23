define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular_tour_of_heroes/in_memory_data_service', 'packages/angular/angular.template', 'packages/angular_tour_of_heroes/src/hero.template'], function(dart_sdk, reflector, in_memory_data_service, angular, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const in_memory_data_service$ = in_memory_data_service.in_memory_data_service;
  const angular$46template = angular.angular$46template;
  const src__hero$46template = hero.src__hero$46template;
  const _root = Object.create(null);
  const in_memory_data_service$46template = Object.create(_root);
  let VoidToInMemoryDataService = () => (VoidToInMemoryDataService = dart.constFn(dart.fnType(in_memory_data_service$.InMemoryDataService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(in_memory_data_service$46template, {
    /*in_memory_data_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  in_memory_data_service$46template.initReflector = function() {
    if (dart.test(in_memory_data_service$46template._visited)) {
      return;
    }
    in_memory_data_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(in_memory_data_service$.InMemoryDataService), dart.fn(() => new in_memory_data_service$.InMemoryDataService.new(), VoidToInMemoryDataService()));
    angular$46template.initReflector();
    src__hero$46template.initReflector();
  };
  dart.fn(in_memory_data_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/in_memory_data_service.template.ddc", {
    "package:angular_tour_of_heroes/in_memory_data_service.template.dart": in_memory_data_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["in_memory_data_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAkBI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAO,kCAAe,CAAC,0DAAmB,EAAE,cAAM,IAAI,+CAAmB;AACzE,IAAM,gCAAa;AACnB,IAAM,kCAAa;EACrB","file":"in_memory_data_service.template.ddc.js"}');
  // Exports:
  return {
    in_memory_data_service$46template: in_memory_data_service$46template
  };
});

//# sourceMappingURL=in_memory_data_service.template.ddc.js.map
