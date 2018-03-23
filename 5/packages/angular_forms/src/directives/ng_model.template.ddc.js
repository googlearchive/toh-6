define(['dart_sdk', 'packages/angular_forms/src/directives/validators.template', 'packages/angular_forms/src/directives/control_value_accessor.template', 'packages/angular_forms/src/directives/control_container.template', 'packages/angular/angular.template'], function(dart_sdk, validators, control_value_accessor, control_container, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model$46template = validators.src__model$46template;
  const src__validators$46template = validators.src__validators$46template;
  const src__directives__control_value_accessor$46template = control_value_accessor.src__directives__control_value_accessor$46template;
  const src__directives__ng_control$46template = control_container.src__directives__ng_control$46template;
  const src__directives__shared$46template = control_container.src__directives__shared$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__directives__ng_model$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__directives__ng_model$46template, {
    /*src__directives__ng_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_model$46template.initReflector = function() {
    if (dart.test(src__directives__ng_model$46template._visited)) {
      return;
    }
    src__directives__ng_model$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
  };
  dart.fn(src__directives__ng_model$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives/ng_model.template.ddc", {
    "package:angular_forms/src/directives/ng_model.template.dart": src__directives__ng_model$46template
  }, '{"version":3,"sourceRoot":"","sources":["ng_model.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAqBI,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAM,mCAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,gDAAa;EACrB","file":"ng_model.template.ddc.js"}');
  // Exports:
  return {
    src__directives__ng_model$46template: src__directives__ng_model$46template
  };
});

//# sourceMappingURL=ng_model.template.ddc.js.map
