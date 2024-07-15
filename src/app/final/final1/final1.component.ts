import { HttpClient } from '@angular/common/http';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

interface names {
  name: string;
  wife: string;
}

@Component({
  selector: 'app-final1',
  standalone: true,
  imports: [],
  templateUrl: './final1.component.html',
  styleUrl: './final1.component.scss',
})
export class Final1Component
  implements OnInit, OnChanges, AfterViewChecked, AfterViewInit, OnDestroy
{
  @ViewChild('temp') temp!: ElementRef;
  @Input() vchild!: names;
  @Output() sending = new EventEmitter<string>();
  @Input('v2') vchild2!: names; // name in parent copmponent property
  constructor(private http: HttpClient) {}

  onClick() {
    this.sending.emit('eventemitted from child');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ONCHANGES-----------------');
    console.log(this.vchild);
  }
  ngOnInit(): void {
    console.log('ON INIT ---------------------');
  }
  ngAfterViewChecked(): void {
    console.log(' ON -VIEWAFTRCHECKED----------------------');
  }
  ngOnDestroy(): void {
    console.log(' NGDESTROY-------------------');
  }
  ngAfterViewInit(): void {
    console.log('NGAFTERVIEWINIT-------------------------');
  }
  hi() {
    console.log(this.vchild);
  }
}
