import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-ejemplo',
  styleUrl: './ejemplo.css',
  templateUrl: './ejemplo.html',
})
export class Ejemplo {
  nombre: string = '';
  enviado: boolean = false;

  enviar() {
    this.enviado = true;
  }
}
