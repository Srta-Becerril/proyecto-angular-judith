// MÓDULOS IMPORTADOS
import { Component, OnInit } from '@angular/core'; // Importar componente
import { NasaService } from '../../services/nasa.service'; // Importar servicio

// COMPONENTE
@Component({
  selector: 'app-apod', // Selector
  templateUrl: './nasa.component.html', // Archivo HTML
  styleUrls: ['./nasa.component.css'] // Archivo CSS
})

// CLASE
export class NasaComponent implements OnInit {
  astronomyPicture: any; // Variable para almacenar la imagen astronómica

  constructor(private nasaService: NasaService) { } // Constructor

  ngOnInit(): void { // Método para inicializar el componente
    this.getAstronomyPicture(); // Obtener la imagen astronómica
  }

  selectedDate: string | null = null; // Variable para almacenar la fecha seleccionada
  getAstronomyPicture(): void { // Método para obtener la imagen astronómica
    if (this.selectedDate) { // Comprobar si hay una fecha seleccionada
      this.nasaService.getAstronomyPicture(this.selectedDate) // Obtener la imagen astronómica para la fecha seleccionada
        .subscribe({ 
          next: (data) => { // Cambiado a data
            this.astronomyPicture = data; // Asignar la imagen astronómica
          },
          error: (error) => { // Cambiado a error
            console.error('Error al obtener la imagen astronómica:', error); // Cambiado a console
          }
        });
    } else {
      this.nasaService.getAstronomyPicture() // Obtener la imagen astronómica para la fecha actual
        .subscribe({
          next: (data) => { // Cambiado a data
            this.astronomyPicture = data; // Asignar la imagen astronómica
          },
          error: (error) => { // Cambiado a error
            console.error('Error al obtener la imagen astronómica:', error); // Cambiado a console
          }
        });
    }
  }
}


