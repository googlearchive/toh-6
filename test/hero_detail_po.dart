import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class HeroDetailPO {
  @FirstByCss('div h2')
  @optional
  PageLoaderElement _title; // e.g. 'Mr Freeze details!'

  @FirstByCss('div div')
  @optional
  PageLoaderElement _id;

  @ByTagName('input')
  @optional
  PageLoaderElement _input;

  @ByTagName('button')
  List<PageLoaderElement> _buttons;

  Future<Map> get heroFromDetails async {
    if (_id == null) return null;
    final idAsString = (await _id.visibleText).split(' ')[1];
    final text = await _title.visibleText;
    final matches = new RegExp((r'^(.*) details!$')).firstMatch(text);
    return heroData(idAsString, matches[1]);
  }

  Future clear() => _input.clear();
  Future type(String s) => _input.type(s);

  Future back() => _buttons[0].click();
  Future save() => _buttons[1].click();
}
