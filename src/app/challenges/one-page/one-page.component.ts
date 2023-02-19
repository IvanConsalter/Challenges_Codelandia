import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.scss'],
})
export class OnePageComponent implements OnInit {
  arrayRandomBackground: Array<string> = [];

  constructor() {}

  ngOnInit(): void {
    this.generateRandomBackgrounds(6);
  }

  generateRandomBackgrounds(numBackgrounds: number) {
    for(let i = 0; i < numBackgrounds; i++) {
      const color = this.generateRandomColor();
      this.arrayRandomBackground.push(color);
    }
  }

  generateRandomColor(): string {
    let color = '#';
    const chars = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      color += chars[randomIndex];
    }
    return color;
  }
}
