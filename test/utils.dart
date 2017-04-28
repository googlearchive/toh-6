import 'dart:async';

Map<String, dynamic> heroData(String idAsString, String name) =>
    {'id': int.parse(idAsString, onError: (_) => -1), 'name': name};

Stream<T> inIndexOrder<T>(Iterable<Future<T>> futures) async* {
  for (var x in futures) yield await x;
}
