define(['dart_sdk', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular/src/di/providers'], function(dart_sdk, control_value_accessor, providers) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const src__directives__number_value_accessor = Object.create(_root);
  let ExistingProviderOfControlValueAccessor = () => (ExistingProviderOfControlValueAccessor = dart.constFn(src__di__providers.ExistingProvider$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  dart.defineLazy(src__directives__number_value_accessor, {
    /*src__directives__number_value_accessor.NUMBER_VALUE_ACCESSOR*/get NUMBER_VALUE_ACCESSOR() {
      return dart.const(ExistingProviderOfControlValueAccessor().forToken(src__directives__control_value_accessor.NG_VALUE_ACCESSOR, dart.wrapType(src__directives__number_value_accessor.NumberValueAccessor)));
    }
  });
  src__directives__number_value_accessor._SimpleChangeFn = dart.typedef('_SimpleChangeFn', () => dart.fnType(dart.dynamic, [dart.dynamic]));
  const _element = Symbol('_element');
  src__directives__number_value_accessor.NumberValueAccessor = class NumberValueAccessor extends core.Object {
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
      let elm = html.InputElement._check(this[_element]);
      elm.value = dart.str`${value}`;
    }
    registerOnChange(fn) {
      this.onChange = dart.fn(value => {
        dart.dcall(fn, dart.equals(value, '') ? null : core.double.parse(core.String._check(value)));
      }, dynamicToNull());
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
  };
  (src__directives__number_value_accessor.NumberValueAccessor.new = function(element) {
    this[onChange] = dart.fn(_ => {
    }, dynamicToNull());
    this[onTouched] = dart.fn(() => {
    }, VoidToNull());
    this[_element] = element;
  }).prototype = src__directives__number_value_accessor.NumberValueAccessor.prototype;
  dart.addTypeTests(src__directives__number_value_accessor.NumberValueAccessor);
  const onChange = Symbol("NumberValueAccessor.onChange");
  const onTouched = Symbol("NumberValueAccessor.onTouched");
  src__directives__number_value_accessor.NumberValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor];
  dart.setMethodSignature(src__directives__number_value_accessor.NumberValueAccessor, () => ({
    __proto__: dart.getMethods(src__directives__number_value_accessor.NumberValueAccessor.__proto__),
    touchHandler: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()])
  }));
  dart.setFieldSignature(src__directives__number_value_accessor.NumberValueAccessor, () => ({
    __proto__: dart.getFields(src__directives__number_value_accessor.NumberValueAccessor.__proto__),
    [_element]: dart.finalFieldType(html.HtmlElement),
    onChange: dart.fieldType(dynamicTodynamic()),
    onTouched: dart.fieldType(VoidTodynamic())
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/number_value_accessor.ddc", {
    "package:angular_forms/src/directives/number_value_accessor.dart": src__directives__number_value_accessor
  }, '{"version":3,"sourceRoot":"","sources":["number_value_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAOM,4DAAqB;YAAG,YAAM,iDAAyB,CAC3D,yDAAiB,EACjB,yEAAmB;;;;;;IA0BH;;;;;;;AAEd,oBAAS;IACX;IAEc;;;;;;eAGE,KAAK;AACnB,UAAa,+BAAM,cAAQ;AAC3B,SAAG,MAAM,GAAG,WAAE,KAAK;IACrB;qBAGsB,EAAiB;AACrC,mBAAQ,GAAG,QAAC,KAAK;AAEf,qBAAE,cAAC,KAAK,EAAI,MAAK,OAAO,WAAM,MAAM,oBAAC,KAAK;;IAE9C;sBAGuB,EAAgB;AACrC,oBAAS,GAAG,EAAE;IAChB;;6EAlByB,OAAQ;IANjB,cAAQ,GAAG,QAAC,CAAC;;IAKf,eAAS,GAAG;;IACD,cAAQ,GAAR,OAAQ;EAAC","file":"number_value_accessor.ddc.js"}');
  // Exports:
  return {
    src__directives__number_value_accessor: src__directives__number_value_accessor
  };
});

//# sourceMappingURL=number_value_accessor.ddc.js.map
