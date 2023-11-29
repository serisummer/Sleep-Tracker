import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { IonDatetime, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: './overnight-sleep.page.html',
  styleUrls: ['./overnight-sleep.page.scss'],
})
export class OvernightSleepPage implements OnInit {
	currentTime: Date = new Date();
	timezoneOffset = this.currentTime.getTimezoneOffset();
	startDateTime:string;
    endDateTime:string;

  	constructor(public sleepService:SleepService, private toastController:ToastController) {
		this.currentTime.setMinutes(this.currentTime.getMinutes() - this.timezoneOffset);
		this.startDateTime = this.currentTime.toISOString().slice(0, -7) + '00';
		this.endDateTime = this.currentTime.toISOString().slice(0, -7) + '00';
	}

	ngOnInit() {
	}

	handleDateSelection(event: CustomEvent<IonDatetime>) {
		// event.detail.value contains the selected date and time
		console.log(event.detail.value);
	  }

	async addEntry(start: string, end: string) {
		console.log(start);
		console.log(end);
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
					this.sleepService.logOvernightData(new OvernightSleepData(new Date(start), new Date(end)));
				},
			  },
			],
		  });
		
		  await toast.present();
	}

	

}
