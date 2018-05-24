import 'dart:async';

import 'package:pageloader/pageloader.dart';
import 'utils.dart';

part 'hero_po.g.dart';

@PageObject()
abstract class HeroDetailPO {
  HeroDetailPO();
  factory HeroDetailPO.create(PageLoaderElement context) = $HeroDetailPO.create;

  @First(ByCss('div h2'))
  PageLoaderElement get _title;

  @First(ByCss('div div'))
  PageLoaderElement get _id;

  @ByTagName('input')
  PageLoaderElement get _input;

  @ByTagName('button')
  @WithVisibleText('Back')
  PageLoaderElement get _back;

  @ByTagName('button')
  @WithVisibleText('Save')
  PageLoaderElement get _save;

  Map get heroFromDetails {
    if (!_id.exists) return null;
    final idAsString = _id.visibleText.split(':')[1];
    return heroData(idAsString, _title.visibleText);
  }

  Future<void> clear() => _input.clear();
  Future<void> type(String s) => _input.type(s);

  Future<void> back() => _back.click();
  Future<void> save() => _save.click();
}
