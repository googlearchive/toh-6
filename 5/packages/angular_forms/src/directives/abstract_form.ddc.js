define(['dart_sdk', 'packages/angular_forms/src/directives/validators', 'packages/angular_forms/src/directives/control_container'], function(dart_sdk, validators, control_container) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model = validators.src__model;
  const src__directives__control_container = control_container.src__directives__control_container;
  const src__directives__form_interface = control_container.src__directives__form_interface;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__directives__ng_control_group = control_container.src__directives__ng_control_group;
  const _root = Object.create(null);
  const src__directives__abstract_form = Object.create(_root);
  let StreamControllerOfControlGroup = () => (StreamControllerOfControlGroup = dart.constFn(async.StreamController$(src__model.ControlGroup)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const _ngSubmit = Symbol('_ngSubmit');
  const _ngBeforeSubmit = Symbol('_ngBeforeSubmit');
  src__directives__abstract_form.AbstractForm = class AbstractForm extends src__directives__control_container.ControlContainer {
    get ngSubmit() {
      return this[_ngSubmit].stream;
    }
    get ngBeforeSubmit() {
      return this[_ngBeforeSubmit].stream;
    }
    onSubmit(event) {
      this[_ngBeforeSubmit].add(this.form);
      this[_ngSubmit].add(this.form);
      event == null ? null : event.preventDefault();
    }
    get formDirective() {
      return this;
    }
    get control() {
      return this.form;
    }
    get path() {
      return JSArrayOfString().of([]);
    }
    getControl(dir) {
      return src__model.Control.as((() => {
        let t = this.form;
        return t == null ? null : t.findPath(dir.path);
      })());
    }
    getControlGroup(dir) {
      return src__model.ControlGroup.as((() => {
        let t = this.form;
        return t == null ? null : t.findPath(dir.path);
      })());
    }
    updateModel(dir, value) {
      let ctrl = this.getControl(dir);
      ctrl == null ? null : ctrl.updateValue(value);
    }
  };
  (src__directives__abstract_form.AbstractForm.new = function() {
    this[_ngSubmit] = StreamControllerOfControlGroup().broadcast({sync: true});
    this[_ngBeforeSubmit] = StreamControllerOfControlGroup().broadcast({sync: true});
    src__directives__abstract_form.AbstractForm.__proto__.new.call(this);
  }).prototype = src__directives__abstract_form.AbstractForm.prototype;
  dart.addTypeTests(src__directives__abstract_form.AbstractForm);
  src__directives__abstract_form.AbstractForm[dart.implements] = () => [src__directives__form_interface.Form];
  dart.setMethodSignature(src__directives__abstract_form.AbstractForm, () => ({
    __proto__: dart.getMethods(src__directives__abstract_form.AbstractForm.__proto__),
    onSubmit: dart.fnType(dart.void, [html.Event]),
    getControl: dart.fnType(src__model.Control, [src__directives__ng_control.NgControl]),
    getControlGroup: dart.fnType(src__model.ControlGroup, [src__directives__ng_control_group.NgControlGroup]),
    updateModel: dart.fnType(dart.void, [src__directives__ng_control.NgControl, dart.dynamic])
  }));
  dart.setGetterSignature(src__directives__abstract_form.AbstractForm, () => ({
    __proto__: dart.getGetters(src__directives__abstract_form.AbstractForm.__proto__),
    ngSubmit: dart.fnType(async.Stream$(src__model.ControlGroup), []),
    ngBeforeSubmit: dart.fnType(async.Stream$(src__model.ControlGroup), []),
    formDirective: dart.fnType(src__directives__form_interface.Form, []),
    control: dart.fnType(src__model.ControlGroup, []),
    path: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__directives__abstract_form.AbstractForm, () => ({
    __proto__: dart.getFields(src__directives__abstract_form.AbstractForm.__proto__),
    [_ngSubmit]: dart.finalFieldType(StreamControllerOfControlGroup()),
    [_ngBeforeSubmit]: dart.finalFieldType(StreamControllerOfControlGroup())
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/abstract_form.ddc", {
    "package:angular_forms/src/directives/abstract_form.dart": src__directives__abstract_form
  }, '{"version":3,"sourceRoot":"","sources":["abstract_form.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;YAqBuC,gBAAS,OAAO;;;YAOV,sBAAe,OAAO;;aAGnD,KAAW;AACvB,2BAAe,IAAI,CAAC,SAAI;AACxB,qBAAS,IAAI,CAAC,SAAI;AAClB,WAAK,kBAAL,KAAK,eAAgB;IACvB;;YAG0B;IAAI;;YAGF,UAAI;;;YAGP;IAAE;eAGR,GAAa;;gBAAK,SAAI;6CAAW,GAAG,KAAK;;IAAY;oBAG3C,GAAkB;;gBAC1C,SAAI;6CAAW,GAAG,KAAK;;IAAkB;gBAG7B,GAAa,EAAE,KAAa;AAC3C,UAAI,OAAO,eAAU,CAAC,GAAG;AACzB,UAAI,kBAAJ,IAAI,YAAa,CAAC,KAAK;IACzB;;;IA5CM,eAAS,GAAG,AAAI,0CAAwC,QAAO;IAC/D,qBAAe,GACjB,AAAI,0CAAwC,QAAO;;EA2CzD","file":"abstract_form.ddc.js"}');
  // Exports:
  return {
    src__directives__abstract_form: src__directives__abstract_form
  };
});

//# sourceMappingURL=abstract_form.ddc.js.map
