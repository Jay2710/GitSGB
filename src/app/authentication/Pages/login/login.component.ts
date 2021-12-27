import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { PrimeNGConfig, MessageService } from 'primeng/api';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  LoginForm: FormGroup = new FormGroup({});
  model1: any = [];
  model2: any = [];
  user: any = {};
  constructor(public authservice: AuthenticationService,
    private router: Router,
    private primengconfig: PrimeNGConfig,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.primengconfig.ripple = true;
    if (this.authservice.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }

    this.LoginForm = new FormGroup({
      emailId: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl("", [Validators.required])

    })
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(localStorage.getItem("token"));
    // console.log(this.LoginForm.value)
    if (this.LoginForm.valid) {
      console.log("Form Valid")
      this.authservice.loginUser(this.LoginForm.value).subscribe(
        (result) => {
          this.router.navigate(['dashboard']);
        },
        (err: Error) => {
          this.addFailure();
        }
      );
      // if (localStorage.getItem("token") == null) {
      //   localStorage.setItem("token", JSON.stringify(this.LoginForm.value))
      //   this.router.navigate(['/dashboard']);
      // }

      // else if (localStorage.getItem("token") == JSON.stringify(this.LoginForm.value)) {
      //   this.router.navigate(['/dashboard']);
      // }

      // else {
      //   console.warn("Wrong Id Wrong Password");
      //   this.addFailure();
      // }

    }
    else {
      console.log("Form Invalid");
    }
  }

  addFailure() {
    this.messageService.add({ severity: 'error', summary: 'Login Unsuccessfull', detail: '' });
  }

  clear() {
    this.messageService.clear();
  }




}
