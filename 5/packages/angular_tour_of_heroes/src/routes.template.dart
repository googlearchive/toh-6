// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'routes.dart';
export 'routes.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'route_paths.dart' as paths;
import 'dashboard_component.template.dart' as dct;
import 'hero_component.template.dart' as hct;
import 'hero_list_component.template.dart' as hlct;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'dashboard_component.template.dart' as _ref0;
import 'hero_component.template.dart' as _ref1;
import 'hero_list_component.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'package:angular_router/angular_router.template.dart' as _ref4;
import 'route_paths.template.dart' as _ref5;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(Routes, () => new Routes());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
