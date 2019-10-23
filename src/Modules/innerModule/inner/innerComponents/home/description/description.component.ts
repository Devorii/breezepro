import { Component, OnInit, Input } from "@angular/core";
import { StoreDataService } from "../../../../../app/store-data.service";
import * as _ from 'underscore';
import { Router } from "@angular/router";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.scss"]
})
export class DescriptionComponent implements OnInit {
  @Input() childMessage: string;

  amountclear;
  productclear;
  len;
  formData = [];
  // Array<{id:'', productname: ''; amount: '' }>

  productPriceList = [];
  Showdata = [];
  searchValue = "";
  searchValue1 = "";
  constructor(private storedata: StoreDataService,  private router: Router) {}

  ngOnInit() {
    this.Display();
    console.log(this.storedata.clientId);
    console.log(this.storedata.companyName);
    console.log(this.storedata.productId);
    console.log(this.storedata.packageId);
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  Add(product, price) {
    // console.log(product);
    // console.log(price);
    this.len = _.size(this.formData);
    // console.log(this.len)
    var mObj = {
      id: this.len,
      productname: product,
      amount: price
    };

    this.formData.push(mObj);
    // this.productPriceList.push(this.formData);
    product = "";
    price = "";
    this.amountclear = "";
    this.productclear = "";
    // console.log(this.formData);

    this.Display();
  }

  Display() {
    this.formData;
    // this.Showdata = this.productPriceList;
  }

  onItemDeselect(item1: any) {
    // console.log(item1);

    // find ID
    const mItemID = item1.id;
    // find index of Id
    var bTest = this.formData.find(x => x.id == mItemID);

    var mlocationItem = this.formData.indexOf(bTest);

    this.formData.splice(mlocationItem, 1);
    console.log(this.formData);
  }

  next(){
    
    this.router.navigate(['dashboard/investment'])
  }
}
