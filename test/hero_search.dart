@TestOn('browser')

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:angular_tour_of_heroes/src/hero_search_component.dart';
import 'package:angular_tour_of_heroes/src/hero_search_component.template.dart'
    as ng;
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:http/http.dart';
import 'package:mockito/mockito.dart';
import 'package:pageloader/html.dart';
import 'package:test/test.dart';

import 'hero_search.template.dart' as self;
import 'hero_search_po.dart';
import 'utils.dart';

NgTestFixture<HeroSearchComponent> fixture;
HeroSearchPO po;

@GenerateInjector([
  ClassProvider(Client, useClass: InMemoryDataService),
  ClassProvider(HeroService),
  ClassProvider(Router, useClass: MockRouter),
])
final InjectorFactory rootInjector = self.rootInjector$Injector;

void main() {
  final injector = InjectorProbe(rootInjector);
  final testBed = NgTestBed.forComponent<HeroSearchComponent>(
      ng.HeroSearchComponentNgFactory,
      rootInjector: injector.factory);

  setUp(() async {
    InMemoryDataService.resetDb();
    fixture = await testBed.create();
    final context =
        HtmlPageLoaderElement.createFromElement(fixture.rootElement);
    po = HeroSearchPO.create(context);
  });

  tearDown(disposeAnyRunningTest);

  test('title', () {
    expect(po.title, 'Hero Search');
  });

  test('initially no heroes found', () {
    expect(po.heroNames, []);
  });

  group('Search hero:', () => heroSearchTests(injector));
}

void heroSearchTests(InjectorProbe injector) {
  final searchText = 'ma';

  setUp(() async {
    await _typeSearchTextAndRefreshPO(searchText);
  });

  test('list heroes matching ${searchText}', () {
    final matchedHeroNames = [
      'Magneta',
      'RubberMan',
      'Dynama',
      'Magma',
    ];
    expect(po.heroNames, matchedHeroNames);
  });

  test('list heroes matching ${searchText}g', () async {
    await _typeSearchTextAndRefreshPO('g');
    expect(po.heroNames, ['Magneta', 'Magma']);
  });

  test('select hero and navigate to detail', () async {
    final mockRouter = injector.get<MockRouter>(Router);
    clearInteractions(mockRouter);
    await po.selectHero(0);
    final c = verify(mockRouter.navigate(captureAny));
    expect(c.captured.single, '/heroes/15');
  });
}

Future _typeSearchTextAndRefreshPO(String searchText) async {
  Future firstHero;
  await fixture.update((c) => firstHero = c.heroes.first);
  await po.search.type(searchText);
  await firstHero;
  await fixture.update();
}
