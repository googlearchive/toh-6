// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hash_location_strategy.dart';
export 'hash_location_strategy.dart';
import 'dart:html' as html;
import 'package:angular/angular.dart' show Injectable, Inject, Optional;
import 'location.dart' show Location;
import 'location_strategy.dart' show LocationStrategy, APP_BASE_HREF;
import 'platform_location.dart' show PlatformLocation;
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'location.template.dart' as _ref0;
import 'location_strategy.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'platform_location.template.dart' as _ref3;

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
  _ngRef.registerFactory(
    HashLocationStrategy,
    (PlatformLocation p0, String p1) => new HashLocationStrategy(p0, p1),
  );
  _ngRef.registerDependencies(
    HashLocationStrategy,
    const [
      const [
        PlatformLocation,
      ],
      const [
        const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>(r'appBaseHref')),
        const _ngRef.Optional(),
      ],
    ],
  );
}
