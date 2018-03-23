define(['dart_sdk', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular/src/di/providers'], function(dart_sdk, control_value_accessor, providers) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const src__directives__checkbox_value_accessor = Object.create(_root);
  let ExistingProviderOfControlValueAccessor = () => (ExistingProviderOfControlValueAccessor = dart.constFn(src__di__providers.ExistingProvider$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let dynamic__ToNull = () => (dynamic__ToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic], {rawValue: core.String})))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {rawValue: core.String})))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  dart.defineLazy(src__directives__checkbox_value_accessor, {
    /*src__directives__checkbox_value_accessor.CHECKBOX_VALUE_ACCESSOR*/get CHECKBOX_VALUE_ACCESSOR() {
      return dart.const(ExistingProviderOfControlValueAccessor().forToken(src__directives__control_value_accessor.NG_VALUE_ACCESSOR, dart.wrapType(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor)));
    }
  });
  const _elementRef = Symbol('_elementRef');
  src__directives__checkbox_value_accessor.CheckboxControlValueAccessor = class CheckboxControlValueAccessor extends core.Object {
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
      let elm = html.InputElement._check(this[_elementRef]);
      elm.checked = core.bool._check(value);
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
  };
  (src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.new = function(elementRef) {
    this[onChange] = dart.fn((_, opts) => {
      let rawValue = opts && 'rawValue' in opts ? opts.rawValue : null;
    }, dynamic__ToNull());
    this[onTouched] = dart.fn(() => {
    }, VoidToNull());
    this[_elementRef] = elementRef;
  }).prototype = src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.prototype;
  dart.addTypeTests(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor);
  const onChange = Symbol("CheckboxControlValueAccessor.onChange");
  const onTouched = Symbol("CheckboxControlValueAccessor.onTouched");
  src__directives__checkbox_value_accessor.CheckboxControlValueAccessor[dart.implements] = () => [src__directives__control_value_accessor.ControlValueAccessor];
  dart.setMethodSignature(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor, () => ({
    __proto__: dart.getMethods(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.__proto__),
    touchHandler: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [dart.dynamic]),
    registerOnChange: dart.fnType(dart.void, [dynamic__Todynamic()]),
    registerOnTouched: dart.fnType(dart.void, [VoidTodynamic()])
  }));
  dart.setFieldSignature(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor, () => ({
    __proto__: dart.getFields(src__directives__checkbox_value_accessor.CheckboxControlValueAccessor.__proto__),
    [_elementRef]: dart.finalFieldType(html.HtmlElement),
    onChange: dart.fieldType(dynamic__Todynamic()),
    onTouched: dart.fieldType(VoidTodynamic())
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/checkbox_value_accessor.ddc", {
    "package:angular_forms/src/directives/checkbox_value_accessor.dart": src__directives__checkbox_value_accessor
  }, '{"version":3,"sourceRoot":"","sources":["checkbox_value_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAOM,gEAAuB;YAAG,YAAM,iDAAyB,CAC7D,yDAAiB,EACjB,oFAA4B;;;;;IAwBb;;;;;;;AAEb,oBAAS;IACX;IAEc;;;;;;eAGE,KAAa;AAC3B,UAAa,+BAAM,iBAAW;AAC9B,SAAG,QAAQ,oBAAG,KAAK;IACrB;qBAGsB,EAAiB;AACrC,mBAAQ,GAAG,EAAE;IACf;sBAGuB,EAAgB;AACrC,oBAAS,GAAG,EAAE;IAChB;;wFAfkC,UAAW;IAN9B,cAAQ,GAAG,SAAC,CAAC;UAAU;;IAKxB,eAAS,GAAG;;IACQ,iBAAW,GAAX,UAAW;EAAC","file":"checkbox_value_accessor.ddc.js"}');
  // Exports:
  return {
    src__directives__checkbox_value_accessor: src__directives__checkbox_value_accessor
  };
});

//# sourceMappingURL=checkbox_value_accessor.ddc.js.map
