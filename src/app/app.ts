import { Component, signal} from '@angular/core';
import { Registro} from './Gestion-de-conductores/registro/registro'; 
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [Registro,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MotoGest');
}
