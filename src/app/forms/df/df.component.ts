import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Object representing form fields
//

@Component({
  selector: 'app-df',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './df.component.html',
  styleUrl: './df.component.scss',
})
export class DFComponent {
  form: FormGroup;
  fieldConfigs = [
    {
      key: 'firstName',
      label: 'First Name',
      validators: [Validators.required],
    },
    {
      key: 'firstName',
      label: 'First Name',
      lab: 'hh',
      validators: [Validators.required],
    },
    { key: 'lastName', label: 'Last Name', validators: [] },
    {
      key: 'email',
      label: 'Email',
      validators: [Validators.required, Validators.email],
    },
    {
      key: 'email',
      label: 'Email',
      validators: [Validators.required, Validators.email],
    },
    // Add more fields as needed
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.fieldConfigs.forEach((field) => {
      const validators = field.validators || [];
      const control = this.fb.control('', validators);
      this.form.addControl(field.key, control);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      console.log(this.form.value);
      // Perform form submission logic here
    } else {
      // Mark all fields as touched to trigger validation messages
      this.form.markAllAsTouched();
    }
  }
}
