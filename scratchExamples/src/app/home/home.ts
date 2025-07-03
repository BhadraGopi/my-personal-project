import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private route:Router ){}
  buttons = [
    'ASCII',
    'Button 2',
    'Button 3',
    'Button 4',
    'Button 5',
    'Button 6',
    'Button 7',
  ];
  goToPage(page: string) {
    // Logic to navigate to the specified page
    console.log(`Navigating to ${page}`);
    this.route.navigate([`/${page.toLowerCase()}`]);

  }
}
