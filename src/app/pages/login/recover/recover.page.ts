import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService';
import { Account } from 'src/app/models/account.model';

@Component({
    selector: 'app-recover',
    templateUrl: './recover.page.html',
    styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
    isLoading: boolean = false;
    account: Account;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
    }
}
