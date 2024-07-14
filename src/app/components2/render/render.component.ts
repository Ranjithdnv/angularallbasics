import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-render',
  standalone: true,
  imports: [],
  templateUrl: './render.component.html',
  styleUrl: './render.component.scss',
})
export class RenderComponent {
  @ViewChild('temp')
  temp!: ElementRef;
  element: HTMLElement | undefined;
  element2: HTMLElement | undefined;
  element3: HTMLElement | undefined;
  constructor(private renderer: Renderer2) {}
  hi() {
    this.element = this.temp.nativeElement;
    this.element2 = this.renderer.createText('gggggggggggggggggggggggggggg');
    this.element3 = this.renderer.createElement('div');

    this.renderer.setStyle(this.element, 'background', 'red');
    this.renderer.appendChild(
      this.element,
      this.renderer.createText('gggggggggggggggggggggggggggg')
    );
    this.renderer.setAttribute(this.element, 'data', 'value');

    this.renderer.addClass(this.element, 'pink');
    this.renderer.setProperty(this.element, 'id', '20000');
    console.log(this.renderer.parentNode(this.element));
    this.element3 = this.renderer.nextSibling(this.element);
    this.renderer.setStyle(this.element3, 'background', 'pink');
    console.log(this.element3);
  }
}
