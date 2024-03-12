// MÓDULOS IMPORTADOS
import { Component, OnInit } from '@angular/core'; // Importar componente
import { GithubService } from '../../services/github.service'; // Importar servicio
import { inject } from '@angular/core'; // Importar inject
 // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule

// COMPONENTE
@Component({
  selector: 'app-github', // Selector del componente
  standalone: true, // Componente standalone
  templateUrl: './github.component.html', // Template del componente
  styleUrls: ['./github.component.css'], // Estilos del componente
  imports: [FormsModule] // Importar CommonModule y FormsModule
})

// CLASE
export class githubComponent implements OnInit {
  nombre_usuario: string = ''; // Variable para el nombre de usuario
  userData: any; // Variable para los datos del usuario
  
  constructor(private githubService: GithubService) {} // Cambiado a GithubService

  // MÉTODOS
  ngOnInit(): void { // Método para inicializar el componente
    this.obtenerInformacionUsuario // Obtener la información del usuario
  }

  obtenerInformacionUsuario(): void { // Método para obtener la información del usuario
    this.githubService.obtenerInformacionUsuario(this.nombre_usuario).subscribe({ // Cambiado a obtenerInformacionUsuario
      next: (data) => { // Cambiado a data
        this.userData = data; // Asignar los datos del usuario
      },
      error: (error) => { // Cambiado a error
        console.error('Error al obtener la información del usuario:', error); // Cambiado a console
      }
    });
  }

  copiarPortapapeles(): void { // Método para copiar al portapapeles
    const jsonSnippet = JSON.stringify(this.userData, null, 2); // Convertir los datos del usuario a JSON
    navigator.clipboard.writeText(jsonSnippet); // Copiar el JSON al portapapeles
  }

}
