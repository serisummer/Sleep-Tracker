import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-overnight-sleep-log',
  templateUrl: './overnight-sleep-log.page.html',
  styleUrls: ['./overnight-sleep-log.page.scss'],
})
export class OvernightSleepLogPage implements OnInit {

  constructor(public sleepService:SleepService, private alertController:AlertController) {
	}

	ngOnInit() {
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allOvernightSleepData() {
		return SleepService.AllOvernightData;
	}

  async deleteEntry(entry: OvernightSleepData) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete this entry?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.sleepService.deleteOvernightData(entry);
          },
        },
      ],
    });
  
    await alert.present();
  }
}
