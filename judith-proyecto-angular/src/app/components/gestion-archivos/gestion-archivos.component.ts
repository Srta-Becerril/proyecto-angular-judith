import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestion-archivos',
  templateUrl: './gestion-archivos.component.html',
  styleUrls: ['./gestion-archivos.component.css']
})
export class GestionArchivosComponent {
  uploadedFile: File | null = null;

  constructor(private httpClient: HttpClient) {}

  onFileSelected(event: any): void {
    this.uploadedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.uploadedFile) {
      const formData = new FormData();
      formData.append('file', this.uploadedFile);

      this.httpClient.post<any>('URL_DEL_MICROSERVICIO', formData).subscribe(
        response => {
          console.log('Archivo subido exitosamente:', response);
        },
        error => {
          console.error('Error al subir el archivo:', error);
        }
      );
    }
  }
}


