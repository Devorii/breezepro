import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-pdf-create',
  templateUrl: './pdf-create.component.html',
  styleUrls: ['./pdf-create.component.scss']
})
export class PdfCreateComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings  = {};
  websitesText = document.getElementById("mWeb")
  seoText = document.getElementById("mSEO")
  analyticsText = document.getElementById("mAnalytics")

  ngOnInit() {
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
      
      console.log("one")
      break;
      case 2:
          console.log("two")
      break;
      case 3:
          console.log("three")
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
