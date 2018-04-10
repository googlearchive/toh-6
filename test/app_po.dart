import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class AppPO extends PageObjectBase {
  @ByTagName('h1')
  PageLoaderElement get _h1 => q('h1');

  @ByCss('nav a')
  List<PageLoaderElement> get _tabLinks => qq('nav a');

  Future<String> get pageTitle => _h1.visibleText;

  Future<List<String>> get tabTitles =>
      inIndexOrder(_tabLinks.map((el) => el.visibleText)).toList();
}
