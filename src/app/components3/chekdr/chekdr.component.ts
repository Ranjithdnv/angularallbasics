import { Component } from '@angular/core';
import { Dir1Directive } from '../dir1.directive';
@Component({
  selector: 'app-chekdr',
  standalone: true,
  imports: [Dir1Directive],
  templateUrl: './chekdr.component.html',
  styleUrl: './chekdr.component.scss',
})
export class ChekdrComponent {
  [x: string]: any;
}
