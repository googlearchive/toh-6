// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'validators.dart';
export 'validators.dart';
import 'package:angular/angular.dart';
import '../model.dart' show AbstractControl;
import '../validators.dart' show Validators, NG_VALIDATORS;
import '../model.template.dart' as _ref0;
import '../validators.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'validators.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;

class MinLengthValidatorNgCd extends import0.DirectiveChangeDetector {
  final import1.MinLengthValidator instance;
  var _expr_0;
  MinLengthValidatorNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.minLengthAttr;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(el, 'minlength', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
  }
}

class MaxLengthValidatorNgCd extends import0.DirectiveChangeDetector {
  final import1.MaxLengthValidator instance;
  var _expr_0;
  MaxLengthValidatorNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.maxLengthAttr;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(el, 'maxlength', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
  }
}

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
