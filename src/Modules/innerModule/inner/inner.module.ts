import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerRoutingModule } from './inner-routing.module';
import { ButtonComponent } from './innerComponents/globalComponents/button/button.component'
import { HomeComponent } from './innerComponents/home/home.component';
import { HeaderComponent } from './innerComponents/header/header.component';
import { FooterComponent } from './innerComponents/footer/footer.component';
import { CreateComponent } from './innerComponents/home/create/create.component';
import { NewproposalComponent } from './innerComponents/home/newproposal/newproposal.component';
import { ViewproposalComponent } from './innerComponents/home/viewproposal/viewproposal.component';

@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    CreateComponent, 
    NewproposalComponent, 
    ViewproposalComponent, 
    ButtonComponent ],
  imports: [
    CommonModule,
    InnerRoutingModule,
  ],
  exports: [
    ButtonComponent 
  ]
})
export class InnerModule { }
