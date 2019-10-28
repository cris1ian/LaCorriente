import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/authService';
import { LoginService } from './services/loginService';
import { LocalStorageService } from './services/localStorageService';
import { AlertService } from './services/alertService';
import { Facebook } from '@ionic-native/facebook/ngx';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [ 
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    LoginService,
    AlertService,
    LocalStorageService,
    Facebook
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
