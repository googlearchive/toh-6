@Tags(const ['aot'])
@TestOn('browser')
library heroes_test;

import 'package:angular2/angular2.dart';
import 'package:test/test.dart';

import 'dashboard.dart' as dashboard;
import 'heroes.dart' as heroes;
import 'hero_detail.dart' as hero_detail;
import 'hero_search.dart' as hero_search;

@AngularEntrypoint()
void main() {
  group('dashboard:', dashboard.main);
  group('heroes:', heroes.main);
  group('hero detail:', hero_detail.main);
  group('hero search:', hero_search.main);
}
