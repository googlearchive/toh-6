// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_search_component.dart';
export 'hero_search_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:stream_transform/stream_transform.dart';
import 'hero_search_service.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'hero_search_service.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_router/angular_router.template.dart' as _ref3;
import 'package:angular_tour_of_heroes/src/hero_search_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_search_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/common/pipes/async_pipe.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'hero_search_service.dart' as import13;
import 'package:http/src/client.dart' as import14;
import 'package:angular_router/src/router/router.dart' as import15;

const List<dynamic> styles$HeroSearchComponent = const [import0.styles];

class ViewHeroSearchComponent0 extends AppView<import2.HeroSearchComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.InputElement _el_3;
  import3.DivElement _el_4;
  ViewContainer _appEl_5;
  import5.NgFor _NgFor_5_9;
  var _expr_0;
  import6.AsyncPipe _pipe_async_0;
  static RenderComponentType _renderType;
  ViewHeroSearchComponent0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('hero-search');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroSearchComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HeroSearchComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_0, 'id', 'search-component');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h4', _el_0);
    addShimE(_el_1);
    import3.Text _text_2 = new import3.Text('Hero Search');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'input', _el_0);
    createAttr(_el_3, 'id', 'search-box');
    addShimC(_el_3);
    _el_4 = createDivAndAppend(doc, _el_0);
    addShimC(_el_4);
    var _anchor_5 = ngAnchor.clone(false);
    _el_4.append(_anchor_5);
    _appEl_5 = new ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = new TemplateRef(_appEl_5, viewFactory_HeroSearchComponent1);
    _NgFor_5_9 = new import5.NgFor(_appEl_5, _TemplateRef_5_8);
    _el_3.addEventListener('change', eventHandler1(_handle_change_3_0));
    _el_3.addEventListener('keyup', eventHandler1(_handle_keyup_3_1));
    _pipe_async_0 = new import6.AsyncPipe(ref);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HeroSearchComponent _ctx = ctx;
    final currVal_0 = _pipe_async_0.transform(_ctx.heroes);
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_5_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_5_9.ngDoCheck();
    _appEl_5.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_5?.destroyNestedViews();
    _pipe_async_0.ngOnDestroy();
  }

  void _handle_change_3_0($event) {
    final local_searchBox = _el_3;
    ctx.search(local_searchBox.value);
  }

  void _handle_keyup_3_1($event) {
    final local_searchBox = _el_3;
    ctx.search(local_searchBox.value);
  }
}

AppView<import2.HeroSearchComponent> viewFactory_HeroSearchComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroSearchComponent0(parentView, parentIndex);
}

class _ViewHeroSearchComponent1 extends AppView<import2.HeroSearchComponent> {
  import3.DivElement _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewHeroSearchComponent1(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroSearchComponent0._renderType;
  }
  @override
  ComponentRef<import2.HeroSearchComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    _el_0.className = 'search-result';
    addShimC(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final local_hero = locals['\$implicit'];
    final currVal_0 = import10.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }

  void _handle_click_0_0($event) {
    final local_hero = locals['\$implicit'];
    ctx.gotoDetail(local_hero);
  }
}

AppView<import2.HeroSearchComponent> viewFactory_HeroSearchComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroSearchComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HeroSearchComponentHost = const [];

class _ViewHeroSearchComponentHost0 extends AppView<dynamic> {
  ViewHeroSearchComponent0 _compView_0;
  import13.HeroSearchService _HeroSearchService_0_5;
  import2.HeroSearchComponent _HeroSearchComponent_0_6;
  _ViewHeroSearchComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroSearchComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroSearchService_0_5 = new import13.HeroSearchService(this.injectorGet(import14.Client, viewData.parentIndex));
    _HeroSearchComponent_0_6 = new import2.HeroSearchComponent(_HeroSearchService_0_5, this.injectorGet(import15.Router, viewData.parentIndex));
    _compView_0.create(_HeroSearchComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.HeroSearchComponent>(0, this, rootEl, _HeroSearchComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.HeroSearchService) && (0 == nodeIndex))) {
      return _HeroSearchService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroSearchComponent_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HeroSearchComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroSearchComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HeroSearchComponent> HeroSearchComponentNgFactory = const ComponentFactory<import2.HeroSearchComponent>('hero-search', viewFactory_HeroSearchComponentHost0, _HeroSearchComponentMetadata);
const _HeroSearchComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroSearchComponent, HeroSearchComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
