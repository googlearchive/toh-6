define(['dart_sdk', 'packages/stream_transform/src/bind', 'packages/stream_transform/src/concat'], function(dart_sdk, bind, concat) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__bind = bind.src__bind;
  const src__concat = concat.src__concat;
  const _root = Object.create(null);
  const src__start_with = Object.create(_root);
  let TToStreamTransformerOfT$T = () => (TToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [T]])))();
  let IterableOfTToStreamTransformerOfT$T = () => (IterableOfTToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [core.Iterable$(T)]])))();
  let StreamOfTToStreamTransformerOfT$T = () => (StreamOfTToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [async.Stream$(T)]])))();
  src__start_with.startWith = function(T, initial) {
    return src__start_with.startWithStream(T, async.Future$(T).value(initial).asStream());
  };
  dart.fn(src__start_with.startWith, TToStreamTransformerOfT$T());
  src__start_with.startWithMany = function(T, initial) {
    return src__start_with.startWithStream(T, async.Stream$(T).fromIterable(initial));
  };
  dart.fn(src__start_with.startWithMany, IterableOfTToStreamTransformerOfT$T());
  src__start_with.startWithStream = function(T, initial) {
    return src__bind.fromBind(T, T, dart.fn(values => {
      if (dart.test(values.isBroadcast) && !dart.test(initial.isBroadcast)) {
        initial = initial.asBroadcastStream();
      }
      return initial.transform(T, src__concat.concat(T, values));
    }, dart.fnType(async.Stream$(T), [async.Stream$(T)])));
  };
  dart.fn(src__start_with.startWithStream, StreamOfTToStreamTransformerOfT$T());
  dart.trackLibraries("packages/stream_transform/src/start_with.ddc", {
    "package:stream_transform/src/start_with.dart": src__start_with
  }, '{"version":3,"sourceRoot":"","sources":["start_with.dart"],"names":[],"mappings":";;;;;;;;;;;;;0CAYqC,OAAS;UAC1C,gCAAe,IAAI,AAAI,sBAAY,CAAC,OAAO,UAAU;EAAG;;8CAOnB,OAAmB;UACxD,gCAAe,IAAI,AAAI,6BAAmB,CAAC,OAAO;EAAE;;gDAOb,OAAiB;UACxD,mBAAQ,OAAC,QAAC,MAAM;AACd,oBAAI,MAAM,YAAY,gBAAK,OAAO,YAAY,GAAE;AAC9C,eAAO,GAAG,OAAO,kBAAkB;;AAErC,YAAO,QAAO,UAAU,IAAC,kBAAM,IAAC,MAAM;;EACtC","file":"start_with.ddc.js"}');
  // Exports:
  return {
    src__start_with: src__start_with
  };
});

//# sourceMappingURL=start_with.ddc.js.map
