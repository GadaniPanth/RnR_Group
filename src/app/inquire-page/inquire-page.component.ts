import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inquire-page',
  templateUrl: './inquire-page.component.html',
  styleUrls: ['./inquire-page.component.less']
})
export class InquirePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formSubmitted = false;

  inquireForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

  restrictNonNumeric(event: KeyboardEvent) {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.inquireForm.invalid) {
      return;
    }

  }

}
