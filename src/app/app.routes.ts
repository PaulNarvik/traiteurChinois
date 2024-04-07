import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: "home"
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
        title: 'Accueil'
    },
    {
        path: 'shop',
        pathMatch: 'full',
        component: ShopComponent,
        title: 'Boutique'
    },
    {
        path: "about",
        pathMatch: 'full',
        component: HomeComponent,
        title: "À propos"
    }
];
