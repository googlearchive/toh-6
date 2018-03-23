define(['dart_sdk', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular/src/di/providers', 'packages/angular/src/facade/lang', 'packages/angular/src/core/linker/element_ref', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, control_value_accessor, providers, lang, element_ref, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__di__providers = providers.src__di__providers;
  const src__facade__lang = lang.src__facade__lang;
  const src__core__linker__element_ref = element_ref.src__core__linker__element_ref;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__directives__select_control_value_accessor = Object.create(_root);
  const $substring = dartx.substring;
  const $_get = dartx._get;
  const $split = dartx.split;
  const $toString = dartx.toString;
  const $keys = dartx.keys;
  const $_set = dartx._set;
  const $containsKey = dartx.containsKey;
  const $remove = dartx.remove;
  let ExistingProviderOfControlValueAccessor = () => (ExistingProviderOfControlValueAccessor = dart.constFn(src__di__providers.ExistingProvider$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let StringAnddynamicToString = () => (StringAnddynamicToString = dart.constFn(dart.fnType(core.String, [core.String, dart.dynamic])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__directives__select_control_value_accessor, {
    /*src__directives__select_control_value_accessor.SELECT_VALUE_ACCESSOR*/get SELECT_VALUE_ACCESSOR() {
      return dart.const(ExistingProviderOfControlValueAccessor().forToken(src__directives__control_value_accessor.NG_VALUE_ACCESSOR, dart.wrapType(src__directives__select_control_value_accessor.SelectControlValueAccessor)));
    }
  });
  src__directives__select_control_value_accessor._buildValueString = function(id, value) {
    if (id == null) return dart.str`${value}`;
    if (!dart.test(src__facade__lang.isPrimitive(value))) value = 'Object';
    let s = dart.str`${id}: ${value}`;
    if (s.length > 50) {
      s = s[$substring](0, 50);
    }
    return s;
  };
  dart.fn(src__directives__select_control_value_accessor._buildValueString, StringAnddynamicToString());
  src__directives__select_control_value_accessor._extractId = function(valueString) {
    return valueString[$split](':')[$_get](0);
  };
  dart.fn(src__directives__select_control_value_accessor._extractId, StringToString());
  const _elementRef = Symbol('_elementRef');
  const _optionMap = Symbol('_optionMap');
  const _idCounter = Symbol('_idCounter');
  const _getOptionId = Symbol('_getOptionId');
  const _getOptionValue = Symbol('_getOptionValue');
  const _registerOption = Symbol('_registerOption');
  src__directives__select_control_value_accessor.SelectControlValueAccessor = class SelectControlValueAccessor extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get onChange() {
      return this[onChange];
    }
    set onChange(value) {
      this[onChange] = value;
    }
    touchHandler() {
      this.onTouched();
    }
    get onTouched() {
      return this[onTouched];
    }
    set onTouched(value) {
      this[onTouched] = value;
    }
    writeValue(value) {
      this.value = value;
      let valueString = src__directives__select_control_value_accessor._buildValueString(this[_getOptionId](value), value);
      let elm = html.SelectElement._check(this[_elementRef].nativeElement);
      elm.value = valueString;
    }
    registerOnChange(fn) {
      this.onChange = dart.fn(valueString => {
        dart.dcall(fn, this[_getOptionValue](valueString));
      }, StringToNull());
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    [_registerOption]() {
      return (() => {
        let x = this[_idCounter];
        this[_idCounter] = dart.notNull(x) + 1;
        return x;
      })()[$toString]();
    }
    [_getOptionId](value) {
      for (let id of this[_optionMap][$keys]) {
        if (core.identical(this[_optionMap][$_get](id), value)) return id;
      }
      return null;
    }
    [_getOptionValue](valueString) {
      let value = this[_optionMap][$_get](src__directives__select_control_value_accessor._extractId(valueString));
      return value != null ? value : valueString;
    }
  };
  (src__directives__select_control_value_accessor.SelectControlValueAccessor.new = function(elementRef) {
    this[value$] = null;
    this[_optionMap] = new (IdentityMapOfString$dynamic()).new();
    this[_idCounter] = 0;
    this[onChange] = dart.fn(_ => {
    }, StringToNull());
    this[onTouched] = dart.fn(() => {
    }, VoidToNull());
    this[_elementRef] = elementRef;
  }).prototype = src__directives__select_control_value_accessor.SelectControlValueAccessor.prototype;
  dart.addTypeTests(src__directives__select_control_value_accessor.SelectControlValueAccessor);
  const value$ = Symbol("SelectControlValueAccessor.value");
  const onChange = Symbol("SelectControlValueAccessor.onChange");
  const onTouched = Symbol("SelectControlValueAccessor.onTouched");
  src__directives__select_control_value_accessor.SelectControlValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor];
  dart.setMethodSignature(src__directives__select_control_value_accessor.SelectControlValueAccessor, () => ({
    __proto__: dart.getMethods(src__directives__select_control_value_accessor.SelectControlValueAccessor.__proto__),
    touchHandler: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamicTodynamic()]),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()]),
    [_registerOption]: dart.fnType(core.String, []),
    [_getOptionId]: dart.fnType(core.String, [dart.dynamic]),
    [_getOptionValue]: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setFieldSignature(src__directives__select_control_value_accessor.SelectControlValueAccessor, () => ({
    __proto__: dart.getFields(src__directives__select_control_value_accessor.SelectControlValueAccessor.__proto__),
    [_elementRef]: dart.finalFieldType(src__core__linker__element_ref.ElementRef),
    value: dart.fieldType(dart.dynamic),
    [_optionMap]: dart.finalFieldType(MapOfString$dynamic()),
    [_idCounter]: dart.fieldType(core.num),
    onChange: dart.fieldType(StringTovoid()),
    onTouched: dart.fieldType(VoidTovoid())
  }));
  const _element = Symbol('_element');
  const _select = Symbol('_select');
  const _setElementValue = Symbol('_setElementValue');
  src__directives__select_control_value_accessor.NgSelectOption = class NgSelectOption extends core.Object {
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    set ngValue(value) {
      if (this[_select] == null) return;
      this[_select][_optionMap][$_set](this.id, value);
      this[_setElementValue](src__directives__select_control_value_accessor._buildValueString(this.id, value));
      this[_select].writeValue(this[_select].value);
    }
    set value(value) {
      this[_setElementValue](core.String._check(value));
      if (this[_select] != null) this[_select].writeValue(this[_select].value);
    }
    [_setElementValue](value) {
      let elm = html.OptionElement._check(this[_element].nativeElement);
      elm.value = value;
    }
    ngOnDestroy() {
      if (this[_select] != null) {
        dart.test(this[_select][_optionMap][$containsKey](this.id)) && (this[_select][_optionMap][$remove](this.id) != null || true);
        this[_select].writeValue(this[_select].value);
      }
    }
  };
  (src__directives__select_control_value_accessor.NgSelectOption.new = function(element, select) {
    this[id] = null;
    this[_element] = element;
    this[_select] = select;
    if (this[_select] != null) this.id = this[_select][_registerOption]();
  }).prototype = src__directives__select_control_value_accessor.NgSelectOption.prototype;
  dart.addTypeTests(src__directives__select_control_value_accessor.NgSelectOption);
  const id = Symbol("NgSelectOption.id");
  src__directives__select_control_value_accessor.NgSelectOption[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__select_control_value_accessor.NgSelectOption, () => ({
    __proto__: dart.getMethods(src__directives__select_control_value_accessor.NgSelectOption.__proto__),
    [_setElementValue]: dart.fnType(dart.void, [core.String]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__directives__select_control_value_accessor.NgSelectOption, () => ({
    __proto__: dart.getSetters(src__directives__select_control_value_accessor.NgSelectOption.__proto__),
    ngValue: dart.fnType(dart.void, [dart.dynamic]),
    value: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__directives__select_control_value_accessor.NgSelectOption, () => ({
    __proto__: dart.getFields(src__directives__select_control_value_accessor.NgSelectOption.__proto__),
    [_element]: dart.finalFieldType(src__core__linker__element_ref.ElementRef),
    [_select]: dart.fieldType(src__directives__select_control_value_accessor.SelectControlValueAccessor),
    id: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/select_control_value_accessor.ddc", {
    "package:angular_forms/src/directives/select_control_value_accessor.dart": src__directives__select_control_value_accessor
  }, '{"version":3,"sourceRoot":"","sources":["select_control_value_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAQM,oEAAqB;YAAG,YAAM,iDAAyB,CAC3D,yDAAiB,EACjB,wFAA0B;;;8EAGH,EAAS,EAAE,KAAa;AAC/C,QAAI,EAAE,IAAI,MAAM,MAAO,YAAE,KAAK;AAC9B,mBAAK,6BAAW,CAAC,KAAK,IAAG,KAAK,GAAG;AACjC,QAAI,IAAI,WAAE,EAAE,KAAG,KAAK;AAEpB,QAAI,AAAS,CAAR,OAAO,GAAG,IAAI;AACjB,OAAC,GAAG,CAAC,YAAU,CAAC,GAAG;;AAErB,UAAO,EAAC;EACV;;uEAEkB,WAAkB;UAAK,YAAW,QAAM,CAAC,YAAK;EAAE;;;;;;;;;IAqBxD;;;;;;IAIoB;;;;;;;AAG1B,oBAAS;IACX;IAEgB;;;;;;eAIA,KAAa;AAC3B,gBAAU,GAAG,KAAK;AAClB,UAAI,cAAc,gEAAiB,CAAC,kBAAY,CAAC,KAAK,GAAG,KAAK;AAC9D,UAAc,gCAAM,iBAAW,cAAc;AAC7C,SAAG,MAAM,GAAG,WAAW;IACzB;qBAGsB,EAAyB;AAC7C,mBAAQ,GAAG,QAAC,WAAkB;AAC5B,qBAAE,EAAC,qBAAe,CAAC,WAAW;;IAElC;sBAGuB,EAAY;AACjC,oBAAS,GAAG,EAAE;IAChB;;YAE4B;gBAAC,gBAAU;6CA9EzC;;qBA8EqD;IAAE;mBAEjC,KAAa;AAC/B,eAAS,KAAM,iBAAU,OAAK,EAAE;AAC9B,YAAI,eAAU,gBAAU,QAAC,EAAE,GAAG,KAAK,GAAG,MAAO,GAAE;;AAEjD,YAAO;IACT;sBAEwB,WAAkB;AACxC,UAAI,QAAQ,gBAAU,QAAC,yDAAU,CAAC,WAAW;AAC7C,YAAO,MAAK,WAAL,KAAK,GAAI,WAAW;IAC7B;;4FAlCgC,UAAW;IAXnC,YAAK;IACc,gBAAU,GAAG;IACpC,gBAAU,GAAG;IAEW,cAAQ,GAAG,QAAC,CAAC;;IAMzB,eAAS,GAAG;;IACI,iBAAW,GAAX,UAAW;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoDrC;;;;;;gBAMK,KAAa;AACvB,UAAI,aAAO,IAAI,MAAM;AACrB,mBAAO,YAAW,QAAC,OAAE,EAAI,KAAK;AAC9B,4BAAgB,CAAC,gEAAiB,CAAC,OAAE,EAAE,KAAK;AAC5C,mBAAO,WAAW,CAAC,aAAO,MAAM;IAClC;cAGU,KAAa;AACrB,4BAAgB,oBAAC,KAAK;AACtB,UAAI,aAAO,IAAI,MAAM,aAAO,WAAW,CAAC,aAAO,MAAM;IACvD;uBAEsB,KAAY;AAChC,UAAc,gCAAM,cAAQ,cAAc;AAC1C,SAAG,MAAM,GAAG,KAAK;IACnB;;AAIE,UAAI,aAAO,IAAI,MAAM;AACnB,QAAoC,UAAnC,aAAO,YAAW,cAAY,CAAC,OAAE,OAC7B,aAAO,YAAW,SAAO,CAAC,OAAE,KAAK,QAAQ;AAC9C,qBAAO,WAAW,CAAC,aAAO,MAAM;;IAEpC;;gFA9BoB,OAAQ,EAA2B,MAAO;IADvD,QAAE;IACW,cAAQ,GAAR,OAAQ;IAA2B,aAAO,GAAP,MAAO;AAC5D,QAAI,aAAO,IAAI,MAAM,OAAE,GAAG,aAAO,iBAAgB;EACnD","file":"select_control_value_accessor.ddc.js"}');
  // Exports:
  return {
    src__directives__select_control_value_accessor: src__directives__select_control_value_accessor
  };
});

//# sourceMappingURL=select_control_value_accessor.ddc.js.map
