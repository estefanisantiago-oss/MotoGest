import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Asignacion} from './asignaciones/asignaciones/asignacion/asignacion';

@Component({
  imports: [RouterOutlet, Asignacion], // nombre del componente 
=======
import { Registro } from './gestion_de_vehiculos/registro/registro';
@Component({
  imports: [Registro],
>>>>>>> 82550622f564342eb45c62a8f2a688d7af5f8cf4
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MotoGest');
}
