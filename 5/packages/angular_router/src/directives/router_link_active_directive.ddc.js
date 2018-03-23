define(['dart_sdk', 'packages/angular/src/runtime/optimizations', 'packages/collection/src/equality', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_router/src/router/router_state', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/directives/router_link_directive'], function(dart_sdk, optimizations, equality, lifecycle_hooks, router_state, router_outlet_directive, router_link_directive) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__equality = equality.src__equality;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__router__router_state = router_state.src__router__router_state;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__directives__router_link_directive = router_link_directive.src__directives__router_link_directive;
  const _root = Object.create(null);
  const src__directives__router_link_active_directive = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $classes = dartx.classes;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfRouterLink = () => (ListOfRouterLink = dart.constFn(core.List$(src__directives__router_link_directive.RouterLink)))();
  const _element = Symbol('_element');
  const _router = Symbol('_router');
  const _routeChanged = Symbol('_routeChanged');
  const _classes = Symbol('_classes');
  const _update = Symbol('_update');
  let const$;
  src__directives__router_link_active_directive.RouterLinkActive = class RouterLinkActive extends core.Object {
    get links() {
      return this[links];
    }
    set links(value) {
      this[links] = value;
    }
    ngOnDestroy() {
      let t = this[_routeChanged];
      return t == null ? null : t.cancel();
    }
    ngAfterViewInit() {
      this[_routeChanged] = this[_router].stream.listen(dart.bind(this, _update));
      this[_update](this[_router].current);
    }
    set routerLinkActive(classes) {
      if (typeof classes == 'string') {
        this[_classes] = JSArrayOfString().of([classes]);
      } else if (ListOfString().is(classes)) {
        this[_classes] = classes;
      } else if (dart.test(src__runtime__optimizations.isDevMode)) {
        dart.throw(new core.ArgumentError.new(dart.str`Expected a string or list of strings. Got ${classes}.`));
      }
    }
    [_update](routerState) {
      let isActive = false;
      if (routerState != null) {
        for (let link of this.links) {
          let url = link.url;
          if (url.path != routerState.path) continue;
          if (dart.test(url.queryParameters[$isNotEmpty]) && !dart.test((const$ || (const$ = dart.const(new src__equality.MapEquality.new()))).equals(url.queryParameters, routerState.queryParameters))) {
            continue;
          }
          if (url.fragment[$isNotEmpty] && url.fragment != routerState.fragment) {
            continue;
          }
          isActive = true;
          break;
        }
      }
      this[_element][$classes].toggleAll(this[_classes], isActive);
    }
  };
  (src__directives__router_link_active_directive.RouterLinkActive.new = function(element, router) {
    this[_routeChanged] = null;
    this[_classes] = null;
    this[links] = null;
    this[_element] = element;
    this[_router] = router;
  }).prototype = src__directives__router_link_active_directive.RouterLinkActive.prototype;
  dart.addTypeTests(src__directives__router_link_active_directive.RouterLinkActive);
  const links = Symbol("RouterLinkActive.links");
  src__directives__router_link_active_directive.RouterLinkActive[dart.implements] = () => [src__core__metadata__lifecycle_hooks.AfterViewInit, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getMethods(src__directives__router_link_active_directive.RouterLinkActive.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_update]: dart.fnType(dart.void, [src__router__router_state.RouterState])
  }));
  dart.setSetterSignature(src__directives__router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getSetters(src__directives__router_link_active_directive.RouterLinkActive.__proto__),
    routerLinkActive: dart.fnType(dart.void, [core.Object])
  }));
  dart.setFieldSignature(src__directives__router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getFields(src__directives__router_link_active_directive.RouterLinkActive.__proto__),
    [_element]: dart.finalFieldType(html.Element),
    [_router]: dart.finalFieldType(src__router__router.Router),
    [_routeChanged]: dart.fieldType(async.StreamSubscription),
    [_classes]: dart.fieldType(ListOfString()),
    links: dart.fieldType(ListOfRouterLink())
  }));
  dart.trackLibraries("packages/angular_router/src/directives/router_link_active_directive.ddc", {
    "package:angular_router/src/directives/router_link_active_directive.dart": src__directives__router_link_active_directive
  }, '{"version":3,"sourceRoot":"","sources":["router_link_active_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsCmB;;;;;;;cAKK,mBAAa;;IAAU;;AAI3C,yBAAa,GAAG,aAAO,OAAO,OAAO,CAAC,wBAAO;AAC7C,mBAAO,CAAC,aAAO,QAAQ;IACzB;yBAGqB,OAAc;AACjC,iBAAI,OAAO,cAAY;AACrB,sBAAQ,GAAG,sBAAC,OAAO;YACd,uBAAI,OAAO,GAAkB;AAClC,sBAAQ,GAAG,OAAO;YACb,eAAI,qCAAS,GAAE;AACpB,mBAAM,IAAI,sBAAa,CACrB,qDAA4C,OAAO;;IAGzD;cAEa,WAAuB;AAClC,UAAI,WAAW;AACf,UAAI,WAAW,IAAI,MAAM;AACvB,iBAAS,OAAQ,WAAK,EAAE;AACtB,cAAM,MAAM,IAAI,IAAI;AACpB,cAAI,GAAG,KAAK,IAAI,WAAW,KAAK,EAAE;AAElC,wBAAI,GAAG,gBAAgB,aAAW,iBAC7B,mCAAM,6BAAW,YACP,CAAC,GAAG,gBAAgB,EAAE,WAAW,gBAAgB,IAAG;AACjE;;AAGF,cAAI,GAAG,SAAS,aAAW,IAAI,GAAG,SAAS,IAAI,WAAW,SAAS,EAAE;AACnE;;AAGF,kBAAQ,GAAG;AACX;;;AAGJ,oBAAQ,UAAQ,UAAU,CAAC,cAAQ,EAAE,QAAQ;IAC/C;;iFA9CsB,OAAQ,EAAO,MAAO;IANzB,mBAAa;IACnB,cAAQ;IAGJ,WAAK;IAEA,cAAQ,GAAR,OAAQ;IAAO,aAAO,GAAP,MAAO;EAAC","file":"router_link_active_directive.ddc.js"}');
  // Exports:
  return {
    src__directives__router_link_active_directive: src__directives__router_link_active_directive
  };
});

//# sourceMappingURL=router_link_active_directive.ddc.js.map
