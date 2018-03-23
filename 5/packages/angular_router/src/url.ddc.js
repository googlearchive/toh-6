define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__url = Object.create(_root);
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  const $endsWith = dartx.endsWith;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $keys = dartx.keys;
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  src__url.Url = class Url extends core.Object {
    static parse(url) {
      let uri = core.Uri.parse(url);
      return new src__url.Url.new(src__url.Url.normalizePath(uri.path), {fragment: uri.fragment, queryParameters: uri.queryParameters});
    }
    static normalizePath(path, hashStrategy) {
      if (hashStrategy === void 0) hashStrategy = false;
      if (path == null) return null;
      hashStrategy = dart.test(src__url.Url.isHashStrategy) || dart.test(hashStrategy);
      if (!dart.test(hashStrategy) && !path[$startsWith]('/')) {
        path = dart.str`/${path}`;
      }
      if (dart.test(hashStrategy) && path[$startsWith]('/')) {
        path = path[$substring](1);
      }
      if (path[$endsWith]('/')) {
        path = path[$substring](0, path.length - 1);
      }
      return path;
    }
    static normalizeHash(hash) {
      if (hash[$startsWith]('#')) {
        return hash[$substring](1);
      }
      return hash;
    }
    static trimSlashes(path) {
      if (path == null) return null;
      if (path[$startsWith]('/')) path = path[$substring](1);
      if (path[$endsWith]('/')) path = path[$substring](0, path.length - 1);
      return path;
    }
    get fragment() {
      return this[fragment$];
    }
    set fragment(value) {
      super.fragment = value;
    }
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    get queryParameters() {
      return this[queryParameters$];
    }
    set queryParameters(value) {
      super.queryParameters = value;
    }
    toUrl() {
      let buffer = new core.StringBuffer.new();
      buffer.write(this.path);
      if ((this.queryParameters == null ? null : this.queryParameters[$isNotEmpty]) === true) {
        buffer.write('?');
        buffer.writeAll(this.queryParameters[$keys][$map](dart.dynamic, dart.fn(k => {
          let v = this.queryParameters[$_get](k);
          k = core.Uri.encodeComponent(k);
          return v != null ? dart.str`${k}=${core.Uri.encodeComponent(v)}` : k;
        }, StringToString())), '&');
      }
      if ((this.fragment == null ? null : this.fragment[$isNotEmpty]) === true) {
        buffer.write('#');
        buffer.write(this.fragment);
      }
      return buffer.toString();
    }
    toString() {
      return this.toUrl();
    }
  };
  (src__url.Url.new = function(path, opts) {
    let fragment = opts && 'fragment' in opts ? opts.fragment : '';
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    this[path$] = path != null ? path : '';
    this[fragment$] = fragment != null ? fragment : '';
    this[queryParameters$] = MapOfString$String().unmodifiable(queryParameters != null ? queryParameters : new _js_helper.LinkedMap.new());
  }).prototype = src__url.Url.prototype;
  dart.addTypeTests(src__url.Url);
  const fragment$ = Symbol("Url.fragment");
  const path$ = Symbol("Url.path");
  const queryParameters$ = Symbol("Url.queryParameters");
  dart.setMethodSignature(src__url.Url, () => ({
    __proto__: dart.getMethods(src__url.Url.__proto__),
    toUrl: dart.fnType(core.String, [])
  }));
  dart.setStaticMethodSignature(src__url.Url, () => ({
    parse: dart.fnType(src__url.Url, [core.String]),
    normalizePath: dart.fnType(core.String, [core.String], [core.bool]),
    normalizeHash: dart.fnType(core.String, [core.String]),
    trimSlashes: dart.fnType(core.String, [core.String])
  }));
  dart.setFieldSignature(src__url.Url, () => ({
    __proto__: dart.getFields(src__url.Url.__proto__),
    fragment: dart.finalFieldType(core.String),
    path: dart.finalFieldType(core.String),
    queryParameters: dart.finalFieldType(MapOfString$String())
  }));
  dart.defineExtensionMethods(src__url.Url, ['toString']);
  dart.defineLazy(src__url.Url, {
    /*src__url.Url.isHashStrategy*/get isHashStrategy() {
      return false;
    },
    set isHashStrategy(_) {}
  });
  dart.trackLibraries("packages/angular_router/src/url.ddc", {
    "package:angular_router/src/url.dart": src__url
  }, '{"version":3,"sourceRoot":"","sources":["url.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;iBAWmB,GAAU;AACzB,UAAM,MAAM,QAAG,MAAM,CAAC,GAAG;AACzB,YAAO,KAAI,gBAAG,CACZ,0BAAa,CAAC,GAAG,KAAK,cACZ,GAAG,SAAS,mBACL,GAAG,gBAAgB;IAExC;yBAG4B,IAAW,EAAG,YAAyB;mCAApB,eAAe;AAC5D,UAAI,IAAI,IAAI,MAAM,MAAO;AACzB,kBAAY,GAAkB,UAAf,2BAAc,eAAI,YAAY;AAE7C,qBAAK,YAAY,MAAK,IAAI,aAAW,CAAC,MAAM;AAC1C,YAAI,GAAG,YAAG,IAAI;;AAEhB,oBAAI,YAAY,KAAI,IAAI,aAAW,CAAC,MAAM;AACxC,YAAI,GAAG,IAAI,YAAU,CAAC;;AAGxB,UAAI,IAAI,WAAS,CAAC,MAAM;AACtB,YAAI,GAAG,IAAI,YAAU,CAAC,GAAG,AAAY,IAAR,OAAO,GAAG;;AAGzC,YAAO,KAAI;IACb;yBAG4B,IAAW;AACrC,UAAI,IAAI,aAAW,CAAC,MAAM;AACxB,cAAO,KAAI,YAAU,CAAC;;AAGxB,YAAO,KAAI;IACb;uBAE0B,IAAW;AACnC,UAAI,IAAI,IAAI,MAAM,MAAO;AACzB,UAAI,IAAI,aAAW,CAAC,MAAM,IAAI,GAAG,IAAI,YAAU,CAAC;AAChD,UAAI,IAAI,WAAS,CAAC,MAAM,IAAI,GAAG,IAAI,YAAU,CAAC,GAAG,AAAY,IAAR,OAAO,GAAG;AAE/D,YAAO,KAAI;IACb;IAGa;;;;;;IAGA;;;;;;IAGa;;;;;;;AASxB,UAAM,SAAS,IAAI,qBAAY;AAC/B,YAAM,MAAM,CAAC,SAAI;AACjB,WAAI,oBAAe,kBAAf,oBAAe,aAAY,MAAI,MAAM;AACvC,QACE,AAAE,YAAK,CAAC;QACR,AAAE,eAAQ,CAAC,oBAAe,OAAK,MAAI,eAAC,QAAC,CAAC;AACpC,cAAM,IAAI,oBAAe,QAAC,CAAC;AAC3B,WAAC,GAAG,QAAG,gBAAgB,CAAC,CAAC;AACzB,gBAAO,EAAC,IAAI,OAAO,WAAE,CAAC,IAAG,QAAG,gBAAgB,CAAC,CAAC,MAAM,CAAC;+BACnD;;AAER,WAAI,aAAQ,kBAAR,aAAQ,aAAY,MAAI,MAAM;AAChC,QAAM,AAAE,YAAK,CAAC;QAAI,AAAE,YAAK,CAAC,aAAQ;;AAEpC,YAAO,OAAM,SAAS;IACxB;;YAGqB,WAAK;IAAE;;+BAzBxB,IAAW;QAAU,wDAAU;QAAwB;IAChD,WAAI,GAAG,IAAI,WAAJ,IAAI,GAAI;IACf,eAAQ,GAAG,QAAQ,WAAR,QAAQ,GAAI;IACvB,sBAAe,GAAG,AAAI,iCAAgB,CAAC,eAAe,WAAf,eAAe,GAAI;EAAG;;;;;;;;;;;;;;;;;;;;;;;MA5D5D,2BAAc;YAAG","file":"url.ddc.js"}');
  // Exports:
  return {
    src__url: src__url
  };
});

//# sourceMappingURL=url.ddc.js.map
