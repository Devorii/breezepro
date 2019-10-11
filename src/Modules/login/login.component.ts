import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../app/data.service';
import { Router } from "@angular/router";
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { NgxSpinnerService } from "ngx-spinner";
import * as _ from 'underscore';

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

  constructor(private data: DataService, private socialAuthService: AuthService,private router: Router,private spinner: NgxSpinnerService) { }

  title = "Breeze Pro"
  public socialSignIn(socialPlatform: string) {
    this.spinner.show();
    let socialPlatformProvider;


    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.splitted = userData.email.split("@");
        this.removedot = this.splitted[1].split(".");

        if (this.removedot[0] == this.ValidDomain) {
          //console.log(socialPlatform + " sign in data : ", userData);
      

          
          //console.log(this.GoogleData);
         
          this.data.login(userData).subscribe((result) => {

            console.log(result);
            if(result){
              localStorage.googletoken = userData.token;
              localStorage.googlename = userData.name;
              console.log(localStorage.googletoken);
              console.log(localStorage.googlename);
              this.router.navigate(['dashboard/create'])
              this.spinner.hide();
            }
            

          }, (err) => {
            this.spinner.hide();
            console.log(err);
          });

        }
        else {
          this.spinner.hide();
          console.log(userData.email + " is not valid");
        }


      }
    );
  }


  ngOnInit() {
    console.log('now: ', _.now());
  }
}
