define(['dart_sdk', 'packages/angular_tour_of_heroes/src/hero', 'packages/http/src/base_client'], function(dart_sdk, hero, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const src__response = base_client.src__response;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const src__hero_service = Object.create(_root);
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToHero = () => (dynamicToHero = dart.constFn(dart.fnType(src__hero.Hero, [dart.dynamic])))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  let FutureOrOfListOfHero = () => (FutureOrOfListOfHero = dart.constFn(async.FutureOr$(ListOfHero())))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const _http = Symbol('_http');
  const _extractData = Symbol('_extractData');
  const _handleError = Symbol('_handleError');
  src__hero_service.HeroService = class HeroService extends core.Object {
    getAll() {
      return async.async(ListOfHero(), (function* getAll() {
        try {
          let response = (yield this[_http].get("api/heroes"));
          let heroes = dart.dsend(dart.dsend(this[_extractData](response), 'map', dart.fn(value => src__hero.Hero.fromJson(MapOfString$dynamic()._check(value)), dynamicToHero())), 'toList');
          return FutureOrOfListOfHero()._check(heroes);
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    [_extractData](resp) {
      return dart.dindex(convert.json.decode(resp.body), 'data');
    }
    [_handleError](e) {
      core.print(e);
      return core.Exception.new(dart.str`Server error; cause: ${e}`);
    }
    get(id) {
      return async.async(src__hero.Hero, (function* get() {
        try {
          let response = (yield this[_http].get(dart.str`${"api/heroes"}/${id}`));
          return src__hero.Hero.fromJson(MapOfString$dynamic()._check(this[_extractData](response)));
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    create(name) {
      return async.async(src__hero.Hero, (function* create() {
        try {
          let response = (yield this[_http].post("api/heroes", {headers: src__hero_service.HeroService._headers, body: convert.json.encode(new (IdentityMapOfString$String()).from(['name', name]))}));
          return src__hero.Hero.fromJson(MapOfString$dynamic()._check(this[_extractData](response)));
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    update(hero) {
      return async.async(src__hero.Hero, (function* update() {
        try {
          let url = dart.str`${"api/heroes"}/${hero.id}`;
          let response = (yield this[_http].put(url, {headers: src__hero_service.HeroService._headers, body: convert.json.encode(hero)}));
          return src__hero.Hero.fromJson(MapOfString$dynamic()._check(this[_extractData](response)));
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    delete(id) {
      return async.async(dart.void, (function* delete$() {
        try {
          let url = dart.str`${"api/heroes"}/${id}`;
          yield this[_http].delete(url, {headers: src__hero_service.HeroService._headers});
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
  };
  (src__hero_service.HeroService.new = function(http) {
    this[_http] = http;
  }).prototype = src__hero_service.HeroService.prototype;
  dart.addTypeTests(src__hero_service.HeroService);
  dart.setMethodSignature(src__hero_service.HeroService, () => ({
    __proto__: dart.getMethods(src__hero_service.HeroService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(src__hero.Hero)), []),
    [_extractData]: dart.fnType(dart.dynamic, [src__response.Response]),
    [_handleError]: dart.fnType(core.Exception, [dart.dynamic]),
    get: dart.fnType(async.Future$(src__hero.Hero), [core.int]),
    create: dart.fnType(async.Future$(src__hero.Hero), [core.String]),
    update: dart.fnType(async.Future$(src__hero.Hero), [src__hero.Hero]),
    delete: dart.fnType(async.Future$(dart.void), [core.int])
  }));
  dart.setFieldSignature(src__hero_service.HeroService, () => ({
    __proto__: dart.getFields(src__hero_service.HeroService.__proto__),
    [_http]: dart.finalFieldType(src__client.Client)
  }));
  dart.defineLazy(src__hero_service.HeroService, {
    /*src__hero_service.HeroService._headers*/get _headers() {
      return new (IdentityMapOfString$String()).from(['Content-Type', 'application/json']);
    },
    /*src__hero_service.HeroService._heroesUrl*/get _heroesUrl() {
      return 'api/heroes';
    }
  });
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_service.ddc", {
    "package:angular_tour_of_heroes/src/hero_service.dart": src__hero_service
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAiB8B;AAC1B,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,IAAI,CAAC,YAAU;AAC3C,cAAM,+BAAS,kBAAY,CAAC,QAAQ,UAC3B,QAAC,KAAK,IAAK,AAAI,uBAAa,8BAAC,KAAK;AAE3C,+CAAO,MAAM;iBACN;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;mBAEqB,IAAa;yBAAK,YAAI,OAAO,CAAC,IAAI,KAAK,GAAE;IAAO;mBAE9C,CAAS;AAC9B,gBAAK,CAAC,CAAC;AACP,YAAO,AAAI,mBAAS,CAAC,gCAAuB,CAAC;IAC/C;QAEiB,EAAM;AAAE;AACvB,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,IAAI,CAAC,WAAE,YAAU,IAAE,EAAE;AACjD,gBAAO,AAAI,wBAAa,8BAAC,kBAAY,CAAC,QAAQ;iBACvC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;WAEoB,IAAW;AAAE;AAC/B,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,KAAK,CAAC,YAAU,YAC/B,sCAAQ,QAAQ,YAAI,OAAO,CAAC,yCAAC,QAAQ,IAAI;AACtD,gBAAO,AAAI,wBAAa,8BAAC,kBAAY,CAAC,QAAQ;iBACvC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;WAEoB,IAAS;AAAE;AAC7B,YAAI;AACF,cAAM,MAAM,WAAE,YAAU,IAAG,IAAI,GAAG;AAClC,cAAM,YACF,MAAM,WAAK,IAAI,CAAC,GAAG,YAAW,sCAAQ,QAAQ,YAAI,OAAO,CAAC,IAAI;AAClE,gBAAO,AAAI,wBAAa,8BAAC,kBAAY,CAAC,QAAQ;iBACvC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;WAEoB,EAAM;AAAE;AAC1B,YAAI;AACF,cAAM,MAAM,WAAE,YAAU,IAAE,EAAE;AAC5B,gBAAM,WAAK,OAAO,CAAC,GAAG,YAAW,sCAAQ;iBAClC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;;gDA1DiB,IAAK;IAAL,WAAK,GAAL,IAAK;EAAC;;;;;;;;;;;;;;;;;MALV,sCAAQ;YAAG,0CAAC,gBAAgB;;MAC5B,wCAAU;YAAG","file":"hero_service.ddc.js"}');
  // Exports:
  return {
    src__hero_service: src__hero_service
  };
});

//# sourceMappingURL=hero_service.ddc.js.map
