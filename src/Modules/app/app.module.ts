import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRouting } from './app.route';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import {InnerModule} from '../innerModule/inner/inner.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from "angular-6-social-login";
import { NgxSpinnerModule } from "ngx-spinner";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("738742947505-00i07a00b4o1gtt22stls494gj39gi20.apps.googleusercontent.com")
      },

    ]
  )
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRouting,
    InnerModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    NgxSpinnerModule,
    NgbModule,
    CommonModule,
    PerfectScrollbarModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    easeTime:300,
    tapToDismiss:true,
    
    }),
    ReactiveFormsModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs,
    
  },
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppModule { }
