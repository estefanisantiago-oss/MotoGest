import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Registromi } from './components/registromi/registromi';

export const routes: Routes = [
  { path: '', component: Registromi },
  { path: '**', redirectTo: '' },
];
