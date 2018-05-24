import 'dart:async';

import 'package:pageloader/pageloader.dart';

part 'app_po.g.dart';

@PageObject()
abstract class AppPO {
  AppPO();
  factory AppPO.create(PageLoaderElement context) = $AppPO.create;

  @ByTagName('h1')
  PageLoaderElement get _h1;

  @ByCss('nav a')
  List<PageLoaderElement> get _tabLinks;

  @ByTagName('my-dashboard')
  PageLoaderElement get _myDashboard;

  @ByTagName('my-heroes')
  PageLoaderElement get _myHeroes;

  String get pageTitle => _h1.visibleText;

  Iterable<String> get tabTitles => _tabLinks.map((el) => el.visibleText);

  Future<void> selectTab(int index) => _tabLinks[index].click();

  bool get dashboardTabIsActive => _myDashboard.exists;

  bool get heroesTabIsActive => _myHeroes.exists;
}
