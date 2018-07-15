import 'package:angular_router/angular_router.dart';
import 'package:collection/collection.dart';
import 'package:test/test.dart';

IsNavParams isNavParams([dynamic expected]) => IsNavParams(expected);

class IsNavParams extends Matcher {
  NavigationParams _expected;
  IsNavParams([NavigationParams expected]) {
    _expected = expected == null ? NavigationParams() : expected;
  }
  bool matches(item, Map matchState) =>
      item is NavigationParams &&
      _expected.fragment == item.fragment &&
      const MapEquality()
          .equals(_expected.queryParameters, item.queryParameters) &&
      _expected.updateUrl == item.updateUrl;

  Description describe(Description description) =>
      description.add('NavigationParams(${_expected.queryParameters}, '
          '${_expected.fragment}, ${_expected.updateUrl})');
}
