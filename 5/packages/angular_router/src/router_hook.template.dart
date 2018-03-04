// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'router_hook.dart';
export 'router_hook.dart';
import 'dart:async';
import 'router/navigation_params.dart';
import 'router/router_state.dart';
import 'router/navigation_params.template.dart' as _ref0;
import 'router/router_state.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
