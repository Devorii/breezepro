import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from "@angular/router";
import {AuthService,GoogleLoginProvider} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() productData = { email:'eve.holt@reqres.in', password:'cityslicka' };

  constructor(private data: DataService, private socialAuthService: AuthService) { }



  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    
   
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      console.log(socialPlatformProvider);
    
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }


  ngOnInit() {
   
  }


  loginVisitor() {
    
    console.log(this.productData.email);
    this.data.login(this.productData).subscribe((result) => {
   
      
        console.log(result);
        localStorage.setItem('token',( result.data.token));
        //localStorage.setItem('token', JSON.stringify( result.data.token));
        localStorage.token = result.data.token;
        localStorage.businessname = result.data.name;
        localStorage.setItem('user_id', JSON.stringify( result.data.id));
        // this.data.setheader();
        // this.router.navigate(['maincontainer/dashboard'])
    
      
    }, (err) => {
      console.log(err);
    });
  }



}
