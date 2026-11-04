import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-pruebaformulario',
  styleUrl: './pruebaformulario.css',
  templateUrl: './pruebaformulario.html',
})
export class Pruebaformulario {
nombre = ''
enviarformulario ()

{this.enviado = true}

}

