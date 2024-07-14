import { Component, OnInit } from '@angular/core';
import { BottomComponent } from '../bottom/bottom.component';
import { Subscription } from 'rxjs';
import { EmitService } from '../../services/emit.service';

@Component({
  selector: 'app-bottomparent',
  standalone: true,
  imports: [BottomComponent],
  templateUrl: './bottomparent.component.html',
  styleUrl: './bottomparent.component.scss',
})
export class BottomparentComponent implements OnInit {
  lastMessage: string = '';
  private subscription: Subscription;

  constructor(private subject: EmitService) {
    this.subscription = this.subject.message$.subscribe((message) => {
      this.lastMessage = message;
      console.log(message);
      console.log('constroctor');
    });
  }
  ngOnInit(): void {
    console.log('init');

    this.subscription = this.subject.message$.subscribe((message) => {
      this.lastMessage = message;
      console.log(message);
      console.log('init');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  isBottomSheetOpen: boolean = false;

  openBottomSheet() {
    this.isBottomSheetOpen = true;
  }
}
