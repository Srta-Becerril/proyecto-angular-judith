// MÓDULOS
import { Injectable } from '@angular/core'; // Importar inject
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs'; // Importar Observable

// SERVICIO
@Injectable({
  providedIn: 'root' // Inyectar en el root
})

// CLASE
export class GithubService {
  private apiUrl = 'https://api.github.com/users'; // URL de la API

  constructor(private http: HttpClient) { } // Constructor

  // MÉTODO
  obtenerInformacionUsuario(nombre_usuario: string): Observable<any> { // Obtener la información del usuario
    return this.http.get(`${this.apiUrl}/${nombre_usuario}`); // URL de la información del usuario
  }
}


