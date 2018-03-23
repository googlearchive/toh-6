define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const testing = Object.create(_root);
  dart.trackLibraries("packages/http/testing.ddc", {
    "package:http/testing.dart": testing
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"testing.ddc.js"}');
  // Exports:
  return {
    testing: testing
  };
});

//# sourceMappingURL=testing.ddc.js.map
