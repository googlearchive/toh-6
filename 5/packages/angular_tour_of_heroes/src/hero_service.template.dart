// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_service.dart';
export 'hero_service.dart';
import 'dart:async';
import 'dart:convert';
import 'package:angular/angular.dart';
import 'package:http/http.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:http/src/client.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(HeroService, (_i1.Client p0) => new HeroService(p0));
  _ngRef.registerDependencies(HeroService, const [
    const [_i1.Client]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
}
