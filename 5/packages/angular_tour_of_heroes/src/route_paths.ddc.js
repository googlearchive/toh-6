define(['dart_sdk', 'packages/angular_router/src/route_definition'], function(dart_sdk, route_definition) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__route_path = route_definition.src__route_path;
  const _root = Object.create(null);
  const src__route_paths = Object.create(_root);
  dart.defineLazy(src__route_paths, {
    /*src__route_paths.dashboard*/get dashboard() {
      return new src__route_path.RoutePath.new({path: 'dashboard'});
    },
    /*src__route_paths.heroes*/get heroes() {
      return new src__route_path.RoutePath.new({path: 'heroes'});
    },
    /*src__route_paths.idParam*/get idParam() {
      return 'id';
    },
    /*src__route_paths.hero*/get hero() {
      return new src__route_path.RoutePath.new({path: dart.str`${src__route_paths.heroes.path}/:${"id"}`});
    }
  });
  dart.trackLibraries("packages/angular_tour_of_heroes/src/route_paths.ddc", {
    "package:angular_tour_of_heroes/src/route_paths.dart": src__route_paths
  }, '{"version":3,"sourceRoot":"","sources":["route_paths.dart"],"names":[],"mappings":";;;;;;;;;MAEM,0BAAS;YAAG,KAAI,6BAAS,QAAO;;MAChC,uBAAM;YAAG,KAAI,6BAAS,QAAO;;MAC7B,wBAAO;YAAG;;MACV,qBAAI;YAAG,KAAI,6BAAS,QAAO,WAAG,uBAAM,KAAK,KAAI,IAAO","file":"route_paths.ddc.js"}');
  // Exports:
  return {
    src__route_paths: src__route_paths
  };
});

//# sourceMappingURL=route_paths.ddc.js.map
