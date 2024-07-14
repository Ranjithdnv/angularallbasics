import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-dynamic-f',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-f.component.html',
  styleUrl: './dynamic-f.component.scss',
})
export class DynamicFComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      fields: this.fb.array([]),
    });

    // Dynamically add fields (this would typically come from a service)
    this.addField({
      type: 'text',
      label: 'First Name',
      name: 'firstName',
      validators: [Validators.required],
    });
    this.addField({
      type: 'text',
      label: 'Last Name',
      name: 'lastName',
      validators: [Validators.required],
    });
    this.addField({
      type: 'email',
      label: 'Email',
      name: 'email',
      validators: [Validators.required, Validators.email],
    });
  }

  get fields() {
    return this.form.get('fields') as FormArray;
  }

  addField(fieldConfig: any) {
    const field = this.fb.group({
      type: [fieldConfig.type],
      label: [fieldConfig.label],
      name: [fieldConfig.name],
      value: [''],
      validators: this.fb.array(fieldConfig.validators || []),
    });

    this.fields.push(field);
  }

  submit() {
    console.log(this.form.value);
  }
}
