import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    { path: 'login', loadChildren: './pages/login/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './pages/login/register/register.module#RegisterPageModule' },
    { path: 'recover', loadChildren: './pages/login/recover/recover.module#RecoverPageModule' },
    { path: 'tabs', loadChildren: './pages/tabs/tabs/tabs.module#TabsPageModule' },
    { path: 'start', loadChildren: './pages/start/start.module#StartPageModule' },
    { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
    { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }