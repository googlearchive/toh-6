@Tags(const ['aot'])
@TestOn('browser')

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:angular_tour_of_heroes/src/heroes_component.dart';
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:http/http.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'heroes_po.dart';
import 'utils.dart';

const numHeroes = 10;
const targetHeroIndex = 4; // index in full heroes list
const targetHero = const {'id': 15, 'name': 'Magneta'};

NgTestFixture<HeroesComponent> fixture;
HeroesPO po;

final mockRouter = new MockRouter();

class MockRouter extends Mock implements Router {}

@AngularEntrypoint()
void main() {
  final testBed = new NgTestBed<HeroesComponent>().addProviders([
    provide(Client, useClass: InMemoryDataService),
    HeroService,
    provide(Router, useValue: mockRouter),
  ]);

  setUp(() async {
    InMemoryDataService.resetDb();
    fixture = await testBed.create();
    po = await fixture.resolvePageObject(HeroesPO);
  });

  tearDown(disposeAnyRunningTest);

  group('Basics:', basicTests);
  group('Selected hero:', selectedHeroTests);
  group('Add hero:', addHeroTests);
  group('Delete hero:', deleteHeroTests);
}

void basicTests() {
  test('title', () async {
    expect(await po.title, 'My Heroes');
  });

  test('hero count', () async {
    await fixture.update();
    expect(po.heroes.length, numHeroes);
  });

  test('no selected hero', () async {
    expect(await po.selectedHero, null);
  });
}

void selectedHeroTests() {
  setUp(() async {
    await po.selectHero(targetHeroIndex);
    po = await fixture.resolvePageObject(HeroesPO);
  });

  test('is selected', () async {
    expect(await po.selectedHero, targetHero);
  });

  test('show mini-detail', () async {
    expect(
        await po.myHeroNameInUppercase, equalsIgnoringCase(targetHero['name']));
  });

  test('go to detail', () async {
    await po.gotoDetail();
    final c = verify(mockRouter.navigate(captureAny));
    expect(c.captured.single, '/detail/${targetHero['id']}');
  });

  test('select another hero', () async {
    await po.selectHero(0);
    po = await fixture.resolvePageObject(HeroesPO);
    final heroData = {'id': 11, 'name': 'Mr. Nice'};
    expect(await po.selectedHero, heroData);
  });
}

void addHeroTests() {
  const newHeroName = 'Carl';

  setUp(() async {
    await po.addHero(newHeroName);
    po = await fixture.resolvePageObject(HeroesPO);
  });

  test('hero count', () async {
    expect(po.heroes.length, numHeroes + 1);
  });

  test('select new hero', () async {
    await po.selectHero(numHeroes);
    po = await fixture.resolvePageObject(HeroesPO);
    expect(po.heroes.length, numHeroes + 1);
    expect((await po.selectedHero)['name'], newHeroName);
    expect(await po.myHeroNameInUppercase, equalsIgnoringCase(newHeroName));
  });
}

void deleteHeroTests() {
  List<Map> heroesWithoutTarget = [];

  setUp(() async {
    heroesWithoutTarget = await inIndexOrder(po.heroes).toList()
      ..removeAt(targetHeroIndex);
    await po.deleteHero(targetHeroIndex);
    po = await fixture.resolvePageObject(HeroesPO);
  });

  test('hero count', () async {
    expect(po.heroes.length, numHeroes - 1);
  });

  test('heroes left', () async {
    expect(await inIndexOrder(po.heroes).toList(), heroesWithoutTarget);
  });
}
