import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	title = "the jungle";
  	
  	postObject:object = {
  		userId: 1231231,
  		serieId: 12341,
  		user: {
  			id: 123124123,
  			name: "fulano",
  		},
  		titulo: 'Something',
  		content: 'Texto looooongo',
  		mediaSrc: 'http://something',
  		likes: 21323,
  		createdAt: 1231231231,
  	}

  	constructor(public alertController:AlertController,public toastController:ToastController) {}
  	 async alerta(){
  	 	const alert = await this.alertaController.create({
  	 		header: 'Que ótimo!',
  	 		message:'Deseja avaliar esse filme?',
  	 		buttons: ['Sim','Não']
  	 	});
  	 	await alert.present();
  	 }


  	 async presentToast(){
  		const toast = await this.toastController.create({
  			message:'Esse filme foi adicionado em sua lista',
  			duration:2000
  		});
  	    toast.present();
  	}

}

