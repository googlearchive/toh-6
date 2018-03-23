define(['dart_sdk', 'packages/angular/src/core/di/opaque_token'], function(dart_sdk, opaque_token) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const _root = Object.create(null);
  const src__directives__control_value_accessor = Object.create(_root);
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  const _is_ControlValueAccessor_default = Symbol('_is_ControlValueAccessor_default');
  src__directives__control_value_accessor.ControlValueAccessor$ = dart.generic(T => {
    class ControlValueAccessor extends core.Object {}
    (ControlValueAccessor.new = function() {
    }).prototype = ControlValueAccessor.prototype;
    dart.addTypeTests(ControlValueAccessor);
    ControlValueAccessor.prototype[_is_ControlValueAccessor_default] = true;
    return ControlValueAccessor;
  });
  src__directives__control_value_accessor.ControlValueAccessor = src__directives__control_value_accessor.ControlValueAccessor$();
  dart.addTypeTests(src__directives__control_value_accessor.ControlValueAccessor, _is_ControlValueAccessor_default);
  dart.defineLazy(src__directives__control_value_accessor, {
    /*src__directives__control_value_accessor.NG_VALUE_ACCESSOR*/get NG_VALUE_ACCESSOR() {
      return dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor'));
    }
  });
  src__directives__control_value_accessor.ChangeFunction$ = dart.generic(T => {
    const ChangeFunction = dart.typedef('ChangeFunction', () => dart.fnType(dart.dynamic, [T], {rawValue: core.String}));
    return ChangeFunction;
  });
  src__directives__control_value_accessor.ChangeFunction = src__directives__control_value_accessor.ChangeFunction$();
  src__directives__control_value_accessor.TouchFunction = dart.typedef('TouchFunction', () => dart.fnType(dart.dynamic, []));
  dart.trackLibraries("packages/angular_forms/src/directives/control_value_accessor.ddc", {
    "package:angular_forms/src/directives/control_value_accessor.dart": src__directives__control_value_accessor
  }, '{"version":3,"sourceRoot":"","sources":["control_value_accessor.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAiBA;;;;;;;;MAKM,yDAAiB;YAAG,gBAAM,wCAAgC,CAC9D","file":"control_value_accessor.ddc.js"}');
  // Exports:
  return {
    src__directives__control_value_accessor: src__directives__control_value_accessor
  };
});

//# sourceMappingURL=control_value_accessor.ddc.js.map
