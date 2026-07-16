import { Routes } from '@angular/router';

import { Login } from './auth/login';
import { BoatList } from './boats/boat-list/boat-list';
import {BoatForm} from './boats/boat-form/boat-form';

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
    path: 'boats/new',
    component: BoatForm
  },
  {
    path: 'boats/:id/edit',
    component: BoatForm
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];
