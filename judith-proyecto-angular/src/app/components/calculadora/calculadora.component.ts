// MÓDULOS IMPORTADOS
import { Component } from '@angular/core'; // Importar componente

// COMPONENTE
@Component({
  selector: 'app-calculadora', // Selector del componente
  templateUrl: './calculadora.component.html', // Archivo HTML
  styleUrls: ['./calculadora.component.css']  // Archivo CSS
})

// CLASE
export class CalculadoraComponent {
  display: string = ''; // Display de la calculadora

  // MÉTODOS
  addToDisplay(value: string): void { // Método para añadir valores
    this.display += value; // Añadir valor
  }

  clearDisplay(): void { // Método para borrar el display
    this.display = ''; // Borrar display
  }

  deleteLast(): void { // Método para borrar el último valor
    this.display = this.display.slice(0, -1); // Borrar último valor
  }

  calculateResult(): void { // Método para calcular
    try { // Intenta calcular el resultado de la operación
      this.display = eval(this.display).toString(); // Evaluar operación
    } catch (error) { // Si hay un error...
      this.display = 'Error'; // Mostrar error
    }
  }
}