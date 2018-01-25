// ignore_for_file: uri_has_not_been_generated
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'dashboard_component.template.dart' as dct;
import 'hero_detail_component.template.dart' as hdct;
import 'heroes_component.template.dart' as hct;

@Injectable()
class AppRoutes {
  final List<RouteDefinition> all = [
    new RouteDefinition.redirect(path: '', redirectTo: 'dashboard'),
    new RouteDefinition(
      path: 'dashboard',
      component: dct.DashboardComponentNgFactory,
      useAsDefault: true,
    ),
    new RouteDefinition(
      path: 'heroes',
      component: hct.HeroesComponentNgFactory,
    ),
    new RouteDefinition(
      path: 'detail/:id',
      component: hdct.HeroDetailComponentNgFactory,
    ),
  ];
}
