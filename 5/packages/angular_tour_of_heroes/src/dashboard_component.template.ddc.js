define(['dart_sdk', 'packages/angular_tour_of_heroes/src/dashboard_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular_tour_of_heroes/src/hero_search_component.template', 'packages/http/src/base_client', 'packages/angular_tour_of_heroes/src/hero_search_service', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_tour_of_heroes/src/hero_search_component', 'packages/angular_tour_of_heroes/src/dashboard_component', 'packages/angular_router/src/location/location', 'packages/angular_router/src/directives/router_link_directive', 'packages/angular_router/src/directives/router_link_directive.template', 'packages/angular_tour_of_heroes/src/hero', 'packages/angular_tour_of_heroes/src/hero_service', 'packages/angular/src/di/reflector', 'packages/angular_tour_of_heroes/src/hero.template', 'packages/angular_tour_of_heroes/src/hero_service.template', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template'], function(dart_sdk, dashboard_component$46css, view_type, constants, view, app_view_utils, app_view, ng_for, hero_search_component, base_client, hero_search_service, router_outlet_directive, hero_search_component$, dashboard_component, location, router_link_directive, router_link_directive$, hero, hero_service, reflector, hero$, hero_service$, angular, angular_router) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__dashboard_component$46css$46shim = dashboard_component$46css.src__dashboard_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__hero_search_component$46template = hero_search_component.src__hero_search_component$46template;
  const src__client = base_client.src__client;
  const src__hero_search_service = hero_search_service.src__hero_search_service;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__hero_search_component = hero_search_component$.src__hero_search_component;
  const src__dashboard_component = dashboard_component.src__dashboard_component;
  const src__location__location = location.src__location__location;
  const src__directives__router_link_directive = router_link_directive.src__directives__router_link_directive;
  const src__directives__router_link_directive$46template = router_link_directive$.src__directives__router_link_directive$46template;
  const src__hero = hero.src__hero;
  const src__hero_service = hero_service.src__hero_service;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero$.src__hero$46template;
  const src__hero_service$46template = hero_service$.src__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const _root = Object.create(null);
  const src__dashboard_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfDashboardComponent = () => (AppViewOfDashboardComponent = dart.constFn(src__core__linker__app_view.AppView$(src__dashboard_component.DashboardComponent)))();
  let AppViewAndintToAppViewOfDashboardComponent = () => (AppViewAndintToAppViewOfDashboardComponent = dart.constFn(dart.fnType(AppViewOfDashboardComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfDashboardComponent = () => (ComponentRefOfDashboardComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__dashboard_component.DashboardComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfDashboardComponent = () => (ComponentFactoryOfDashboardComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__dashboard_component.DashboardComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__dashboard_component$46template, {
    /*src__dashboard_component$46template.styles$DashboardComponent*/get styles$DashboardComponent() {
      return dart.constList([src__dashboard_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _HeroSearchService_4_5 = Symbol('_HeroSearchService_4_5');
  const _HeroSearchComponent_4_6 = Symbol('_HeroSearchComponent_4_6');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__dashboard_component$46template.ViewDashboardComponent0 = class ViewDashboardComponent0 extends src__core__linker__app_view.AppView$(src__dashboard_component.DashboardComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h3', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Top Heroes');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_2].className = 'grid grid-pad';
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__dashboard_component$46template.viewFactory_DashboardComponent1);
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_4] = new src__hero_search_component$46template.ViewHeroSearchComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      parentRenderNode[$append](this[_el_4]);
      this.addShimC(html.HtmlElement._check(this[_el_4]));
      this[_HeroSearchService_4_5] = new src__hero_search_service.HeroSearchService.new(src__client.Client._check(this.parentView.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      this[_HeroSearchComponent_4_6] = new src__hero_search_component.HeroSearchComponent.new(this[_HeroSearchService_4_5], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_4].create(this[_HeroSearchComponent_4_6], []);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__hero_search_service.HeroSearchService) && 4 === nodeIndex) {
        return this[_HeroSearchService_4_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.heroes;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_3_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_3_9].ngDoCheck();
      if (firstCheck) {
        this[_HeroSearchComponent_4_6].ngOnInit();
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_4];
      t$ == null ? null : t$.destroy();
    }
  };
  (src__dashboard_component$46template.ViewDashboardComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_HeroSearchService_4_5] = null;
    this[_HeroSearchComponent_4_6] = null;
    this[_expr_0] = null;
    src__dashboard_component$46template.ViewDashboardComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-dashboard'));
    let t = src__dashboard_component$46template.ViewDashboardComponent0._renderType;
    t == null ? src__dashboard_component$46template.ViewDashboardComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__dashboard_component$46template.styles$DashboardComponent) : t;
    this.setupComponentType(src__dashboard_component$46template.ViewDashboardComponent0._renderType);
  }).prototype = src__dashboard_component$46template.ViewDashboardComponent0.prototype;
  dart.addTypeTests(src__dashboard_component$46template.ViewDashboardComponent0);
  dart.setMethodSignature(src__dashboard_component$46template.ViewDashboardComponent0, () => ({
    __proto__: dart.getMethods(src__dashboard_component$46template.ViewDashboardComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__dashboard_component.DashboardComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__dashboard_component$46template.ViewDashboardComponent0, () => ({
    __proto__: dart.getFields(src__dashboard_component$46template.ViewDashboardComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(src__hero_search_component$46template.ViewHeroSearchComponent0),
    [_HeroSearchService_4_5]: dart.fieldType(src__hero_search_service.HeroSearchService),
    [_HeroSearchComponent_4_6]: dart.fieldType(src__hero_search_component.HeroSearchComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__dashboard_component$46template.ViewDashboardComponent0, {
    /*src__dashboard_component$46template.ViewDashboardComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__dashboard_component$46template.viewFactory_DashboardComponent0 = function(parentView, parentIndex) {
    return new src__dashboard_component$46template.ViewDashboardComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__dashboard_component$46template.viewFactory_DashboardComponent0, AppViewAndintToAppViewOfDashboardComponent());
  const _RouterLink_0_5 = Symbol('_RouterLink_0_5');
  const _el_1 = Symbol('_el_1');
  const _text_3 = Symbol('_text_3');
  const _expr_1 = Symbol('_expr_1');
  src__dashboard_component$46template._ViewDashboardComponent1 = class _ViewDashboardComponent1 extends src__core__linker__app_view.AppView$(src__dashboard_component.DashboardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(doc[$createElement]('a'));
      this[_el_0].className = 'col-1-4';
      this.addShimC(this[_el_0]);
      this[_RouterLink_0_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.parentView.viewData.parentIndex)), src__location__location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.parentView.viewData.parentIndex)), null, this[_el_0]));
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'module hero';
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_1]);
      this.addShimE(this[_el_2]);
      this[_text_3] = html.Text.new('');
      this[_el_2][$append](this[_text_3]);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_0_5].instance, 'onClick')));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate1('/heroes/', local_hero.id, '');
      if (!(this[_expr_0] == currVal_0)) {
        this[_RouterLink_0_5].instance.routerLink = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_RouterLink_0_5].detectHostChanges(this, this[_el_0]);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_3][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      this[_RouterLink_0_5].instance.ngOnDestroy();
    }
  };
  (src__dashboard_component$46template._ViewDashboardComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_RouterLink_0_5] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__dashboard_component$46template._ViewDashboardComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__dashboard_component$46template.ViewDashboardComponent0._renderType;
  }).prototype = src__dashboard_component$46template._ViewDashboardComponent1.prototype;
  dart.addTypeTests(src__dashboard_component$46template._ViewDashboardComponent1);
  dart.setMethodSignature(src__dashboard_component$46template._ViewDashboardComponent1, () => ({
    __proto__: dart.getMethods(src__dashboard_component$46template._ViewDashboardComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__dashboard_component.DashboardComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__dashboard_component$46template._ViewDashboardComponent1, () => ({
    __proto__: dart.getFields(src__dashboard_component$46template._ViewDashboardComponent1.__proto__),
    [_el_0]: dart.fieldType(html.AnchorElement),
    [_RouterLink_0_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.Element),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__dashboard_component$46template.viewFactory_DashboardComponent1 = function(parentView, parentIndex) {
    return new src__dashboard_component$46template._ViewDashboardComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__dashboard_component$46template.viewFactory_DashboardComponent1, AppViewAndintToAppViewOfDashboardComponent());
  dart.defineLazy(src__dashboard_component$46template, {
    /*src__dashboard_component$46template.styles$DashboardComponentHost*/get styles$DashboardComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _DashboardComponent_0_5 = Symbol('_DashboardComponent_0_5');
  src__dashboard_component$46template._ViewDashboardComponentHost0 = class _ViewDashboardComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__dashboard_component$46template.ViewDashboardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_DashboardComponent_0_5] = new src__dashboard_component.DashboardComponent.new(src__hero_service.HeroService._check(this.injectorGet(dart.wrapType(src__hero_service.HeroService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_DashboardComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDashboardComponent()).new(0, this, this.rootEl, this[_DashboardComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_DashboardComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__dashboard_component$46template._ViewDashboardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DashboardComponent_0_5] = null;
    src__dashboard_component$46template._ViewDashboardComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__dashboard_component$46template._ViewDashboardComponentHost0.prototype;
  dart.addTypeTests(src__dashboard_component$46template._ViewDashboardComponentHost0);
  dart.setMethodSignature(src__dashboard_component$46template._ViewDashboardComponentHost0, () => ({
    __proto__: dart.getMethods(src__dashboard_component$46template._ViewDashboardComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__dashboard_component$46template._ViewDashboardComponentHost0, () => ({
    __proto__: dart.getFields(src__dashboard_component$46template._ViewDashboardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__dashboard_component$46template.ViewDashboardComponent0),
    [_DashboardComponent_0_5]: dart.fieldType(src__dashboard_component.DashboardComponent)
  }));
  src__dashboard_component$46template.viewFactory_DashboardComponentHost0 = function(parentView, parentIndex) {
    return new src__dashboard_component$46template._ViewDashboardComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__dashboard_component$46template.viewFactory_DashboardComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__dashboard_component$46template, {
    /*src__dashboard_component$46template.DashboardComponentNgFactory*/get DashboardComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDashboardComponent()).new('my-dashboard', src__dashboard_component$46template.viewFactory_DashboardComponentHost0, src__dashboard_component$46template._DashboardComponentMetadata));
    },
    /*src__dashboard_component$46template._DashboardComponentMetadata*/get _DashboardComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__dashboard_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__dashboard_component$46template.initReflector = function() {
    if (dart.test(src__dashboard_component$46template._visited)) {
      return;
    }
    src__dashboard_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__dashboard_component.DashboardComponent), src__dashboard_component$46template.DashboardComponentNgFactory);
    src__hero$46template.initReflector();
    src__hero_search_component$46template.initReflector();
    src__hero_service$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.fn(src__dashboard_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/dashboard_component.template.ddc", {
    "package:angular_tour_of_heroes/src/dashboard_component.template.dart": src__dashboard_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["dashboard_component.template.dart"],"names":[],"mappings":"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","file":"dashboard_component.template.ddc.js"}');
  // Exports:
  return {
    src__dashboard_component$46template: src__dashboard_component$46template
  };
});

//# sourceMappingURL=dashboard_component.template.ddc.js.map
