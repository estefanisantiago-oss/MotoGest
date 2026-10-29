import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Registro } from './gestion_de_vehiculos/registro/registro';

export const routes: Routes = [
    {path: '',component: Registro},
    {path:'**',redirectTo:''}
];
