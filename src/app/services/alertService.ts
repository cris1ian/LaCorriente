import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';


@Injectable()
export class AlertService {

    constructor(
        public alertController: AlertController,
        public loadingController: LoadingController
    ) {}

    simpleAlert = (header, subHeader, message) => 
        this.alertController.create({
            header, subHeader, message, buttons: ['OK']
        });


    // presentLoading = async() => {
    //     const loading = await this.loadingController.create({
    //         message: 'Cargando...'
    //     })

    //     return loading.present();
    // }

    // // async function presentLoading() {
    // //     // Prepare a loading controller
    // //     this.loading = await this.loadingController.create({
    // //         message: 'Cargando...'
    // //     });
    // //     // Present the loading controller
    // //     await this.loading.present();
    // // }
    
    // async function dismissLoading() {
    //     // Present the loading controller
    //     await this.loading.dismiss();
    // }
        
}
