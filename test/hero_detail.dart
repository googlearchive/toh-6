@Tags(const ['aot'])
@TestOn('browser')

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:angular_tour_of_heroes/src/hero_detail_component.dart';
import 'package:angular_tour_of_heroes/src/hero_service.dart';
import 'package:http/http.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'hero_detail_po.dart';

NgTestFixture<HeroDetailComponent> fixture;
HeroDetailPO po;

final mockLocation = new MockLocation();
final mockRouterState = new MockRouterState();

@AngularEntrypoint()
void main() {
  final testBed = new NgTestBed<HeroDetailComponent>().addProviders([
    provide(Client, useClass: InMemoryDataService),
    HeroService,
    provide(Location, useValue: mockLocation),
  ]);

  setUp(() async {
    fixture = await testBed.create();
    InMemoryDataService.resetDb();
  });

  tearDown(disposeAnyRunningTest);

  test('No initial hero results in an empty view', () async {
    expect(fixture.rootElement.text.trim(), '');
  });

  const targetHero = const {'id': 15, 'name': 'Magneta'};

  group('${targetHero['name']} initial hero:', () {
    const nameSuffix = 'X';
    final Map updatedHero = {
      'id': targetHero['id'],
      'name': "${targetHero['name']}$nameSuffix"
    };

    setUpAll(() async {
      when(mockRouterState.parameters)
          .thenReturn({'id': '${targetHero['id']}'});
    });

    setUp(() async {
      await fixture.update((c) => c.onActivate(null, mockRouterState));
      po = await fixture.resolvePageObject(HeroDetailPO);
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
        final name = InMemoryDataService.lookUpName(targetHero['id']);
        expect(name, updatedHero['name']);
      });
    });
  });
}

class MockLocation extends Mock implements Location {}

class MockRouterState extends Mock implements RouterState {}
