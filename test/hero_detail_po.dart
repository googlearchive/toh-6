import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class HeroDetailPO {
  @FirstByCss('div h2')
  PageLoaderElement _title; // e.g. 'Mr Freeze details!'

  @FirstByCss('div div')
  PageLoaderElement _id;

  @ByTagName('input')
  PageLoaderElement _input;

  @ByTagName('button')
  @WithVisibleText('Back')
  PageLoaderElement _back;

  @ByTagName('button')
  @WithVisibleText('Save')
  PageLoaderElement _save;

  Future<Map> get heroFromDetails async {
    if (_id == null) return null;
    final idAsString = (await _id.visibleText).split(':')[1];
    final text = await _title.visibleText;
    final matches = new RegExp((r'^(.*) details!$')).firstMatch(text);
    return heroData(idAsString, matches[1]);
  }

  Future clear() => _input.clear();
  Future type(String s) => _input.type(s);

  Future back() => _back.click();
  Future save() => _save.click();
}
