import { Routes } from '@angular/router';

import { Login } from './auth/login';
import { BoatList } from './boats/boat-list/boat-list';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'boats',
    component: BoatList
  },



  {
    path: '**',
    redirectTo: 'login'
  }

];
