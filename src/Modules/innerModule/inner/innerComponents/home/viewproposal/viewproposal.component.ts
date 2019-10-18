import { Component, OnInit, Input } from '@angular/core';
import { ComponentDataPassingService } from '../../../../../app/component-data-passing.service';

@Component({
  selector: 'app-viewproposal',
  templateUrl: './viewproposal.component.html',
  styleUrls: ['./viewproposal.component.scss']
})
export class ViewproposalComponent implements OnInit {

  constructor(private componentServiceCollection:ComponentDataPassingService ) { 
    
  }

  ngOnInit() {
    
  }
  @Input() companyName:string

  tryThis(){ 
    var companyPackage = this.componentServiceCollection.getMultiSelectOptions();
    console.log(companyPackage)
  }
  
  
}
