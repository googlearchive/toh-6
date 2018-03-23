define(['dart_sdk', 'packages/angular_forms/src/directives/validators.template', 'packages/angular_forms/src/directives/control_container.template', 'packages/angular/angular.template'], function(dart_sdk, validators, control_container, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model$46template = validators.src__model$46template;
  const src__directives__control_container$46template = control_container.src__directives__control_container$46template;
  const src__directives__form_interface$46template = control_container.src__directives__form_interface$46template;
  const src__directives__ng_control$46template = control_container.src__directives__ng_control$46template;
  const src__directives__ng_control_group$46template = control_container.src__directives__ng_control_group$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__directives__abstract_form$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__directives__abstract_form$46template, {
    /*src__directives__abstract_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__abstract_form$46template.initReflector = function() {
    if (dart.test(src__directives__abstract_form$46template._visited)) {
      return;
    }
    src__directives__abstract_form$46template._visited = true;
    src__model$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__directives__abstract_form$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives/abstract_form.template.ddc", {
    "package:angular_forms/src/directives/abstract_form.template.dart": src__directives__abstract_form$46template
  }, '{"version":3,"sourceRoot":"","sources":["abstract_form.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAsBI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,mCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,gCAAa;EACrB","file":"abstract_form.template.ddc.js"}');
  // Exports:
  return {
    src__directives__abstract_form$46template: src__directives__abstract_form$46template
  };
});

//# sourceMappingURL=abstract_form.template.ddc.js.map
