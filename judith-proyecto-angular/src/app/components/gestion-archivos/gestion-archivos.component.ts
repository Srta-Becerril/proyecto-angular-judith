// MÓDULOS IMPORTADOS
import { Component } from '@angular/core'; // Importar componente
import { HttpClient } from '@angular/common/http'; // Importar HttpClient

// COMPONENTE
@Component({
  selector: 'app-gestion-archivos', // Selector del componente
  templateUrl: './gestion-archivos.component.html', // // Archivo HTML
  styleUrls: ['./gestion-archivos.component.css'] // Archivo CSS
})

// CLASE
export class GestionArchivosComponent {
  uploadedFile: File | null = null; // Variable para almacenar el archivo subido
  uploadedFiles: File[] = []; // Variable para almacenar la lista de archivos subidos
  microservicioURL = 'http://localhost:3000/upload'; // URL del microservicio

  constructor(private httpClient: HttpClient) {} // Constructor

  // MÉTODOS
  onFileSelected(event: any): void { // Método para manejar la selección de un archivo
    this.uploadedFile = event.target.files[0]; // Asignar el archivo seleccionado
  }

  uploadFile(): void { // Método para subir un archivo
    if (this.uploadedFile) { // Verificar que se haya seleccionado un archivo
      const formData = new FormData(); // Crear un objeto FormData
      formData.append('file', this.uploadedFile); // Agregar el archivo

      this.httpClient.post<any>(this.microservicioURL, formData).subscribe( // Enviar el archivo al microservicio
        response => { // Respuesta del microservicio
          console.log('Archivo subido exitosamente:', response); // Imprimir la respuesta

          // Agregar el archivo a la lista de archivos subidos
          if (this.uploadedFile !== null) { // Verificar que se haya seleccionado un archivo
            formData.append('file', this.uploadedFile); // Agregar el archivo
          }
          
          // Limpiar la variable después de la subida
          this.uploadedFile = null;
        },
        error => { // Error del microservicio
          console.error('Error al subir el archivo:', error);
        }
      );
    }
  }
}




