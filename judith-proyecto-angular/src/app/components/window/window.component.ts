// MÓDULOS IMPORTADOS
import { Component } from '@angular/core'; // Importar componente

// COMPONENTE
@Component({
  selector: 'app-ventana', // Selector del componente
  templateUrl: './window.component.html', // Archivo HTML
  styleUrls: ['./window.component.css'] // Archivo CSS
})

// CLASE
export class WindowComponent {
  windowTest: Window | null; // Variable para almacenar la ventana

  constructor() { // Constructor
    this.windowTest = null;
  }

  // MÉTODOS
  openNewWindow(): void { // Método para abrir una nueva ventana
    this.windowTest = window.open(' ', ' ', 'width=500px, height=300, left=50px, top=300px'); // Abrir nueva ventana 

    if (this.windowTest !== null) { // Verificar que la ventana se haya abierto correctamente
      const prmpt = this.windowTest.prompt('Indica una cantidad de píxeles, por favor');
      if (prmpt !== null) { // Verificar que se haya introducido un valor
        console.log('El usuario pulsó "Aceptar" en la introducción de datos.');

        const cnfrm = this.windowTest.confirm(`¿Estás seguro de aplicar ${prmpt}px?`); // Confirmar que se quiere redimensionar
        if (cnfrm === false) { // Verificar que se haya aceptado la confirmación
          console.log('El usuario no estaba seguro.');
        } else {
          console.log('El usuario estaba seguro');
          this.windowTest.resizeBy(Number(prmpt), Number(prmpt)); // Redimensionar la ventana
          console.log(`Ventana redimensionada ${prmpt}px`);
        }
      }
    }
  }

  // Método para cerrar la ventana
  closeWindow(): void {
    if (this.windowTest) {
      this.windowTest.close();
    }
  }

  // Método para mover la ventana
  moveWindowTo(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.moveTo(500, 700);
    }
  }

  moveWindowBy(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.moveBy(300, 200);
    }
  }

  // Método para redimensionar la ventana
  resizeWindowTo(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.resizeTo(1000, 500);
    }
  }

  resizeWindowBy(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.resizeBy(100, 50);
    }
  }

  // Método para scrollear la ventana
  scrollWindowTo(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.scrollBy(200, 400);
    }
  }

  scrollWindowBy(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.scrollBy(0, 100);
    }
  }

  // Otros métodos de la ventana
  blurWindow(): void {
    if (this.windowTest) {
      this.windowTest.blur();
    }
  }

  stopWindow(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.stop();
    }
  }

  alertWindow(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.alert('¡Hola desde la ventana secundaria!');
    }
  }

  printWindow(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.print();
    }
  }

  promptWindow(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.prompt('Ingresa algo:');
    }
  }

  confirmWindow(): void {
    if (this.windowTest) {
      this.windowTest.focus();
      this.windowTest.confirm('¿Estás seguro?');
    }
  }
}

