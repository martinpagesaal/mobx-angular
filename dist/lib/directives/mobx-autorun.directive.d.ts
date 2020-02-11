import {
  ViewContainerRef,
  TemplateRef,
  OnInit,
  OnDestroy,
  EmbeddedViewRef
} from '@angular/core';
import * as i0 from '@angular/core';
export declare class MobxAutorunDirective implements OnInit, OnDestroy {
  protected templateRef: TemplateRef<any>;
  protected viewContainer: ViewContainerRef;
  protected templateBindings: {};
  protected dispose: any;
  protected view: EmbeddedViewRef<any>;
  mobxAutorun: any;
  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef);
  ngOnInit(): void;
  shouldDetach(): any;
  autoDetect(view: EmbeddedViewRef<any>): void;
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDef<MobxAutorunDirective>;
  static ɵdir: i0.ɵɵDirectiveDefWithMeta<
    MobxAutorunDirective,
    '[mobxAutorun]',
    never,
    { mobxAutorun: 'mobxAutorun' },
    {},
    never
  >;
}
