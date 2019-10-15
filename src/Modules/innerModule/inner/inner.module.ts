import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerRoutingModule } from './inner-routing.module';
import { ButtonComponent } from './innerComponents/globalComponents/button/button.component'
import { HomeComponent } from './innerComponents/home/home.component';
import { HeaderComponent } from './innerComponents/header/header.component';
import { FooterComponent } from './innerComponents/footer/footer.component';
import { CreateComponent } from './innerComponents/home/create/create.component';
import { NewproposalComponent } from './innerComponents/home/newproposal/newproposal.component';
import { ViewproposalComponent } from './innerComponents/home/viewproposal/viewproposal.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CreateProposalComponent } from './innerComponents/globalComponents/create-proposal/create-proposal.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PdfCreateComponent } from './innerComponents/globalComponents/pdf-create/pdf-create.component';


@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    CreateComponent, 
    NewproposalComponent, 
    ViewproposalComponent, 
    ButtonComponent, CreateProposalComponent, PdfCreateComponent ],
  imports: [
    CommonModule,
    InnerRoutingModule,
    CalendarModule,
    NgMultiSelectDropDownModule.forRoot()
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  exports: [
    ButtonComponent 
  ]
 
})
export class InnerModule { }
