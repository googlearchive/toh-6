define(['dart_sdk', 'packages/stream_transform/src/from_handlers'], function(dart_sdk, from_handlers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__from_handlers = from_handlers.src__from_handlers;
  const _root = Object.create(null);
  const src__throttle = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DurationToStreamTransformerOfT$T = () => (DurationToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [core.Duration]])))();
  src__throttle.throttle = function(T, duration) {
    let timer = null;
    return src__from_handlers.fromHandlers(T, T, {handleData: dart.fn((data, sink) => {
        if (timer == null) {
          sink.add(data);
          timer = async.Timer.new(duration, dart.fn(() => {
            timer = null;
          }, VoidToNull()));
        }
      }, dart.fnType(core.Null, [T, async.EventSink$(T)]))});
  };
  dart.fn(src__throttle.throttle, DurationToStreamTransformerOfT$T());
  dart.trackLibraries("packages/stream_transform/src/throttle.ddc", {
    "package:stream_transform/src/throttle.dart": src__throttle
  }, '{"version":3,"sourceRoot":"","sources":["throttle.dart"],"names":[],"mappings":";;;;;;;;;;;uCASoC,QAAiB;AACnD,QAAM;AAEN,UAAO,gCAAY,oBAAa,SAAC,IAAI,EAAE,IAAI;AACzC,YAAI,KAAK,IAAI,MAAM;AACjB,cAAI,IAAI,CAAC,IAAI;AACb,eAAK,GAAG,AAAI,eAAK,CAAC,QAAQ,EAAE;AAC1B,iBAAK,GAAG;;;;EAIhB","file":"throttle.ddc.js"}');
  // Exports:
  return {
    src__throttle: src__throttle
  };
});

//# sourceMappingURL=throttle.ddc.js.map
