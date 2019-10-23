import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from '../inner/innerComponents/home/home.component'
import {CreateComponent } from '../inner/innerComponents/home/create/create.component'
import {NewproposalComponent } from '../inner/innerComponents/home/newproposal/newproposal.component'
import {ViewproposalComponent } from '../inner/innerComponents/home/viewproposal/viewproposal.component'
import { AuthServiceService as AuthGuard } from '../../app/auth-service.service'
import{PagenotfoundComponent} from  "../inner/innerComponents/pagenotfound/pagenotfound.component"
import { DescriptionComponent } from './innerComponents/home/description/description.component';
import { InvestmentComponent } from './innerComponents/home/investment/investment.component';
const routes: Routes = [

 

  { path: '', component: HomeComponent,children:[

    { path: 'dashboard/create', component: CreateComponent,canActivate: [AuthGuard] },
    { path: 'dashboard/new', component: NewproposalComponent,canActivate: [AuthGuard] },
    { path: 'dashboard/view', component: ViewproposalComponent,canActivate: [AuthGuard] },
    { path: 'dashboard/description', component: DescriptionComponent,canActivate: [AuthGuard] },
    { path: 'dashboard/investment', component: InvestmentComponent,canActivate: [AuthGuard] },
   

  ] },

  // { path: 'pagenotfound', component: PagenotfoundComponent },
  // { path: '**', redirectTo: "pagenotfound", pathMatch: 'full' }
  
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerRoutingModule { }
