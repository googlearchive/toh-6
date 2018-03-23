define(['dart_sdk', 'packages/angular_router/src/route_definition', 'packages/angular_router/src/url', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, route_definition, url, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_definition = route_definition.src__route_definition;
  const src__route_path = route_definition.src__route_path;
  const src__url = url.src__url;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const _root = Object.create(null);
  const src__router__router_state = Object.create(_root);
  const $toList = dartx.toList;
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(src__route_definition.RouteDefinition)))();
  let JSArrayOfComponentRef = () => (JSArrayOfComponentRef = dart.constFn(_interceptors.JSArray$(src__core__linker__component_factory.ComponentRef)))();
  let LinkedMapOfComponentRef$ComponentFactory = () => (LinkedMapOfComponentRef$ComponentFactory = dart.constFn(_js_helper.LinkedMap$(src__core__linker__component_factory.ComponentRef, src__core__linker__component_factory.ComponentFactory)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let ListOfComponentRef = () => (ListOfComponentRef = dart.constFn(core.List$(src__core__linker__component_factory.ComponentRef)))();
  let MapOfComponentRef$ComponentFactory = () => (MapOfComponentRef$ComponentFactory = dart.constFn(core.Map$(src__core__linker__component_factory.ComponentRef, src__core__linker__component_factory.ComponentFactory)))();
  const _routePath = Symbol('_routePath');
  src__router__router_state.RouterState = class RouterState extends src__url.Url {
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get routePath() {
      let t = this[_routePath];
      return t == null ? this[_routePath] = new src__route_path.RoutePath.fromRoutes(this.routes) : t;
    }
    toString() {
      return dart.str`#${dart.wrapType(src__router__router_state.RouterState)} {${super.toString()}}`;
    }
  };
  (src__router__router_state.RouterState.new = function(path, routes, opts) {
    let parameters = opts && 'parameters' in opts ? opts.parameters : null;
    let fragment = opts && 'fragment' in opts ? opts.fragment : '';
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    this[_routePath] = null;
    this[parameters$] = MapOfString$String().unmodifiable(parameters != null ? parameters : new _js_helper.LinkedMap.new());
    this[routes$] = ListOfRouteDefinition().unmodifiable(routes != null ? routes : []);
    src__router__router_state.RouterState.__proto__.new.call(this, path, {queryParameters: queryParameters, fragment: fragment});
  }).prototype = src__router__router_state.RouterState.prototype;
  dart.addTypeTests(src__router__router_state.RouterState);
  const routes$ = Symbol("RouterState.routes");
  const parameters$ = Symbol("RouterState.parameters");
  dart.setGetterSignature(src__router__router_state.RouterState, () => ({
    __proto__: dart.getGetters(src__router__router_state.RouterState.__proto__),
    routePath: dart.fnType(src__route_path.RoutePath, [])
  }));
  dart.setFieldSignature(src__router__router_state.RouterState, () => ({
    __proto__: dart.getFields(src__router__router_state.RouterState.__proto__),
    routes: dart.finalFieldType(ListOfRouteDefinition()),
    parameters: dart.finalFieldType(MapOfString$String()),
    [_routePath]: dart.fieldType(src__route_path.RoutePath)
  }));
  dart.defineExtensionMethods(src__router__router_state.RouterState, ['toString']);
  src__router__router_state.MutableRouterState = class MutableRouterState extends core.Object {
    get components() {
      return this[components];
    }
    set components(value) {
      super.components = value;
    }
    get factories() {
      return this[factories];
    }
    set factories(value) {
      super.factories = value;
    }
    get parameters() {
      return this[parameters];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get routes() {
      return this[routes];
    }
    set routes(value) {
      super.routes = value;
    }
    get fragment() {
      return this[fragment];
    }
    set fragment(value) {
      this[fragment] = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      this[path] = value;
    }
    get queryParameters() {
      return this[queryParameters];
    }
    set queryParameters(value) {
      this[queryParameters] = value;
    }
    build() {
      return new src__router__router_state.RouterState.new(this.path, this.routes[$toList](), {fragment: this.fragment, queryParameters: this.queryParameters, parameters: this.parameters});
    }
  };
  (src__router__router_state.MutableRouterState.new = function() {
    this[components] = JSArrayOfComponentRef().of([]);
    this[factories] = new (LinkedMapOfComponentRef$ComponentFactory()).new();
    this[parameters] = new (IdentityMapOfString$String()).new();
    this[routes] = JSArrayOfRouteDefinition().of([]);
    this[fragment] = '';
    this[path] = '';
    this[queryParameters] = new (IdentityMapOfString$String()).new();
  }).prototype = src__router__router_state.MutableRouterState.prototype;
  dart.addTypeTests(src__router__router_state.MutableRouterState);
  const components = Symbol("MutableRouterState.components");
  const factories = Symbol("MutableRouterState.factories");
  const parameters = Symbol("MutableRouterState.parameters");
  const routes = Symbol("MutableRouterState.routes");
  const fragment = Symbol("MutableRouterState.fragment");
  const path = Symbol("MutableRouterState.path");
  const queryParameters = Symbol("MutableRouterState.queryParameters");
  dart.setMethodSignature(src__router__router_state.MutableRouterState, () => ({
    __proto__: dart.getMethods(src__router__router_state.MutableRouterState.__proto__),
    build: dart.fnType(src__router__router_state.RouterState, [])
  }));
  dart.setFieldSignature(src__router__router_state.MutableRouterState, () => ({
    __proto__: dart.getFields(src__router__router_state.MutableRouterState.__proto__),
    components: dart.finalFieldType(ListOfComponentRef()),
    factories: dart.finalFieldType(MapOfComponentRef$ComponentFactory()),
    parameters: dart.finalFieldType(MapOfString$String()),
    routes: dart.finalFieldType(ListOfRouteDefinition()),
    fragment: dart.fieldType(core.String),
    path: dart.fieldType(core.String),
    queryParameters: dart.fieldType(MapOfString$String())
  }));
  dart.trackLibraries("packages/angular_router/src/router/router_state.ddc", {
    "package:angular_router/src/router/router_state.dart": src__router__router_state
  }, '{"version":3,"sourceRoot":"","sources":["router_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IAc8B;;;;;;IAMF;;;;;;;AAIxB,cAAO,gBAAU;4CAAK,IAAI,oCAAoB,CAAC,WAAM;IACvD;;YAaqB,aAAG,oDAAW,KAAI,cAAc;IAAK;;wDAVxD,IAAW,EACX,MAA4B;QACR;QACb,wDAAU;QACG;IAVZ,gBAAU;IAWT,iBAAU,GAAG,AAAI,iCAAgB,CAAC,UAAU,WAAV,UAAU,GAAI;IAChD,aAAM,GAAG,AAAI,oCAAiB,CAAC,MAAM,WAAN,MAAM,GAAI;AAC9C,mEAAM,IAAI,oBAAmB,eAAe,YAAY,QAAQ;EAAC;;;;;;;;;;;;;;;;IAa9C;;;;;;IACiB;;;;;;IAChB;;;;;;IACE;;;;;;IAErB;;;;;;IACA;;;;;;IACa;;;;;;;AAKlB,YAAO,KAAI,yCAAW,CAAC,SAAI,EAAE,WAAM,SAAO,eAC5B,aAAQ,mBACD,oBAAe,cACpB,eAAU;IAC5B;;;IAhByB,gBAAU,GAAG;IACI,eAAS,GAAG;IAC5B,gBAAU,GAAG;IACX,YAAM,GAAG;IAE9B,cAAQ,GAAG;IACX,UAAI,GAAG;IACM,qBAAe,GAAG;EAElB","file":"router_state.ddc.js"}');
  // Exports:
  return {
    src__router__router_state: src__router__router_state
  };
});

//# sourceMappingURL=router_state.ddc.js.map
