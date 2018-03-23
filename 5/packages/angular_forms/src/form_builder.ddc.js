define(['dart_sdk', 'packages/angular_forms/src/directives/validators'], function(dart_sdk, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model = validators.src__model;
  const _root = Object.create(null);
  const src__form_builder = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $_get = dartx._get;
  const $length = dartx.length;
  let MapEntryOfString$AbstractControl = () => (MapEntryOfString$AbstractControl = dart.constFn(core.MapEntry$(core.String, src__model.AbstractControl)))();
  let StringAnddynamicToMapEntryOfString$AbstractControl = () => (StringAnddynamicToMapEntryOfString$AbstractControl = dart.constFn(dart.fnType(MapEntryOfString$AbstractControl(), [core.String, dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let AbstractControlToMapOfString$dynamic = () => (AbstractControlToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [src__model.AbstractControl])))();
  let MapOfString$bool = () => (MapOfString$bool = dart.constFn(core.Map$(core.String, core.bool)))();
  src__form_builder.FormBuilder = class FormBuilder extends core.Object {
    static controlGroup(controlsConfig, opts) {
      let optionals = opts && 'optionals' in opts ? opts.optionals : null;
      let validator = opts && 'validator' in opts ? opts.validator : null;
      let controls = src__form_builder.FormBuilder._reduceControls(controlsConfig);
      return new src__model.ControlGroup.new(controls, optionals, validator);
    }
    static controlArray(controlsConfig, validator) {
      if (validator === void 0) validator = null;
      let controls = controlsConfig[$map](src__model.AbstractControl, dart.tagStatic(src__form_builder.FormBuilder, '_createControl'))[$toList]();
      return new src__model.ControlArray.new(controls, validator);
    }
    static _reduceControls(controlsConfig) {
      return controlsConfig[$map](core.String, src__model.AbstractControl, dart.fn((controlName, controlConfig) => MapEntryOfString$AbstractControl().new(controlName, src__form_builder.FormBuilder._createControl(controlConfig)), StringAnddynamicToMapEntryOfString$AbstractControl()));
    }
    static _createControl(controlConfig) {
      if (src__model.AbstractControl.is(controlConfig)) {
        return controlConfig;
      } else if (core.List.is(controlConfig)) {
        let value = controlConfig[$_get](0);
        let validator = dart.notNull(controlConfig[$length]) > 1 ? AbstractControlToMapOfString$dynamic().as(controlConfig[$_get](1)) : null;
        return new src__model.Control.new(value, validator);
      } else {
        return new src__model.Control.new(controlConfig, null);
      }
    }
  };
  (src__form_builder.FormBuilder.__ = function() {
  }).prototype = src__form_builder.FormBuilder.prototype;
  dart.addTypeTests(src__form_builder.FormBuilder);
  dart.setStaticMethodSignature(src__form_builder.FormBuilder, () => ({
    controlGroup: dart.fnType(src__model.ControlGroup, [MapOfString$dynamic()], {optionals: MapOfString$bool(), validator: AbstractControlToMapOfString$dynamic()}),
    controlArray: dart.fnType(src__model.ControlArray, [core.List], [AbstractControlToMapOfString$dynamic()]),
    _reduceControls: dart.fnType(core.Map$(core.String, src__model.AbstractControl), [MapOfString$dynamic()]),
    _createControl: dart.fnType(src__model.AbstractControl, [dart.dynamic])
  }));
  dart.trackLibraries("packages/angular_forms/src/form_builder.ddc", {
    "package:angular_forms/src/form_builder.dart": src__form_builder
  }, '{"version":3,"sourceRoot":"","sources":["form_builder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;wBAgDM,cAAmC;UAChB;UACP;AACd,UAAI,WAAW,6CAAe,CAAC,cAAc;AAC7C,YAAO,KAAI,2BAAyB,CAAC,QAAQ,EAAE,SAAS,EAAE,SAAS;IACrE;wBAI8C,cAA4B,EACrE,SAAqB;gCAAT;AACf,UAAI,WAAW,cAAc,MAAI,6BAAC,+DAAc,UAAQ;AACxD,YAAO,KAAI,2BAAyB,CAAC,QAAQ,EAAE,SAAS;IAC1D;2BAGQ,cAAmC;YACvC,eAAc,MAAI,0CAAC,SAAC,WAAW,EAAE,aAAa,KAC1C,AAAI,sCAAQ,CAAC,WAAW,EAAE,4CAAc,CAAC,aAAa;IAAG;0BAEd,aAAqB;AACtE,wCAAI,aAAa,GAAkC;AACjD,cAAO,cAAa;YACf,kBAAI,aAAa,GAAU;AAChC,YAAI,QAAQ,aAAa,QAAC;AAC1B,YAAY,YACR,AAAqB,aAArB,aAAa,SAAO,IAAG,8CAAI,aAAa,QAAC,MAAoB;AACjE,cAAO,KAAI,sBAAoB,CAAC,KAAK,EAAE,SAAS;aAC3C;AACL,cAAO,KAAI,sBAAoB,CAAC,aAAa,EAAE;;IAEnD;;;EAGe","file":"form_builder.ddc.js"}');
  // Exports:
  return {
    src__form_builder: src__form_builder
  };
});

//# sourceMappingURL=form_builder.ddc.js.map
