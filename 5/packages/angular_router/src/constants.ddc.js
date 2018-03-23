define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/directives/router_link_directive', 'packages/angular_router/src/directives/router_link_active_directive', 'packages/angular_router/src/location/location_strategy', 'packages/angular_router/src/location/path_location_strategy', 'packages/angular/src/di/providers', 'packages/angular_router/src/location/platform_location', 'packages/angular_router/src/location/browser_platform_location', 'packages/angular_router/src/location/location', 'packages/angular_router/src/router/router_impl', 'packages/angular_router/src/location/hash_location_strategy'], function(dart_sdk, router_outlet_directive, router_link_directive, router_link_active_directive, location_strategy, path_location_strategy, providers, platform_location, browser_platform_location, location, router_impl, hash_location_strategy) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__directives__router_link_directive = router_link_directive.src__directives__router_link_directive;
  const src__directives__router_link_active_directive = router_link_active_directive.src__directives__router_link_active_directive;
  const src__location__location_strategy = location_strategy.src__location__location_strategy;
  const src__location__path_location_strategy = path_location_strategy.src__location__path_location_strategy;
  const src__di__providers = providers.src__di__providers;
  const src__location__platform_location = platform_location.src__location__platform_location;
  const src__location__browser_platform_location = browser_platform_location.src__location__browser_platform_location;
  const src__location__location = location.src__location__location;
  const src__router__router_impl = router_impl.src__router__router_impl;
  const src__location__hash_location_strategy = hash_location_strategy.src__location__hash_location_strategy;
  const _root = Object.create(null);
  const src__constants = Object.create(_root);
  dart.defineLazy(src__constants, {
    /*src__constants.routerDirectives*/get routerDirectives() {
      return dart.constList([dart.wrapType(src__directives__router_outlet_directive.RouterOutlet), dart.wrapType(src__directives__router_link_directive.RouterLink), dart.wrapType(src__directives__router_link_active_directive.RouterLinkActive)], core.Type);
    },
    /*src__constants.routerProviders*/get routerProviders() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__location_strategy.LocationStrategy), {useClass: dart.wrapType(src__location__path_location_strategy.PathLocationStrategy)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__platform_location.PlatformLocation), {useClass: dart.wrapType(src__location__browser_platform_location.BrowserPlatformLocation)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__location.Location))), dart.const(src__di__providers.Provider.new(dart.wrapType(src__router__router.Router), {useClass: dart.wrapType(src__router__router_impl.RouterImpl)}))], src__di__providers.Provider);
    },
    /*src__constants.routerProvidersHash*/get routerProvidersHash() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__location_strategy.LocationStrategy), {useClass: dart.wrapType(src__location__hash_location_strategy.HashLocationStrategy)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__platform_location.PlatformLocation), {useClass: dart.wrapType(src__location__browser_platform_location.BrowserPlatformLocation)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__location__location.Location))), dart.const(src__di__providers.Provider.new(dart.wrapType(src__router__router.Router), {useClass: dart.wrapType(src__router__router_impl.RouterImpl)}))], src__di__providers.Provider);
    }
  });
  dart.trackLibraries("packages/angular_router/src/constants.ddc", {
    "package:angular_router/src/constants.dart": src__constants
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAyBM,+BAAgB;YAAG,iBAAO,oEAAY,EAAE,gEAAU,EAAE,6EAAgB;;MASpE,8BAAe;YAAG,iBACtB,WAAM,+BAAQ,CAAC,gEAAgB,aAAY,yEAAoB,KAC/D,WAAM,+BAAQ,CAAC,gEAAgB,aAAY,+EAAuB,KAClE,WAAM,+BAAQ,CAAC,+CAAQ,IACvB,WAAM,+BAAQ,CAAC,yCAAM,aAAY,kDAAU;;MAUvC,kCAAmB;YAAG,iBAC1B,WAAM,+BAAQ,CAAC,gEAAgB,aAAY,yEAAoB,KAC/D,WAAM,+BAAQ,CAAC,gEAAgB,aAAY,+EAAuB,KAClE,WAAM,+BAAQ,CAAC,+CAAQ,IACvB,WAAM,+BAAQ,CAAC,yCAAM,aAAY,kDAAU","file":"constants.ddc.js"}');
  // Exports:
  return {
    src__constants: src__constants
  };
});

//# sourceMappingURL=constants.ddc.js.map
