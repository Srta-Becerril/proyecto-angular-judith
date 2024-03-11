import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Cambiado a HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey = 'jWiQAqvg3f6XgkaN9WAijCq9NIQ2fVergoAKUrvY'; 
  private apiUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) { } // Cambiado a HttpClient

  getAstronomyPicture(date?: string): Observable<any> {
    let url = `${this.apiUrl}?api_key=${this.apiKey}`;
    if (date) {
      url += `&date=${date}`;
    }
    return this.http.get(url);
  }
  
}
