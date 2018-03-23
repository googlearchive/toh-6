define(['dart_sdk', 'packages/angular_router/src/lifecycle', 'packages/angular_router/src/router/router_state', 'packages/angular_tour_of_heroes/src/hero', 'packages/angular_tour_of_heroes/src/hero_service', 'packages/angular_router/src/location/location'], function(dart_sdk, lifecycle, router_state, hero, hero_service, location) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__lifecycle = lifecycle.src__lifecycle;
  const src__router__router_state = router_state.src__router__router_state;
  const src__hero = hero.src__hero;
  const src__hero_service = hero_service.src__hero_service;
  const src__location__location = location.src__location__location;
  const _root = Object.create(null);
  const src__hero_component = Object.create(_root);
  const $_get = dartx._get;
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  const _heroService = Symbol('_heroService');
  const _location = Symbol('_location');
  const _getId = Symbol('_getId');
  src__hero_component.HeroComponent = class HeroComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    onActivate(_, current) {
      return async.async(dart.void, (function* onActivate() {
        let id = this[_getId](current);
        if (id != null) this.hero = (yield this[_heroService].get(id));
      }).bind(this));
    }
    [_getId](routerState) {
      return core.int.parse((() => {
        let l = routerState.parameters[$_get]('id');
        return l != null ? l : '';
      })(), {onError: dart.fn(_ => null, StringToNull())});
    }
    save() {
      return async.async(dart.void, (function* save() {
        yield this[_heroService].update(this.hero);
        this.goBack();
      }).bind(this));
    }
    goBack() {
      return this[_location].back();
    }
  };
  (src__hero_component.HeroComponent.new = function(heroService, location) {
    this[hero$] = null;
    this[_heroService] = heroService;
    this[_location] = location;
  }).prototype = src__hero_component.HeroComponent.prototype;
  dart.addTypeTests(src__hero_component.HeroComponent);
  const hero$ = Symbol("HeroComponent.hero");
  src__hero_component.HeroComponent[dart.implements] = () => [src__lifecycle.OnActivate];
  dart.setMethodSignature(src__hero_component.HeroComponent, () => ({
    __proto__: dart.getMethods(src__hero_component.HeroComponent.__proto__),
    onActivate: dart.fnType(async.Future$(dart.void), [src__router__router_state.RouterState, src__router__router_state.RouterState]),
    [_getId]: dart.fnType(core.int, [src__router__router_state.RouterState]),
    save: dart.fnType(async.Future$(dart.void), []),
    goBack: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component.HeroComponent, () => ({
    __proto__: dart.getFields(src__hero_component.HeroComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero),
    [_heroService]: dart.finalFieldType(src__hero_service.HeroService),
    [_location]: dart.finalFieldType(src__location__location.Location)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_component.ddc", {
    "package:angular_tour_of_heroes/src/hero_component.dart": src__hero_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAgBO;;;;;;eAOmB,CAAC,EAAE,OAAmB;AAAE;AAC9C,YAAM,KAAK,YAAM,CAAC,OAAO;AACzB,YAAI,EAAE,IAAI,MAAM,SAAI,IAAG,MAAO,kBAAY,IAAI,CAAC,EAAE;MACnD;;aAEW,WAAuB;YAC9B,SAAG,MAAM;gBAAC,WAAW,WAAW,QAAC;+BAAS;sBAAa,QAAC,CAAC,IAAK;IAAK;;AAEnD;AAClB,cAAM,kBAAY,OAAO,CAAC,SAAI;AAC9B,mBAAM;MACR;;;YAEiB,gBAAS,KAAK;IAAE;;oDAhBd,WAAY,EAAO,QAAS;IAJ1C,WAAI;IAIU,kBAAY,GAAZ,WAAY;IAAO,eAAS,GAAT,QAAS;EAAC","file":"hero_component.ddc.js"}');
  // Exports:
  return {
    src__hero_component: src__hero_component
  };
});

//# sourceMappingURL=hero_component.ddc.js.map
