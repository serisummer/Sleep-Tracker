import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvernightSleepLogPage } from './overnight-sleep-log.page';

const routes: Routes = [
  {
    path: '',
    component: OvernightSleepLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvernightSleepLogPageRoutingModule {}
