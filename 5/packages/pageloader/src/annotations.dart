const optional = const _Optional();

class _Optional {
  const _Optional();

  @override
  String toString() => '@optional';
}

class ByTagName {
  const ByTagName(String selector);
}

class ByCss {
  const ByCss(String selector);
}

class FirstByCss {
  const FirstByCss(String selector);
}

class WithClass {
  const WithClass(String _class);
}

class WithVisibleText {
  const WithVisibleText(String _class);
}
