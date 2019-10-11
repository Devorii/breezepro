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
<<<<<<< HEAD
import { ListBtnComponent } from './innerComponents/globalComponents/list-btn/list-btn.component';

=======
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
>>>>>>> d8439139c35dc518f21969ebe15b20cac6242111

@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    CreateComponent, 
    NewproposalComponent, 
    ViewproposalComponent, 
    ButtonComponent, ListBtnComponent ],
  imports: [
    CommonModule,
    InnerRoutingModule,
<<<<<<< HEAD

=======
    CalendarModule
  
>>>>>>> d8439139c35dc518f21969ebe15b20cac6242111
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  exports: [
    ButtonComponent 
  ]
 
})
export class InnerModule { }
