// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dashboard_component.dart';
export 'dashboard_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'hero.dart';
import 'hero_service.dart';
import 'hero_search_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'hero_search_component.template.dart' as _ref1;
import 'hero_service.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_router/angular_router.template.dart' as _ref4;
import 'package:angular_tour_of_heroes/src/dashboard_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'dashboard_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'hero_search_component.template.dart' as import6;
import 'hero_search_service.dart' as import7;
import 'hero_search_component.dart' as import8;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:http/src/client.dart' as import15;
import 'package:angular_router/src/router/router.dart' as import16;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import17;
import 'package:angular_router/src/directives/router_link_directive.dart' as import18;
import 'package:angular_router/src/location/location.dart' as import19;
import 'hero.dart' as import20;
import 'hero_service.dart' as import21;

const List<dynamic> styles$DashboardComponent = const [import0.styles];

class ViewDashboardComponent0 extends AppView<import2.DashboardComponent> {
  import3.Element _el_0;
  import3.DivElement _el_2;
  ViewContainer _appEl_3;
  import5.NgFor _NgFor_3_7;
  import3.Element _el_4;
  import6.ViewHeroSearchComponent0 _compView_4;
  import7.HeroSearchService _HeroSearchService_4_4;
  import8.HeroSearchComponent _HeroSearchComponent_4_5;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewDashboardComponent0(AppView<dynamic> parentView, num parentIndex) : super(import10.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-dashboard');
    _renderType ??= import12.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$DashboardComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.DashboardComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('Top Heroes');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.className = 'grid grid-pad';
    addShimC(_el_2);
    var _anchor_3 = ngAnchor.clone(false);
    _el_2.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_6 = new TemplateRef(_appEl_3, viewFactory_DashboardComponent1);
    _NgFor_3_7 = new import5.NgFor(_appEl_3, _TemplateRef_3_6);
    _compView_4 = new import6.ViewHeroSearchComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    addShimC(_el_4);
    _HeroSearchService_4_4 = new import7.HeroSearchService(parentView.injectorGet(import15.Client, viewData.parentIndex));
    _HeroSearchComponent_4_5 = new import8.HeroSearchComponent(_HeroSearchService_4_4, parentView.injectorGet(import16.Router, viewData.parentIndex));
    _compView_4.create(_HeroSearchComponent_4_5, []);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import7.HeroSearchService) && (4 == nodeIndex))) {
      return _HeroSearchService_4_4;
    }
    if ((identical(token, import8.HeroSearchComponent) && (4 == nodeIndex))) {
      return _HeroSearchComponent_4_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.DashboardComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.heroes;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_3_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_3_7.ngDoCheck();
    if (firstCheck) {
      _HeroSearchComponent_4_5.ngOnInit();
    }
    _appEl_3.detectChangesInNestedViews();
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
    _compView_4?.destroy();
  }
}

AppView<import2.DashboardComponent> viewFactory_DashboardComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewDashboardComponent0(parentView, parentIndex);
}

class _ViewDashboardComponent1 extends AppView<import2.DashboardComponent> {
  import3.AnchorElement _el_0;
  import17.RouterLinkNgCd _RouterLink_0_4;
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Text _text_3;
  String _expr_0;
  var _expr_1;
  _ViewDashboardComponent1(AppView<dynamic> parentView, num parentIndex) : super(import10.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDashboardComponent0._renderType;
  }
  @override
  ComponentRef<import2.DashboardComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('a');
    _el_0.className = 'col-1-4';
    addShimC(_el_0);
    _RouterLink_0_4 = new import17.RouterLinkNgCd(new import18.RouterLink(parentView.parentView.injectorGet(import16.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import19.Location, parentView.viewData.parentIndex), null, _el_0));
    _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'module hero';
    addShimC(_el_1);
    _el_2 = createAndAppend(doc, 'h4', _el_1);
    addShimE(_el_2);
    _text_3 = new import3.Text('');
    _el_2.append(_text_3);
    _el_0.addEventListener('click', eventHandler1(_RouterLink_0_4.instance.onClick));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import20.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import12.interpolate1('/detail/', local_hero.id, '');
    if (!identical(_expr_0, currVal_0)) {
      _RouterLink_0_4.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    _RouterLink_0_4.detectHostChanges(this, _el_0);
    final currVal_1 = import12.interpolate0(local_hero.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _RouterLink_0_4.instance.ngOnDestroy();
  }
}

AppView<import2.DashboardComponent> viewFactory_DashboardComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewDashboardComponent1(parentView, parentIndex);
}

const List<dynamic> styles$DashboardComponentHost = const [];

class _ViewDashboardComponentHost0 extends AppView<dynamic> {
  ViewDashboardComponent0 _compView_0;
  import2.DashboardComponent _DashboardComponent_0_4;
  _ViewDashboardComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import10.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewDashboardComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DashboardComponent_0_4 = new import2.DashboardComponent(this.injectorGet(import21.HeroService, viewData.parentIndex));
    _compView_0.create(_DashboardComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.DashboardComponent>(0, this, rootEl, _DashboardComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.DashboardComponent) && (0 == nodeIndex))) {
      return _DashboardComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _DashboardComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_DashboardComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewDashboardComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.DashboardComponent> DashboardComponentNgFactory = const ComponentFactory<import2.DashboardComponent>('my-dashboard', viewFactory_DashboardComponentHost0, _DashboardComponentMetadata);
const _DashboardComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DashboardComponent, DashboardComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
