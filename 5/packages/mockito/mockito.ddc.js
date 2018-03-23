define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const mockito = Object.create(_root);
  dart.trackLibraries("packages/mockito/mockito.ddc", {
    "package:mockito/mockito.dart": mockito
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"mockito.ddc.js"}');
  // Exports:
  return {
    mockito: mockito
  };
});

//# sourceMappingURL=mockito.ddc.js.map
