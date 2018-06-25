@TestOn('browser')

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/src/route_paths.dart' show idParam;
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:angular_tour_of_heroes/src/hero_list_component.dart';
import 'package:angular_tour_of_heroes/src/hero_list_component.template.dart'
    as ng;
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:http/http.dart';
import 'package:mockito/mockito.dart';
import 'package:pageloader/html.dart';
import 'package:test/test.dart';

import 'heroes.template.dart' as self;
import 'heroes_po.dart';
import 'utils.dart';

const numHeroes = 10;
const targetHeroIndex = 4; // index in full heroes list
const targetHero = {'id': 15, 'name': 'Magneta'};

NgTestFixture<HeroListComponent> fixture;
HeroesPO po;

@GenerateInjector([
  ClassProvider(Client, useClass: InMemoryDataService),
  ClassProvider(HeroService),
  ClassProvider(Router, useClass: MockRouter),
])
final InjectorFactory rootInjector = self.rootInjector$Injector;

void main() {
  final injector = InjectorProbe(rootInjector);
  final testBed = NgTestBed.forComponent<HeroListComponent>(
      ng.HeroListComponentNgFactory,
      rootInjector: injector.factory);

  setUp(() async {
    InMemoryDataService.resetDb();
    fixture = await testBed.create();
    final context =
        HtmlPageLoaderElement.createFromElement(fixture.rootElement);
    po = HeroesPO.create(context);
  });

  tearDown(disposeAnyRunningTest);

  group('Basics:', basicTests);
  group('Selected hero:', () => selectedHeroTests(injector));
  group('Add hero:', addHeroTests);
  group('Delete hero:', deleteHeroTests);
}

void basicTests() {
  test('title', () {
    expect(po.title, 'Heroes');
  });

  test('hero count', () {
    expect(po.heroes.length, numHeroes);
  });

  test('no selected hero', () {
    expect(po.selected, null);
  });
}

void selectedHeroTests(InjectorProbe injector) {
  setUp(() async {
    await po.selectHero(targetHeroIndex);
  });

  test('is selected', () {
    expect(po.selected, targetHero);
  });

  test('show mini-detail', () {
    expect(po.myHeroNameInUppercase, equalsIgnoringCase(targetHero['name']));
  });

  test('go to detail', () async {
    await po.gotoDetail();
    final mockRouter = injector.get<MockRouter>(Router);
    final c = verify(mockRouter.navigate(captureAny));
    expect(c.captured.single, '/heroes/${targetHero[idParam]}');
  });

  test('select another hero', () async {
    await po.selectHero(0);
    final heroData = {'id': 11, 'name': 'Mr. Nice'};
    expect(await po.selected, heroData);
  });
}

void addHeroTests() {
  const newHeroName = 'Carl';

  setUp(() async {
    await po.addHero(newHeroName);
    await fixture.update();
  });

  test('hero count', () async {
    expect(po.heroes.length, numHeroes + 1);
  });

  test('select hero', () async {
    await po.selectHero(numHeroes);
    expect(po.heroes.length, numHeroes + 1);
    expect(po.selected['name'], newHeroName);
    expect(po.myHeroNameInUppercase, equalsIgnoringCase(newHeroName));
  });
}

void deleteHeroTests() {
  List<Map> heroesWithoutTarget = [];

  setUp(() async {
    heroesWithoutTarget = po.heroes.toList()..removeAt(targetHeroIndex);
    await po.deleteHero(targetHeroIndex);
    await fixture.update();
  });

  test('hero count', () {
    expect(po.heroes.length, numHeroes - 1);
  });

  test('heroes left', () {
    expect(po.heroes, heroesWithoutTarget);
  });
}
