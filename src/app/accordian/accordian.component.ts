import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AccordionItem {
  title: string;
  body: string;
  iconOpen: string;
  iconClose: string;
}
@Component({
  selector: 'app-accordian',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent {
  @Input() items: AccordionItem[] = [];

  expandedIndex: number | null = null;

  toggle(index: number) {
    if (this.expandedIndex === index) {
      this.expandedIndex = null;
    } else {
      this.expandedIndex = index;
    }
  }
}
