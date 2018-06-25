// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'heroes_po.dart';

// **************************************************************************
// PageObjectGenerator
// **************************************************************************

// ignore_for_file: private_collision_in_mixin_application
class $HeroesPO extends HeroesPO with $$HeroesPO {
  PageLoaderElement $__root__;
  $HeroesPO.create(PageLoaderElement currentContext)
      : $__root__ = currentContext {
    $__root__.addCheckers([]);
  }
  String get title {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', 'title');
    }
    final returnMe = super.title;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', 'title');
    }
    return returnMe;
  }

  Iterable<Map> get heroes {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', 'heroes');
    }
    final returnMe = super.heroes;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', 'heroes');
    }
    return returnMe;
  }

  Map get selected {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', 'selected');
    }
    final returnMe = super.selected;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', 'selected');
    }
    return returnMe;
  }

  String get myHeroNameInUppercase {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', 'myHeroNameInUppercase');
    }
    final returnMe = super.myHeroNameInUppercase;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', 'myHeroNameInUppercase');
    }
    return returnMe;
  }

  Future<void> selectHero(int index) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', 'selectHero');
    }
    final returnMe = super.selectHero(index);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', 'selectHero');
    }
    return returnMe;
  }

  Future<void> deleteHero(int index) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', 'deleteHero');
    }
    final returnMe = super.deleteHero(index);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', 'deleteHero');
    }
    return returnMe;
  }

  Future<void> addHero(String name) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', 'addHero');
    }
    final returnMe = super.addHero(name);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', 'addHero');
    }
    return returnMe;
  }

  Future<void> gotoDetail() {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', 'gotoDetail');
    }
    final returnMe = super.gotoDetail();
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', 'gotoDetail');
    }
    return returnMe;
  }

  Map<String, dynamic> _heroDataFromLi(PageLoaderElement heroLi) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_heroDataFromLi');
    }
    final returnMe = super._heroDataFromLi(heroLi);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_heroDataFromLi');
    }
    return returnMe;
  }
}

class $$HeroesPO {
  PageLoaderElement $__root__;
  PageLoaderMouse __mouse__;
  PageLoaderElement get $root => $__root__;
  PageLoaderElement get _title {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_title');
    }
    final element = $__root__.createElement(const First(ByCss('h2')), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_title');
    }
    return returnMe;
  }

  PageLoaderElement get _selected {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_selected');
    }
    final element = $__root__.createElement(
        const ByTagName('li'), [const WithClass('selected')], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_selected');
    }
    return returnMe;
  }

  PageLoaderElement get _miniDetailHeading {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_miniDetailHeading');
    }
    final element =
        $__root__.createElement(const First(ByCss('div h2')), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_miniDetailHeading');
    }
    return returnMe;
  }

  PageLoaderElement get _gotoDetail {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_gotoDetail');
    }
    final element = $__root__.createElement(
        const ByTagName('button'), [const WithVisibleText('Details')], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_gotoDetail');
    }
    return returnMe;
  }

  PageLoaderElement get _add {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_add');
    }
    final element = $__root__.createElement(
        const ByCss('button'), [const WithVisibleText('Add')], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_add');
    }
    return returnMe;
  }

  PageLoaderElement get _input {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_input');
    }
    final element = $__root__.createElement(const ByTagName('input'), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_input');
    }
    return returnMe;
  }

  PageObjectList<PageLoaderElement> get _heroes {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_heroes');
    }
    final returnMe = new PageObjectList<PageLoaderElement>(
        $__root__.createList(const ByTagName('li'), [], []),
        (PageLoaderElement e) => e);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_heroes');
    }
    return returnMe;
  }

  PageObjectList<PageLoaderElement> get _deleteHeroes {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroesPO', '_deleteHeroes');
    }
    final returnMe = new PageObjectList<PageLoaderElement>(
        $__root__.createList(const ByCss('li button'), [], []),
        (PageLoaderElement e) => e);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroesPO', '_deleteHeroes');
    }
    return returnMe;
  }
}
