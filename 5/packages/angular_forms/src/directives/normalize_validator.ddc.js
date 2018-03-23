define(['dart_sdk', 'packages/angular_forms/src/directives/validators'], function(dart_sdk, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__validators = validators.src__directives__validators;
  const src__model = validators.src__model;
  const _root = Object.create(null);
  const src__directives__normalize_validator = Object.create(_root);
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let AbstractControlToMapOfString$dynamic = () => (AbstractControlToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [src__model.AbstractControl])))();
  let dynamicToFn = () => (dynamicToFn = dart.constFn(dart.fnType(AbstractControlToMapOfString$dynamic(), [dart.dynamic])))();
  src__directives__normalize_validator.normalizeValidator = function(validator) {
    if (src__directives__validators.Validator.is(validator)) {
      return dart.fn(c => validator.validate(c), AbstractControlToMapOfString$dynamic());
    } else if (core.Function.is(validator)) {
      return AbstractControlToMapOfString$dynamic().as(validator);
    } else {
      return AbstractControlToMapOfString$dynamic().as(dart.dload(validator, 'call'));
    }
  };
  dart.fn(src__directives__normalize_validator.normalizeValidator, dynamicToFn());
  dart.trackLibraries("packages/angular_forms/src/directives/normalize_validator.ddc", {
    "package:angular_forms/src/directives/normalize_validator.dart": src__directives__normalize_validator
  }, '{"version":3,"sourceRoot":"","sources":["normalize_validator.dart"],"names":[],"mappings":";;;;;;;;;;;;qEAE+B,SAAiB;AAC9C,iDAAI,SAAS,GAAe;AAC1B,YAAO,SAAC,CAAC,IAAK,SAAS,SAAS,CAAC,CAAC;UAC7B,sBAAI,SAAS,GAAc;AAChC,uDAAO,SAAS;WACX;AACL,kEAAO,SAAS;;EAEpB","file":"normalize_validator.ddc.js"}');
  // Exports:
  return {
    src__directives__normalize_validator: src__directives__normalize_validator
  };
});

//# sourceMappingURL=normalize_validator.ddc.js.map
