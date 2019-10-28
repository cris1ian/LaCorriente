import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/loginService';
import { LocalStorageService } from '../../../services/localStorageService';
import { Router } from '@angular/router';
import { StartPage } from '../../start/start.page';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alertService';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models/account.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    isLoading: boolean = false;
    loading: any;
    // account: Account = ;
    account : Account = { 
        email: '',
        user: '',
        password: '',
        picture: ''
    };

    constructor(
        private loginService: LoginService,
        private localStorageService: LocalStorageService,
        private router: Router,
        public navCtrl: NavController,
        public loadingController: LoadingController,
        private alertService: AlertService
    ) { }

    ngOnInit() {
    }

    doLogin(value: any) {

        this.isLoading = true;
        this.presentLoading("Cargando");

        this.loginService.login(this.account)
            .then(
                (resp: any) => {
                    if (resp && resp.status == 0) {
                        this.localStorageService.setObject('token', resp.result.token);
                        // Corregir esto, es desprolijo
                        this.account = resp.result.user;
                        this.account.picture = `${environment.S3_URL}/${resp.result.user.user}.jpg`;
                        this.localStorageService.setObject('user', resp.result.user);
                        this.navCtrl.navigateRoot('/tabs/home')
                    } else {
                        if (resp.error) {
                            // alert(resp.error.message)
                            this.dismissLoading();
                            this.presentLoading(resp.error.messagee,2000);
                        }
                    }
                }
            )
            .catch(
                err => {
                    this.dismissLoading();
                    if (err.error) {
                        // alert(err.error.message)
                        this.presentLoading(err.error.message,2000);
                    } else {
                        // alert('Error')
                        this.presentLoading("Error",2000);
                    }
                    this.isLoading = false;
                }
            )
            .finally(
                () => {
                    this.isLoading = false;
                    this.dismissLoading();
                }
            )

    }

    public showAlert(titulo: string, texto: string) {
        // let alert = this.alertCtrl.create({
        //     title: titulo,
        //     subTitle: texto,
        //     buttons: ['OK']
        // });
        // alert.present();
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
