(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('@angular/core'), require('mobx'))
    : typeof define === 'function' && define.amd
    ? define(['exports', '@angular/core', 'mobx'], factory)
    : ((global = global || self),
      factory((global['mobx-angular'] = {}), global.i0, global.mobx));
})(this, function(exports, i0, mobx) {
  'use strict';

  // import { mobxAngularDebug } from '../utils/mobx-angular-debug';
  class MobxAutorunDirective {
    constructor(templateRef, viewContainer) {
      this.templateRef = templateRef;
      this.viewContainer = viewContainer;
      this.templateBindings = {};
    }
    ngOnInit() {
      this.view = this.viewContainer.createEmbeddedView(this.templateRef);
      if (this.dispose) this.dispose();
      if (this.shouldDetach()) {
        this.view.detach();
      }
      this.autoDetect(this.view);
      // mobxAngularDebug(this.view, this.dispose);
    }
    shouldDetach() {
      return this.mobxAutorun && this.mobxAutorun.detach;
    }
    autoDetect(view) {
      this.dispose = mobx.autorun(() => view.detectChanges());
    }
    ngOnDestroy() {
      if (this.dispose) this.dispose();
    }
  }
  MobxAutorunDirective.ɵfac = function MobxAutorunDirective_Factory(t) {
    return new (t || MobxAutorunDirective)(
      i0['ɵɵdirectiveInject'](i0.TemplateRef),
      i0['ɵɵdirectiveInject'](i0.ViewContainerRef)
    );
  };
  MobxAutorunDirective.ɵdir = i0['ɵɵdefineDirective']({
    type: MobxAutorunDirective,
    selectors: [['', 'mobxAutorun', '']],
    inputs: { mobxAutorun: 'mobxAutorun' }
  });

  class MobxAutorunSyncDirective extends MobxAutorunDirective {
    constructor(templateRef, viewContainer) {
      super(templateRef, viewContainer);
      this.templateRef = templateRef;
      this.viewContainer = viewContainer;
    }
    autoDetect(view) {
      // prettier-ignore
      console.warn('mobxAutorunSync is deprecated, please use mobxAutorun instead - it\'s doing exactly the same thing');
      this.dispose = mobx.autorun(() => {
        view['detectChanges']();
      });
    }
  }
  MobxAutorunSyncDirective.ɵfac = function MobxAutorunSyncDirective_Factory(t) {
    return new (t || MobxAutorunSyncDirective)(
      i0['ɵɵdirectiveInject'](i0.TemplateRef),
      i0['ɵɵdirectiveInject'](i0.ViewContainerRef)
    );
  };
  MobxAutorunSyncDirective.ɵdir = i0['ɵɵdefineDirective']({
    type: MobxAutorunSyncDirective,
    selectors: [['', 'mobxAutorunSync', '']],
    features: [i0['ɵɵInheritDefinitionFeature']]
  });

  class MobxReactionDirective extends MobxAutorunDirective {
    constructor(templateRef, viewContainer) {
      super(templateRef, viewContainer);
      this.templateRef = templateRef;
      this.viewContainer = viewContainer;
    }
    autoDetect(view) {
      this.dispose = mobx.reaction(
        this.mobxReaction,
        () => {
          view['detectChanges']();
        },
        { fireImmediately: true }
      );
    }
  }
  MobxReactionDirective.ɵfac = function MobxReactionDirective_Factory(t) {
    return new (t || MobxReactionDirective)(
      i0['ɵɵdirectiveInject'](i0.TemplateRef),
      i0['ɵɵdirectiveInject'](i0.ViewContainerRef)
    );
  };
  MobxReactionDirective.ɵdir = i0['ɵɵdefineDirective']({
    type: MobxReactionDirective,
    selectors: [['', 'mobxReaction', '']],
    inputs: { mobxReaction: 'mobxReaction' },
    features: [i0['ɵɵInheritDefinitionFeature']]
  });

  class MobxAngularModule {}
  MobxAngularModule.ɵmod = i0['ɵɵdefineNgModule']({ type: MobxAngularModule });
  MobxAngularModule.ɵinj = i0['ɵɵdefineInjector']({
    factory: function MobxAngularModule_Factory(t) {
      return new (t || MobxAngularModule)();
    },
    imports: [[]]
  });
  (function() {
    (typeof ngJitMode === 'undefined' || ngJitMode) &&
      i0['ɵɵsetNgModuleScope'](MobxAngularModule, {
        declarations: [
          MobxAutorunDirective,
          MobxAutorunSyncDirective,
          MobxReactionDirective
        ],
        exports: [
          MobxAutorunDirective,
          MobxAutorunSyncDirective,
          MobxReactionDirective
        ]
      });
  })();
  function actionInternal(...args) {
    return mobx.action(...args);
  }
  const action = Object.assign(actionInternal, mobx.action);
  function computedInternal(...args) {
    return mobx.computed(...args);
  }
  const computed = Object.assign(computedInternal, mobx.computed);
  function observableInternal(...args) {
    return mobx.observable(...args);
  }
  const observable = Object.assign(observableInternal, mobx.observable);

  exports.MobxAngularModule = MobxAngularModule;
  exports.MobxAutorunDirective = MobxAutorunDirective;
  exports.MobxAutorunSyncDirective = MobxAutorunSyncDirective;
  exports.MobxReactionDirective = MobxReactionDirective;
  exports.action = action;
  exports.actionInternal = actionInternal;
  exports.computed = computed;
  exports.observable = observable;

  Object.defineProperty(exports, '__esModule', { value: true });
});
