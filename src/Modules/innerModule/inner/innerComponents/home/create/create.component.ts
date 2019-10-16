import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../../../../../app/data.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  ErrorMessage;
  ListInfo :any [];
  modalid;
  constructor(private data: DataService,private spinner: NgxSpinnerService) { }
  formsdata = { client_name:'', client_email:'' };

  ngOnInit() {

    this.getleads();
  }


  getleads(){
    this.spinner.show();
    this.data.Getleads().subscribe((result) => {

      console.log(result);
      if(result){
        this.ListInfo = result.data
        this.spinner.hide();
      }
      

    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err  + " .Please tell admin about this error";
    });
  }

// Global Variables
  // createLeads = []

  // leads = { 
  //   mID: 0,
  //   mName: "",
  //   mEmail: ""
  // }

  // id = 0
   modalName:string;


// leadInformation(name, email){

//   //   // console.log(name, email)
//   //  //create and object
//   // this.id++
//   // this.leads = {
//   //     mID: this.id,
//   //     mName: name, 
//   //     mEmail: email
//   //   }
//   //     if(this.leads.mName && this.leads.mEmail != null){
//   //       this.createLeads.push(this.leads)
//   //     }
//   //   console.log(this.createLeads)


//     }

    // //lead Modal injection
    callNewModal(modalid,name){ 
console.log(name)

    //   //passing collected data to modal
       this.modalid = modalid
       this.modalName = name
    //   // finding data in array
    //   let mFind = this.createLeads.find(x => x.mID == mIDcollect)
      //console.log(mIDcollect)
      
    }

    // Edit button
    edit(){ 
      console.log("Edit")
    } 
    // Delete Button 
    leadDelete(mIDcollect){  
      
      this.data.Deleteleads(mIDcollect).subscribe((result) => {

        console.log(result);
        if(result){
          this.ListInfo = result.data
          this.spinner.hide();
        }
        
  
      }, (err) => {
        this.spinner.hide();
        this.ErrorMessage = "Error : " + err  + " .Please tell admin about this error";
      });


    //console.log(mIDcollect + "Delete")
    //alert("Connect to DB")
   // location.reload()
    }
    // Create Proposal button
    CreateProposal(){ 

    }

    
    leadInformation(name, email){
      this.spinner.show();
      this.formsdata.client_email = email;
      this.formsdata.client_name = name;
      console.log(this.formsdata)
     if(this.formsdata.client_email != '' && this.formsdata.client_name != ''){
      this.data.Createleads(this.formsdata).subscribe((result) => {

        console.log(result);
        if(result){
          this.getleads();
          this.spinner.hide();
        }
        

      }, (err) => {
        this.spinner.hide();
        this.ErrorMessage = "Error : " + err  + " .Please tell admin about this error";
      });


     }
     else
     {
      this.spinner.hide();
      this.ErrorMessage = "Email or Name cannot be blank";
     }
      

    }


  }


 
