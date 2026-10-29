import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 Samantha
import { Registromi } from '../app/components/registromi/registromi'; 
@Component({
  imports: [RouterOutlet, Registromi]
import { Registro } from './gestion_de_vehiculos/registro/registro';

@Component({
  imports: [RouterOutlet, Registro],
 main
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MotoGest');
}

