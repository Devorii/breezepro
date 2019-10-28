import { Component, OnInit } from '@angular/core';
import { StoreDataService } from "../../../../../app/store-data.service";
import { _ } from 'underscore';
import { DataService } from '../../../../../../../src/Modules/app/data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

company_name;
leads_id;
package_id;
products;
prices;
investment;
date;
ErrorMessage;
  constructor(private storedata: StoreDataService,private data: DataService,private spinner: NgxSpinnerService) { }

  ngOnInit() {

    console.log('This is the company name: '+ this.storedata.companyName);
    console.log('This is the Client ID: '+ this.storedata.clientId);
    console.log('This is the Package ID: ' + this.storedata.packageId);
    console.log( this.storedata.productId);
    console.log(this.storedata.pricingList);
    console.log('This is the investment text: '+ this.storedata.investment);
    console.log('This is the date of investment: '+ this.storedata.date);
    this.company_name = this.storedata.companyName;
    this.leads_id  =this.storedata.clientId;
    this.package_id = this.storedata.packageId;
    this.products = this.storedata.productId;
    this.prices = this.storedata.pricingList;
    this.investment = this.storedata.investment;
    this.date = this.storedata.date;

    this.data.PostProposal(this.company_name,this.leads_id,this.package_id,this.products,this.prices,this.investment,this.date).subscribe((result) => {

      console.log(result);
      if(result){
       // localStorage.googletoken = result.data.token;
       // localStorage.googlename = result.data.name;
       // this.data.setheader();
       // console.log(localStorage.googletoken);
       // console.log(localStorage.googlename);
       // this.router.navigate(['dashboard/create'])
        this.spinner.hide();
      }
      

    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err  + " .Please tell admin about this error";
    });

    //this.data =  _.zip([this.storedata.companyName],[this.storedata.clientId],[this.storedata.packageId],[this.storedata.productId],[this.storedata.pricingList],[this.storedata.investment],[this.storedata.date]);
    //console.log(this.data);

  }

}
