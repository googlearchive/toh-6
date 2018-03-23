define(['dart_sdk', 'packages/angular_forms/src/directives/validators', 'packages/angular_forms/src/directives/control_container', 'packages/angular_forms/src/directives/abstract_form'], function(dart_sdk, validators, control_container, abstract_form) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model = validators.src__model;
  const src__directives__shared = control_container.src__directives__shared;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__directives__ng_control_group = control_container.src__directives__ng_control_group;
  const src__directives__abstract_form = abstract_form.src__directives__abstract_form;
  const _root = Object.create(null);
  const src__directives__ng_form = Object.create(_root);
  const $removeLast = dartx.removeLast;
  const $isEmpty = dartx.isEmpty;
  let IdentityMapOfString$AbstractControl = () => (IdentityMapOfString$AbstractControl = dart.constFn(_js_helper.IdentityMap$(core.String, src__model.AbstractControl)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__directives__ng_form.NgForm = class NgForm extends src__directives__abstract_form.AbstractForm {
    get form() {
      return this[form];
    }
    set form(value) {
      this[form] = value;
    }
    get controls() {
      return this.form.controls;
    }
    addControl(dir) {
      let container = this.findContainer(dir.path);
      let ctrl = new src__model.Control.new();
      container.addControl(dir.name, ctrl);
      async.scheduleMicrotask(dart.fn(() => {
        src__directives__shared.setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({emitEvent: false});
      }, VoidToNull()));
    }
    removeControl(dir) {
      async.scheduleMicrotask(dart.fn(() => {
        let container = this.findContainer(dir.path);
        if (container != null) {
          container.removeControl(dir.name);
          container.updateValueAndValidity({emitEvent: false});
        }
      }, VoidToNull()));
    }
    addControlGroup(dir) {
      let container = this.findContainer(dir.path);
      let group = new src__model.ControlGroup.new(new (IdentityMapOfString$AbstractControl()).new());
      container.addControl(dir.name, group);
      async.scheduleMicrotask(dart.fn(() => {
        src__directives__shared.setUpControlGroup(group, dir);
        group.updateValueAndValidity({emitEvent: false});
      }, VoidToNull()));
    }
    removeControlGroup(dir) {
      async.scheduleMicrotask(dart.fn(() => {
        let container = this.findContainer(dir.path);
        if (container != null) {
          container.removeControl(dir.name);
          container.updateValueAndValidity({emitEvent: false});
        }
      }, VoidToNull()));
    }
    updateModel(dir, value) {
      async.scheduleMicrotask(dart.fn(() => {
        super.updateModel(dir, value);
      }, VoidToNull()));
    }
    findContainer(path) {
      path[$removeLast]();
      return dart.test(path[$isEmpty]) ? this.form : src__model.ControlGroup.as(this.form.findPath(path));
    }
  };
  (src__directives__ng_form.NgForm.new = function(validators) {
    this[form] = null;
    src__directives__ng_form.NgForm.__proto__.new.call(this);
    this.form = new src__model.ControlGroup.new(new (IdentityMapOfString$AbstractControl()).new(), null, src__directives__shared.composeValidators(validators));
  }).prototype = src__directives__ng_form.NgForm.prototype;
  dart.addTypeTests(src__directives__ng_form.NgForm);
  const form = Symbol("NgForm.form");
  dart.setMethodSignature(src__directives__ng_form.NgForm, () => ({
    __proto__: dart.getMethods(src__directives__ng_form.NgForm.__proto__),
    addControl: dart.fnType(dart.void, [src__directives__ng_control.NgControl]),
    removeControl: dart.fnType(dart.void, [src__directives__ng_control.NgControl]),
    addControlGroup: dart.fnType(dart.void, [src__directives__ng_control_group.NgControlGroup]),
    removeControlGroup: dart.fnType(dart.void, [src__directives__ng_control_group.NgControlGroup]),
    findContainer: dart.fnType(src__model.ControlGroup, [ListOfString()])
  }));
  dart.setGetterSignature(src__directives__ng_form.NgForm, () => ({
    __proto__: dart.getGetters(src__directives__ng_form.NgForm.__proto__),
    controls: dart.fnType(core.Map$(core.String, src__model.AbstractControl), [])
  }));
  dart.setFieldSignature(src__directives__ng_form.NgForm, () => ({
    __proto__: dart.getFields(src__directives__ng_form.NgForm.__proto__),
    form: dart.fieldType(src__model.ControlGroup)
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/ng_form.ddc", {
    "package:angular_forms/src/directives/ng_form.dart": src__directives__ng_form
  }, '{"version":3,"sourceRoot":"","sources":["ng_form.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IA6Ee;;;;;;;YAMgC,UAAI,SAAS;;eAG1C,GAAa;AAC3B,UAAI,YAAY,kBAAa,CAAC,GAAG,KAAK;AACtC,UAAI,OAAO,IAAI,sBAAO;AACtB,eAAS,WAAW,CAAC,GAAG,KAAK,EAAE,IAAI;AACnC,6BAAiB,CAAC;AAChB,4CAAY,CAAC,IAAI,EAAE,GAAG;AACtB,YAAI,uBAAuB,aAAY;;IAE3C;kBAGmB,GAAa;AAC9B,6BAAiB,CAAC;AAChB,YAAI,YAAY,kBAAa,CAAC,GAAG,KAAK;AACtC,YAAI,SAAS,IAAI,MAAM;AACrB,mBAAS,cAAc,CAAC,GAAG,KAAK;AAChC,mBAAS,uBAAuB,aAAY;;;IAGlD;oBAGqB,GAAkB;AACrC,UAAI,YAAY,kBAAa,CAAC,GAAG,KAAK;AACtC,UAAI,QAAQ,IAAI,2BAAY,CAAC;AAC7B,eAAS,WAAW,CAAC,GAAG,KAAK,EAAE,KAAK;AACpC,6BAAiB,CAAC;AAChB,iDAAiB,CAAC,KAAK,EAAE,GAAG;AAC5B,aAAK,uBAAuB,aAAY;;IAE5C;uBAGwB,GAAkB;AACxC,6BAAiB,CAAC;AAChB,YAAI,YAAY,kBAAa,CAAC,GAAG,KAAK;AACtC,YAAI,SAAS,IAAI,MAAM;AACrB,mBAAS,cAAc,CAAC,GAAG,KAAK;AAChC,mBAAS,uBAAuB,aAAY;;;IAGlD;gBAGiB,GAAa,EAAE,KAAa;AAC3C,6BAAiB,CAAC;AAChB,yBAAiB,CAAC,GAAG,EAAE,KAAK;;IAEhC;kBAG2B,IAAiB;AAC1C,UAAI,aAAW;AACf,uBAAO,IAAI,UAAQ,IAAG,SAAI,8BAAI,SAAI,SAAS,CAAC,IAAI;IAClD;;kDA7DO,UAAmE;IAF7D,UAAI;;AAGf,aAAI,GAAG,IAAI,2BAAY,CAAC,mDAAI,MAAM,yCAAiB,CAAC,UAAU;EAChE","file":"ng_form.ddc.js"}');
  // Exports:
  return {
    src__directives__ng_form: src__directives__ng_form
  };
});

//# sourceMappingURL=ng_form.ddc.js.map
