// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'in_memory_data_service.dart';
export 'in_memory_data_service.dart';
import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'package:angular/angular.dart';
import 'package:http/http.dart';
import 'package:http/testing.dart';
import 'src/hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/hero.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(InMemoryDataService, () => new InMemoryDataService());
  _ref0.initReflector();
  _ref1.initReflector();
}
