import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-algorithms',
  imports: [FormsModule, CommonModule],
  templateUrl: './algorithms.html',
  styleUrl: './algorithms.scss',
})
export class ALGORITHMS {
  constructor(private route: Router) {}
  buttons = [
    'PHONE BOOK',
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
