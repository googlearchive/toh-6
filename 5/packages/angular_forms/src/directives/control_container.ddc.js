define(['dart_sdk', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular/src/di/providers', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/di/injector/empty', 'packages/angular_forms/src/directives/validators', 'packages/angular_forms/src/directives/abstract_control_directive', 'packages/angular_forms/src/directives/normalize_validator', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/checkbox_value_accessor', 'packages/angular_forms/src/directives/number_value_accessor', 'packages/angular_forms/src/directives/select_control_value_accessor'], function(dart_sdk, control_value_accessor, providers, lifecycle_hooks, empty, validators, abstract_control_directive, normalize_validator, default_value_accessor, checkbox_value_accessor, number_value_accessor, select_control_value_accessor) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const js_util = dart_sdk.js_util;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__di__providers = providers.src__di__providers;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__model = validators.src__model;
  const src__validators = validators.src__validators;
  const src__directives__abstract_control_directive = abstract_control_directive.src__directives__abstract_control_directive;
  const src__directives__normalize_validator = normalize_validator.src__directives__normalize_validator;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__checkbox_value_accessor = checkbox_value_accessor.src__directives__checkbox_value_accessor;
  const src__directives__number_value_accessor = number_value_accessor.src__directives__number_value_accessor;
  const src__directives__select_control_value_accessor = select_control_value_accessor.src__directives__select_control_value_accessor;
  const _root = Object.create(null);
  const src__directives__radio_control_value_accessor = Object.create(_root);
  const src__directives__ng_control_group = Object.create(_root);
  const src__directives__ng_control = Object.create(_root);
  const src__directives__form_interface = Object.create(_root);
  const src__directives__control_container = Object.create(_root);
  const src__directives__shared = Object.create(_root);
  const $add = dartx.add;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $removeAt = dartx.removeAt;
  const $toList = dartx.toList;
  const $join = dartx.join;
  const $map = dartx.map;
  const $containsKey = dartx.containsKey;
  let ExistingProviderOfControlValueAccessor = () => (ExistingProviderOfControlValueAccessor = dart.constFn(src__di__providers.ExistingProvider$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let AbstractControlToMapOfString$dynamic = () => (AbstractControlToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [src__model.AbstractControl])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let StringAndControlContainerToListOfString = () => (StringAndControlContainerToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.String, src__directives__control_container.ControlContainer])))();
  let JSArrayOfAbstractControlToMapOfString$dynamic = () => (JSArrayOfAbstractControlToMapOfString$dynamic = dart.constFn(_interceptors.JSArray$(AbstractControlToMapOfString$dynamic())))();
  let dynamic__ToNull = () => (dynamic__ToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic], {rawValue: core.String})))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let ControlAndNgControlTovoid = () => (ControlAndNgControlTovoid = dart.constFn(dart.fnType(dart.void, [src__model.Control, src__directives__ng_control.NgControl])))();
  let ControlGroupAndNgControlGroupTovoid = () => (ControlGroupAndNgControlGroupTovoid = dart.constFn(dart.fnType(dart.void, [src__model.ControlGroup, src__directives__ng_control_group.NgControlGroup])))();
  let AbstractControlDirectiveOfAbstractControl = () => (AbstractControlDirectiveOfAbstractControl = dart.constFn(src__directives__abstract_control_directive.AbstractControlDirective$(src__model.AbstractControl)))();
  let AbstractControlDirectiveOfAbstractControlAndStringTovoid = () => (AbstractControlDirectiveOfAbstractControlAndStringTovoid = dart.constFn(dart.fnType(dart.void, [AbstractControlDirectiveOfAbstractControl(), core.String])))();
  let ListToFn = () => (ListToFn = dart.constFn(dart.fnType(AbstractControlToMapOfString$dynamic(), [core.List])))();
  let MapOfString$dynamicAnddynamicTobool = () => (MapOfString$dynamicAnddynamicTobool = dart.constFn(dart.fnType(core.bool, [MapOfString$dynamic(), dart.dynamic])))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessorToControlValueAccessor = () => (ListOfControlValueAccessorToControlValueAccessor = dart.constFn(dart.fnType(src__directives__control_value_accessor.ControlValueAccessor, [ListOfControlValueAccessor()])))();
  dart.defineLazy(src__directives__radio_control_value_accessor, {
    /*src__directives__radio_control_value_accessor.RADIO_VALUE_ACCESSOR*/get RADIO_VALUE_ACCESSOR() {
      return dart.const(ExistingProviderOfControlValueAccessor().forToken(src__directives__control_value_accessor.NG_VALUE_ACCESSOR, dart.wrapType(src__directives__radio_control_value_accessor.RadioControlValueAccessor)));
    }
  });
  const _accessors = Symbol('_accessors');
  const _control = Symbol('_control');
  src__directives__radio_control_value_accessor.RadioControlRegistry = class RadioControlRegistry extends core.Object {
    add(control, accessor) {
      this[_accessors][$add](JSArrayOfObject().of([control, accessor]));
    }
    remove(accessor) {
      let indexToRemove = -1;
      for (let i = 0; i < dart.notNull(this[_accessors][$length]); ++i) {
        if (core.identical(dart.dindex(this[_accessors][$_get](i), 1), accessor)) {
          indexToRemove = i;
        }
      }
      this[_accessors][$removeAt](indexToRemove);
    }
    select(accessor) {
      for (let c of this[_accessors]) {
        if (core.identical(dart.dload(dart.dload(dart.dindex(c, 0), 'control'), 'root'), accessor[_control].control.root) && !core.identical(dart.dindex(c, 1), accessor)) {
          dart.dsend(dart.dindex(c, 1), 'fireUncheck');
        }
      }
    }
  };
  (src__directives__radio_control_value_accessor.RadioControlRegistry.new = function() {
    this[_accessors] = [];
  }).prototype = src__directives__radio_control_value_accessor.RadioControlRegistry.prototype;
  dart.addTypeTests(src__directives__radio_control_value_accessor.RadioControlRegistry);
  dart.setMethodSignature(src__directives__radio_control_value_accessor.RadioControlRegistry, () => ({
    __proto__: dart.getMethods(src__directives__radio_control_value_accessor.RadioControlRegistry.__proto__),
    add: dart.fnType(dart.void, [src__directives__ng_control.NgControl, src__directives__radio_control_value_accessor.RadioControlValueAccessor]),
    remove: dart.fnType(dart.void, [src__directives__radio_control_value_accessor.RadioControlValueAccessor]),
    select: dart.fnType(dart.void, [src__directives__radio_control_value_accessor.RadioControlValueAccessor])
  }));
  dart.setFieldSignature(src__directives__radio_control_value_accessor.RadioControlRegistry, () => ({
    __proto__: dart.getFields(src__directives__radio_control_value_accessor.RadioControlRegistry.__proto__),
    [_accessors]: dart.finalFieldType(core.List)
  }));
  src__directives__radio_control_value_accessor.RadioButtonState = class RadioButtonState extends core.Object {
    get checked() {
      return this[checked$];
    }
    set checked(value) {
      this[checked$] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
  };
  (src__directives__radio_control_value_accessor.RadioButtonState.new = function(checked, value) {
    this[checked$] = checked;
    this[value$] = value;
  }).prototype = src__directives__radio_control_value_accessor.RadioButtonState.prototype;
  dart.addTypeTests(src__directives__radio_control_value_accessor.RadioButtonState);
  const checked$ = Symbol("RadioButtonState.checked");
  const value$ = Symbol("RadioButtonState.value");
  dart.setFieldSignature(src__directives__radio_control_value_accessor.RadioButtonState, () => ({
    __proto__: dart.getFields(src__directives__radio_control_value_accessor.RadioButtonState.__proto__),
    checked: dart.fieldType(core.bool),
    value: dart.fieldType(core.String)
  }));
  const _element = Symbol('_element');
  const _registry = Symbol('_registry');
  const _injector = Symbol('_injector');
  const _state = Symbol('_state');
  const _fn = Symbol('_fn');
  src__directives__radio_control_value_accessor.RadioControlValueAccessor = class RadioControlValueAccessor extends core.Object {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    changeHandler() {
      this.onChange();
    }
    touchHandler() {
      this.onTouched();
    }
    get onChange() {
      return this[onChange];
    }
    set onChange(value) {
      this[onChange] = value;
    }
    get onTouched() {
      return this[onTouched];
    }
    set onTouched(value) {
      this[onTouched] = value;
    }
    ngOnInit() {
      this[_control] = src__directives__ng_control.NgControl._check(this[_injector].get(dart.wrapType(src__directives__ng_control.NgControl)));
      this[_registry].add(this[_control], this);
    }
    ngOnDestroy() {
      this[_registry].remove(this);
    }
    writeValue(value) {
      this[_state] = src__directives__radio_control_value_accessor.RadioButtonState._check(value);
      if (dart.dtest((() => {
        let l = value == null ? null : dart.dload(value, 'checked');
        return l != null ? l : false;
      })())) {
        js_util.setProperty(this[_element], 'checked', true);
      }
    }
    registerOnChange(fn) {
      this[_fn] = fn;
      this.onChange = dart.fn(() => {
        dart.dcall(fn, new src__directives__radio_control_value_accessor.RadioButtonState.new(true, this[_state].value));
        this[_registry].select(this);
      }, VoidToNull());
    }
    fireUncheck() {
      dart.dcall(this[_fn], new src__directives__radio_control_value_accessor.RadioButtonState.new(false, this[_state].value));
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
  };
  (src__directives__radio_control_value_accessor.RadioControlValueAccessor.new = function(element, registry, injector) {
    this[_state] = null;
    this[_control] = null;
    this[name] = null;
    this[_fn] = null;
    this[onChange] = dart.fn(() => {
    }, VoidToNull());
    this[onTouched] = dart.fn(() => {
    }, VoidToNull());
    this[_element] = element;
    this[_registry] = registry;
    this[_injector] = injector;
  }).prototype = src__directives__radio_control_value_accessor.RadioControlValueAccessor.prototype;
  dart.addTypeTests(src__directives__radio_control_value_accessor.RadioControlValueAccessor);
  const name = Symbol("RadioControlValueAccessor.name");
  const onChange = Symbol("RadioControlValueAccessor.onChange");
  const onTouched = Symbol("RadioControlValueAccessor.onTouched");
  src__directives__radio_control_value_accessor.RadioControlValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor, src__core__metadata__lifecycle_hooks.OnDestroy, src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__directives__radio_control_value_accessor.RadioControlValueAccessor, () => ({
    __proto__: dart.getMethods(src__directives__radio_control_value_accessor.RadioControlValueAccessor.__proto__),
    changeHandler: dart.fnType(dart.void, []),
    touchHandler: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamicTodynamic()]),
    fireUncheck: dart.fnType(dart.void, []),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()])
  }));
  dart.setFieldSignature(src__directives__radio_control_value_accessor.RadioControlValueAccessor, () => ({
    __proto__: dart.getFields(src__directives__radio_control_value_accessor.RadioControlValueAccessor.__proto__),
    [_element]: dart.fieldType(html.HtmlElement),
    [_registry]: dart.fieldType(src__directives__radio_control_value_accessor.RadioControlRegistry),
    [_injector]: dart.fieldType(src__di__injector__injector.Injector),
    [_state]: dart.fieldType(src__directives__radio_control_value_accessor.RadioButtonState),
    [_control]: dart.fieldType(src__directives__ng_control.NgControl),
    name: dart.fieldType(core.String),
    [_fn]: dart.fieldType(core.Function),
    onChange: dart.fieldType(VoidTovoid()),
    onTouched: dart.fieldType(VoidTovoid())
  }));
  const _parent = Symbol('_parent');
  src__directives__control_container.ControlContainer = class ControlContainer extends src__directives__abstract_control_directive.AbstractControlDirective$(src__model.ControlGroup) {};
  (src__directives__control_container.ControlContainer.new = function() {
    src__directives__control_container.ControlContainer.__proto__.new.call(this);
  }).prototype = src__directives__control_container.ControlContainer.prototype;
  dart.addTypeTests(src__directives__control_container.ControlContainer);
  src__directives__ng_control_group.NgControlGroup = class NgControlGroup extends src__directives__control_container.ControlContainer {
    get validator() {
      return this[validator];
    }
    set validator(value) {
      super.validator = value;
    }
    set name(value) {
      super.name = value;
    }
    get name() {
      return super.name;
    }
    ngOnInit() {
      this.formDirective.addControlGroup(this);
    }
    ngOnDestroy() {
      this.formDirective.removeControlGroup(this);
    }
    get control() {
      return this.formDirective.getControlGroup(this);
    }
    get path() {
      return src__directives__shared.controlPath(this.name, this[_parent]);
    }
    get formDirective() {
      return this[_parent].formDirective;
    }
  };
  (src__directives__ng_control_group.NgControlGroup.new = function(parent, validators) {
    this[_parent] = parent;
    this[validator] = src__directives__shared.composeValidators(validators);
    src__directives__ng_control_group.NgControlGroup.__proto__.new.call(this);
  }).prototype = src__directives__ng_control_group.NgControlGroup.prototype;
  dart.addTypeTests(src__directives__ng_control_group.NgControlGroup);
  const validator = Symbol("NgControlGroup.validator");
  src__directives__ng_control_group.NgControlGroup[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__ng_control_group.NgControlGroup, () => ({
    __proto__: dart.getMethods(src__directives__ng_control_group.NgControlGroup.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__directives__ng_control_group.NgControlGroup, () => ({
    __proto__: dart.getGetters(src__directives__ng_control_group.NgControlGroup.__proto__),
    control: dart.fnType(src__model.ControlGroup, []),
    path: dart.fnType(core.List$(core.String), []),
    formDirective: dart.fnType(src__directives__form_interface.Form, [])
  }));
  dart.setSetterSignature(src__directives__ng_control_group.NgControlGroup, () => ({
    __proto__: dart.getSetters(src__directives__ng_control_group.NgControlGroup.__proto__),
    name: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__directives__ng_control_group.NgControlGroup, () => ({
    __proto__: dart.getFields(src__directives__ng_control_group.NgControlGroup.__proto__),
    validator: dart.finalFieldType(AbstractControlToMapOfString$dynamic()),
    [_parent]: dart.finalFieldType(src__directives__control_container.ControlContainer)
  }));
  src__directives__ng_control.NgControl = class NgControl extends src__directives__abstract_control_directive.AbstractControlDirective$(src__model.Control) {
    get valueAccessor() {
      return this[valueAccessor];
    }
    set valueAccessor(value) {
      this[valueAccessor] = value;
    }
    get validator() {
      return this[validator$];
    }
    set validator(value) {
      super.validator = value;
    }
  };
  (src__directives__ng_control.NgControl.new = function(valueAccessors, validators) {
    this[valueAccessor] = src__directives__shared.selectValueAccessor(valueAccessors);
    this[validator$] = src__directives__shared.composeValidators(validators);
    src__directives__ng_control.NgControl.__proto__.new.call(this);
  }).prototype = src__directives__ng_control.NgControl.prototype;
  dart.addTypeTests(src__directives__ng_control.NgControl);
  const valueAccessor = Symbol("NgControl.valueAccessor");
  const validator$ = Symbol("NgControl.validator");
  dart.setFieldSignature(src__directives__ng_control.NgControl, () => ({
    __proto__: dart.getFields(src__directives__ng_control.NgControl.__proto__),
    valueAccessor: dart.fieldType(src__directives__control_value_accessor.ControlValueAccessor),
    validator: dart.finalFieldType(AbstractControlToMapOfString$dynamic())
  }));
  src__directives__form_interface.Form = class Form extends core.Object {};
  (src__directives__form_interface.Form.new = function() {
  }).prototype = src__directives__form_interface.Form.prototype;
  dart.addTypeTests(src__directives__form_interface.Form);
  src__directives__shared.controlPath = function(name, parent) {
    let _ = parent.path[$toList]();
    _[$add](name);
    return _;
  };
  dart.fn(src__directives__shared.controlPath, StringAndControlContainerToListOfString());
  src__directives__shared.setUpControl = function(control, dir) {
    if (control == null) src__directives__shared._throwError(dir, 'Cannot find control');
    if (!(dir.valueAccessor != null)) dart.assertFailed('No value accessor for ' + dart.str`(${dir.path[$join](' -> ')}) or you may be missing formDirectives in ` + 'your directives list.');
    control.validator = src__validators.Validators.compose(JSArrayOfAbstractControlToMapOfString$dynamic().of([control.validator, dir.validator]));
    dir.valueAccessor.writeValue(control.value);
    dir.valueAccessor.registerOnChange(dart.fn((newValue, opts) => {
      let rawValue = opts && 'rawValue' in opts ? opts.rawValue : null;
      dir.viewToModelUpdate(newValue);
      control.updateValue(newValue, {emitModelToViewChange: false, rawValue: rawValue});
      control.markAsDirty({emitEvent: false});
    }, dynamic__ToNull()));
    control.registerOnChange(dart.fn(newValue => {
      let t = dir.valueAccessor;
      return t == null ? null : t.writeValue(newValue);
    }, dynamicTovoid()));
    dir.valueAccessor.registerOnTouched(dart.fn(() => control.markAsTouched(), VoidTovoid()));
  };
  dart.fn(src__directives__shared.setUpControl, ControlAndNgControlTovoid());
  src__directives__shared.setUpControlGroup = function(control, dir) {
    if (control == null) src__directives__shared._throwError(dir, 'Cannot find control');
    control.validator = src__validators.Validators.compose(JSArrayOfAbstractControlToMapOfString$dynamic().of([control.validator, dir.validator]));
  };
  dart.fn(src__directives__shared.setUpControlGroup, ControlGroupAndNgControlGroupTovoid());
  src__directives__shared._throwError = function(dir, message) {
    if ((dir == null ? null : dir.path) != null) {
      message = dart.str`${message} (${dir.path[$join](" -> ")})`;
    }
    dart.throw(new core.ArgumentError.new(message));
  };
  dart.fn(src__directives__shared._throwError, AbstractControlDirectiveOfAbstractControlAndStringTovoid());
  src__directives__shared.composeValidators = function(validators) {
    return validators != null ? src__validators.Validators.compose(validators[$map](AbstractControlToMapOfString$dynamic(), src__directives__normalize_validator.normalizeValidator)[$toList]()) : null;
  };
  dart.fn(src__directives__shared.composeValidators, ListToFn());
  src__directives__shared.isPropertyUpdated = function(changes, viewModel) {
    if (!dart.test(changes[$containsKey]('model'))) return false;
    let change = changes[$_get]('model');
    return !core.identical(viewModel, dart.dload(change, 'currentValue'));
  };
  dart.fn(src__directives__shared.isPropertyUpdated, MapOfString$dynamicAnddynamicTobool());
  src__directives__shared.selectValueAccessor = function(valueAccessors) {
    if (valueAccessors == null) return null;
    let defaultAccessor = null;
    let builtinAccessor = null;
    let customAccessor = null;
    for (let v of valueAccessors) {
      if (src__directives__default_value_accessor.DefaultValueAccessor.is(v)) {
        defaultAccessor = v;
      } else if (src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.is(v) || src__directives__number_value_accessor.NumberValueAccessor.is(v) || src__directives__select_control_value_accessor.SelectControlValueAccessor.is(v) || src__directives__radio_control_value_accessor.RadioControlValueAccessor.is(v)) {
        if (builtinAccessor != null) src__directives__shared._throwError(null, 'More than one built-in value accessor matches');
        builtinAccessor = v;
      } else {
        if (customAccessor != null) src__directives__shared._throwError(null, 'More than one custom value accessor matches');
        customAccessor = v;
      }
    }
    if (customAccessor != null) return customAccessor;
    if (builtinAccessor != null) return builtinAccessor;
    if (defaultAccessor != null) return defaultAccessor;
    src__directives__shared._throwError(null, 'No valid value accessor for');
    return null;
  };
  dart.fn(src__directives__shared.selectValueAccessor, ListOfControlValueAccessorToControlValueAccessor());
  dart.trackLibraries("packages/angular_forms/src/directives/control_container.ddc", {
    "package:angular_forms/src/directives/radio_control_value_accessor.dart": src__directives__radio_control_value_accessor,
    "package:angular_forms/src/directives/ng_control_group.dart": src__directives__ng_control_group,
    "package:angular_forms/src/directives/ng_control.dart": src__directives__ng_control,
    "package:angular_forms/src/directives/form_interface.dart": src__directives__form_interface,
    "package:angular_forms/src/directives/control_container.dart": src__directives__control_container,
    "package:angular_forms/src/directives/shared.dart": src__directives__shared
  }, '{"version":3,"sourceRoot":"","sources":["radio_control_value_accessor.dart","control_container.dart","ng_control_group.dart","ng_control.dart","form_interface.dart","shared.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MASM,kEAAoB;YAAG,YAAM,iDAAyB,CAC1D,yDAAiB,EACjB,sFAAyB;;;;;;QAQhB,OAAiB,EAAE,QAAkC;AAC5D,sBAAU,MAAI,CAAC,sBAAC,OAAO,EAAE,QAAQ;IACnC;WAEY,QAAkC;AAC5C,UAAI,gBAAgB,CAAC;AACrB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,gBAAU,SAAO,GAAE,EAAE,CAAC,EAAE;AAC1C,YAAI,2BAAU,gBAAU,QAAC,CAAC,GAAE,IAAI,QAAQ,GAAG;AACzC,uBAAa,GAAG,CAAC;;;AAGrB,sBAAU,WAAS,CAAC,aAAa;IACnC;WAEY,QAAkC;AAC5C,eAAS,IAAK,iBAAU,EAAE;AACxB,YAAI,iDAAU,CAAC,EAAC,yBAAiB,QAAQ,UAAS,QAAQ,KAAK,MAC1D,2BAAU,CAAC,EAAC,IAAI,QAAQ,GAAG;AAC9B,kCAAC,EAAC;;;IAGR;;;IAtBoB,gBAAU,GAAG;EAuBnC;;;;;;;;;;;;;IAIO;;;;;;IACE;;;;;;;iFACU,OAAY,EAAE,KAAU;IAAnB,cAAO,GAAP,OAAO;IAAO,YAAK,GAAL,KAAK;EAAC;;;;;;;;;;;;;;;IAqCnC;;;;;;;AAGL,mBAAQ;IACV;;AAGE,oBAAS;IACX;IAEgB;;;;;;IACA;;;;;;;AAKd,oBAAQ,gDAAG,eAAS,IAAI,CAAC,oDAAS;AAClC,qBAAS,IAAI,CAAC,cAAQ,EAAE;IAC1B;;AAIE,qBAAS,OAAO,CAAC;IACnB;eAGgB,KAAa;AAC3B,kBAAM,yEAAG,KAAK;AACd;gBAAI,KAAK,6BAAL,KAAK;+BAAa;aAAO;AAC3B,QAAQ,mBAAW,CAAC,cAAQ,EAAE,WAAW;;IAE7C;qBAGsB,EAAqB;AACzC,eAAG,GAAG,EAAE;AACR,mBAAQ,GAAG;AACT,qBAAE,EAAC,IAAI,kEAAgB,CAAC,MAAM,YAAM,MAAM;AAC1C,uBAAS,OAAO,CAAC;;IAErB;;AAGE,0BAAG,EAAC,IAAI,kEAAgB,CAAC,OAAO,YAAM,MAAM;IAC9C;sBAGuB,EAAY;AACjC,oBAAS,GAAG,EAAE;IAChB;;0FArC+B,OAAQ,EAAO,QAAS,EAAO,QAAS;IAftD,YAAM;IACb,cAAQ;IAEX,UAAI;IACF,SAAG;IASI,cAAQ,GAAG;;IACX,eAAS,GAAG;;IACG,cAAQ,GAAR,OAAQ;IAAO,eAAS,GAAT,QAAS;IAAO,eAAS,GAAT,QAAS;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ECrF1E;;;ICmDoB;;;;;;aAST,KAAY;AACnB,gBAAU,GAAG,KAAK;IACpB;;;;;AAIE,wBAAa,gBAAgB,CAAC;IAChC;;AAIE,wBAAa,mBAAmB,CAAC;IACnC;;YAI4B,mBAAa,gBAAgB,CAAC;IAAK;;YAItC,oCAAW,CAAC,SAAI,EAAE,aAAO;IAAC;;YAIzB,cAAO,cAAc;;;mEA9Bf,MAAO,EACnC,UAA0D;IAD9B,aAAO,GAAP,MAAO;IAEjC,eAAS,GAAG,yCAAiB,CAAC,UAAU;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;ICxD1B;;;;;;IAEH;;;;;;;wDAIR,cAAyC,EAAE,UAAe;IAC9D,mBAAa,GAAG,2CAAmB,CAAC,cAAc;IAClD,gBAAS,GAAG,yCAAiB,CAAC,UAAU;;EAAC;;;;;;;;;;;ECSjD;;iDCbyB,IAAW,EAAE,MAAuB;YACzD,MAAM,KAAK,SAAO;YAAQ,IAAI;;EAAC;;kDAEjB,OAAe,EAAE,GAAa;AAC9C,QAAI,OAAO,IAAI,MAAM,mCAAW,CAAC,GAAG,EAAE;AACtC,UACI,GAAG,cAAc,IAAI,yBACrB,2BACA,YAAI,GAAG,KAAK,OAAK,CAAC,sDAClB;AACJ,WAAO,UAAU,GAAG,0BAAU,QAAQ,CAAC,oDAAC,OAAO,UAAU,EAAE,GAAG,UAAU;AACxE,OAAG,cAAc,WAAW,CAAC,OAAO,MAAM;AAE1C,OAAG,cAAc,iBAAiB,CAAC,SAAC,QAAgB;UAAU;AAC5D,SAAG,kBAAkB,CAAC,QAAQ;AAC9B,aAAO,YAAY,CAAC,QAAQ,0BACD,iBAAiB,QAAQ;AACpD,aAAO,YAAY,aAAY;;AAGjC,WAAO,iBAAiB,CACpB,QAAC,QAAgB;cAAK,GAAG,cAAc;6CAAa,QAAQ;;AAEhE,OAAG,cAAc,kBAAkB,CAAC,cAAM,OAAO,cAAc;EACjE;;uDAEuB,OAAoB,EAAE,GAAkB;AAC7D,QAAI,OAAO,IAAI,MAAM,mCAAW,CAAC,GAAG,EAAE;AACtC,WAAO,UAAU,GAAG,0BAAU,QAAQ,CAAC,oDAAC,OAAO,UAAU,EAAE,GAAG,UAAU;EAC1E;;iDAEiB,GAA4B,EAAE,OAAc;AAC3D,SAAI,GAAG,kBAAH,GAAG,KAAM,KAAI,MAAM;AACrB,aAAO,GAAG,WAAE,OAAO,KAAI,GAAG,KAAK,OAAK,CAAC;;AAEvC,eAAM,IAAI,sBAAa,CAAC,OAAO;EACjC;;uDAE8B,UAAwB;AACpD,UAAO,WAAU,IAAI,OACf,0BAAU,QACA,CAAC,UAAU,MAAI,yCAAc,uDAAkB,UAAQ,MACjE;EACR;;uDAEuB,OAA4B,EAAE,SAAiB;AACpE,mBAAK,OAAO,cAAY,CAAC,WAAU,MAAO;AAC1C,QAAI,SAAS,OAAO,QAAC;AACrB,UAAO,EAAC,eAAU,SAAS,aAAE,MAAM;EACrC;;yDAGI,cAAyC;AAC3C,QAAI,cAAc,IAAI,MAAM,MAAO;AACnC,QAAqB;AACrB,QAAqB;AACrB,QAAqB;AACrB,aAAS,IAAK,eAAc,EAAE;AAC5B,0EAAI,CAAC,GAA0B;AAC7B,uBAAe,GAAG,CAAC;YACd,8EAAI,CAAC,mEACR,CAAC,kFACD,CAAC,gFACD,CAAC,GAA+B;AAClC,YAAI,eAAe,IAAI,MACrB,mCAAW,CAAC,MAAM;AACpB,uBAAe,GAAG,CAAC;aACd;AACL,YAAI,cAAc,IAAI,MACpB,mCAAW,CAAC,MAAM;AACpB,sBAAc,GAAG,CAAC;;;AAGtB,QAAI,cAAc,IAAI,MAAM,MAAO,eAAc;AACjD,QAAI,eAAe,IAAI,MAAM,MAAO,gBAAe;AACnD,QAAI,eAAe,IAAI,MAAM,MAAO,gBAAe;AACnD,uCAAW,CAAC,MAAM;AAClB,UAAO;EACT","file":"control_container.ddc.js"}');
  // Exports:
  return {
    src__directives__radio_control_value_accessor: src__directives__radio_control_value_accessor,
    src__directives__ng_control_group: src__directives__ng_control_group,
    src__directives__ng_control: src__directives__ng_control,
    src__directives__form_interface: src__directives__form_interface,
    src__directives__control_container: src__directives__control_container,
    src__directives__shared: src__directives__shared
  };
});

//# sourceMappingURL=control_container.ddc.js.map
