define(['dart_sdk', 'packages/angular_forms/src/directives/control_container', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_forms/src/directives/validators'], function(dart_sdk, control_container, lifecycle_hooks, validators) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__shared = control_container.src__directives__shared;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__directives__form_interface = control_container.src__directives__form_interface;
  const src__directives__control_container = control_container.src__directives__control_container;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__model = validators.src__model;
  const _root = Object.create(null);
  const src__directives__ng_control_name = Object.create(_root);
  const _parent = Symbol('_parent');
  const _update = Symbol('_update');
  const _modelChanged = Symbol('_modelChanged');
  const _model = Symbol('_model');
  const _added = Symbol('_added');
  src__directives__ng_control_name.NgControlName = class NgControlName extends src__directives__ng_control.NgControl {
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
    set name(value) {
      super.name = value;
    }
    get name() {
      return super.name;
    }
    get update() {
      return this[_update].stream;
    }
    ngAfterChanges() {
      if (!dart.test(this[_added])) {
        this.formDirective.addControl(this);
        this[_added] = true;
      }
      if (dart.test(this[_modelChanged])) {
        this[_modelChanged] = false;
        if (!core.identical(this[_model], this.viewModel)) {
          this.viewModel = this[_model];
          this.formDirective.updateModel(this, this[_model]);
        }
      }
    }
    ngOnDestroy() {
      this.formDirective.removeControl(this);
    }
    viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this[_update].add(newValue);
    }
    get path() {
      return src__directives__shared.controlPath(this.name, this[_parent]);
    }
    get formDirective() {
      return this[_parent].formDirective;
    }
    get control() {
      return this.formDirective.getControl(this);
    }
  };
  (src__directives__ng_control_name.NgControlName.new = function(parent, validators, valueAccessors) {
    this[_update] = async.StreamController.broadcast();
    this[_modelChanged] = false;
    this[_model] = null;
    this[viewModel] = null;
    this[_added] = false;
    this[_parent] = parent;
    src__directives__ng_control_name.NgControlName.__proto__.new.call(this, valueAccessors, validators);
  }).prototype = src__directives__ng_control_name.NgControlName.prototype;
  dart.addTypeTests(src__directives__ng_control_name.NgControlName);
  const viewModel = Symbol("NgControlName.viewModel");
  src__directives__ng_control_name.NgControlName[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterChanges, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__ng_control_name.NgControlName, () => ({
    __proto__: dart.getMethods(src__directives__ng_control_name.NgControlName.__proto__),
    ngAfterChanges: dart.fnType(dart.dynamic, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    viewToModelUpdate: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__directives__ng_control_name.NgControlName, () => ({
    __proto__: dart.getGetters(src__directives__ng_control_name.NgControlName.__proto__),
    model: dart.fnType(dart.dynamic, []),
    update: dart.fnType(async.Stream, []),
    path: dart.fnType(core.List$(core.String), []),
    formDirective: dart.fnType(src__directives__form_interface.Form, []),
    control: dart.fnType(src__model.Control, [])
  }));
  dart.setSetterSignature(src__directives__ng_control_name.NgControlName, () => ({
    __proto__: dart.getSetters(src__directives__ng_control_name.NgControlName.__proto__),
    model: dart.fnType(dart.void, [dart.dynamic]),
    name: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__directives__ng_control_name.NgControlName, () => ({
    __proto__: dart.getFields(src__directives__ng_control_name.NgControlName.__proto__),
    [_parent]: dart.finalFieldType(src__directives__control_container.ControlContainer),
    [_update]: dart.finalFieldType(async.StreamController),
    [_modelChanged]: dart.fieldType(core.bool),
    [_model]: dart.fieldType(dart.dynamic),
    viewModel: dart.fieldType(dart.dynamic),
    [_added]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/ng_control_name.ddc", {
    "package:angular_forms/src/directives/ng_control_name.dart": src__directives__ng_control_name
  }, '{"version":3,"sourceRoot":"","sources":["ng_control_name.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;cAgFY,KAAa;AACrB,yBAAa,GAAG;AAChB,kBAAM,GAAG,KAAK;IAChB;;YAEqB,aAAM;;IACnB;;;;;;aAkBC,KAAY;AACnB,gBAAU,GAAG,KAAK;IACpB;;;;;YAGqB,cAAO,OAAO;;;AAIjC,qBAAK,YAAM,GAAE;AACX,0BAAa,WAAW,CAAC;AACzB,oBAAM,GAAG;;AAEX,oBAAI,mBAAa,GAAE;AACjB,2BAAa,GAAG;AAChB,aAAK,eAAU,YAAM,EAAE,cAAS,GAAG;AACjC,wBAAS,GAAG,YAAM;AAClB,4BAAa,YAAY,CAAC,MAAM,YAAM;;;IAG5C;;AAIE,wBAAa,cAAc,CAAC;IAC9B;sBAGuB,QAAgB;AACrC,oBAAS,GAAG,QAAQ;AACpB,mBAAO,IAAI,CAAC,QAAQ;IACtB;;YAGyB,oCAAW,CAAC,SAAI,EAAE,aAAO;IAAC;;YAEzB,cAAO,cAAc;;;YAGxB,mBAAa,WAAW,CAAC;IAAK;;iEApDxC,MAAO,EAChB,UAGmB,EACnB,cAG6C;IAvB3C,aAAO,GAAG,AAAI,gCAA0B;IACzC,mBAAa,GAAG;IACb,YAAM;IAQN,eAAS;IACb,YAAM,GAAG;IAIA,aAAO,GAAP,MAAO;AASd,4EAAM,cAAc,EAAE,UAAU;EAAC","file":"ng_control_name.ddc.js"}');
  // Exports:
  return {
    src__directives__ng_control_name: src__directives__ng_control_name
  };
});

//# sourceMappingURL=ng_control_name.ddc.js.map
