define(['dart_sdk', 'packages/angular_router/src/router/router_state', 'packages/angular/src/core/linker/app_view', 'packages/angular_router/src/route_definition', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/di/injector/empty', 'packages/angular_router/src/lifecycle', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_router/src/router_hook'], function(dart_sdk, router_state, app_view, route_definition, optimizations, empty, lifecycle, lifecycle_hooks, router_hook) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__router__router_state = router_state.src__router__router_state;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__route_definition = route_definition.src__route_definition;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__lifecycle = lifecycle.src__lifecycle;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__router_hook = router_hook.src__router_hook;
  const _root = Object.create(null);
  const src__router__router_outlet_token = Object.create(_root);
  const src__router__router = Object.create(_root);
  const src__directives__router_outlet_directive = Object.create(_root);
  const $_get = dartx._get;
  const $values = dartx.values;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  let LinkedMapOfComponentFactory$ComponentRef = () => (LinkedMapOfComponentFactory$ComponentRef = dart.constFn(_js_helper.LinkedMap$(src__core__linker__component_factory.ComponentFactory, src__core__linker__component_factory.ComponentRef)))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let VoidToComponentRef = () => (VoidToComponentRef = dart.constFn(dart.fnType(src__core__linker__component_factory.ComponentRef, [])))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(src__route_definition.RouteDefinition)))();
  let MapOfComponentFactory$ComponentRef = () => (MapOfComponentFactory$ComponentRef = dart.constFn(core.Map$(src__core__linker__component_factory.ComponentFactory, src__core__linker__component_factory.ComponentRef)))();
  src__router__router_outlet_token.RouterOutletToken = class RouterOutletToken extends core.Object {
    get routerOutlet() {
      return this[routerOutlet];
    }
    set routerOutlet(value) {
      this[routerOutlet] = value;
    }
  };
  (src__router__router_outlet_token.RouterOutletToken.new = function() {
    this[routerOutlet] = null;
  }).prototype = src__router__router_outlet_token.RouterOutletToken.prototype;
  dart.addTypeTests(src__router__router_outlet_token.RouterOutletToken);
  const routerOutlet = Symbol("RouterOutletToken.routerOutlet");
  dart.setFieldSignature(src__router__router_outlet_token.RouterOutletToken, () => ({
    __proto__: dart.getFields(src__router__router_outlet_token.RouterOutletToken.__proto__),
    routerOutlet: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet)
  }));
  src__router__router.NavigationResult = class NavigationResult extends core.Object {
    toString() {
      return {
        0: "NavigationResult.SUCCESS",
        1: "NavigationResult.BLOCKED_BY_GUARD",
        2: "NavigationResult.INVALID_ROUTE"
      }[this.index];
    }
  };
  (src__router__router.NavigationResult.new = function(x) {
    this.index = x;
  }).prototype = src__router__router.NavigationResult.prototype;
  dart.addTypeTests(src__router__router.NavigationResult);
  dart.setFieldSignature(src__router__router.NavigationResult, () => ({
    __proto__: dart.getFields(src__router__router.NavigationResult.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__router__router.NavigationResult, ['toString']);
  src__router__router.NavigationResult.SUCCESS = dart.const(new src__router__router.NavigationResult.new(0));
  src__router__router.NavigationResult.BLOCKED_BY_GUARD = dart.const(new src__router__router.NavigationResult.new(1));
  src__router__router.NavigationResult.INVALID_ROUTE = dart.const(new src__router__router.NavigationResult.new(2));
  src__router__router.NavigationResult.values = dart.constList([src__router__router.NavigationResult.SUCCESS, src__router__router.NavigationResult.BLOCKED_BY_GUARD, src__router__router.NavigationResult.INVALID_ROUTE], src__router__router.NavigationResult);
  src__router__router.Router = class Router extends core.Object {
    get onRouteActivated() {
      return this.stream;
    }
  };
  (src__router__router.Router.new = function() {
  }).prototype = src__router__router.Router.prototype;
  dart.addTypeTests(src__router__router.Router);
  dart.setGetterSignature(src__router__router.Router, () => ({
    __proto__: dart.getGetters(src__router__router.Router.__proto__),
    onRouteActivated: dart.fnType(async.Stream$(src__router__router_state.RouterState), [])
  }));
  const _viewContainerRef = Symbol('_viewContainerRef');
  const _router = Symbol('_router');
  const _routerHook = Symbol('_routerHook');
  const _loadedComponents = Symbol('_loadedComponents');
  const _activeComponentFactory = Symbol('_activeComponentFactory');
  const _routes = Symbol('_routes');
  let const$;
  const _activeComponent = Symbol('_activeComponent');
  const _coerceFactory = Symbol('_coerceFactory');
  const _shouldReuse = Symbol('_shouldReuse');
  src__directives__router_outlet_directive.RouterOutlet = class RouterOutlet extends core.Object {
    get [_activeComponent]() {
      return this[_loadedComponents][$_get](this[_activeComponentFactory]);
    }
    set routes(routes) {
      if (dart.test(src__runtime__optimizations.isDevMode)) {
        for (let route of routes) {
          route.assertValid();
        }
        let hasDefault = false;
        for (let route of routes) {
          if (dart.test(route.useAsDefault)) {
            if (hasDefault) {
              dart.throw(new core.StateError.new('Only one route can be used as default'));
            }
            hasDefault = true;
          }
        }
      }
      this[_routes] = routes;
    }
    get routes() {
      let l = this[_routes];
      return l != null ? l : JSArrayOfRouteDefinition().of([]);
    }
    ngOnInit() {
      this[_router].registerRootOutlet(this);
    }
    ngOnDestroy() {
      for (let loadedComponent of this[_loadedComponents][$values]) {
        loadedComponent.destroy();
      }
      this[_viewContainerRef].clear();
      this[_router].unregisterRootOutlet(this);
    }
    [_coerceFactory](typeOrFactory) {
      return async.async(src__core__linker__component_factory.ComponentFactory, function* _coerceFactory() {
        if (src__core__linker__component_factory.ComponentFactory.is(typeOrFactory)) {
          return typeOrFactory;
        }
        dart.throw(new core.ArgumentError.new(dart.str`Invalid type: ${typeOrFactory}.`));
      });
    }
    prepare(component) {
      return async.async(src__core__linker__component_factory.ComponentRef, (function* prepare() {
        return this[_loadedComponents][$putIfAbsent](component, dart.fn(() => {
          let componentRef = component.create(src__di__injector__injector.Injector.map(new (LinkedMapOfObject$Object()).from([dart.wrapType(src__router__router_outlet_token.RouterOutletToken), new src__router__router_outlet_token.RouterOutletToken.new()]), src__di__injector__hierarchical.HierarchicalInjector._check(this[_viewContainerRef].injector)));
          componentRef.changeDetectorRef.detectChanges();
          return componentRef;
        }, VoidToComponentRef()));
      }).bind(this));
    }
    activate(typeOrFactory, oldState, newState) {
      return async.async(core.Null, (function* activate() {
        let component = (yield this[_coerceFactory](typeOrFactory));
        let activeInstance = this[_activeComponent];
        if (activeInstance != null) {
          if (!dart.test(yield this[_shouldReuse](activeInstance.instance, oldState, newState))) {
            this[_loadedComponents][$remove](this[_activeComponentFactory]);
            activeInstance.destroy();
            this[_viewContainerRef].clear();
          } else {
            for (let i = dart.notNull(this[_viewContainerRef].length) - 1; i >= 0; i--) {
              this[_viewContainerRef].detach(i);
            }
          }
        }
        this[_activeComponentFactory] = component;
        activeInstance = (yield this.prepare(component));
        this[_viewContainerRef].insert(activeInstance.hostView);
        activeInstance.changeDetectorRef.detectChanges();
      }).bind(this));
    }
    [_shouldReuse](instance, oldState, newState) {
      return async.async(core.bool, (function* _shouldReuse() {
        if (src__lifecycle.CanReuse.is(instance)) {
          return yield instance.canReuse(oldState, newState);
        }
        if (this[_routerHook] != null) {
          return yield this[_routerHook].canReuse(instance, oldState, newState);
        }
        return false;
      }).bind(this));
    }
  };
  (src__directives__router_outlet_directive.RouterOutlet.new = function(token, viewContainerRef, router, routerHook) {
    this[_loadedComponents] = new (LinkedMapOfComponentFactory$ComponentRef()).new();
    this[_activeComponentFactory] = null;
    this[_routes] = const$ || (const$ = dart.constList([], src__route_definition.RouteDefinition));
    this[_viewContainerRef] = viewContainerRef;
    this[_router] = router;
    this[_routerHook] = routerHook;
    token == null ? null : token.routerOutlet = this;
  }).prototype = src__directives__router_outlet_directive.RouterOutlet.prototype;
  dart.addTypeTests(src__directives__router_outlet_directive.RouterOutlet);
  src__directives__router_outlet_directive.RouterOutlet[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getMethods(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_coerceFactory]: dart.fnType(async.Future$(src__core__linker__component_factory.ComponentFactory), [core.Object]),
    prepare: dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef), [src__core__linker__component_factory.ComponentFactory]),
    activate: dart.fnType(async.Future$(core.Null), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState]),
    [_shouldReuse]: dart.fnType(async.Future$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  dart.setGetterSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getGetters(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    [_activeComponent]: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    routes: dart.fnType(core.List$(src__route_definition.RouteDefinition), [])
  }));
  dart.setSetterSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getSetters(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    routes: dart.fnType(dart.void, [ListOfRouteDefinition()])
  }));
  dart.setFieldSignature(src__directives__router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getFields(src__directives__router_outlet_directive.RouterOutlet.__proto__),
    [_viewContainerRef]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_router]: dart.finalFieldType(src__router__router.Router),
    [_routerHook]: dart.finalFieldType(src__router_hook.RouterHook),
    [_loadedComponents]: dart.finalFieldType(MapOfComponentFactory$ComponentRef()),
    [_activeComponentFactory]: dart.fieldType(src__core__linker__component_factory.ComponentFactory),
    [_routes]: dart.fieldType(ListOfRouteDefinition())
  }));
  dart.trackLibraries("packages/angular_router/src/directives/router_outlet_directive.ddc", {
    "package:angular_router/src/router/router_outlet_token.dart": src__router__router_outlet_token,
    "package:angular_router/src/router/router.dart": src__router__router,
    "package:angular_router/src/directives/router_outlet_directive.dart": src__directives__router_outlet_directive
  }, '{"version":3,"sourceRoot":"","sources":["../router/router_outlet_token.dart","../router/router.dart","router_outlet_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAee;;;;;;;;sBAAY;EAC3B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YCoC8C,YAAM;;;;EAyBpD;;;;;;;;;;;;;;;;;;ACnBI,YAAO,wBAAiB,QAAC,6BAAuB;IAClD;eAmBW,MAA4B;AACrC,oBAAI,qCAAS,GAAE;AACb,iBAAW,QAAS,OAAM,EAAE;AAC1B,eAAK,YAAY;;AAEnB,YAAI,aAAa;AACjB,iBAAW,QAAS,OAAM,EAAE;AAC1B,wBAAI,KAAK,aAAa,GAAE;AACtB,gBAAI,UAAU,EAAE;AACd,yBAAM,IAAI,mBAAU,CAAC;;AAEvB,sBAAU,GAAG;;;;AAInB,mBAAO,GAAG,MAAM;IAClB;;cAGoC,aAAO;6BAAI;IAAE;;AAI/C,mBAAO,mBAAmB,CAAC;IAC7B;;AAIE,eAAS,kBAAmB,wBAAiB,SAAO,EAAE;AACpD,uBAAe,QAAQ;;AAEzB,6BAAiB,MAAM;AACvB,mBAAO,qBAAqB,CAAC;IAC/B;qBAEwC,aAAoB;AAAE;AAC5D,qEAAI,aAAa,GAAsB;AACrC,gBAAO,cAAa;;AAEtB,mBAAM,IAAI,sBAAa,CAAC,yBAAgB,aAAa;MACvD;;YAK6B,SAA0B;AAAE;AACvD,cAAO,wBAAiB,cAAY,CAAC,SAAS,EAAE;AAC9C,cAAM,eAAe,SAAS,OAAO,CAAC,AAAI,wCAAY,CAAC,uCACrD,iEAAiB,EAAE,IAAI,sDAAiB,kEACvC,uBAAiB,SAAS;AAC7B,sBAAY,kBAAkB,cAAc;AAC5C,gBAAO,aAAY;;MAEvB;;aAOE,aAAoB,EACpB,QAAoB,EACpB,QAAoB;AACpB;AAEA,YAAM,aAAY,MAAM,oBAAc,CAAC,aAAa;AACpD,YAAI,iBAAiB,sBAAgB;AAErC,YAAI,cAAc,IAAI,MAAM;AAC1B,yBAAK,MAAM,kBAAY,CAAC,cAAc,SAAS,EAAE,QAAQ,EAAE,QAAQ,IAAG;AACpE,mCAAiB,SAAO,CAAC,6BAAuB;AAChD,0BAAc,QAAQ;AAEtB,mCAAiB,MAAM;iBAClB;AACL,qBAAS,IAA6B,aAAzB,uBAAiB,OAAO,IAAG,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,IAAI;AACtD,qCAAiB,OAAO,CAAC,CAAC;;;;AAMhC,qCAAuB,GAAG,SAAS;AACnC,sBAAc,IAAG,MAAM,YAAO,CAAC,SAAS;AACxC,+BAAiB,OAAO,CAAC,cAAc,SAAS;AAChD,sBAAc,kBAAkB,cAAc;MAChD;;mBAGE,QAAe,EACf,QAAoB,EACpB,QAAoB;AACpB;AACA,uCAAI,QAAQ,GAAc;AACxB,gBAAO,OAAM,QAAQ,SAAS,CAAC,QAAQ,EAAE,QAAQ;;AAEnD,YAAI,iBAAW,IAAI,MAAM;AACvB,gBAAO,OAAM,iBAAW,SAAS,CAAC,QAAQ,EAAE,QAAQ,EAAE,QAAQ;;AAGhE,cAAO;MACT;;;wEAlIE,KAAmC,EAC9B,gBAAiB,EACjB,MAAO,EACK,UAAW;IAZxB,uBAAiB,GAAG;IAGT,6BAAuB;IAGlB,aAAO,GAAG;IAIzB,uBAAiB,GAAjB,gBAAiB;IACjB,aAAO,GAAP,MAAO;IACK,iBAAW,GAAX,UAAW;AAE5B,SAAK,kBAAL,KAAK,aAAc,GAAG;EACxB","file":"router_outlet_directive.ddc.js"}');
  // Exports:
  return {
    src__router__router_outlet_token: src__router__router_outlet_token,
    src__router__router: src__router__router,
    src__directives__router_outlet_directive: src__directives__router_outlet_directive
  };
});

//# sourceMappingURL=router_outlet_directive.ddc.js.map
