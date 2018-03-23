define(['dart_sdk', 'packages/angular_router/src/url', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/metadata', 'packages/angular_router/src/location/location'], function(dart_sdk, url, optimizations, app_view, metadata, location) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__url = url.src__url;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__metadata = metadata.src__core__metadata;
  const src__location__location = location.src__location__location;
  const _root = Object.create(null);
  const src__route_definition = Object.create(_root);
  const src__route_path = Object.create(_root);
  const $map = dartx.map;
  const $replaceAll = dartx.replaceAll;
  const $_get = dartx._get;
  const $replaceFirst = dartx.replaceFirst;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $length = dartx.length;
  const $take = dartx.take;
  const $keys = dartx.keys;
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let FutureOfComponentFactory = () => (FutureOfComponentFactory = dart.constFn(async.Future$(src__core__linker__component_factory.ComponentFactory)))();
  let VoidToFutureOfComponentFactory = () => (VoidToFutureOfComponentFactory = dart.constFn(dart.fnType(FutureOfComponentFactory(), [])))();
  let const$;
  src__route_definition.RouteDefinition = class RouteDefinition extends core.Object {
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    get useAsDefault() {
      return this[useAsDefault$];
    }
    set useAsDefault(value) {
      super.useAsDefault = value;
    }
    get additionalData() {
      return this[additionalData$];
    }
    set additionalData(value) {
      super.additionalData = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.path == null) {
        dart.throw(new core.StateError.new('Must have a non-null `path` string'));
      }
    }
    static new(opts) {
      return new src__route_definition.ComponentRouteDefinition.__(opts);
    }
    static defer(opts) {
      return new src__route_definition.DeferredRouteDefinition.__(opts);
    }
    static redirect(opts) {
      return new src__route_definition.RedirectRouteDefinition.__(opts);
    }
    get parameters() {
      return src__route_definition.RouteDefinition._findParameters.allMatches(this.path)[$map](core.String, dart.fn(m => m._get(1), MatchToString()));
    }
    toRegExp() {
      return core.RegExp.new('/?' + this.path[$replaceAll](src__route_definition.RouteDefinition._findParameters, "((?:[\\w'\\.\\-~!\\$&\\(\\)\\*\\+,;=:@]|%[0-9a-fA-F]{2})+)"));
    }
    toUrl(paramValues) {
      if (paramValues === void 0) paramValues = const$ || (const$ = dart.constMap(core.String, core.String, []));
      if (dart.test(src__runtime__optimizations.isDevMode) && paramValues == null) {
        dart.throw(new core.ArgumentError.notNull('paramValues'));
      }
      let url = '/' + dart.notNull(this.path);
      for (let parameter of this.parameters) {
        url = url[$replaceFirst](dart.str`:${parameter}`, core.Uri.encodeComponent(paramValues[$_get](parameter)));
      }
      return url;
    }
  };
  (src__route_definition.RouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[path$] = src__url.Url.trimSlashes(path != null ? path : routePath == null ? null : routePath.path);
    let l = useAsDefault != null ? useAsDefault : routePath == null ? null : routePath.useAsDefault;
    this[useAsDefault$] = l != null ? l : false;
    this[additionalData$] = additionalData != null ? additionalData : routePath == null ? null : routePath.additionalData;
  }).prototype = src__route_definition.RouteDefinition.prototype;
  dart.addTypeTests(src__route_definition.RouteDefinition);
  const path$ = Symbol("RouteDefinition.path");
  const useAsDefault$ = Symbol("RouteDefinition.useAsDefault");
  const additionalData$ = Symbol("RouteDefinition.additionalData");
  dart.setMethodSignature(src__route_definition.RouteDefinition, () => ({
    __proto__: dart.getMethods(src__route_definition.RouteDefinition.__proto__),
    assertValid: dart.fnType(dart.void, []),
    toRegExp: dart.fnType(core.RegExp, []),
    toUrl: dart.fnType(core.String, [], [MapOfString$String()])
  }));
  dart.setGetterSignature(src__route_definition.RouteDefinition, () => ({
    __proto__: dart.getGetters(src__route_definition.RouteDefinition.__proto__),
    parameters: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setFieldSignature(src__route_definition.RouteDefinition, () => ({
    __proto__: dart.getFields(src__route_definition.RouteDefinition.__proto__),
    path: dart.finalFieldType(core.String),
    useAsDefault: dart.finalFieldType(core.bool),
    additionalData: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineLazy(src__route_definition.RouteDefinition, {
    /*src__route_definition.RouteDefinition._findParameters*/get _findParameters() {
      return core.RegExp.new(':([\\w-]+)');
    }
  });
  src__route_definition.LoadComponentAsync = dart.typedef('LoadComponentAsync', () => dart.fnType(async.Future$(src__core__linker__component_factory.ComponentFactory), []));
  src__route_definition.ComponentRouteDefinition = class ComponentRouteDefinition extends src__route_definition.RouteDefinition {
    get component() {
      return this[component$];
    }
    set component(value) {
      super.component = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (!core.Type.is(this.component) && !src__core__linker__component_factory.ComponentFactory.is(this.component)) {
        dart.throw(new core.StateError.new(dart.str`Must have a valid (non-null) \`component\` type (got ${dart.wrapType(src__core__metadata.Component)}).`));
      }
      super.assertValid();
    }
  };
  (src__route_definition.ComponentRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let component = opts && 'component' in opts ? opts.component : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[component$] = component;
    src__route_definition.ComponentRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
  }).prototype = src__route_definition.ComponentRouteDefinition.prototype;
  dart.addTypeTests(src__route_definition.ComponentRouteDefinition);
  const component$ = Symbol("ComponentRouteDefinition.component");
  dart.setFieldSignature(src__route_definition.ComponentRouteDefinition, () => ({
    __proto__: dart.getFields(src__route_definition.ComponentRouteDefinition.__proto__),
    component: dart.finalFieldType(src__core__linker__component_factory.ComponentFactory)
  }));
  src__route_definition.DeferredRouteDefinition = class DeferredRouteDefinition extends src__route_definition.RouteDefinition {
    get loader() {
      return this[loader$];
    }
    set loader(value) {
      super.loader = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.loader == null) {
        dart.throw(new core.StateError.new('Must have a non-null `loader` function'));
      }
      super.assertValid();
    }
  };
  (src__route_definition.DeferredRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let loader = opts && 'loader' in opts ? opts.loader : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[loader$] = loader;
    src__route_definition.DeferredRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
  }).prototype = src__route_definition.DeferredRouteDefinition.prototype;
  dart.addTypeTests(src__route_definition.DeferredRouteDefinition);
  const loader$ = Symbol("DeferredRouteDefinition.loader");
  dart.setFieldSignature(src__route_definition.DeferredRouteDefinition, () => ({
    __proto__: dart.getFields(src__route_definition.DeferredRouteDefinition.__proto__),
    loader: dart.finalFieldType(VoidToFutureOfComponentFactory())
  }));
  src__route_definition.RedirectRouteDefinition = class RedirectRouteDefinition extends src__route_definition.RouteDefinition {
    get redirectTo() {
      return this[redirectTo$];
    }
    set redirectTo(value) {
      super.redirectTo = value;
    }
    assertValid() {
      if (!dart.test(src__runtime__optimizations.isDevMode)) {
        return;
      }
      if (this.redirectTo == null) {
        dart.throw(new core.StateError.new('Must have a non-null `redirectTo` string'));
      }
      if (this.redirectTo == this.path) {
        dart.throw(new core.StateError.new('Cannot redirect from `redirectTo` to `path'));
      }
      super.assertValid();
    }
  };
  (src__route_definition.RedirectRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let redirectTo = opts && 'redirectTo' in opts ? opts.redirectTo : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[redirectTo$] = redirectTo;
    src__route_definition.RedirectRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
  }).prototype = src__route_definition.RedirectRouteDefinition.prototype;
  dart.addTypeTests(src__route_definition.RedirectRouteDefinition);
  const redirectTo$ = Symbol("RedirectRouteDefinition.redirectTo");
  dart.setFieldSignature(src__route_definition.RedirectRouteDefinition, () => ({
    __proto__: dart.getFields(src__route_definition.RedirectRouteDefinition.__proto__),
    redirectTo: dart.finalFieldType(core.String)
  }));
  src__route_path.RoutePath = class RoutePath extends core.Object {
    get path() {
      return this[path$0];
    }
    set path(value) {
      super.path = value;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get useAsDefault() {
      return this[useAsDefault$0];
    }
    set useAsDefault(value) {
      super.useAsDefault = value;
    }
    get additionalData() {
      return this[additionalData$0];
    }
    set additionalData(value) {
      super.additionalData = value;
    }
    toUrl(opts) {
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let fragment = opts && 'fragment' in opts ? opts.fragment : null;
      let parentUrl = this.parent != null ? this.parent.toUrl() : '/';
      let url = src__location__location.Location.joinWithSlash(parentUrl, this.path);
      if (parameters != null) {
        for (let key of parameters[$keys]) {
          url = url[$replaceFirst](dart.str`:${key}`, core.Uri.encodeComponent(parameters[$_get](key)));
        }
      }
      return new src__url.Url.new(url, {queryParameters: queryParameters, fragment: fragment}).toString();
    }
  };
  (src__route_path.RoutePath.new = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : false;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    this[parent$] = parent;
    this[useAsDefault$0] = useAsDefault;
    this[additionalData$0] = additionalData;
    this[path$0] = src__url.Url.trimSlashes(path);
  }).prototype = src__route_path.RoutePath.prototype;
  (src__route_path.RoutePath.fromRoutes = function(routes) {
    this[path$0] = dart.test(routes[$isNotEmpty]) ? src__url.Url.trimSlashes(routes[$last].path) : '';
    this[useAsDefault$0] = dart.test(routes[$isNotEmpty]) ? routes[$last].useAsDefault : false;
    this[additionalData$0] = dart.test(routes[$isNotEmpty]) ? routes[$last].additionalData : null;
    this[parent$] = dart.notNull(routes[$length]) > 1 ? new src__route_path.RoutePath.fromRoutes(routes[$take](dart.notNull(routes[$length]) - 1)) : null;
  }).prototype = src__route_path.RoutePath.prototype;
  dart.addTypeTests(src__route_path.RoutePath);
  const path$0 = Symbol("RoutePath.path");
  const parent$ = Symbol("RoutePath.parent");
  const useAsDefault$0 = Symbol("RoutePath.useAsDefault");
  const additionalData$0 = Symbol("RoutePath.additionalData");
  dart.setMethodSignature(src__route_path.RoutePath, () => ({
    __proto__: dart.getMethods(src__route_path.RoutePath.__proto__),
    toUrl: dart.fnType(core.String, [], {parameters: MapOfString$String(), queryParameters: MapOfString$String(), fragment: core.String})
  }));
  dart.setFieldSignature(src__route_path.RoutePath, () => ({
    __proto__: dart.getFields(src__route_path.RoutePath.__proto__),
    path: dart.finalFieldType(core.String),
    parent: dart.finalFieldType(src__route_path.RoutePath),
    useAsDefault: dart.finalFieldType(core.bool),
    additionalData: dart.finalFieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/angular_router/src/route_definition.ddc", {
    "package:angular_router/src/route_definition.dart": src__route_definition,
    "package:angular_router/src/route_path.dart": src__route_path
  }, '{"version":3,"sourceRoot":"","sources":["route_definition.dart","route_path.dart"],"names":[],"mappings":"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","file":"route_definition.ddc.js"}');
  // Exports:
  return {
    src__route_definition: src__route_definition,
    src__route_path: src__route_path
  };
});

//# sourceMappingURL=route_definition.ddc.js.map
