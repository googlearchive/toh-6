define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__buffer = Object.create(_root);
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  let StreamToStreamTransformerOfT$ListOfT = () => (StreamToStreamTransformerOfT$ListOfT = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, core.List$(T)), [async.Stream]])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  src__buffer.buffer = function(T, trigger) {
    return new (src__buffer._Buffer$(T)).new(trigger);
  };
  dart.fn(src__buffer.buffer, StreamToStreamTransformerOfT$ListOfT());
  const _trigger = Symbol('_trigger');
  const _is__Buffer_default = Symbol('_is__Buffer_default');
  src__buffer._Buffer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StreamControllerOfListOfT = () => (StreamControllerOfListOfT = dart.constFn(async.StreamController$(ListOfT())))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class _Buffer extends async.StreamTransformerBase$(T, core.List$(T)) {
      bind(values) {
        StreamOfT()._check(values);
        let controller = dart.test(values.isBroadcast) ? StreamControllerOfListOfT().broadcast({sync: true}) : StreamControllerOfListOfT().new({sync: true});
        let currentResults = null;
        let waitingForTrigger = true;
        let isTriggerDone = false;
        let isValueDone = false;
        let valueSub = null;
        let triggerSub = null;
        function emit() {
          controller.add(currentResults);
          currentResults = null;
          waitingForTrigger = true;
        }
        dart.fn(emit, VoidToNull());
        function onValue(value) {
          (() => {
            let t = currentResults;
            return t == null ? currentResults = JSArrayOfT().of([]) : t;
          })()[$add](value);
          if (!waitingForTrigger) emit();
          if (isTriggerDone) {
            valueSub.cancel();
            controller.close();
          }
        }
        dart.fn(onValue, TToNull());
        function onValuesDone() {
          isValueDone = true;
          if (currentResults == null) {
            let t = triggerSub;
            t == null ? null : t.cancel();
            controller.close();
          }
        }
        dart.fn(onValuesDone, VoidToNull());
        function onTrigger(_) {
          waitingForTrigger = false;
          if (currentResults != null) emit();
          if (isValueDone) {
            triggerSub.cancel();
            controller.close();
          }
        }
        dart.fn(onTrigger, dynamicToNull());
        function onTriggerDone() {
          isTriggerDone = true;
          if (waitingForTrigger) {
            let t = valueSub;
            t == null ? null : t.cancel();
            controller.close();
          }
        }
        dart.fn(onTriggerDone, VoidToNull());
        controller.onListen = dart.fn(() => {
          if (valueSub != null) return;
          valueSub = values.listen(onValue, {onError: dart.bind(controller, 'addError'), onDone: onValuesDone});
          if (triggerSub != null) {
            if (dart.test(triggerSub.isPaused)) triggerSub.resume();
          } else {
            triggerSub = this[_trigger].listen(onTrigger, {onError: dart.bind(controller, 'addError'), onDone: onTriggerDone});
          }
          if (!dart.test(values.isBroadcast)) {
            controller.onPause = dart.fn(() => {
              let t = valueSub;
              t == null ? null : t.pause();
              let t$ = triggerSub;
              t$ == null ? null : t$.pause();
            }, VoidToNull());
            controller.onResume = dart.fn(() => {
              let t = valueSub;
              t == null ? null : t.resume();
              let t$ = triggerSub;
              t$ == null ? null : t$.resume();
            }, VoidToNull());
          }
          controller.onCancel = dart.fn(() => {
            let toCancel = JSArrayOfStreamSubscription().of([]);
            if (!isValueDone) toCancel[$add](valueSub);
            valueSub = null;
            if (dart.test(this[_trigger].isBroadcast) || !dart.test(values.isBroadcast)) {
              if (!isTriggerDone) toCancel[$add](triggerSub);
              triggerSub = null;
            } else {
              triggerSub.pause();
            }
            if (dart.test(toCancel[$isEmpty])) return null;
            return async.Future.wait(dart.dynamic, toCancel[$map](async.Future, dart.fn(s => s.cancel(), StreamSubscriptionToFuture())));
          }, VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_Buffer.new = function(trigger) {
      this[_trigger] = trigger;
      _Buffer.__proto__.new.call(this);
    }).prototype = _Buffer.prototype;
    dart.addTypeTests(_Buffer);
    _Buffer.prototype[_is__Buffer_default] = true;
    dart.setMethodSignature(_Buffer, () => ({
      __proto__: dart.getMethods(_Buffer.__proto__),
      bind: dart.fnType(async.Stream$(core.List$(T)), [core.Object])
    }));
    dart.setFieldSignature(_Buffer, () => ({
      __proto__: dart.getFields(_Buffer.__proto__),
      [_trigger]: dart.finalFieldType(async.Stream)
    }));
    return _Buffer;
  });
  src__buffer._Buffer = src__buffer._Buffer$();
  dart.addTypeTests(src__buffer._Buffer, _is__Buffer_default);
  dart.trackLibraries("packages/stream_transform/src/buffer.ddc", {
    "package:stream_transform/src/buffer.dart": src__buffer
  }, '{"version":3,"sourceRoot":"","sources":["buffer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;mCAcwC,OAAc;UAClD,KAAI,6BAAU,CAAC,OAAO;EAAC;;;;;;;;;;;WAiBJ,MAAgB;2BAAN;AAC7B,YAAI,uBAAa,MAAM,YAAY,IAC7B,AAAI,qCAAmC,QAAO,SAC9C,AAAI,+BAAyB,QAAO;AAE1C,YAAQ;AACR,YAAI,oBAAoB;AACxB,YAAI,gBAAgB;AACpB,YAAI,cAAc;AAClB,YAAmB;AACnB,YAAmB;AAEnB;AACE,oBAAU,IAAI,CAAC,cAAc;AAC7B,wBAAc,GAAG;AACjB,2BAAiB,GAAG;;gBAHtB;AAMA,yBAAQ,KAAO;AACb;oBAAC,cAAc;+BAAd,cAAc,GAAK;oBAAU,CAAC,KAAK;AAEpC,eAAK,iBAAiB,EAAE,IAAI;AAE5B,cAAI,aAAa,EAAE;AACjB,oBAAQ,OAAO;AACf,sBAAU,MAAM;;;gBAPpB;AAWA;AACE,qBAAW,GAAG;AACd,cAAI,cAAc,IAAI,MAAM;AAC1B,8BAAU;;AACV,sBAAU,MAAM;;;gBAJpB;AAQA,2BAAU,CAAC;AACT,2BAAiB,GAAG;AAEpB,cAAI,cAAc,IAAI,MAAM,IAAI;AAEhC,cAAI,WAAW,EAAE;AACf,sBAAU,OAAO;AACjB,sBAAU,MAAM;;;gBAPpB;AAWA;AACE,uBAAa,GAAG;AAChB,cAAI,iBAAiB,EAAE;AACrB,4BAAQ;;AACR,sBAAU,MAAM;;;gBAJpB;AAQA,kBAAU,SAAS,GAAG;AACpB,cAAI,QAAQ,IAAI,MAAM;AACtB,kBAAQ,GAAG,MAAM,OAAO,CAAC,OAAO,sBACnB,UAAU,uBAAmB,YAAY;AACtD,cAAI,UAAU,IAAI,MAAM;AACtB,0BAAI,UAAU,SAAS,GAAE,UAAU,OAAO;iBACrC;AACL,sBAAU,GAAG,cAAQ,OAAO,CAAC,SAAS,sBACzB,UAAU,uBAAmB,aAAa;;AAEzD,yBAAK,MAAM,YAAY,GAAE;AACvB,sBAAU,QAAQ,GAAG;AACnB,8BAAQ;;AACR,iCAAU;;;AAEZ,sBAAU,SAAS,GAAG;AACpB,8BAAQ;;AACR,iCAAU;;;;AAGd,oBAAU,SAAS,GAAG;AACpB,gBAAI,WAAW;AACf,iBAAK,WAAW,EAAE,QAAQ,MAAI,CAAC,QAAQ;AACvC,oBAAQ,GAAG;AACX,0BAAI,cAAQ,YAAY,gBAAK,MAAM,YAAY,GAAE;AAC/C,mBAAK,aAAa,EAAE,QAAQ,MAAI,CAAC,UAAU;AAC3C,wBAAU,GAAG;mBACR;AACL,wBAAU,MAAM;;AAElB,0BAAI,QAAQ,UAAQ,GAAE,MAAO;AAC7B,kBAAO,aAAM,KAAK,eAAC,QAAQ,MAAI,eAAC,QAAC,CAAC,IAAK,CAAC,OAAO;;;AAGnD,cAAO,WAAU,OAAO;MAC1B;;4BA9Fa,OAAQ;MAAR,cAAQ,GAAR,OAAQ;;IAAC","file":"buffer.ddc.js"}');
  // Exports:
  return {
    src__buffer: src__buffer
  };
});

//# sourceMappingURL=buffer.ddc.js.map
