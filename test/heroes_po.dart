import 'dart:async';

import 'package:pageloader/pageloader.dart';
import 'utils.dart';

part 'heroes_po.g.dart';

@PageObject()
abstract class HeroesPO {
  HeroesPO();
  factory HeroesPO.create(PageLoaderElement context) = $HeroesPO.create;

  @First(ByCss('h2'))
  PageLoaderElement get _title;

  @ByTagName('li')
  List<PageLoaderElement> get _heroes;

  @ByTagName('li')
  @WithClass('selected')
  PageLoaderElement get _selected;

  @First(ByCss('div h2'))
  PageLoaderElement get _miniDetailHeading;

  @ByTagName('button')
  @WithVisibleText('Details')
  PageLoaderElement get _gotoDetail;

  @ByCss('button')
  @WithVisibleText('Add')
  PageLoaderElement get _add;

  @ByCss('li button')
  List<PageLoaderElement> get _deleteHeroes;

  @ByTagName('input')
  PageLoaderElement get _input;

  String get title => _title.visibleText;

  Iterable<Map> get heroes => _heroes.map((el) => _heroDataFromLi(el));

  Future<void> selectHero(int index) => _heroes[index].click();
  Future<void> deleteHero(int index) => _deleteHeroes[index].click();

  Map get selected => _selected.exists ? _heroDataFromLi(_selected) : null;

  String get myHeroNameInUppercase {
    if (!_miniDetailHeading.exists) return null;
    final text = _miniDetailHeading.visibleText;
    final matches = RegExp((r'^\s*(.+) is my hero\s*$')).firstMatch(text);
    return matches[1];
  }

  Future<void> addHero(String name) async {
    await _input.clear();
    await _input.type(name);
    await _add.click();
  }

  Future<void> gotoDetail() => _gotoDetail.click();

  Map<String, dynamic> _heroDataFromLi(PageLoaderElement heroLi) {
    final spans = heroLi.getElementsByCss('span').toList();
    return heroData(spans[0].visibleText, spans[1].visibleText);
  }
}
