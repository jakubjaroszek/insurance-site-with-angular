import { Component, OnInit } from '@angular/core';
import { InsuranceForm } from 'src/app/models/insuranceForm';
import { HttpInsuranceFormService } from 'src/app/services/http-insurance-form.service';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-insurance-calculator-form-content',
  templateUrl: './insurance-calculator-form-content.component.html',
  styleUrls: ['./insurance-calculator-form-content.component.scss'],
})
export class InsuranceCalculatorFormContentComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  model: Partial<InsuranceForm> = {};
  constructor(
    private httpInsuranceFormService: HttpInsuranceFormService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dateOfBirth: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('[0-9]{3}[0-9]{3}[0-9]{3}')],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  send() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(this.model);
    this.httpInsuranceFormService
      .postInsuranceForm(this.model as InsuranceForm)
      .subscribe(
        (result) => console.log(result),
        (error) => console.error(error)
      );
  }
}
