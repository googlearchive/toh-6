define(['dart_sdk', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_forms/src/directives/ng_control_status', 'packages/angular_forms/src/directives/control_container.template', 'packages/angular/angular.template'], function(dart_sdk, directive_change_detector, ng_control_status, control_container, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const src__directives__ng_control_status = ng_control_status.src__directives__ng_control_status;
  const src__directives__ng_control$46template = control_container.src__directives__ng_control$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__directives__ng_control_status$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  src__directives__ng_control_status$46template.NgControlStatusNgCd = class NgControlStatusNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.ngClassUntouched;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(el, 'ng-untouched', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = this.instance.ngClassTouched;
      if (!(this[_expr_1] == currVal_1)) {
        this.updateElemClass(el, 'ng-touched', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.instance.ngClassPristine;
      if (!(this[_expr_2] == currVal_2)) {
        this.updateElemClass(el, 'ng-pristine', currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.instance.ngClassDirty;
      if (!(this[_expr_3] == currVal_3)) {
        this.updateElemClass(el, 'ng-dirty', currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = this.instance.ngClassValid;
      if (!(this[_expr_4] == currVal_4)) {
        this.updateElemClass(el, 'ng-valid', currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = this.instance.ngClassInvalid;
      if (!(this[_expr_5] == currVal_5)) {
        this.updateElemClass(el, 'ng-invalid', currVal_5);
        this[_expr_5] = currVal_5;
      }
    }
  };
  (src__directives__ng_control_status$46template.NgControlStatusNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[instance$] = instance;
    src__directives__ng_control_status$46template.NgControlStatusNgCd.__proto__.new.call(this);
  }).prototype = src__directives__ng_control_status$46template.NgControlStatusNgCd.prototype;
  dart.addTypeTests(src__directives__ng_control_status$46template.NgControlStatusNgCd);
  const instance$ = Symbol("NgControlStatusNgCd.instance");
  dart.setFieldSignature(src__directives__ng_control_status$46template.NgControlStatusNgCd, () => ({
    __proto__: dart.getFields(src__directives__ng_control_status$46template.NgControlStatusNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__ng_control_status.NgControlStatus),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__directives__ng_control_status$46template, {
    /*src__directives__ng_control_status$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_control_status$46template.initReflector = function() {
    if (dart.test(src__directives__ng_control_status$46template._visited)) {
      return;
    }
    src__directives__ng_control_status$46template._visited = true;
    src__directives__ng_control$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__directives__ng_control_status$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives/ng_control_status.template.ddc", {
    "package:angular_forms/src/directives/ng_control_status.template.dart": src__directives__ng_control_status$46template
  }, '{"version":3,"sourceRoot":"","sources":["ng_control_status.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAiBgC;;;;;;sBAQP,IAAqB,EAAE,EAAkB;AAC9D,UAAM,YAAY,aAAQ,iBAAiB;AAC3C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,gBAAgB,SAAS;AAC7C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,eAAe;AACzC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,cAAc,SAAS;AAC3C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,gBAAgB;AAC1C,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,eAAe,SAAS;AAC5C,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,aAAa;AACvC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,YAAY,SAAS;AACzC,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,aAAa;AACvC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,YAAY,SAAS;AACzC,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,aAAQ,eAAe;AACzC,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,4BAAe,CAAC,EAAE,EAAE,cAAc,SAAS;AAC3C,qBAAO,GAAG,SAAS;;IAEvB;;oFAhCoB,QAAa;IAN5B,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACa,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;;;;;;MAmChC,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,gCAAa;EACrB","file":"ng_control_status.template.ddc.js"}');
  // Exports:
  return {
    src__directives__ng_control_status$46template: src__directives__ng_control_status$46template
  };
});

//# sourceMappingURL=ng_control_status.template.ddc.js.map
