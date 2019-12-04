import { Injectable } from '@angular/core';
import{Router,CanActivate} from '@angular/router'
import {DataService} from '../app/data.service'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {

  constructor(public router:Router, public data:DataService) { }

  canActivate(): boolean {
    if (!this.data.isAuthenticated()) {
     // console.log("hi");
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
