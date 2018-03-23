define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__location__base_href = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $_get = dartx._get;
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  dart.defineLazy(src__location__base_href, {
    /*src__location__base_href._urlParsingNode*/get _urlParsingNode() {
      return null;
    },
    set _urlParsingNode(_) {},
    /*src__location__base_href._baseElement*/get _baseElement() {
      return null;
    },
    set _baseElement(_) {}
  });
  src__location__base_href.baseHrefFromDOM = function() {
    let href = src__location__base_href._getBaseElementHref();
    if (href == null) {
      return null;
    }
    return src__location__base_href._relativePath(href);
  };
  dart.fn(src__location__base_href.baseHrefFromDOM, VoidToString());
  src__location__base_href._getBaseElementHref = function() {
    if (src__location__base_href._baseElement == null) {
      src__location__base_href._baseElement = html.document.querySelector('base');
      if (src__location__base_href._baseElement == null) {
        return null;
      }
    }
    return src__location__base_href._baseElement.getAttribute('href');
  };
  dart.fn(src__location__base_href._getBaseElementHref, VoidToString());
  src__location__base_href._relativePath = function(url) {
    let t = src__location__base_href._urlParsingNode;
    t == null ? src__location__base_href._urlParsingNode = html.AnchorElement.new() : t;
    src__location__base_href._urlParsingNode.href = url;
    let pathname = src__location__base_href._urlParsingNode.pathname;
    return pathname[$isEmpty] || pathname[$_get](0) === '/' ? pathname : dart.str`/${pathname}`;
  };
  dart.fn(src__location__base_href._relativePath, StringToString());
  dart.trackLibraries("packages/angular_router/src/location/base_href.ddc", {
    "package:angular_router/src/location/base_href.dart": src__location__base_href
  }, '{"version":3,"sourceRoot":"","sources":["base_href.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAEc,wCAAe;;;;MACrB,qCAAY;;;;;;AAGlB,QAAI,OAAO,4CAAmB;AAC9B,QAAI,IAAI,IAAI,MAAM;AAChB,YAAO;;AAET,UAAO,uCAAa,CAAC,IAAI;EAC3B;;;AAGE,QAAI,qCAAY,IAAI,MAAM;AACxB,8CAAe,aAAQ,cAAc,CAAC;AACtC,UAAI,qCAAY,IAAI,MAAM;AACxB,cAAO;;;AAGX,UAAO,sCAAY,aAAa,CAAC;EACnC;;oDAGqB,GAAU;AAC7B,oDAAe;2DAAK,AAAI,sBAAa;AACrC,4CAAe,KAAK,GAAG,GAAG;AAC1B,QAAI,WAAW,wCAAe,SAAS;AACvC,UAAO,AAAC,SAAQ,UAAQ,IAAI,QAAQ,QAAC,OAAM,MAAO,QAAQ,GAAG,YAAG,QAAQ;EAC1E","file":"base_href.ddc.js"}');
  // Exports:
  return {
    src__location__base_href: src__location__base_href
  };
});

//# sourceMappingURL=base_href.ddc.js.map
