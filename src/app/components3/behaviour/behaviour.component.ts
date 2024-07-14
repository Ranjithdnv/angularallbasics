import { Component } from '@angular/core';
import { BehaviourService } from '../../services/behaviour.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-behaviour',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './behaviour.component.html',
  styleUrl: './behaviour.component.scss',
})
export class BehaviourComponent {
  message: string = '';

  constructor(private BehaviourService: BehaviourService) {}

  sendMessage() {
    this.BehaviourService.sendMessage(this.message);
    this.message = ''; // Clear input after sending
  }
}
