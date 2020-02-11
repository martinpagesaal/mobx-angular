import { ViewContainerRef, TemplateRef } from '@angular/core';
import { MobxAutorunDirective } from './mobx-autorun.directive';
import * as i0 from '@angular/core';
export declare class MobxReactionDirective extends MobxAutorunDirective {
  protected templateRef: TemplateRef<any>;
  protected viewContainer: ViewContainerRef;
  mobxReaction: any;
  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef);
  autoDetect(view: any): void;
  static ɵfac: i0.ɵɵFactoryDef<MobxReactionDirective>;
  static ɵdir: i0.ɵɵDirectiveDefWithMeta<
    MobxReactionDirective,
    '[mobxReaction]',
    never,
    { mobxReaction: 'mobxReaction' },
    {},
    never
  >;
}
