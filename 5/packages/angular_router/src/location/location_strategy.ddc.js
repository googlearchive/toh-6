define(['dart_sdk', 'packages/angular/src/core/di/opaque_token'], function(dart_sdk, opaque_token) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const _root = Object.create(null);
  const src__location__location_strategy = Object.create(_root);
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  src__location__location_strategy.LocationStrategy = class LocationStrategy extends core.Object {};
  (src__location__location_strategy.LocationStrategy.new = function() {
  }).prototype = src__location__location_strategy.LocationStrategy.prototype;
  dart.addTypeTests(src__location__location_strategy.LocationStrategy);
  dart.defineLazy(src__location__location_strategy, {
    /*src__location__location_strategy.appBaseHref*/get appBaseHref() {
      return dart.const(new (OpaqueTokenOfString()).new('appBaseHref'));
    },
    /*src__location__location_strategy.APP_BASE_HREF*/get APP_BASE_HREF() {
      return src__location__location_strategy.appBaseHref;
    }
  });
  dart.trackLibraries("packages/angular_router/src/location/location_strategy.ddc", {
    "package:angular_router/src/location/location_strategy.dart": src__location__location_strategy
  }, '{"version":3,"sourceRoot":"","sources":["location_strategy.dart"],"names":[],"mappings":";;;;;;;;;;;EA6BA;;;MAQM,4CAAW;YAAG,gBAAM,2BAAmB,CAAC;;MAGxC,8CAAa;YAAG,6CAAW","file":"location_strategy.ddc.js"}');
  // Exports:
  return {
    src__location__location_strategy: src__location__location_strategy
  };
});

//# sourceMappingURL=location_strategy.ddc.js.map
