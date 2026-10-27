import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registromi } from '../app/components/registromi/registromi'; 
@Component({
  imports: [RouterOutlet, Registromi],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MotoGest');
}
