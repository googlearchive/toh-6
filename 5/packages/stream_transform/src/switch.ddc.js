define(['dart_sdk', 'packages/stream_transform/src/bind'], function(dart_sdk, bind) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__bind = bind.src__bind;
  const _root = Object.create(null);
  const src__switch = Object.create(_root);
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  let FnToStreamTransformerOfS$T = () => (FnToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [dart.fnType(async.Stream$(T), [S])]])))();
  let VoidToStreamTransformerOfStreamOfT$T = () => (VoidToStreamTransformerOfStreamOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(async.Stream$(T), T), []])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  src__switch.switchMap = function(S, T, map) {
    return src__bind.fromBind(S, T, dart.fn(stream => stream.map(async.Stream$(T), map).transform(T, src__switch.switchLatest(T)), dart.fnType(async.Stream$(T), [async.Stream$(S)])));
  };
  dart.fn(src__switch.switchMap, FnToStreamTransformerOfS$T());
  src__switch.switchLatest = function(T) {
    return new (src__switch._SwitchTransformer$(T)).new();
  };
  dart.fn(src__switch.switchLatest, VoidToStreamTransformerOfStreamOfT$T());
  const _is__SwitchTransformer_default = Symbol('_is__SwitchTransformer_default');
  src__switch._SwitchTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamOfTToNull = () => (StreamOfTToNull = dart.constFn(dart.fnType(core.Null, [StreamOfT()])))();
    class _SwitchTransformer extends async.StreamTransformerBase$(async.Stream$(T), T) {
      bind(outer) {
        StreamOfStreamOfT()._check(outer);
        let controller = dart.test(outer.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let outerSubscription = null;
        controller.onListen = dart.fn(() => {
          if (outerSubscription != null) return;
          let innerSubscription = null;
          let outerStreamDone = false;
          outerSubscription = outer.listen(dart.fn(innerStream => {
            let t = innerSubscription;
            t == null ? null : t.cancel();
            innerSubscription = innerStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                innerSubscription = null;
                if (outerStreamDone) controller.close();
              }, VoidToNull())});
          }, StreamOfTToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
              outerStreamDone = true;
              if (innerSubscription == null) controller.close();
            }, VoidToNull())});
          if (!dart.test(outer.isBroadcast)) {
            controller.onPause = dart.fn(() => {
              let t = innerSubscription;
              t == null ? null : t.pause();
              outerSubscription.pause();
            }, VoidToNull());
            controller.onResume = dart.fn(() => {
              let t = innerSubscription;
              t == null ? null : t.resume();
              outerSubscription.resume();
            }, VoidToNull());
          }
          controller.onCancel = dart.fn(() => {
            let toCancel = JSArrayOfStreamSubscription().of([]);
            if (!outerStreamDone) toCancel[$add](outerSubscription);
            if (innerSubscription != null) {
              toCancel[$add](innerSubscription);
            }
            outerSubscription = null;
            innerSubscription = null;
            if (dart.test(toCancel[$isEmpty])) return null;
            return async.Future.wait(dart.dynamic, toCancel[$map](async.Future, dart.fn(s => s.cancel(), StreamSubscriptionToFuture())));
          }, VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_SwitchTransformer.new = function() {
      _SwitchTransformer.__proto__.new.call(this);
    }).prototype = _SwitchTransformer.prototype;
    dart.addTypeTests(_SwitchTransformer);
    _SwitchTransformer.prototype[_is__SwitchTransformer_default] = true;
    dart.setMethodSignature(_SwitchTransformer, () => ({
      __proto__: dart.getMethods(_SwitchTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    return _SwitchTransformer;
  });
  src__switch._SwitchTransformer = src__switch._SwitchTransformer$();
  dart.addTypeTests(src__switch._SwitchTransformer, _is__SwitchTransformer_default);
  dart.trackLibraries("packages/stream_transform/src/switch.ddc", {
    "package:stream_transform/src/switch.dart": src__switch
  }, '{"version":3,"sourceRoot":"","sources":["switch.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;yCAewC,GAAsB;UAC1D,mBAAQ,OAAC,QAAC,MAAM,IAAK,MAAM,IAAI,mBAAC,GAAG,WAAW,IAAC,wBAAY;EAAI;;;UAU/D,KAAI,wCAAqB;EAAE;;;;;;;;;WAMd,KAAuB;mCAAL;AAC/B,YAAI,uBAAa,KAAK,YAAY,IAC5B,AAAI,+BAA6B,QAAO,SACxC,AAAI,yBAAmB,QAAO;AAEpC,YAA8B;AAE9B,kBAAU,SAAS,GAAG;AACpB,cAAI,iBAAiB,IAAI,MAAM;AAE/B,cAAsB;AACtB,cAAI,kBAAkB;AAEtB,2BAAiB,GAAG,KAAK,OAAO,CAC5B,QAAC,WAAW;AACV,qCAAiB;;AACjB,6BAAiB,GAAG,WAAW,OAAO,WAAC,UAAU,8BACpC,UAAU,uBAAmB;AACxC,iCAAiB,GAAG;AACpB,oBAAI,eAAe,EAAE,UAAU,MAAM;;qDAGhC,UAAU,uBACX;AACN,6BAAe,GAAG;AAClB,kBAAI,iBAAiB,IAAI,MAAM,UAAU,MAAM;;AAErD,yBAAK,KAAK,YAAY,GAAE;AACtB,sBAAU,QAAQ,GAAG;AACnB,uCAAiB;;AACjB,+BAAiB,MAAM;;AAEzB,sBAAU,SAAS,GAAG;AACpB,uCAAiB;;AACjB,+BAAiB,OAAO;;;AAG5B,oBAAU,SAAS,GAAG;AACpB,gBAAI,WAAW;AACf,iBAAK,eAAe,EAAE,QAAQ,MAAI,CAAC,iBAAiB;AACpD,gBAAI,iBAAiB,IAAI,MAAM;AAC7B,sBAAQ,MAAI,CAAC,iBAAiB;;AAEhC,6BAAiB,GAAG;AACpB,6BAAiB,GAAG;AACpB,0BAAI,QAAQ,UAAQ,GAAE,MAAO;AAC7B,kBAAO,aAAM,KAAK,eAAC,QAAQ,MAAI,eAAC,QAAC,CAAC,IAAK,CAAC,OAAO;;;AAGnD,cAAO,WAAU,OAAO;MAC1B;;;;IArD0B","file":"switch.ddc.js"}');
  // Exports:
  return {
    src__switch: src__switch
  };
});

//# sourceMappingURL=switch.ddc.js.map
