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
  const src__location__hash_location_strategy = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $substring = dartx.substring;
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  const _platformLocation = Symbol('_platformLocation');
  const _baseHref = Symbol('_baseHref');
  src__location__hash_location_strategy.HashLocationStrategy = class HashLocationStrategy extends src__location__location_strategy.LocationStrategy {
    onPopState(fn) {
      this[_platformLocation].onPopState(fn);
    }
    getBaseHref() {
      return this[_baseHref];
    }
    hash() {
      return this[_platformLocation].hash;
    }
    path() {
      let l = this[_platformLocation].hash;
      let path = l != null ? l : '';
      return path[$isEmpty] ? path : path[$substring](1);
    }
    prepareExternalUrl(internal) {
      let url = src__location__location.Location.joinWithSlash(this[_baseHref], internal);
      return url[$isEmpty] ? url : dart.str`#${url}`;
    }
    pushState(state, title, path, queryParams) {
      let url = this.prepareExternalUrl(dart.notNull(path) + dart.notNull(src__location__location.Location.normalizeQueryParams(queryParams)));
      if (url[$isEmpty]) {
        url = this[_platformLocation].pathname;
      }
      this[_platformLocation].pushState(state, title, url);
    }
    replaceState(state, title, path, queryParams) {
      let url = this.prepareExternalUrl(dart.notNull(path) + dart.notNull(src__location__location.Location.normalizeQueryParams(queryParams)));
      if (url[$isEmpty]) {
        url = this[_platformLocation].pathname;
      }
      this[_platformLocation].replaceState(state, title, url);
    }
    forward() {
      this[_platformLocation].forward();
    }
    back() {
      this[_platformLocation].back();
    }
  };
  (src__location__hash_location_strategy.HashLocationStrategy.new = function(platformLocation, baseHref) {
    if (baseHref === void 0) baseHref = null;
    this[_platformLocation] = platformLocation;
    this[_baseHref] = baseHref != null ? baseHref : '';
  }).prototype = src__location__hash_location_strategy.HashLocationStrategy.prototype;
  dart.addTypeTests(src__location__hash_location_strategy.HashLocationStrategy);
  dart.setMethodSignature(src__location__hash_location_strategy.HashLocationStrategy, () => ({
    __proto__: dart.getMethods(src__location__hash_location_strategy.HashLocationStrategy.__proto__),
    onPopState: dart.fnType(dart.void, [EventTodynamic()]),
    getBaseHref: dart.fnType(core.String, []),
    hash: dart.fnType(core.String, []),
    path: dart.fnType(core.String, []),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__location__hash_location_strategy.HashLocationStrategy, () => ({
    __proto__: dart.getFields(src__location__hash_location_strategy.HashLocationStrategy.__proto__),
    [_platformLocation]: dart.finalFieldType(src__location__platform_location.PlatformLocation),
    [_baseHref]: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_router/src/location/hash_location_strategy.ddc", {
    "package:angular_router/src/location/hash_location_strategy.dart": src__location__hash_location_strategy
  }, '{"version":3,"sourceRoot":"","sources":["hash_location_strategy.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;eAyDkB,EAAqB;AACnC,6BAAiB,WAAW,CAAC,EAAE;IACjC;;AAGE,YAAO,gBAAS;IAClB;;AAGE,YAAO,wBAAiB,KAAK;IAC/B;;AAKE,cAAW,uBAAiB,KAAK;UAA7B,uBAAiC;AAIrC,YAAO,KAAI,UAAQ,GAAG,IAAI,GAAG,IAAI,YAAU,CAAC;IAC9C;uBAE0B,QAAe;AACvC,UAAI,MAAM,gCAAQ,cAAc,CAAC,eAAS,EAAE,QAAQ;AACpD,YAAO,IAAG,UAAQ,GAAG,GAAG,GAAG,YAAG,GAAG;IACnC;cAEe,KAAa,EAAE,KAAY,EAAE,IAAW,EAAE,WAAkB;AACzE,UAAI,MACA,uBAAkB,CAAM,aAAL,IAAI,iBAAG,gCAAQ,qBAAqB,CAAC,WAAW;AACvE,UAAI,GAAG,UAAQ,EAAE;AACf,WAAG,GAAG,uBAAiB,SAAS;;AAElC,6BAAiB,UAAU,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;IAC/C;iBAGI,KAAa,EAAE,KAAY,EAAE,IAAW,EAAE,WAAkB;AAC9D,UAAI,MACA,uBAAkB,CAAM,aAAL,IAAI,iBAAG,gCAAQ,qBAAqB,CAAC,WAAW;AACvE,UAAI,GAAG,UAAQ,EAAE;AACf,WAAG,GAAG,uBAAiB,SAAS;;AAElC,6BAAiB,aAAa,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;IAClD;;AAGE,6BAAiB,QAAQ;IAC3B;;AAGE,6BAAiB,KAAK;IACxB;;6EAzDO,gBAAiB,EACtB,QAAkD;6BAAR;IADrC,uBAAiB,GAAjB,gBAAiB;IAEnB,eAAS,GAAG,QAAQ,WAAR,QAAQ,GAAI;EAAE","file":"hash_location_strategy.ddc.js"}');
  // Exports:
  return {
    src__location__hash_location_strategy: src__location__hash_location_strategy
  };
});

//# sourceMappingURL=hash_location_strategy.ddc.js.map
