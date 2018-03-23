define(['dart_sdk', 'packages/matcher/src/interfaces', 'packages/collection/src/equality', 'packages/mockito/src/call_pair', 'packages/matcher/src/core_matchers', 'packages/test/src/backend/declarer'], function(dart_sdk, interfaces, equality, call_pair, core_matchers, declarer) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interfaces = interfaces.src__interfaces;
  const src__equality = equality.src__equality;
  const src__call_pair = call_pair.src__call_pair;
  const src__core_matchers = core_matchers.src__core_matchers;
  const src__util = core_matchers.src__util;
  const src__frontend__expect = declarer.src__frontend__expect;
  const _root = Object.create(null);
  const src__invocation_matcher = Object.create(_root);
  const src__mock = Object.create(_root);
  const $first = dartx.first;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $keys = dartx.keys;
  const $split = dartx.split;
  const $add = dartx.add;
  const $lastWhere = dartx.lastWhere;
  const $noSuchMethod = dartx.noSuchMethod;
  const $runtimeType = dartx.runtimeType;
  const $isEmpty = dartx.isEmpty;
  const $clear = dartx.clear;
  const $contains = dartx.contains;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $containsKey = dartx.containsKey;
  const $where = dartx.where;
  const $length = dartx.length;
  const $toSet = dartx.toSet;
  const $join = dartx.join;
  const $toString = dartx.toString;
  const $any = dartx.any;
  const $firstWhere = dartx.firstWhere;
  const $toList = dartx.toList;
  const $removeLast = dartx.removeLast;
  const $sort = dartx.sort;
  const $indexOf = dartx.indexOf;
  const $expand = dartx.expand;
  let MapOfSymbol$dynamic = () => (MapOfSymbol$dynamic = dart.constFn(core.Map$(core.Symbol, dart.dynamic)))();
  let Symbol__ToMatcher = () => (Symbol__ToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [core.Symbol], {positionalArguments: core.List, namedArguments: MapOfSymbol$dynamic(), isGetter: core.bool, isSetter: core.bool})))();
  let InvocationToMatcher = () => (InvocationToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [core.Invocation])))();
  let SymbolToString = () => (SymbolToString = dart.constFn(dart.fnType(core.String, [core.Symbol])))();
  let JSArrayOf_VerifyCall = () => (JSArrayOf_VerifyCall = dart.constFn(_interceptors.JSArray$(src__mock._VerifyCall)))();
  let JSArrayOfArgMatcher = () => (JSArrayOfArgMatcher = dart.constFn(_interceptors.JSArray$(src__mock.ArgMatcher)))();
  let IdentityMapOfString$ArgMatcher = () => (IdentityMapOfString$ArgMatcher = dart.constFn(_js_helper.IdentityMap$(core.String, src__mock.ArgMatcher)))();
  let VoidToCallPair = () => (VoidToCallPair = dart.constFn(dart.fnType(src__call_pair.CallPair, [])))();
  let MockAndFnTovoid = () => (MockAndFnTovoid = dart.constFn(dart.fnType(dart.void, [src__mock.Mock, VoidToCallPair()])))();
  let MockTovoid = () => (MockTovoid = dart.constFn(dart.fnType(dart.void, [src__mock.Mock])))();
  let StreamControllerOfInvocation = () => (StreamControllerOfInvocation = dart.constFn(async.StreamController$(core.Invocation)))();
  let JSArrayOfRealCall = () => (JSArrayOfRealCall = dart.constFn(_interceptors.JSArray$(src__mock.RealCall)))();
  let JSArrayOfCallPair = () => (JSArrayOfCallPair = dart.constFn(_interceptors.JSArray$(src__call_pair.CallPair)))();
  let CallPairTobool = () => (CallPairTobool = dart.constFn(dart.fnType(core.bool, [src__call_pair.CallPair])))();
  let ListOfRealCall = () => (ListOfRealCall = dart.constFn(core.List$(src__mock.RealCall)))();
  let ListOfCallPair = () => (ListOfCallPair = dart.constFn(core.List$(src__call_pair.CallPair)))();
  let InvocationToInvocation = () => (InvocationToInvocation = dart.constFn(dart.fnType(core.Invocation, [core.Invocation])))();
  let LinkedMapOfSymbol$dynamic = () => (LinkedMapOfSymbol$dynamic = dart.constFn(_js_helper.LinkedMap$(core.Symbol, dart.dynamic)))();
  let StringToSymbol = () => (StringToSymbol = dart.constFn(dart.fnType(core.Symbol, [core.String])))();
  let SymbolAnddynamicToNull = () => (SymbolAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [core.Symbol, dart.dynamic])))();
  let StringAndArgMatcherToNull = () => (StringAndArgMatcherToNull = dart.constFn(dart.fnType(core.Null, [core.String, src__mock.ArgMatcher])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic], {name: core.String, hashCode: core.int})))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let InvocationTodynamic = () => (InvocationTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Invocation])))();
  let InvocationToNull = () => (InvocationToNull = dart.constFn(dart.fnType(core.Null, [core.Invocation])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let FutureOfInvocation = () => (FutureOfInvocation = dart.constFn(async.Future$(core.Invocation)))();
  let RealCallTobool = () => (RealCallTobool = dart.constFn(dart.fnType(core.bool, [src__mock.RealCall])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let RealCallToNull = () => (RealCallToNull = dart.constFn(dart.fnType(core.Null, [src__mock.RealCall])))();
  let MatcherTodynamic = () => (MatcherTodynamic = dart.constFn(dart.fnType(dart.dynamic, [src__interfaces.Matcher])))();
  let ArgMatcher__ToT = () => (ArgMatcher__ToT = dart.constFn(dart.gFnType(T => [T, [src__mock.ArgMatcher], {named: core.String}])))();
  let TToVerificationResult = () => (TToVerificationResult = dart.constFn(dart.gFnType(T => [src__mock.VerificationResult, [T]])))();
  let TToVerificationResult$ = () => (TToVerificationResult$ = dart.constFn(dart.gFnType(T => [src__mock.VerificationResult, [T]])))();
  let boolToFn = () => (boolToFn = dart.constFn(dart.fnType(TToVerificationResult$(), [core.bool])))();
  let ListOf_VerifyCall = () => (ListOf_VerifyCall = dart.constFn(core.List$(src__mock._VerifyCall)))();
  let _VerifyCallToMock = () => (_VerifyCallToMock = dart.constFn(dart.fnType(src__mock.Mock, [src__mock._VerifyCall])))();
  let MockToListOfRealCall = () => (MockToListOfRealCall = dart.constFn(dart.fnType(ListOfRealCall(), [src__mock.Mock])))();
  let RealCallAndRealCallToint = () => (RealCallAndRealCallToint = dart.constFn(dart.fnType(core.int, [src__mock.RealCall, src__mock.RealCall])))();
  let ListOfTToNull = () => (ListOfTToNull = dart.constFn(dart.gFnType(T => [core.Null, [core.List$(T)]])))();
  let TToPostExpectation = () => (TToPostExpectation = dart.constFn(dart.gFnType(T => [src__mock.PostExpectation, [T]])))();
  let TToFutureOfInvocation = () => (TToFutureOfInvocation = dart.constFn(dart.gFnType(T => [FutureOfInvocation(), [T]])))();
  let MockToListOfRealCall$ = () => (MockToListOfRealCall$ = dart.constFn(dart.fnType(ListOfRealCall(), [src__mock.Mock])))();
  let RealCallAndRealCallToint$ = () => (RealCallAndRealCallToint$ = dart.constFn(dart.fnType(core.int, [src__mock.RealCall, src__mock.RealCall])))();
  let ListOfMock = () => (ListOfMock = dart.constFn(core.List$(src__mock.Mock)))();
  let ListOfMockTovoid = () => (ListOfMockTovoid = dart.constFn(dart.fnType(dart.void, [ListOfMock()])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let const$;
  let const$0;
  src__invocation_matcher.invokes = function(memberName, opts) {
    let positionalArguments = opts && 'positionalArguments' in opts ? opts.positionalArguments : const$ || (const$ = dart.constList([], dart.dynamic));
    let namedArguments = opts && 'namedArguments' in opts ? opts.namedArguments : const$0 || (const$0 = dart.constMap(core.Symbol, dart.dynamic, []));
    let isGetter = opts && 'isGetter' in opts ? opts.isGetter : false;
    let isSetter = opts && 'isSetter' in opts ? opts.isSetter : false;
    if (dart.test(isGetter) && dart.test(isSetter)) {
      dart.throw(new core.ArgumentError.new('Cannot set isGetter and iSetter'));
    }
    if (positionalArguments == null) {
      dart.throw(new core.ArgumentError.notNull('positionalArguments'));
    }
    if (namedArguments == null) {
      dart.throw(new core.ArgumentError.notNull('namedArguments'));
    }
    return new src__invocation_matcher._InvocationMatcher.new(new src__invocation_matcher._InvocationSignature.new({memberName: memberName, positionalArguments: positionalArguments, namedArguments: namedArguments, isGetter: isGetter, isSetter: isSetter}));
  };
  dart.fn(src__invocation_matcher.invokes, Symbol__ToMatcher());
  src__invocation_matcher.isInvocation = function(invocation) {
    return new src__invocation_matcher._InvocationMatcher.new(invocation);
  };
  dart.fn(src__invocation_matcher.isInvocation, InvocationToMatcher());
  let const$1;
  let const$2;
  src__invocation_matcher._InvocationSignature = class _InvocationSignature extends core.Invocation {
    get isMethod() {
      return !dart.test(this.isAccessor);
    }
  };
  (src__invocation_matcher._InvocationSignature.new = function(opts) {
    let memberName = opts && 'memberName' in opts ? opts.memberName : null;
    let positionalArguments = opts && 'positionalArguments' in opts ? opts.positionalArguments : const$1 || (const$1 = dart.constList([], dart.dynamic));
    let namedArguments = opts && 'namedArguments' in opts ? opts.namedArguments : const$2 || (const$2 = dart.constMap(core.Symbol, dart.dynamic, []));
    let isGetter = opts && 'isGetter' in opts ? opts.isGetter : false;
    let isSetter = opts && 'isSetter' in opts ? opts.isSetter : false;
    this.memberName = memberName;
    this.positionalArguments = positionalArguments;
    this.namedArguments = namedArguments;
    this.isGetter = isGetter;
    this.isSetter = isSetter;
    src__invocation_matcher._InvocationSignature.__proto__.new.call(this);
  }).prototype = src__invocation_matcher._InvocationSignature.prototype;
  dart.addTypeTests(src__invocation_matcher._InvocationSignature);
  dart.setGetterSignature(src__invocation_matcher._InvocationSignature, () => ({
    __proto__: dart.getGetters(src__invocation_matcher._InvocationSignature.__proto__),
    isMethod: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__invocation_matcher._InvocationSignature, () => ({
    __proto__: dart.getFields(src__invocation_matcher._InvocationSignature.__proto__),
    memberName: dart.finalFieldType(core.Symbol),
    positionalArguments: dart.finalFieldType(core.List),
    namedArguments: dart.finalFieldType(MapOfSymbol$dynamic()),
    isGetter: dart.finalFieldType(core.bool),
    isSetter: dart.finalFieldType(core.bool)
  }));
  const _invocation = Symbol('_invocation');
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  src__invocation_matcher._InvocationMatcher = class _InvocationMatcher extends core.Object {
    static _describeInvocation(d, invocation) {
      if (dart.test(invocation.isAccessor)) {
        d = d.add(dart.test(invocation.isGetter) ? 'get ' : 'set ').add(src__invocation_matcher._InvocationMatcher._symbolToString(invocation.memberName));
        if (dart.test(invocation.isSetter)) {
          d = d.add(' ').addDescriptionOf(invocation.positionalArguments[$first]);
        }
        return d;
      }
      d = d.add(src__invocation_matcher._InvocationMatcher._symbolToString(invocation.memberName)).add('(').addAll('', ', ', '', invocation.positionalArguments);
      if (dart.test(invocation.positionalArguments[$isNotEmpty]) && dart.test(invocation.namedArguments[$isNotEmpty])) {
        d = d.add(', ');
      }
      return d.addAll('', ', ', '', src__invocation_matcher._InvocationMatcher._namedArgsAndValues(invocation)).add(')');
    }
    static _namedArgsAndValues(invocation) {
      return invocation.namedArguments[$keys][$map](core.String, dart.fn(name => dart.str`${src__invocation_matcher._InvocationMatcher._symbolToString(name)}: ${invocation.namedArguments[$_get](name)}`, SymbolToString()));
    }
    static _symbolToString(symbol) {
      return dart.toString(symbol)[$split]('"')[$_get](1);
    }
    describe(d) {
      return src__invocation_matcher._InvocationMatcher._describeInvocation(d, this[_invocation]);
    }
    describeMismatch(item, d, _, __) {
      if (core.Invocation.is(item)) {
        d = d.add('Does not match ');
        return src__invocation_matcher._InvocationMatcher._describeInvocation(d, item);
      }
      return d.add('Is not an Invocation');
    }
    matches(item, _) {
      return core.Invocation.is(item) && dart.equals(this[_invocation].memberName, item.memberName) && this[_invocation].isSetter == item.isSetter && this[_invocation].isGetter == item.isGetter && dart.test((const$4 || (const$4 = dart.const(new src__equality.ListEquality.new(const$3 || (const$3 = dart.const(new src__invocation_matcher._MatcherEquality.new())))))).equals(this[_invocation].positionalArguments, item.positionalArguments)) && dart.test((const$6 || (const$6 = dart.const(new src__equality.MapEquality.new({values: const$5 || (const$5 = dart.const(new src__invocation_matcher._MatcherEquality.new()))})))).equals(this[_invocation].namedArguments, item.namedArguments));
    }
  };
  (src__invocation_matcher._InvocationMatcher.new = function(invocation) {
    this[_invocation] = invocation;
    if (this[_invocation] == null) {
      dart.throw(new core.ArgumentError.notNull());
    }
  }).prototype = src__invocation_matcher._InvocationMatcher.prototype;
  dart.addTypeTests(src__invocation_matcher._InvocationMatcher);
  src__invocation_matcher._InvocationMatcher[dart.implements] = () => [src__interfaces.Matcher];
  dart.setMethodSignature(src__invocation_matcher._InvocationMatcher, () => ({
    __proto__: dart.getMethods(src__invocation_matcher._InvocationMatcher.__proto__),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description]),
    describeMismatch: dart.fnType(src__interfaces.Description, [dart.dynamic, src__interfaces.Description, core.Map, core.bool]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.setStaticMethodSignature(src__invocation_matcher._InvocationMatcher, () => ({
    _describeInvocation: dart.fnType(src__interfaces.Description, [src__interfaces.Description, core.Invocation]),
    _namedArgsAndValues: dart.fnType(core.Iterable$(core.String), [core.Invocation]),
    _symbolToString: dart.fnType(core.String, [core.Symbol])
  }));
  dart.setFieldSignature(src__invocation_matcher._InvocationMatcher, () => ({
    __proto__: dart.getFields(src__invocation_matcher._InvocationMatcher.__proto__),
    [_invocation]: dart.finalFieldType(core.Invocation)
  }));
  src__invocation_matcher._MatcherEquality = class _MatcherEquality extends src__equality.DeepCollectionEquality {
    equals(e1, e2) {
      if (src__mock.ArgMatcher.is(e1)) {
        e1 = dart.dload(e1, 'matcher');
      }
      if (src__mock.ArgMatcher.is(e2)) {
        e2 = dart.dload(e2, 'matcher');
      }
      if (src__interfaces.Matcher.is(e1) && !src__interfaces.Matcher.is(e2)) {
        return e1.matches(e2, new _js_helper.LinkedMap.new());
      }
      if (src__interfaces.Matcher.is(e2) && !src__interfaces.Matcher.is(e1)) {
        return e2.matches(e1, new _js_helper.LinkedMap.new());
      }
      return super.equals(e1, e2);
    }
    hash(_) {
      return 0;
    }
  };
  (src__invocation_matcher._MatcherEquality.new = function() {
    src__invocation_matcher._MatcherEquality.__proto__.new.call(this);
  }).prototype = src__invocation_matcher._MatcherEquality.prototype;
  dart.addTypeTests(src__invocation_matcher._MatcherEquality);
  dart.defineLazy(src__mock, {
    /*src__mock._whenInProgress*/get _whenInProgress() {
      return false;
    },
    set _whenInProgress(_) {},
    /*src__mock._untilCalledInProgress*/get _untilCalledInProgress() {
      return false;
    },
    set _untilCalledInProgress(_) {},
    /*src__mock._verificationInProgress*/get _verificationInProgress() {
      return false;
    },
    set _verificationInProgress(_) {},
    /*src__mock._whenCall*/get _whenCall() {
      return null;
    },
    set _whenCall(_) {},
    /*src__mock._untilCall*/get _untilCall() {
      return null;
    },
    set _untilCall(_) {},
    /*src__mock._verifyCalls*/get _verifyCalls() {
      return JSArrayOf_VerifyCall().of([]);
    },
    /*src__mock._timer*/get _timer() {
      return new src__mock._TimeStampProvider.new();
    },
    /*src__mock._capturedArgs*/get _capturedArgs() {
      return [];
    },
    /*src__mock._typedArgs*/get _typedArgs() {
      return JSArrayOfArgMatcher().of([]);
    },
    /*src__mock._typedNamedArgs*/get _typedNamedArgs() {
      return new (IdentityMapOfString$ArgMatcher()).new();
    }
  });
  const _defaultResponse = Symbol('_defaultResponse');
  src__mock.setDefaultResponse = function(mock, defaultResponse) {
    mock[_defaultResponse] = defaultResponse;
  };
  dart.lazyFn(src__mock.setDefaultResponse, () => MockAndFnTovoid());
  const _noSuchMethod = Symbol('_noSuchMethod');
  src__mock.throwOnMissingStub = function(mock) {
    mock[_defaultResponse] = dart.fn(() => new src__call_pair.CallPair.allInvocations(dart.bind(mock, _noSuchMethod)), VoidToCallPair());
  };
  dart.lazyFn(src__mock.throwOnMissingStub, () => MockTovoid());
  const _invocationStreamController = Symbol('_invocationStreamController');
  const _realCalls = Symbol('_realCalls');
  const _responses = Symbol('_responses');
  const _givenName = Symbol('_givenName');
  const _givenHashCode = Symbol('_givenHashCode');
  const _setExpected = Symbol('_setExpected');
  let const$7;
  src__mock.Mock = class Mock extends core.Object {
    static _answerNull(_) {
      return null;
    }
    [_setExpected](cannedResponse) {
      this[_responses][$add](cannedResponse);
    }
    noSuchMethod(invocation) {
      invocation = src__mock._useTypedInvocationIfSet(invocation);
      if (dart.test(src__mock._whenInProgress)) {
        src__mock._whenCall = new src__mock._WhenCall.new(this, invocation);
        return null;
      } else if (dart.test(src__mock._verificationInProgress)) {
        src__mock._verifyCalls[$add](new src__mock._VerifyCall.new(this, invocation));
        return null;
      } else if (dart.test(src__mock._untilCalledInProgress)) {
        src__mock._untilCall = new src__mock._UntilCall.new(this, invocation);
        return null;
      } else {
        this[_realCalls][$add](new src__mock.RealCall.new(this, invocation));
        this[_invocationStreamController].add(invocation);
        let cannedResponse = this[_responses][$lastWhere](dart.fn(cr => cr.call.matches(invocation, new _js_helper.LinkedMap.new()), CallPairTobool()), {orElse: this[_defaultResponse]});
        let response = cannedResponse.response(invocation);
        return response;
      }
    }
    [_noSuchMethod](invocation) {
      return (const$7 || (const$7 = dart.const(new core.Object.new())))[$noSuchMethod](invocation);
    }
    get hashCode() {
      return this[_givenHashCode] == null ? 0 : this[_givenHashCode];
    }
    _equals(other) {
      if (other == null) return false;
      return this[_givenHashCode] != null && src__mock.Mock.is(other) ? this[_givenHashCode] == other[_givenHashCode] : this === other;
    }
    toString() {
      return this[_givenName] != null ? this[_givenName] : dart.toString(this[$runtimeType]);
    }
  };
  (src__mock.Mock.new = function() {
    this[_invocationStreamController] = StreamControllerOfInvocation().broadcast();
    this[_realCalls] = JSArrayOfRealCall().of([]);
    this[_responses] = JSArrayOfCallPair().of([]);
    this[_givenName] = null;
    this[_givenHashCode] = null;
    this[_defaultResponse] = dart.fn(() => src__mock.Mock._nullResponse, VoidToCallPair());
  }).prototype = src__mock.Mock.prototype;
  dart.addTypeTests(src__mock.Mock);
  dart.setMethodSignature(src__mock.Mock, () => ({
    __proto__: dart.getMethods(src__mock.Mock.__proto__),
    [_setExpected]: dart.fnType(dart.void, [src__call_pair.CallPair]),
    [_noSuchMethod]: dart.fnType(dart.dynamic, [core.Invocation])
  }));
  dart.setStaticMethodSignature(src__mock.Mock, () => ({_answerNull: dart.fnType(dart.dynamic, [dart.dynamic])}));
  dart.setFieldSignature(src__mock.Mock, () => ({
    __proto__: dart.getFields(src__mock.Mock.__proto__),
    [_invocationStreamController]: dart.finalFieldType(StreamControllerOfInvocation()),
    [_realCalls]: dart.finalFieldType(ListOfRealCall()),
    [_responses]: dart.finalFieldType(ListOfCallPair()),
    [_givenName]: dart.fieldType(core.String),
    [_givenHashCode]: dart.fieldType(core.int),
    [_defaultResponse]: dart.fieldType(VoidToCallPair())
  }));
  dart.defineExtensionMethods(src__mock.Mock, ['noSuchMethod', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__mock.Mock, ['hashCode']);
  dart.defineLazy(src__mock.Mock, {
    /*src__mock.Mock._nullResponse*/get _nullResponse() {
      return dart.const(new src__call_pair.CallPair.allInvocations(dart.tagStatic(src__mock.Mock, '_answerNull')));
    }
  });
  src__mock._ReturnsCannedResponse = dart.typedef('_ReturnsCannedResponse', () => dart.fnType(src__call_pair.CallPair, []));
  src__mock._useTypedInvocationIfSet = function(invocation) {
    if (dart.test(src__mock._typedArgs[$isNotEmpty]) || dart.test(src__mock._typedNamedArgs[$isNotEmpty])) {
      invocation = src__mock._InvocationForTypedArguments.new(invocation);
    }
    return invocation;
  };
  dart.fn(src__mock._useTypedInvocationIfSet, InvocationToInvocation());
  src__mock._InvocationForTypedArguments = class _InvocationForTypedArguments extends core.Invocation {
    static new(invocation) {
      if (dart.test(src__mock._typedArgs[$isEmpty]) && dart.test(src__mock._typedNamedArgs[$isEmpty])) {
        dart.throw(new core.StateError.new("_InvocationForTypedArguments called when no typed calls have been saved."));
      }
      let namedArguments = src__mock._InvocationForTypedArguments._reconstituteNamedArgs(invocation);
      let positionalArguments = src__mock._InvocationForTypedArguments._reconstitutePositionalArgs(invocation);
      src__mock._typedArgs[$clear]();
      src__mock._typedNamedArgs[$clear]();
      return new src__mock._InvocationForTypedArguments.__(invocation.memberName, positionalArguments, namedArguments, invocation.isGetter, invocation.isMethod, invocation.isSetter);
    }
    static _reconstituteNamedArgs(invocation) {
      let namedArguments = new (LinkedMapOfSymbol$dynamic()).new();
      let _typedNamedArgSymbols = src__mock._typedNamedArgs[$keys][$map](core.Symbol, dart.fn(name => core.Symbol.new(name), StringToSymbol()));
      invocation.namedArguments[$forEach](dart.fn((name, arg) => {
        if (arg == null) {
          if (!dart.test(_typedNamedArgSymbols[$contains](name))) {
            dart.throw(new core.ArgumentError.new(dart.str`A typed argument was passed in as a named argument named "${name}", ` + 'but did not pass a value for `named`. Each typed argument that is ' + 'passed as a named argument needs to specify the `named` argument. ' + 'For example: `when(obj.fn(x: typed(any, named: "x")))`.'));
          }
        } else {
          namedArguments[$_set](name, arg);
        }
      }, SymbolAnddynamicToNull()));
      src__mock._typedNamedArgs[$forEach](dart.fn((name, arg) => {
        let nameSymbol = core.Symbol.new(name);
        if (!dart.test(invocation.namedArguments[$containsKey](nameSymbol))) {
          dart.throw(new core.ArgumentError.new(dart.str`A typed argument was declared as named ${name}, but was not passed ` + dart.str`as an argument named ${name}.\n\n` + 'BAD:  when(obj.fn(typed(any, named: "a")))\n' + 'GOOD: when(obj.fn(a: typed(any, named: "a")))'));
        }
        if (invocation.namedArguments[$_get](nameSymbol) != null) {
          dart.throw(new core.ArgumentError.new(dart.str`A typed argument was declared as named ${name}, but a different ` + dart.str`value (${invocation.namedArguments[$_get](nameSymbol)}) was passed as ` + dart.str`${name}.\n\n` + 'BAD:  when(obj.fn(b: typed(any, name: "a")))\n' + 'GOOD: when(obj.fn(b: typed(any, name: "b")))'));
        }
        namedArguments[$_set](nameSymbol, arg);
      }, StringAndArgMatcherToNull()));
      return namedArguments;
    }
    static _reconstitutePositionalArgs(invocation) {
      let positionalArguments = [];
      let nullPositionalArguments = invocation.positionalArguments[$where](dart.fn(arg => arg == null, dynamicTobool()));
      if (src__mock._typedArgs[$length] != nullPositionalArguments[$length]) {
        dart.throw(new core.ArgumentError.new('null arguments are not allowed alongside typed(); use ' + '"typed(eq(null))"'));
      }
      let typedIndex = 0;
      let positionalIndex = 0;
      while (typedIndex < dart.notNull(src__mock._typedArgs[$length]) && positionalIndex < dart.notNull(invocation.positionalArguments[$length])) {
        let arg = src__mock._typedArgs[$_get](typedIndex);
        if (invocation.positionalArguments[$_get](positionalIndex) == null) {
          positionalArguments[$add](arg);
          typedIndex++;
          positionalIndex++;
        } else {
          positionalArguments[$add](invocation.positionalArguments[$_get](positionalIndex));
          positionalIndex++;
        }
      }
      while (positionalIndex < dart.notNull(invocation.positionalArguments[$length])) {
        positionalArguments[$add](invocation.positionalArguments[$_get](positionalIndex));
        positionalIndex++;
      }
      return positionalArguments;
    }
  };
  (src__mock._InvocationForTypedArguments.__ = function(memberName, positionalArguments, namedArguments, isGetter, isMethod, isSetter) {
    this.memberName = memberName;
    this.positionalArguments = positionalArguments;
    this.namedArguments = namedArguments;
    this.isGetter = isGetter;
    this.isMethod = isMethod;
    this.isSetter = isSetter;
    src__mock._InvocationForTypedArguments.__proto__.new.call(this);
  }).prototype = src__mock._InvocationForTypedArguments.prototype;
  dart.addTypeTests(src__mock._InvocationForTypedArguments);
  dart.setStaticMethodSignature(src__mock._InvocationForTypedArguments, () => ({
    _reconstituteNamedArgs: dart.fnType(core.Map$(core.Symbol, dart.dynamic), [core.Invocation]),
    _reconstitutePositionalArgs: dart.fnType(core.List, [core.Invocation])
  }));
  dart.setFieldSignature(src__mock._InvocationForTypedArguments, () => ({
    __proto__: dart.getFields(src__mock._InvocationForTypedArguments.__proto__),
    memberName: dart.finalFieldType(core.Symbol),
    namedArguments: dart.finalFieldType(MapOfSymbol$dynamic()),
    positionalArguments: dart.finalFieldType(core.List),
    isGetter: dart.finalFieldType(core.bool),
    isMethod: dart.finalFieldType(core.bool),
    isSetter: dart.finalFieldType(core.bool)
  }));
  src__mock.named = function(mock, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
    dart.dput(mock, _givenName, name);
    dart.dput(mock, _givenHashCode, hashCode);
    return mock;
  };
  dart.fn(src__mock.named, dynamic__Todynamic());
  src__mock.reset = function(mock) {
    dart.dsend(dart.dload(mock, _realCalls), 'clear');
    dart.dsend(dart.dload(mock, _responses), 'clear');
  };
  dart.fn(src__mock.reset, dynamicTovoid());
  src__mock.clearInteractions = function(mock) {
    dart.dsend(dart.dload(mock, _realCalls), 'clear');
  };
  dart.fn(src__mock.clearInteractions, dynamicTovoid());
  const _completeWhen = Symbol('_completeWhen');
  src__mock.PostExpectation = class PostExpectation extends core.Object {
    thenReturn(expected) {
      return this[_completeWhen](dart.fn(_ => expected, InvocationTodynamic()));
    }
    thenThrow(throwable) {
      return this[_completeWhen](dart.fn(_ => {
        dart.throw(throwable);
      }, InvocationToNull()));
    }
    thenAnswer(answer) {
      return this[_completeWhen](answer);
    }
    [_completeWhen](answer) {
      src__mock._whenCall[_setExpected](answer);
      let mock = src__mock._whenCall.mock;
      src__mock._whenCall = null;
      src__mock._whenInProgress = false;
      return mock;
    }
  };
  (src__mock.PostExpectation.new = function() {
  }).prototype = src__mock.PostExpectation.prototype;
  dart.addTypeTests(src__mock.PostExpectation);
  dart.setMethodSignature(src__mock.PostExpectation, () => ({
    __proto__: dart.getMethods(src__mock.PostExpectation.__proto__),
    thenReturn: dart.fnType(dart.dynamic, [dart.dynamic]),
    thenThrow: dart.fnType(dart.dynamic, [dart.dynamic]),
    thenAnswer: dart.fnType(dart.dynamic, [InvocationTodynamic()]),
    [_completeWhen]: dart.fnType(dart.dynamic, [InvocationTodynamic()])
  }));
  const _isMethodMatches = Symbol('_isMethodMatches');
  const _isArgumentsMatches = Symbol('_isArgumentsMatches');
  const _captureArguments = Symbol('_captureArguments');
  const _capture = Symbol('_capture');
  src__mock.InvocationMatcher = class InvocationMatcher extends core.Object {
    get roleInvocation() {
      return this[roleInvocation$];
    }
    set roleInvocation(value) {
      super.roleInvocation = value;
    }
    matches(invocation) {
      let isMatching = dart.test(this[_isMethodMatches](invocation)) && dart.test(this[_isArgumentsMatches](invocation));
      if (isMatching) {
        this[_captureArguments](invocation);
      }
      return isMatching;
    }
    [_isMethodMatches](invocation) {
      if (!dart.equals(invocation.memberName, this.roleInvocation.memberName)) {
        return false;
      }
      if (invocation.isGetter != this.roleInvocation.isGetter || invocation.isSetter != this.roleInvocation.isSetter || invocation.isMethod != this.roleInvocation.isMethod) {
        return false;
      }
      return true;
    }
    [_captureArguments](invocation) {
      let index = 0;
      for (let roleArg of this.roleInvocation.positionalArguments) {
        let actArg = invocation.positionalArguments[$_get](index);
        if (src__mock.ArgMatcher.is(roleArg) && dart.test(roleArg[_capture])) {
          src__mock._capturedArgs[$add](actArg);
        }
        index++;
      }
      for (let roleKey of this.roleInvocation.namedArguments[$keys]) {
        let roleArg = this.roleInvocation.namedArguments[$_get](roleKey);
        let actArg = invocation.namedArguments[$_get](roleKey);
        if (src__mock.ArgMatcher.is(roleArg)) {
          if (src__mock.ArgMatcher.is(roleArg) && dart.test(roleArg[_capture])) {
            src__mock._capturedArgs[$add](actArg);
          }
        }
      }
    }
    [_isArgumentsMatches](invocation) {
      if (invocation.positionalArguments[$length] != this.roleInvocation.positionalArguments[$length]) {
        return false;
      }
      if (invocation.namedArguments[$length] != this.roleInvocation.namedArguments[$length]) {
        return false;
      }
      let index = 0;
      for (let roleArg of this.roleInvocation.positionalArguments) {
        let actArg = invocation.positionalArguments[$_get](index);
        if (!dart.test(this.isMatchingArg(roleArg, actArg))) {
          return false;
        }
        index++;
      }
      let roleKeys = this.roleInvocation.namedArguments[$keys][$toSet]();
      let actKeys = invocation.namedArguments[$keys][$toSet]();
      if (dart.test(roleKeys.difference(actKeys).isNotEmpty) || dart.test(actKeys.difference(roleKeys).isNotEmpty)) {
        return false;
      }
      for (let roleKey of this.roleInvocation.namedArguments[$keys]) {
        let roleArg = this.roleInvocation.namedArguments[$_get](roleKey);
        let actArg = invocation.namedArguments[$_get](roleKey);
        if (!dart.test(this.isMatchingArg(roleArg, actArg))) {
          return false;
        }
      }
      return true;
    }
    isMatchingArg(roleArg, actArg) {
      if (src__mock.ArgMatcher.is(roleArg)) {
        return roleArg.matcher.matches(actArg, new _js_helper.LinkedMap.new());
      } else {
        return src__core_matchers.equals(roleArg).matches(actArg, new _js_helper.LinkedMap.new());
      }
    }
  };
  (src__mock.InvocationMatcher.new = function(roleInvocation) {
    this[roleInvocation$] = roleInvocation;
  }).prototype = src__mock.InvocationMatcher.prototype;
  dart.addTypeTests(src__mock.InvocationMatcher);
  const roleInvocation$ = Symbol("InvocationMatcher.roleInvocation");
  dart.setMethodSignature(src__mock.InvocationMatcher, () => ({
    __proto__: dart.getMethods(src__mock.InvocationMatcher.__proto__),
    matches: dart.fnType(core.bool, [core.Invocation]),
    [_isMethodMatches]: dart.fnType(core.bool, [core.Invocation]),
    [_captureArguments]: dart.fnType(dart.void, [core.Invocation]),
    [_isArgumentsMatches]: dart.fnType(core.bool, [core.Invocation]),
    isMatchingArg: dart.fnType(core.bool, [dart.dynamic, dart.dynamic])
  }));
  dart.setFieldSignature(src__mock.InvocationMatcher, () => ({
    __proto__: dart.getFields(src__mock.InvocationMatcher.__proto__),
    roleInvocation: dart.finalFieldType(core.Invocation)
  }));
  const _now = Symbol('_now');
  src__mock._TimeStampProvider = class _TimeStampProvider extends core.Object {
    now() {
      let candidate = new core.DateTime.now();
      if (dart.notNull(candidate.millisecondsSinceEpoch) <= dart.notNull(this[_now])) {
        candidate = new core.DateTime.fromMillisecondsSinceEpoch(dart.notNull(this[_now]) + 1);
      }
      this[_now] = candidate.millisecondsSinceEpoch;
      return candidate;
    }
  };
  (src__mock._TimeStampProvider.new = function() {
    this[_now] = 0;
  }).prototype = src__mock._TimeStampProvider.prototype;
  dart.addTypeTests(src__mock._TimeStampProvider);
  dart.setMethodSignature(src__mock._TimeStampProvider, () => ({
    __proto__: dart.getMethods(src__mock._TimeStampProvider.__proto__),
    now: dart.fnType(core.DateTime, [])
  }));
  dart.setFieldSignature(src__mock._TimeStampProvider, () => ({
    __proto__: dart.getFields(src__mock._TimeStampProvider.__proto__),
    [_now]: dart.fieldType(core.int)
  }));
  src__mock.RealCall = class RealCall extends core.Object {
    get mock() {
      return this[mock$];
    }
    set mock(value) {
      super.mock = value;
    }
    get invocation() {
      return this[invocation$];
    }
    set invocation(value) {
      super.invocation = value;
    }
    get timeStamp() {
      return this[timeStamp];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get verified() {
      return this[verified];
    }
    set verified(value) {
      this[verified] = value;
    }
    toString() {
      let args = this.invocation.positionalArguments[$map](core.String, dart.fn(v => v == null ? "null" : dart.toString(v), dynamicToString()))[$join](", ");
      if (dart.test(this.invocation.namedArguments[$isNotEmpty])) {
        let namedArgs = this.invocation.namedArguments[$keys][$map](core.String, dart.fn(key => dart.str`${src__mock.RealCall._symbolToString(key)}: ${this.invocation.namedArguments[$_get](key)}`, SymbolToString()))[$join](", ");
        args = dart.notNull(args) + dart.str`, {${namedArgs}}`;
      }
      let method = src__mock.RealCall._symbolToString(this.invocation.memberName);
      if (dart.test(this.invocation.isMethod)) {
        method = dart.str`${method}(${args})`;
      } else if (dart.test(this.invocation.isGetter)) {
        method = dart.str`${method}`;
      } else if (dart.test(this.invocation.isSetter)) {
        method = dart.str`${method}=${args}`;
      } else {
        dart.throw(new core.StateError.new('Invocation should be getter, setter or a method call.'));
      }
      let verifiedText = dart.test(this.verified) ? "[VERIFIED] " : "";
      return dart.str`${verifiedText}${this.mock}.${method}`;
    }
    static _symbolToString(symbol) {
      return dart.toString(symbol)[$split]('"')[$_get](1);
    }
  };
  (src__mock.RealCall.new = function(mock, invocation) {
    this[verified] = false;
    this[mock$] = mock;
    this[invocation$] = invocation;
    this[timeStamp] = src__mock._timer.now();
  }).prototype = src__mock.RealCall.prototype;
  dart.addTypeTests(src__mock.RealCall);
  const mock$ = Symbol("RealCall.mock");
  const invocation$ = Symbol("RealCall.invocation");
  const timeStamp = Symbol("RealCall.timeStamp");
  const verified = Symbol("RealCall.verified");
  dart.setStaticMethodSignature(src__mock.RealCall, () => ({_symbolToString: dart.fnType(core.String, [core.Symbol])}));
  dart.setFieldSignature(src__mock.RealCall, () => ({
    __proto__: dart.getFields(src__mock.RealCall.__proto__),
    mock: dart.finalFieldType(src__mock.Mock),
    invocation: dart.finalFieldType(core.Invocation),
    timeStamp: dart.finalFieldType(core.DateTime),
    verified: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__mock.RealCall, ['toString']);
  src__mock._WhenCall = class _WhenCall extends core.Object {
    [_setExpected](answer) {
      this.mock[_setExpected](new src__call_pair.CallPair.new(src__invocation_matcher.isInvocation(this.whenInvocation), answer));
    }
  };
  (src__mock._WhenCall.new = function(mock, whenInvocation) {
    this.mock = mock;
    this.whenInvocation = whenInvocation;
  }).prototype = src__mock._WhenCall.prototype;
  dart.addTypeTests(src__mock._WhenCall);
  dart.setMethodSignature(src__mock._WhenCall, () => ({
    __proto__: dart.getMethods(src__mock._WhenCall.__proto__),
    [_setExpected]: dart.fnType(dart.void, [InvocationTodynamic()])
  }));
  dart.setFieldSignature(src__mock._WhenCall, () => ({
    __proto__: dart.getFields(src__mock._WhenCall.__proto__),
    mock: dart.finalFieldType(src__mock.Mock),
    whenInvocation: dart.finalFieldType(core.Invocation)
  }));
  const _mock = Symbol('_mock');
  const _invocationMatcher = Symbol('_invocationMatcher');
  const _matchesInvocation = Symbol('_matchesInvocation');
  src__mock._UntilCall = class _UntilCall extends core.Object {
    [_matchesInvocation](realCall) {
      return this[_invocationMatcher].matches(realCall.invocation);
    }
    get [_realCalls]() {
      return this[_mock][_realCalls];
    }
    get invocationFuture() {
      if (dart.test(this[_realCalls][$any](dart.bind(this, _matchesInvocation)))) {
        return FutureOfInvocation().value(this[_realCalls][$firstWhere](dart.bind(this, _matchesInvocation)).invocation);
      }
      return this[_mock][_invocationStreamController].stream.firstWhere(dart.bind(this[_invocationMatcher], 'matches'));
    }
  };
  (src__mock._UntilCall.new = function(mock, invocation) {
    this[_mock] = mock;
    this[_invocationMatcher] = new src__mock.InvocationMatcher.new(invocation);
  }).prototype = src__mock._UntilCall.prototype;
  dart.addTypeTests(src__mock._UntilCall);
  dart.setMethodSignature(src__mock._UntilCall, () => ({
    __proto__: dart.getMethods(src__mock._UntilCall.__proto__),
    [_matchesInvocation]: dart.fnType(core.bool, [src__mock.RealCall])
  }));
  dart.setGetterSignature(src__mock._UntilCall, () => ({
    __proto__: dart.getGetters(src__mock._UntilCall.__proto__),
    [_realCalls]: dart.fnType(core.List$(src__mock.RealCall), []),
    invocationFuture: dart.fnType(async.Future$(core.Invocation), [])
  }));
  dart.setFieldSignature(src__mock._UntilCall, () => ({
    __proto__: dart.getFields(src__mock._UntilCall.__proto__),
    [_invocationMatcher]: dart.finalFieldType(src__mock.InvocationMatcher),
    [_mock]: dart.finalFieldType(src__mock.Mock)
  }));
  const _findAfter = Symbol('_findAfter');
  const _checkWith = Symbol('_checkWith');
  src__mock._VerifyCall = class _VerifyCall extends core.Object {
    [_findAfter](dt) {
      return this.matchingInvocations[$firstWhere](dart.fn(inv => !dart.test(inv.verified) && dart.test(inv.timeStamp.isAfter(dt)), RealCallTobool()), {orElse: dart.fn(() => null, VoidToNull())});
    }
    [_checkWith](never) {
      if (!dart.test(never) && dart.test(this.matchingInvocations[$isEmpty])) {
        let message = null;
        if (dart.test(this.mock[_realCalls][$isEmpty])) {
          message = "No matching calls (actually, no calls at all).";
        } else {
          let otherCalls = this.mock[_realCalls][$join](", ");
          message = dart.str`No matching calls. All calls: ${otherCalls}`;
        }
        src__frontend__expect.fail(dart.str`${message}\n` + "(If you called `verify(...).called(0);`, please instead use " + "`verifyNever(...);`.)");
      }
      if (dart.test(never) && dart.test(this.matchingInvocations[$isNotEmpty])) {
        let calls = this.mock[_realCalls][$join](", ");
        src__frontend__expect.fail(dart.str`Unexpected calls. All calls: ${calls}`);
      }
      this.matchingInvocations[$forEach](dart.fn(inv => {
        inv.verified = true;
      }, RealCallToNull()));
    }
  };
  (src__mock._VerifyCall.new = function(mock, verifyInvocation) {
    this.matchingInvocations = null;
    this.mock = mock;
    this.verifyInvocation = verifyInvocation;
    let expectedMatcher = new src__mock.InvocationMatcher.new(this.verifyInvocation);
    this.matchingInvocations = this.mock[_realCalls][$where](dart.fn(recordedInvocation => !dart.test(recordedInvocation.verified) && dart.test(expectedMatcher.matches(recordedInvocation.invocation)), RealCallTobool()))[$toList]();
  }).prototype = src__mock._VerifyCall.prototype;
  dart.addTypeTests(src__mock._VerifyCall);
  dart.setMethodSignature(src__mock._VerifyCall, () => ({
    __proto__: dart.getMethods(src__mock._VerifyCall.__proto__),
    [_findAfter]: dart.fnType(src__mock.RealCall, [core.DateTime]),
    [_checkWith]: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__mock._VerifyCall, () => ({
    __proto__: dart.getFields(src__mock._VerifyCall.__proto__),
    mock: dart.finalFieldType(src__mock.Mock),
    verifyInvocation: dart.finalFieldType(core.Invocation),
    matchingInvocations: dart.fieldType(ListOfRealCall())
  }));
  src__mock.ArgMatcher = class ArgMatcher extends core.Object {
    get matcher() {
      return this[matcher$];
    }
    set matcher(value) {
      super.matcher = value;
    }
    toString() {
      return dart.str`${dart.wrapType(src__mock.ArgMatcher)} {${this.matcher}: ${this[_capture]}}`;
    }
  };
  (src__mock.ArgMatcher.new = function(matcher, capture) {
    this[matcher$] = matcher;
    this[_capture] = capture;
  }).prototype = src__mock.ArgMatcher.prototype;
  dart.addTypeTests(src__mock.ArgMatcher);
  const matcher$ = Symbol("ArgMatcher.matcher");
  dart.setFieldSignature(src__mock.ArgMatcher, () => ({
    __proto__: dart.getFields(src__mock.ArgMatcher.__proto__),
    matcher: dart.finalFieldType(src__interfaces.Matcher),
    [_capture]: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__mock.ArgMatcher, ['toString']);
  dart.copyProperties(src__mock, {
    get any() {
      return new src__mock.ArgMatcher.new(src__core_matchers.anything, false);
    }
  });
  dart.copyProperties(src__mock, {
    get captureAny() {
      return new src__mock.ArgMatcher.new(src__core_matchers.anything, true);
    }
  });
  src__mock.argThat = function(matcher) {
    return new src__mock.ArgMatcher.new(matcher, false);
  };
  dart.fn(src__mock.argThat, MatcherTodynamic());
  src__mock.captureThat = function(matcher) {
    return new src__mock.ArgMatcher.new(matcher, true);
  };
  dart.fn(src__mock.captureThat, MatcherTodynamic());
  src__mock.typed = function(T, matcher, opts) {
    let named = opts && 'named' in opts ? opts.named : null;
    if (named == null) {
      src__mock._typedArgs[$add](matcher);
    } else {
      src__mock._typedNamedArgs[$_set](named, matcher);
    }
    return null;
  };
  dart.fn(src__mock.typed, ArgMatcher__ToT());
  src__mock.VerificationResult = class VerificationResult extends core.Object {
    get captured() {
      return this[captured];
    }
    set captured(value) {
      this[captured] = value;
    }
    get callCount() {
      return this[callCount$];
    }
    set callCount(value) {
      this[callCount$] = value;
    }
    called(matcher) {
      src__frontend__expect.expect(this.callCount, src__util.wrapMatcher(matcher), {reason: "Unexpected number of calls"});
    }
  };
  (src__mock.VerificationResult.new = function(callCount) {
    this[captured] = [];
    this[callCount$] = callCount;
    this.captured = core.List.from(src__mock._capturedArgs, {growable: false});
    src__mock._capturedArgs[$clear]();
  }).prototype = src__mock.VerificationResult.prototype;
  dart.addTypeTests(src__mock.VerificationResult);
  const captured = Symbol("VerificationResult.captured");
  const callCount$ = Symbol("VerificationResult.callCount");
  dart.setMethodSignature(src__mock.VerificationResult, () => ({
    __proto__: dart.getMethods(src__mock.VerificationResult.__proto__),
    called: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__mock.VerificationResult, () => ({
    __proto__: dart.getFields(src__mock.VerificationResult.__proto__),
    captured: dart.fieldType(core.List),
    callCount: dart.fieldType(core.int)
  }));
  src__mock.Answering = dart.typedef('Answering', () => dart.fnType(dart.dynamic, [core.Invocation]));
  src__mock.Verification = dart.typedef('Verification', () => dart.gFnType(T => [src__mock.VerificationResult, [T]]));
  src__mock._InOrderVerification = dart.typedef('_InOrderVerification', () => dart.gFnType(T => [dart.void, [core.List$(T)]]));
  dart.copyProperties(src__mock, {
    get verifyNever() {
      return src__mock._makeVerify(true);
    }
  });
  dart.copyProperties(src__mock, {
    get verify() {
      return src__mock._makeVerify(false);
    }
  });
  src__mock._makeVerify = function(never) {
    if (dart.test(src__mock._verifyCalls[$isNotEmpty])) {
      dart.throw(new core.StateError.new(src__mock._verifyCalls[$join]()));
    }
    src__mock._verificationInProgress = true;
    return dart.fn((T, mock) => {
      src__mock._verificationInProgress = false;
      if (src__mock._verifyCalls[$length] === 1) {
        let verifyCall = src__mock._verifyCalls[$removeLast]();
        let result = new src__mock.VerificationResult.new(verifyCall.matchingInvocations[$length]);
        verifyCall[_checkWith](never);
        return result;
      } else {
        src__frontend__expect.fail("Used on a non-mockito object");
      }
    }, TToVerificationResult());
  };
  dart.fn(src__mock._makeVerify, boolToFn());
  dart.copyProperties(src__mock, {
    get verifyInOrder() {
      if (dart.test(src__mock._verifyCalls[$isNotEmpty])) {
        dart.throw(new core.StateError.new(src__mock._verifyCalls[$join]()));
      }
      src__mock._verificationInProgress = true;
      return dart.fn((T, _) => {
        src__mock._verificationInProgress = false;
        let dt = new core.DateTime.fromMillisecondsSinceEpoch(0);
        let tmpVerifyCalls = ListOf_VerifyCall().from(src__mock._verifyCalls);
        src__mock._verifyCalls[$clear]();
        let matchedCalls = JSArrayOfRealCall().of([]);
        for (let verifyCall of tmpVerifyCalls) {
          let matched = verifyCall[_findAfter](dt);
          if (matched != null) {
            matchedCalls[$add](matched);
            dt = matched.timeStamp;
          } else {
            let mocks = tmpVerifyCalls[$map](src__mock.Mock, dart.fn(vc => vc.mock, _VerifyCallToMock()))[$toSet]();
            let allInvocations = mocks.expand(src__mock.RealCall, dart.fn(m => m[_realCalls], MockToListOfRealCall()))[$toList]({growable: false});
            allInvocations[$sort](dart.fn((inv1, inv2) => inv1.timeStamp.compareTo(inv2.timeStamp), RealCallAndRealCallToint()));
            let otherCalls = "";
            if (dart.test(allInvocations[$isNotEmpty])) {
              otherCalls = dart.str` All calls: ${allInvocations[$join](", ")}`;
            }
            src__frontend__expect.fail(dart.str`Matching call #${tmpVerifyCalls[$indexOf](verifyCall)} not found.${otherCalls}`);
          }
        }
        for (let call of matchedCalls) {
          call.verified = true;
        }
      }, ListOfTToNull());
    }
  });
  src__mock.verifyNoMoreInteractions = function(mock) {
    let unverified = dart.dsend(dart.dsend(dart.dload(mock, _realCalls), 'where', dart.fn(inv => !dart.dtest(dart.dload(inv, 'verified')), dynamicTobool())), 'toList');
    if (dart.dtest(dart.dload(unverified, 'isNotEmpty'))) {
      src__frontend__expect.fail("No more calls expected, but following found: " + dart.notNull(core.String._check(dart.dsend(unverified, 'join'))));
    }
  };
  dart.fn(src__mock.verifyNoMoreInteractions, dynamicTovoid());
  src__mock.verifyZeroInteractions = function(mock) {
    if (dart.dtest(dart.dload(dart.dload(mock, _realCalls), 'isNotEmpty'))) {
      src__frontend__expect.fail("No interaction expected, but following found: " + dart.notNull(core.String._check(dart.dsend(dart.dload(mock, _realCalls), 'join'))));
    }
  };
  dart.fn(src__mock.verifyZeroInteractions, dynamicTovoid());
  src__mock.Expectation = dart.typedef('Expectation', () => dart.gFnType(T => [src__mock.PostExpectation, [T]]));
  dart.copyProperties(src__mock, {
    get when() {
      if (src__mock._whenCall != null) {
        dart.throw(new core.StateError.new('Cannot call `when` within a stub response'));
      }
      src__mock._whenInProgress = true;
      return dart.fn((T, _) => {
        src__mock._whenInProgress = false;
        return new src__mock.PostExpectation.new();
      }, TToPostExpectation());
    }
  });
  src__mock.InvocationLoader = dart.typedef('InvocationLoader', () => dart.gFnType(T => [async.Future$(core.Invocation), [T]]));
  dart.copyProperties(src__mock, {
    get untilCalled() {
      src__mock._untilCalledInProgress = true;
      return dart.fn((T, _) => {
        src__mock._untilCalledInProgress = false;
        return src__mock._untilCall.invocationFuture;
      }, TToFutureOfInvocation());
    }
  });
  src__mock.logInvocations = function(mocks) {
    let allInvocations = mocks[$expand](src__mock.RealCall, dart.fn(m => m[_realCalls], MockToListOfRealCall$()))[$toList]({growable: false});
    allInvocations[$sort](dart.fn((inv1, inv2) => inv1.timeStamp.compareTo(inv2.timeStamp), RealCallAndRealCallToint$()));
    allInvocations[$forEach](dart.fn(inv => {
      core.print(dart.toString(inv));
    }, RealCallToNull()));
  };
  dart.fn(src__mock.logInvocations, ListOfMockTovoid());
  src__mock.resetMockitoState = function() {
    src__mock._whenInProgress = false;
    src__mock._untilCalledInProgress = false;
    src__mock._verificationInProgress = false;
    src__mock._whenCall = null;
    src__mock._untilCall = null;
    src__mock._verifyCalls[$clear]();
    src__mock._capturedArgs[$clear]();
    src__mock._typedArgs[$clear]();
    src__mock._typedNamedArgs[$clear]();
  };
  dart.fn(src__mock.resetMockitoState, VoidTovoid());
  dart.trackLibraries("packages/mockito/src/invocation_matcher.ddc", {
    "package:mockito/src/invocation_matcher.dart": src__invocation_matcher,
    "package:mockito/src/mock.dart": src__mock
  }, '{"version":3,"sourceRoot":"","sources":["invocation_matcher.dart","mock.dart"],"names":[],"mappings":"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","file":"invocation_matcher.ddc.js"}');
  // Exports:
  return {
    src__invocation_matcher: src__invocation_matcher,
    src__mock: src__mock
  };
});

//# sourceMappingURL=invocation_matcher.ddc.js.map
