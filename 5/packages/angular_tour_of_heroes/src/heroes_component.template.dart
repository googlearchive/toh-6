// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'heroes_component.dart';
export 'heroes_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'hero.dart';
import 'hero_detail_component.dart';
import 'hero_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'hero_detail_component.template.dart' as _ref1;
import 'hero_service.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_router/angular_router.template.dart' as _ref4;

import 'package:angular_tour_of_heroes/src/heroes_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'heroes_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/pipes/uppercase_pipe.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'hero.dart' as import14;
import 'dart:core';
import 'hero_service.dart' as import16;
import 'package:angular_router/src/router/router.dart' as import17;

const List<dynamic> styles$HeroesComponent = const [import0.styles];

class ViewHeroesComponent0 extends AppView<import2.HeroesComponent> {
  import3.Element _el_0;
  import3.DivElement _el_2;
  import3.Element _el_3;
  import3.InputElement _el_5;
  import3.ButtonElement _el_6;
  import3.UListElement _el_8;
  ViewContainer _appEl_9;
  import5.NgFor _NgFor_9_7;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_7;
  var _expr_0;
  import7.UpperCasePipe _pipe_uppercase_0;
  static RenderComponentType _renderType;
  ViewHeroesComponent0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-heroes');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroesComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HeroesComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('My Heroes');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'label', _el_2);
    addShimE(_el_3);
    import3.Text _text_4 = new import3.Text('Hero name:');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'input', _el_2);
    addShimC(_el_5);
    _el_6 = createAndAppend(doc, 'button', _el_2);
    addShimC(_el_6);
    import3.Text _text_7 = new import3.Text('Add');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'ul', parentRenderNode);
    _el_8.className = 'heroes';
    addShimC(_el_8);
    var _anchor_9 = ngAnchor.clone(false);
    _el_8.append(_anchor_9);
    _appEl_9 = new ViewContainer(9, 8, this, _anchor_9);
    TemplateRef _TemplateRef_9_6 = new TemplateRef(_appEl_9, viewFactory_HeroesComponent1);
    _NgFor_9_7 = new import5.NgFor(_appEl_9, _TemplateRef_9_6);
    var _anchor_10 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_10);
    _appEl_10 = new ViewContainer(10, null, this, _anchor_10);
    TemplateRef _TemplateRef_10_6 = new TemplateRef(_appEl_10, viewFactory_HeroesComponent2);
    _NgIf_10_7 = new NgIf(_appEl_10, _TemplateRef_10_6);
    _el_6.addEventListener('click', eventHandler1(_handle_click_6_0));
    _pipe_uppercase_0 = new import7.UpperCasePipe();
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HeroesComponent _ctx = ctx;
    final currVal_0 = _ctx.heroes;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_9_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_9_7.ngDoCheck();
    _NgIf_10_7.ngIf = (_ctx.selectedHero != null);
    _appEl_9.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_9?.destroyNestedViews();
    _appEl_10?.destroyNestedViews();
  }

  void _handle_click_6_0($event) {
    final local_heroName = _el_5;
    ctx.add(local_heroName.value);
    local_heroName.value = '';
  }
}

AppView<import2.HeroesComponent> viewFactory_HeroesComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroesComponent0(parentView, parentIndex);
}

class _ViewHeroesComponent1 extends AppView<import2.HeroesComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import3.Text _text_4;
  import3.ButtonElement _el_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewHeroesComponent1(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroesComponent0._renderType;
  }
  @override
  ComponentRef<import2.HeroesComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _el_1 = createSpanAndAppend(doc, _el_0);
    _el_1.className = 'badge';
    addShimE(_el_1);
    _text_2 = new import3.Text('');
    _el_1.append(_text_2);
    _el_3 = createSpanAndAppend(doc, _el_0);
    addShimE(_el_3);
    _text_4 = new import3.Text('');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'button', _el_0);
    _el_5.className = 'delete';
    addShimC(_el_5);
    import3.Text _text_6 = new import3.Text('x');
    _el_5.append(_text_6);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    _el_5.addEventListener('click', eventHandler1(_handle_click_5_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HeroesComponent _ctx = ctx;
    final import14.Hero local_hero = locals['\$implicit'];
    final currVal_0 = identical(local_hero, _ctx.selectedHero);
    if (!identical(_expr_0, currVal_0)) {
      updateClass(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import11.interpolate0(local_hero.id);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import11.interpolate0(local_hero.name);
    if (!identical(_expr_2, currVal_2)) {
      _text_4.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  void _handle_click_0_0($event) {
    final import14.Hero local_hero = locals['\$implicit'];
    ctx.onSelect(local_hero);
  }

  void _handle_click_5_0($event) {
    final import14.Hero local_hero = locals['\$implicit'];
    ctx.delete(local_hero);
    $event.stopPropagation();
  }
}

AppView<import2.HeroesComponent> viewFactory_HeroesComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroesComponent1(parentView, parentIndex);
}

class _ViewHeroesComponent2 extends AppView<import2.HeroesComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.ButtonElement _el_3;
  var _expr_0;
  String Function(String) _pipe_uppercase_0_0;
  _ViewHeroesComponent2(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroesComponent0._renderType;
  }
  @override
  ComponentRef<import2.HeroesComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    _text_2 = new import3.Text('');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'button', _el_0);
    addShimC(_el_3);
    import3.Text _text_4 = new import3.Text('View Details');
    _el_3.append(_text_4);
    _el_3.addEventListener('click', eventHandler0(ctx.gotoDetail));
    _pipe_uppercase_0_0 = import11.pureProxy1((parentView as ViewHeroesComponent0)._pipe_uppercase_0.transform);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HeroesComponent _ctx = ctx;
    final currVal_0 = import11.interpolate1('', _pipe_uppercase_0_0(_ctx.selectedHero.name), ' is my hero');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.HeroesComponent> viewFactory_HeroesComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroesComponent2(parentView, parentIndex);
}

const List<dynamic> styles$HeroesComponentHost = const [];

class _ViewHeroesComponentHost0 extends AppView<dynamic> {
  ViewHeroesComponent0 _compView_0;
  import2.HeroesComponent _HeroesComponent_0_4;
  _ViewHeroesComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroesComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroesComponent_0_4 = new import2.HeroesComponent(this.injectorGet(import16.HeroService, viewData.parentIndex), this.injectorGet(import17.Router, viewData.parentIndex));
    _compView_0.create(_HeroesComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.HeroesComponent>(0, this, rootEl, _HeroesComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.HeroesComponent) && (0 == nodeIndex))) {
      return _HeroesComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroesComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HeroesComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroesComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HeroesComponent> HeroesComponentNgFactory = const ComponentFactory<import2.HeroesComponent>('my-heroes', viewFactory_HeroesComponentHost0, _HeroesComponentMetadata);
const _HeroesComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ngRef.registerComponent(
    HeroesComponent,
    HeroesComponentNgFactory,
  );
}
