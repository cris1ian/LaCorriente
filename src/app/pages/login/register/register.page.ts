import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService';
import { NavController, LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alertService';
import { Account } from 'src/app/models/account.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    isLoading: boolean = false;
    account: Account;
    loading: any;

    constructor(
        private loginService: LoginService,
        private alertService: AlertService,
        public navCtrl: NavController,
        public loadingController: LoadingController
    ) { }

    ngOnInit() {
    }

    onClickRegister(value: any) {
        this.isLoading = true;

        this.loginService.register(this.account)
            .then(
                (resp: any) => {
                    if (resp && resp.status === 0) {
                        const { message } = resp;
                        ;
                        this.alertService.simpleAlert('Exito', '', message).then(
                            _ => {
                                _.present().then(
                                    _2 => this.navCtrl.navigateRoot('/login')
                                )
                            }
                        )


                    } else {
                        if (resp.error) {
                            alert(resp.error.message)
                        }
                    }
                }
            )
            .catch(err => {
                this.dismissLoading();
                if (err.error) {
                    // alert(err.error.message)
                    this.presentLoading(err.error.message, 2000);
                } else {
                    // alert('Error')
                    this.presentLoading("Error", 2000);
                }
                this.isLoading = false;
            })

            .finally(() => {
                this.isLoading = false;
                this.dismissLoading();
            })

    }

    async presentLoading(info: string, time: number = 0) {
        // Prepare a loading controller
        this.loading = await this.loadingController.create({
            message: info,
            duration: time
        });
        // Present the loading controller
        await this.loading.present();
    }

    async dismissLoading() {
        // Present the loading controller
        await this.loading.dismiss();
    }

}
