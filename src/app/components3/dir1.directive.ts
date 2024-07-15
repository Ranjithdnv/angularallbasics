import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDir1]',
  standalone: true,
})
export class Dir1Directive implements OnChanges {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.el.nativeElement.appDir);
    console.log(this.el.nativeElement.attribute);
    console.log(this.el.nativeElement.style);
    console.log(this.el.nativeElement);
  }

  @Input('appDir1') highlightColor!: string;
  @HostListener('click') onClick() {
    const currentState = this.el.nativeElement.style.display;
    const currentState2 = this.el.nativeElement;
    // const nextState = currentState === 'none' ? 'block' : 'none';
    // this.renderer.setStyle(this.el.nativeElement, 'display', nextState);
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
}
