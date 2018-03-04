// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'testing.dart';
export 'testing.dart';
import 'package:angular/angular.dart' show Provider;
import 'src/location.dart';
import 'src/location/testing/mock_location_strategy.dart';
import 'src/router/router.dart';
import 'src/router/router_impl.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'src/location.template.dart' as _ref1;
import 'src/location/testing/mock_location_strategy.template.dart' as _ref2;
import 'src/location/testing/mock_location_strategy.template.dart' as _ref3;
import 'src/router/router.template.dart' as _ref4;
import 'src/router/router_impl.template.dart' as _ref5;

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
