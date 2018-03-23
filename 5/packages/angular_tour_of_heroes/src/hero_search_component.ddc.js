define(['dart_sdk', 'packages/stream_transform/src/switch', 'packages/angular_tour_of_heroes/src/hero', 'packages/stream_transform/src/debounce', 'packages/angular_tour_of_heroes/src/route_paths', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_tour_of_heroes/src/hero_search_service'], function(dart_sdk, $switch, hero, debounce, route_paths, lifecycle_hooks, router_outlet_directive, hero_search_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__switch = $switch.src__switch;
  const src__hero = hero.src__hero;
  const src__debounce = debounce.src__debounce;
  const src__route_paths = route_paths.src__route_paths;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__hero_search_service = hero_search_service.src__hero_search_service;
  const _root = Object.create(null);
  const src__hero_search_component = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $toString = dartx.toString;
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__hero.Hero)))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  let JSArrayOfListOfHero = () => (JSArrayOfListOfHero = dart.constFn(_interceptors.JSArray$(ListOfHero())))();
  let StreamOfListOfHero = () => (StreamOfListOfHero = dart.constFn(async.Stream$(ListOfHero())))();
  let StringToStreamOfListOfHero = () => (StringToStreamOfListOfHero = dart.constFn(dart.fnType(StreamOfListOfHero(), [core.String])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const _heroSearchService = Symbol('_heroSearchService');
  const _router = Symbol('_router');
  const _searchTerms = Symbol('_searchTerms');
  const _heroUrl = Symbol('_heroUrl');
  src__hero_search_component.HeroSearchComponent = class HeroSearchComponent extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    search(term) {
      return this[_searchTerms].add(term);
    }
    ngOnInit() {
      return async.async(dart.void, (function* ngOnInit() {
        this.heroes = this[_searchTerms].stream.transform(core.String, src__debounce.debounce(core.String, new core.Duration.new({milliseconds: 300}))).distinct().transform(ListOfHero(), src__switch.switchMap(core.String, ListOfHero(), dart.fn(term => term[$isEmpty] ? StreamOfListOfHero().fromIterable(JSArrayOfListOfHero().of([JSArrayOfHero().of([])])) : this[_heroSearchService].search(term).asStream(), StringToStreamOfListOfHero()))).handleError(dart.fn(e => {
          core.print(e);
        }, dynamicToNull()));
      }).bind(this));
    }
    [_heroUrl](id) {
      return src__route_paths.hero.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.toString(id)])});
    }
    gotoDetail(hero) {
      return this[_router].navigate(this[_heroUrl](hero.id));
    }
  };
  (src__hero_search_component.HeroSearchComponent.new = function(heroSearchService, router) {
    this[heroes] = null;
    this[_searchTerms] = StreamControllerOfString().broadcast();
    this[_heroSearchService] = heroSearchService;
    this[_router] = router;
  }).prototype = src__hero_search_component.HeroSearchComponent.prototype;
  dart.addTypeTests(src__hero_search_component.HeroSearchComponent);
  const heroes = Symbol("HeroSearchComponent.heroes");
  src__hero_search_component.HeroSearchComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__hero_search_component.HeroSearchComponent, () => ({
    __proto__: dart.getMethods(src__hero_search_component.HeroSearchComponent.__proto__),
    search: dart.fnType(dart.void, [core.String]),
    ngOnInit: dart.fnType(async.Future$(dart.void), []),
    [_heroUrl]: dart.fnType(core.String, [core.int]),
    gotoDetail: dart.fnType(async.Future$(src__router__router.NavigationResult), [src__hero.Hero])
  }));
  dart.setFieldSignature(src__hero_search_component.HeroSearchComponent, () => ({
    __proto__: dart.getFields(src__hero_search_component.HeroSearchComponent.__proto__),
    [_heroSearchService]: dart.fieldType(src__hero_search_service.HeroSearchService),
    [_router]: dart.fieldType(src__router__router.Router),
    heroes: dart.fieldType(StreamOfListOfHero()),
    [_searchTerms]: dart.fieldType(StreamControllerOfString())
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_search_component.ddc", {
    "package:angular_tour_of_heroes/src/hero_search_component.dart": src__hero_search_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_search_component.dart"],"names":[],"mappings":";;;;;;;;;;;QA4CM,gBAAK;;;;;;;;;;;;;;;;;;;;;IAtBU;;;;;;WAOP,IAAW;YAAK,mBAAY,IAAI,CAAC,IAAI;IAAC;;AAE1B;AACtB,mBAAM,GAAG,kBAAY,OAAO,UACd,cAAC,sBAAQ,cAAC,IAAI,iBAAQ,gBAAe,gBACtC,YACC,eAAC,qBAAS,4BAAC,QAAC,IAAI,IAAK,IAAI,UAAQ,GACrC,AAAI,iCAA+B,CAAC,0BAAC,4BACrC,wBAAkB,OAAO,CAAC,IAAI,UAAU,+CAClC,CAAC,QAAC,CAAC;AACjB,oBAAK,CAAC,CAAC;;MAEX;;eAEgB,EAAM;YAClB,AAAA,AAAM,iBAAD,KAAK,MAAM,cAAa,yCAAO,IAAO,gBAAE,EAAE;IAAa;eAE5B,IAAS;YACzC,cAAO,SAAS,CAAC,cAAQ,CAAC,IAAI,GAAG;IAAE;;iEArBd,iBAAkB,EAAO,MAAO;IAJtC,YAAM;IACA,kBAAY,GACjC,AAAI,oCAAkC;IAEjB,wBAAkB,GAAlB,iBAAkB;IAAO,aAAO,GAAP,MAAO;EAAG","file":"hero_search_component.ddc.js"}');
  // Exports:
  return {
    src__hero_search_component: src__hero_search_component
  };
});

//# sourceMappingURL=hero_search_component.ddc.js.map
