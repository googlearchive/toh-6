define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const objects = Object.create(_root);
  dart.trackLibraries("packages/pageloader/objects.ddc", {
    "package:pageloader/objects.dart": objects
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"objects.ddc.js"}');
  // Exports:
  return {
    objects: objects
  };
});

//# sourceMappingURL=objects.ddc.js.map
