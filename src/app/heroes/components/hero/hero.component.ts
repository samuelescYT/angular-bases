import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'iron man';
  public age: number = 30;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Batman';
  }

  changeAge(): void {
    this.age =24;
  }

  resetForm(): void {
    this.name = 'iron man';
    this.age = 30;
  }
}
