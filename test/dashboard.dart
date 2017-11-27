@Tags(const ['aot'])
@TestOn('browser')

import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:angular_tour_of_heroes/src/dashboard_component.dart';
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:http/http.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'dashboard_po.dart';
import 'matchers.dart';

NgTestFixture<DashboardComponent> fixture;
DashboardPO po;

final mockRouter = new MockRouter();

class MockRouter extends Mock implements Router {}

@AngularEntrypoint()
void main() {
  final testBed = new NgTestBed<DashboardComponent>().addProviders([
    provide(APP_BASE_HREF, useValue: '/'),
    provide(Client, useClass: InMemoryDataService),
    HeroService,
    routerProviders,
    provide(Router, useValue: mockRouter),
  ]);

  setUp(() async {
    fixture = await testBed.create();
    po = await fixture.resolvePageObject(DashboardPO);
  });

  tearDown(disposeAnyRunningTest);

  test('title', () async {
    expect(await po.title, 'Top Heroes');
  });

  test('show top heroes', () async {
    final expectedNames = ['Narco', 'Bombasto', 'Celeritas', 'Magneta'];
    expect(await po.heroNames, expectedNames);
  });

  test('select hero and navigate to detail', () async {
    clearInteractions(mockRouter);
    await po.selectHero(3);
    var c = verify(mockRouter.navigate(captureAny, captureAny));
    expect(c.captured[0], '/detail/15');
    expect(c.captured[1], new IsNavParams());
    expect(c.captured.length, 2);
  });

  test('no search no heroes', () async {
    expect(await po.heroesFound, []);
  });

  group('Search hero:', heroSearchTests);
}

void heroSearchTests() {
  final matchedHeroNames = [
    'Magneta',
    'RubberMan',
    'Dynama',
    'Magma',
  ];

  setUp(() async {
    await po.search.type('ma');
    await new Future.delayed(const Duration(seconds: 1));
    po = await fixture.resolvePageObject(DashboardPO);
  });

  test('list matching heroes', () async {
    expect(await po.heroesFound, matchedHeroNames);
  });
}
