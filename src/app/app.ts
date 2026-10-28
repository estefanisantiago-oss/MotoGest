import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Asignacion} from './asignaciones/asignaciones/asignacion/asignacion';

@Component({
  imports: [RouterOutlet, Asignacion], // nombre del componente 
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MotoGest');
}
