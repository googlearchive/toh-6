define(['dart_sdk', 'packages/stream_transform/src/from_handlers'], function(dart_sdk, from_handlers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__from_handlers = from_handlers.src__from_handlers;
  const _root = Object.create(null);
  const src__audit = Object.create(_root);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DurationToStreamTransformerOfT$T = () => (DurationToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [core.Duration]])))();
  src__audit.audit = function(T, duration) {
    let timer = null;
    let shouldClose = false;
    let recentData = null;
    return src__from_handlers.fromHandlers(T, T, {handleData: dart.fn((data, sink) => {
        recentData = data;
        let t = timer;
        t == null ? timer = async.Timer.new(duration, dart.fn(() => {
          sink.add(recentData);
          timer = null;
          if (shouldClose) {
            sink.close();
          }
        }, VoidToNull())) : t;
      }, dart.fnType(core.Null, [T, async.EventSink$(T)])), handleDone: dart.fn(sink => {
        if (timer != null) {
          shouldClose = true;
        } else {
          sink.close();
        }
      }, dart.fnType(core.Null, [async.EventSink$(T)]))});
  };
  dart.fn(src__audit.audit, DurationToStreamTransformerOfT$T());
  dart.trackLibraries("packages/stream_transform/src/audit.ddc", {
    "package:stream_transform/src/audit.dart": src__audit
  }, '{"version":3,"sourceRoot":"","sources":["audit.dart"],"names":[],"mappings":";;;;;;;;;;;iCAkBiC,QAAiB;AAChD,QAAM;AACN,QAAI,cAAc;AAClB,QAAE;AAEF,UAAO,gCAAY,oBAAa,SAAC,IAAM,EAAE,IAAiB;AACxD,kBAAU,GAAG,IAAI;AACjB,qBAAK;oBAAL,KAAK,GAAK,AAAI,eAAK,CAAC,QAAQ,EAAE;AAC5B,cAAI,IAAI,CAAC,UAAU;AACnB,eAAK,GAAG;AACR,cAAI,WAAW,EAAE;AACf,gBAAI,MAAM;;;wEAGD,QAAC,IAAiB;AAC/B,YAAI,KAAK,IAAI,MAAM;AACjB,qBAAW,GAAG;eACT;AACL,cAAI,MAAM;;;EAGhB","file":"audit.ddc.js"}');
  // Exports:
  return {
    src__audit: src__audit
  };
});

//# sourceMappingURL=audit.ddc.js.map
