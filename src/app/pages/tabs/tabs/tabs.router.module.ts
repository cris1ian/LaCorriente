import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'mybaby',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../mybaby/mybaby.module').then(m => m.MybabyPageModule)
                    }
                ]
            },
            {
                path: 'calendar',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../calendar/calendar.module').then(m => m.CalendarPageModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../messages/messages.module').then(m => m.MessagesPageModule)
                    }
                ]
            },
            {
                path: 'files',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../files/files.module').then(m => m.FilesPageModule)
                    }
                ]
            },
            {
                path: '/tabs',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '/tabs',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
