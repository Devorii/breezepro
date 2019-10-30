import { Component, OnInit,Input } from '@angular/core';
import { StoreDataService } from "../../../../../app/store-data.service";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Router } from "@angular/router";
@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

  constructor(private storedata: StoreDataService, private router: Router) { }
  @Input() formsdataforpost = { date: "", details:''};
  ngOnInit() {
  
    // console.log(this.storedata.pricingList);
    // console.log(this.storedata.clientId);
    // console.log(this.storedata.companyName);
    // console.log(this.storedata.productId);
    // console.log(this.storedata.packageId);

  }

  nextpage(){
    this.formsdataforpost.details  =   this.formsdataforpost.details.replace(/\n/g, '<br>');
    this.storedata.investment  = this.formsdataforpost.details;
    console.log(this.formsdataforpost.details)
    this.storedata.date  = this.formsdataforpost.date;
    //this.formsdataforpost.client_name = "";
    // console.log(this.formsdataforpost.date)
    // console.log(this.formsdataforpost.details)
    this.router.navigate(['dashboard/Thankyou']);
  
  }

}
