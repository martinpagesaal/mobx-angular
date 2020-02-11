import { MobxAutorunDirective } from './directives/mobx-autorun.directive';
import { MobxAutorunSyncDirective } from './directives/mobx-autorun-sync.directive';
import { MobxReactionDirective } from './directives/mobx-reaction.directive';
import {
  action as mobxAction,
  IObservableFactory,
  IObservableFactories,
  IEnhancer
} from 'mobx';
import { computed as mobxComputed } from 'mobx';
import { observable as mobxObservable } from 'mobx';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MobxAutorunDirective,
    MobxAutorunSyncDirective,
    MobxReactionDirective
  ],
  imports: [],
  exports: [
    MobxAutorunDirective,
    MobxAutorunSyncDirective,
    MobxReactionDirective
  ]
})
export class MobxAngularModule {}

export {
  MobxAutorunDirective,
  MobxAutorunSyncDirective,
  MobxReactionDirective
};

export function actionInternal(...args) {
  return (mobxAction as any)(...args);
}
export const action: typeof mobxAction = Object.assign(
  actionInternal,
  mobxAction
) as any;

function computedInternal(...args) {
  return (mobxComputed as any)(...args);
}
export const computed: typeof mobxComputed = Object.assign(
  computedInternal,
  mobxComputed
) as any;

function observableInternal(...args) {
  return (mobxObservable as any)(...args);
}

export const observable: typeof mobxObservable = Object.assign(
  observableInternal,
  mobxObservable
) as any;
