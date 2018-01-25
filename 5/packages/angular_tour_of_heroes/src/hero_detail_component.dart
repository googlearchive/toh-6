import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';

import 'hero.dart';
import 'hero_service.dart';

@Component(
  selector: 'hero-detail',
  templateUrl: 'hero_detail_component.html',
  styleUrls: const ['hero_detail_component.css'],
  directives: const [CORE_DIRECTIVES, formDirectives],
)
class HeroDetailComponent implements OnActivate {
  Hero hero;
  final HeroService _heroService;
  final Location _location;

  HeroDetailComponent(this._heroService, this._location);

  @override
  void onActivate(_, RouterState current) {
    updateHero(current);
  }

  Future<Null> updateHero(RouterState routerState) async {
    var _id = routerState.parameters['id'];
    var id = int.parse(_id ?? '', onError: (_) => null);
    if (id != null) hero = await (_heroService.getHero(id));
  }

  Future<Null> save() async {
    await _heroService.update(hero);
    goBack();
  }

  void goBack() => _location.back();
}
