import { Component } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
export enum LoaderType {
  Graphic = 'graphic',
  Text = 'text',
}
@Component({
  selector: 'app-loaderparent',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './loaderparent.component.html',
  styleUrl: './loaderparent.component.scss',
})
export class LoaderparentComponent {
  LoaderType = LoaderType;
}
