import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as jsPDF from "jspdf"


@Component({
  selector: 'app-pdf-create',
  templateUrl: './pdf-create.component.html',
  styleUrls: ['./pdf-create.component.scss']
})
export class PdfCreateComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  // COllecting for DB Test 
  textCollection = []

  // Create an key value object to collect input from the user
  dataCollection = { 
    id: 0, 
    subject: "",
    userText: ""
  }
  dropdownSettings:IDropdownSettings  = {};
  
  ngOnInit() {
  (document.querySelector('.mWeb') as HTMLElement).style.display = 'none';
  (document.querySelector('.mSEO') as HTMLElement).style.display = 'none';
  (document.querySelector('.mAnalytics') as HTMLElement).style.display = 'none';
    this.dropdownList = [
      { item_id: 1, item_text: 'websites' },
      { item_id: 2, item_text: 'SEO' },
      { item_id: 3, item_text: 'Analytics' },

    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    /**
     * IF ITEM ID == TO ID IN THE DB THEN DISPLAY TEXTAREA
     */

    switch(item.item_id){
      case 1: 
      (document.querySelector('.mWeb') as HTMLElement).style.display = 'block';
      break;
      case 2:
      (document.querySelector('.mSEO') as HTMLElement).style.display = 'block';
      break;
      case 3:
      (document.querySelector('.mAnalytics') as HTMLElement).style.display = 'block';
      break;
      default:
          console.log("default")
    } 
    console.log(item);
  }
  onSelectAll(items: any) {
    this.selectedItems.push(items)
    console.log(this.selectedItems);
  }
}
