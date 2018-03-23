define(['dart_sdk', 'packages/angular_router/src/location.template', 'packages/angular_router/src/url.template', 'packages/angular/angular.template', 'packages/angular/src/runtime.template'], function(dart_sdk, location, url, angular, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location$46template = location.src__location$46template;
  const src__url$46template = url.src__url$46template;
  const angular$46template = angular.angular$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__route_path$46template = Object.create(_root);
  const src__route_definition$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__route_path$46template, {
    /*src__route_path$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__route_path$46template.initReflector = function() {
    if (dart.test(src__route_path$46template._visited)) {
      return;
    }
    src__route_path$46template._visited = true;
    src__location$46template.initReflector();
    src__route_definition$46template.initReflector();
    src__url$46template.initReflector();
  };
  dart.fn(src__route_path$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__route_definition$46template, {
    /*src__route_definition$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__route_definition$46template.initReflector = function() {
    if (dart.test(src__route_definition$46template._visited)) {
      return;
    }
    src__route_definition$46template._visited = true;
    angular$46template.initReflector();
    src__runtime$46template.initReflector();
    src__route_path$46template.initReflector();
    src__url$46template.initReflector();
  };
  dart.fn(src__route_definition$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_router/src/route_definition.template.ddc", {
    "package:angular_router/src/route_path.template.dart": src__route_path$46template,
    "package:angular_router/src/route_definition.template.dart": src__route_definition$46template
  }, '{"version":3,"sourceRoot":"","sources":["route_path.template.dart","route_definition.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAcI,mCAAQ;YAAG;;;;;AAEb,kBAAI,mCAAQ,GAAE;AACZ;;AAEF,0CAAW;AAEX,IAAM,sCAAa;AACnB,IAAM,8CAAa;AACnB,IAAM,iCAAa;EACrB;;;MCNI,yCAAQ;YAAG;;;;;AAEb,kBAAI,yCAAQ,GAAE;AACZ;;AAEF,gDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,iCAAa;EACrB","file":"route_definition.template.ddc.js"}');
  // Exports:
  return {
    src__route_path$46template: src__route_path$46template,
    src__route_definition$46template: src__route_definition$46template
  };
});

//# sourceMappingURL=route_definition.template.ddc.js.map
