define(['dart_sdk', 'packages/angular_forms/src/directives/control_container', 'packages/angular_forms/src/directives/validators', 'packages/angular_forms/src/directives/abstract_form', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, control_container, validators, abstract_form, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__shared = control_container.src__directives__shared;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__directives__ng_control_group = control_container.src__directives__ng_control_group;
  const src__model = validators.src__model;
  const src__validators = validators.src__validators;
  const src__directives__abstract_form = abstract_form.src__directives__abstract_form;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__directives__ng_form_model = Object.create(_root);
  const $add = dartx.add;
  const $remove = dartx.remove;
  let JSArrayOfNgControl = () => (JSArrayOfNgControl = dart.constFn(_interceptors.JSArray$(src__directives__ng_control.NgControl)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let AbstractControlToMapOfString$dynamic = () => (AbstractControlToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [src__model.AbstractControl])))();
  let JSArrayOfAbstractControlToMapOfString$dynamic = () => (JSArrayOfAbstractControlToMapOfString$dynamic = dart.constFn(_interceptors.JSArray$(AbstractControlToMapOfString$dynamic())))();
  let ListOfNgControl = () => (ListOfNgControl = dart.constFn(core.List$(src__directives__ng_control.NgControl)))();
  const _validator = Symbol('_validator');
  const _formChanged = Symbol('_formChanged');
  const _form = Symbol('_form');
  const _checkFormPresent = Symbol('_checkFormPresent');
  const _updateDomValue = Symbol('_updateDomValue');
  src__directives__ng_form_model.NgFormModel = class NgFormModel extends src__directives__abstract_form.AbstractForm {
    get form() {
      return this[_form];
    }
    set form(value) {
      this[_form] = value;
      this[_formChanged] = true;
    }
    get directives() {
      return this[directives];
    }
    set directives(value) {
      this[directives] = value;
    }
    ngAfterChanges() {
      this[_checkFormPresent]();
      if (dart.test(this[_formChanged])) {
        this[_formChanged] = false;
        this[_form].validator = src__validators.Validators.compose(JSArrayOfAbstractControlToMapOfString$dynamic().of([this[_form].validator, this[_validator]]));
        this[_form].updateValueAndValidity({onlySelf: true, emitEvent: false});
      }
      this[_updateDomValue]();
    }
    addControl(dir) {
      let ctrl = this.getControl(dir);
      src__directives__shared.setUpControl(ctrl, dir);
      ctrl.updateValueAndValidity({emitEvent: false});
      this.directives[$add](dir);
    }
    removeControl(dir) {
      this.directives[$remove](dir);
    }
    addControlGroup(dir) {
      let ctrl = this.form.findPath(dir.path);
      src__directives__shared.setUpControlGroup(src__model.ControlGroup._check(ctrl), dir);
      ctrl.updateValueAndValidity({emitEvent: false});
    }
    removeControlGroup(dir) {}
    [_updateDomValue]() {
      for (let dir of this.directives) {
        let ctrl = this.form.findPath(dir.path);
        dir.valueAccessor.writeValue(ctrl.value);
      }
    }
    [_checkFormPresent]() {
      if (this.form == null) {
        dart.throw(new core.StateError.new('ngFormModel expects a form. Please pass one in. Example: ' + '<form [ngFormModel]="myCoolForm">'));
      }
    }
  };
  (src__directives__ng_form_model.NgFormModel.new = function(validators) {
    this[_formChanged] = false;
    this[_form] = null;
    this[directives] = JSArrayOfNgControl().of([]);
    this[_validator] = src__directives__shared.composeValidators(validators);
    src__directives__ng_form_model.NgFormModel.__proto__.new.call(this);
  }).prototype = src__directives__ng_form_model.NgFormModel.prototype;
  dart.addTypeTests(src__directives__ng_form_model.NgFormModel);
  const directives = Symbol("NgFormModel.directives");
  src__directives__ng_form_model.NgFormModel[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(src__directives__ng_form_model.NgFormModel, () => ({
    __proto__: dart.getMethods(src__directives__ng_form_model.NgFormModel.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    addControl: dart.fnType(dart.void, [src__directives__ng_control.NgControl]),
    removeControl: dart.fnType(dart.void, [src__directives__ng_control.NgControl]),
    addControlGroup: dart.fnType(dart.void, [src__directives__ng_control_group.NgControlGroup]),
    removeControlGroup: dart.fnType(dart.void, [src__directives__ng_control_group.NgControlGroup]),
    [_updateDomValue]: dart.fnType(dart.void, []),
    [_checkFormPresent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__directives__ng_form_model.NgFormModel, () => ({
    __proto__: dart.getGetters(src__directives__ng_form_model.NgFormModel.__proto__),
    form: dart.fnType(src__model.ControlGroup, [])
  }));
  dart.setSetterSignature(src__directives__ng_form_model.NgFormModel, () => ({
    __proto__: dart.getSetters(src__directives__ng_form_model.NgFormModel.__proto__),
    form: dart.fnType(dart.void, [src__model.ControlGroup])
  }));
  dart.setFieldSignature(src__directives__ng_form_model.NgFormModel, () => ({
    __proto__: dart.getFields(src__directives__ng_form_model.NgFormModel.__proto__),
    [_validator]: dart.finalFieldType(AbstractControlToMapOfString$dynamic()),
    [_formChanged]: dart.fieldType(core.bool),
    [_form]: dart.fieldType(src__model.ControlGroup),
    directives: dart.fieldType(ListOfNgControl())
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/ng_form_model.ddc", {
    "package:angular_forms/src/directives/ng_form_model.dart": src__directives__ng_form_model
  }, '{"version":3,"sourceRoot":"","sources":["ng_form_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA+F2B,YAAK;;aAGrB,KAAkB;AACzB,iBAAK,GAAG,KAAK;AACb,wBAAY,GAAG;IACjB;IAEgB;;;;;;;AAOd,6BAAiB;AACjB,oBAAI,kBAAY,GAAE;AAChB,0BAAY,GAAG;AACf,mBAAK,UAAU,GAAG,0BAAU,QAAQ,CAAC,oDAAC,WAAK,UAAU,EAAE,gBAAU;AACjE,mBAAK,uBAAuB,YAAW,iBAAiB;;AAE1D,2BAAe;IACjB;eAGgB,GAAa;AAC3B,UAAI,OAAO,eAAU,CAAC,GAAG;AACzB,0CAAY,CAAC,IAAI,EAAE,GAAG;AACtB,UAAI,uBAAuB,aAAY;AACvC,qBAAU,MAAI,CAAC,GAAG;IACpB;kBAGmB,GAAa;AAC9B,qBAAU,SAAO,CAAC,GAAG;IACvB;oBAGqB,GAAkB;AACrC,UAAI,OAAO,SAAI,SAAS,CAAC,GAAG,KAAK;AACjC,+CAAiB,gCAAC,IAAI,GAAE,GAAG;AAC3B,UAAI,uBAAuB,aAAY;IACzC;uBAGwB,GAAkB,GAAG;;AAG3C,eAAS,MAAO,gBAAU,EAAE;AAC1B,YAAI,OAAO,SAAI,SAAS,CAAC,GAAG,KAAK;AACjC,WAAG,cAAc,WAAW,CAAC,IAAI,MAAM;;IAE3C;;AAGE,UAAI,SAAI,IAAI,MAAM;AAChB,mBAAM,IAAI,mBAAU,CAChB,8DACA;;IAER;;6DAlDY,UAA0D;IAbjE,kBAAY,GAAG;IACP,WAAK;IAUF,gBAAU,GAAG;IAGvB,gBAAU,GAAG,yCAAiB,CAAC,UAAU;;EAAC","file":"ng_form_model.ddc.js"}');
  // Exports:
  return {
    src__directives__ng_form_model: src__directives__ng_form_model
  };
});

//# sourceMappingURL=ng_form_model.ddc.js.map
