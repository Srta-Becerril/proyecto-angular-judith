import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})

export class AppComponent {
  windowTest: Window | null;

  constructor() {
    this.windowTest = null;
  }

  openNewWindow(): void {
    this.windowTest = window.open(' ', ' ', 'width=500px, height=300, left=50px, top=300px');

    if (this.windowTest !== null) {
      const prmpt = this.windowTest.prompt('Indica una cantidad de píxeles, por favor');
      if (prmpt !== null) {
        console.log('El usuario pulsó "Aceptar" en la introducción de datos.');

        const cnfrm = this.windowTest.confirm(`¿Estás seguro de aplicar ${prmpt}px?`);
        if (cnfrm === false) {
          console.log('El usuario no estaba seguro.');
        } else {
          console.log('El usuario estaba seguro');
          this.windowTest.resizeBy(Number(prmpt), Number(prmpt));
          console.log(`Ventana redimensionada ${prmpt}px`);
        }
      }
    }
  }

  closeWindow(): void {
    if (this.windowTest) {
      this.windowTest.close();
    }
  }

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

