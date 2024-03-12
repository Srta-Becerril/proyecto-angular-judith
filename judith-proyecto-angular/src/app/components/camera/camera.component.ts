// MÓDULOS IMPORTADOS
import { Component, ElementRef, ViewChild } from '@angular/core'; // Importar componente

// COMPONENTE
@Component({
  selector: 'app-camera', // Selector del componente
  templateUrl: './camera.component.html', // Archivo HTML
  styleUrls: ['./camera.component.css'] // Archivo CSS
})

// CLASE
export class CameraComponent {
  @ViewChild('cameraFeed', { static: true }) cameraFeed: ElementRef = {} as ElementRef; // Elemento HTML
  cameraStream: MediaStream | null = null; // Stream de la cámara
  cameraVisible = false; // Variable para controlar la visibilidad de la cámara

  // MÉTODOS
  openCamera() { // Método para abrir la cámara
    navigator.mediaDevices.getUserMedia({ video: true }) // Obtener el stream
      .then((stream) => { // Si se consigue el stream de la cámara... 
        this.cameraVisible = true; // Activar la visibilidad de la cámara
        this.cameraFeed.nativeElement.srcObject = stream; // Asignar el stream a la caja
        this.cameraStream = stream; // Asignar el stream a la variable
      })
      .catch((error) => { // Si no se consigue el stream de la cámara...
        console.error('Error accessing camera: ', error); // Da error de consola
      });
  }

  closeCamera() { // Método para cerrar la cámara
    if (this.cameraStream) { // Si hay un stream de la cámara...
      this.cameraStream.getTracks().forEach((track) => { // Obtener los tracks del stream
        track.stop(); // Parar el track
      });
      this.cameraVisible = false; // Desactivar la visibilidad de la cámara
    }
  }
}


