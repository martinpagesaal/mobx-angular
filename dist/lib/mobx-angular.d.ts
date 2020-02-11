import { MobxAutorunDirective } from './directives/mobx-autorun.directive';
import { MobxAutorunSyncDirective } from './directives/mobx-autorun-sync.directive';
import { MobxReactionDirective } from './directives/mobx-reaction.directive';
import { action as mobxAction } from 'mobx';
import { computed as mobxComputed } from 'mobx';
import { observable as mobxObservable } from 'mobx';
import * as i0 from '@angular/core';
import * as i1 from './directives/mobx-autorun.directive';
import * as i2 from './directives/mobx-autorun-sync.directive';
import * as i3 from './directives/mobx-reaction.directive';
export declare class MobxAngularModule {
  static ɵmod: i0.ɵɵNgModuleDefWithMeta<
    MobxAngularModule,
    [
      typeof i1.MobxAutorunDirective,
      typeof i2.MobxAutorunSyncDirective,
      typeof i3.MobxReactionDirective
    ],
    never,
    [
      typeof i1.MobxAutorunDirective,
      typeof i2.MobxAutorunSyncDirective,
      typeof i3.MobxReactionDirective
    ]
  >;
  static ɵinj: i0.ɵɵInjectorDef<MobxAngularModule>;
}
export {
  MobxAutorunDirective,
  MobxAutorunSyncDirective,
  MobxReactionDirective
};
export declare function actionInternal(...args: any[]): any;
export declare const action: typeof mobxAction;
export declare const computed: typeof mobxComputed;
export declare const observable: typeof mobxObservable;
