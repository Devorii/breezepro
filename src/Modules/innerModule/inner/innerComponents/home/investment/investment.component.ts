import { Component, OnInit } from '@angular/core';
import { StoreDataService } from "../../../../../app/store-data.service";
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

  constructor(private storedata: StoreDataService) { }

  ngOnInit() {
  
    console.log(this.storedata.pricingList);
    console.log(this.storedata.clientId);
    console.log(this.storedata.companyName);
    console.log(this.storedata.productId);
    console.log(this.storedata.packageId);

  }

}
