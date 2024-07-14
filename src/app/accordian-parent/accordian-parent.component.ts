import { Component } from '@angular/core';
import { AccordianComponent } from '../accordian/accordian.component';
import { EmitService } from '../services/emit.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
export interface AccordionItem {
  title: string;
  body: string;
  iconOpen: string;
  iconClose: string;
}
@Component({
  selector: 'app-accordian-parent',
  standalone: true,
  imports: [AccordianComponent, RouterLink, FormsModule],
  templateUrl: './accordian-parent.component.html',
  styleUrl: './accordian-parent.component.scss',
})
export class AccordianParentComponent {
  constructor(private subject: EmitService) {}
  message: string = '';
  sendMessage() {
    this.subject.sendMessage(this.message);
    this.message = ''; // Clear input after sending
  }
  accordionItems: AccordionItem[] = [
    {
      title: 'Section 1',
      body: 'Content of section 1',
      iconOpen: '▼',
      iconClose: '►',
    },
    {
      title: 'Section 2',
      body: 'Content of section 2',
      iconOpen: '▼',
      iconClose: '►',
    },
    {
      title: 'Section 3',
      body: 'Content of section 3',
      iconOpen: '▼',
      iconClose: '►',
    },
  ];
}
