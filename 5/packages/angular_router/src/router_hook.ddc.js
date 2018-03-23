define(['dart_sdk', 'packages/angular_router/src/router/navigation_params', 'packages/angular_router/src/router/router_state'], function(dart_sdk, navigation_params, router_state) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__router__navigation_params = navigation_params.src__router__navigation_params;
  const src__router__router_state = router_state.src__router__router_state;
  const _root = Object.create(null);
  const src__router_hook = Object.create(_root);
  src__router_hook.RouterHook = class RouterHook extends core.Object {
    navigationPath(path, params) {
      return async.async(core.String, function* navigationPath() {
        return path;
      });
    }
    navigationParams(path, params) {
      return async.async(src__router__navigation_params.NavigationParams, function* navigationParams() {
        return params;
      });
    }
    canActivate(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canActivate() {
        return true;
      });
    }
    canDeactivate(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canDeactivate() {
        return true;
      });
    }
    canReuse(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canReuse() {
        return false;
      });
    }
  };
  (src__router_hook.RouterHook.new = function() {
  }).prototype = src__router_hook.RouterHook.prototype;
  dart.addTypeTests(src__router_hook.RouterHook);
  dart.setMethodSignature(src__router_hook.RouterHook, () => ({
    __proto__: dart.getMethods(src__router_hook.RouterHook.__proto__),
    navigationPath: dart.fnType(async.Future$(core.String), [core.String, src__router__navigation_params.NavigationParams]),
    navigationParams: dart.fnType(async.Future$(src__router__navigation_params.NavigationParams), [core.String, src__router__navigation_params.NavigationParams]),
    canActivate: dart.fnType(async.Future$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState]),
    canDeactivate: dart.fnType(async.Future$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState]),
    canReuse: dart.fnType(async.Future$(core.bool), [core.Object, src__router__router_state.RouterState, src__router__router_state.RouterState])
  }));
  dart.trackLibraries("packages/angular_router/src/router_hook.ddc", {
    "package:angular_router/src/router_hook.dart": src__router_hook
  }, '{"version":3,"sourceRoot":"","sources":["router_hook.dart"],"names":[],"mappings":";;;;;;;;;;;mBA2CgC,IAAW,EAAE,MAAuB;AAAE;AAElE,cAAO,KAAI;MACb;;qBA2BI,IAAW,EAAE,MAAuB;AAAE;AAExC,cAAO,OAAM;MACf;;gBAwByB,iBAAwB,EAAE,QAAoB,EACnE,QAAoB;AAAE;AAExB,cAAO;MACT;;kBAuB2B,iBAAwB,EAAE,QAAoB,EACrE,QAAoB;AAAE;AAExB,cAAO;MACT;;aAqBsB,iBAAwB,EAAE,QAAoB,EAChE,QAAoB;AAAE;AAExB,cAAO;MACT;;;;EACF","file":"router_hook.ddc.js"}');
  // Exports:
  return {
    src__router_hook: src__router_hook
  };
});

//# sourceMappingURL=router_hook.ddc.js.map
