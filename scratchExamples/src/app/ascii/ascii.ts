import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ascii',
  imports: [FormsModule,RouterLink],
  templateUrl: './ascii.html',
  styleUrl: './ascii.scss',
})
export class ASCII {
  inputText: string = '';
  output: string[] = [];
  showAscii() {
    this.output = [];
    for (let i = 0; i < this.inputText.length; i++) {
      const char = this.inputText[i];
      const ascii = char.charCodeAt(0);
      this.output.push(`Character: '${char}' → ASCII: ${ascii}`);
    }
  }
}
