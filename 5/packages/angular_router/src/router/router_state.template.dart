// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'router_state.dart';
export 'router_state.dart';
import 'package:collection/collection.dart';
import 'package:angular/angular.dart' show ComponentFactory, ComponentRef;
import '../route_definition.dart';
import '../route_path.dart';
import '../url.dart';
import '../route_definition.template.dart' as _ref0;
import '../route_path.template.dart' as _ref1;
import '../url.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;

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
}
