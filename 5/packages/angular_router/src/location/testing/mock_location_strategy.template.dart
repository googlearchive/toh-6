// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'mock_location_strategy.dart';
export 'mock_location_strategy.dart';
import 'dart:async';
import 'dart:html' show EventListener, PopStateEvent;
import 'package:angular/angular.dart' show Injectable;
import 'package:angular_router/src/location/location_strategy.dart' show LocationStrategy;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/src/location/location_strategy.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(MockLocationStrategy, () => new MockLocationStrategy());
  _ref0.initReflector();
  _ref1.initReflector();
}
