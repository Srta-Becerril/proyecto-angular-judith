// MÓDULOS IMPORTADOS
import { Component } from '@angular/core'; // Importar componente
import { FormsModule } from '@angular/forms'; // Importar FormsModule


// COMPONENTE
@Component({
  selector: 'app-clima', // Selector del componente
  standalone: true, // Componente standalone
  imports: [FormsModule], // Importar FormsModule
  templateUrl: './clima.component.html', // URL del archivo HTML
  styleUrl: './clima.component.css' // URL del archivo CSS

})

// CLASE
export class ClimaComponent {
  urlBase = 'https://api.openweathermap.org/data/2.5/weather'; // URL base de la API
  api_key = '605507acf87117e111e54a3ab5238541'; // Clave de la API
  difKelvin = 273.15; // Diferencia entre Kelvin y Celsius
  datosClima: any = {}; // Datosos del clima
  ciudad: string = ''; // Ciudad ingresada por el usuario

  constructor() { } // Constructor

  // MÉTODOS
  buscarClima(ciudad: string) { // Búsqueda de clima
    if (ciudad) {
      this.fetchDatosClima(ciudad); // Llamada a la API
    }
  }

  fetchDatosClima(ciudad: string) { // Llamada a la API
    fetch(`${this.urlBase}?q=${ciudad}&appid=${this.api_key}`) // URL de la API
      .then(data => data.json()) // Convertir la respuesta a formato JSON
      .then(data => this.mostrarDatosClima(data)); // Mostrar los datos
  }

  mostrarDatosClima(data: any) { // Mostrar los datos
    this.datosClima = { // Datosos del clima
      ciudadNombre: data.name, // Nombre de la ciudad
      paisNombre: data.sys.country, // Nombre del país
      temperatura: Math.floor(data.main.temp - this.difKelvin), // Temperatura
      humedad: data.main.humidity, // Humedad
      descripcion: data.weather[0].description, // Descripción
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` // Icono
    };
  }
}

