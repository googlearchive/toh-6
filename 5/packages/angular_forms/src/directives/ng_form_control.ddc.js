define(['dart_sdk', 'packages/angular_forms/src/directives/control_container', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_forms/src/directives/validators'], function(dart_sdk, control_container, lifecycle_hooks, validators) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__shared = control_container.src__directives__shared;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__model = validators.src__model;
  const _root = Object.create(null);
  const src__directives__ng_form_control = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const _formChanged = Symbol('_formChanged');
  const _form = Symbol('_form');
  const _update = Symbol('_update');
  const _modelChanged = Symbol('_modelChanged');
  const _model = Symbol('_model');
  src__directives__ng_form_control.NgFormControl = class NgFormControl extends src__directives__ng_control.NgControl {
    set form(value) {
      this[_form] = value;
      this[_formChanged] = true;
    }
    get form() {
      return this[_form];
    }
    set model(value) {
      this[_modelChanged] = true;
      this[_model] = value;
    }
    get model() {
      return this[_model];
    }
    get viewModel() {
      return this[viewModel];
    }
    set viewModel(value) {
      this[viewModel] = value;
    }
    get update() {
      return this[_update].stream;
    }
    ngAfterChanges() {
      if (dart.test(this[_formChanged])) {
        this[_formChanged] = false;
        src__directives__shared.setUpControl(this.form, this);
        this.form.updateValueAndValidity({emitEvent: false});
      }
      if (dart.test(this[_modelChanged])) {
        this[_modelChanged] = false;
        if (!core.identical(this[_model], this.viewModel)) {
          this.form.updateValue(this.model);
          this.viewModel = this.model;
        }
      }
    }
    get path() {
      return JSArrayOfString().of([]);
    }
    get control() {
      return this.form;
    }
    viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this[_update].add(newValue);
    }
  };
  (src__directives__ng_form_control.NgFormControl.new = function(validators, valueAccessors) {
    this[_formChanged] = false;
    this[_form] = null;
    this[_update] = async.StreamController.broadcast();
    this[_modelChanged] = false;
    this[_model] = null;
    this[viewModel] = null;
    src__directives__ng_form_control.NgFormControl.__proto__.new.call(this, valueAccessors, validators);
  }).prototype = src__directives__ng_form_control.NgFormControl.prototype;
  dart.addTypeTests(src__directives__ng_form_control.NgFormControl);
  const viewModel = Symbol("NgFormControl.viewModel");
  src__directives__ng_form_control.NgFormControl[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(src__directives__ng_form_control.NgFormControl, () => ({
    __proto__: dart.getMethods(src__directives__ng_form_control.NgFormControl.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    viewToModelUpdate: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__directives__ng_form_control.NgFormControl, () => ({
    __proto__: dart.getGetters(src__directives__ng_form_control.NgFormControl.__proto__),
    form: dart.fnType(src__model.Control, []),
    model: dart.fnType(dart.dynamic, []),
    update: dart.fnType(async.Stream, []),
    path: dart.fnType(core.List$(core.String), []),
    control: dart.fnType(src__model.Control, [])
  }));
  dart.setSetterSignature(src__directives__ng_form_control.NgFormControl, () => ({
    __proto__: dart.getSetters(src__directives__ng_form_control.NgFormControl.__proto__),
    form: dart.fnType(dart.void, [src__model.Control]),
    model: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__directives__ng_form_control.NgFormControl, () => ({
    __proto__: dart.getFields(src__directives__ng_form_control.NgFormControl.__proto__),
    [_formChanged]: dart.fieldType(core.bool),
    [_form]: dart.fieldType(src__model.Control),
    [_update]: dart.finalFieldType(async.StreamController),
    [_modelChanged]: dart.fieldType(core.bool),
    [_model]: dart.fieldType(dart.dynamic),
    viewModel: dart.fieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/ng_form_control.ddc", {
    "package:angular_forms/src/directives/ng_form_control.dart": src__directives__ng_form_control
  }, '{"version":3,"sourceRoot":"","sources":["ng_form_control.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;aAqEW,KAAa;AACpB,iBAAK,GAAG,KAAK;AACb,wBAAY,GAAG;IACjB;;YAEoB,YAAK;;cAKf,KAAa;AACrB,yBAAa,GAAG;AAChB,kBAAM,GAAG,KAAK;IAChB;;YAEqB,aAAM;;IACnB;;;;;;;YAca,cAAO,OAAO;;;AAIjC,oBAAI,kBAAY,GAAE;AAChB,0BAAY,GAAG;AACf,4CAAY,CAAC,SAAI,EAAE;AACnB,iBAAI,uBAAuB,aAAY;;AAEzC,oBAAI,mBAAa,GAAE;AACjB,2BAAa,GAAG;AAChB,aAAK,eAAU,YAAM,EAAE,cAAS,GAAG;AACjC,mBAAI,YAAY,CAAC,UAAK;AACtB,wBAAS,GAAG,UAAK;;;IAGvB;;YAGyB;IAAE;;YAGJ,UAAI;;sBAGJ,QAAgB;AACrC,oBAAS,GAAG,QAAQ;AACpB,mBAAO,IAAI,CAAC,QAAQ;IACtB;;iEAvCI,UAGmB,EACnB,cAG6C;IA7B5C,kBAAY,GAAG;IACZ,WAAK;IAQP,aAAO,GAAG,AAAI,gCAA0B;IACzC,mBAAa,GAAG;IACb,YAAM;IAQN,eAAS;AAWX,4EAAM,cAAc,EAAE,UAAU;EAAC","file":"ng_form_control.ddc.js"}');
  // Exports:
  return {
    src__directives__ng_form_control: src__directives__ng_form_control
  };
});

//# sourceMappingURL=ng_form_control.ddc.js.map
