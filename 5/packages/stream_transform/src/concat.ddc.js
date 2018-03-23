define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__concat = Object.create(_root);
  let StreamOfTToStreamTransformerOfT$T = () => (StreamOfTToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [async.Stream$(T)]])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  src__concat.concat = function(T, next) {
    return new (src__concat._Concat$(T)).new(next);
  };
  dart.fn(src__concat.concat, StreamOfTToStreamTransformerOfT$T());
  const _next = Symbol('_next');
  const _is__Concat_default = Symbol('_is__Concat_default');
  src__concat._Concat$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _Concat extends async.StreamTransformerBase$(T, T) {
      bind(first) {
        StreamOfT()._check(first);
        let controller = dart.test(first.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let next = dart.test(first.isBroadcast) && !dart.test(this[_next].isBroadcast) ? this[_next].asBroadcastStream() : this[_next];
        let subscription = null;
        let currentStream = first;
        let firstDone = false;
        let secondDone = false;
        let currentDoneHandler = null;
        function listen() {
          subscription = currentStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => dart.dcall(currentDoneHandler), VoidTodynamic())});
        }
        dart.fn(listen, VoidToNull());
        function onSecondDone() {
          secondDone = true;
          controller.close();
        }
        dart.fn(onSecondDone, VoidToNull());
        function onFirstDone() {
          firstDone = true;
          currentStream = next;
          currentDoneHandler = onSecondDone;
          listen();
        }
        dart.fn(onFirstDone, VoidToNull());
        currentDoneHandler = onFirstDone;
        controller.onListen = dart.fn(() => {
          if (subscription != null) return;
          listen();
          if (!dart.test(first.isBroadcast)) {
            controller.onPause = dart.fn(() => {
              if (!firstDone || !dart.test(next.isBroadcast)) return subscription.pause();
              subscription.cancel();
              subscription = null;
            }, VoidTovoid());
            controller.onResume = dart.fn(() => {
              if (!firstDone || !dart.test(next.isBroadcast)) return subscription.resume();
              listen();
            }, VoidTovoid());
          }
          controller.onCancel = dart.fn(() => {
            if (secondDone) return null;
            let toCancel = subscription;
            subscription = null;
            return toCancel.cancel();
          }, VoidToFuture());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_Concat.new = function(next) {
      this[_next] = next;
      _Concat.__proto__.new.call(this);
    }).prototype = _Concat.prototype;
    dart.addTypeTests(_Concat);
    _Concat.prototype[_is__Concat_default] = true;
    dart.setMethodSignature(_Concat, () => ({
      __proto__: dart.getMethods(_Concat.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(_Concat, () => ({
      __proto__: dart.getFields(_Concat.__proto__),
      [_next]: dart.finalFieldType(StreamOfT())
    }));
    return _Concat;
  });
  src__concat._Concat = src__concat._Concat$();
  dart.addTypeTests(src__concat._Concat, _is__Concat_default);
  dart.trackLibraries("packages/stream_transform/src/concat.ddc", {
    "package:stream_transform/src/concat.dart": src__concat
  }, '{"version":3,"sourceRoot":"","sources":["concat.dart"],"names":[],"mappings":";;;;;;;;;;;;;mCAmBkC,IAAc;UAAK,KAAI,6BAAU,CAAC,IAAI;EAAC;;;;;;;;WAQxD,KAAe;2BAAL;AACvB,YAAI,uBAAa,KAAK,YAAY,IAC5B,AAAI,+BAA6B,QAAO,SACxC,AAAI,yBAAmB,QAAO;AAEpC,YAAI,iBAAO,KAAK,YAAY,gBAAK,WAAK,YAAY,IAC5C,WAAK,kBAAkB,KACvB,WAAK;AAEX,YAAmB;AACnB,YAAI,gBAAgB,KAAK;AACzB,YAAI,YAAY;AAChB,YAAI,aAAa;AAEjB,YAAS;AAET;AACE,sBAAY,GAAG,aAAa,OAAO,WAAC,UAAU,8BACjC,UAAU,uBAAmB,yBAAM,kBAAkB;;gBAFpE;AAKA;AACE,oBAAU,GAAG;AACb,oBAAU,MAAM;;gBAFlB;AAKA;AACE,mBAAS,GAAG;AACZ,uBAAa,GAAG,IAAI;AACpB,4BAAkB,GAAG,YAAY;AACjC,gBAAM;;gBAJR;AAOA,0BAAkB,GAAG,WAAW;AAEhC,kBAAU,SAAS,GAAG;AACpB,cAAI,YAAY,IAAI,MAAM;AAC1B,gBAAM;AACN,yBAAK,KAAK,YAAY,GAAE;AACtB,sBAAU,QAAQ,GAAG;AACnB,mBAAK,SAAS,eAAK,IAAI,YAAY,GAAE,MAAO,aAAY,MAAM;AAC9D,0BAAY,OAAO;AACnB,0BAAY,GAAG;;AAEjB,sBAAU,SAAS,GAAG;AACpB,mBAAK,SAAS,eAAK,IAAI,YAAY,GAAE,MAAO,aAAY,OAAO;AAC/D,oBAAM;;;AAGV,oBAAU,SAAS,GAAG;AACpB,gBAAI,UAAU,EAAE,MAAO;AACvB,gBAAI,WAAW,YAAY;AAC3B,wBAAY,GAAG;AACf,kBAAO,SAAQ,OAAO;;;AAG1B,cAAO,WAAU,OAAO;MAC1B;;4BA5Da,IAAK;MAAL,WAAK,GAAL,IAAK;;IAAC","file":"concat.ddc.js"}');
  // Exports:
  return {
    src__concat: src__concat
  };
});

//# sourceMappingURL=concat.ddc.js.map
