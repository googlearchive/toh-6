// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'ng_form.dart';
export 'ng_form.dart';
import 'dart:async';
import 'package:meta/meta.dart';
import 'package:angular/angular.dart';
import '../model.dart' show AbstractControl, ControlGroup, Control;
import '../validators.dart' show NG_VALIDATORS;
import 'abstract_form.dart' show AbstractForm;
import 'control_container.dart' show ControlContainer;
import 'ng_control.dart' show NgControl;
import 'ng_control_group.dart' show NgControlGroup;
import 'shared.dart' show setUpControl, setUpControlGroup, composeValidators;
import '../model.template.dart' as _ref0;
import '../validators.template.dart' as _ref1;
import 'abstract_form.template.dart' as _ref2;
import 'control_container.template.dart' as _ref3;
import 'ng_control.template.dart' as _ref4;
import 'ng_control_group.template.dart' as _ref5;
import 'package:angular/angular.template.dart' as _ref6;
import 'shared.template.dart' as _ref7;

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
  _ref6.initReflector();
  _ref7.initReflector();
}
