// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'radio_control_value_accessor.dart';
export 'radio_control_value_accessor.dart';
import 'dart:html';
import 'dart:js_util' as js_util;
import 'package:angular/angular.dart';
import 'package:angular_forms/src/directives/shared.dart' show setElementDisabled;
import 'control_value_accessor.dart' show ChangeHandler, ControlValueAccessor, NG_VALUE_ACCESSOR, TouchHandler;
import 'ng_control.dart' show NgControl;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'control_value_accessor.template.dart' as _ref0;
import 'ng_control.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_forms/src/directives/shared.template.dart' as _ref3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(RadioControlRegistry, () => new RadioControlRegistry());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
