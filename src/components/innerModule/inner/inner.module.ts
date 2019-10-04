import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerRoutingModule } from './inner-routing.module';
import { HomeComponent } from './innerComponents/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    InnerRoutingModule
  ]
})
export class InnerModule { }
