// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hero_search_po.dart';

// **************************************************************************
// PageObjectGenerator
// **************************************************************************

// ignore_for_file: private_collision_in_mixin_application
class $HeroSearchPO extends HeroSearchPO with $$HeroSearchPO {
  PageLoaderElement $__root__;
  $HeroSearchPO.create(PageLoaderElement currentContext)
      : $__root__ = currentContext {
    $__root__.addCheckers([]);
  }
  String get title {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroSearchPO', 'title');
    }
    final returnMe = super.title;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroSearchPO', 'title');
    }
    return returnMe;
  }

  Iterable<String> get heroNames {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroSearchPO', 'heroNames');
    }
    final returnMe = super.heroNames;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroSearchPO', 'heroNames');
    }
    return returnMe;
  }

  Future<void> selectHero(int index) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroSearchPO', 'selectHero');
    }
    final returnMe = super.selectHero(index);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroSearchPO', 'selectHero');
    }
    return returnMe;
  }
}

class $$HeroSearchPO {
  PageLoaderElement $__root__;
  PageLoaderMouse __mouse__;
  PageLoaderElement get $root => $__root__;
  PageLoaderElement get _title {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroSearchPO', '_title');
    }
    final element = $__root__.createElement(const First(ByCss('h4')), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroSearchPO', '_title');
    }
    return returnMe;
  }

  PageLoaderElement get search {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroSearchPO', 'search');
    }
    final element = $__root__.createElement(const ByTagName('input'), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroSearchPO', 'search');
    }
    return returnMe;
  }

  PageObjectList<PageLoaderElement> get _heroes {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('HeroSearchPO', '_heroes');
    }
    final returnMe = new PageObjectList<PageLoaderElement>(
        $__root__.createList(
            const ByCss('div[id="search-component"] div div'), [], []),
        (PageLoaderElement e) => e);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('HeroSearchPO', '_heroes');
    }
    return returnMe;
  }
}
