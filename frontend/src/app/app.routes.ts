import { Routes } from '@angular/router';

import { Login } from './auth/login';
import { BoatList } from './boats/boat-list/boat-list';
import {BoatForm} from './boats/boat-form/boat-form';
import {authGuard} from './auth/auth.guard';

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
    component: BoatList,
    canActivate: [authGuard]
  },

  {
    path: 'boats/new',
    component: BoatForm,
    canActivate: [authGuard]
  },
  {
    path: 'boats/:id/edit',
    component: BoatForm,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];
