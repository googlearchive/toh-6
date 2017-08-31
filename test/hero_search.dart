@Tags(const ['aot'])
@TestOn('browser')

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/app_component.dart';
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:angular_tour_of_heroes/src/hero_search_component.dart';
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:http/http.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'hero_search_po.dart';

NgTestFixture<HeroSearchComponent> fixture;
HeroSearchPO po;

final mockPlatformLocation = new MockPlatformLocation();

class MockPlatformLocation extends Mock implements PlatformLocation {}

@AngularEntrypoint()
void main() {
  final providers = new List.from(ROUTER_PROVIDERS)
    ..addAll([
      provide(APP_BASE_HREF, useValue: '/'),
      provide(Client, useClass: InMemoryDataService),
      provide(ROUTER_PRIMARY_COMPONENT, useValue: AppComponent),
      provide(PlatformLocation, useValue: mockPlatformLocation),
      HeroService,
    ]);
  final testBed = new NgTestBed<HeroSearchComponent>().addProviders(providers);

  setUpAll(() async {
    when(mockPlatformLocation.pathname).thenReturn('');
    when(mockPlatformLocation.search).thenReturn('');
    when(mockPlatformLocation.hash).thenReturn('');
    when(mockPlatformLocation.getBaseHrefFromDOM()).thenReturn('');
  });

  setUp(() async {
    InMemoryDataService.resetDb();
    fixture = await testBed.create();
    po = await fixture.resolvePageObject(HeroSearchPO);
  });

  tearDown(disposeAnyRunningTest);

  test('title', () async {
    expect(await po.title, 'Hero Search');
  });

  test('initially no heroes found', () async {
    expect(await po.heroNames, []);
  });

  group('Search hero:', heroSearchTests);
}

void heroSearchTests() {
  final searchText = 'ma';

  setUp(() async {
    await _typeSearchTextAndRefreshPO(searchText);
  });

  test('list heroes matching ${searchText}', () async {
    final matchedHeroNames = [
      'Magneta',
      'RubberMan',
      'Dynama',
      'Magma',
    ];
    expect(await po.heroNames, matchedHeroNames);
  });

  test('list heroes matching ${searchText}g', () async {
    await _typeSearchTextAndRefreshPO('g');
    expect(await po.heroNames, ['Magneta', 'Magma']);
  });

  test('select hero and navigate to detail', () async {
    clearInteractions(mockPlatformLocation);
    await po.selectHero(0);
    final c = verify(mockPlatformLocation.pushState(any, any, captureAny));
    expect(c.captured.single, '/detail/15');
  });
}

Future _typeSearchTextAndRefreshPO(String searchText) async {
  Future firstHero;
  await fixture.update((c) => firstHero = c.heroes.first);
  await po.search.type(searchText);
  await firstHero;
  po = await fixture.resolvePageObject(HeroSearchPO);
}
