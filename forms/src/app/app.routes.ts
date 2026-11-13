import { Routes } from '@angular/router';
import { PageForm } from './components/page-form/page-form';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: 'form',
    component: PageForm,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/form',
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
