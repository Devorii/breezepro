import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../../app/data.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //newly
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  ErrorMessage;
  ListInfo: any[];
  modalid;
  cName: string;
  CID: string;

  dropdownList = [];
  dropdownList2 = [];
  selectedItems_: any;
  dropdownSettings: IDropdownSettings = {};
  dropdownSettings2: IDropdownSettings = {};

  selectedItems = [];
  selectedItems1 = [];

  registerForm: FormGroup; //new
  submitted = false; //new

  setOptions;

  @Input() formsdataforpost = { client_name: '', client_email: '' };

  constructor(private data: DataService, private spinner: NgxSpinnerService, private toastr: ToastrService, private formBuilder: FormBuilder) { }
  formsdata = { client_name: '', client_email: '', id: '' };

  selecteddata = { id: '', client_name: '', client_email: '' };
  selecteddataid = { id: '' };

  modalName;
  ngOnInit() {
    this.spinner.show();
    this.initialize();
    this.getleads();
    this.registerForm = this.formBuilder.group({ //new
      client_name: ['', Validators.required],
      client_email: ['', [Validators.required, Validators.email]],
    });

  }

  initialize() {

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'package_name',
      limitSelection: 1,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }



  initializeProducts() {

    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'id',
      textField: 'product_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }


  onItemDeselect(item: any) {

    // Updating service file
    this.setOptions.deleteMultiSelectOptions(item.item_id, item.item_text)

  }

  onItemSelect1(item: any) {
    this.setOptions.setMultiSelectOptions(item.item_id, item.item_text)
    console.log(item);
  }

  onSelectAll(items: any) {
    this.selectedItems1.push(items)
    console.log(this.selectedItems1);

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

  //lead Modal injection
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
      else {
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
    this.cName = companyName;
    this.selecteddataid.id = this.selectedItems_;
    this.getProductlists();
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



  getdropdown() {

    this.data.Getdropdwonlist().subscribe((result) => {
      //console.log(result);
      if (result) {
        this.dropdownList = result.data
        this.spinner.hide();
      }
    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    });
  }



  getProductlists() {
console.log(this.selecteddataid);
    this.data.GetProductlist(this.selecteddataid).subscribe((result) => {
      console.log(result);
      if (result) {
        this.dropdownList2 = result.data
        this.spinner.hide();
      }
    }, (err) => {
      this.spinner.hide();
      this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    });

  }

  onItemSelect(item: any) {
    this.selectedItems_ = item.id

    console.log(this.selectedItems_);
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