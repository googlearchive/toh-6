define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__directives__abstract_control_directive = Object.create(_root);
  const _is_AbstractControlDirective_default = Symbol('_is_AbstractControlDirective_default');
  src__directives__abstract_control_directive.AbstractControlDirective$ = dart.generic(T => {
    class AbstractControlDirective extends core.Object {
      get name() {
        return this[name];
      }
      set name(value) {
        this[name] = value;
      }
      get value() {
        let t = this.control;
        return t == null ? null : t.value;
      }
      get valid() {
        let t = this.control;
        return t == null ? null : t.valid;
      }
      get errors() {
        let t = this.control;
        return t == null ? null : t.errors;
      }
      get pristine() {
        let t = this.control;
        return t == null ? null : t.pristine;
      }
      get dirty() {
        let t = this.control;
        return t == null ? null : t.dirty;
      }
      get touched() {
        let t = this.control;
        return t == null ? null : t.touched;
      }
      get untouched() {
        let t = this.control;
        return t == null ? null : t.untouched;
      }
      get path() {
        return null;
      }
    }
    (AbstractControlDirective.new = function() {
      this[name] = null;
    }).prototype = AbstractControlDirective.prototype;
    dart.addTypeTests(AbstractControlDirective);
    AbstractControlDirective.prototype[_is_AbstractControlDirective_default] = true;
    const name = Symbol("AbstractControlDirective.name");
    dart.setGetterSignature(AbstractControlDirective, () => ({
      __proto__: dart.getGetters(AbstractControlDirective.__proto__),
      value: dart.fnType(dart.dynamic, []),
      valid: dart.fnType(core.bool, []),
      errors: dart.fnType(core.Map$(core.String, dart.dynamic), []),
      pristine: dart.fnType(core.bool, []),
      dirty: dart.fnType(core.bool, []),
      touched: dart.fnType(core.bool, []),
      untouched: dart.fnType(core.bool, []),
      path: dart.fnType(core.List$(core.String), [])
    }));
    dart.setFieldSignature(AbstractControlDirective, () => ({
      __proto__: dart.getFields(AbstractControlDirective.__proto__),
      name: dart.fieldType(core.String)
    }));
    return AbstractControlDirective;
  });
  src__directives__abstract_control_directive.AbstractControlDirective = src__directives__abstract_control_directive.AbstractControlDirective$();
  dart.addTypeTests(src__directives__abstract_control_directive.AbstractControlDirective, _is_AbstractControlDirective_default);
  dart.trackLibraries("packages/angular_forms/src/directives/abstract_control_directive.ddc", {
    "package:angular_forms/src/directives/abstract_control_directive.dart": src__directives__abstract_control_directive
  }, '{"version":3,"sourceRoot":"","sources":["abstract_control_directive.dart"],"names":[],"mappings":";;;;;;;;;;MAMS;;;;;;;gBAIc,YAAO;;MAAO;;gBAEjB,YAAO;;MAAO;;gBAEG,YAAO;;MAAQ;;gBAE7B,YAAO;;MAAU;;gBAEpB,YAAO;;MAAO;;gBAEZ,YAAO;;MAAS;;gBAEd,YAAO;;MAAW;;cAEf;MAAI;;;MAlBtB,UAAI;IAmBb","file":"abstract_control_directive.ddc.js"}');
  // Exports:
  return {
    src__directives__abstract_control_directive: src__directives__abstract_control_directive
  };
});

//# sourceMappingURL=abstract_control_directive.ddc.js.map
