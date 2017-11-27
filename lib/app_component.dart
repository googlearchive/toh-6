import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'src/app_routes.dart';
import 'src/hero_service.dart';

@Component(
  selector: 'my-app',
  template: '''
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet [routes]="routes.all"></router-outlet>
  ''',
  styleUrls: const ['app_component.css'],
  directives: const [routerDirectives],
  providers: const [AppRoutes, HeroService],
)
class AppComponent {
  final title = 'Tour of Heroes';
  final AppRoutes routes;

  AppComponent(this.routes);
}
