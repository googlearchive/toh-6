define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__take_until = Object.create(_root);
  let FutureToStreamTransformerOfT$T = () => (FutureToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [async.Future]])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  src__take_until.takeUntil = function(T, trigger) {
    return new (src__take_until._TakeUntil$(T)).new(trigger);
  };
  dart.fn(src__take_until.takeUntil, FutureToStreamTransformerOfT$T());
  const _trigger = Symbol('_trigger');
  const _is__TakeUntil_default = Symbol('_is__TakeUntil_default');
  src__take_until._TakeUntil$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _TakeUntil extends async.StreamTransformerBase$(T, T) {
      bind(values) {
        StreamOfT()._check(values);
        let controller = dart.test(values.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let subscription = null;
        let isDone = false;
        this[_trigger].then(core.Null, dart.fn(_ => {
          if (isDone) return;
          isDone = true;
          let t = subscription;
          t == null ? null : t.cancel();
          controller.close();
        }, dynamicToNull()));
        controller.onListen = dart.fn(() => {
          if (isDone) return;
          subscription = values.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
              if (isDone) return;
              isDone = true;
              controller.close();
            }, VoidToNull())});
          if (!dart.test(values.isBroadcast)) {
            controller.onPause = dart.bind(subscription, 'pause');
            controller.onResume = dart.bind(subscription, 'resume');
          }
          controller.onCancel = dart.fn(() => {
            if (isDone) return null;
            let toCancel = subscription;
            subscription = null;
            return toCancel.cancel();
          }, VoidToFuture());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_TakeUntil.new = function(trigger) {
      this[_trigger] = trigger;
      _TakeUntil.__proto__.new.call(this);
    }).prototype = _TakeUntil.prototype;
    dart.addTypeTests(_TakeUntil);
    _TakeUntil.prototype[_is__TakeUntil_default] = true;
    dart.setMethodSignature(_TakeUntil, () => ({
      __proto__: dart.getMethods(_TakeUntil.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(_TakeUntil, () => ({
      __proto__: dart.getFields(_TakeUntil.__proto__),
      [_trigger]: dart.finalFieldType(async.Future)
    }));
    return _TakeUntil;
  });
  src__take_until._TakeUntil = src__take_until._TakeUntil$();
  dart.addTypeTests(src__take_until._TakeUntil, _is__TakeUntil_default);
  dart.trackLibraries("packages/stream_transform/src/take_until.ddc", {
    "package:stream_transform/src/take_until.dart": src__take_until
  }, '{"version":3,"sourceRoot":"","sources":["take_until.dart"],"names":[],"mappings":";;;;;;;;;;;;0CAYqC,OAAc;UAAK,KAAI,oCAAU,CAAC,OAAO;EAAC;;;;;;;;WAQ9D,MAAgB;2BAAN;AACvB,YAAI,uBAAa,MAAM,YAAY,IAC7B,AAAI,+BAA6B,QAAO,SACxC,AAAI,yBAAmB,QAAO;AAEpC,YAAmB;AACnB,YAAI,SAAS;AACb,sBAAQ,KAAK,YAAC,QAAC,CAAC;AACd,cAAI,MAAM,EAAE;AACZ,gBAAM,GAAG;AACT,8BAAY;;AACZ,oBAAU,MAAM;;AAGlB,kBAAU,SAAS,GAAG;AACpB,cAAI,MAAM,EAAE;AACZ,sBAAY,GAAG,MAAM,OAAO,WAAC,UAAU,8BAAe,UAAU,uBACpD;AACV,kBAAI,MAAM,EAAE;AACZ,oBAAM,GAAG;AACT,wBAAU,MAAM;;AAElB,yBAAK,MAAM,YAAY,GAAE;AACvB,sBAAU,QAAQ,aAAG,YAAY;AACjC,sBAAU,SAAS,aAAG,YAAY;;AAEpC,oBAAU,SAAS,GAAG;AACpB,gBAAI,MAAM,EAAE,MAAO;AACnB,gBAAI,WAAW,YAAY;AAC3B,wBAAY,GAAG;AACf,kBAAO,SAAQ,OAAO;;;AAG1B,cAAO,WAAU,OAAO;MAC1B;;+BArCgB,OAAQ;MAAR,cAAQ,GAAR,OAAQ;;IAAC","file":"take_until.ddc.js"}');
  // Exports:
  return {
    src__take_until: src__take_until
  };
});

//# sourceMappingURL=take_until.ddc.js.map
