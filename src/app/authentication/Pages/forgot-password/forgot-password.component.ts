import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  isSubmitted = false;
  ForgotForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.ForgotForm = new FormGroup({
      emailId: new FormControl(""),

    })

  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.ForgotForm.invalid) {
      return;
    }

    else {
      console.log(this.ForgotForm);
    }
  }
}
