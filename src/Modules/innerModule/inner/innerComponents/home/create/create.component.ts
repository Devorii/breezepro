import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 createLeads = []

leadInformation(name, email){
    // console.log(name, email)
   //create and object
    let leads = {
      mName: name, 
      mEmail: email
    }
      if(leads.mName && leads.mEmail != null){
        this.createLeads.push(leads)
      }
    console.log(this.createLeads)
    }
    callNewModal(){
      alert("btn Clicked")
    }

  }
 
