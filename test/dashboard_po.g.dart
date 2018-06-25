// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'dashboard_po.dart';

// **************************************************************************
// PageObjectGenerator
// **************************************************************************

// ignore_for_file: private_collision_in_mixin_application
class $DashboardPO extends DashboardPO with $$DashboardPO {
  PageLoaderElement $__root__;
  $DashboardPO.create(PageLoaderElement currentContext)
      : $__root__ = currentContext {
    $__root__.addCheckers([]);
  }
  String get title {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', 'title');
    }
    final returnMe = super.title;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', 'title');
    }
    return returnMe;
  }

  Iterable<String> get heroNames {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', 'heroNames');
    }
    final returnMe = super.heroNames;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', 'heroNames');
    }
    return returnMe;
  }

  Iterable<String> get heroesFound {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', 'heroesFound');
    }
    final returnMe = super.heroesFound;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', 'heroesFound');
    }
    return returnMe;
  }

  Future<void> selectHero(int index) {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', 'selectHero');
    }
    final returnMe = super.selectHero(index);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', 'selectHero');
    }
    return returnMe;
  }
}

class $$DashboardPO {
  PageLoaderElement $__root__;
  PageLoaderMouse __mouse__;
  PageLoaderElement get $root => $__root__;
  PageLoaderElement get _title {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', '_title');
    }
    final element = $__root__.createElement(const First(ByCss('h3')), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', '_title');
    }
    return returnMe;
  }

  PageLoaderElement get search {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', 'search');
    }
    final element = $__root__.createElement(const ByTagName('input'), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', 'search');
    }
    return returnMe;
  }

  PageLoaderElement get heroSearchDiv {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', 'heroSearchDiv');
    }
    final element = $__root__
        .createElement(const ByCss('div[id="search-component"]'), [], []);
    final returnMe = element;
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', 'heroSearchDiv');
    }
    return returnMe;
  }

  PageObjectList<PageLoaderElement> get _heroes {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', '_heroes');
    }
    final returnMe = new PageObjectList<PageLoaderElement>(
        $__root__.createList(const ByTagName('a'), [], []),
        (PageLoaderElement e) => e);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', '_heroes');
    }
    return returnMe;
  }

  PageObjectList<PageLoaderElement> get _heroesFound {
    for (final __listener in $__root__.listeners) {
      __listener.startPageObjectMethod('DashboardPO', '_heroesFound');
    }
    final returnMe = new PageObjectList<PageLoaderElement>(
        $__root__.createList(
            const ByCss('div[id="search-component"] div div'), [], []),
        (PageLoaderElement e) => e);
    for (final __listener in $__root__.listeners) {
      __listener.endPageObjectMethod('DashboardPO', '_heroesFound');
    }
    return returnMe;
  }
}
