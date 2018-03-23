define(['dart_sdk', 'packages/angular_forms/src/directives/control_container'], function(dart_sdk, control_container) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const _root = Object.create(null);
  const src__directives__ng_control_status = Object.create(_root);
  const _cd = Symbol('_cd');
  src__directives__ng_control_status.NgControlStatus = class NgControlStatus extends core.Object {
    get ngClassUntouched() {
      return this[_cd].control != null ? this[_cd].control.untouched : false;
    }
    get ngClassTouched() {
      return this[_cd].control != null ? this[_cd].control.touched : false;
    }
    get ngClassPristine() {
      return this[_cd].control != null ? this[_cd].control.pristine : false;
    }
    get ngClassDirty() {
      return this[_cd].control != null ? this[_cd].control.dirty : false;
    }
    get ngClassValid() {
      return this[_cd].control != null ? this[_cd].control.valid : false;
    }
    get ngClassInvalid() {
      return this[_cd].control != null ? !dart.test(this[_cd].control.valid) : false;
    }
  };
  (src__directives__ng_control_status.NgControlStatus.new = function(cd) {
    this[_cd] = cd;
  }).prototype = src__directives__ng_control_status.NgControlStatus.prototype;
  dart.addTypeTests(src__directives__ng_control_status.NgControlStatus);
  dart.setGetterSignature(src__directives__ng_control_status.NgControlStatus, () => ({
    __proto__: dart.getGetters(src__directives__ng_control_status.NgControlStatus.__proto__),
    ngClassUntouched: dart.fnType(core.bool, []),
    ngClassTouched: dart.fnType(core.bool, []),
    ngClassPristine: dart.fnType(core.bool, []),
    ngClassDirty: dart.fnType(core.bool, []),
    ngClassValid: dart.fnType(core.bool, []),
    ngClassInvalid: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__directives__ng_control_status.NgControlStatus, () => ({
    __proto__: dart.getFields(src__directives__ng_control_status.NgControlStatus.__proto__),
    [_cd]: dart.finalFieldType(src__directives__ng_control.NgControl)
  }));
  dart.trackLibraries("packages/angular_forms/src/directives/ng_control_status.ddc", {
    "package:angular_forms/src/directives/ng_control_status.dart": src__directives__ng_control_status
  }, '{"version":3,"sourceRoot":"","sources":["ng_control_status.dart"],"names":[],"mappings":";;;;;;;;;;;YAyBM,UAAG,QAAQ,IAAI,OAAO,SAAG,QAAQ,UAAU,GAAG;IAAK;;YAE5B,UAAG,QAAQ,IAAI,OAAO,SAAG,QAAQ,QAAQ,GAAG;IAAK;;YAGxE,UAAG,QAAQ,IAAI,OAAO,SAAG,QAAQ,SAAS,GAAG;IAAK;;YAE7B,UAAG,QAAQ,IAAI,OAAO,SAAG,QAAQ,MAAM,GAAG;IAAK;;YAE/C,UAAG,QAAQ,IAAI,OAAO,SAAG,QAAQ,MAAM,GAAG;IAAK;;YAE7C,UAAG,QAAQ,IAAI,OAAO,WAAC,SAAG,QAAQ,MAAM,IAAG;IAAK;;qEAd9C,EAAG;IAAH,SAAG,GAAH,EAAG;EAAC","file":"ng_control_status.ddc.js"}');
  // Exports:
  return {
    src__directives__ng_control_status: src__directives__ng_control_status
  };
});

//# sourceMappingURL=ng_control_status.ddc.js.map
