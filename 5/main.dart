import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_tour_of_heroes/app_component.dart';
import 'package:angular_tour_of_heroes/in_memory_data_service.dart';
import 'package:http/http.dart';

import 'main.template.dart' as ng;

void main() {
  bootstrapStatic(
      AppComponent,
      [
        routerProvidersHash, // You can use routerProviders in production
        const ClassProvider(Client, useClass: InMemoryDataService),
        // Using a real back end?
        // Import 'package:http/browser_client.dart' and change the above to:
        // const FactoryProvider(Client, () => new BrowserClient()),
      ],
      ng.initReflector);
}
/*
import 'package:http/browser_client.dart';

void main() {
  bootstrap(AppComponent, [
    routerProvidersHash, // You can use routerProviders in production
    const FactoryProvider(Client, () => new BrowserClient()),
  ]);
}
*/
