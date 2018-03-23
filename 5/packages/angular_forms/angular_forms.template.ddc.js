define(['dart_sdk', 'packages/angular_forms/src/directives.template', 'packages/angular_forms/src/directives/control_container.template', 'packages/angular_forms/src/form_builder.template', 'packages/angular_forms/src/directives/validators.template'], function(dart_sdk, directives, control_container, form_builder, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives$46template = directives.src__directives$46template;
  const src__directives__radio_control_value_accessor$46template = control_container.src__directives__radio_control_value_accessor$46template;
  const src__form_builder$46template = form_builder.src__form_builder$46template;
  const src__model$46template = validators.src__model$46template;
  const src__validators$46template = validators.src__validators$46template;
  const _root = Object.create(null);
  const angular_forms$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(angular_forms$46template, {
    /*angular_forms$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  angular_forms$46template.initReflector = function() {
    if (dart.test(angular_forms$46template._visited)) {
      return;
    }
    angular_forms$46template._visited = true;
    src__directives$46template.initReflector();
    src__directives__radio_control_value_accessor$46template.initReflector();
    src__form_builder$46template.initReflector();
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
  };
  dart.fn(angular_forms$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/angular_forms.template.ddc", {
    "package:angular_forms/angular_forms.template.dart": angular_forms$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_forms.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAcI,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAM,wCAAa;AACnB,IAAM,sEAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,mCAAa;AACnB,IAAM,wCAAa;EACrB","file":"angular_forms.template.ddc.js"}');
  // Exports:
  return {
    angular_forms$46template: angular_forms$46template
  };
});

//# sourceMappingURL=angular_forms.template.ddc.js.map
