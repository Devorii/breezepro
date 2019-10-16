import { Component, OnInit } from '@angular/core';
import * as jsPDF from "jspdf"


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// Global Variables
createLeads = []

leads = { 
  mID: 0,
  mName: "",
  mEmail: ""
}

id = 0
modalName:string;


leadInformation(name, email){
    // console.log(name, email)
   //create and object
  this.id++
  this.leads = {
      mID: this.id,
      mName: name, 
      mEmail: email
    }
      if(this.leads.mName && this.leads.mEmail != null){
        this.createLeads.push(this.leads)
      }
    console.log(this.createLeads)
    }

    //lead Modal injection
    callNewModal(mIDcollect, mNameCollect){ 
      //passing collected data to modal
      this.modalName = mNameCollect
      // finding data in array
      let mFind = this.createLeads.find(x => x.mID == mIDcollect)
     console.log(mFind)
      
    }

    // Edit button
    edit(){ 
      console.log("Edit")
    } 
    // Delete Button 
    leadDelete(mIDcollect){  
    console.log(mIDcollect + "Delete")
    alert("Connect to DB")
    location.reload()
    }


// Create Proposal button
CreateProposal(website, seo, analytics){ 

  var specialElementHandler = { 
        "#editor":(element, renderer)=>{ 
          return true
        }
   }
 
   let doc = new jsPDF()
   var myAll = website + " " + seo + " " + analytics    

   doc.fromHTML(myAll, 15, 15, {
     "width": 170, 
     "elementHandler": specialElementHandler
   })
   
   alert(doc.output('datauri').toString())
    // doc.save(this.modalName + "_Proposal.pdf")
    }
  }


 
