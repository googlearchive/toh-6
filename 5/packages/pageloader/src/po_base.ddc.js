define(['dart_sdk', 'packages/pageloader/src/interfaces', 'packages/angular_test/src/frontend/bed'], function(dart_sdk, interfaces, bed) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interfaces = interfaces.src__interfaces;
  const src__frontend__fixture = bed.src__frontend__fixture;
  const _root = Object.create(null);
  const src__po_base = Object.create(_root);
  const $clear = dartx.clear;
  const $putIfAbsent = dartx.putIfAbsent;
  const $contains = dartx.contains;
  const $firstWhere = dartx.firstWhere;
  const $toList = dartx.toList;
  const $querySelectorAll = dartx.querySelectorAll;
  let ElementToPageLoaderElement = () => (ElementToPageLoaderElement = dart.constFn(dart.fnType(src__interfaces.PageLoaderElement, [html.Element])))();
  let IdentityMapOfString$PageLoaderElement = () => (IdentityMapOfString$PageLoaderElement = dart.constFn(_js_helper.IdentityMap$(core.String, src__interfaces.PageLoaderElement)))();
  let ListOfPageLoaderElement = () => (ListOfPageLoaderElement = dart.constFn(core.List$(src__interfaces.PageLoaderElement)))();
  let IdentityMapOfString$ListOfPageLoaderElement = () => (IdentityMapOfString$ListOfPageLoaderElement = dart.constFn(_js_helper.IdentityMap$(core.String, ListOfPageLoaderElement())))();
  let VoidToPageLoaderElement = () => (VoidToPageLoaderElement = dart.constFn(dart.fnType(src__interfaces.PageLoaderElement, [])))();
  let PageLoaderElementTobool = () => (PageLoaderElementTobool = dart.constFn(dart.fnType(core.bool, [src__interfaces.PageLoaderElement])))();
  let VoidToListOfPageLoaderElement = () => (VoidToListOfPageLoaderElement = dart.constFn(dart.fnType(ListOfPageLoaderElement(), [])))();
  let MapOfString$PageLoaderElement = () => (MapOfString$PageLoaderElement = dart.constFn(core.Map$(core.String, src__interfaces.PageLoaderElement)))();
  let MapOfString$ListOfPageLoaderElement = () => (MapOfString$ListOfPageLoaderElement = dart.constFn(core.Map$(core.String, ListOfPageLoaderElement())))();
  src__po_base._newPLE = function(e) {
    return src__interfaces.PageLoaderElement._check(e == null ? e : new src__interfaces.PageLoaderElement.new(e));
  };
  dart.fn(src__po_base._newPLE, ElementToPageLoaderElement());
  const _elCache = Symbol('_elCache');
  const _listElCache = Symbol('_listElCache');
  const _root$ = Symbol('_root');
  src__po_base.PageObjectBase = class PageObjectBase extends core.Object {
    get root() {
      return this[_root$];
    }
    set root(newRoot) {
      this[_elCache][$clear]();
      this[_listElCache][$clear]();
      this[_root$] = newRoot;
    }
    q(selectors, opts) {
      let withVisibleText = opts && 'withVisibleText' in opts ? opts.withVisibleText : null;
      return withVisibleText == null ? this[_elCache][$putIfAbsent](selectors, dart.fn(() => src__po_base._newPLE(this.root.querySelector(selectors)), VoidToPageLoaderElement())) : this.qq(selectors)[$firstWhere](dart.fn(e => e.visibleTextSync[$contains](withVisibleText), PageLoaderElementTobool()));
    }
    qq(selectors) {
      return this[_listElCache][$putIfAbsent](selectors, dart.fn(() => this.root[$querySelectorAll](html.Element, selectors).map(src__interfaces.PageLoaderElement, dart.fn(e => new src__interfaces.PageLoaderElement.new(e), ElementToPageLoaderElement()))[$toList](), VoidToListOfPageLoaderElement()));
    }
    resolve(fixture) {
      return async.async(src__po_base.PageObjectBase, (function* resolve() {
        yield fixture.update();
        this.root = fixture.rootElement;
        return this;
      }).bind(this));
    }
  };
  (src__po_base.PageObjectBase.new = function() {
    this[_elCache] = new (IdentityMapOfString$PageLoaderElement()).new();
    this[_listElCache] = new (IdentityMapOfString$ListOfPageLoaderElement()).new();
    this[_root$] = null;
  }).prototype = src__po_base.PageObjectBase.prototype;
  dart.addTypeTests(src__po_base.PageObjectBase);
  dart.setMethodSignature(src__po_base.PageObjectBase, () => ({
    __proto__: dart.getMethods(src__po_base.PageObjectBase.__proto__),
    q: dart.fnType(src__interfaces.PageLoaderElement, [core.String], {withVisibleText: core.String}),
    qq: dart.fnType(core.List$(src__interfaces.PageLoaderElement), [core.String]),
    resolve: dart.fnType(async.Future$(src__po_base.PageObjectBase), [src__frontend__fixture.NgTestFixture])
  }));
  dart.setGetterSignature(src__po_base.PageObjectBase, () => ({
    __proto__: dart.getGetters(src__po_base.PageObjectBase.__proto__),
    root: dart.fnType(html.Element, [])
  }));
  dart.setSetterSignature(src__po_base.PageObjectBase, () => ({
    __proto__: dart.getSetters(src__po_base.PageObjectBase.__proto__),
    root: dart.fnType(dart.void, [html.Element])
  }));
  dart.setFieldSignature(src__po_base.PageObjectBase, () => ({
    __proto__: dart.getFields(src__po_base.PageObjectBase.__proto__),
    [_elCache]: dart.finalFieldType(MapOfString$PageLoaderElement()),
    [_listElCache]: dart.finalFieldType(MapOfString$ListOfPageLoaderElement()),
    [_root$]: dart.fieldType(html.Element)
  }));
  dart.trackLibraries("packages/pageloader/src/po_base.ddc", {
    "package:pageloader/src/po_base.dart": src__po_base
  }, '{"version":3,"sourceRoot":"","sources":["po_base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;kCAQ0B,CAAS;oDAC/B,CAAC,IAAI,OAAO,CAAC,GAAG,IAAI,qCAAiB,CAAC,CAAC;EAAC;;;;;;;YAQtB,aAAK;;aAEX,OAAe;AAC3B,oBAAQ,QAAM;AACd,wBAAY,QAAM;AAClB,kBAAK,GAAG,OAAO;IACjB;MAEoB,SAAgB;UAAU;YAC1C,gBAAe,IAAI,OACb,cAAQ,cAAY,CAClB,SAAS,EACT,cAAM,oBAAO,CAAC,SAAI,cAAc,CAAC,SAAS,kCAE5C,OAAE,CAAC,SAAS,cACC,CAAC,QAAC,CAAC,IAAK,CAAC,gBAAgB,WAAS,CAAC,eAAe;IAAE;OAEhD,SAAgB;YAAK,mBAAY,cAAY,CAClE,SAAS,EACT,cAAM,SAAI,mBACW,eAAC,SAAS,KACvB,oCAAC,QAAC,CAAC,IAAK,IAAI,qCAAiB,CAAC,CAAC,0CAC5B;IACZ;YAE0B,OAAqB;AAAE;AACpD,cAAM,OAAO,OAAO;AACpB,iBAAI,GAAG,OAAO,YAAY;AAC1B,cAAO;MACT;;;;IAlCM,cAAQ,GAAG;IACX,kBAAY,GAAG;IAEb,YAAK;EAgCf","file":"po_base.ddc.js"}');
  // Exports:
  return {
    src__po_base: src__po_base
  };
});

//# sourceMappingURL=po_base.ddc.js.map
