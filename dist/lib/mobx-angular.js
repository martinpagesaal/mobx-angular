import { MobxAutorunDirective } from './directives/mobx-autorun.directive';
import { MobxAutorunSyncDirective } from './directives/mobx-autorun-sync.directive';
import { MobxReactionDirective } from './directives/mobx-reaction.directive';
import { action as mobxAction } from 'mobx';
import { computed as mobxComputed } from 'mobx';
import { observable as mobxObservable } from 'mobx';
import { NgModule } from '@angular/core';
import * as i0 from '@angular/core';
export class MobxAngularModule {}
MobxAngularModule.ɵmod = i0.ɵɵdefineNgModule({ type: MobxAngularModule });
MobxAngularModule.ɵinj = i0.ɵɵdefineInjector({
  factory: function MobxAngularModule_Factory(t) {
    return new (t || MobxAngularModule)();
  },
  imports: [[]]
});
(function() {
  (typeof ngJitMode === 'undefined' || ngJitMode) &&
    i0.ɵɵsetNgModuleScope(MobxAngularModule, {
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
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    MobxAngularModule,
    [
      {
        type: NgModule,
        args: [
          {
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
          }
        ]
      }
    ],
    null,
    null
  );
})();
export {
  MobxAutorunDirective,
  MobxAutorunSyncDirective,
  MobxReactionDirective
};
export function actionInternal(...args) {
  return mobxAction(...args);
}
export const action = Object.assign(actionInternal, mobxAction);
function computedInternal(...args) {
  return mobxComputed(...args);
}
export const computed = Object.assign(computedInternal, mobxComputed);
function observableInternal(...args) {
  return mobxObservable(...args);
}
export const observable = Object.assign(observableInternal, mobxObservable);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1hbmd1bGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21vYngtYW5ndWxhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQ0wsTUFBTSxJQUFJLFVBQVUsRUFJckIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsUUFBUSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxJQUFJLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWV6QyxNQUFNLE9BQU8saUJBQWlCOztxREFBakIsaUJBQWlCO2lIQUFqQixpQkFBaUIsa0JBUG5CLEVBQUU7d0ZBT0EsaUJBQWlCLG1CQVgxQixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLHFCQUFxQixhQUlyQixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtrREFHWixpQkFBaUI7Y0FiN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQix3QkFBd0I7b0JBQ3hCLHFCQUFxQjtpQkFDdEI7YUFDRjs7QUFHRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHdCQUF3QixFQUN4QixxQkFBcUIsRUFDdEIsQ0FBQztBQUVGLE1BQU0sVUFBVSxjQUFjLENBQUMsR0FBRyxJQUFJO0lBQ3BDLE9BQVEsVUFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFDRCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQXNCLE1BQU0sQ0FBQyxNQUFNLENBQ3BELGNBQWMsRUFDZCxVQUFVLENBQ0osQ0FBQztBQUVULFNBQVMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJO0lBQy9CLE9BQVEsWUFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFDRCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQXdCLE1BQU0sQ0FBQyxNQUFNLENBQ3hELGdCQUFnQixFQUNoQixZQUFZLENBQ04sQ0FBQztBQUVULFNBQVMsa0JBQWtCLENBQUMsR0FBRyxJQUFJO0lBQ2pDLE9BQVEsY0FBc0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQTBCLE1BQU0sQ0FBQyxNQUFNLENBQzVELGtCQUFrQixFQUNsQixjQUFjLENBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vYnhBdXRvcnVuRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21vYngtYXV0b3J1bi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTW9ieEF1dG9ydW5TeW5jRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21vYngtYXV0b3J1bi1zeW5jLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNb2J4UmVhY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbW9ieC1yZWFjdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgYWN0aW9uIGFzIG1vYnhBY3Rpb24sXG4gIElPYnNlcnZhYmxlRmFjdG9yeSxcbiAgSU9ic2VydmFibGVGYWN0b3JpZXMsXG4gIElFbmhhbmNlclxufSBmcm9tICdtb2J4JztcbmltcG9ydCB7IGNvbXB1dGVkIGFzIG1vYnhDb21wdXRlZCB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBtb2J4T2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTW9ieEF1dG9ydW5EaXJlY3RpdmUsXG4gICAgTW9ieEF1dG9ydW5TeW5jRGlyZWN0aXZlLFxuICAgIE1vYnhSZWFjdGlvbkRpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIE1vYnhBdXRvcnVuRGlyZWN0aXZlLFxuICAgIE1vYnhBdXRvcnVuU3luY0RpcmVjdGl2ZSxcbiAgICBNb2J4UmVhY3Rpb25EaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNb2J4QW5ndWxhck1vZHVsZSB7fVxuXG5leHBvcnQge1xuICBNb2J4QXV0b3J1bkRpcmVjdGl2ZSxcbiAgTW9ieEF1dG9ydW5TeW5jRGlyZWN0aXZlLFxuICBNb2J4UmVhY3Rpb25EaXJlY3RpdmVcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25JbnRlcm5hbCguLi5hcmdzKSB7XG4gIHJldHVybiAobW9ieEFjdGlvbiBhcyBhbnkpKC4uLmFyZ3MpO1xufVxuZXhwb3J0IGNvbnN0IGFjdGlvbjogdHlwZW9mIG1vYnhBY3Rpb24gPSBPYmplY3QuYXNzaWduKFxuICBhY3Rpb25JbnRlcm5hbCxcbiAgbW9ieEFjdGlvblxuKSBhcyBhbnk7XG5cbmZ1bmN0aW9uIGNvbXB1dGVkSW50ZXJuYWwoLi4uYXJncykge1xuICByZXR1cm4gKG1vYnhDb21wdXRlZCBhcyBhbnkpKC4uLmFyZ3MpO1xufVxuZXhwb3J0IGNvbnN0IGNvbXB1dGVkOiB0eXBlb2YgbW9ieENvbXB1dGVkID0gT2JqZWN0LmFzc2lnbihcbiAgY29tcHV0ZWRJbnRlcm5hbCxcbiAgbW9ieENvbXB1dGVkXG4pIGFzIGFueTtcblxuZnVuY3Rpb24gb2JzZXJ2YWJsZUludGVybmFsKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIChtb2J4T2JzZXJ2YWJsZSBhcyBhbnkpKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgY29uc3Qgb2JzZXJ2YWJsZTogdHlwZW9mIG1vYnhPYnNlcnZhYmxlID0gT2JqZWN0LmFzc2lnbihcbiAgb2JzZXJ2YWJsZUludGVybmFsLFxuICBtb2J4T2JzZXJ2YWJsZVxuKSBhcyBhbnk7XG4iXX0=
