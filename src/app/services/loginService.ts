import { Injectable } from '@angular/core';
import { AuthService } from './authService';
import { LocalStorageService } from './localStorageService';


@Injectable()
export class LoginService {

    constructor(
        private authService: AuthService,
        private localStorageService: LocalStorageService
    ) { }

    login = (account) =>
        this.authService.login(account.user, account.password).toPromise()

    facebookLogin = (account) =>
        this.authService.facebookLogin()

    register = (account) =>
        this.authService.register(account.user, account.email, account.password).toPromise()

}
