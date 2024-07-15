import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { act1, act2, act3 } from '../store/action';

import { Final1Component } from '../final1/final1.component';
import { ServiceService } from '../service/service.service';
import { Observable, Subscription } from 'rxjs';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterLink,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
//import { CanComponentDeactivate } from '../../gaurdalso/gaurd.service';
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}
interface Names {
  name: string;
  wife: string;
}
interface Form_face {
  key: string;
  validate: any;
}
@Component({
  selector: 'app-final1parent',
  standalone: true,
  imports: [Final1Component, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './final1parent.component.html',
  styleUrl: './final1parent.component.scss',
})
export class Final1parentComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterViewInit,
    CanDeactivate<CanComponentDeactivate>
{
  form!: FormGroup;
  // fb!: FormBuilder;
  sss!: Subscription;
  bs!: Subscription;
  eee!: EventEmitter<string>;
  pp: string = '';
  ssss: string = '';

  config: Form_face[] = [
    {
      key: 'firstname',
      validate: [Validators.required, Validators.minLength(6)],
    },
    {
      key: 'lastname',
      validate: [Validators.required, Validators.minLength(6)],
    },
    {
      key: 'email',
      validate: [Validators.required, Validators.minLength(6)],
    },
    {
      key: 'password',
      validate: [Validators.required, Validators.minLength(6)],
    },
    {
      key: 'firstname',
      validate: [Validators.required, Validators.minLength(6)],
    },
  ];

  constructor(
    private servi: ServiceService,
    private fb: FormBuilder,
    private store1: Store<{ cout: any[] }>
  ) {
    this.store1.select('cout').subscribe((a) => {
      console.log(a);
    });
    this.form = fb.group({});
    this.bs = servi.bss.subscribe((value) => {
      this.pp = value;
      console.log(this.pp);
    });
    this.sss = servi.ssss.subscribe((val) => {
      this.ssss = val;
      console.log(this.ssss);
    });
    //
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (true) {
      return confirm('You have unsaved changes! Do you really want to leave?');
    }
    return true;
  }
  ngAfterViewInit(): void {
    this.config.map((val) => {
      const validators = val.validate || [];
      const controls = this.fb.control('', validators);
      this.form.addControl(val.key, controls);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.config.map((val) => {
      const validators = val.validate || [];
      const controls = this.fb.control('', validators);
      this.form.addControl(val.key, controls);
    });
    throw new Error('Method not implemented.');
  }
  a: Names = { name: 'ram', wife: 'dita' };
  message: string = '';
  recieve(eventData: string) {
    this.message = eventData;
    console.log(eventData);
  }
  ask() {
    this.servi.behaviorEmity('behave your self');
    this.servi.subjectEmity('subject math');
    const v1 = this.store1.dispatch(act1({ cc: 5, rr: 'ram', zz: 0 }));
    console.log(v1);
  }
  ngOnDestroy() {
    this.sss.unsubscribe();
    console.log('destoy');
    this.bs.unsubscribe();
  }
}
