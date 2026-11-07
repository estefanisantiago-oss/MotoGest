import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  
  items: MenuItem[] = [
    { label: 'Inicio', routerLink: '/' },
    { label: 'Vehículos', routerLink: '/vehiculos' },
    { label: 'Conductores', routerLink: '/conductores' },
    { label: 'Asignaciones', routerLink: '/asignaciones' },
    { label: 'Mantenimiento e Incidencias', routerLink: '/mantenimiento' }
  ];
  }