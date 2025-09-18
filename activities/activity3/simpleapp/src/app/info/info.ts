import { Component, Input } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgIf, NgForOf, FormsModule],
  templateUrl: './info.html',
  styleUrls: ['./info.css']
})
export class InfoComponent {
  @Input() name!: string;

  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";

  constructor() {
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
  }

  // Called when user clicks Reset
  newInfo() {
    this.quantity = 0;
    this.selectedProduct = "Star Wars";
    console.log("In newInfo() and resetting Info");
  }

  // Called when user clicks Buy
  onSubmit() {
    console.log(`In onSubmit() with quantity of ${this.quantity} and movie selected is ${this.selectedProduct}`);
  }
}
