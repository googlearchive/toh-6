// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'main.dart';
export 'main.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_tour_of_heroes/app_component.template.dart' as ng;
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:http/http.dart';
import 'main.template.dart' as self;
import 'main.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:angular_tour_of_heroes/app_component.template.dart' as _ref3;
import 'package:angular_tour_of_heroes/in_memory_data_service.template.dart' as _ref4;
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:angular_tour_of_heroes/in_memory_data_service.dart' as _i3;
import 'package:angular_router/src/location/hash_location_strategy.dart' as _i4;
import 'package:angular_router/src/location/browser_platform_location.dart' as _i5;
import 'package:angular_router/src/location/location.dart' as _i6;
import 'package:angular_router/src/router/router_impl.dart' as _i7;
import 'package:angular_router/src/location/platform_location.dart' as _i8;
import 'package:angular/src/core/di/opaque_token.dart' as _i9;
import 'package:angular_router/src/location/location_strategy.dart' as _i10;
import 'package:angular_router/src/router_hook.dart' as _i11;
import 'package:http/src/client.dart' as _i12;
import 'package:angular_router/src/router/router.dart' as _i13;

_i1.Injector injector$Injector([_i1.Injector parent]) => new _Injector$injector._(parent);

class _Injector$injector extends _i2.HierarchicalInjector {
  _Injector$injector._([_i1.Injector parent]) : super(parent);

  _i3.InMemoryDataService _field0;

  _i4.HashLocationStrategy _field1;

  _i5.BrowserPlatformLocation _field2;

  _i6.Location _field3;

  _i7.RouterImpl _field4;

  _i3.InMemoryDataService _getInMemoryDataService$0() => _field0 ??= new _i3.InMemoryDataService();
  _i4.HashLocationStrategy _getHashLocationStrategy$1() => _field1 ??= new _i4.HashLocationStrategy(inject(_i8.PlatformLocation), injectOptional(const _i9.OpaqueToken<String>('appBaseHref'), null));
  _i5.BrowserPlatformLocation _getBrowserPlatformLocation$2() => _field2 ??= new _i5.BrowserPlatformLocation();
  _i6.Location _getLocation$3() => _field3 ??= new _i6.Location(inject(_i10.LocationStrategy));
  _i7.RouterImpl _getRouterImpl$4() => _field4 ??= new _i7.RouterImpl(inject(_i6.Location), injectOptional(_i11.RouterHook, null));
  _i1.Injector _getInjector$5() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i12.Client)) {
      return _getInMemoryDataService$0();
    }
    if (identical(token, _i10.LocationStrategy)) {
      return _getHashLocationStrategy$1();
    }
    if (identical(token, _i8.PlatformLocation)) {
      return _getBrowserPlatformLocation$2();
    }
    if (identical(token, _i6.Location)) {
      return _getLocation$3();
    }
    if (identical(token, _i13.Router)) {
      return _getRouterImpl$4();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$5();
    }
    return orElse;
  }
}

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
}
