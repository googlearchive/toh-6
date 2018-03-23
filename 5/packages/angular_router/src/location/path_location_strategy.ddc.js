define(['dart_sdk', 'packages/angular_router/src/location/location', 'packages/angular_router/src/location/location_strategy', 'packages/angular_router/src/location/platform_location'], function(dart_sdk, location, location_strategy, platform_location) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location__location = location.src__location__location;
  const src__location__location_strategy = location_strategy.src__location__location_strategy;
  const src__location__platform_location = platform_location.src__location__platform_location;
  const _root = Object.create(null);
  const src__location__path_location_strategy = Object.create(_root);
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  const _platformLocation = Symbol('_platformLocation');
  const _baseHref = Symbol('_baseHref');
  src__location__path_location_strategy.PathLocationStrategy = class PathLocationStrategy extends src__location__location_strategy.LocationStrategy {
    onPopState(fn) {
      this[_platformLocation].onPopState(fn);
    }
    getBaseHref() {
      return this[_baseHref];
    }
    prepareExternalUrl(internal) {
      return src__location__location.Location.joinWithSlash(this[_baseHref], internal);
    }
    hash() {
      return this[_platformLocation].hash;
    }
    path() {
      return dart.notNull(this[_platformLocation].pathname) + dart.notNull(src__location__location.Location.normalizeQueryParams(this[_platformLocation].search));
    }
    pushState(state, title, url, queryParams) {
      let externalUrl = this.prepareExternalUrl(dart.notNull(url) + dart.notNull(src__location__location.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation].pushState(state, title, externalUrl);
    }
    replaceState(state, title, url, queryParams) {
      let externalUrl = this.prepareExternalUrl(dart.notNull(url) + dart.notNull(src__location__location.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation].replaceState(state, title, externalUrl);
    }
    forward() {
      this[_platformLocation].forward();
    }
    back() {
      this[_platformLocation].back();
    }
  };
  (src__location__path_location_strategy.PathLocationStrategy.new = function(platformLocation, href) {
    if (href === void 0) href = null;
    this[_baseHref] = null;
    this[_platformLocation] = platformLocation;
    let t = href;
    t == null ? href = this[_platformLocation].getBaseHrefFromDOM() : t;
    if (href == null) {
      dart.throw(new core.ArgumentError.new('No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'));
    }
    this[_baseHref] = href;
  }).prototype = src__location__path_location_strategy.PathLocationStrategy.prototype;
  dart.addTypeTests(src__location__path_location_strategy.PathLocationStrategy);
  dart.setMethodSignature(src__location__path_location_strategy.PathLocationStrategy, () => ({
    __proto__: dart.getMethods(src__location__path_location_strategy.PathLocationStrategy.__proto__),
    onPopState: dart.fnType(dart.void, [EventTodynamic()]),
    getBaseHref: dart.fnType(core.String, []),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    hash: dart.fnType(core.String, []),
    path: dart.fnType(core.String, []),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__location__path_location_strategy.PathLocationStrategy, () => ({
    __proto__: dart.getFields(src__location__path_location_strategy.PathLocationStrategy.__proto__),
    [_platformLocation]: dart.fieldType(src__location__platform_location.PlatformLocation),
    [_baseHref]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_router/src/location/path_location_strategy.ddc", {
    "package:angular_router/src/location/path_location_strategy.dart": src__location__path_location_strategy
  }, '{"version":3,"sourceRoot":"","sources":["path_location_strategy.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;eAkEkB,EAAqB;AACnC,6BAAiB,WAAW,CAAC,EAAE;IACjC;;YAEwB,gBAAS;;uBAEP,QAAe;AACvC,YAAO,iCAAQ,cAAc,CAAC,eAAS,EAAE,QAAQ;IACnD;;YAEiB,wBAAiB,KAAK;;;YAGR,cAA3B,uBAAiB,SAAS,iBAC1B,gCAAQ,qBAAqB,CAAC,uBAAiB,OAAO;IAAC;cAE5C,KAAa,EAAE,KAAY,EAAE,GAAU,EAAE,WAAkB;AACxE,UAAI,cACA,uBAAkB,CAAK,aAAJ,GAAG,iBAAG,gCAAQ,qBAAqB,CAAC,WAAW;AACtE,6BAAiB,UAAU,CAAC,KAAK,EAAE,KAAK,EAAE,WAAW;IACvD;iBAGI,KAAa,EAAE,KAAY,EAAE,GAAU,EAAE,WAAkB;AAC7D,UAAI,cACA,uBAAkB,CAAK,aAAJ,GAAG,iBAAG,gCAAQ,qBAAqB,CAAC,WAAW;AACtE,6BAAiB,aAAa,CAAC,KAAK,EAAE,KAAK,EAAE,WAAW;IAC1D;;AAGE,6BAAiB,QAAQ;IAC3B;;AAGE,6BAAiB,KAAK;IACxB;;6EA9C0B,gBAAiB,EACtC,IAA8C;yBAAJ;IAFxC,eAAS;IACU,uBAAiB,GAAjB,gBAAiB;AAEzC,gBAAI;gBAAJ,IAAI,GAAK,uBAAiB,mBAAmB;AAC7C,QAAI,IAAI,IAAI,MAAM;AAChB,iBAAM,IAAI,sBAAa,CACnB;;AAEN,mBAAS,GAAG,IAAI;EAClB","file":"path_location_strategy.ddc.js"}');
  // Exports:
  return {
    src__location__path_location_strategy: src__location__path_location_strategy
  };
});

//# sourceMappingURL=path_location_strategy.ddc.js.map
