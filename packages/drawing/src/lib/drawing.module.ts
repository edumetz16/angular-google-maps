import { AgmCoreModule } from '@edumetz16/agm-core2';
import { NgModule } from '@angular/core';
import { AgmDrawingManager } from './directives/drawing-manager';
import { AgmDrawingManagerTrigger } from './directives/drawing-manager-trigger';

@NgModule({
  imports: [AgmCoreModule],
  declarations: [AgmDrawingManager, AgmDrawingManagerTrigger],
  exports: [AgmDrawingManager, AgmDrawingManagerTrigger],
})
export class AgmDrawingModule {
}
