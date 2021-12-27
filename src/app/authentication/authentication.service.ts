import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of, throwError } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient,
    private router: Router) { }

  // public Auth(email: string, password: any) {
  //   const url = '';
  //   return this.http.post<any>(url, email, password)

  // }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loginUser({ emailId, password }: any): Observable<any> {
    if (emailId == 'admin@gmail.com' && password == 'Admin@123') {
      this.setToken('token');
      return of({ name: 'Admin', emailId: 'admin@gmail.com' });
    }
    return throwError(new Error('F'));
  }

  // loginUser() {
  //   if (localStorage.getItem("token") == null) {
  //     localStorage.setItem("token", JSON.stringify(this.login.LoginForm.value))
  //     this.router.navigate(['/dashboard']);
  //   }

  //   else if (localStorage.getItem("token") == JSON.stringify(this.login.LoginForm.value)) {
  //     this.router.navigate(['/dashboard']);
  //   }

  //   else {
  //     console.warn("Wrong Id Wrong Password");
  //     this.login.addFailure();
  //   }
  // }

  // loginUser(user: any) {
  //   let users = [];
  //   if (localStorage.getItem('token')) {
  //     users = [user];
  //   }
  //   localStorage.setItem('token', JSON.stringify(user));
  // }

}

