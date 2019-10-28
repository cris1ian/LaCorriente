import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as crypto from 'crypto-js';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { DefaultResponse } from '../models/defaultResponse.model';
import { Baby } from '../models/baby.model';

@Injectable()
export class AuthService {

    constructor(
        private httpClient: HttpClient,
        private fb: Facebook
    ) { }

    // Login por Body
    login = (email, password) => {
        var password = crypto.MD5(password).toString();
        return this.httpClient.post(
            `${environment.WS_URL}/login`,
            {
                email,
                password
            }
        )
    }

    register = (user, email, password) => {
        var password = crypto.MD5(password).toString();
        return this.httpClient.post(
            `${environment.WS_URL}/register`,
            {
                email,
                password,
                user
            },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            }
        )
    }


    facebookLogin = () => {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
            .catch(e => console.log('Error logging into Facebook', e));
    }



    getBabyByUserEmail = (userEmail: string): Promise<Baby> => 
        this.httpClient
            .get<DefaultResponse<Baby>>(
                `${environment.WS_URL}/babies/user/${userEmail}`
            )
            .toPromise()
            .then(
                resp => resp.result
            )

    uploadImageToAmazon = (myImage: any, userEmail: string) => {

        const formData = new FormData();
        formData.append('myImage', myImage);
    
        return this.httpClient
            .post<DefaultResponse<any>>(
                `${environment.WS_URL}/user/image?userEmail=${userEmail}`,
                formData
            )
    }

}
