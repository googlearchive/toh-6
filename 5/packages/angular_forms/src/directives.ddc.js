define(['dart_sdk', 'packages/angular_forms/src/directives/ng_control_name', 'packages/angular_forms/src/directives/control_container', 'packages/angular_forms/src/directives/ng_form_control', 'packages/angular_forms/src/directives/ng_model', 'packages/angular_forms/src/directives/ng_form_model', 'packages/angular_forms/src/directives/ng_form', 'packages/angular_forms/src/directives/select_control_value_accessor', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/number_value_accessor', 'packages/angular_forms/src/directives/checkbox_value_accessor', 'packages/angular_forms/src/directives/validators'], function(dart_sdk, ng_control_name, control_container, ng_form_control, ng_model, ng_form_model, ng_form, select_control_value_accessor, default_value_accessor, number_value_accessor, checkbox_value_accessor, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__ng_control_name = ng_control_name.src__directives__ng_control_name;
  const src__directives__ng_control_group = control_container.src__directives__ng_control_group;
  const src__directives__radio_control_value_accessor = control_container.src__directives__radio_control_value_accessor;
  const src__directives__ng_form_control = ng_form_control.src__directives__ng_form_control;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__directives__ng_form_model = ng_form_model.src__directives__ng_form_model;
  const src__directives__ng_form = ng_form.src__directives__ng_form;
  const src__directives__select_control_value_accessor = select_control_value_accessor.src__directives__select_control_value_accessor;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__number_value_accessor = number_value_accessor.src__directives__number_value_accessor;
  const src__directives__checkbox_value_accessor = checkbox_value_accessor.src__directives__checkbox_value_accessor;
  const src__directives__validators = validators.src__directives__validators;
  const _root = Object.create(null);
  const src__directives = Object.create(_root);
  dart.defineLazy(src__directives, {
    /*src__directives.formDirectives*/get formDirectives() {
      return dart.constList([dart.wrapType(src__directives__ng_control_name.NgControlName), dart.wrapType(src__directives__ng_control_group.NgControlGroup), dart.wrapType(src__directives__ng_form_control.NgFormControl), dart.wrapType(src__directives__ng_model.NgModel), dart.wrapType(src__directives__ng_form_model.NgFormModel), dart.wrapType(src__directives__ng_form.NgForm), dart.wrapType(src__directives__select_control_value_accessor.NgSelectOption), dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor), dart.wrapType(src__directives__number_value_accessor.NumberValueAccessor), dart.wrapType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor), dart.wrapType(src__directives__select_control_value_accessor.SelectControlValueAccessor), dart.wrapType(src__directives__radio_control_value_accessor.RadioControlValueAccessor), dart.wrapType(src__directives__validators.RequiredValidator), dart.wrapType(src__directives__validators.MinLengthValidator), dart.wrapType(src__directives__validators.MaxLengthValidator), dart.wrapType(src__directives__validators.PatternValidator)], core.Type);
    }
  });
  dart.trackLibraries("packages/angular_forms/src/directives.ddc", {
    "package:angular_forms/src/directives.dart": src__directives
  }, '{"version":3,"sourceRoot":"","sources":["directives.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAoEiB,8BAAc;YAAG,iBAChC,6DAAa,EACb,+DAAc,EACd,6DAAa,EACb,gDAAO,EACP,yDAAW,EACX,8CAAM,EACN,4EAAc,EACd,2EAAoB,EACpB,yEAAmB,EACnB,oFAA4B,EAC5B,wFAA0B,EAC1B,sFAAyB,EACzB,4DAAiB,EACjB,6DAAkB,EAClB,6DAAkB,EAClB,2DAAgB","file":"directives.ddc.js"}');
  // Exports:
  return {
    src__directives: src__directives
  };
});

//# sourceMappingURL=directives.ddc.js.map
