define(['dart_sdk', 'packages/stream_transform/src/from_handlers'], function(dart_sdk, from_handlers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__from_handlers = from_handlers.src__from_handlers;
  const _root = Object.create(null);
  const src__tap = Object.create(_root);
  let dynamicAnddynamicTovoid = () => (dynamicAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let Fn__ToStreamTransformerOfT$T = () => (Fn__ToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [dart.fnType(dart.void, [T])], {onError: dynamicAnddynamicTovoid(), onDone: VoidTovoid()}])))();
  src__tap.tap = function(T, fn, opts) {
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onDone = opts && 'onDone' in opts ? opts.onDone : null;
    return src__from_handlers.fromHandlers(T, T, {handleData: dart.fn((value, sink) => {
        try {
          fn(value);
        } catch (_) {
        }
        sink.add(value);
      }, dart.fnType(core.Null, [T, async.EventSink$(T)])), handleError: dart.fn((error, stackTrace, sink) => {
        try {
          onError == null ? null : onError(error, stackTrace);
        } catch (_) {
        }
        sink.addError(error, stackTrace);
      }, dart.fnType(core.Null, [core.Object, core.StackTrace, async.EventSink$(T)])), handleDone: dart.fn(sink => {
        try {
          onDone == null ? null : onDone();
        } catch (_) {
        }
        sink.close();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))});
  };
  dart.fn(src__tap.tap, Fn__ToStreamTransformerOfT$T());
  dart.trackLibraries("packages/stream_transform/src/tap.ddc", {
    "package:stream_transform/src/tap.dart": src__tap
  }, '{"version":3,"sourceRoot":"","sources":["tap.dart"],"names":[],"mappings":";;;;;;;;;;;;6BAe+B,EAAgB;QACjC;QAAiC;UAC3C,gCAAY,oBAAa,SAAC,KAAK,EAAE,IAAI;AACnC,YAAI;AACF,YAAE,CAAC,KAAK;iBACD;AAAG;AACZ,YAAI,IAAI,CAAC,KAAK;yEACA,SAAC,KAAK,EAAE,UAAU,EAAE,IAAI;AACtC,YAAI;AACF,iBAAO,kBAAP,OAAO,CAAO,KAAK,EAAE,UAAU;iBACxB;AAAG;AACZ,YAAI,SAAS,CAAC,KAAK,EAAE,UAAU;mGAClB,QAAC,IAAI;AAClB,YAAI;AACF,gBAAM,kBAAN,MAAM;iBACC;AAAG;AACZ,YAAI,MAAM;;EACV","file":"tap.ddc.js"}');
  // Exports:
  return {
    src__tap: src__tap
  };
});

//# sourceMappingURL=tap.ddc.js.map
