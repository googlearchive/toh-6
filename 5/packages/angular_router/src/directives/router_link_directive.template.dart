// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'router_link_directive.dart';
export 'router_link_directive.dart';
import 'dart:async';
import 'dart:html' show AnchorElement, Element, Event, KeyboardEvent, KeyCode, MouseEvent;
import 'package:angular/angular.dart';
import '../location.dart' show Location;
import '../router/navigation_params.dart';
import '../router/router.dart';
import '../url.dart';
import '../location.template.dart' as _ref0;
import '../router/navigation_params.template.dart' as _ref1;
import '../router/router.template.dart' as _ref2;
import '../url.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'package:angular/src/core/change_detection/directive_change_detector.dart' as import0;
import 'router_link_directive.dart' as import1;
import 'package:angular/src/core/linker/app_view.dart';
import 'dart:html' as import3;

class RouterLinkNgCd extends import0.DirectiveChangeDetector {
  final import1.RouterLink instance;
  var _expr_0;
  RouterLinkNgCd(this.instance);
  void detectHostChanges(AppView<dynamic> view, import3.Element el) {
    final currVal_0 = instance.visibleHref;
    if (!identical(_expr_0, currVal_0)) {
      setAttr(el, 'href', currVal_0?.toString());
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
  _ref3.initReflector();
  _ref4.initReflector();
}
