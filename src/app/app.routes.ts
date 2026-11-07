
import { Routes } from '@angular/router';
import { Registro } from './Gestion-de-conductores/registro/registro';
import { Registromi } from './components/registromi/registromi';

export const routes: Routes = [
  { path: '', component: Registro },
  { path: 'registromi', component: Registromi },
  { path: '**', redirectTo: '' }
];




