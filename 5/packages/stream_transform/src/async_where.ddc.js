define(['dart_sdk', 'packages/stream_transform/src/from_handlers'], function(dart_sdk, from_handlers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__from_handlers = from_handlers.src__from_handlers;
  const _root = Object.create(null);
  const src__async_where = Object.create(_root);
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let FutureOrOfbool = () => (FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))();
  let FnToStreamTransformerOfT$T = () => (FnToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [dart.fnType(FutureOrOfbool(), [T])]])))();
  src__async_where.asyncWhere = function(T, test) {
    let valuesWaiting = 0;
    let sourceDone = false;
    return src__from_handlers.fromHandlers(T, T, {handleData: dart.fn((element, sink) => {
        valuesWaiting++;
        dart.fn(() => async.async(core.Null, function*() {
          if (dart.test(yield test(element))) sink.add(element);
          valuesWaiting--;
          if (valuesWaiting <= 0 && sourceDone) sink.close();
        }), VoidToFutureOfNull())();
      }, dart.fnType(core.Null, [T, async.EventSink$(T)])), handleDone: dart.fn(sink => {
        sourceDone = true;
        if (valuesWaiting <= 0) sink.close();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))});
  };
  dart.fn(src__async_where.asyncWhere, FnToStreamTransformerOfT$T());
  dart.trackLibraries("packages/stream_transform/src/async_where.ddc", {
    "package:stream_transform/src/async_where.dart": src__async_where
  }, '{"version":3,"sourceRoot":"","sources":["async_where.dart"],"names":[],"mappings":";;;;;;;;;;;;;4CAQsC,IAA8B;AAClE,QAAI,gBAAgB;AACpB,QAAI,aAAa;AACjB,UAAO,gCAAY,oBAAa,SAAC,OAAO,EAAE,IAAI;AAC5C,qBAAa;AACb;AACE,wBAAI,MAAM,IAAI,CAAC,OAAO,IAAG,IAAI,IAAI,CAAC,OAAO;AACzC,uBAAa;AACb,cAAI,AAAc,aAAD,IAAI,KAAK,UAAU,EAAE,IAAI,MAAM;QAClD;wEACa,QAAC,IAAI;AAClB,kBAAU,GAAG;AACb,YAAI,AAAc,aAAD,IAAI,GAAG,IAAI,MAAM;;EAEtC","file":"async_where.ddc.js"}');
  // Exports:
  return {
    src__async_where: src__async_where
  };
});

//# sourceMappingURL=async_where.ddc.js.map
