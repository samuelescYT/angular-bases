import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

  increaseBy(number: number): void {
    this.counter += number;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
