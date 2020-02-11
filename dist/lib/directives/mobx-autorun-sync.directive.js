import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';
import { autorun } from 'mobx';
import { MobxAutorunDirective } from './mobx-autorun.directive';
import * as i0 from '@angular/core';
export class MobxAutorunSyncDirective extends MobxAutorunDirective {
  constructor(templateRef, viewContainer) {
    super(templateRef, viewContainer);
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
  }
  autoDetect(view) {
    // prettier-ignore
    console.warn('mobxAutorunSync is deprecated, please use mobxAutorun instead - it\'s doing exactly the same thing');
    this.dispose = autorun(() => {
      view['detectChanges']();
    });
  }
}
MobxAutorunSyncDirective.ɵfac = function MobxAutorunSyncDirective_Factory(t) {
  return new (t || MobxAutorunSyncDirective)(
    i0.ɵɵdirectiveInject(i0.TemplateRef),
    i0.ɵɵdirectiveInject(i0.ViewContainerRef)
  );
};
MobxAutorunSyncDirective.ɵdir = i0.ɵɵdefineDirective({
  type: MobxAutorunSyncDirective,
  selectors: [['', 'mobxAutorunSync', '']],
  features: [i0.ɵɵInheritDefinitionFeature]
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    MobxAutorunSyncDirective,
    [
      {
        type: Directive,
        args: [{ selector: '[mobxAutorunSync]' }]
      }
    ],
    function() {
      return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }];
    },
    null
  );
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1hdXRvcnVuLXN5bmMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2RpcmVjdGl2ZXMvbW9ieC1hdXRvcnVuLXN5bmMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBR2hFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxvQkFBb0I7SUFDaEUsWUFDWSxXQUE2QixFQUM3QixhQUErQjtRQUV6QyxLQUFLLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSHhCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFHM0MsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2Isa0JBQWtCO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0dBQW9HLENBQUMsQ0FBQztRQUVuSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnR0FmVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBRHBDLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGF1dG9ydW4gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IE1vYnhBdXRvcnVuRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2J4LWF1dG9ydW4uZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW21vYnhBdXRvcnVuU3luY10nIH0pXG5leHBvcnQgY2xhc3MgTW9ieEF1dG9ydW5TeW5jRGlyZWN0aXZlIGV4dGVuZHMgTW9ieEF1dG9ydW5EaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIpO1xuICB9XG5cbiAgYXV0b0RldGVjdCh2aWV3KSB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc29sZS53YXJuKCdtb2J4QXV0b3J1blN5bmMgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBtb2J4QXV0b3J1biBpbnN0ZWFkIC0gaXRcXCdzIGRvaW5nIGV4YWN0bHkgdGhlIHNhbWUgdGhpbmcnKTtcblxuICAgIHRoaXMuZGlzcG9zZSA9IGF1dG9ydW4oKCkgPT4ge1xuICAgICAgdmlld1snZGV0ZWN0Q2hhbmdlcyddKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
