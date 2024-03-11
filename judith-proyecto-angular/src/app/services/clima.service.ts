// MÓDULOS
import { Injectable, inject } from '@angular/core'; // Importar inject
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs'; // Importar Observable

// SERVICIO
@Injectable({ 
  providedIn: 'root' // Inyectar en el root
})

// CLASE
export class ClimaService { 
  private _http = inject(HttpClient); // Inyectar HttpClient
  private urlBase = 'https://api.openweathermap.org/data/2.5/weather'; // URL de la API
  private apiKey = '605507acf87117e111e54a3ab5238541'; // Clave de la API
  private difKelvin = 273.15; // Diferencia entre kelvin y celsius

  // METODOS
  buscarClima(ciudad: string): Observable<any> { // Búsqueda de clima
    return this._http.get(`${this.urlBase}?q=${ciudad}&appid=${this.apiKey}`); // URL de la API
  }

  procesarDatosClima(data: any): any { // Procesar los datos
    return {
      ciudadNombre: data.name, // Nombre de la ciudad
      paisNombre: data.sys.country, // Nombre del país
      temperatura: Math.floor(data.main.temp - this.difKelvin), // Temperatura
      humedad: data.main.humidity, // Humedad
      descripcion: data.weather[0].description, // Descripción
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` // Icono
    };
  }
} 
//otra forma de crear el servicio, sin el constructor

/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '605507acf87117e111e54a3ab5238541';
  private difKelvin = 273.15;

  constructor(private http: HttpClient) { }

  buscarClima(ciudad: string): Observable<any> {
    return this.http.get(`${this.urlBase}?q=${ciudad}&appid=${this.apiKey}`);
  }

  procesarDatosClima(data: any): any {
    return {
      ciudadNombre: data.name,
      paisNombre: data.sys.country,
      temperatura: Math.floor(data.main.temp - this.difKelvin),
      humedad: data.main.humidity,
      descripcion: data.weather[0].description,
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
  }
}

 */
