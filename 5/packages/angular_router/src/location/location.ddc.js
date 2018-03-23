define(['dart_sdk', 'packages/angular_router/src/location/location_strategy'], function(dart_sdk, location_strategy) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location__location_strategy = location_strategy.src__location__location_strategy;
  const _root = Object.create(null);
  const src__location__location = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $startsWith = dartx.startsWith;
  const $isEmpty = dartx.isEmpty;
  const $endsWith = dartx.endsWith;
  const $substring = dartx.substring;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StringAndStringToString = () => (StringAndStringToString = dart.constFn(dart.fnType(core.String, [core.String, core.String])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  const _baseHref = Symbol('_baseHref');
  const _subject = Symbol('_subject');
  src__location__location.Location = class Location extends core.Object {
    get platformStrategy() {
      return this[platformStrategy$];
    }
    set platformStrategy(value) {
      super.platformStrategy = value;
    }
    static _sanitizeBaseHref(platformStrategy) {
      let browserBaseHref = platformStrategy.getBaseHref();
      return src__location__location.Location.stripTrailingSlash(src__location__location._stripIndexHtml(browserBaseHref));
    }
    path() {
      return this.normalize(this.platformStrategy.path());
    }
    hash() {
      return this.normalize(this.platformStrategy.hash());
    }
    normalize(url) {
      return src__location__location.Location.stripTrailingSlash(src__location__location._stripBaseHref(this[_baseHref], src__location__location._stripIndexHtml(url)));
    }
    prepareExternalUrl(url) {
      if (url[$isNotEmpty] && !url[$startsWith]('/')) {
        url = dart.str`/${url}`;
      }
      return this.platformStrategy.prepareExternalUrl(url);
    }
    go(path, query) {
      if (query === void 0) query = '';
      this.platformStrategy.pushState(null, '', path, query);
    }
    replaceState(path, query) {
      if (query === void 0) query = '';
      this.platformStrategy.replaceState(null, '', path, query);
    }
    forward() {
      this.platformStrategy.forward();
    }
    back() {
      this.platformStrategy.back();
    }
    subscribe(onNext, onThrow, onReturn) {
      if (onThrow === void 0) onThrow = null;
      if (onReturn === void 0) onReturn = null;
      return this[_subject].stream.listen(onNext, {onError: onThrow, onDone: onReturn});
    }
    static normalizeQueryParams(params) {
      return params[$isEmpty] || params[$startsWith]('?') ? params : dart.str`?${params}`;
    }
    static joinWithSlash(start, end) {
      if (start[$isEmpty]) {
        return end;
      }
      if (end[$isEmpty]) {
        return start;
      }
      let slashes = 0;
      if (start[$endsWith]('/')) {
        slashes++;
      }
      if (end[$startsWith]('/')) {
        slashes++;
      }
      if (slashes === 2) {
        return dart.notNull(start) + end[$substring](1);
      }
      if (slashes === 1) {
        return dart.notNull(start) + dart.notNull(end);
      }
      return dart.str`${start}/${end}`;
    }
    static stripTrailingSlash(url) {
      if (url[$endsWith]('/')) {
        url = url[$substring](0, url.length - 1);
      }
      return url;
    }
  };
  (src__location__location.Location.new = function(platformStrategy) {
    this[_subject] = async.StreamController.new();
    this[platformStrategy$] = platformStrategy;
    this[_baseHref] = src__location__location.Location._sanitizeBaseHref(platformStrategy);
    this.platformStrategy.onPopState(dart.fn(ev => {
      this[_subject].add(new (IdentityMapOfString$Object()).from(['url', this.path(), 'pop', true, 'type', ev.type]));
    }, EventToNull()));
  }).prototype = src__location__location.Location.prototype;
  dart.addTypeTests(src__location__location.Location);
  const platformStrategy$ = Symbol("Location.platformStrategy");
  dart.setMethodSignature(src__location__location.Location, () => ({
    __proto__: dart.getMethods(src__location__location.Location.__proto__),
    path: dart.fnType(core.String, []),
    hash: dart.fnType(core.String, []),
    normalize: dart.fnType(core.String, [core.String]),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    go: dart.fnType(dart.void, [core.String], [core.String]),
    replaceState: dart.fnType(dart.void, [core.String], [core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, []),
    subscribe: dart.fnType(core.Object, [dynamicTovoid()], [dynamicTovoid(), VoidTovoid()])
  }));
  dart.setStaticMethodSignature(src__location__location.Location, () => ({
    _sanitizeBaseHref: dart.fnType(core.String, [src__location__location_strategy.LocationStrategy]),
    normalizeQueryParams: dart.fnType(core.String, [core.String]),
    joinWithSlash: dart.fnType(core.String, [core.String, core.String]),
    stripTrailingSlash: dart.fnType(core.String, [core.String])
  }));
  dart.setFieldSignature(src__location__location.Location, () => ({
    __proto__: dart.getFields(src__location__location.Location.__proto__),
    platformStrategy: dart.finalFieldType(src__location__location_strategy.LocationStrategy),
    [_subject]: dart.finalFieldType(async.StreamController),
    [_baseHref]: dart.finalFieldType(core.String)
  }));
  src__location__location._stripBaseHref = function(baseHref, url) {
    if (baseHref[$isNotEmpty] && url[$startsWith](baseHref)) {
      return url[$substring](baseHref.length);
    }
    return url;
  };
  dart.fn(src__location__location._stripBaseHref, StringAndStringToString());
  src__location__location._stripIndexHtml = function(url) {
    if (url[$endsWith]('/index.html')) {
      return url[$substring](0, url.length - 11);
    }
    return url;
  };
  dart.fn(src__location__location._stripIndexHtml, StringToString());
  dart.trackLibraries("packages/angular_router/src/location/location.ddc", {
    "package:angular_router/src/location/location.dart": src__location__location
  }, '{"version":3,"sourceRoot":"","sources":["location.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAmDyB;;;;;;6BAWS,gBAAiC;AAC/D,UAAI,kBAAkB,gBAAgB,YAAY;AAClD,YAAO,iCAAQ,mBAAmB,CAAC,uCAAe,CAAC,eAAe;IACpE;;YAGiB,eAAS,CAAC,qBAAgB,KAAK;IAAG;;YAElC,eAAS,CAAC,qBAAgB,KAAK;IAAG;cAIlC,GAAU;YAAK,iCAAQ,mBACjB,CAAC,sCAAc,CAAC,eAAS,EAAE,uCAAe,CAAC,GAAG;IAAG;uBAO9C,GAAU;AAClC,UAAI,GAAG,aAAW,KAAK,GAAG,aAAW,CAAC,MAAM;AAC1C,WAAG,GAAG,YAAG,GAAG;;AAEd,YAAO,sBAAgB,mBAAmB,CAAC,GAAG;IAChD;OAKQ,IAAW,EAAG,KAAiB;4BAAV,QAAQ;AACnC,2BAAgB,UAAU,CAAC,MAAM,IAAI,IAAI,EAAE,KAAK;IAClD;iBAIkB,IAAW,EAAG,KAAiB;4BAAV,QAAQ;AAC7C,2BAAgB,aAAa,CAAC,MAAM,IAAI,IAAI,EAAE,KAAK;IACrD;;AAIE,2BAAgB,QAAQ;IAC1B;;AAIE,2BAAgB,KAAK;IACvB;cAIE,MAA0B,EAC1B,OAA+B,EAC/B,QAAe;8BADV;+BACA;AAEL,YAAO,eAAQ,OAAO,OAAO,CAAC,MAAM,YAAW,OAAO,UAAU,QAAQ;IAC1E;gCAImC,MAAa;AAC9C,YAAO,OAAM,UAAQ,IAAI,MAAM,aAAW,CAAC,OAAO,MAAM,GAAG,YAAG,MAAM;IACtE;yBAG4B,KAAY,EAAE,GAAU;AAClD,UAAI,KAAK,UAAQ,EAAE;AACjB,cAAO,IAAG;;AAEZ,UAAI,GAAG,UAAQ,EAAE;AACf,cAAO,MAAK;;AAEd,UAAI,UAAU;AACd,UAAI,KAAK,WAAS,CAAC,MAAM;AACvB,eAAO;;AAET,UAAI,GAAG,aAAW,CAAC,MAAM;AACvB,eAAO;;AAET,UAAI,OAAO,KAAI,GAAG;AAChB,cAAa,cAAN,KAAK,IAAG,GAAG,YAAU,CAAC;;AAE/B,UAAI,OAAO,KAAI,GAAG;AAChB,cAAa,cAAN,KAAK,iBAAG,GAAG;;AAEpB,YAAO,YAAE,KAAK,IAAE,GAAG;IACrB;8BAGiC,GAAU;AACzC,UAAI,GAAG,WAAS,CAAC,MAAM;AACrB,WAAG,GAAG,GAAG,YAAU,CAAC,GAAG,AAAW,GAAR,OAAO,GAAG;;AAEtC,YAAO,IAAG;IACZ;;mDAtGS,gBAAqB;IAHxB,cAAQ,GAAG,AAAI,0BAAyB;IAGhC,uBAAgB,GAAhB,gBAAgB;IACxB,eAAS,GAAG,kDAAiB,CAAC,gBAAgB;AAClD,yBAAgB,WAAW,CAAC,QAAC,EAAE;AAC7B,oBAAQ,IAAI,CAAC,yCAAC,OAAO,SAAI,IAAI,OAAO,MAAM,QAAQ,EAAE,KAAK;;EAE7D;;;;;;;;;;;;;;;;;;;;;;;;;;;oDAoGoB,QAAe,EAAE,GAAU;AAC/C,QAAI,QAAQ,aAAW,IAAI,GAAG,aAAW,CAAC,QAAQ,GAAG;AACnD,YAAO,IAAG,YAAU,CAAC,QAAQ,OAAO;;AAEtC,UAAO,IAAG;EACZ;;qDAEuB,GAAU;AAC/B,QAAI,GAAG,WAAS,CAAC,gBAAgB;AAE/B,YAAO,IAAG,YAAU,CAAC,GAAG,AAAW,GAAR,OAAO,GAAG;;AAEvC,UAAO,IAAG;EACZ","file":"location.ddc.js"}');
  // Exports:
  return {
    src__location__location: src__location__location
  };
});

//# sourceMappingURL=location.ddc.js.map
