define(['dart_sdk', 'packages/angular_tour_of_heroes/src/hero', 'packages/http/src/base_client', 'packages/http/src/mock_client'], function(dart_sdk, hero, base_client, mock_client) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const src__response = base_client.src__response;
  const src__request = base_client.src__request;
  const src__mock_client = mock_client.src__mock_client;
  const _root = Object.create(null);
  const in_memory_data_service = Object.create(_root);
  const $last = dartx.last;
  const $firstWhere = dartx.firstWhere;
  const $_get = dartx._get;
  const $toList = dartx.toList;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $add = dartx.add;
  const $removeWhere = dartx.removeWhere;
  const $map = dartx.map;
  const $fold = dartx.fold;
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let HeroTobool = () => (HeroTobool = dart.constFn(dart.fnType(core.bool, [src__hero.Hero])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let MapOfString$ObjectToHero = () => (MapOfString$ObjectToHero = dart.constFn(dart.fnType(src__hero.Hero, [MapOfString$Object()])))();
  let HeroToint = () => (HeroToint = dart.constFn(dart.fnType(core.int, [src__hero.Hero])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let JSArrayOfMapOfString$Object = () => (JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(MapOfString$Object())))();
  in_memory_data_service.InMemoryDataService = class InMemoryDataService extends src__mock_client.MockClient {
    static _handler(request) {
      return async.async(src__response.Response, function* _handler() {
        if (in_memory_data_service.InMemoryDataService._heroesDb == null) in_memory_data_service.InMemoryDataService.resetDb();
        let data = null;
        switch (request.method) {
          case 'GET':
          {
            let id = core.int.parse(request.url.pathSegments[$last], {onError: dart.fn(_ => null, StringToNull())});
            if (id != null) {
              data = in_memory_data_service.InMemoryDataService._heroesDb[$firstWhere](dart.fn(hero => hero.id == id, HeroTobool()));
            } else {
              let l = request.url.queryParameters[$_get]('name');
              let prefix = l != null ? l : '';
              let regExp = core.RegExp.new(prefix, {caseSensitive: false});
              data = in_memory_data_service.InMemoryDataService._heroesDb[$where](dart.fn(hero => hero.name[$contains](regExp), HeroTobool()))[$toList]();
            }
            break;
          }
          case 'POST':
          {
            let name = dart.dindex(convert.json.decode(request.body), 'name');
            let newHero = new src__hero.Hero.new((() => {
              let x = in_memory_data_service.InMemoryDataService._nextId;
              in_memory_data_service.InMemoryDataService._nextId = dart.notNull(x) + 1;
              return x;
            })(), core.String._check(name));
            in_memory_data_service.InMemoryDataService._heroesDb[$add](newHero);
            data = newHero;
            break;
          }
          case 'PUT':
          {
            let heroChanges = src__hero.Hero.fromJson(MapOfString$dynamic()._check(convert.json.decode(request.body)));
            let targetHero = in_memory_data_service.InMemoryDataService._heroesDb[$firstWhere](dart.fn(h => h.id == heroChanges.id, HeroTobool()));
            targetHero.name = heroChanges.name;
            data = targetHero;
            break;
          }
          case 'DELETE':
          {
            let id = core.int.parse(request.url.pathSegments[$last]);
            in_memory_data_service.InMemoryDataService._heroesDb[$removeWhere](dart.fn(hero => hero.id == id, HeroTobool()));
            break;
          }
          default:
          {
            dart.throw(dart.str`Unimplemented HTTP method ${request.method}`);
          }
        }
        return new src__response.Response.new(convert.json.encode(new (IdentityMapOfString$dynamic()).from(['data', data])), 200, {headers: new (IdentityMapOfString$String()).from(['content-type', 'application/json'])});
      });
    }
    static resetDb() {
      in_memory_data_service.InMemoryDataService._heroesDb = in_memory_data_service.InMemoryDataService._initialHeroes[$map](src__hero.Hero, dart.fn(json => src__hero.Hero.fromJson(json), MapOfString$ObjectToHero()))[$toList]();
      in_memory_data_service.InMemoryDataService._nextId = dart.notNull(in_memory_data_service.InMemoryDataService._heroesDb[$map](core.int, dart.fn(hero => hero.id, HeroToint()))[$fold](core.int, 0, dart.gbind(math.max, core.int))) + 1;
    }
    static lookUpName(id) {
      let t = in_memory_data_service.InMemoryDataService._heroesDb[$firstWhere](dart.fn(hero => hero.id == id, HeroTobool()), {orElse: null});
      return t == null ? null : t.name;
    }
  };
  (in_memory_data_service.InMemoryDataService.new = function() {
    in_memory_data_service.InMemoryDataService.__proto__.new.call(this, dart.tagStatic(in_memory_data_service.InMemoryDataService, '_handler'));
  }).prototype = in_memory_data_service.InMemoryDataService.prototype;
  dart.addTypeTests(in_memory_data_service.InMemoryDataService);
  dart.setStaticMethodSignature(in_memory_data_service.InMemoryDataService, () => ({
    _handler: dart.fnType(async.Future$(src__response.Response), [src__request.Request]),
    resetDb: dart.fnType(dart.dynamic, []),
    lookUpName: dart.fnType(core.String, [core.int])
  }));
  dart.defineLazy(in_memory_data_service.InMemoryDataService, {
    /*in_memory_data_service.InMemoryDataService._initialHeroes*/get _initialHeroes() {
      return JSArrayOfMapOfString$Object().of([new (IdentityMapOfString$Object()).from(['id', 11, 'name', 'Mr. Nice']), new (IdentityMapOfString$Object()).from(['id', 12, 'name', 'Narco']), new (IdentityMapOfString$Object()).from(['id', 13, 'name', 'Bombasto']), new (IdentityMapOfString$Object()).from(['id', 14, 'name', 'Celeritas']), new (IdentityMapOfString$Object()).from(['id', 15, 'name', 'Magneta']), new (IdentityMapOfString$Object()).from(['id', 16, 'name', 'RubberMan']), new (IdentityMapOfString$Object()).from(['id', 17, 'name', 'Dynama']), new (IdentityMapOfString$Object()).from(['id', 18, 'name', 'Dr IQ']), new (IdentityMapOfString$Object()).from(['id', 19, 'name', 'Magma']), new (IdentityMapOfString$Object()).from(['id', 20, 'name', 'Tornado'])]);
    },
    /*in_memory_data_service.InMemoryDataService._heroesDb*/get _heroesDb() {
      return null;
    },
    set _heroesDb(_) {},
    /*in_memory_data_service.InMemoryDataService._nextId*/get _nextId() {
      return null;
    },
    set _nextId(_) {}
  });
  dart.trackLibraries("packages/angular_tour_of_heroes/in_memory_data_service.ddc", {
    "package:angular_tour_of_heroes/in_memory_data_service.dart": in_memory_data_service
  }, '{"version":3,"sourceRoot":"","sources":["in_memory_data_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA6BmC,OAAe;AAAE;AAChD,YAAI,oDAAS,IAAI,MAAM,kDAAO;AAC9B,YAAI;AACJ,gBAAQ,OAAO,OAAO;cACf;;AACH,gBAAM,KACF,QAAG,MAAM,CAAC,OAAO,IAAI,aAAa,OAAK,YAAW,QAAC,CAAC,IAAK;AAC7D,gBAAI,EAAE,IAAI,MAAM;AACd,kBAAI,GAAG,oDAAS,aACD,CAAC,QAAC,IAAI,IAAK,IAAI,GAAG,IAAI,EAAE;mBAClC;AACL,sBAAgB,OAAO,IAAI,gBAAgB,QAAC;kBAArC,yBAAgD;AACvD,kBAAM,SAAS,AAAI,eAAM,CAAC,MAAM,kBAAiB;AACjD,kBAAI,GAAG,oDAAS,QAAM,CAAC,QAAC,IAAI,IAAK,IAAI,KAAK,WAAS,CAAC,MAAM,0BAAS;;AAErE;;cACG;;AACH,gBAAI,mBAAO,YAAI,OAAO,CAAC,OAAO,KAAK,GAAE;AACrC,gBAAI,UAAU,IAAI,kBAAI;sBAAC,kDAAO;cAAP,kDAAO,qBA/CtC;;qCA+C0C,IAAI;AACtC,gEAAS,MAAI,CAAC,OAAO;AACrB,gBAAI,GAAG,OAAO;AACd;;cACG;;AACH,gBAAI,cAAc,AAAI,uBAAa,8BAAC,YAAI,OAAO,CAAC,OAAO,KAAK;AAC5D,gBAAI,aAAa,oDAAS,aAAW,CAAC,QAAC,CAAC,IAAK,CAAC,GAAG,IAAI,WAAW,GAAG;AACnE,sBAAU,KAAK,GAAG,WAAW,KAAK;AAClC,gBAAI,GAAG,UAAU;AACjB;;cACG;;AACH,gBAAI,KAAK,QAAG,MAAM,CAAC,OAAO,IAAI,aAAa,OAAK;AAChD,gEAAS,cAAY,CAAC,QAAC,IAAI,IAAK,IAAI,GAAG,IAAI,EAAE;AAE7C;;;;AAEA,uBAAM,qCAA6B,OAAO,OAAO;;;AAErD,cAAO,KAAI,0BAAQ,CAAC,YAAI,OAAO,CAAC,0CAAC,QAAQ,IAAI,KAAI,eACpC,yCAAC,gBAAgB;MAChC;;;AAGE,0DAAS,GAAG,yDAAc,MAAI,iBAAC,QAAC,IAAI,IAAK,AAAI,uBAAa,CAAC,IAAI,wCAAS;AACxE,wDAAO,GAAiD,aAA9C,oDAAS,MAAI,WAAC,QAAC,IAAI,IAAK,IAAI,GAAG,sBAAM,WAAC,cAAG,QAAG,gBAAI;IAC5D;sBAEyB,EAAM;cAC3B,oDAAS,aAAW,CAAC,QAAC,IAAI,IAAK,IAAI,GAAG,IAAI,EAAE,0BAAU;;IAAW;;;AAE7C,wEAAM,sEAAQ;EAAC;;;;;;;;MA/D1B,yDAAc;YAAG,mCAC5B,yCAAC,MAAM,IAAI,QAAQ,cACnB,yCAAC,MAAM,IAAI,QAAQ,WACnB,yCAAC,MAAM,IAAI,QAAQ,cACnB,yCAAC,MAAM,IAAI,QAAQ,eACnB,yCAAC,MAAM,IAAI,QAAQ,aACnB,yCAAC,MAAM,IAAI,QAAQ,eACnB,yCAAC,MAAM,IAAI,QAAQ,YACnB,yCAAC,MAAM,IAAI,QAAQ,WACnB,yCAAC,MAAM,IAAI,QAAQ,WACnB,yCAAC,MAAM,IAAI,QAAQ;;MAEH,oDAAS;;;;MAChB,kDAAO","file":"in_memory_data_service.ddc.js"}');
  // Exports:
  return {
    in_memory_data_service: in_memory_data_service
  };
});

//# sourceMappingURL=in_memory_data_service.ddc.js.map
