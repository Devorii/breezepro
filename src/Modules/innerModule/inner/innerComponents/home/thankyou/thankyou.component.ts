import { Component, OnInit } from "@angular/core";
import { StoreDataService } from "../../../../../app/store-data.service";
// import { _ } from "underscore";
import * as _ from 'underscore';
import { DataService } from "../../../../../../../src/Modules/app/data.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-thankyou",
  templateUrl: "./thankyou.component.html",
  styleUrls: ["./thankyou.component.scss"]
})
export class ThankyouComponent implements OnInit {
  product;
  greting;
  ErrorMessage;
  success
  company_name = { name: "" };
  leads_id = { id: "" };
  package_id = { id: "" };
  products = [];
  prices = [];
  investment = { data: "" };
  pdate = { pdate: "" };

  constructor(
    private storedata: StoreDataService,
    private data: DataService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    // console.log('This is the company name: '+ this.storedata.companyName);
    // console.log('This is the Client ID: '+ this.storedata.clientId);
    // console.log('This is the Package ID: ' + this.storedata.packageId);
    // console.log( this.storedata.productId);
    // console.log(this.storedata.pricingList);
    // console.log('This is the investment text: '+ this.storedata.investment);
    // console.log('This is the date of investment: '+ this.storedata.date);
    this.company_name = this.storedata.companyName;
    this.leads_id = this.storedata.clientId;
    this.package_id = this.storedata.packageId;
    this.products = this.storedata.productId;
    this.prices = this.storedata.pricingList;

    this.investment = this.storedata.investment;
    this.pdate = this.storedata.date;

    this.product = _.extend({
      company_name: this.company_name,
      leads_id: this.leads_id,
      package_id: this.package_id,
      products: this.products,
      prices: this.prices,
      investment: this.investment,
      pdate: this.pdate
    });
    console.log(this.product);
    this.data.PostProposal(this.product).subscribe(
      result => {
        console.log(result);
        if (result.data) {
          this.spinner.hide();
console.log("success");
          this.greting ="Thank you"
          this.success =
            "You will recieve an email once your proposal is approved";
          // localStorage.googletoken = result.data.token;
          // localStorage.googlename = result.data.name;
          // this.data.setheader();
          // console.log(localStorage.googletoken);
          // console.log(localStorage.googlename);
          // this.router.navigate(['dashboard/create'])
          this.spinner.hide();
        }
        else
        {
          this.spinner.hide();
          this.greting ="Sorry"
          this.success =
            "Something went wrong. Please try again";
        }

      },
      err => {
        this.greting ="Sorry"
        this.spinner.hide();
        console.log("error");
        this.ErrorMessage =
          "Error : " + err + " .Please tell admin about this error";
      }
    );

    //this.data =  _.zip([this.storedata.companyName],[this.storedata.clientId],[this.storedata.packageId],[this.storedata.productId],[this.storedata.pricingList],[this.storedata.investment],[this.storedata.date]);
    //console.log(this.data);
  }
}
