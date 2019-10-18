import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as jsPDF from "jspdf";
import { DataService } from '../../../../../app/data.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-pdf-create',
  templateUrl: './pdf-create.component.html',
  styleUrls: ['./pdf-create.component.scss']
})


export class PdfCreateComponent implements OnInit {
  constructor(private data: DataService, private spinner: NgxSpinnerService) { }

  dropdownList = [];
  allSelectedItems = [];
  individualSelectedItems = []
  selectedItems_: any;
  dropdownSettings:IDropdownSettings  = {};
  ErrorMessage;
  ngOnInit() {


    this.getdropdown();


    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Sun' },
    //   { item_id: 2, item_text: 'Moon' },
    //   { item_id: 3, item_text: 'Stars' },
    //   { item_id: 4, item_text: 'Custom' }
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'package_name',
      limitSelection: 1,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getdropdown() {
    //this.spinner.show();
    this.data.Getdropdwonlist().subscribe((result) => {
      //console.log(result);
      if (result) {
        this.dropdownList = result.data
        this.spinner.hide();
      }
    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    });
  }

  onItemSelect(item: any) {
    this.selectedItems_ = this.individualSelectedItems.push(item.item_text)
    //console.log(this.selectedItems_);
  }

  onSelectAll(items: any) {
    this.allSelectedItems.push(items)
    //console.log(this.allSelectedItems);
  }
}
