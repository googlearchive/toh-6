import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class DashboardPO {
  @FirstByCss('h3')
  PageLoaderElement _title;

  @ByTagName('a')
  List<PageLoaderElement> _heroes;

  @ByTagName('input')
  PageLoaderElement search;

  @ByCss('div[id="search-component"] div div')
  List<PageLoaderElement> _heroesFound;

  @ByCss('div[id="search-component"]')
  PageLoaderElement heroSearchDiv;

  Future<String> get title => _title.visibleText;

  Future<List<String>> get heroNames =>
      inIndexOrder(_heroes.map((el) => el.visibleText)).toList();

  Future clickHero(int index) => _heroes[index].click();

  Future<List<String>> get heroesFound =>
      inIndexOrder(_heroesFound.map((el) => el.visibleText)).toList();
}
