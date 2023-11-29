import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvernightSleepLogPageRoutingModule } from './overnight-sleep-log-routing.module';

import { OvernightSleepLogPage } from './overnight-sleep-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvernightSleepLogPageRoutingModule
  ],
  declarations: [OvernightSleepLogPage]
})
export class OvernightSleepLogPageModule {}
