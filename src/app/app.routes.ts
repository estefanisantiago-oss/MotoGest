import { Routes } from '@angular/router';
import { Registro } from './Gestion-de-conductores/registro/registro';

export const routes: Routes = [
    {path:'' , component: Registro},
    {path:'**', redirectTo:''}
];
