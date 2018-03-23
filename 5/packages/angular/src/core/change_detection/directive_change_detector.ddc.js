define(['dart_sdk', 'packages/angular/src/core/change_detection/component_state', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, component_state, application_ref, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__component_state = component_state.src__core__change_detection__component_state;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const _root = Object.create(null);
  const src__core__change_detection__directive_change_detector = Object.create(_root);
  const $classes = dartx.classes;
  const $remove = dartx.remove;
  const $attributes = dartx.attributes;
  const $getNamespacedAttributes = dartx.getNamespacedAttributes;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _hasHostChanges = Symbol('_hasHostChanges');
  src__core__change_detection__directive_change_detector.DirectiveChangeDetector = class DirectiveChangeDetector extends core.Object {
    get directive() {
      return this[directive];
    }
    set directive(value) {
      this[directive] = value;
    }
    get view() {
      return this[view];
    }
    set view(value) {
      this[view] = value;
    }
    get el() {
      return this[el];
    }
    set el(value) {
      this[el] = value;
    }
    initCd() {
      if (!src__core__change_detection__component_state.ComponentState.is(this.directive)) dart.assertFailed();
      let s = src__core__change_detection__component_state.ComponentState._check(this.directive);
      s.stateChangeCallback = dart.fn(() => {
        if (!dart.test(this[_hasHostChanges])) {
          this[_hasHostChanges] = true;
          src__core__application_ref.getPlatform().scheduleViewUpdate(dart.bind(this, 'detectHostChanges'), this.view, this.el);
        }
      }, VoidToNull());
    }
    resetCd() {
      this[_hasHostChanges] = false;
    }
    detectHostChanges(view, el) {}
    updateElemClass(element, className, isAdd) {
      if (dart.test(isAdd)) {
        element[$classes].add(className);
      } else {
        element[$classes].remove(className);
      }
    }
    setAttr(renderElement, attributeName, attributeValue) {
      if (attributeValue != null) {
        renderElement.setAttribute(attributeName, attributeValue);
      } else {
        renderElement[$attributes][$remove](attributeName);
      }
    }
    createAttr(renderElement, attributeName, attributeValue) {
      renderElement.setAttribute(attributeName, attributeValue);
    }
    setAttrNS(renderElement, attrNS, attributeName, attributeValue) {
      if (attributeValue != null) {
        renderElement.setAttributeNS(attrNS, attributeName, attributeValue);
      } else {
        renderElement[$getNamespacedAttributes](attrNS)[$remove](attributeName);
      }
    }
    setProp(element, name, value) {
      js_util.setProperty(element, name, value);
    }
  };
  (src__core__change_detection__directive_change_detector.DirectiveChangeDetector.new = function() {
    this[directive] = null;
    this[view] = null;
    this[el] = null;
    this[_hasHostChanges] = false;
  }).prototype = src__core__change_detection__directive_change_detector.DirectiveChangeDetector.prototype;
  dart.addTypeTests(src__core__change_detection__directive_change_detector.DirectiveChangeDetector);
  const directive = Symbol("DirectiveChangeDetector.directive");
  const view = Symbol("DirectiveChangeDetector.view");
  const el = Symbol("DirectiveChangeDetector.el");
  dart.setMethodSignature(src__core__change_detection__directive_change_detector.DirectiveChangeDetector, () => ({
    __proto__: dart.getMethods(src__core__change_detection__directive_change_detector.DirectiveChangeDetector.__proto__),
    initCd: dart.fnType(dart.void, []),
    resetCd: dart.fnType(dart.void, []),
    detectHostChanges: dart.fnType(dart.void, [src__core__linker__app_view.AppView, html.Element]),
    updateElemClass: dart.fnType(dart.void, [html.Element, core.String, core.bool]),
    setAttr: dart.fnType(dart.void, [html.Element, core.String, core.String]),
    createAttr: dart.fnType(dart.void, [html.Element, core.String, core.String]),
    setAttrNS: dart.fnType(dart.void, [html.Element, core.String, core.String, core.String]),
    setProp: dart.fnType(dart.void, [html.Element, core.String, core.Object])
  }));
  dart.setFieldSignature(src__core__change_detection__directive_change_detector.DirectiveChangeDetector, () => ({
    __proto__: dart.getFields(src__core__change_detection__directive_change_detector.DirectiveChangeDetector.__proto__),
    directive: dart.fieldType(dart.dynamic),
    view: dart.fieldType(src__core__linker__app_view.AppView),
    el: dart.fieldType(html.Element),
    [_hasHostChanges]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular/src/core/change_detection/directive_change_detector.ddc", {
    "package:angular/src/core/change_detection/directive_change_detector.dart": src__core__change_detection__directive_change_detector
  }, '{"version":3,"sourceRoot":"","sources":["directive_change_detector.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAYU;;;;;;IACA;;;;;;IACA;;;;;;;AAIN,0EAAO,cAAS;AAChB,UAAe,uEAAI,cAAS;AAC5B,OAAC,oBAAoB,GAAG;AACtB,uBAAK,qBAAe,GAAE;AACpB,+BAAe,GAAG;AAClB,gDAAW,qBAAqB,CAAC,oCAAiB,EAAE,SAAI,EAAE,OAAE;;;IAGlE;;AAGE,2BAAe,GAAG;IACpB;sBAGuB,IAAY,EAAE,EAAU,GAAG;oBAG7B,OAAe,EAAE,SAAgB,EAAE,KAAU;AAChE,oBAAI,KAAK,GAAE;AACT,eAAO,UAAQ,IAAI,CAAC,SAAS;aACxB;AACL,eAAO,UAAQ,OAAO,CAAC,SAAS;;IAEpC;YAGI,aAAqB,EAAE,aAAoB,EAAE,cAAqB;AACpE,UAAI,cAAc,IAAI,MAAM;AAC1B,qBAAa,aAAa,CAAC,aAAa,EAAE,cAAc;aACnD;AACL,qBAAa,aAAW,SAAO,CAAC,aAAa;;IAEjD;eAGI,aAAqB,EAAE,aAAoB,EAAE,cAAqB;AACpE,mBAAa,aAAa,CAAC,aAAa,EAAE,cAAc;IAC1D;cAEe,aAAqB,EAAE,MAAa,EAAE,aAAoB,EACrE,cAAqB;AACvB,UAAI,cAAc,IAAI,MAAM;AAC1B,qBAAa,eAAe,CAAC,MAAM,EAAE,aAAa,EAAE,cAAc;aAC7D;AACL,qBAAa,0BAAwB,CAAC,MAAM,UAAQ,CAAC,aAAa;;IAEtE;YAEa,OAAe,EAAE,IAAW,EAAE,KAAY;AACrD,MAAQ,mBAAW,CAAC,OAAO,EAAE,IAAI,EAAE,KAAK;IAC1C;;;IAzDQ,eAAS;IACT,UAAI;IACJ,QAAE;IACL,qBAAe,GAAG;EAuDzB","file":"directive_change_detector.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__directive_change_detector: src__core__change_detection__directive_change_detector
  };
});

//# sourceMappingURL=directive_change_detector.ddc.js.map
