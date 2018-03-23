define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero = Object.create(_root);
  const $_get = dartx._get;
  let dynamicToint = () => (dynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic])))();
  src__hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    static fromJson(hero) {
      return new src__hero.Hero.new(src__hero._toInt(hero[$_get]('id')), core.String._check(hero[$_get]('name')));
    }
    toJson() {
      return new _js_helper.LinkedMap.from(['id', this.id, 'name', this.name]);
    }
  };
  (src__hero.Hero.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
  }).prototype = src__hero.Hero.prototype;
  dart.addTypeTests(src__hero.Hero);
  const id$ = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  dart.setMethodSignature(src__hero.Hero, () => ({
    __proto__: dart.getMethods(src__hero.Hero.__proto__),
    toJson: dart.fnType(core.Map, [])
  }));
  dart.setFieldSignature(src__hero.Hero, () => ({
    __proto__: dart.getFields(src__hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  src__hero._toInt = function(id) {
    return core.int.is(id) ? id : core.int.parse(core.String._check(id));
  };
  dart.fn(src__hero._toInt, dynamicToint());
  dart.trackLibraries("packages/angular_tour_of_heroes/src/hero.ddc", {
    "package:angular_tour_of_heroes/src/hero.dart": src__hero
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;;;;IACY;;;;;;IACH;;;;;;oBAIe,IAAyB;AAAE,YAC7C,KAAI,kBAAI,CAAC,gBAAM,CAAC,IAAI,QAAC,2BAAQ,IAAI,QAAC;IAAQ;;YAE9B,gCAAC,MAAM,OAAE,EAAE,QAAQ,SAAI;IAAC;;iCALnC,EAAO,EAAE,IAAS;IAAb,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;8BAQf,EAAE;uBAAK,EAAE,IAAU,EAAE,GAAG,QAAG,MAAM,oBAAC,EAAE;EAAC","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__hero: src__hero
  };
});

//# sourceMappingURL=hero.ddc.js.map
