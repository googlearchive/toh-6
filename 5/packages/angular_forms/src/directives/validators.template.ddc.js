define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_forms/src/directives/validators'], function(dart_sdk, angular, directive_change_detector, validators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const src__directives__validators = validators.src__directives__validators;
  const _root = Object.create(null);
  const src__validators$46template = Object.create(_root);
  const src__directives__validators$46template = Object.create(_root);
  const src__model$46template = Object.create(_root);
  const $toString = dartx.toString;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__validators$46template, {
    /*src__validators$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__validators$46template.initReflector = function() {
    if (dart.test(src__validators$46template._visited)) {
      return;
    }
    src__validators$46template._visited = true;
    src__directives__validators$46template.initReflector();
    src__model$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__validators$46template.initReflector, VoidTovoid());
  const _expr_0 = Symbol('_expr_0');
  src__directives__validators$46template.MinLengthValidatorNgCd = class MinLengthValidatorNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.minLengthAttr;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(el, 'minlength', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__directives__validators$46template.MinLengthValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    src__directives__validators$46template.MinLengthValidatorNgCd.__proto__.new.call(this);
  }).prototype = src__directives__validators$46template.MinLengthValidatorNgCd.prototype;
  dart.addTypeTests(src__directives__validators$46template.MinLengthValidatorNgCd);
  const instance$ = Symbol("MinLengthValidatorNgCd.instance");
  dart.setFieldSignature(src__directives__validators$46template.MinLengthValidatorNgCd, () => ({
    __proto__: dart.getFields(src__directives__validators$46template.MinLengthValidatorNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__validators.MinLengthValidator),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__directives__validators$46template.MaxLengthValidatorNgCd = class MaxLengthValidatorNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$0];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.maxLengthAttr;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(el, 'maxlength', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__directives__validators$46template.MaxLengthValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$0] = instance;
    src__directives__validators$46template.MaxLengthValidatorNgCd.__proto__.new.call(this);
  }).prototype = src__directives__validators$46template.MaxLengthValidatorNgCd.prototype;
  dart.addTypeTests(src__directives__validators$46template.MaxLengthValidatorNgCd);
  const instance$0 = Symbol("MaxLengthValidatorNgCd.instance");
  dart.setFieldSignature(src__directives__validators$46template.MaxLengthValidatorNgCd, () => ({
    __proto__: dart.getFields(src__directives__validators$46template.MaxLengthValidatorNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__validators.MaxLengthValidator),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__directives__validators$46template, {
    /*src__directives__validators$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__validators$46template.initReflector = function() {
    if (dart.test(src__directives__validators$46template._visited)) {
      return;
    }
    src__directives__validators$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__directives__validators$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__model$46template, {
    /*src__model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__model$46template.initReflector = function() {
    if (dart.test(src__model$46template._visited)) {
      return;
    }
    src__model$46template._visited = true;
    src__directives__validators$46template.initReflector();
  };
  dart.fn(src__model$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives/validators.template.ddc", {
    "package:angular_forms/src/validators.template.dart": src__validators$46template,
    "package:angular_forms/src/directives/validators.template.dart": src__directives__validators$46template,
    "package:angular_forms/src/model.template.dart": src__model$46template
  }, '{"version":3,"sourceRoot":"","sources":["../validators.template.dart","validators.template.dart","../model.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAcI,mCAAQ;YAAG;;;;;AAEb,kBAAI,mCAAQ,GAAE;AACZ;;AAEF,0CAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,mCAAa;AACnB,IAAM,gCAAa;EACrB;;;;ICLmC;;;;;;sBAGV,IAAqB,EAAE,EAAkB;AAC9D,UAAM,YAAY,aAAQ,cAAc;AACxC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,EAAE,EAAE,aAAa,SAAS,gCAAT,SAAS;AAClC,qBAAO,GAAG,SAAS;;IAEvB;;gFAPuB,QAAa;IADhC,aAAO;IACiB,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;IAWJ;;;;;;sBAGV,IAAqB,EAAE,EAAkB;AAC9D,UAAM,YAAY,aAAQ,cAAc;AACxC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,EAAE,EAAE,aAAa,SAAS,gCAAT,SAAS;AAClC,qBAAO,GAAG,SAAS;;IAEvB;;gFAPuB,QAAa;IADhC,aAAO;IACiB,gBAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;MAUnC,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,mCAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,gCAAa;EACrB;;;MC1CI,8BAAQ;YAAG;;;;;AAEb,kBAAI,8BAAQ,GAAE;AACZ;;AAEF,qCAAW;AAEX,IAAM,oDAAa;EACrB","file":"validators.template.ddc.js"}');
  // Exports:
  return {
    src__validators$46template: src__validators$46template,
    src__directives__validators$46template: src__directives__validators$46template,
    src__model$46template: src__model$46template
  };
});

//# sourceMappingURL=validators.template.ddc.js.map
