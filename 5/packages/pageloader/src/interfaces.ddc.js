define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__interfaces = Object.create(_root);
  const $text = dartx.text;
  const $querySelectorAll = dartx.querySelectorAll;
  const _e = Symbol('_e');
  const _attr = Symbol('_attr');
  src__interfaces.PageLoaderElement = class PageLoaderElement extends core.Object {
    get visibleText() {
      return async.async(core.String, (function* visibleText() {
        let t = this[_e];
        return t == null ? null : t[$text];
      }).bind(this));
    }
    get visibleTextSync() {
      let t = this[_e];
      return t == null ? null : t[$text];
    }
    get attributes() {
      let t = this[_attr];
      return t == null ? this[_attr] = new src__interfaces.PageLoaderAttributes.new(this[_e]) : t;
    }
    clear() {
      return async.async(core.bool, (function* clear() {
        if (!html.InputElement.is(this[_e])) return false;
        let _input = html.InputElement.as(this[_e]);
        let initialValue = _input.value;
        _input.value = '';
        let result = _input.dispatchEvent(html.Event.new('input'));
        if (initialValue != null && initialValue !== '') {
          result = dart.test(_input.dispatchEvent(html.Event.new('change'))) && dart.test(result);
        }
        return result;
      }).bind(this));
    }
    click() {
      return async.async(core.bool, (function* click() {
        return this[_e].dispatchEvent(html.MouseEvent.new('click'));
      }).bind(this));
    }
    type(keys) {
      return async.async(core.bool, (function* type() {
        if (!html.InputElement.is(this[_e])) return false;
        let _input = html.InputElement.as(this[_e]);
        let initialValue = _input.value;
        _input.value = (() => {
          let l = _input.value;
          return l != null ? l : '';
        })() + dart.notNull(keys);
        let result = _input.dispatchEvent(html.Event.new('input'));
        if (_input.value != initialValue) {
          result = dart.test(_input.dispatchEvent(html.Event.new('change'))) && dart.test(result);
        }
        return result;
      }).bind(this));
    }
    getElementsByCss(selector) {
      return dart.asyncStar(src__interfaces.PageLoaderElement, (function* getElementsByCss(stream) {
        for (let e of this[_e][$querySelectorAll](html.Element, selector)) {
          if (stream.add(new src__interfaces.PageLoaderElement.new(e))) return;
          yield;
        }
      }).bind(this));
    }
  };
  (src__interfaces.PageLoaderElement.new = function(e) {
    this[_attr] = null;
    this[_e] = e;
  }).prototype = src__interfaces.PageLoaderElement.prototype;
  dart.addTypeTests(src__interfaces.PageLoaderElement);
  dart.setMethodSignature(src__interfaces.PageLoaderElement, () => ({
    __proto__: dart.getMethods(src__interfaces.PageLoaderElement.__proto__),
    clear: dart.fnType(async.Future$(core.bool), []),
    click: dart.fnType(async.Future$(core.bool), []),
    type: dart.fnType(async.Future$(core.bool), [core.String]),
    getElementsByCss: dart.fnType(async.Stream$(src__interfaces.PageLoaderElement), [core.String])
  }));
  dart.setGetterSignature(src__interfaces.PageLoaderElement, () => ({
    __proto__: dart.getGetters(src__interfaces.PageLoaderElement.__proto__),
    visibleText: dart.fnType(async.Future$(core.String), []),
    visibleTextSync: dart.fnType(core.String, []),
    attributes: dart.fnType(src__interfaces.PageLoaderAttributes, [])
  }));
  dart.setFieldSignature(src__interfaces.PageLoaderElement, () => ({
    __proto__: dart.getFields(src__interfaces.PageLoaderElement.__proto__),
    [_e]: dart.fieldType(html.Element),
    [_attr]: dart.fieldType(src__interfaces.PageLoaderAttributes)
  }));
  src__interfaces.PageLoaderAttributes = class PageLoaderAttributes extends core.Object {
    _get(name) {
      return async.async(core.String, (function* _get() {
        return this[_e].getAttribute(name);
      }).bind(this));
    }
    getAttribute(name) {
      return this[_e].getAttribute(name);
    }
  };
  (src__interfaces.PageLoaderAttributes.new = function(e) {
    this[_e] = e;
  }).prototype = src__interfaces.PageLoaderAttributes.prototype;
  dart.addTypeTests(src__interfaces.PageLoaderAttributes);
  dart.setMethodSignature(src__interfaces.PageLoaderAttributes, () => ({
    __proto__: dart.getMethods(src__interfaces.PageLoaderAttributes.__proto__),
    _get: dart.fnType(async.Future$(core.String), [core.String]),
    getAttribute: dart.fnType(core.String, [core.String])
  }));
  dart.setFieldSignature(src__interfaces.PageLoaderAttributes, () => ({
    __proto__: dart.getFields(src__interfaces.PageLoaderAttributes.__proto__),
    [_e]: dart.finalFieldType(html.Element)
  }));
  dart.trackLibraries("packages/pageloader/src/interfaces.ddc", {
    "package:pageloader/src/interfaces.dart": src__interfaces
  }, '{"version":3,"sourceRoot":"","sources":["interfaces.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AASiC;gBAAS,QAAE;;MAAM;;;cAElB,QAAE;;IAAM;;cAEC,WAAK;uCAAK,IAAI,wCAAoB,CAAC,QAAE;IAAC;;AAExD;AACnB,kCAAI,QAAE,GAAmB,MAAO;AAChC,YAAM,8BAAS,QAAE;AACjB,YAAM,eAAe,MAAM,MAAM;AACjC,cAAM,MAAM,GAAG;AACf,YAAI,SAAS,MAAM,cAAc,CAAC,AAAI,cAAK,CAAC;AAC5C,YAAI,YAAY,IAAI,QAAQ,YAAY,KAAI,IAAI;AAC9C,gBAAM,GAA6C,UAA1C,MAAM,cAAc,CAAC,AAAI,cAAK,CAAC,yBAAc,MAAM;;AAE9D,cAAO,OAAM;MACf;;;AAEqB;cAAS,SAAE,cAAc,CAAC,AAAI,mBAAU,CAAC;MAAS;;SAErD,IAAW;AAAE;AAC7B,kCAAI,QAAE,GAAmB,MAAO;AAChC,YAAM,8BAAS,QAAE;AACjB,YAAM,eAAe,MAAM,MAAM;AACjC,cAAM,MAAM,GAAwB;kBAApB,MAAM,MAAM;iCAAI;4BAAM,IAAI;AAC1C,YAAI,SAAS,MAAM,cAAc,CAAC,AAAI,cAAK,CAAC;AAC5C,YAAI,MAAM,MAAM,IAAI,YAAY,EAAE;AAChC,gBAAM,GAA6C,UAA1C,MAAM,cAAc,CAAC,AAAI,cAAK,CAAC,yBAAc,MAAM;;AAE9D,cAAO,OAAM;MACf;;qBAE2C,QAAe;AAAE;AAC1D,iBAAW,IAAK,SAAE,mBAAiB,eAAC,QAAQ,GAAG;AAC7C,yBAAM,IAAI,qCAAiB,CAAC,CAAC;UAA7B;;MAEJ;;;oDAtCuB,CAAE;IAFJ,WAAK;IAEH,QAAE,GAAF,CAAE;EAAC;;;;;;;;;;;;;;;;;;;;;SA8CC,IAAW;AAAE;cAAS,SAAE,aAAa,CAAC,IAAI;MAAC;;iBAElD,IAAW;YAAK,SAAE,aAAa,CAAC,IAAI;IAAC;;uDAJ/B,CAAE;IAAF,QAAE,GAAF,CAAE;EAAC","file":"interfaces.ddc.js"}');
  // Exports:
  return {
    src__interfaces: src__interfaces
  };
});

//# sourceMappingURL=interfaces.ddc.js.map
