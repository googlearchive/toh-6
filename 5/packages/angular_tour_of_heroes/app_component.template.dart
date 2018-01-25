// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'src/app_routes.dart';
import 'src/hero_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'src/app_routes.template.dart' as _ref2;
import 'src/hero_service.template.dart' as _ref3;

import 'package:angular_tour_of_heroes/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import4;
import 'package:angular_router/src/directives/router_link_active_directive.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular_router/src/directives/router_link_directive.dart' as import13;
import 'package:angular_router/src/router/router.dart' as import14;
import 'package:angular_router/src/location/location.dart' as import15;
import 'package:angular_router/src/router/router_outlet_token.dart' as import16;
import 'package:angular_router/src/router_hook.dart' as import17;
import 'src/app_routes.dart' as import18;
import 'src/hero_service.dart' as import19;
import 'package:http/src/client.dart' as import20;

const List<dynamic> styles$AppComponent = const [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  import3.Element _el_2;
  import3.AnchorElement _el_3;
  import4.RouterLinkNgCd _RouterLink_3_4;
  import5.RouterLinkActive _RouterLinkActive_3_5;
  bool _query_RouterLink_3_0_isDirty = true;
  import3.AnchorElement _el_5;
  import4.RouterLinkNgCd _RouterLink_5_4;
  import5.RouterLinkActive _RouterLinkActive_5_5;
  bool _query_RouterLink_5_0_isDirty = true;
  import3.Element _el_7;
  ViewContainer _appEl_7;
  import7.RouterOutlet _RouterOutlet_7_6;
  var _expr_5;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import11.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'nav', parentRenderNode);
    addShimE(_el_2);
    _el_3 = createAndAppend(doc, 'a', _el_2);
    createAttr(_el_3, 'routerLink', '/dashboard');
    createAttr(_el_3, 'routerLinkActive', 'active');
    addShimC(_el_3);
    _RouterLink_3_4 = new import4.RouterLinkNgCd(new import13.RouterLink(parentView.injectorGet(import14.Router, viewData.parentIndex), parentView.injectorGet(import15.Location, viewData.parentIndex), null, _el_3));
    _RouterLinkActive_3_5 = new import5.RouterLinkActive(_el_3, parentView.injectorGet(import14.Router, viewData.parentIndex));
    import3.Text _text_4 = new import3.Text('Dashboard');
    _el_3.append(_text_4);
    _RouterLinkActive_3_5.links = [_RouterLink_3_4.instance];
    _el_5 = createAndAppend(doc, 'a', _el_2);
    createAttr(_el_5, 'routerLink', '/heroes');
    createAttr(_el_5, 'routerLinkActive', 'active');
    addShimC(_el_5);
    _RouterLink_5_4 = new import4.RouterLinkNgCd(new import13.RouterLink(parentView.injectorGet(import14.Router, viewData.parentIndex), parentView.injectorGet(import15.Location, viewData.parentIndex), null, _el_5));
    _RouterLinkActive_5_5 = new import5.RouterLinkActive(_el_5, parentView.injectorGet(import14.Router, viewData.parentIndex));
    import3.Text _text_6 = new import3.Text('Heroes');
    _el_5.append(_text_6);
    _RouterLinkActive_5_5.links = [_RouterLink_5_4.instance];
    _el_7 = createAndAppend(doc, 'router-outlet', parentRenderNode);
    addShimE(_el_7);
    _appEl_7 = new ViewContainer(7, null, this, _el_7);
    _RouterOutlet_7_6 = new import7.RouterOutlet(parentView.injectorGet(import7.RouterOutlet, viewData.parentIndex, null), parentView.injectorGet(import16.RouterOutletToken, viewData.parentIndex, null), _appEl_7, parentView.injectorGet(import14.Router, viewData.parentIndex), parentView.injectorGet(import17.RouterHook, viewData.parentIndex, null));
    _el_3.addEventListener('click', eventHandler1(_RouterLink_3_4.instance.onClick));
    _el_5.addEventListener('click', eventHandler1(_RouterLink_5_4.instance.onClick));
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import7.RouterOutlet) && (7 == nodeIndex))) {
      return _RouterOutlet_7_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      (_RouterLink_3_4.instance.routerLink = '/dashboard');
    }
    if (firstCheck) {
      (_RouterLinkActive_3_5.routerLinkActive = 'active');
    }
    if (firstCheck) {
      (_RouterLink_5_4.instance.routerLink = '/heroes');
    }
    if (firstCheck) {
      (_RouterLinkActive_5_5.routerLinkActive = 'active');
    }
    final currVal_5 = _ctx.routes.all;
    if (!identical(_expr_5, currVal_5)) {
      _RouterOutlet_7_6.routes = currVal_5;
      _expr_5 = currVal_5;
    }
    if (firstCheck) {
      _RouterOutlet_7_6.ngOnInit();
    }
    _appEl_7.detectChangesInNestedViews();
    if (_query_RouterLink_3_0_isDirty) {
      _RouterLinkActive_3_5.links = [_RouterLink_3_4.instance];
      _query_RouterLink_3_0_isDirty = false;
    }
    if (_query_RouterLink_5_0_isDirty) {
      _RouterLinkActive_5_5.links = [_RouterLink_5_4.instance];
      _query_RouterLink_5_0_isDirty = false;
    }
    if (firstCheck) {
      (_text_1.text = (_ctx.title ?? ''));
    }
    _RouterLink_3_4.detectHostChanges(this, _el_3);
    _RouterLink_5_4.detectHostChanges(this, _el_5);
    if (firstCheck) {
      _RouterLinkActive_3_5.ngAfterViewInit();
    }
    if (firstCheck) {
      _RouterLinkActive_5_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _appEl_7?.destroyNestedViews();
    _RouterLink_3_4.instance.ngOnDestroy();
    _RouterLinkActive_3_5.ngOnDestroy();
    _RouterLink_5_4.instance.ngOnDestroy();
    _RouterLinkActive_5_5.ngOnDestroy();
    _RouterOutlet_7_6.ngOnDestroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import18.AppRoutes _AppRoutes_0_4;
  import2.AppComponent _AppComponent_0_5;
  import19.HeroService __HeroService_0_6;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import9.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  import19.HeroService get _HeroService_0_6 {
    if ((this.__HeroService_0_6 == null)) {
      (__HeroService_0_6 = new import19.HeroService(this.injectorGet(import20.Client, this.viewData.parentIndex)));
    }
    return this.__HeroService_0_6;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppRoutes_0_4 = new import18.AppRoutes();
    _AppComponent_0_5 = new import2.AppComponent(_AppRoutes_0_4);
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.AppComponent>(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.AppRoutes) && (0 == nodeIndex))) {
      return _AppRoutes_0_4;
    }
    if ((identical(token, import2.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_5;
    }
    if ((identical(token, import19.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> AppComponentNgFactory = const ComponentFactory<import2.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
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
  _ngRef.registerComponent(
    AppComponent,
    AppComponentNgFactory,
  );
}
