define(['dart_sdk', 'packages/stream_transform/src/bind', 'packages/stream_transform/src/buffer', 'packages/stream_transform/src/from_handlers'], function(dart_sdk, bind, buffer, from_handlers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__bind = bind.src__bind;
  const src__buffer = buffer.src__buffer;
  const src__from_handlers = from_handlers.src__from_handlers;
  const _root = Object.create(null);
  const src__async_map_buffer = Object.create(_root);
  let FnToStreamTransformerOfS$T = () => (FnToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [dart.fnType(async.Future$(T), [core.List$(S)])]])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let FnAndFnToStreamTransformerOfS$T = () => (FnAndFnToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [dart.fnType(async.Future$(T), [S]), ObjectTovoid()]])))();
  src__async_map_buffer.asyncMapBuffer = function(S, T, convert) {
    let workFinished = async.StreamController.new();
    workFinished.add(null);
    return src__bind.fromBind(S, T, dart.fn(values => values.transform(core.List$(S), src__buffer.buffer(S, workFinished.stream)).transform(T, src__async_map_buffer._asyncMapThen(core.List$(S), T, convert, dart.bind(workFinished, 'add'))), dart.fnType(async.Stream$(T), [async.Stream$(S)])));
  };
  dart.fn(src__async_map_buffer.asyncMapBuffer, FnToStreamTransformerOfS$T());
  src__async_map_buffer._asyncMapThen = function(S, T, convert, then) {
    let pendingEvent = null;
    return src__from_handlers.fromHandlers(S, T, {handleData: dart.fn((event, sink) => {
        pendingEvent = convert(event).then(dart.void, dart.bind(sink, 'add')).catchError(dart.bind(sink, 'addError')).then(dart.dynamic, then);
      }, dart.fnType(core.Null, [S, async.EventSink$(T)])), handleDone: dart.fn(sink => {
        if (pendingEvent != null) {
          pendingEvent.then(dart.void, dart.fn(_ => sink.close(), dynamicTovoid()));
        } else {
          sink.close();
        }
      }, dart.fnType(core.Null, [async.EventSink$(T)]))});
  };
  dart.fn(src__async_map_buffer._asyncMapThen, FnAndFnToStreamTransformerOfS$T());
  dart.trackLibraries("packages/stream_transform/src/async_map_buffer.ddc", {
    "package:stream_transform/src/async_map_buffer.dart": src__async_map_buffer
  }, '{"version":3,"sourceRoot":"","sources":["async_map_buffer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;wDA6BI,OAAoC;AACtC,QAAI,eAAe,AAAI,0BAAgB;AAEvC,gBAAY,IAAI,CAAC;AACjB,UAAO,mBAAQ,OAAC,QAAC,MAAM,IAAK,MAAM,UACpB,gBAAC,kBAAM,IAAC,YAAY,OAAO,YAC3B,IAAC,mCAAa,mBAAC,OAAO,YAAE,YAAY;EACpD;;uDAMI,OAA0B,EAAE,IAAmB;AACjD,QAAO;AACP,UAAO,gCAAY,oBAAa,SAAC,KAAK,EAAE,IAAI;AAC1C,oBAAY,GACR,OAAO,CAAC,KAAK,MAAM,sBAAC,IAAI,oBAAgB,WAAC,IAAI,mBAAe,eAAC,IAAI;wEACxD,QAAC,IAAI;AAClB,YAAI,YAAY,IAAI,MAAM;AACxB,sBAAY,KAAK,YAAC,QAAC,CAAC,IAAK,IAAI,MAAM;eAC9B;AACL,cAAI,MAAM;;;EAGhB","file":"async_map_buffer.ddc.js"}');
  // Exports:
  return {
    src__async_map_buffer: src__async_map_buffer
  };
});

//# sourceMappingURL=async_map_buffer.ddc.js.map
