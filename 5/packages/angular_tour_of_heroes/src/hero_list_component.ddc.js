define(['dart_sdk', 'packages/angular_tour_of_heroes/src/route_paths', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_tour_of_heroes/src/hero', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_tour_of_heroes/src/hero_service'], function(dart_sdk, route_paths, lifecycle_hooks, hero, router_outlet_directive, hero_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_paths = route_paths.src__route_paths;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__hero = hero.src__hero;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__hero_service = hero_service.src__hero_service;
  const _root = Object.create(null);
  const src__hero_list_component = Object.create(_root);
  const $trim = dartx.trim;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $toString = dartx.toString;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  const _heroService = Symbol('_heroService');
  const _router = Symbol('_router');
  const _getHeroes = Symbol('_getHeroes');
  const _heroUrl = Symbol('_heroUrl');
  src__hero_list_component.HeroListComponent = class HeroListComponent extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    get selectedHero() {
      return this[selectedHero];
    }
    set selectedHero(value) {
      this[selectedHero] = value;
    }
    [_getHeroes]() {
      return async.async(dart.void, (function* _getHeroes() {
        this.heroes = (yield this[_heroService].getAll());
      }).bind(this));
    }
    add(name) {
      return async.async(dart.void, (function* add() {
        name = name[$trim]();
        if (name[$isEmpty]) return null;
        this.heroes[$add](yield this[_heroService].create(name));
        this.selectedHero = null;
      }).bind(this));
    }
    delete(hero) {
      return async.async(dart.void, (function* delete$() {
        yield this[_heroService].delete(hero.id);
        this.heroes[$remove](hero);
        if (dart.equals(this.selectedHero, hero)) this.selectedHero = null;
      }).bind(this));
    }
    ngOnInit() {
      return this[_getHeroes]();
    }
    onSelect(hero) {
      return this.selectedHero = hero;
    }
    [_heroUrl](id) {
      return src__route_paths.hero.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.toString(id)])});
    }
    gotoDetail() {
      return this[_router].navigate(this[_heroUrl](this.selectedHero.id));
    }
  };
  (src__hero_list_component.HeroListComponent.new = function(heroService, router) {
    this[heroes] = null;
    this[selectedHero] = null;
    this[_heroService] = heroService;
    this[_router] = router;
  }).prototype = src__hero_list_component.HeroListComponent.prototype;
  dart.addTypeTests(src__hero_list_component.HeroListComponent);
  const heroes = Symbol("HeroListComponent.heroes");
  const selectedHero = Symbol("HeroListComponent.selectedHero");
  src__hero_list_component.HeroListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getMethods(src__hero_list_component.HeroListComponent.__proto__),
    [_getHeroes]: dart.fnType(async.Future$(dart.void), []),
    add: dart.fnType(async.Future$(dart.void), [core.String]),
    delete: dart.fnType(async.Future$(dart.void), [src__hero.Hero]),
    ngOnInit: dart.fnType(dart.void, []),
    onSelect: dart.fnType(dart.void, [src__hero.Hero]),
    [_heroUrl]: dart.fnType(core.String, [core.int]),
    gotoDetail: dart.fnType(async.Future$(src__router__router.NavigationResult), [])
  }));
  dart.setFieldSignature(src__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getFields(src__hero_list_component.HeroListComponent.__proto__),
    [_heroService]: dart.finalFieldType(src__hero_service.HeroService),
    [_router]: dart.finalFieldType(src__router__router.Router),
    heroes: dart.fieldType(ListOfHero()),
    selectedHero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_list_component.ddc", {
    "package:angular_tour_of_heroes/src/hero_list_component.dart": src__hero_list_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.dart"],"names":[],"mappings":";;;;;;;QA+CM,gBAAK;;;;;;;;;;;;;;;;;;;IA3BE;;;;;;IACN;;;;;;;AAIqB;AACxB,mBAAM,IAAG,MAAM,kBAAY,OAAO;MACpC;;QAEiB,IAAW;AAAE;AAC5B,YAAI,GAAG,IAAI,OAAK;AAChB,YAAI,IAAI,UAAQ,EAAE,MAAO;AACzB,mBAAM,MAAI,CAAC,MAAM,kBAAY,OAAO,CAAC,IAAI;AACzC,yBAAY,GAAG;MACjB;;WAEoB,IAAS;AAAE;AAC7B,cAAM,kBAAY,OAAO,CAAC,IAAI,GAAG;AACjC,mBAAM,SAAO,CAAC,IAAI;AAClB,wBAAI,iBAAY,EAAI,IAAI,GAAE,iBAAY,GAAG;MAC3C;;;YAEmB,iBAAU;IAAE;aAEjB,IAAS;YAAK,kBAAY,GAAG,IAAI;;eAE/B,EAAM;YAClB,AAAA,AAAM,iBAAD,KAAK,MAAM,cAAa,yCAAO,IAAO,gBAAE,EAAE;IAAa;;YAG5D,cAAO,SAAS,CAAC,cAAQ,CAAC,iBAAY,GAAG;IAAE;;6DA3BxB,WAAY,EAAO,MAAO;IAHtC,YAAM;IACZ,kBAAY;IAEM,kBAAY,GAAZ,WAAY;IAAO,aAAO,GAAP,MAAO;EAAC","file":"hero_list_component.ddc.js"}');
  // Exports:
  return {
    src__hero_list_component: src__hero_list_component
  };
});

//# sourceMappingURL=hero_list_component.ddc.js.map
