import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Accueil'
    },
    {
        path: 'shop',
        component: ShopComponent,
        title: 'Boutique'
    },
    {
        path: "about",
        component: HomeComponent,
        title: "À propos"
    }
];
