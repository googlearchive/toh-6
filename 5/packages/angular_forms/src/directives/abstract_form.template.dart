// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'abstract_form.dart';
export 'abstract_form.dart';
import 'dart:async';
import 'dart:html' show Event;
import 'package:angular/angular.dart';
import '../model.dart';
import 'control_container.dart';
import 'form_interface.dart';
import 'ng_control.dart' show NgControl;
import 'ng_control_group.dart' show NgControlGroup;
import '../model.template.dart' as _ref0;
import 'control_container.template.dart' as _ref1;
import 'form_interface.template.dart' as _ref2;
import 'ng_control.template.dart' as _ref3;
import 'ng_control_group.template.dart' as _ref4;
import 'package:angular/angular.template.dart' as _ref5;

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
  _ref5.initReflector();
}
