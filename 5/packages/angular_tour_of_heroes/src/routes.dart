import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import 'route_paths.dart' as paths;
import 'dashboard_component.template.dart' as dct;
import 'hero_component.template.dart' as hct;
import 'hero_list_component.template.dart' as hlct;

@Injectable()
class Routes {
  static final _heroes = new RouteDefinition(
    routePath: paths.heroes,
    component: hlct.HeroListComponentNgFactory,
  );

  RouteDefinition get heroes => _heroes;

  static final _dashboard = new RouteDefinition(
    routePath: paths.dashboard,
    component: dct.DashboardComponentNgFactory,
  );

  RouteDefinition get dashboard => _dashboard;

  static final _hero = new RouteDefinition(
    routePath: paths.hero,
    component: hct.HeroComponentNgFactory,
  );

  RouteDefinition get hero => _hero;

  final List<RouteDefinition> all = [
    new RouteDefinition.redirect(path: '', redirectTo: paths.dashboard.toUrl()),
    _dashboard,
    _hero,
    _heroes,
  ];
}
