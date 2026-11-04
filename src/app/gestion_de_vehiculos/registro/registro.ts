import { Component } from '@angular/core';

@Component({
  imports: [RouterLink],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {

  titulo='holamundo';
  mostrar = false;
}

import { RouterLink } from '@angular/router'; 
