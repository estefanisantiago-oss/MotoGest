import { Routes } from '@angular/router';
import { Asignacion } from './asignaciones/asignaciones/asignacion/asignacion';

export const routes: Routes = [
    {path: '',component: Asignacion},
    {path:'**',redirectTo:''}
];
