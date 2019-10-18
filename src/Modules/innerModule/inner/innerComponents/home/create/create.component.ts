import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../../app/data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  ErrorMessage;
  ListInfo: any[];
  modalid;
  cName:string

  @Input() formsdataforpost = { client_name: '', client_email: '' };
  constructor(private data: DataService, private spinner: NgxSpinnerService) { }
  formsdata = { client_name: '', client_email: '',id:'' };
 
  selecteddata = { id: '', client_name: '', client_email: '' }
  modalName;
  ngOnInit() {

    this.getleads();
  }


  getleads() {
    this.spinner.show();
    this.data.Getleads().subscribe((result) => {
      console.log(result);
      if (result) {
        this.ListInfo = result.data
        this.spinner.hide();
      }
    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    });
  }

  s//lead Modal injection
  callNewModal(modaldata) {
    this.modalName = modaldata.client_name
    this.selecteddata.id = modaldata.id
    this.selecteddata.client_name = modaldata.client_name
    this.selecteddata.client_email = modaldata.client_email
  }


  // Edit button
  edit() {
    this.formsdata.client_email = this.selecteddata.client_email;
    this.formsdata.id = this.selecteddata.id;
    this.formsdata.client_name = this.selecteddata.client_name;
    console.log(this.formsdata.client_email);
    console.log(this.formsdata.client_name);
  }

  editdata()
  {
    this.formsdata.id = this.selecteddata.id;
    this.formsdata.client_name = this.selecteddata.client_name; 
    this.data.Editleads(this.formsdata).subscribe((result) => {

      console.log(result);
      if (result) {
        this.getleads();
        this.spinner.hide();
      }


    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    });


  }

  // Delete Button 
  leadDelete() {

    this.data.Deleteleads(this.selecteddata.id).subscribe((result) => {

      console.log(result);
      if (result) {
        this.getleads();
        this.spinner.hide();
      }


    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    });



  }



  // Create Proposal button
  CreateProposal(companyName) {
    (document.querySelector('.content_Wrapper') as HTMLElement).style.display = 'none';
    (document.querySelector('.customPKG_page_Edit') as HTMLElement).style.display = 'block';
    this.cName = companyName
 

   console.log(companyName)
  }

  //create lead
  leadInformation() {
    this.spinner.show();
    this.formsdata.client_email = this.formsdataforpost.client_email;
    this.formsdata.client_name = this.formsdataforpost.client_name;

    console.log(this.formsdata)
    if (this.formsdata.client_email != '' && this.formsdata.client_name != '') {
      this.data.Createleads(this.formsdata).subscribe((result) => {

        console.log(result);
        if (result) {
          this.formsdataforpost.client_email = '';
          this.formsdataforpost.client_name = '';
          this.getleads();
          this.spinner.hide();
        }


      }, (err) => {
        this.spinner.hide();
        this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
      });


    }
    else {
      this.spinner.hide();
      this.ErrorMessage = "Email or Name cannot be blank";
    }


  // var specialElementHandler = { 
  //       "#editor":(element, renderer)=>{ 
  //         return true
  //       }
  //  }
 
  //  let doc = new jsPDF()
  //  var myAll = website + " " + seo + " " + analytics    

  //  doc.fromHTML(myAll, 15, 15, {
  //    "width": 170, 
  //    "elementHandler": specialElementHandler
  //  })
   
  //  alert(doc.output('datauri').toString())
  //   // doc.save(this.modalName + "_Proposal.pdf")
  //   }
  // }


}
}