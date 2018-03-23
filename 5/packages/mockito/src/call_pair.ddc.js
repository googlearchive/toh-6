define(['dart_sdk', 'packages/matcher/src/core_matchers', 'packages/matcher/src/interfaces'], function(dart_sdk, core_matchers, interfaces) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core_matchers = core_matchers.src__core_matchers;
  const src__interfaces = interfaces.src__interfaces;
  const _root = Object.create(null);
  const src__call_pair = Object.create(_root);
  const $toString = dartx.toString;
  let isInstanceOfOfInvocation = () => (isInstanceOfOfInvocation = dart.constFn(src__core_matchers.isInstanceOf$(core.Invocation)))();
  src__call_pair.Answer$ = dart.generic(T => {
    const Answer = dart.typedef('Answer', () => dart.fnType(T, [core.Invocation]));
    return Answer;
  });
  src__call_pair.Answer = src__call_pair.Answer$();
  let const$;
  const _is_CallPair_default = Symbol('_is_CallPair_default');
  src__call_pair.CallPair$ = dart.generic(T => {
    let InvocationToT = () => (InvocationToT = dart.constFn(dart.fnType(T, [core.Invocation])))();
    class CallPair extends core.Object {
      get call() {
        return this[call$];
      }
      set call(value) {
        super.call = value;
      }
      get response() {
        return this[response$];
      }
      set response(value) {
        super.response = value;
      }
      toString() {
        return dart.str`${dart.wrapType(src__call_pair.CallPair)} {${this.call} -> ${this.response}}`;
      }
    }
    (CallPair.new = function(call, response) {
      this[call$] = call;
      this[response$] = response;
    }).prototype = CallPair.prototype;
    (CallPair.allInvocations = function(response) {
      this[response$] = response;
      this[call$] = const$ || (const$ = dart.const(new (isInstanceOfOfInvocation()).new()));
    }).prototype = CallPair.prototype;
    dart.addTypeTests(CallPair);
    CallPair.prototype[_is_CallPair_default] = true;
    const call$ = Symbol("CallPair.call");
    const response$ = Symbol("CallPair.response");
    dart.setMethodSignature(CallPair, () => ({
      __proto__: dart.getMethods(CallPair.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setFieldSignature(CallPair, () => ({
      __proto__: dart.getFields(CallPair.__proto__),
      call: dart.finalFieldType(src__interfaces.Matcher),
      response: dart.finalFieldType(InvocationToT())
    }));
    dart.defineExtensionMethods(CallPair, ['toString']);
    return CallPair;
  });
  src__call_pair.CallPair = src__call_pair.CallPair$();
  dart.addTypeTests(src__call_pair.CallPair, _is_CallPair_default);
  dart.trackLibraries("packages/mockito/src/call_pair.ddc", {
    "package:mockito/src/call_pair.dart": src__call_pair
  }, '{"version":3,"sourceRoot":"","sources":["call_pair.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAsBgB;;;;;;MAGE;;;;;;;cASK,YAAE,sCAAQ,KAAG,SAAI,OAAK,aAAQ;MAAE;;6BANtC,IAAS,EAAE,QAAa;MAAnB,WAAI,GAAJ,IAAI;MAAO,eAAQ,GAAR,QAAQ;IAAC;wCAEV,QAAa;MAAR,eAAQ,GAAR,QAAQ;MACrC,WAAI,GAAG,mCAAM,gCAAwB;IAAE","file":"call_pair.ddc.js"}');
  // Exports:
  return {
    src__call_pair: src__call_pair
  };
});

//# sourceMappingURL=call_pair.ddc.js.map
