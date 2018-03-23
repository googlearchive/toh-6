define(['dart_sdk', 'packages/angular_tour_of_heroes/src/route_paths', 'packages/angular_router/src/route_definition', 'packages/angular_tour_of_heroes/src/hero_list_component.template', 'packages/angular_tour_of_heroes/src/dashboard_component.template', 'packages/angular_tour_of_heroes/src/hero_component.template'], function(dart_sdk, route_paths, route_definition, hero_list_component, dashboard_component, hero_component) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_paths = route_paths.src__route_paths;
  const src__route_definition = route_definition.src__route_definition;
  const src__hero_list_component$46template = hero_list_component.src__hero_list_component$46template;
  const src__dashboard_component$46template = dashboard_component.src__dashboard_component$46template;
  const src__hero_component$46template = hero_component.src__hero_component$46template;
  const _root = Object.create(null);
  const src__routes = Object.create(_root);
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(src__route_definition.RouteDefinition)))();
  src__routes.Routes = class Routes extends core.Object {
    get heroes() {
      return src__routes.Routes._heroes;
    }
    get dashboard() {
      return src__routes.Routes._dashboard;
    }
    get hero() {
      return src__routes.Routes._hero;
    }
    get all() {
      return this[all];
    }
    set all(value) {
      super.all = value;
    }
  };
  (src__routes.Routes.new = function() {
    this[all] = JSArrayOfRouteDefinition().of([src__route_definition.RouteDefinition.redirect({path: '', redirectTo: src__route_paths.dashboard.toUrl()}), src__routes.Routes._dashboard, src__routes.Routes._hero, src__routes.Routes._heroes]);
  }).prototype = src__routes.Routes.prototype;
  dart.addTypeTests(src__routes.Routes);
  const all = Symbol("Routes.all");
  dart.setGetterSignature(src__routes.Routes, () => ({
    __proto__: dart.getGetters(src__routes.Routes.__proto__),
    heroes: dart.fnType(src__route_definition.RouteDefinition, []),
    dashboard: dart.fnType(src__route_definition.RouteDefinition, []),
    hero: dart.fnType(src__route_definition.RouteDefinition, [])
  }));
  dart.setFieldSignature(src__routes.Routes, () => ({
    __proto__: dart.getFields(src__routes.Routes.__proto__),
    all: dart.finalFieldType(ListOfRouteDefinition())
  }));
  dart.defineLazy(src__routes.Routes, {
    /*src__routes.Routes._heroes*/get _heroes() {
      return src__route_definition.RouteDefinition.new({routePath: src__route_paths.heroes, component: src__hero_list_component$46template.HeroListComponentNgFactory});
    },
    /*src__routes.Routes._dashboard*/get _dashboard() {
      return src__route_definition.RouteDefinition.new({routePath: src__route_paths.dashboard, component: src__dashboard_component$46template.DashboardComponentNgFactory});
    },
    /*src__routes.Routes._hero*/get _hero() {
      return src__route_definition.RouteDefinition.new({routePath: src__route_paths.hero, component: src__hero_component$46template.HeroComponentNgFactory});
    }
  });
  dart.trackLibraries("packages/angular_tour_of_heroes/src/routes.ddc", {
    "package:angular_tour_of_heroes/src/routes.dart": src__routes
  }, '{"version":3,"sourceRoot":"","sources":["routes.dart"],"names":[],"mappings":";;;;;;QAyBe,gBAAK;;QAbL,mCAAI;QAOJ,mCAAG;QAOH,8BAAG;;;;;;;YAXc,2BAAO;;;YAOJ,8BAAU;;;YAOf,yBAAK;;IAEL;;;;;;;;aAAG,GAAG,+BAChC,AAAI,8CAAwB,QAAO,gBAPxB,AAOwC,AAAM,gBAPzC,UAOkD,MAAM,MACxE,6BAAU,EACV,wBAAK,EACL,0BAAO;EAEX;;;;;;;;;;;;;;MA3Be,0BAAO;YAAG,AAAI,0CAAe,aACvB,AAcN,gBAAK,OAdO,aACZ,AAAK,mCAAD,2BAA2B;;MAK/B,6BAAU;YAAG,AAAI,0CAAe,aAC1B,AAON,gBAAK,UAPU,aACf,AAAI,mCAAD,4BAA4B;;MAK/B,wBAAK;YAAG,AAAI,0CAAe,aAC3B,AAAM,gBAAD,KAAK,aACV,AAAI,8BAAD,uBAAuB","file":"routes.ddc.js"}');
  // Exports:
  return {
    src__routes: src__routes
  };
});

//# sourceMappingURL=routes.ddc.js.map
