define(['dart_sdk', 'packages/angular_tour_of_heroes/src/routes'], function(dart_sdk, routes) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__routes = routes.src__routes;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  app_component.AppComponent = class AppComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
  };
  (app_component.AppComponent.new = function(routes) {
    this[title] = 'Tour of Heroes';
    this[routes$] = routes;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const title = Symbol("AppComponent.title");
  const routes$ = Symbol("AppComponent.routes");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    title: dart.finalFieldType(core.String),
    routes: dart.finalFieldType(src__routes.Routes)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/app_component.ddc", {
    "package:angular_tour_of_heroes/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;IAuBQ;;;;;;IACO;;;;;;;6CAEA,MAAW;IAHlB,WAAK,GAAG;IAGI,aAAM,GAAN,MAAM;EAAC","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
