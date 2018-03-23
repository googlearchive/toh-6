define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/angular_tour_of_heroes/app_component.template', 'packages/angular_tour_of_heroes/in_memory_data_service.template', 'packages/angular/src/platform/bootstrap', 'packages/angular_tour_of_heroes/app_component', 'packages/angular_router/src/constants', 'packages/http/src/base_client', 'packages/angular_tour_of_heroes/in_memory_data_service', 'packages/angular/src/di/providers'], function(dart_sdk, angular, angular_router, app_component, in_memory_data_service, bootstrap, app_component$, constants, base_client, in_memory_data_service$, providers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const app_component$46template = app_component.app_component$46template;
  const in_memory_data_service$46template = in_memory_data_service.in_memory_data_service$46template;
  const src__platform__bootstrap = bootstrap.src__platform__bootstrap;
  const app_component$0 = app_component$.app_component;
  const src__constants = constants.src__constants;
  const src__client = base_client.src__client;
  const in_memory_data_service$0 = in_memory_data_service$.in_memory_data_service;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const main$46template = Object.create(_root);
  const main = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    app_component$46template.initReflector();
    in_memory_data_service$46template.initReflector();
  };
  dart.fn(main$46template.initReflector, VoidTovoid());
  let const$;
  main.main = function() {
    src__platform__bootstrap.bootstrapStatic(dart.dynamic, dart.wrapType(app_component$0.AppComponent), [src__constants.routerProvidersHash, const$ || (const$ = dart.const(src__di__providers.ClassProvider.new(dart.wrapType(src__client.Client), {useClass: dart.wrapType(in_memory_data_service$0.InMemoryDataService)})))], main$46template.initReflector);
  };
  dart.fn(main.main, VoidTovoid());
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","main.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;QAkBM,eAAE;;;kBAAF,eAAE;MAAF,ACCF,eDDI,SCCI;YAAG;;;;EDDT,eAAE;ACGN,kBDHI,ACGA,eDHE,SCGM,GAAE;AACZ;;AAEF,IDNI,eAAE,YCMK;AAEX,IDRI,ACQE,eDRA,cCQa;AACnB,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,+CAAa;EACrB;UDbM,eAAE;;;AATN,4CAAe,eACX,2CAAY,EACZ,CACE,kCAAmB,EACnB,+BAAM,oCAAa,CAAC,iCAAM,aAAY,2DAAmB,OAK3D,AAAG,eAAD,cAAc;EACtB;;EADM,eAAE;;0BAAF,eAAE;;;;;qBAAF,eAAE","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
