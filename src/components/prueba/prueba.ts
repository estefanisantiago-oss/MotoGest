import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-prueba',
  styleUrl: './prueba.css',
  templateUrl: './prueba.html',
})
export class Prueba {
  Titulo = 'Prueba de Angular 17'; 
  Mostrar = false;
}
