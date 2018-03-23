define(['dart_sdk', 'packages/angular_forms/src/directives/validators.template', 'packages/angular_forms/src/directives/abstract_control_directive.template', 'packages/angular/angular.template', 'packages/angular_forms/src/directives/checkbox_value_accessor.template', 'packages/angular_forms/src/directives/control_value_accessor.template', 'packages/angular_forms/src/directives/default_value_accessor.template', 'packages/angular_forms/src/directives/normalize_validator.template', 'packages/angular_forms/src/directives/number_value_accessor.template', 'packages/angular_forms/src/directives/select_control_value_accessor.template', 'packages/angular/src/di/reflector', 'packages/angular_forms/src/directives/control_container'], function(dart_sdk, validators, abstract_control_directive, angular, checkbox_value_accessor, control_value_accessor, default_value_accessor, normalize_validator, number_value_accessor, select_control_value_accessor, reflector, control_container) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__model$46template = validators.src__model$46template;
  const src__validators$46template = validators.src__validators$46template;
  const src__directives__validators$46template = validators.src__directives__validators$46template;
  const src__directives__abstract_control_directive$46template = abstract_control_directive.src__directives__abstract_control_directive$46template;
  const angular$46template = angular.angular$46template;
  const src__directives__checkbox_value_accessor$46template = checkbox_value_accessor.src__directives__checkbox_value_accessor$46template;
  const src__directives__control_value_accessor$46template = control_value_accessor.src__directives__control_value_accessor$46template;
  const src__directives__default_value_accessor$46template = default_value_accessor.src__directives__default_value_accessor$46template;
  const src__directives__normalize_validator$46template = normalize_validator.src__directives__normalize_validator$46template;
  const src__directives__number_value_accessor$46template = number_value_accessor.src__directives__number_value_accessor$46template;
  const src__directives__select_control_value_accessor$46template = select_control_value_accessor.src__directives__select_control_value_accessor$46template;
  const src__di__reflector = reflector.src__di__reflector;
  const src__directives__radio_control_value_accessor = control_container.src__directives__radio_control_value_accessor;
  const _root = Object.create(null);
  const src__directives__control_container$46template = Object.create(_root);
  const src__directives__form_interface$46template = Object.create(_root);
  const src__directives__ng_control_group$46template = Object.create(_root);
  const src__directives__shared$46template = Object.create(_root);
  const src__directives__ng_control$46template = Object.create(_root);
  const src__directives__radio_control_value_accessor$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToRadioControlRegistry = () => (VoidToRadioControlRegistry = dart.constFn(dart.fnType(src__directives__radio_control_value_accessor.RadioControlRegistry, [])))();
  dart.defineLazy(src__directives__control_container$46template, {
    /*src__directives__control_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__control_container$46template.initReflector = function() {
    if (dart.test(src__directives__control_container$46template._visited)) {
      return;
    }
    src__directives__control_container$46template._visited = true;
    src__model$46template.initReflector();
    src__directives__abstract_control_directive$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
  };
  dart.fn(src__directives__control_container$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__directives__form_interface$46template, {
    /*src__directives__form_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__form_interface$46template.initReflector = function() {
    if (dart.test(src__directives__form_interface$46template._visited)) {
      return;
    }
    src__directives__form_interface$46template._visited = true;
    src__model$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
  };
  dart.fn(src__directives__form_interface$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__directives__ng_control_group$46template, {
    /*src__directives__ng_control_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_control_group$46template.initReflector = function() {
    if (dart.test(src__directives__ng_control_group$46template._visited)) {
      return;
    }
    src__directives__ng_control_group$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__form_interface$46template.initReflector();
    angular$46template.initReflector();
    src__directives__shared$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.fn(src__directives__ng_control_group$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__directives__shared$46template, {
    /*src__directives__shared$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__shared$46template.initReflector = function() {
    if (dart.test(src__directives__shared$46template._visited)) {
      return;
    }
    src__directives__shared$46template._visited = true;
    src__model$46template.initReflector();
    src__validators$46template.initReflector();
    src__directives__abstract_control_directive$46template.initReflector();
    src__directives__checkbox_value_accessor$46template.initReflector();
    src__directives__control_container$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__default_value_accessor$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    src__directives__ng_control_group$46template.initReflector();
    src__directives__normalize_validator$46template.initReflector();
    src__directives__number_value_accessor$46template.initReflector();
    src__directives__radio_control_value_accessor$46template.initReflector();
    src__directives__select_control_value_accessor$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.fn(src__directives__shared$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__directives__ng_control$46template, {
    /*src__directives__ng_control$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__ng_control$46template.initReflector = function() {
    if (dart.test(src__directives__ng_control$46template._visited)) {
      return;
    }
    src__directives__ng_control$46template._visited = true;
    src__model$46template.initReflector();
    src__directives__abstract_control_directive$46template.initReflector();
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__shared$46template.initReflector();
    src__directives__validators$46template.initReflector();
  };
  dart.fn(src__directives__ng_control$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__directives__radio_control_value_accessor$46template, {
    /*src__directives__radio_control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__directives__radio_control_value_accessor$46template.initReflector = function() {
    if (dart.test(src__directives__radio_control_value_accessor$46template._visited)) {
      return;
    }
    src__directives__radio_control_value_accessor$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__directives__radio_control_value_accessor.RadioControlRegistry), dart.fn(() => new src__directives__radio_control_value_accessor.RadioControlRegistry.new(), VoidToRadioControlRegistry()));
    src__directives__control_value_accessor$46template.initReflector();
    src__directives__ng_control$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__directives__radio_control_value_accessor$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_forms/src/directives/control_container.template.ddc", {
    "package:angular_forms/src/directives/control_container.template.dart": src__directives__control_container$46template,
    "package:angular_forms/src/directives/form_interface.template.dart": src__directives__form_interface$46template,
    "package:angular_forms/src/directives/ng_control_group.template.dart": src__directives__ng_control_group$46template,
    "package:angular_forms/src/directives/shared.template.dart": src__directives__shared$46template,
    "package:angular_forms/src/directives/ng_control.template.dart": src__directives__ng_control$46template,
    "package:angular_forms/src/directives/radio_control_value_accessor.template.dart": src__directives__radio_control_value_accessor$46template
  }, '{"version":3,"sourceRoot":"","sources":["control_container.template.dart","form_interface.template.dart","ng_control_group.template.dart","shared.template.dart","ng_control.template.dart","radio_control_value_accessor.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;MAcI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,mCAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,wDAAa;EACrB;;;MCVI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,mCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;EACrB;;;MCFI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,mCAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,oDAAa;EACrB;;;MCAI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,mCAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,iEAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,6DAAa;AACnB,IAAO,+DAAa;AACpB,IAAO,sEAAa;AACpB,IAAO,uEAAa;AACpB,IAAO,oDAAa;EACtB;;;MCvCI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,mCAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,oDAAa;EACrB;;;MCbI,iEAAQ;YAAG;;;;;AAEb,kBAAI,iEAAQ,GAAE;AACZ;;AAEF,wEAAW;AAEX,IAAO,kCAAe,CAAC,iFAAoB,EAAE,cAAM,IAAI,sEAAoB;AAC3E,IAAM,gEAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,gCAAa;EACrB","file":"control_container.template.ddc.js"}');
  // Exports:
  return {
    src__directives__control_container$46template: src__directives__control_container$46template,
    src__directives__form_interface$46template: src__directives__form_interface$46template,
    src__directives__ng_control_group$46template: src__directives__ng_control_group$46template,
    src__directives__shared$46template: src__directives__shared$46template,
    src__directives__ng_control$46template: src__directives__ng_control$46template,
    src__directives__radio_control_value_accessor$46template: src__directives__radio_control_value_accessor$46template
  };
});

//# sourceMappingURL=control_container.template.ddc.js.map
