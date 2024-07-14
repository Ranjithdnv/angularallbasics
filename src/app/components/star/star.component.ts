import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
})
export class StarComponent {
  @Input() rating: number = 0;

  get fullStars(): number[] {
    return Array(Math.floor(this.rating)).fill(0);
  }

  get hasHalfStar(): boolean {
    return this.rating % 1 >= 0.5;
  }

  get emptyStars(): number[] {
    const fullStarsCount = Math.floor(this.rating);
    const emptyStarsCount = 5 - fullStarsCount - (this.hasHalfStar ? 1 : 0);
    return Array(emptyStarsCount).fill(0);
  }
  // canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
  //   // if (this.loginName) {
  //   //   console.log('oooooooooooo', this.loginName);
  //   //   localStorage.setItem('userogin', this.loginName);

  //   return confirm(`You name   your pass `);
  // }
}
