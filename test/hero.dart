@TestOn('browser')

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/src/route_paths.dart' show idParam;
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:angular_tour_of_heroes/src/hero_component.dart';
import 'package:angular_tour_of_heroes/src/hero_component.template.dart' as ng;
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:http/http.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'hero.template.dart' as self;
import 'hero_po.dart';
import 'utils.dart';

NgTestFixture<HeroComponent> fixture;
HeroDetailPO po;

@GenerateInjector([
  const ClassProvider(Client, useClass: InMemoryDataService),
  const ClassProvider(HeroService),
  const ClassProvider(Location, useClass: MockLocation),
])
final InjectorFactory rootInjector = self.rootInjector$Injector;

void main() {
  final injector = new InjectorProbe(rootInjector);
  final testBed = NgTestBed.forComponent<HeroComponent>(
      ng.HeroComponentNgFactory,
      rootInjector: injector.factory);

  setUp(() async {
    fixture = await testBed.create();
    InMemoryDataService.resetDb();
  });

  tearDown(disposeAnyRunningTest);

  test('No initial hero results in an empty view', () async {
    expect(fixture.rootElement.text.trim(), '');
  });

  const targetHero = {'id': 15, 'name': 'Magneta'};

  group('${targetHero['name']} initial hero:', () {
    const nameSuffix = 'X';
    final Map updatedHero = {
      'id': targetHero[idParam],
      'name': "${targetHero['name']}$nameSuffix"
    };

    final mockRouterState = new MockRouterState();
    when(mockRouterState.parameters)
        .thenReturn({idParam: '${targetHero[idParam]}'});
    MockLocation mockLocation;

    setUp(() async {
      mockLocation = injector.get<MockLocation>(Location);
      await fixture.update((c) => c.onActivate(null, mockRouterState));
      po = await new HeroDetailPO().resolve(fixture);
      clearInteractions(mockLocation);
    });

    test('show hero details', () async {
      expect(await po.heroFromDetails, targetHero);
    });

    test('back button', () async {
      await po.back();
      verify(mockLocation.back());
    });

    group('Update name:', () {
      setUp(() async {
        await po.type(nameSuffix);
      });

      test('show updated name', () async {
        expect(await po.heroFromDetails, updatedHero);
      });

      test('discard changes', () async {
        await po.back();
        final name = InMemoryDataService.lookUpName(targetHero['id']);
        expect(name, targetHero['name']);
      });

      test('save changes and go back', () async {
        await po.save();
        await fixture.update();
        final name = InMemoryDataService.lookUpName(targetHero['id']);
        expect(name, updatedHero['name']);
      });
    });
  });
}

class MockLocation extends Mock implements Location {}

class MockRouterState extends Mock implements RouterState {}
