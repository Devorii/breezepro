import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from '../inner/innerComponents/home/home.component'
import {CreateComponent } from '../inner/innerComponents/home/create/create.component'
import {NewproposalComponent } from '../inner/innerComponents/home/newproposal/newproposal.component'

const routes: Routes = [

    
  { path: '', component: HomeComponent,children:[

    { path: 'dashboard/create', component: CreateComponent },
    { path: 'dashboard/new', component: NewproposalComponent }
   

  ] },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerRoutingModule { }
