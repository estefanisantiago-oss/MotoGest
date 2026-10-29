import { Routes } from '@angular/router';
import { Prueba } from '../components/prueba/prueba';

export const routes: Routes = [
    {path: '', component: Prueba},
    {path: '**', redirectTo:''}

];
