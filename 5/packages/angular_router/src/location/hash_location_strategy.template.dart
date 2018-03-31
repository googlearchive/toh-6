// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hash_location_strategy.dart';
export 'hash_location_strategy.dart';
import 'dart:html' as html;
import 'package:angular/angular.dart' show Injectable, Inject, Optional;
import 'location.dart' show Location;
import 'location_strategy.dart' show LocationStrategy, appBaseHref;
import 'platform_location.dart' show PlatformLocation;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'location.template.dart' as _ref0;
import 'location_strategy.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'platform_location.template.dart' as _ref3;
import 'package:angular_router/src/location/platform_location.dart' as _i1;
import 'package:angular/src/core/di/opaque_token.dart' as _i2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(HashLocationStrategy, (_i1.PlatformLocation p0, String p1) => new HashLocationStrategy(p0, p1));
  _ngRef.registerDependencies(HashLocationStrategy, const [
    const [_i1.PlatformLocation],
    const [const _ngRef.Inject(const _i2.OpaqueToken<String>('appBaseHref')), const _ngRef.Optional()]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
