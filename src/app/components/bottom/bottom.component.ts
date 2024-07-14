import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.scss',
})
export class BottomComponent {
  @Input() isOpen: boolean = false;

  close() {
    this.isOpen = false;
  }
}
