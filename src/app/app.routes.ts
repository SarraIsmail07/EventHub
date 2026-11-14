import { Routes } from '@angular/router';
import { AccueilEvenements } from './pages/accueil-evenements/accueil-evenements';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'evenements',
    pathMatch: 'full'
  },
  {
    path: 'evenements',
    component: AccueilEvenements
  }
];
