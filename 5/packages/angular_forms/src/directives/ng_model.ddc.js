define(['dart_sdk', 'packages/angular_forms/src/directives/validators', 'packages/angular_forms/src/directives/control_container', 'packages/angular/src/core/change_detection/component_state', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_forms/src/directives/control_value_accessor'], function(dart_sdk, validators, control_container, component_state, lifecycle_hooks, control_value_accessor) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model = validators.src__model;
  const src__directives__shared = control_container.src__directives__shared;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__core__change_detection__component_state = component_state.src__core__change_detection__component_state;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const _root = Object.create(null);
  const src__directives__ng_model = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  const _control = Symbol('_control');
  const _update = Symbol('_update');
  const _model = Symbol('_model');
  const _modelChanged = Symbol('_modelChanged');
  const _init = Symbol('_init');
  const NgControl_ComponentState$ = class NgControl_ComponentState extends src__directives__ng_control.NgControl {};
  (NgControl_ComponentState$.new = function(valueAccessors, validators) {
    src__core__change_detection__component_state.ComponentState.new.call(this);
    NgControl_ComponentState$.__proto__.new.call(this, valueAccessors, validators);
  }).prototype = NgControl_ComponentState$.prototype;
  dart.mixinMembers(NgControl_ComponentState$, src__core__change_detection__component_state.ComponentState);
  src__directives__ng_model.NgModel = class NgModel extends NgControl_ComponentState$ {
    set model(value) {
      if (core.identical(this[_model], value)) return;
      this[_model] = value;
      if (core.identical(value, this.viewModel)) return;
      this[_modelChanged] = true;
    }
    get viewModel() {
      return this[viewModel];
    }
    set viewModel(value) {
      this[viewModel] = value;
    }
    [_init](valueAccessors) {
      this[_control] = new src__model.Control.new();
      this[_update] = async.StreamController.broadcast({sync: true});
      return;
      return;
    }
    get update() {
      return this[_update].stream;
    }
    ngAfterChanges() {
      if (dart.test(this[_modelChanged])) {
        this[_control].updateValue(this[_model]);
        this.setState(dart.fn(() => {
          this.viewModel = this[_model];
        }, VoidToNull()));
        this[_modelChanged] = false;
      }
    }
    ngOnInit() {
      src__directives__shared.setUpControl(this[_control], this);
      this[_control].updateValueAndValidity({emitEvent: false});
    }
    get control() {
      return this[_control];
    }
    get path() {
      return JSArrayOfString().of([]);
    }
    viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this[_update].add(newValue);
    }
  };
  (src__directives__ng_model.NgModel.new = function(validators, valueAccessors) {
    this[_control] = null;
    this[_update] = null;
    this[_model] = null;
    this[_modelChanged] = false;
    this[viewModel] = null;
    src__directives__ng_model.NgModel.__proto__.new.call(this, valueAccessors, validators);
    this[_init](valueAccessors);
  }).prototype = src__directives__ng_model.NgModel.prototype;
  dart.addTypeTests(src__directives__ng_model.NgModel);
  const viewModel = Symbol("NgModel.viewModel");
  src__directives__ng_model.NgModel[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterChanges, src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__directives__ng_model.NgModel, () => ({
    __proto__: dart.getMethods(src__directives__ng_model.NgModel.__proto__),
    [_init]: dart.fnType(dart.void, [ListOfControlValueAccessor()]),
    ngAfterChanges: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.dynamic, []),
    viewToModelUpdate: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__directives__ng_model.NgModel, () => ({
    __proto__: dart.getGetters(src__directives__ng_model.NgModel.__proto__),
    update: dart.fnType(async.Stream, []),
    control: dart.fnType(src__model.Control, []),
    path: dart.fnType(core.List$(core.String), [])
  }));
  dart.setSetterSignature(src__directives__ng_model.NgModel, () => ({
    __proto__: dart.getSetters(src__directives__ng_model.NgModel.__proto__),
    model: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__directives__ng_model.NgModel, () => ({
    __proto__: dart.getFields(src__directives__ng_model.NgModel.__proto__),
    [_control]: dart.fieldType(src__model.Control),
    [_update]: dart.fieldType(async.StreamController),
    [_model]: dart.fieldType(dart.dynamic),
    [_modelChanged]: dart.fieldType(core.bool),
    viewModel: dart.fieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/ng_model.ddc", {
    "package:angular_forms/src/directives/ng_model.dart": src__directives__ng_model
  }, '{"version":3,"sourceRoot":"","sources":["ng_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAkEY,KAAa;AAGrB,UAAI,eAAU,YAAM,EAAE,KAAK,GAAG;AAC9B,kBAAM,GAAG,KAAK;AACd,UAAI,eAAU,KAAK,EAAE,cAAS,GAAG;AAIjC,yBAAa,GAAG;IAClB;IAEQ;;;;;;YAiBG,cAAyC;AAClD,oBAAQ,GAAG,IAAI,sBAAO;AACtB,mBAAO,GAAG,AAAI,gCAA0B,QAAO;AAE/C;AACA;IACF;;YAGqB,cAAO,OAAO;;;AAIjC,oBAAI,mBAAa,GAAE;AACjB,sBAAQ,YAAY,CAAC,YAAM;AAC3B,qBAAQ,CAAC;AACP,wBAAS,GAAG,YAAM;;AAEpB,2BAAa,GAAG;;IAEpB;;AAIE,0CAAY,CAAC,cAAQ,EAAE;AACvB,oBAAQ,uBAAuB,aAAY;IAC7C;;YAEuB,eAAQ;;;YAGN;IAAE;sBAGJ,QAAgB;AACrC,oBAAS,GAAG,QAAQ;AACpB,mBAAO,IAAI,CAAC,QAAQ;IACtB;;oDAnDI,UAGmB,EACnB,cAG6C;IA5BzC,cAAQ;IACC,aAAO;IAChB,YAAM;IACT,mBAAa,GAAG;IAeb,eAAS;AAWX,+DAAM,cAAc,EAAE,UAAU;AACpC,eAAK,CAAC,cAAc;EACtB","file":"ng_model.ddc.js"}');
  // Exports:
  return {
    src__directives__ng_model: src__directives__ng_model
  };
});

//# sourceMappingURL=ng_model.ddc.js.map
