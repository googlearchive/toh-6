define(['dart_sdk', 'packages/angular_forms/src/directives/validators.template'], function(dart_sdk, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model$46template = validators.src__model$46template;
  const _root = Object.create(null);
  const src__directives__abstract_control_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__directives__abstract_control_directive$46template, {
    /*src__directives__abstract_control_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__abstract_control_directive$46template.initReflector = function() {
    if (dart.test(src__directives__abstract_control_directive$46template._visited)) {
      return;
    }
    src__directives__abstract_control_directive$46template._visited = true;
    src__model$46template.initReflector();
  };
  dart.fn(src__directives__abstract_control_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives/abstract_control_directive.template.ddc", {
    "package:angular_forms/src/directives/abstract_control_directive.template.dart": src__directives__abstract_control_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["abstract_control_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,+DAAQ;YAAG;;;;;AAEb,kBAAI,+DAAQ,GAAE;AACZ;;AAEF,sEAAW;AAEX,IAAM,mCAAa;EACrB","file":"abstract_control_directive.template.ddc.js"}');
  // Exports:
  return {
    src__directives__abstract_control_directive$46template: src__directives__abstract_control_directive$46template
  };
});

//# sourceMappingURL=abstract_control_directive.template.ddc.js.map
