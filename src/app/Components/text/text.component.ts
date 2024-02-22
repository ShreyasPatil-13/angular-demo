import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})

export class TextComponent {

  welcome = 'Welcome!';
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brackets_Icon.svg/800px-Brackets_Icon.svg.png'
  words = 0;
  letters = 0;
  textInput = '';

  count() {
    this.letters = this.textInput.length;
    this.words = this.textInput.split(/\s+/).length;
  }

  upperCase() {
    this.textInput = this.textInput.toUpperCase();
  }

  lowerCase() {
    this.textInput = this.textInput.toLowerCase();
  }
}
