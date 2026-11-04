import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-asignacion',
  styleUrl: './asignacion.css',
  templateUrl: './asignacion.html',
})
export class Asignacion {
  Titulo = 'Angular';
  Mostrar = false;
}
