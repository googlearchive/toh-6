define(['dart_sdk', 'packages/angular_forms/src/directives/control_value_accessor.template', 'packages/angular/angular.template'], function(dart_sdk, control_value_accessor, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__control_value_accessor$46template = control_value_accessor.src__directives__control_value_accessor$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__directives__checkbox_value_accessor$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__directives__checkbox_value_accessor$46template, {
    /*src__directives__checkbox_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__checkbox_value_accessor$46template.initReflector = function() {
    if (dart.test(src__directives__checkbox_value_accessor$46template._visited)) {
      return;
    }
    src__directives__checkbox_value_accessor$46template._visited = true;
    src__directives__control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__directives__checkbox_value_accessor$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives/checkbox_value_accessor.template.ddc", {
    "package:angular_forms/src/directives/checkbox_value_accessor.template.dart": src__directives__checkbox_value_accessor$46template
  }, '{"version":3,"sourceRoot":"","sources":["checkbox_value_accessor.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,4DAAQ;YAAG;;;;;AAEb,kBAAI,4DAAQ,GAAE;AACZ;;AAEF,mEAAW;AAEX,IAAM,gEAAa;AACnB,IAAM,gCAAa;EACrB","file":"checkbox_value_accessor.template.ddc.js"}');
  // Exports:
  return {
    src__directives__checkbox_value_accessor$46template: src__directives__checkbox_value_accessor$46template
  };
});

//# sourceMappingURL=checkbox_value_accessor.template.ddc.js.map
