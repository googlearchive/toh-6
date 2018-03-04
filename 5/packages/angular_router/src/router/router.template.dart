// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'router.dart';
export 'router.dart';
import 'dart:async';
import '../directives/router_outlet_directive.dart';
import 'navigation_params.dart';
import 'router_state.dart';
import '../directives/router_outlet_directive.template.dart' as _ref0;
import 'navigation_params.template.dart' as _ref1;
import 'router_state.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
