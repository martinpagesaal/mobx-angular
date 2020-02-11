import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { autorun } from 'mobx';
import * as i0 from '@angular/core';
// import { mobxAngularDebug } from '../utils/mobx-angular-debug';
export class MobxAutorunDirective {
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
    this.dispose = autorun(() => view.detectChanges());
  }
  ngOnDestroy() {
    if (this.dispose) this.dispose();
  }
}
MobxAutorunDirective.ɵfac = function MobxAutorunDirective_Factory(t) {
  return new (t || MobxAutorunDirective)(
    i0.ɵɵdirectiveInject(i0.TemplateRef),
    i0.ɵɵdirectiveInject(i0.ViewContainerRef)
  );
};
MobxAutorunDirective.ɵdir = i0.ɵɵdefineDirective({
  type: MobxAutorunDirective,
  selectors: [['', 'mobxAutorun', '']],
  inputs: { mobxAutorun: 'mobxAutorun' }
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    MobxAutorunDirective,
    [
      {
        type: Directive,
        args: [{ selector: '[mobxAutorun]' }]
      }
    ],
    function() {
      return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }];
    },
    {
      mobxAutorun: [
        {
          type: Input
        }
      ]
    }
  );
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1hdXRvcnVuLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9kaXJlY3RpdmVzL21vYngtYXV0b3J1bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUdYLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUMvQixrRUFBa0U7QUFHbEUsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUNZLFdBQTZCLEVBQzdCLGFBQStCO1FBRC9CLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFQakMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBUTdCLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwRSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWpDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQiw2Q0FBNkM7SUFDL0MsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUEwQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7d0ZBakNVLG9CQUFvQjt5REFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FEaEMsU0FBUztlQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs7a0JBS3JDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIEVtYmVkZGVkVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGF1dG9ydW4gfSBmcm9tICdtb2J4Jztcbi8vIGltcG9ydCB7IG1vYnhBbmd1bGFyRGVidWcgfSBmcm9tICcuLi91dGlscy9tb2J4LWFuZ3VsYXItZGVidWcnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbW9ieEF1dG9ydW5dJyB9KVxuZXhwb3J0IGNsYXNzIE1vYnhBdXRvcnVuRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgdGVtcGxhdGVCaW5kaW5ncyA9IHt9O1xuICBwcm90ZWN0ZWQgZGlzcG9zZTogYW55O1xuICBwcm90ZWN0ZWQgdmlldzogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIEBJbnB1dCgpIG1vYnhBdXRvcnVuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52aWV3ID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcblxuICAgIGlmICh0aGlzLmRpc3Bvc2UpIHRoaXMuZGlzcG9zZSgpO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkRGV0YWNoKCkpIHtcbiAgICAgIHRoaXMudmlldy5kZXRhY2goKTtcbiAgICB9XG4gICAgdGhpcy5hdXRvRGV0ZWN0KHRoaXMudmlldyk7XG4gICAgLy8gbW9ieEFuZ3VsYXJEZWJ1Zyh0aGlzLnZpZXcsIHRoaXMuZGlzcG9zZSk7XG4gIH1cblxuICBzaG91bGREZXRhY2goKSB7XG4gICAgcmV0dXJuIHRoaXMubW9ieEF1dG9ydW4gJiYgdGhpcy5tb2J4QXV0b3J1bi5kZXRhY2g7XG4gIH1cblxuICBhdXRvRGV0ZWN0KHZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+KSB7XG4gICAgdGhpcy5kaXNwb3NlID0gYXV0b3J1bigoKSA9PiB2aWV3LmRldGVjdENoYW5nZXMoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5kaXNwb3NlKSB0aGlzLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19
