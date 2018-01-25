// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_routes.dart';
export 'app_routes.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'dashboard_component.template.dart' as dct;
import 'hero_detail_component.template.dart' as hdct;
import 'heroes_component.template.dart' as hct;
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'dashboard_component.template.dart' as _ref0;
import 'hero_detail_component.template.dart' as _ref1;
import 'heroes_component.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_router/angular_router.template.dart' as _ref4;

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
  _ngRef.registerFactory(
    AppRoutes,
    () => new AppRoutes(),
  );
}
