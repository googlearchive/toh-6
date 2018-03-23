define(['dart_sdk', 'packages/angular_tour_of_heroes/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/location/location', 'packages/angular_router/src/directives/router_link_directive', 'packages/angular_router/src/directives/router_link_directive.template', 'packages/angular_router/src/directives/router_link_active_directive', 'packages/angular_router/src/router_hook', 'packages/angular_tour_of_heroes/app_component', 'packages/http/src/base_client', 'packages/angular_tour_of_heroes/src/hero_service', 'packages/angular_tour_of_heroes/src/routes', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/angular_tour_of_heroes/src/hero_service.template', 'packages/angular_tour_of_heroes/src/routes.template'], function(dart_sdk, app_component$46css, view_type, constants, view, app_view_utils, app_view, router_outlet_directive, location, router_link_directive, router_link_directive$, router_link_active_directive, router_hook, app_component, base_client, hero_service, routes, reflector, angular, angular_router, hero_service$, routes$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__location__location = location.src__location__location;
  const src__directives__router_link_directive = router_link_directive.src__directives__router_link_directive;
  const src__directives__router_link_directive$46template = router_link_directive$.src__directives__router_link_directive$46template;
  const src__directives__router_link_active_directive = router_link_active_directive.src__directives__router_link_active_directive;
  const src__router_hook = router_hook.src__router_hook;
  const app_component$ = app_component.app_component;
  const src__client = base_client.src__client;
  const src__hero_service = hero_service.src__hero_service;
  const src__routes = routes.src__routes;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__hero_service$46template = hero_service$.src__hero_service$46template;
  const src__routes$46template = routes$.src__routes$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfRouterLink = () => (JSArrayOfRouterLink = dart.constFn(_interceptors.JSArray$(src__directives__router_link_directive.RouterLink)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([app_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _RouterLink_3_5 = Symbol('_RouterLink_3_5');
  const _RouterLinkActive_3_6 = Symbol('_RouterLinkActive_3_6');
  const _query_RouterLink_3_0_isDirty = Symbol('_query_RouterLink_3_0_isDirty');
  const _el_5 = Symbol('_el_5');
  const _RouterLink_5_5 = Symbol('_RouterLink_5_5');
  const _RouterLinkActive_5_6 = Symbol('_RouterLinkActive_5_6');
  const _query_RouterLink_5_0_isDirty = Symbol('_query_RouterLink_5_0_isDirty');
  const _el_7 = Symbol('_el_7');
  const _appEl_7 = Symbol('_appEl_7');
  const _RouterOutlet_7_8 = Symbol('_RouterOutlet_7_8');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  const _expr_4 = Symbol('_expr_4');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new(this.ctx.title != null ? this.ctx.title : '');
      this[_el_0][$append](this[_text_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'nav', parentRenderNode);
      this.addShimE(this[_el_2]);
      this[_el_3] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_2]));
      this.createAttr(this[_el_3], 'routerLinkActive', 'active');
      this.addShimC(this[_el_3]);
      this[_RouterLink_3_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_3]));
      this[_RouterLinkActive_3_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_3], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _text_4 = html.Text.new('Dashboard');
      this[_el_3][$append](_text_4);
      this[_RouterLinkActive_3_6].links = JSArrayOfRouterLink().of([this[_RouterLink_3_5].instance]);
      this[_el_5] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_2]));
      this.createAttr(this[_el_5], 'routerLinkActive', 'active');
      this.addShimC(this[_el_5]);
      this[_RouterLink_5_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_5]));
      this[_RouterLinkActive_5_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_5], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _text_6 = html.Text.new('Heroes');
      this[_el_5][$append](_text_6);
      this[_RouterLinkActive_5_6].links = JSArrayOfRouterLink().of([this[_RouterLink_5_5].instance]);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'router-outlet', parentRenderNode);
      this.addShimE(this[_el_7]);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, null, this, this[_el_7]);
      this[_RouterOutlet_7_8] = new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_7], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      this[_el_3][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_3_5].instance, 'onClick')));
      this[_el_5][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_5_5].instance, 'onClick')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.routes.dashboard.path;
      if (!(this[_expr_0] == currVal_0)) {
        this[_RouterLink_3_5].instance.routerLink = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        this[_RouterLinkActive_3_6].routerLinkActive = 'active';
      }
      let currVal_2 = _ctx.routes.heroes.path;
      if (!(this[_expr_2] == currVal_2)) {
        this[_RouterLink_5_5].instance.routerLink = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (firstCheck) {
        this[_RouterLinkActive_5_6].routerLinkActive = 'active';
      }
      let currVal_4 = _ctx.routes.all;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_RouterOutlet_7_8].routes = currVal_4;
        this[_expr_4] = currVal_4;
      }
      if (firstCheck) {
        this[_RouterOutlet_7_8].ngOnInit();
      }
      this[_appEl_7].detectChangesInNestedViews();
      this[_RouterLink_3_5].detectHostChanges(this, this[_el_3]);
      this[_RouterLink_5_5].detectHostChanges(this, this[_el_5]);
      if (firstCheck) {
        this[_RouterLinkActive_3_6].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_RouterLinkActive_5_6].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_appEl_7];
      t == null ? null : t.destroyNestedViews();
      this[_RouterLink_3_5].instance.ngOnDestroy();
      this[_RouterLinkActive_3_6].ngOnDestroy();
      this[_RouterLink_5_5].instance.ngOnDestroy();
      this[_RouterLinkActive_5_6].ngOnDestroy();
      this[_RouterOutlet_7_8].ngOnDestroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_RouterLink_3_5] = null;
    this[_RouterLinkActive_3_6] = null;
    this[_query_RouterLink_3_0_isDirty] = true;
    this[_el_5] = null;
    this[_RouterLink_5_5] = null;
    this[_RouterLinkActive_5_6] = null;
    this[_query_RouterLink_5_0_isDirty] = true;
    this[_el_7] = null;
    this[_appEl_7] = null;
    this[_RouterOutlet_7_8] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_4] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-app'));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.AnchorElement),
    [_RouterLink_3_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_3_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_query_RouterLink_3_0_isDirty]: dart.fieldType(core.bool),
    [_el_5]: dart.fieldType(html.AnchorElement),
    [_RouterLink_5_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_5_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_query_RouterLink_5_0_isDirty]: dart.fieldType(core.bool),
    [_el_7]: dart.fieldType(html.Element),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_7_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _Routes_0_5 = Symbol('_Routes_0_5');
  const _AppComponent_0_6 = Symbol('_AppComponent_0_6');
  const __HeroService_0_7 = Symbol('__HeroService_0_7');
  const _HeroService_0_7 = Symbol('_HeroService_0_7');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    get [_HeroService_0_7]() {
      if (this[__HeroService_0_7] == null) {
        this[__HeroService_0_7] = new src__hero_service.HeroService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      }
      return this[__HeroService_0_7];
    }
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_Routes_0_5] = new src__routes.Routes.new();
      this[_AppComponent_0_6] = new app_component$.AppComponent.new(this[_Routes_0_5]);
      this[_compView_0].create(this[_AppComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__routes.Routes) && 0 === nodeIndex) {
        return this[_Routes_0_5];
      }
      if (token === dart.wrapType(src__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_Routes_0_5] = null;
    this[_AppComponent_0_6] = null;
    this[__HeroService_0_7] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponentHost0.__proto__),
    [_HeroService_0_7]: dart.fnType(src__hero_service.HeroService, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_Routes_0_5]: dart.fieldType(src__routes.Routes),
    [_AppComponent_0_6]: dart.fieldType(app_component$.AppComponent),
    [__HeroService_0_7]: dart.fieldType(src__hero_service.HeroService)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('my-app', app_component$46template.viewFactory_AppComponentHost0, app_component$46template._AppComponentMetadata));
    },
    /*app_component$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__hero_service$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.fn(app_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/app_component.template.ddc", {
    "package:angular_tour_of_heroes/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
