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
  allSelectedItems = [];
  individualSelectedItems = []
  selectedItems_: any;
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
      limitSelection: 1,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    this.selectedItems_ = this.individualSelectedItems.push(item.item_text)
    console.log(this.selectedItems_);
  }

  onSelectAll(items: any) {
    this.allSelectedItems.push(items)
    console.log(this.allSelectedItems);
  }
}
