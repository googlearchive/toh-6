import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class HeroSearchPO extends PageObjectBase {
  @FirstByCss('h4')
  PageLoaderElement get _title => q('h4');

  @ByTagName('input')
  PageLoaderElement get search => q('input');

  @ByCss('div[id="search-component"] div div')
  List<PageLoaderElement> get _heroes =>
      qq('div[id="search-component"] div div'); // heroes found

  Future<String> get title => _title.visibleText;

  Future<List<String>> get heroNames =>
      inIndexOrder(_heroes.map((el) => el.visibleText)).toList();

  Future selectHero(int index) => _heroes[index].click();
}
