import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../../app/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //newly

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

  registerForm: FormGroup; //new
  submitted = false; //new

  @Input() formsdataforpost = { client_name: '', client_email: '' };

  constructor(private data: DataService, private spinner: NgxSpinnerService, private toastr: ToastrService,private formBuilder: FormBuilder) { }
  formsdata = { client_name: '', client_email: '', id: '' };

  selecteddata = { id: '', client_name: '', client_email: '' }
  modalName;
  ngOnInit() {
    this.spinner.show();
    this.getleads();
    this.registerForm = this.formBuilder.group({ //new
      client_name: ['', Validators.required],
      client_email: ['', [Validators.required,Validators.email]],
     });

  }

  get fval() {
    return this.registerForm.controls; //new 
    }


  getleads() {
    //this.spinner.show();
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

  editdata() {
    this.spinner.show();
    this.formsdata.client_email = this.selecteddata.client_email;
    this.formsdata.id = this.selecteddata.id;
    this.formsdata.client_name = this.selecteddata.client_name;
    this.data.Editleads(this.formsdata).subscribe((result) => {

      console.log(result);
      if (result.success == true) {
        this.showdupdate();
        this.getleads();
        this.spinner.hide();
      }
      else
      {
        this.spinner.hide();
        this.ErrorMessage = "Error : " + result.message;
        this.showderror(this.ErrorMessage);
      }


    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    });


  }

  // Delete Button 
  leadDelete() {
    this.spinner.show();
    this.data.Deleteleads(this.selecteddata.id).subscribe((result) => {

      console.log(result);
      if (result) {
        this.showdelete();
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
          this.showSuccess();
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

  }

  showSuccess() {
    this.toastr.success('Lead Created', 'Success');
  }

  showdelete() {
    this.toastr.error('Lead Deleted', '');
  }


  showdupdate() {
    this.toastr.warning('Lead Updated', '');
  }


  showderror(error) {
    this.toastr.error(error, 'error');
  }

}