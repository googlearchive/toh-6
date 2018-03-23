define(['dart_sdk', 'packages/angular_forms/src/directives/abstract_control_directive.template', 'packages/angular_forms/src/directives/checkbox_value_accessor.template', 'packages/angular_forms/src/directives/control_container.template', 'packages/angular_forms/src/directives/control_value_accessor.template', 'packages/angular_forms/src/directives/default_value_accessor.template', 'packages/angular_forms/src/directives/ng_control_name.template', 'packages/angular_forms/src/directives/ng_control_status.template', 'packages/angular_forms/src/directives/ng_form.template', 'packages/angular_forms/src/directives/ng_form_control.template', 'packages/angular_forms/src/directives/ng_form_model.template', 'packages/angular_forms/src/directives/ng_model.template', 'packages/angular_forms/src/directives/number_value_accessor.template', 'packages/angular_forms/src/directives/select_control_value_accessor.template', 'packages/angular_forms/src/directives/validators.template'], function(dart_sdk, abstract_control_directive, checkbox_value_accessor, control_container, control_value_accessor, default_value_accessor, ng_control_name, ng_control_status, ng_form, ng_form_control, ng_form_model, ng_model, number_value_accessor, select_control_value_accessor, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__abstract_control_directive$46template = abstract_control_directive.src__directives__abstract_control_directive$46template;
  const src__directives__checkbox_value_accessor$46template = checkbox_value_accessor.src__directives__checkbox_value_accessor$46template;
  const src__directives__control_container$46template = control_container.src__directives__control_container$46template;
  const src__directives__form_interface$46template = control_container.src__directives__form_interface$46template;
  const src__directives__ng_control$46template = control_container.src__directives__ng_control$46template;
  const src__directives__ng_control_group$46template = control_container.src__directives__ng_control_group$46template;
  const src__directives__radio_control_value_accessor$46template = control_container.src__directives__radio_control_value_accessor$46template;
  const src__directives__shared$46template = control_container.src__directives__shared$46template;
  const src__directives__control_value_accessor$46template = control_value_accessor.src__directives__control_value_accessor$46template;
  const src__directives__default_value_accessor$46template = default_value_accessor.src__directives__default_value_accessor$46template;
  const src__directives__ng_control_name$46template = ng_control_name.src__directives__ng_control_name$46template;
  const src__directives__ng_control_status$46template = ng_control_status.src__directives__ng_control_status$46template;
  const src__directives__ng_form$46template = ng_form.src__directives__ng_form$46template;
  const src__directives__ng_form_control$46template = ng_form_control.src__directives__ng_form_control$46template;
  const src__directives__ng_form_model$46template = ng_form_model.src__directives__ng_form_model$46template;
  const src__directives__ng_model$46template = ng_model.src__directives__ng_model$46template;
  const src__directives__number_value_accessor$46template = number_value_accessor.src__directives__number_value_accessor$46template;
  const src__directives__select_control_value_accessor$46template = select_control_value_accessor.src__directives__select_control_value_accessor$46template;
  const src__directives__validators$46template = validators.src__directives__validators$46template;
  const _root = Object.create(null);
  const src__directives$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__directives$46template, {
    /*src__directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives$46template.initReflector = function() {
    if (dart.test(src__directives$46template._visited)) {
      return;
    }
    src__directives$46template._visited = true;
    src__directives__abstract_control_directive$46template.initReflector();
    src__directives__checkbox_value_accessor$46template.initReflector();
    src__directives__checkbox_value_accessor$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__default_value_accessor$46template.initReflector();
    src__directives__default_value_accessor$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    src__directives__ng_control_name$46template.initReflector();
    src__directives__ng_control_name$46template.initReflector();
    src__directives__ng_control_status$46template.initReflector();
    src__directives__ng_form$46template.initReflector();
    src__directives__ng_form$46template.initReflector();
    src__directives__ng_form_control$46template.initReflector();
    src__directives__ng_form_control$46template.initReflector();
    src__directives__ng_form_model$46template.initReflector();
    src__directives__ng_form_model$46template.initReflector();
    src__directives__ng_model$46template.initReflector();
    src__directives__ng_model$46template.initReflector();
    src__directives__number_value_accessor$46template.initReflector();
    src__directives__number_value_accessor$46template.initReflector();
    src__directives__radio_control_value_accessor$46template.initReflector();
    src__directives__radio_control_value_accessor$46template.initReflector();
    src__directives__select_control_value_accessor$46template.initReflector();
    src__directives__select_control_value_accessor$46template.initReflector();
    src__directives__shared$46template.initReflector();
    src__directives__validators$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.fn(src__directives$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives.template.ddc", {
    "package:angular_forms/src/directives.template.dart": src__directives$46template
  }, '{"version":3,"sourceRoot":"","sources":["directives.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmDI,mCAAQ;YAAG;;;;;AAEb,kBAAI,mCAAQ,GAAE;AACZ;;AAEF,0CAAW;AAEX,IAAM,oEAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAO,0DAAa;AACpB,IAAO,yDAAa;AACpB,IAAO,yDAAa;AACpB,IAAO,2DAAa;AACpB,IAAO,iDAAa;AACpB,IAAO,iDAAa;AACpB,IAAO,yDAAa;AACpB,IAAO,yDAAa;AACpB,IAAO,uDAAa;AACpB,IAAO,uDAAa;AACpB,IAAO,kDAAa;AACpB,IAAO,kDAAa;AACpB,IAAO,+DAAa;AACpB,IAAO,+DAAa;AACpB,IAAO,sEAAa;AACpB,IAAO,sEAAa;AACpB,IAAO,uEAAa;AACpB,IAAO,uEAAa;AACpB,IAAO,gDAAa;AACpB,IAAO,oDAAa;AACpB,IAAO,oDAAa;EACtB","file":"directives.template.ddc.js"}');
  // Exports:
  return {
    src__directives$46template: src__directives$46template
  };
});

//# sourceMappingURL=directives.template.ddc.js.map
