import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { LocalStorageService } from 'src/app/services/localStorageService';

import { AuthService } from 'src/app/services/authService';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    account: Account;

    constructor(
        private localStorageService: LocalStorageService,
        // private utilsService: UtilsService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.account = this.localStorageService.getObject('user');
    }

    onChangeImagen = (e) => {
        const files = e && e.target && e.target.files;

        this.authService.uploadImageToAmazon(files[0], this.account.user)
            .toPromise()
            .then(
                resp => {
                    this.account.picture = `${environment.S3_URL}/${this.account.user}.jpg`
                    this.localStorageService.setObject('user', this.account);
                }
            )
    }

    doLogOut() {
        console.log(this.localStorageService.getObject('user'));
        this.localStorageService.setObject('user', null);
        console.log(this.localStorageService.getObject('user'));
        this.router.navigateByUrl('/start');
    }

}
