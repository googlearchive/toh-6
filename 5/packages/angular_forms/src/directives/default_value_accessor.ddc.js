define(['dart_sdk', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular/src/di/providers'], function(dart_sdk, control_value_accessor, providers) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const src__directives__default_value_accessor = Object.create(_root);
  let ExistingProviderOfControlValueAccessor = () => (ExistingProviderOfControlValueAccessor = dart.constFn(src__di__providers.ExistingProvider$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamic__Tovoid = () => (dynamic__Tovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic], {rawValue: core.String})))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  dart.defineLazy(src__directives__default_value_accessor, {
    /*src__directives__default_value_accessor.DEFAULT_VALUE_ACCESSOR*/get DEFAULT_VALUE_ACCESSOR() {
      return dart.const(ExistingProviderOfControlValueAccessor().forToken(src__directives__control_value_accessor.NG_VALUE_ACCESSOR, dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor)));
    }
  });
  const _elementRef = Symbol('_elementRef');
  src__directives__default_value_accessor.DefaultValueAccessor = class DefaultValueAccessor extends core.Object {
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
      let normalizedValue = value != null ? value : '';
      js_util.setProperty(this[_elementRef], 'value', normalizedValue);
    }
    registerOnChange(fn) {
      this.onChange = dart.fn(value => {
        dart.dcall(fn, value, {rawValue: value});
      }, dynamicToNull());
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
  };
  (src__directives__default_value_accessor.DefaultValueAccessor.new = function(elementRef) {
    this[onChange] = dart.fn(_ => {
    }, dynamicToNull());
    this[onTouched] = dart.fn(() => {
    }, VoidToNull());
    this[_elementRef] = elementRef;
  }).prototype = src__directives__default_value_accessor.DefaultValueAccessor.prototype;
  dart.addTypeTests(src__directives__default_value_accessor.DefaultValueAccessor);
  const onChange = Symbol("DefaultValueAccessor.onChange");
  const onTouched = Symbol("DefaultValueAccessor.onTouched");
  src__directives__default_value_accessor.DefaultValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor];
  dart.setMethodSignature(src__directives__default_value_accessor.DefaultValueAccessor, () => ({
    __proto__: dart.getMethods(src__directives__default_value_accessor.DefaultValueAccessor.__proto__),
    touchHandler: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamic__Tovoid()]),
    registerOnTouched: dart.fnType(dart.void, [VoidTovoid()])
  }));
  dart.setFieldSignature(src__directives__default_value_accessor.DefaultValueAccessor, () => ({
    __proto__: dart.getFields(src__directives__default_value_accessor.DefaultValueAccessor.__proto__),
    [_elementRef]: dart.fieldType(html.HtmlElement),
    onChange: dart.fieldType(dynamicTovoid()),
    onTouched: dart.fieldType(VoidTovoid())
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/default_value_accessor.ddc", {
    "package:angular_forms/src/directives/default_value_accessor.dart": src__directives__default_value_accessor
  }, '{"version":3,"sourceRoot":"","sources":["default_value_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAOM,8DAAsB;YAAG,YAAM,iDAAyB,CAC5D,yDAAiB,EACjB,2EAAoB;;;;;IAyBG;;;;;;;AAGrB,oBAAS;IACX;IAEgB;;;;;;eAGA,KAAa;AAC3B,UAAI,kBAAkB,KAAK,WAAL,KAAK,GAAI;AAC/B,MAAQ,mBAAW,CAAC,iBAAW,EAAE,SAAS,eAAe;IAC3D;qBAGsB,EAAqC;AACzD,mBAAQ,GAAG,QAAC,KAAK;AACf,qBAAE,EAAC,KAAK,aAAY,KAAK;;IAE7B;sBAGuB,EAAS;AAC9B,oBAAS,GAAG,EAAE;IAChB;;+EAjB0B,UAAW;IAPd,cAAQ,GAAG,QAAC,CAAC;;IAMpB,eAAS,GAAG;;IACF,iBAAW,GAAX,UAAW;EAAC","file":"default_value_accessor.ddc.js"}');
  // Exports:
  return {
    src__directives__default_value_accessor: src__directives__default_value_accessor
  };
});

//# sourceMappingURL=default_value_accessor.ddc.js.map
