// MÓDULOS
import { Injectable } from '@angular/core'; // Importar inject
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs'; // Importar Observable

// SERVICIO
@Injectable({
  providedIn: 'root' // Inyectar en el root
})

// CLASE
export class NasaService {
  private apiKey = 'jWiQAqvg3f6XgkaN9WAijCq9NIQ2fVergoAKUrvY'; // Clave de la API
  private apiUrl = 'https://api.nasa.gov/planetary/apod'; // URL de la API

  constructor(private http: HttpClient) { } // Constructor

  // MÉTODO
  getAstronomyPicture(date?: string): Observable<any> { // Obtener la información del APOB
    let url = `${this.apiUrl}?api_key=${this.apiKey}`; // URL de la API
    if (date) { // Si hay una fecha, agrega la fecha
      url += `&date=${date}`; 
    }
    return this.http.get(url); // Devuelve la respuesta 
  }
  
}
