import 'dart:async';

import 'package:pageloader/pageloader.dart';

part 'hero_search_po.g.dart';

@PageObject()
abstract class HeroSearchPO {
  HeroSearchPO();
  factory HeroSearchPO.create(PageLoaderElement context) = $HeroSearchPO.create;

  @First(ByCss('h4'))
  PageLoaderElement get _title;

  @ByTagName('input')
  PageLoaderElement get search;

  @ByCss('div[id="search-component"] div div')
  List<PageLoaderElement> get _heroes; // heroes found

  String get title => _title.visibleText;

  Iterable<String> get heroNames => _heroes.map((el) => el.visibleText);

  Future<void> selectHero(int index) => _heroes[index].click();
}
