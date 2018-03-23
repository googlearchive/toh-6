define(['dart_sdk', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_router/src/directives/router_link_directive', 'packages/angular_router/src/location.template', 'packages/angular_router/src/router/navigation_params.template', 'packages/angular_router/src/directives/router_outlet_directive.template', 'packages/angular_router/src/url.template', 'packages/angular/angular.template'], function(dart_sdk, directive_change_detector, router_link_directive, location, navigation_params, router_outlet_directive, url, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__directive_change_detector = directive_change_detector.src__core__change_detection__directive_change_detector;
  const src__directives__router_link_directive = router_link_directive.src__directives__router_link_directive;
  const src__location$46template = location.src__location$46template;
  const src__router__navigation_params$46template = navigation_params.src__router__navigation_params$46template;
  const src__router__router$46template = router_outlet_directive.src__router__router$46template;
  const src__url$46template = url.src__url$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__directives__router_link_directive$46template = Object.create(_root);
  const $toString = dartx.toString;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _expr_0 = Symbol('_expr_0');
  src__directives__router_link_directive$46template.RouterLinkNgCd = class RouterLinkNgCd extends src__core__change_detection__directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.visibleHref;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setAttr(el, 'href', currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__directives__router_link_directive$46template.RouterLinkNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    src__directives__router_link_directive$46template.RouterLinkNgCd.__proto__.new.call(this);
  }).prototype = src__directives__router_link_directive$46template.RouterLinkNgCd.prototype;
  dart.addTypeTests(src__directives__router_link_directive$46template.RouterLinkNgCd);
  const instance$ = Symbol("RouterLinkNgCd.instance");
  dart.setFieldSignature(src__directives__router_link_directive$46template.RouterLinkNgCd, () => ({
    __proto__: dart.getFields(src__directives__router_link_directive$46template.RouterLinkNgCd.__proto__),
    instance: dart.finalFieldType(src__directives__router_link_directive.RouterLink),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__directives__router_link_directive$46template, {
    /*src__directives__router_link_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__router_link_directive$46template.initReflector = function() {
    if (dart.test(src__directives__router_link_directive$46template._visited)) {
      return;
    }
    src__directives__router_link_directive$46template._visited = true;
    src__location$46template.initReflector();
    src__router__navigation_params$46template.initReflector();
    src__router__router$46template.initReflector();
    src__url$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__directives__router_link_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/directives/router_link_directive.template.ddc", {
    "package:angular_router/src/directives/router_link_directive.template.dart": src__directives__router_link_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["router_link_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAyB2B;;;;;;sBAGF,IAAqB,EAAE,EAAkB;AAC9D,UAAM,YAAY,aAAQ,YAAY;AACtC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,oBAAO,CAAC,EAAE,EAAE,QAAQ,SAAS,gCAAT,SAAS;AAC7B,qBAAO,GAAG,SAAS;;IAEvB;;mFAPe,QAAa;IADxB,aAAO;IACS,eAAQ,GAAR,QAAQ;;EAAC;;;;;;;;;MAU3B,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,sCAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,iCAAa;AACnB,IAAM,gCAAa;EACrB","file":"router_link_directive.template.ddc.js"}');
  // Exports:
  return {
    src__directives__router_link_directive$46template: src__directives__router_link_directive$46template
  };
});

//# sourceMappingURL=router_link_directive.template.ddc.js.map
