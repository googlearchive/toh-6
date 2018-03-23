define(['dart_sdk', 'packages/angular_forms/src/directives/validators.template'], function(dart_sdk, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__validators$46template = validators.src__directives__validators$46template;
  const src__model$46template = validators.src__model$46template;
  const _root = Object.create(null);
  const src__form_builder$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__form_builder$46template, {
    /*src__form_builder$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__form_builder$46template.initReflector = function() {
    if (dart.test(src__form_builder$46template._visited)) {
      return;
    }
    src__form_builder$46template._visited = true;
    src__directives__validators$46template.initReflector();
    src__model$46template.initReflector();
  };
  dart.fn(src__form_builder$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/form_builder.template.ddc", {
    "package:angular_forms/src/form_builder.template.dart": src__form_builder$46template
  }, '{"version":3,"sourceRoot":"","sources":["form_builder.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAYI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,mCAAa;EACrB","file":"form_builder.template.ddc.js"}');
  // Exports:
  return {
    src__form_builder$46template: src__form_builder$46template
  };
});

//# sourceMappingURL=form_builder.template.ddc.js.map
