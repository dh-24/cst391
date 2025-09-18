import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { InfoComponent } from '../info/info';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, InfoComponent],
  templateUrl: './shop.html',
  styleUrls: ['./shop.css']
})
export class ShopComponent {
  question = "What is your name?";
  answer = "unknown";

  // Reactive form setup
  appForm = new FormGroup({
    answer: new FormControl('')
  });

  // Called when the form is submitted
  onSubmit(data: Partial<{ answer: string | null }>) {
    if (data.answer && data.answer.trim() !== '') {
      this.answer = data.answer;
      console.log("Your name is " + this.answer);
    } else {
      this.answer = "unknown";
      console.log("No name entered, defaulting to 'unknown'");
    }
  }
}
