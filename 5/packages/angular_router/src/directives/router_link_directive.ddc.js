define(['dart_sdk', 'packages/angular_router/src/url', 'packages/angular_router/src/router/navigation_params', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/location/location'], function(dart_sdk, url, navigation_params, lifecycle_hooks, router_outlet_directive, location) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__url = url.src__url;
  const src__router__navigation_params = navigation_params.src__router__navigation_params;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__location__location = location.src__location__location;
  const _root = Object.create(null);
  const src__directives__router_link_directive = Object.create(_root);
  const $onKeyPress = dartx.onKeyPress;
  let StreamSubscriptionOfKeyboardEvent = () => (StreamSubscriptionOfKeyboardEvent = dart.constFn(async.StreamSubscription$(html.KeyboardEvent)))();
  const _router = Symbol('_router');
  const _location = Symbol('_location');
  const _target = Symbol('_target');
  const _keyPressSubscription = Symbol('_keyPressSubscription');
  const _routerLink = Symbol('_routerLink');
  const _cachedVisibleHref = Symbol('_cachedVisibleHref');
  const _cachedUrl = Symbol('_cachedUrl');
  const _onKeyPress = Symbol('_onKeyPress');
  const _trigger = Symbol('_trigger');
  src__directives__router_link_directive.RouterLink = class RouterLink extends core.Object {
    set routerLink(routerLink) {
      this[_routerLink] = routerLink;
      this[_cachedVisibleHref] = null;
      this[_cachedUrl] = null;
    }
    get url() {
      let t = this[_cachedUrl];
      return t == null ? this[_cachedUrl] = src__url.Url.parse(this[_routerLink]) : t;
    }
    get visibleHref() {
      let t = this[_cachedVisibleHref];
      return t == null ? this[_cachedVisibleHref] = this[_location].prepareExternalUrl(this[_routerLink]) : t;
    }
    ngOnDestroy() {
      let t = this[_keyPressSubscription];
      t == null ? null : t.cancel();
    }
    onClick(event) {
      if (dart.test(event.ctrlKey) || dart.test(event.metaKey)) return;
      this[_trigger](event);
    }
    [_onKeyPress](event) {
      if (event.keyCode !== html.KeyCode.ENTER || dart.test(event.ctrlKey) || dart.test(event.metaKey)) {
        return;
      }
      this[_trigger](event);
    }
    [_trigger](event) {
      if (this[_target] == null || this[_target] === '_self') {
        event.preventDefault();
        this[_router].navigate(this.url.path, new src__router__navigation_params.NavigationParams.new({queryParameters: this.url.queryParameters, fragment: this.url.fragment}));
      }
    }
  };
  (src__directives__router_link_directive.RouterLink.new = function(router, location, target, element) {
    this[_keyPressSubscription] = null;
    this[_routerLink] = null;
    this[_cachedVisibleHref] = null;
    this[_cachedUrl] = null;
    this[_router] = router;
    this[_location] = location;
    this[_target] = target;
    if (!html.AnchorElement.is(element)) {
      this[_keyPressSubscription] = element[$onKeyPress].listen(dart.bind(this, _onKeyPress));
    }
  }).prototype = src__directives__router_link_directive.RouterLink.prototype;
  dart.addTypeTests(src__directives__router_link_directive.RouterLink);
  src__directives__router_link_directive.RouterLink[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__directives__router_link_directive.RouterLink, () => ({
    __proto__: dart.getMethods(src__directives__router_link_directive.RouterLink.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    onClick: dart.fnType(dart.void, [html.MouseEvent]),
    [_onKeyPress]: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_trigger]: dart.fnType(dart.void, [html.Event])
  }));
  dart.setGetterSignature(src__directives__router_link_directive.RouterLink, () => ({
    __proto__: dart.getGetters(src__directives__router_link_directive.RouterLink.__proto__),
    url: dart.fnType(src__url.Url, []),
    visibleHref: dart.fnType(core.String, [])
  }));
  dart.setSetterSignature(src__directives__router_link_directive.RouterLink, () => ({
    __proto__: dart.getSetters(src__directives__router_link_directive.RouterLink.__proto__),
    routerLink: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__directives__router_link_directive.RouterLink, () => ({
    __proto__: dart.getFields(src__directives__router_link_directive.RouterLink.__proto__),
    [_router]: dart.finalFieldType(src__router__router.Router),
    [_location]: dart.finalFieldType(src__location__location.Location),
    [_target]: dart.finalFieldType(core.String),
    [_keyPressSubscription]: dart.fieldType(StreamSubscriptionOfKeyboardEvent()),
    [_routerLink]: dart.fieldType(core.String),
    [_cachedVisibleHref]: dart.fieldType(core.String),
    [_cachedUrl]: dart.fieldType(src__url.Url)
  }));
  dart.trackLibraries("packages/angular_router/src/directives/router_link_directive.ddc", {
    "package:angular_router/src/directives/router_link_directive.dart": src__directives__router_link_directive
  }, '{"version":3,"sourceRoot":"","sources":["router_link_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;mBAkDiB,UAAiB;AAC9B,uBAAW,GAAG,UAAU;AACxB,8BAAkB,GAAG;AACrB,sBAAU,GAAG;IACf;;AAGE,cAAO,gBAAU;4CAAK,YAAG,MAAM,CAAC,iBAAW;IAC7C;;AAME,cAAO,wBAAkB;oDAAK,eAAS,mBAAmB,CAAC,iBAAW;IACxE;;AAIE,yCAAqB;;IACvB;YAGa,KAAgB;AAE3B,oBAAI,KAAK,QAAQ,eAAI,KAAK,QAAQ,GAAE;AACpC,oBAAQ,CAAC,KAAK;IAChB;kBAEiB,KAAmB;AAElC,UAAI,KAAK,QAAQ,KAAI,YAAO,MAAM,cAAI,KAAK,QAAQ,eAAI,KAAK,QAAQ,GAAE;AACpE;;AAEF,oBAAQ,CAAC,KAAK;IAChB;eAEc,KAAW;AAEvB,UAAI,aAAO,IAAI,QAAQ,aAAO,KAAI,SAAS;AACzC,aAAK,eAAe;AACpB,qBAAO,SAAS,CACZ,QAAG,KAAK,EACR,IAAI,mDAAgB,mBACC,QAAG,gBAAgB,YAAY,QAAG,SAAS;;IAExE;;oEAzDgB,MAAO,EAAO,QAAS,EAA4B,MAAO,EACtE,OAAe;IANe,2BAAqB;IAChD,iBAAW;IACX,wBAAkB;IACrB,gBAAU;IAEE,aAAO,GAAP,MAAO;IAAO,eAAS,GAAT,QAAS;IAA4B,aAAO,GAAP,MAAO;AAKxE,+BAAI,OAAO,GAAoB;AAC7B,iCAAqB,GAAG,OAAO,aAAW,OAAO,CAAC,4BAAW;;EAEjE","file":"router_link_directive.ddc.js"}');
  // Exports:
  return {
    src__directives__router_link_directive: src__directives__router_link_directive
  };
});

//# sourceMappingURL=router_link_directive.ddc.js.map
