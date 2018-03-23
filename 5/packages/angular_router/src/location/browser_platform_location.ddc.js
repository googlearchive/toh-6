define(['dart_sdk', 'packages/angular_router/src/location/base_href', 'packages/angular_router/src/location/platform_location'], function(dart_sdk, base_href, platform_location) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location__base_href = base_href.src__location__base_href;
  const src__location__platform_location = platform_location.src__location__platform_location;
  const _root = Object.create(null);
  const src__location__browser_platform_location = Object.create(_root);
  const $location = dartx.location;
  const $addEventListener = dartx.addEventListener;
  const $pushState = dartx.pushState;
  const $replaceState = dartx.replaceState;
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  const _location = Symbol('_location');
  const _history = Symbol('_history');
  const _init = Symbol('_init');
  src__location__browser_platform_location.BrowserPlatformLocation = class BrowserPlatformLocation extends src__location__platform_location.PlatformLocation {
    [_init]() {
      this[_location] = html.window[$location];
      this[_history] = html.window.history;
    }
    get location() {
      return this[_location];
    }
    getBaseHrefFromDOM() {
      return src__location__platform_location.baseHRefFromDOM();
    }
    onPopState(fn) {
      html.window[$addEventListener]('popstate', fn, false);
    }
    onHashChange(fn) {
      html.window[$addEventListener]('hashchange', fn, false);
    }
    get pathname() {
      return this[_location].pathname;
    }
    get search() {
      return this[_location].search;
    }
    get hash() {
      return this[_location].hash;
    }
    set pathname(newPath) {
      this[_location].pathname = newPath;
    }
    pushState(state, title, url) {
      this[_history][$pushState](state, title, url);
    }
    replaceState(state, title, url) {
      this[_history][$replaceState](state, title, url);
    }
    forward() {
      this[_history].forward();
    }
    back() {
      this[_history].back();
    }
  };
  (src__location__browser_platform_location.BrowserPlatformLocation.new = function() {
    this[_location] = null;
    this[_history] = null;
    src__location__platform_location.baseHRefFromDOM = src__location__base_href.baseHrefFromDOM;
    this[_init]();
  }).prototype = src__location__browser_platform_location.BrowserPlatformLocation.prototype;
  dart.addTypeTests(src__location__browser_platform_location.BrowserPlatformLocation);
  dart.setMethodSignature(src__location__browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getMethods(src__location__browser_platform_location.BrowserPlatformLocation.__proto__),
    [_init]: dart.fnType(dart.void, []),
    getBaseHrefFromDOM: dart.fnType(core.String, []),
    onPopState: dart.fnType(dart.void, [EventTodynamic()]),
    onHashChange: dart.fnType(dart.void, [EventTodynamic()]),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__location__browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getGetters(src__location__browser_platform_location.BrowserPlatformLocation.__proto__),
    location: dart.fnType(html.Location, []),
    pathname: dart.fnType(core.String, []),
    search: dart.fnType(core.String, []),
    hash: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(src__location__browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getSetters(src__location__browser_platform_location.BrowserPlatformLocation.__proto__),
    pathname: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__location__browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getFields(src__location__browser_platform_location.BrowserPlatformLocation.__proto__),
    [_location]: dart.fieldType(html.Location),
    [_history]: dart.fieldType(html.History)
  }));
  dart.trackLibraries("packages/angular_router/src/location/browser_platform_location.ddc", {
    "package:angular_router/src/location/browser_platform_location.dart": src__location__browser_platform_location
  }, '{"version":3,"sourceRoot":"","sources":["browser_platform_location.dart"],"names":[],"mappings":";;;;;;QAgBsB,wBAAS;;;;;;;;;;;;;;AAM3B,qBAAS,GAAG,WAAM,WAAS;AAC3B,oBAAQ,GAAG,WAAM,QAAQ;IAC3B;;YAEyB,gBAAS;;;YAEH,iDAAe;IAAE;eAGhC,EAAgB;AAC9B,iBAAM,mBAAiB,CAAC,YAAY,EAAE,EAAE;IAC1C;iBAGkB,EAAgB;AAChC,iBAAM,mBAAiB,CAAC,cAAc,EAAE,EAAE;IAC5C;;AAGE,YAAO,gBAAS,SAAS;IAC3B;;AAGE,YAAO,gBAAS,OAAO;IACzB;;AAGE,YAAO,gBAAS,KAAK;IACvB;iBAEa,OAAc;AACzB,qBAAS,SAAS,GAAG,OAAO;IAC9B;cAEe,KAAa,EAAE,KAAY,EAAE,GAAU;AACpD,oBAAQ,YAAU,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;IACtC;iBAEkB,KAAa,EAAE,KAAY,EAAE,GAAU;AACvD,oBAAQ,eAAa,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG;IACzC;;AAGE,oBAAQ,QAAQ;IAClB;;AAGE,oBAAQ,KAAK;IACf;;;IA1DS,eAAS;IACV,cAAQ;AAGd,uDAAkB,AAAU,wBAAD,gBAAgB;AAC3C,eAAK;EACP","file":"browser_platform_location.ddc.js"}');
  // Exports:
  return {
    src__location__browser_platform_location: src__location__browser_platform_location
  };
});

//# sourceMappingURL=browser_platform_location.ddc.js.map
