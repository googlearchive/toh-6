define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__from_handlers = Object.create(_root);
  let __ToStreamTransformerOfS$T = () => (__ToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [], {handleData: dart.fnType(dart.void, [S, async.EventSink$(T)]), handleError: dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(T)]), handleDone: dart.fnType(dart.void, [async.EventSink$(T)])}])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  src__from_handlers.HandleData$ = dart.generic((S, T) => {
    const HandleData = dart.typedef('HandleData', () => dart.fnType(dart.void, [S, async.EventSink$(T)]));
    return HandleData;
  });
  src__from_handlers.HandleData = src__from_handlers.HandleData$();
  src__from_handlers.HandleDone$ = dart.generic(T => {
    const HandleDone = dart.typedef('HandleDone', () => dart.fnType(dart.void, [async.EventSink$(T)]));
    return HandleDone;
  });
  src__from_handlers.HandleDone = src__from_handlers.HandleDone$();
  src__from_handlers.HandleError$ = dart.generic(T => {
    const HandleError = dart.typedef('HandleError', () => dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(T)]));
    return HandleError;
  });
  src__from_handlers.HandleError = src__from_handlers.HandleError$();
  src__from_handlers.fromHandlers = function(S, T, opts) {
    let handleData = opts && 'handleData' in opts ? opts.handleData : null;
    let handleError = opts && 'handleError' in opts ? opts.handleError : null;
    let handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
    return new (src__from_handlers._StreamTransformer$(S, T)).new({handleData: handleData, handleError: handleError, handleDone: handleDone});
  };
  dart.fn(src__from_handlers.fromHandlers, __ToStreamTransformerOfS$T());
  const _handleData = Symbol('_handleData');
  const _handleError = Symbol('_handleError');
  const _handleDone = Symbol('_handleDone');
  const _is__StreamTransformer_default = Symbol('_is__StreamTransformer_default');
  src__from_handlers._StreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let STovoid = () => (STovoid = dart.constFn(dart.fnType(dart.void, [S])))();
    let SAndEventSinkOfTTovoid = () => (SAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [S, EventSinkOfT()])))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let EventSinkOfTTovoid = () => (EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [EventSinkOfT()])))();
    let ObjectAndStackTraceAndEventSinkOfTTovoid = () => (ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfT()])))();
    class _StreamTransformer extends async.StreamTransformerBase$(S, T) {
      static _defaultHandleData(S, T, value, sink) {
        sink.add(T.as(value));
      }
      static _defaultHandleError(T, error, stackTrace, sink) {
        sink.addError(error, stackTrace);
      }
      static _defaultHandleDone(T, sink) {
        sink.close();
      }
      bind(values) {
        StreamOfS()._check(values);
        let controller = dart.test(values.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let subscription = null;
        controller.onListen = dart.fn(() => {
          if (subscription != null) return;
          let valuesDone = false;
          subscription = values.listen(dart.fn(value => this[_handleData](value, controller), STovoid()), {onError: dart.fn((error, stackTrace) => {
              this[_handleError](error, stackTrace, controller);
            }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
              valuesDone = true;
              this[_handleDone](controller);
            }, VoidToNull())});
          if (!dart.test(values.isBroadcast)) {
            controller.onPause = dart.bind(subscription, 'pause');
            controller.onResume = dart.bind(subscription, 'resume');
          }
          controller.onCancel = dart.fn(() => {
            let toCancel = subscription;
            subscription = null;
            if (!valuesDone) return toCancel.cancel();
            return null;
          }, VoidToFuture());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_StreamTransformer.new = function(opts) {
      let handleData = opts && 'handleData' in opts ? opts.handleData : null;
      let handleError = opts && 'handleError' in opts ? opts.handleError : null;
      let handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
      this[_handleData] = handleData != null ? handleData : dart.gbind(dart.tagStatic(src__from_handlers._StreamTransformer, '_defaultHandleData'), S, T);
      this[_handleError] = handleError != null ? handleError : dart.gbind(dart.tagStatic(src__from_handlers._StreamTransformer, '_defaultHandleError'), T);
      this[_handleDone] = handleDone != null ? handleDone : dart.gbind(dart.tagStatic(src__from_handlers._StreamTransformer, '_defaultHandleDone'), T);
      _StreamTransformer.__proto__.new.call(this);
    }).prototype = _StreamTransformer.prototype;
    dart.addTypeTests(_StreamTransformer);
    _StreamTransformer.prototype[_is__StreamTransformer_default] = true;
    dart.setMethodSignature(_StreamTransformer, () => ({
      __proto__: dart.getMethods(_StreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setStaticMethodSignature(_StreamTransformer, () => ({
      _defaultHandleData: dart.gFnType((S, T) => [dart.void, [S, async.EventSink$(T)]]),
      _defaultHandleError: dart.gFnType(T => [dart.void, [core.Object, core.StackTrace, async.EventSink$(T)]]),
      _defaultHandleDone: dart.gFnType(T => [dart.void, [async.EventSink$(T)]])
    }));
    dart.setFieldSignature(_StreamTransformer, () => ({
      __proto__: dart.getFields(_StreamTransformer.__proto__),
      [_handleData]: dart.finalFieldType(SAndEventSinkOfTTovoid()),
      [_handleDone]: dart.finalFieldType(EventSinkOfTTovoid()),
      [_handleError]: dart.finalFieldType(ObjectAndStackTraceAndEventSinkOfTTovoid())
    }));
    return _StreamTransformer;
  });
  src__from_handlers._StreamTransformer = src__from_handlers._StreamTransformer$();
  dart.addTypeTests(src__from_handlers._StreamTransformer, _is__StreamTransformer_default);
  dart.trackLibraries("packages/stream_transform/src/from_handlers.ddc", {
    "package:stream_transform/src/from_handlers.dart": src__from_handlers
  }, '{"version":3,"sourceRoot":"","sources":["from_handlers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;QAc0B;QACH;QACD;UAClB,KAAI,kDAAkB,cACN,UAAU,eACT,WAAW,cACZ,UAAU;EAAC;;;;;;;;;;;;;;;sCAeQ,KAAO,EAAE,IAAiB;AAC7D,YAAI,IAAI,MAAC,KAAK;MAChB;oCAGI,KAAY,EAAE,UAAqB,EAAE,IAAiB;AACxD,YAAI,SAAS,CAAC,KAAK,EAAE,UAAU;MACjC;mCAEkC,IAAiB;AACjD,YAAI,MAAM;MACZ;WAGe,MAAgB;2BAAN;AACvB,YAAI,uBAAa,MAAM,YAAY,IAC7B,AAAI,+BAA6B,QAAO,SACxC,AAAI,yBAAmB,QAAO;AAEpC,YAAsB;AACtB,kBAAU,SAAS,GAAG;AACpB,cAAI,YAAY,IAAI,MAAM;AAC1B,cAAI,aAAa;AACjB,sBAAY,GAAG,MAAM,OAAO,CAAC,QAAC,KAAK,IAAK,iBAAW,CAAC,KAAK,EAAE,UAAU,yBACxD,SAAC,KAAK,EAAE,UAAqB;AACxC,gCAAY,CAAC,KAAK,EAAE,UAAU,EAAE,UAAU;sDACjC;AACT,wBAAU,GAAG;AACb,+BAAW,CAAC,UAAU;;AAExB,yBAAK,MAAM,YAAY,GAAE;AACvB,sBAAU,QAAQ,aAAG,YAAY;AACjC,sBAAU,SAAS,aAAG,YAAY;;AAEpC,oBAAU,SAAS,GAAG;AACpB,gBAAI,WAAW,YAAY;AAC3B,wBAAY,GAAG;AACf,iBAAK,UAAU,EAAE,MAAO,SAAQ,OAAO;AACvC,kBAAO;;;AAGX,cAAO,WAAU,OAAO;MAC1B;;;UAjDsB;UACH;UACD;MACZ,iBAAW,GAAG,UAAU,WAAV,UAAU,cAAI,2EAAkB;MAC9C,kBAAY,GAAG,WAAW,WAAX,WAAW,cAAI,4EAAmB;MACjD,iBAAW,GAAG,UAAU,WAAV,UAAU,cAAI,2EAAkB","file":"from_handlers.ddc.js"}');
  // Exports:
  return {
    src__from_handlers: src__from_handlers
  };
});

//# sourceMappingURL=from_handlers.ddc.js.map
