import 'dart:async';
import 'dart:html';
import 'interfaces.dart';
import 'package:angular_test/angular_test.dart';

export 'dart:html' show Element;
export 'package:angular_test/angular_test.dart' show NgTestFixture;

PageLoaderElement _newPLE(Element e) =>
    e == null ? e : new PageLoaderElement(e);

class PageObjectBase {
  final _elCache = new Map<String, PageLoaderElement>();
  final _listElCache = new Map<String, List<PageLoaderElement>>();

  Element _root;

  Element get root => _root;

  void set root(Element newRoot) {
    _elCache.clear();
    _listElCache.clear();
    _root = newRoot;
  }

  PageLoaderElement q(String selectors, {String withVisibleText}) =>
      withVisibleText == null
          ? _elCache.putIfAbsent(
              selectors,
              () => _newPLE(root.querySelector(selectors)),
            )
          : qq(selectors)
              .firstWhere((e) => e.visibleTextSync.contains(withVisibleText));

  List<PageLoaderElement> qq(String selectors) => _listElCache.putIfAbsent(
        selectors,
        () => root
            .querySelectorAll(selectors)
            .map((e) => new PageLoaderElement(e))
            .toList(),
      );

  Future<PageObjectBase> resolve(NgTestFixture fixture) async {
    await fixture.update();
    root = fixture.rootElement;
    return this;
  }
}
