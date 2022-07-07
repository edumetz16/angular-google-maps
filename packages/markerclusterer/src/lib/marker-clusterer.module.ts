import { AgmCoreModule } from '@edumetz16/agm-core2';
import { NgModule } from '@angular/core';
import { AgmMarkerCluster } from './directives/marker-cluster';

@NgModule({
  imports: [AgmCoreModule],
  declarations: [AgmMarkerCluster],
  exports: [AgmMarkerCluster],
})
export class AgmMarkerClustererModule {
}
