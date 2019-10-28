import { Component, OnInit, Input } from '@angular/core';
import { ComponentDataPassingService } from '../../../../../app/component-data-passing.service';
import { DataService } from '../../../../../app/data.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-viewproposal',
  templateUrl: './viewproposal.component.html',
  styleUrls: ['./viewproposal.component.scss']
})
export class ViewproposalComponent implements OnInit {

  constructor(private componentServiceCollection: ComponentDataPassingService,private data: DataService, private spinner: NgxSpinnerService,) {

  }
  @Input() companyName: string
  @Input() cid: string
  ErrorMessage;

  ngOnInit() {
   // console.log("called");
    this.getProductlists();
  }

  getProductlists(){

    this.data.GetProductlist(this.cid).subscribe((result) => {
     // console.log(result);
      if (result) {
        //this.dropdownList = result.data
        this.spinner.hide();
      }
    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    });

  }

  tryThis() {
    (document.querySelector('.content_Wrapper') as HTMLElement).style.display = 'block';
    (document.querySelector('.customPKG_page_Edit') as HTMLElement).style.display = 'none';
    // var companyPackage = this.componentServiceCollection.getMultiSelectOptions();
    // console.log(companyPackage)
  }


}
