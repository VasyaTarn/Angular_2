import { Component } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrl: './circles.component.css'
})
export class CirclesComponent {
  colors: string[] = ['black', 'blue', 'green', 'pink', 'yellow'];

  iphones: { [key: string]: string } = {
    "black": "assets/images/black__efg76fuz5hm6_large.jpg",
    "blue": "assets/images/blue__daqp9wegmiy6_large.jpg",
    "green": "assets/images/green__1q1v4ia8oaq2_large.jpg",
    "pink": "assets/images/pink__fxslpxkvshqy_large.jpg",
    "yellow": "assets/images/yellow__f6ny7yiez7ue_large.jpg"
  };

  selectedCircleIndex: number = 0;

  selectCircle(index: number) {
    this.selectedCircleIndex = index;
  }

  getImageSrc()
  {
    return this.iphones[this.colors[this.selectedCircleIndex]];
  }
}
