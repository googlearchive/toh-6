define(['dart_sdk', 'packages/angular_tour_of_heroes/src/hero_list_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/common/pipes/uppercase_pipe', 'packages/angular_tour_of_heroes/src/hero_list_component', 'packages/angular_tour_of_heroes/src/hero', 'packages/angular_tour_of_heroes/src/hero_service', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/src/di/reflector', 'packages/angular_tour_of_heroes/src/hero.template', 'packages/angular_tour_of_heroes/src/hero_component.template', 'packages/angular_tour_of_heroes/src/hero_service.template', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template', 'packages/angular_tour_of_heroes/src/route_paths.template'], function(dart_sdk, hero_list_component$46css, view_type, constants, view, app_view_utils, app_view, ng_for, ng_if, uppercase_pipe, hero_list_component, hero, hero_service, router_outlet_directive, reflector, hero$, hero_component, hero_service$, angular, angular_router, route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero_list_component$46css$46shim = hero_list_component$46css.src__hero_list_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__common__pipes__uppercase_pipe = uppercase_pipe.src__common__pipes__uppercase_pipe;
  const src__hero_list_component = hero_list_component.src__hero_list_component;
  const src__hero = hero.src__hero;
  const src__hero_service = hero_service.src__hero_service;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero$.src__hero$46template;
  const src__hero_component$46template = hero_component.src__hero_component$46template;
  const src__hero_service$46template = hero_service$.src__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__route_paths$46template = route_paths.src__route_paths$46template;
  const _root = Object.create(null);
  const src__hero_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroListComponent = () => (AppViewOfHeroListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppViewOfHeroListComponent = () => (AppViewAndintToAppViewOfHeroListComponent = dart.constFn(dart.fnType(AppViewOfHeroListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ComponentRefOfHeroListComponent = () => (ComponentRefOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroListComponent = () => (ComponentFactoryOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_list_component.HeroListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return dart.constList([src__hero_list_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgFor_9_9 = Symbol('_NgFor_9_9');
  const _appEl_10 = Symbol('_appEl_10');
  const _NgIf_10_9 = Symbol('_NgIf_10_9');
  const _expr_0 = Symbol('_expr_0');
  const _pipe_uppercase_0 = Symbol('_pipe_uppercase_0');
  const _handle_click_6_0 = Symbol('_handle_click_6_0');
  let const$;
  src__hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('My Heroes');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_2]);
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new('Hero name:');
      this[_el_3][$append](_text_4);
      this[_el_5] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_2]));
      this.addShimC(this[_el_5]);
      this[_el_6] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_2]));
      this.addShimC(this[_el_6]);
      let _text_7 = html.Text.new('Add');
      this[_el_6][$append](_text_7);
      this[_el_8] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this[_el_8].className = 'heroes';
      this.addShimC(this[_el_8]);
      let _anchor_9 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_8][$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 8, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], src__hero_list_component$46template.viewFactory_HeroListComponent1);
      this[_NgFor_9_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_9], _TemplateRef_9_8);
      let _anchor_10 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_10);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, null, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], src__hero_list_component$46template.viewFactory_HeroListComponent2);
      this[_NgIf_10_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      this[_el_6][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_6_0)));
      this[_pipe_uppercase_0] = new src__common__pipes__uppercase_pipe.UpperCasePipe.new();
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_9_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_9_9].ngDoCheck();
      this[_NgIf_10_9].ngIf = _ctx.selectedHero != null;
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_9];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_10];
      t$ == null ? null : t$.destroyNestedViews();
    }
    [_handle_click_6_0]($event) {
      let local_heroName = this[_el_5];
      this.ctx.add(local_heroName.value);
      local_heroName.value = '';
    }
  };
  (src__hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_appEl_9] = null;
    this[_NgFor_9_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_expr_0] = null;
    this[_pipe_uppercase_0] = null;
    src__hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-heroes'));
    let t = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
    t == null ? src__hero_list_component$46template.ViewHeroListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__hero_list_component$46template.styles$HeroListComponent) : t;
    this.setupComponentType(src__hero_list_component$46template.ViewHeroListComponent0._renderType);
  }).prototype = src__hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(src__hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_6_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.InputElement),
    [_el_6]: dart.fieldType(html.ButtonElement),
    [_el_8]: dart.fieldType(html.UListElement),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_9_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_uppercase_0]: dart.fieldType(src__common__pipes__uppercase_pipe.UpperCasePipe)
  }));
  dart.defineLazy(src__hero_list_component$46template.ViewHeroListComponent0, {
    /*src__hero_list_component$46template.ViewHeroListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_list_component$46template.viewFactory_HeroListComponent0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template.ViewHeroListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent0, AppViewAndintToAppViewOfHeroListComponent());
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _text_4 = Symbol('_text_4');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  const _handle_click_5_0 = Symbol('_handle_click_5_0');
  src__hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'badge';
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      this[_el_3] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new('');
      this[_el_3][$append](this[_text_4]);
      this[_el_5] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this[_el_5].className = 'delete';
      this.addShimC(this[_el_5]);
      let _text_6 = html.Text.new('x');
      this[_el_5][$append](_text_6);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this[_el_5][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_5_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_hero == _ctx.selectedHero;
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'selected', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_hero.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_0_0]($event) {
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      this.ctx.onSelect(local_hero);
    }
    [_handle_click_5_0]($event) {
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      this.ctx.delete(local_hero);
      dart.dsend($event, 'stopPropagation');
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_5_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponent1 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent1, AppViewAndintToAppViewOfHeroListComponent());
  const _el_4 = Symbol('_el_4');
  const _pipe_uppercase_0_0 = Symbol('_pipe_uppercase_0_0');
  src__hero_list_component$46template._ViewHeroListComponent2 = class _ViewHeroListComponent2 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' is my hero');
      this[_el_1][$append](_text_3);
      this[_el_4] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_0]));
      this.addShimC(this[_el_4]);
      let _text_5 = html.Text.new('View Details');
      this[_el_4][$append](_text_5);
      this[_el_4][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'gotoDetail')));
      this[_pipe_uppercase_0_0] = src__core__linker__app_view_utils.pureProxy1(core.String, core.String, dart.bind(src__hero_list_component$46template.ViewHeroListComponent0.as(this.parentView)[_pipe_uppercase_0], 'transform'));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(this[_pipe_uppercase_0_0](_ctx.selectedHero.name));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_4] = null;
    this[_expr_0] = null;
    this[_pipe_uppercase_0_0] = null;
    src__hero_list_component$46template._ViewHeroListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero_list_component$46template._ViewHeroListComponent2.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponent2);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponent2, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponent2, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_pipe_uppercase_0_0]: dart.fieldType(StringToString())
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponent2 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent2, AppViewAndintToAppViewOfHeroListComponent());
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroListComponent_0_5 = Symbol('_HeroListComponent_0_5');
  src__hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroListComponent_0_5] = new src__hero_list_component.HeroListComponent.new(src__hero_service.HeroService._check(this.injectorGet(dart.wrapType(src__hero_service.HeroService), this.viewData.parentIndex)), src__router__router.Router._check(this.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      this[_compView_0].create(this[_HeroListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroListComponent()).new(0, this, this.rootEl, this[_HeroListComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_HeroListComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroListComponent_0_5] = null;
    src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroListComponent_0_5]: dart.fieldType(src__hero_list_component.HeroListComponent)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.HeroListComponentNgFactory*/get HeroListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroListComponent()).new('my-heroes', src__hero_list_component$46template.viewFactory_HeroListComponentHost0, src__hero_list_component$46template._HeroListComponentMetadata));
    },
    /*src__hero_list_component$46template._HeroListComponentMetadata*/get _HeroListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_list_component$46template.initReflector = function() {
    if (dart.test(src__hero_list_component$46template._visited)) {
      return;
    }
    src__hero_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_list_component.HeroListComponent), src__hero_list_component$46template.HeroListComponentNgFactory);
    src__hero$46template.initReflector();
    src__hero_component$46template.initReflector();
    src__hero_service$46template.initReflector();
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__route_paths$46template.initReflector();
  };
  dart.fn(src__hero_list_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_list_component.template.ddc", {
    "package:angular_tour_of_heroes/src/hero_list_component.template.dart": src__hero_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.template.dart"],"names":[],"mappings":"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","file":"hero_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_list_component$46template: src__hero_list_component$46template
  };
});

//# sourceMappingURL=hero_list_component.template.ddc.js.map
