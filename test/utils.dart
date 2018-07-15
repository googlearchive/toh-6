import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:mockito/mockito.dart';

const /* List<Provider|List<Provider>> */ routerProvidersForTesting = [
  ValueProvider.forToken(appBaseHref, '/'),
  routerProviders,
  // Mock platform location even with real router, otherwise sometimes tests hang.
  ClassProvider(PlatformLocation, useClass: MockPlatformLocation),
];

//-----------------------------------------------------------------------------

class InjectorProbe {
  InjectorFactory _parent;
  Injector _injector;

  InjectorProbe(this._parent);

  InjectorFactory get factory => _factory;
  Injector get injector => _injector ??= _factory();

  Injector _factory([Injector parent]) => _injector = _parent(parent);
  T get<T>(dynamic token) => injector?.get(token);
}

//-----------------------------------------------------------------------------

class MockRouter extends Mock implements Router {}

class MockPlatformLocation extends Mock implements PlatformLocation {
  String _url;

  String get hash => '';
  String get pathname => _url ?? '';
  String get search => '';

  void pushState(state, String title, String url) => _url = url;
}

//-----------------------------------------------------------------------------
// Misc helper functions

Map<String, dynamic> heroData(String idAsString, String name) =>
    {'id': int.tryParse(idAsString) ?? -1, 'name': name};

Stream<T> inIndexOrder<T>(Iterable<Future<T>> futures) async* {
  for (var x in futures) yield await x;
}
