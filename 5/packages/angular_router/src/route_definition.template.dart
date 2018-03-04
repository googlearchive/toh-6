// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'route_definition.dart';
export 'route_definition.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular/src/runtime.dart';
import 'package:meta/meta.dart';
import 'route_path.dart';
import 'url.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/runtime.template.dart' as _ref1;
import 'route_path.template.dart' as _ref2;
import 'url.template.dart' as _ref3;

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
