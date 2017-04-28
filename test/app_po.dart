import 'dart:async';

import 'package:pageloader/objects.dart';
import 'utils.dart';

class AppPO {
  @ByTagName('h1')
  PageLoaderElement _h1;

  @ByCss('nav a')
  List<PageLoaderElement> _tabLinks;

  Future<String> get pageTitle => _h1.visibleText;

  Future<List<String>> get tabTitles =>
      inIndexOrder(_tabLinks.map((el) => el.visibleText)).toList();
}
