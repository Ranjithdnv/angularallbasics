import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-starparent',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './starparent.component.html',
  styleUrl: './starparent.component.scss',
})
export class StarparentComponent {}
