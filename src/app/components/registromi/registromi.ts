import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Reporte {
  id: number;
  tipo: string;
  vehiculo: string;
  descripcion: string;
  prioridad: string;
  estado: string;
  fecha: string;
}

@Component({
  imports: [RouterLink, CommonModule, FormsModule],
  selector: 'app-registromi',
  styleUrl: './registromi.css',
  templateUrl: './registromi.html',
})
export class Registromi {
  titulo = 'MotoGest';
  mostrar = false;
  busqueda = '';
  filtro = 'Todos';
  vista = 'tarjetas';
  mostrarFormulario = false;

  reportes: Reporte[] = [
    {
      id: 1042,
      tipo: 'Incidente',
      vehiculo: 'Nissan NP300 - ABC123',
      descripcion: 'Falla en el sistema de frenos',
      prioridad: 'Alta',
      estado: 'Abierto',
      fecha: '01/11/2026',
    },
    {
      id: 1041,
      tipo: 'Mantenimiento',
      vehiculo: 'Toyota Hilux - DEF456',
      descripcion: 'Cambio de aceite y filtros',
      prioridad: 'Media',
      estado: 'En proceso',
      fecha: '31/10/2026',
    },
    {
      id: 1040,
      tipo: 'Incidente',
      vehiculo: 'Ford Transit - GHI789',
      descripcion: 'Falla en luces delanteras',
      prioridad: 'Media',
      estado: 'Abierto',
      fecha: '30/10/2026',
    },
    {
      id: 1039,
      tipo: 'Mantenimiento',
      vehiculo: 'Chevrolet Aveo - JKL321',
      descripcion: 'Revisión general del motor',
      prioridad: 'Baja',
      estado: 'Completado',
      fecha: '28/10/2026',
    },
    {
      id: 1038,
      tipo: 'Mantenimiento',
      vehiculo: 'Nissan Versa - MNO654',
      descripcion: 'Cambio de llantas',
      prioridad: 'Baja',
      estado: 'Completado',
      fecha: '27/10/2026',
    },
    {
      id: 1037,
      tipo: 'Incidente',
      vehiculo: 'Volkswagen Vento - PQR987',
      descripcion: 'Golpe en defensa trasera',
      prioridad: 'Alta',
      estado: 'En proceso',
      fecha: '26/10/2026',
    },
  ];

  mantenimientos = [
    { vehiculo: 'Nissan NP300', servicio: 'Revisión de frenos', fecha: '04/11/2026' },
    { vehiculo: 'Toyota Hilux', servicio: 'Cambio de aceite', fecha: '06/11/2026' },
    { vehiculo: 'Ford Transit', servicio: 'Afinación general', fecha: '09/11/2026' },
  ];

  nuevo = { tipo: 'Incidente', vehiculo: '', descripcion: '', prioridad: 'Media' };

  get total() {
    return this.reportes.length;
  }
  get pendientes() {
    return this.reportes.filter((r) => r.estado !== 'Completado').length;
  }
  get completados() {
    return this.reportes.filter((r) => r.estado === 'Completado').length;
  }
  get urgentes() {
    return this.reportes.filter((r) => r.prioridad === 'Alta' && r.estado !== 'Completado').length;
  }

  get filtrados() {
    const texto = this.busqueda.trim().toLowerCase();
    return this.reportes.filter(
      (r) =>
        (this.filtro === 'Todos' || r.estado === this.filtro) &&
        (r.vehiculo.toLowerCase().includes(texto) ||
          r.descripcion.toLowerCase().includes(texto) ||
          String(r.id).includes(texto)),
    );
  }

  cambiarEstado(reporte: Reporte) {
    if (reporte.estado === 'Abierto') reporte.estado = 'En proceso';
    else if (reporte.estado === 'En proceso') reporte.estado = 'Completado';
    else reporte.estado = 'Abierto';
  }

  agregarReporte() {
    if (!this.nuevo.vehiculo.trim() || !this.nuevo.descripcion.trim()) {
      alert('Completa el vehículo y la descripción');
      return;
    }
    const nuevoId = Math.max(1000, ...this.reportes.map((r) => r.id)) + 1;
    this.reportes.unshift({
      id: nuevoId,
      tipo: this.nuevo.tipo,
      vehiculo: this.nuevo.vehiculo.trim(),
      descripcion: this.nuevo.descripcion.trim(),
      prioridad: this.nuevo.prioridad,
      estado: 'Abierto',
      fecha: new Date().toLocaleDateString('es-MX'),
    });
    this.nuevo = { tipo: 'Incidente', vehiculo: '', descripcion: '', prioridad: 'Media' };
    this.mostrarFormulario = false;
  }

  eliminarReporte(id: number) {
    if (confirm('¿Deseas eliminar este reporte?')) {
      this.reportes = this.reportes.filter((r) => r.id !== id);
    }
  }
}
