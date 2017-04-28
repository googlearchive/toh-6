import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class HeroSearchPO {
  @FirstByCss('h4')
  PageLoaderElement _title;

  @ByTagName('input')
  PageLoaderElement search;

  @ByCss('div[id="search-component"] div div')
  List<PageLoaderElement> _heroes; // heroes found

  Future<String> get title => _title.visibleText;

  Future<List<String>> get heroNames =>
      inIndexOrder(_heroes.map((el) => el.visibleText)).toList();

  Future clickHero(int index) => _heroes[index].click();
}
