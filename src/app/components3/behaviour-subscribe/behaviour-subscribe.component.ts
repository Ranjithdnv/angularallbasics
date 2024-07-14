import { Component } from '@angular/core';
import { BehaviourService } from '../../services/behaviour.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-behaviour-subscribe',
  standalone: true,
  imports: [],
  templateUrl: './behaviour-subscribe.component.html',
  styleUrl: './behaviour-subscribe.component.scss',
})
export class BehaviourSubscribeComponent {
  lastMessage: string = '';
  private subscription: Subscription;

  constructor(private Service: BehaviourService) {
    this.subscription = this.Service.currentMessage$.subscribe((message) => {
      this.lastMessage = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
