import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ComponentDataPassingService } from '../../../../../app/component-data-passing.service';

@Component({
  selector: 'app-global-multiselector',
  templateUrl: './global-multiselector.component.html',
  styleUrls: ['./global-multiselector.component.scss']
})
export class GlobalMultiselectorComponent implements OnInit {
  constructor( private setOptions:ComponentDataPassingService){ 

  }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings  = {};
  
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Websites' },
      { item_id: 2, item_text: 'SEO' },
      { item_id: 3, item_text: 'MARKETING' },
      { item_id: 4, item_text: 'SEM' }

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
  onItemDeselect(item: any){ 
  var selectedItemIndex = this.selectedItems.filter(x => x.item_id) 
  delete selectedItemIndex.findIndex
    // Updating service file
  this.setOptions.deleteMultiSelectOptions(item.item_id, item.item_text)

  }
  
  
  onItemSelect(item: any) {
    this.setOptions.setMultiSelectOptions(item.item_id, item.item_text)
    console.log(item);
  }

  onSelectAll(items: any) {
    this.selectedItems.push(items)
    console.log(this.selectedItems);
    
  }
  
}
