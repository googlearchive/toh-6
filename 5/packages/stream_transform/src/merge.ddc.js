define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__merge = Object.create(_root);
  const $addAll = dartx.addAll;
  const $toList = dartx.toList;
  const $map = dartx.map;
  let StreamOfTToStreamTransformerOfT$T = () => (StreamOfTToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [async.Stream$(T)]])))();
  let ListOfStreamOfTToStreamTransformerOfT$T = () => (ListOfStreamOfTToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [core.List$(async.Stream$(T))]])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  src__merge.merge = function(T, other) {
    return new (src__merge._Merge$(T)).new(_interceptors.JSArray$(async.Stream$(T)).of([other]));
  };
  dart.fn(src__merge.merge, StreamOfTToStreamTransformerOfT$T());
  src__merge.mergeAll = function(T, others) {
    return new (src__merge._Merge$(T)).new(others);
  };
  dart.fn(src__merge.mergeAll, ListOfStreamOfTToStreamTransformerOfT$T());
  const _others = Symbol('_others');
  const _is__Merge_default = Symbol('_is__Merge_default');
  src__merge._Merge$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let JSArrayOfStreamOfT = () => (JSArrayOfStreamOfT = dart.constFn(_interceptors.JSArray$(StreamOfT())))();
    let StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let StreamOfTToStreamSubscriptionOfT = () => (StreamOfTToStreamSubscriptionOfT = dart.constFn(dart.fnType(StreamSubscriptionOfT(), [StreamOfT()])))();
    let ListOfStreamOfT = () => (ListOfStreamOfT = dart.constFn(core.List$(StreamOfT())))();
    class _Merge extends async.StreamTransformerBase$(T, T) {
      bind(first) {
        StreamOfT()._check(first);
        let controller = dart.test(first.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let allStreams = JSArrayOfStreamOfT().of([first]);
        allStreams[$addAll](this[_others]);
        if (dart.test(first.isBroadcast)) {
          allStreams = allStreams[$map](StreamOfT(), dart.fn(s => dart.test(s.isBroadcast) ? s : s.asBroadcastStream(), StreamOfTToStreamOfT()))[$toList]();
        }
        let subscriptions = null;
        controller.onListen = dart.fn(() => {
          if (subscriptions != null) return;
          let activeStreamCount = 0;
          subscriptions = allStreams[$map](StreamSubscriptionOfT(), dart.fn(stream => {
            activeStreamCount++;
            return stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                if (--activeStreamCount <= 0) controller.close();
              }, VoidToNull())});
          }, StreamOfTToStreamSubscriptionOfT()))[$toList]();
          if (!dart.test(first.isBroadcast)) {
            controller.onPause = dart.fn(() => {
              for (let subscription of subscriptions) {
                subscription.pause();
              }
            }, VoidToNull());
            controller.onResume = dart.fn(() => {
              for (let subscription of subscriptions) {
                subscription.resume();
              }
            }, VoidToNull());
          }
          controller.onCancel = dart.fn(() => {
            let toCancel = subscriptions;
            subscriptions = null;
            if (activeStreamCount <= 0) return null;
            return async.Future.wait(dart.dynamic, toCancel[$map](async.Future, dart.fn(s => s.cancel(), StreamSubscriptionToFuture())));
          }, VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_Merge.new = function(others) {
      this[_others] = others;
      _Merge.__proto__.new.call(this);
    }).prototype = _Merge.prototype;
    dart.addTypeTests(_Merge);
    _Merge.prototype[_is__Merge_default] = true;
    dart.setMethodSignature(_Merge, () => ({
      __proto__: dart.getMethods(_Merge.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(_Merge, () => ({
      __proto__: dart.getFields(_Merge.__proto__),
      [_others]: dart.finalFieldType(ListOfStreamOfT())
    }));
    return _Merge;
  });
  src__merge._Merge = src__merge._Merge$();
  dart.addTypeTests(src__merge._Merge, _is__Merge_default);
  dart.trackLibraries("packages/stream_transform/src/merge.ddc", {
    "package:stream_transform/src/merge.dart": src__merge
  }, '{"version":3,"sourceRoot":"","sources":["merge.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;iCAWiC,KAAe;UAAK,KAAI,2BAAS,CAAC,6CAAC,KAAK;EAAE;;oCASvC,MAAsB;UACtD,KAAI,2BAAS,CAAC,MAAM;EAAC;;;;;;;;;;;;;WAQR,KAAe;2BAAL;AACvB,YAAI,uBAAa,KAAK,YAAY,IAC5B,AAAI,+BAA6B,QAAO,SACxC,AAAI,yBAAmB,QAAO;AAEpC,YAAI,aAAa,yBAAC,KAAK;QAAnB,oBAA6B,aAAO;AACxC,sBAAI,KAAK,YAAY,GAAE;AACrB,oBAAU,GAAG,UAAU,MACf,cAAC,QAAC,CAAC,cAAK,CAAC,YAAY,IAAG,CAAC,GAAG,CAAC,kBAAkB,qCAC5C;;AAGb,YAAyB;AAEzB,kBAAU,SAAS,GAAG;AACpB,cAAI,aAAa,IAAI,MAAM;AAC3B,cAAI,oBAAoB;AACxB,uBAAa,GAAG,UAAU,MAAI,0BAAC,QAAC,MAAM;AACpC,6BAAiB;AACjB,kBAAO,OAAM,OAAO,WAAC,UAAU,8BAAe,UAAU,uBAC5C;AACV,oBAAI,AAAoB,EAAlB,iBAAiB,IAAI,GAAG,UAAU,MAAM;;0DAEzC;AACT,yBAAK,KAAK,YAAY,GAAE;AACtB,sBAAU,QAAQ,GAAG;AACnB,uBAAS,eAAgB,cAAa,EAAE;AACtC,4BAAY,MAAM;;;AAGtB,sBAAU,SAAS,GAAG;AACpB,uBAAS,eAAgB,cAAa,EAAE;AACtC,4BAAY,OAAO;;;;AAIzB,oBAAU,SAAS,GAAG;AACpB,gBAAI,WAAW,aAAa;AAC5B,yBAAa,GAAG;AAChB,gBAAI,AAAkB,iBAAD,IAAI,GAAG,MAAO;AACnC,kBAAO,aAAM,KAAK,eAAC,QAAQ,MAAI,eAAC,QAAC,CAAC,IAAK,CAAC,OAAO;;;AAGnD,cAAO,WAAU,OAAO;MAC1B;;2BA/CY,MAAO;MAAP,aAAO,GAAP,MAAO;;IAAC","file":"merge.ddc.js"}');
  // Exports:
  return {
    src__merge: src__merge
  };
});

//# sourceMappingURL=merge.ddc.js.map
