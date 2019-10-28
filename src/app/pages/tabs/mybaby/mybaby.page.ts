import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService';
import { LocalStorageService } from 'src/app/services/localStorageService';
import { Baby } from 'src/app/models/baby.model';

@Component({
    selector: 'app-mybaby',
    templateUrl: './mybaby.page.html',
    styleUrls: ['./mybaby.page.scss'],
})
export class MybabyPage implements OnInit {

    baby: Baby;

    constructor(
        private authService: AuthService,
        private localStorageService: LocalStorageService
    ) { }

    ngOnInit() {
        const user = this.localStorageService.getObject('user')
        this.authService.getBabyByUserEmail(user.email)
            .then(
                baby => this.baby = baby
            )
    }

}
