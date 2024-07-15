import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  ee = new EventEmitter<string>();
  // ee = this.eee.asObservable();

  bs = new BehaviorSubject<string>('u');
  s = new Subject<string>();

  bss = this.bs.asObservable();
  ssss = this.s.asObservable();
  eventEmity(val: string) {
    this.ee.emit(`emiter-----${val}`);
  }
  behaviorEmity(val: string) {
    this.bs.next(`behavior--${val}`);
  }
  subjectEmity(val: string) {
    this.s.next(`subject-------${val}`);
  }
  call() {
    this.http.get('');
  }
  post() {
    this.http.get('');
  }
  del() {
    this.http.get('');
  }
  update() {
    this.http.get('');
  }
}
