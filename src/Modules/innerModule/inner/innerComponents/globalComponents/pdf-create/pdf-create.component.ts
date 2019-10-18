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
  dropdownSettings:IDropdownSettings  = {};
  
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Sun' },
      { item_id: 2, item_text: 'Moon' },
      { item_id: 3, item_text: 'Stars' },
      { item_id: 4, item_text: 'Custom' }
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
  
      break;
      case 2:
      
      break;
      case 3:
      
      break;
      case 4:
      
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
