import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string = '';

  addToDisplay(value: string): void {
    this.display += value;
  }

  clearDisplay(): void {
    this.display = '';
  }

  deleteLast(): void {
    this.display = this.display.slice(0, -1);
  }

  calculateResult(): void {
    try {
      this.display = eval(this.display).toString();
    } catch (error) {
      this.display = 'Error';
    }
  }
}

