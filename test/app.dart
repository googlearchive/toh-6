@TestOn('browser')
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_test/angular_test.dart';
import 'package:angular_tour_of_heroes/app_component.dart';
import 'package:angular_tour_of_heroes/app_component.template.dart' as ng;
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:http/http.dart';
import 'package:pageloader/html.dart';
import 'package:test/test.dart';

import 'app.template.dart' as self;
import 'app_po.dart';
import 'utils.dart';

NgTestFixture<AppComponent> fixture;
AppPO appPO;
Router router;

@GenerateInjector([
  ClassProvider(Client, useClass: InMemoryDataService),
  routerProvidersForTesting,
])
final InjectorFactory rootInjector = self.rootInjector$Injector;

void main() {
  final injector = InjectorProbe(rootInjector);
  final testBed = NgTestBed.forComponent<AppComponent>(ng.AppComponentNgFactory,
      rootInjector: injector.factory);

  setUp(() async {
    fixture = await testBed.create();
    router = injector.get<Router>(Router);
    await router?.navigate('/');
    await fixture.update();
    final context =
        HtmlPageLoaderElement.createFromElement(fixture.rootElement);
    appPO = AppPO.create(context);
  });

  tearDown(disposeAnyRunningTest);

  group('Basics:', basicTests);
  group('Defaults:', dashboardTests);

  group('Select Heroes:', () {
    setUp(() async {
      await appPO.selectTab(1);
      await fixture.update();
    });

    test('route', () {
      expect(router.current.path, '/heroes');
    });

    test('tab is showing', () {
      expect(appPO.heroesTabIsActive, isTrue);
    });
  });

  group('Select Dashboard:', () {
    setUp(() async {
      // Navigate away from, then back to the dashboard
      await appPO.selectTab(1);
      await fixture.update();
      await appPO.selectTab(0);
      await fixture.update();
    });

    dashboardTests();
  });

  group('Deep linking:', () {
    test('navigate to hero details', () async {
      await router.navigate('/heroes/11');
      await fixture.update();
      expect(fixture.rootElement.querySelector('my-hero'), isNotNull);
    });

    test('navigate to heroes', () async {
      await router.navigate('/heroes');
      await fixture.update();
      expect(fixture.rootElement.querySelector('my-heroes'), isNotNull);
    });
  });
}

void basicTests() {
  test('page title', () {
    expect(appPO.pageTitle, 'Tour of Heroes');
  });

  test('tab titles', () {
    final expectTitles = ['Dashboard', 'Heroes'];
    expect(appPO.tabTitles, expectTitles);
  });
}

void dashboardTests() {
  test('route', () {
    expect(router.current.path, '/dashboard');
  });

  test('tab is showing', () {
    expect(appPO.dashboardTabIsActive, isTrue);
  });
}
