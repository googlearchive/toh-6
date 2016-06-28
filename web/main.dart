import 'package:angular2/core.dart';
import 'package:angular2/platform/browser.dart';
import 'package:angular2_tour_of_heroes/app_component.dart';
import 'package:http/http.dart';
import 'package:angular2_tour_of_heroes/in_memory_data_service.dart';

void main() {
  bootstrap(AppComponent,
      const [const Provider(Client, useClass: InMemoryDataService)]);
}
/*
import 'package:http/browser_client.dart';

void main() {
  bootstrap(AppComponent, [
    provide(BrowserClient, useFactory: () => new BrowserClient(), deps: [])
  ]);
  // Simplify bootstrap provider list to [BrowserClient]
  // once there is a fix for:
  // https://github.com/angular/angular/issues/9673
}
*/
