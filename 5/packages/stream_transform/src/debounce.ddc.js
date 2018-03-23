define(['dart_sdk', 'packages/stream_transform/src/from_handlers'], function(dart_sdk, from_handlers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__from_handlers = from_handlers.src__from_handlers;
  const _root = Object.create(null);
  const src__debounce = Object.create(_root);
  const $add = dartx.add;
  let DurationToStreamTransformerOfT$T = () => (DurationToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [core.Duration]])))();
  let DurationToStreamTransformerOfT$ListOfT = () => (DurationToStreamTransformerOfT$ListOfT = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, core.List$(T)), [core.Duration]])))();
  let TAndListOfTToListOfT = () => (TAndListOfTToListOfT = dart.constFn(dart.gFnType(T => [core.List$(T), [T, core.List$(T)]])))();
  let TAnddynamicToT = () => (TAnddynamicToT = dart.constFn(dart.gFnType(T => [T, [T, dart.dynamic]])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DurationAndFnToStreamTransformerOfT$R = () => (DurationAndFnToStreamTransformerOfT$R = dart.constFn(dart.gFnType((T, R) => [async.StreamTransformer$(T, R), [core.Duration, dart.fnType(R, [T, R])]])))();
  src__debounce.debounce = function(T, duration) {
    return src__debounce._debounceAggregate(T, T, duration, dart.gbind(src__debounce._dropPrevious, T));
  };
  dart.fn(src__debounce.debounce, DurationToStreamTransformerOfT$T());
  src__debounce.debounceBuffer = function(T, duration) {
    return src__debounce._debounceAggregate(T, core.List$(T), duration, dart.gbind(src__debounce._collectToList, T));
  };
  dart.fn(src__debounce.debounceBuffer, DurationToStreamTransformerOfT$ListOfT());
  src__debounce._collectToList = function(T, element, soFar) {
    let t = soFar;
    t == null ? soFar = _interceptors.JSArray$(T).of([]) : t;
    soFar[$add](element);
    return soFar;
  };
  dart.fn(src__debounce._collectToList, TAndListOfTToListOfT());
  src__debounce._dropPrevious = function(T, element, _) {
    return element;
  };
  dart.fn(src__debounce._dropPrevious, TAnddynamicToT());
  src__debounce._debounceAggregate = function(T, R, duration, collect) {
    let timer = null;
    let soFar = null;
    let shouldClose = false;
    return src__from_handlers.fromHandlers(T, R, {handleData: dart.fn((value, sink) => {
        let t = timer;
        t == null ? null : t.cancel();
        timer = async.Timer.new(duration, dart.fn(() => {
          sink.add(soFar);
          if (shouldClose) {
            sink.close();
          }
          soFar = null;
          timer = null;
        }, VoidToNull()));
        soFar = collect(value, soFar);
      }, dart.fnType(core.Null, [T, async.EventSink$(R)])), handleDone: dart.fn(sink => {
        if (soFar != null) {
          shouldClose = true;
        } else {
          sink.close();
        }
      }, dart.fnType(core.Null, [async.EventSink$(R)]))});
  };
  dart.fn(src__debounce._debounceAggregate, DurationAndFnToStreamTransformerOfT$R());
  dart.trackLibraries("packages/stream_transform/src/debounce.ddc", {
    "package:stream_transform/src/debounce.dart": src__debounce
  }, '{"version":3,"sourceRoot":"","sources":["debounce.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;uCAaoC,QAAiB;UACjD,iCAAkB,OAAC,QAAQ,aAAE,2BAAa;EAAC;;6CAOC,QAAiB;UAC7D,iCAAkB,mBAAC,QAAQ,aAAE,4BAAc;EAAC;;6CAEtB,OAAS,EAAE,KAAa;AAChD,iBAAK;gBAAL,KAAK,GAAK;AACV,SAAK,MAAI,CAAC,OAAO;AACjB,UAAO,MAAK;EACd;;4CAEmB,OAAS,EAAE,CAAC;UAAK,QAAO;;;oDAKvC,QAAiB,EAAE,OAA6B;AAClD,QAAM;AACN,QAAE;AACF,QAAI,cAAc;AAClB,UAAO,gCAAY,oBAAa,SAAC,KAAO,EAAE,IAAiB;AACzD,qBAAK;;AACL,aAAK,GAAG,AAAI,eAAK,CAAC,QAAQ,EAAE;AAC1B,cAAI,IAAI,CAAC,KAAK;AACd,cAAI,WAAW,EAAE;AACf,gBAAI,MAAM;;AAEZ,eAAK,GAAG;AACR,eAAK,GAAG;;AAEV,aAAK,GAAG,OAAO,CAAC,KAAK,EAAE,KAAK;wEACf,QAAC,IAAiB;AAC/B,YAAI,KAAK,IAAI,MAAM;AACjB,qBAAW,GAAG;eACT;AACL,cAAI,MAAM;;;EAGhB","file":"debounce.ddc.js"}');
  // Exports:
  return {
    src__debounce: src__debounce
  };
});

//# sourceMappingURL=debounce.ddc.js.map
