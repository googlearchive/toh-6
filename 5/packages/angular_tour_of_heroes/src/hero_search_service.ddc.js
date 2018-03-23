define(['dart_sdk', 'packages/angular_tour_of_heroes/src/hero', 'packages/http/src/base_client'], function(dart_sdk, hero, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const src__response = base_client.src__response;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const src__hero_search_service = Object.create(_root);
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToHero = () => (dynamicToHero = dart.constFn(dart.fnType(src__hero.Hero, [dart.dynamic])))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  let FutureOrOfListOfHero = () => (FutureOrOfListOfHero = dart.constFn(async.FutureOr$(ListOfHero())))();
  const _http = Symbol('_http');
  const _extractData = Symbol('_extractData');
  const _handleError = Symbol('_handleError');
  src__hero_search_service.HeroSearchService = class HeroSearchService extends core.Object {
    search(term) {
      return async.async(ListOfHero(), (function* search() {
        try {
          let response = (yield this[_http].get(dart.str`app/heroes/?name=${term}`));
          return FutureOrOfListOfHero()._check(dart.dsend(dart.dsend(this[_extractData](response), 'map', dart.fn(json => src__hero.Hero.fromJson(MapOfString$dynamic()._check(json)), dynamicToHero())), 'toList'));
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
  };
  (src__hero_search_service.HeroSearchService.new = function(http) {
    this[_http] = http;
  }).prototype = src__hero_search_service.HeroSearchService.prototype;
  dart.addTypeTests(src__hero_search_service.HeroSearchService);
  dart.setMethodSignature(src__hero_search_service.HeroSearchService, () => ({
    __proto__: dart.getMethods(src__hero_search_service.HeroSearchService.__proto__),
    search: dart.fnType(async.Future$(core.List$(src__hero.Hero)), [core.String]),
    [_extractData]: dart.fnType(dart.dynamic, [src__response.Response]),
    [_handleError]: dart.fnType(core.Exception, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_search_service.HeroSearchService, () => ({
    __proto__: dart.getFields(src__hero_search_service.HeroSearchService.__proto__),
    [_http]: dart.finalFieldType(src__client.Client)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero_search_service.ddc", {
    "package:angular_tour_of_heroes/src/hero_search_service.dart": src__hero_search_service
  }, '{"version":3,"sourceRoot":"","sources":["hero_search_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;WAc4B,IAAW;AAAE;AACrC,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,IAAI,CAAC,4BAAmB,IAAI;AACxD,qEAAO,kBAAY,CAAC,QAAQ,UACnB,QAAC,IAAI,IAAK,AAAI,uBAAa,8BAAC,IAAI;iBAElC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;mBAEqB,IAAa;yBAAK,YAAI,OAAO,CAAC,IAAI,KAAK,GAAE;IAAO;mBAE9C,CAAS;AAC9B,gBAAK,CAAC,CAAC;AACP,YAAO,AAAI,mBAAS,CAAC,gCAAuB,CAAC;IAC/C;;6DAlBuB,IAAK;IAAL,WAAK,GAAL,IAAK;EAAC","file":"hero_search_service.ddc.js"}');
  // Exports:
  return {
    src__hero_search_service: src__hero_search_service
  };
});

//# sourceMappingURL=hero_search_service.ddc.js.map
