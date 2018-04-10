import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class DashboardPO extends PageObjectBase {
  @FirstByCss('h3')
  PageLoaderElement get _title => q('h3');

  @ByTagName('a')
  List<PageLoaderElement> get _heroes => qq('a');

  @ByTagName('input')
  PageLoaderElement get search => q('input');

  @ByCss('div[id="search-component"] div div')
  List<PageLoaderElement> get _heroesFound =>
      qq('div[id="search-component"] div div');

  @ByCss('div[id="search-component"]')
  PageLoaderElement get heroSearchDiv => q('div[id="search-component"]');

  Future<String> get title => _title.visibleText;

  Future<List<String>> get heroNames =>
      inIndexOrder(_heroes.map((el) => el.visibleText)).toList();

  Future selectHero(int index) => _heroes[index].click();

  Future<List<String>> get heroesFound =>
      inIndexOrder(_heroesFound.map((el) => el.visibleText)).toList();
}
