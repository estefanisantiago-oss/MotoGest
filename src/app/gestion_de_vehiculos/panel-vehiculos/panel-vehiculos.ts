import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-panel-vehiculos',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    TableModule,
    TagModule
  ],
  templateUrl: './panel-vehiculos.html',
  styleUrl: './panel-vehiculos.css',
})
export class PanelVehiculos {}