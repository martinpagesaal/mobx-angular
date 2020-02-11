import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { reaction } from 'mobx';
import { MobxAutorunDirective } from './mobx-autorun.directive';
import * as i0 from '@angular/core';
export class MobxReactionDirective extends MobxAutorunDirective {
  constructor(templateRef, viewContainer) {
    super(templateRef, viewContainer);
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
  }
  autoDetect(view) {
    this.dispose = reaction(
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
    i0.ɵɵdirectiveInject(i0.TemplateRef),
    i0.ɵɵdirectiveInject(i0.ViewContainerRef)
  );
};
MobxReactionDirective.ɵdir = i0.ɵɵdefineDirective({
  type: MobxReactionDirective,
  selectors: [['', 'mobxReaction', '']],
  inputs: { mobxReaction: 'mobxReaction' },
  features: [i0.ɵɵInheritDefinitionFeature]
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    MobxReactionDirective,
    [
      {
        type: Directive,
        args: [{ selector: '[mobxReaction]' }]
      }
    ],
    function() {
      return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }];
    },
    {
      mobxReaction: [
        {
          type: Input
        }
      ]
    }
  );
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1yZWFjdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvZGlyZWN0aXZlcy9tb2J4LXJlYWN0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHaEUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG9CQUFvQjtJQUc3RCxZQUNZLFdBQTZCLEVBQzdCLGFBQStCO1FBRXpDLEtBQUssQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFIeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUczQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUk7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFlBQVksRUFDakIsR0FBRyxFQUFFO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUNELEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUMxQixDQUFDO0lBQ0osQ0FBQzs7MEZBbEJVLHFCQUFxQjswREFBckIscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FEakMsU0FBUztlQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFOztrQkFFdEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWFjdGlvbiB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgTW9ieEF1dG9ydW5EaXJlY3RpdmUgfSBmcm9tICcuL21vYngtYXV0b3J1bi5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbW9ieFJlYWN0aW9uXScgfSlcbmV4cG9ydCBjbGFzcyBNb2J4UmVhY3Rpb25EaXJlY3RpdmUgZXh0ZW5kcyBNb2J4QXV0b3J1bkRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIG1vYnhSZWFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJvdGVjdGVkIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXIpO1xuICB9XG5cbiAgYXV0b0RldGVjdCh2aWV3KSB7XG4gICAgdGhpcy5kaXNwb3NlID0gcmVhY3Rpb24oXG4gICAgICB0aGlzLm1vYnhSZWFjdGlvbixcbiAgICAgICgpID0+IHtcbiAgICAgICAgdmlld1snZGV0ZWN0Q2hhbmdlcyddKCk7XG4gICAgICB9LFxuICAgICAgeyBmaXJlSW1tZWRpYXRlbHk6IHRydWUgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
