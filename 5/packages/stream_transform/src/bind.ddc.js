define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__bind = Object.create(_root);
  let FnToStreamTransformerOfS$T = () => (FnToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [dart.fnType(async.Stream$(T), [async.Stream$(S)])]])))();
  src__bind.Bind$ = dart.generic((S, T) => {
    const Bind = dart.typedef('Bind', () => dart.fnType(async.Stream$(T), [async.Stream$(S)]));
    return Bind;
  });
  src__bind.Bind = src__bind.Bind$();
  src__bind.fromBind = function(S, T, bindFn) {
    return new (src__bind._StreamTransformer$(S, T)).new(bindFn);
  };
  dart.fn(src__bind.fromBind, FnToStreamTransformerOfS$T());
  const _bind = Symbol('_bind');
  const _is__StreamTransformer_default = Symbol('_is__StreamTransformer_default');
  src__bind._StreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamOfSToStreamOfT = () => (StreamOfSToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfS()])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class _StreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(values) {
        StreamOfS()._check(values);
        return this[_bind](values);
      }
    }
    (_StreamTransformer.new = function(bind) {
      this[_bind] = bind;
      _StreamTransformer.__proto__.new.call(this);
    }).prototype = _StreamTransformer.prototype;
    dart.addTypeTests(_StreamTransformer);
    _StreamTransformer.prototype[_is__StreamTransformer_default] = true;
    dart.setMethodSignature(_StreamTransformer, () => ({
      __proto__: dart.getMethods(_StreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(_StreamTransformer, () => ({
      __proto__: dart.getFields(_StreamTransformer.__proto__),
      [_bind]: dart.finalFieldType(StreamOfSToStreamOfT())
    }));
    return _StreamTransformer;
  });
  src__bind._StreamTransformer = src__bind._StreamTransformer$();
  dart.addTypeTests(src__bind._StreamTransformer, _is__StreamTransformer_default);
  dart.trackLibraries("packages/stream_transform/src/bind.ddc", {
    "package:stream_transform/src/bind.dart": src__bind
  }, '{"version":3,"sourceRoot":"","sources":["bind.dart"],"names":[],"mappings":";;;;;;;;;;;;;;sCAWuC,MAAiB;UACpD,KAAI,yCAAkB,CAAC,MAAM;EAAC;;;;;;;;;WAQjB,MAAgB;2BAAN;cAAW,YAAK,CAAC,MAAM;MAAC;;uCAHzB,IAAK;MAAL,WAAK,GAAL,IAAK;;IAAC","file":"bind.ddc.js"}');
  // Exports:
  return {
    src__bind: src__bind
  };
});

//# sourceMappingURL=bind.ddc.js.map
