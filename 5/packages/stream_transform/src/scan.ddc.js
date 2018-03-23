define(['dart_sdk', 'packages/stream_transform/src/bind'], function(dart_sdk, bind) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__bind = bind.src__bind;
  const _root = Object.create(null);
  const src__scan = Object.create(_root);
  let TAndFnToStreamTransformerOfS$T = () => (TAndFnToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [T, dart.fnType(T, [T, S])]])))();
  src__scan.scan = function(S, T, initialValue, combine) {
    return src__bind.fromBind(S, T, dart.fn(stream => {
      let accumulated = initialValue;
      return stream.map(T, dart.fn(value => accumulated = combine(accumulated, value), dart.fnType(T, [S])));
    }, dart.fnType(async.Stream$(T), [async.Stream$(S)])));
  };
  dart.fn(src__scan.scan, TAndFnToStreamTransformerOfS$T());
  dart.trackLibraries("packages/stream_transform/src/scan.ddc", {
    "package:stream_transform/src/scan.dart": src__scan
  }, '{"version":3,"sourceRoot":"","sources":["scan.dart"],"names":[],"mappings":";;;;;;;;;;kCAUQ,YAAc,EAAE,OAAqC;UACzD,mBAAQ,OAAC,QAAC,MAAM;AACd,UAAI,cAAc,YAAY;AAC9B,YAAO,OAAM,IAAI,IAAC,QAAC,KAAK,IAAK,WAAW,GAAG,OAAO,CAAC,WAAW,EAAE,KAAK;;EACrE","file":"scan.ddc.js"}');
  // Exports:
  return {
    src__scan: src__scan
  };
});

//# sourceMappingURL=scan.ddc.js.map
