import { ViewContainerRef, TemplateRef } from '@angular/core';
import { MobxAutorunDirective } from './mobx-autorun.directive';
import * as i0 from '@angular/core';
export declare class MobxAutorunSyncDirective extends MobxAutorunDirective {
  protected templateRef: TemplateRef<any>;
  protected viewContainer: ViewContainerRef;
  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef);
  autoDetect(view: any): void;
  static ɵfac: i0.ɵɵFactoryDef<MobxAutorunSyncDirective>;
  static ɵdir: i0.ɵɵDirectiveDefWithMeta<
    MobxAutorunSyncDirective,
    '[mobxAutorunSync]',
    never,
    {},
    {},
    never
  >;
}
