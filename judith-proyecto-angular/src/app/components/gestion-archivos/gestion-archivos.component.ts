import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestion-archivos',
  templateUrl: './gestion-archivos.component.html',
  styleUrls: ['./gestion-archivos.component.css']
})
export class GestionArchivosComponent {
  uploadedFile: File | null = null;
  uploadedFiles: File[] = [];
  microservicioURL = 'http://localhost:4200/upload';

  constructor(private httpClient: HttpClient) {}

  onFileSelected(event: any): void {
    this.uploadedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.uploadedFile) {
      const formData = new FormData();
      formData.append('file', this.uploadedFile);

      this.httpClient.post<any>(this.microservicioURL, formData).subscribe(
        response => {
          console.log('Archivo subido exitosamente:', response);

          // Agregar el archivo a la lista de archivos subidos
          if (this.uploadedFile !== null) {
            formData.append('file', this.uploadedFile);
          }
          
          // Limpiar la variable después de la subida
          this.uploadedFile = null;
        },
        error => {
          console.error('Error al subir el archivo:', error);
        }
      );
    }
  }
}




