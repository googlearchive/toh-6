import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class HeroesPO extends PageObjectBase {
  @FirstByCss('h2')
  PageLoaderElement get _title => q('h2');

  @ByTagName('li')
  List<PageLoaderElement> get _heroes => qq('li');

  @ByTagName('li')
  @WithClass('selected')
  @optional
  PageLoaderElement get _selectedHero => q('li.selected');

  @FirstByCss('div h2')
  @optional
  PageLoaderElement get _miniDetailHeading => q('div h2');

  @ByTagName('button')
  @WithVisibleText('View Details')
  @optional
  PageLoaderElement get _gotoDetail =>
      q('button', withVisibleText: 'View Details');

  @ByCss('button')
  @WithVisibleText('Add')
  PageLoaderElement get _add => q('button', withVisibleText: 'Add');

  @ByCss('li button')
  List<PageLoaderElement> get _deleteHeroes => qq('li button');

  @ByTagName('input')
  PageLoaderElement get _input => q('input');

  Future<String> get title => _title.visibleText;

  Iterable<Future<Map>> get heroes => _heroes.map((el) => _heroDataFromLi(el));

  Future selectHero(int index) => _heroes[index].click();
  Future deleteHero(int index) => _deleteHeroes[index].click();

  Future<Map> get selectedHero =>
      _selectedHero == null ? null : _heroDataFromLi(_selectedHero);

  Future<String> get myHeroNameInUppercase async {
    if (_miniDetailHeading == null) return null;
    final text = await _miniDetailHeading.visibleText;
    final matches = new RegExp((r'^(.*) is my hero\s*$')).firstMatch(text);
    return matches[1];
  }

  Future addHero(String name) async {
    await _input.clear();
    await _input.type(name);
    return _add.click();
  }

  Future gotoDetail() async => _gotoDetail.click();

  Future<Map<String, dynamic>> _heroDataFromLi(PageLoaderElement heroLi) async {
    final spans = await heroLi.getElementsByCss('span').toList();
    return heroData(await spans[0].visibleText, await spans[1].visibleText);
  }
}
