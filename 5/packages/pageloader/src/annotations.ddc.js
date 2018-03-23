define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__annotations = Object.create(_root);
  dart.defineLazy(src__annotations, {
    /*src__annotations.optional*/get optional() {
      return dart.const(new src__annotations._Optional.new());
    }
  });
  src__annotations._Optional = class _Optional extends core.Object {
    toString() {
      return '@optional';
    }
  };
  (src__annotations._Optional.new = function() {
  }).prototype = src__annotations._Optional.prototype;
  dart.addTypeTests(src__annotations._Optional);
  dart.defineExtensionMethods(src__annotations._Optional, ['toString']);
  src__annotations.ByTagName = class ByTagName extends core.Object {};
  (src__annotations.ByTagName.new = function(selector) {
  }).prototype = src__annotations.ByTagName.prototype;
  dart.addTypeTests(src__annotations.ByTagName);
  src__annotations.ByCss = class ByCss extends core.Object {};
  (src__annotations.ByCss.new = function(selector) {
  }).prototype = src__annotations.ByCss.prototype;
  dart.addTypeTests(src__annotations.ByCss);
  src__annotations.FirstByCss = class FirstByCss extends core.Object {};
  (src__annotations.FirstByCss.new = function(selector) {
  }).prototype = src__annotations.FirstByCss.prototype;
  dart.addTypeTests(src__annotations.FirstByCss);
  src__annotations.WithClass = class WithClass extends core.Object {};
  (src__annotations.WithClass.new = function(_class) {
  }).prototype = src__annotations.WithClass.prototype;
  dart.addTypeTests(src__annotations.WithClass);
  src__annotations.WithVisibleText = class WithVisibleText extends core.Object {};
  (src__annotations.WithVisibleText.new = function(_class) {
  }).prototype = src__annotations.WithVisibleText.prototype;
  dart.addTypeTests(src__annotations.WithVisibleText);
  dart.trackLibraries("packages/pageloader/src/annotations.ddc", {
    "package:pageloader/src/annotations.dart": src__annotations
  }, '{"version":3,"sourceRoot":"","sources":["annotations.dart"],"names":[],"mappings":";;;;;;;;MAAM,yBAAQ;YAAG,gBAAM,8BAAS;;;;;YAMT;IAAW;;;EAHf;;;;6CAOD,QAAe;EAAC;;;yCAIpB,QAAe;EAAC;;;8CAIX,QAAe;EAAC;;;6CAIjB,MAAa;EAAC;;;mDAIR,MAAa;EAAC","file":"annotations.ddc.js"}');
  // Exports:
  return {
    src__annotations: src__annotations
  };
});

//# sourceMappingURL=annotations.ddc.js.map
