
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: 'root',
})
export class UsernameGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    if (this.userService.username && this.userService.username.length) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
