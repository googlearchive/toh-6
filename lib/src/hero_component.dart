import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';

import 'hero.dart';
import 'hero_service.dart';
import 'route_paths.dart' as paths;

@Component(
  selector: 'my-hero',
  templateUrl: 'hero_component.html',
  styleUrls: ['hero_component.css'],
  directives: [coreDirectives, formDirectives],
)
class HeroComponent implements OnActivate {
  Hero hero;
  final HeroService _heroService;
  final Location _location;

  HeroComponent(this._heroService, this._location);

  @override
  Future<void> onActivate(_, RouterState current) async {
    final id = paths.getId(current.parameters);
    if (id != null) hero = await (_heroService.get(id));
  }

  Future<void> save() async {
    await _heroService.update(hero);
    goBack();
  }

  void goBack() => _location.back();
}
