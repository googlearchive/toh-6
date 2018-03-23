// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'ng_control.dart';
export 'ng_control.dart';
import '../model.dart' show Control;
import 'abstract_control_directive.dart' show AbstractControlDirective;
import 'control_value_accessor.dart' show ControlValueAccessor;
import 'shared.dart' show composeValidators, selectValueAccessor;
import 'validators.dart' show ValidatorFn;
import '../model.template.dart' as _ref0;
import 'abstract_control_directive.template.dart' as _ref1;
import 'control_value_accessor.template.dart' as _ref2;
import 'shared.template.dart' as _ref3;
import 'validators.template.dart' as _ref4;

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
