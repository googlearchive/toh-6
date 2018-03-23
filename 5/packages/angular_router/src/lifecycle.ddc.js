define(['dart_sdk', 'packages/angular_router/src/router/router_state'], function(dart_sdk, router_state) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__router__router_state = router_state.src__router__router_state;
  const _root = Object.create(null);
  const src__lifecycle = Object.create(_root);
  src__lifecycle.CanActivate = class CanActivate extends core.Object {
    canActivate(current, next) {
      return async.async(core.bool, function* canActivate() {
        return true;
      });
    }
  };
  (src__lifecycle.CanActivate.new = function() {
  }).prototype = src__lifecycle.CanActivate.prototype;
  dart.addTypeTests(src__lifecycle.CanActivate);
  dart.setMethodSignature(src__lifecycle.CanActivate, () => ({
    __proto__: dart.getMethods(src__lifecycle.CanActivate.__proto__),
    canActivate: dart.fnType(async.Future$(core.bool), [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  src__lifecycle.CanDeactivate = class CanDeactivate extends core.Object {
    canDeactivate(current, next) {
      return async.async(core.bool, function* canDeactivate() {
        return true;
      });
    }
  };
  (src__lifecycle.CanDeactivate.new = function() {
  }).prototype = src__lifecycle.CanDeactivate.prototype;
  dart.addTypeTests(src__lifecycle.CanDeactivate);
  dart.setMethodSignature(src__lifecycle.CanDeactivate, () => ({
    __proto__: dart.getMethods(src__lifecycle.CanDeactivate.__proto__),
    canDeactivate: dart.fnType(async.Future$(core.bool), [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  src__lifecycle.CanNavigate = class CanNavigate extends core.Object {};
  (src__lifecycle.CanNavigate.new = function() {
  }).prototype = src__lifecycle.CanNavigate.prototype;
  dart.addTypeTests(src__lifecycle.CanNavigate);
  src__lifecycle.CanReuse = class CanReuse extends core.Object {
    canReuse(current, next) {
      return async.async(core.bool, function* canReuse() {
        return true;
      });
    }
  };
  (src__lifecycle.CanReuse.new = function() {
  }).prototype = src__lifecycle.CanReuse.prototype;
  dart.addTypeTests(src__lifecycle.CanReuse);
  dart.setMethodSignature(src__lifecycle.CanReuse, () => ({
    __proto__: dart.getMethods(src__lifecycle.CanReuse.__proto__),
    canReuse: dart.fnType(async.Future$(core.bool), [src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  src__lifecycle.OnActivate = class OnActivate extends core.Object {};
  (src__lifecycle.OnActivate.new = function() {
  }).prototype = src__lifecycle.OnActivate.prototype;
  dart.addTypeTests(src__lifecycle.OnActivate);
  src__lifecycle.OnDeactivate = class OnDeactivate extends core.Object {};
  (src__lifecycle.OnDeactivate.new = function() {
  }).prototype = src__lifecycle.OnDeactivate.prototype;
  dart.addTypeTests(src__lifecycle.OnDeactivate);
  dart.trackLibraries("packages/angular_router/src/lifecycle.ddc", {
    "package:angular_router/src/lifecycle.dart": src__lifecycle
  }, '{"version":3,"sourceRoot":"","sources":["lifecycle.dart"],"names":[],"mappings":";;;;;;;;;;gBA0C2B,OAAmB,EAAE,IAAgB;AAAE;AAE9D,cAAO;MACT;;;;EACF;;;;;;;kBAiC6B,OAAmB,EAAE,IAAgB;AAAE;AAEhE,cAAO;MACT;;;;EACF;;;;;;;;EA6BA;;;aAmCwB,OAAmB,EAAE,IAAgB;AAAE;AAE3D,cAAO;MACT;;;;EACF;;;;;;;;EA2BA;;;;EAaA","file":"lifecycle.ddc.js"}');
  // Exports:
  return {
    src__lifecycle: src__lifecycle
  };
});

//# sourceMappingURL=lifecycle.ddc.js.map
