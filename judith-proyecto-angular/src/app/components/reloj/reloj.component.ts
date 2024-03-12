import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj-mundial',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojMundialComponent implements OnInit {
  horaActual: Date = new Date();
  horaColombia!: Date;
  horaCharlotte!: Date;
  horaArgentina!: Date;

  ngOnInit() {
    this.actualizarHoras();
    setInterval(() => this.actualizarHoras(), 1000); // Actualizar cada segundo
  }

  private actualizarHoras() {
    this.horaActual = new Date();
    this.horaColombia = this.obtenerHoraConDiferencia(-5); // GMT-5 para Colombia
    this.horaCharlotte = this.obtenerHoraConDiferencia(-4); // GMT-4 para Charlotte
    this.horaArgentina = this.obtenerHoraConDiferencia(-3); // GMT-3 para Argentina
  }

  private obtenerHoraConDiferencia(diferencia: number): Date {
    const horaActualUtc = this.horaActual.getTime() + (this.horaActual.getTimezoneOffset() * 60000);
    return new Date(horaActualUtc + (3600000 * diferencia));
  }

  // Método para formatear la fecha
  formatearFecha(fecha: Date): string {
    return fecha.toLocaleTimeString();
  }
}


