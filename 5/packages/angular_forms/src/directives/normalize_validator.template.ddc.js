define(['dart_sdk', 'packages/angular_forms/src/directives/validators.template'], function(dart_sdk, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__validators$46template = validators.src__directives__validators$46template;
  const _root = Object.create(null);
  const src__directives__normalize_validator$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__directives__normalize_validator$46template, {
    /*src__directives__normalize_validator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__normalize_validator$46template.initReflector = function() {
    if (dart.test(src__directives__normalize_validator$46template._visited)) {
      return;
    }
    src__directives__normalize_validator$46template._visited = true;
    src__directives__validators$46template.initReflector();
  };
  dart.fn(src__directives__normalize_validator$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives/normalize_validator.template.ddc", {
    "package:angular_forms/src/directives/normalize_validator.template.dart": src__directives__normalize_validator$46template
  }, '{"version":3,"sourceRoot":"","sources":["normalize_validator.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,oDAAa;EACrB","file":"normalize_validator.template.ddc.js"}');
  // Exports:
  return {
    src__directives__normalize_validator$46template: src__directives__normalize_validator$46template
  };
});

//# sourceMappingURL=normalize_validator.template.ddc.js.map
