@TestOn('browser')
library heroes_test;

import 'package:test/test.dart';

import 'app.dart' as app;
import 'dashboard.dart' as dashboard;
import 'heroes.dart' as heroes;
import 'hero.dart' as hero_detail;
import 'hero_search.dart' as hero_search;

void main() {
  group('app:', app.main);
  group('dashboard:', dashboard.main);
  group('heroes:', heroes.main);
  group('hero:', hero_detail.main);
  group('hero search:', hero_search.main);
}
