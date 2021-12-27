import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private authservice: AuthenticationService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authservice.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return this.authservice.isLoggedIn();
    // var userid = localStorage.getItem("token");
    // if (userid !== undefined) {
    //   return true;
    // }
    // this.router.navigate(['/dashboard']);
    // return false;

  }

}
