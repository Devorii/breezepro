import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  splitted;
  removedot = [];
  ValidDomain = "breezemaxweb";

  @Input() productData = { email: 'eve.holt@reqres.in', password: 'cityslicka' };

  constructor(private data: DataService, private socialAuthService: AuthService) { }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;


    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.splitted = userData.email.split("@");
        this.removedot = this.splitted[1].split(".");

        if (this.removedot[0] == this.ValidDomain) {
          console.log(socialPlatform + " sign in data : ", userData);
         
          this.data.login(userData).subscribe((result) => {

            console.log(result);
            //localStorage.setItem('token', (result.data.token));
            //localStorage.setItem('user_id', JSON.stringify(result.data.id));
            // this.router.navigate(['maincontainer/dashboard'])

          }, (err) => {
            console.log(err);
          });

        }
        else {
          console.log(userData.email + " is not valid");
        }


      }
    );
  }


  ngOnInit() {

  }
}
