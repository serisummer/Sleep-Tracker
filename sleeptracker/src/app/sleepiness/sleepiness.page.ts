import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  value: number;

  constructor(public sleepService:SleepService, private toastController:ToastController) {
    this.value = 1;
  }

  ngOnInit() {
  }

  async addEntry(value: number) {
    const toast = await this.toastController.create({
			message: `Are you sure you want to log this entry?`,
			buttons: [
			  {
          text: 'Cancel',
          role: 'cancel',
			  },
			  {
          text: 'Log',
          handler: () => {
            this.sleepService.logSleepinessData(new StanfordSleepinessData(value));
          },
			  },
			],
		});
		
		await toast.present();
  }

}
