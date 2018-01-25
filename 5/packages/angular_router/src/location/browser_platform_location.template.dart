// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'browser_platform_location.dart';
export 'browser_platform_location.dart';
import 'dart:html';
import 'package:angular/angular.dart' show Injectable;
import 'base_href.dart' as base_href;
import 'platform_location.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_href.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'platform_location.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ngRef.registerFactory(
    BrowserPlatformLocation,
    () => new BrowserPlatformLocation(),
  );
}
