import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRouting } from './app.route';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { InnerModule } from '../innerModule/inner/inner.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from "angular-6-social-login";


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
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppModule { }
