import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ChilderefviewComponent } from '../childerefview/childerefview.component';
import { Dir1Directive } from '../dir1.directive';

@Component({
  selector: 'app-erefview',
  standalone: true,
  imports: [ChilderefviewComponent, Dir1Directive],
  templateUrl: './erefview.component.html',
  styleUrl: './erefview.component.scss',
})
export class ErefviewComponent {
  constructor(private el: ElementRef) {}
  @ViewChild('Dir1Directive', { static: true }) Dir1!: Dir1Directive;
  @ViewChild('ChilderfviewComponent')
  reftt!: ChilderefviewComponent;
  @Input() a!: string;
  // @Input('temp') temp!:ViewChild
  @ViewChild('temp') temp!: ElementRef;
  @ViewChild('temp2') temp2!: ElementRef;

  ngAfterViewInit() {
    // Perform DOM manipulations here
    this.temp.nativeElement.textContent = 'hhhhhhhhhhhh';
    this.temp.nativeElement.addEventListener('click', this.onClick.bind(this));
    console.log(this.reftt);
  }

  hi() {
    this.temp.nativeElement.textContent = 'hhhhhhhhhhhh';

    // this.temp.nativeElement.addEventListener('click', this.onClick);
  }
  onClick() {
    console.log('Element clicked!');
    this.temp2.nativeElement.focus();
    this.temp.nativeElement.style.backgroundColor = 'black';
  }
}
