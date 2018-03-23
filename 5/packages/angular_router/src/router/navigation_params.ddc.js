define(['dart_sdk', 'packages/angular/src/runtime/optimizations'], function(dart_sdk, optimizations) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const _root = Object.create(null);
  const src__router__navigation_params = Object.create(_root);
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let const$;
  src__router__navigation_params.NavigationParams = class NavigationParams extends core.Object {
    get queryParameters() {
      return this[queryParameters$];
    }
    set queryParameters(value) {
      super.queryParameters = value;
    }
    get fragment() {
      return this[fragment$];
    }
    set fragment(value) {
      super.fragment = value;
    }
    get reload() {
      return this[reload$];
    }
    set reload(value) {
      super.reload = value;
    }
    get replace() {
      return this[replace$];
    }
    set replace(value) {
      super.replace = value;
    }
    get updateUrl() {
      return this[updateUrl$];
    }
    set updateUrl(value) {
      super.updateUrl = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.fragment == null) {
        dart.throw(new core.StateError.new('Must have a non-null `fragment` type'));
      }
      if (this.queryParameters == null) {
        dart.throw(new core.StateError.new('Must have a non-null `query` type'));
      }
    }
  };
  (src__router__navigation_params.NavigationParams.new = function(opts) {
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : const$ || (const$ = dart.constMap(core.String, core.String, []));
    let fragment = opts && 'fragment' in opts ? opts.fragment : '';
    let reload = opts && 'reload' in opts ? opts.reload : false;
    let replace = opts && 'replace' in opts ? opts.replace : false;
    let updateUrl = opts && 'updateUrl' in opts ? opts.updateUrl : true;
    this[queryParameters$] = queryParameters;
    this[fragment$] = fragment;
    this[reload$] = reload;
    this[replace$] = replace;
    this[updateUrl$] = updateUrl;
  }).prototype = src__router__navigation_params.NavigationParams.prototype;
  dart.addTypeTests(src__router__navigation_params.NavigationParams);
  const queryParameters$ = Symbol("NavigationParams.queryParameters");
  const fragment$ = Symbol("NavigationParams.fragment");
  const reload$ = Symbol("NavigationParams.reload");
  const replace$ = Symbol("NavigationParams.replace");
  const updateUrl$ = Symbol("NavigationParams.updateUrl");
  dart.setMethodSignature(src__router__navigation_params.NavigationParams, () => ({
    __proto__: dart.getMethods(src__router__navigation_params.NavigationParams.__proto__),
    assertValid: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__router__navigation_params.NavigationParams, () => ({
    __proto__: dart.getFields(src__router__navigation_params.NavigationParams.__proto__),
    queryParameters: dart.finalFieldType(MapOfString$String()),
    fragment: dart.finalFieldType(core.String),
    reload: dart.finalFieldType(core.bool),
    replace: dart.finalFieldType(core.bool),
    updateUrl: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular_router/src/router/navigation_params.ddc", {
    "package:angular_router/src/router/navigation_params.dart": src__router__navigation_params
  }, '{"version":3,"sourceRoot":"","sources":["navigation_params.dart"],"names":[],"mappings":";;;;;;;;;;;IAY4B;;;;;;IAGb;;;;;;IAOF;;;;;;IAMA;;;;;;IAGA;;;;;;;AAeT,qBAAK,qCAAS,GAAE;AACd;;AAEF,UAAI,aAAQ,IAAI,MAAM;AACpB,mBAAM,IAAI,mBAAU,CAAC;;AAEvB,UAAI,oBAAe,IAAI,MAAM;AAC3B,mBAAM,IAAI,mBAAU,CAAC;;IAEzB;;;QArBO,6EAAiB;QACjB,wDAAU;QACV,kDAAQ;QACR,qDAAS;QACT,2DAAW;IAJX,sBAAe,GAAf,eAAe;IACf,eAAQ,GAAR,QAAQ;IACR,aAAM,GAAN,MAAM;IACN,cAAO,GAAP,OAAO;IACP,gBAAS,GAAT,SAAS;EACd","file":"navigation_params.ddc.js"}');
  // Exports:
  return {
    src__router__navigation_params: src__router__navigation_params
  };
});

//# sourceMappingURL=navigation_params.ddc.js.map
