@Skip('AppComponent tests need bootstrap equivalent for the Router init')
@Tags(const ['aot'])
@TestOn('browser')

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/app_component.dart';
import 'package:mockito/mockito.dart';
import 'package:test/test.dart';

import 'app_po.dart';

NgTestFixture<AppComponent> fixture;
AppPO appPO;

final mockPlatformLocation = new MockPlatformLocation();

class MockPlatformLocation extends Mock implements PlatformLocation {}

@AngularEntrypoint()
void main() {
  final providers = [
    provide(APP_BASE_HREF, useValue: '/'),
    // FIXME provide(ROUTER_PRIMARY_COMPONENT, useValue: AppComponent),
    provide(PlatformLocation, useValue: mockPlatformLocation),
  ];

  final testBed = new NgTestBed<AppComponent>().addProviders(providers);

  setUpAll(() async {
    // Seems like we'd need to do something equivalent to:
    // bootstrap(AppComponent);
  });

  setUp(() async {
    fixture = await testBed.create();
    appPO = await fixture.resolvePageObject(AppPO);
  });

  tearDown(disposeAnyRunningTest);

  group('Basics:', basicTests);
}

void basicTests() {
  test('page title', () async {
    expect(await appPO.pageTitle, 'Tour of Heroes');
  });

  test('tab titles', () async {
    final expectTitles = ['Dashboard', 'Heroes'];
    expect(await appPO.tabTitles, expectTitles);
  });
}
