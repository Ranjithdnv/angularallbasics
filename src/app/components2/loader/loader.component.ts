import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export enum LoaderType {
  Graphic = 'graphic',
  Text = 'text',
}
@Component({
  selector: 'loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input() type: LoaderType = LoaderType.Graphic;
  @Input() text: string = '';
  //@Input() text: LoaderType = LoaderType.Text;

  LoaderType = LoaderType; // Make enum available in the template
}
