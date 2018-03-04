import 'dart:async';
import 'dart:html';

class PageLoaderElement {
  Element _e;
  PageLoaderAttributes _attr;

  PageLoaderElement(this._e);

  Future<String> get visibleText async => _e?.text;

  String get visibleTextSync => _e?.text;

  PageLoaderAttributes get attributes => _attr ??= new PageLoaderAttributes(_e);

  Future<bool> clear() async {
    if (_e is! InputElement) return false;
    final _input = _e as InputElement;
    final initialValue = _input.value;
    _input.value = '';
    var result = _input.dispatchEvent(new Event('input'));
    if (initialValue != null && initialValue != '') {
      result = _input.dispatchEvent(new Event('change')) && result;
    }
    return result;
  }

  Future<bool> click() async => _e.dispatchEvent(new MouseEvent('click'));

  Future<bool> type(String keys) async {
    if (_e is! InputElement) return false;
    final _input = _e as InputElement;
    final initialValue = _input.value;
    _input.value = (_input.value ?? '') + keys;
    var result = _input.dispatchEvent(new Event('input'));
    if (_input.value != initialValue) {
      result = _input.dispatchEvent(new Event('change')) && result;
    }
    return result;
  }

  Stream<PageLoaderElement> getElementsByCss(String selector) async* {
    for (final e in _e.querySelectorAll(selector)) {
      yield new PageLoaderElement(e);
    }
  }
}

class PageLoaderAttributes {
  final Element _e;

  PageLoaderAttributes(this._e);

  Future<String> operator [](String name) async => _e.getAttribute(name);

  String getAttribute(String name) => _e.getAttribute(name);
}
