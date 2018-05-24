import 'dart:async';

import 'package:pageloader/pageloader.dart';

part 'dashboard_po.g.dart';

@PageObject()
abstract class DashboardPO {
  DashboardPO();
  factory DashboardPO.create(PageLoaderElement context) = $DashboardPO.create;

  @First(ByCss('h3'))
  PageLoaderElement get _title;

  @ByTagName('a')
  List<PageLoaderElement> get _heroes;

  @ByTagName('input')
  PageLoaderElement get search;

  @ByCss('div[id="search-component"] div div')
  List<PageLoaderElement> get _heroesFound;

  @ByCss('div[id="search-component"]')
  PageLoaderElement get heroSearchDiv;

  String get title => _title.visibleText;

  Iterable<String> get heroNames => _heroes.map((el) => el.visibleText);

  Future<void> selectHero(int index) => _heroes[index].click();

  Iterable<String> get heroesFound => _heroesFound.map((el) => el.visibleText);
}
