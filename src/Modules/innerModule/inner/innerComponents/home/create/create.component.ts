import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../../../../app/data.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; //newly
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { Router } from "@angular/router";
import { StoreDataService } from "../../../../../app/store-data.service";
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
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
  dropdownSettings: NgMultiSelectDropDownModule = {};
  dropdownSettings2: NgMultiSelectDropDownModule = {};

  selectedItems = [];
  selectedItems1 = [];

  registerForm: FormGroup; //new
  submitted = false; //new

  setOptions = [];
  packagesToSend;

  mTest;

  @Input() formsdataforpost = { client_name: "", client_email: "" };

  constructor(
    private data: DataService,
    private storedata: StoreDataService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  formsdata = { client_name: "", client_email: "", id: "" };

  selecteddata = { id: "", client_name: "", client_email: "" };
  selecteddataid = { id: "" };

  modalName;
  ngOnInit() {
    this.spinner.show();
    this.initialize();
    this.initializeProducts();
    this.getleads();
    this.registerForm = this.formBuilder.group({
      //new
      client_name: ["", Validators.required],
      client_email: ["", [Validators.required, Validators.email]]
    });
  }

  initialize() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: "id",
      textField: "package_name",
      limitSelection: 1,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  initializeProducts() {
    this.dropdownSettings2 = {
      singleSelection: false,
      idField: "id",
      textField: "product_name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection: 12,
    };
  }

  onItemDeselect(item1: any) {
   // console.log(item1);

    var removeIndex = this.setOptions
      .map(function (item) {
        return item.id;
      })
      .indexOf(item1.id);

    this.setOptions.splice(removeIndex, 1);
   // console.log(this.setOptions);
  }

  onItemSelect1(item: any) {
    // this.setOptions.setMultiSelectOptions(item.id, item.product_name)
    //console.log(item);
    this.setOptions.push(item);
    //console.log(item);
  }

  onSelectAll(item: any) {
    this.setOptions.push(item);
    //console.log(this.selectedItems1);
  }

  get fval() {
    return this.registerForm.controls; //new
  }

  getleads() {
    //this.spinner.show();
    this.data.Getleads().subscribe(
      result => {
      //  console.log(result);
        if (result) {
          this.ListInfo = result.data;
          this.spinner.hide();
        }
      },
      err => {
        this.spinner.hide();
        this.ErrorMessage =
          "Error : " + err + " .Please tell admin about this error";
      }
    );
  }

  //lead Modal injection
  callNewModal(modaldata) {
    this.modalName = modaldata.client_name;
    this.selecteddata.id = modaldata.id;
  //  console.log(this.selecteddata.id); //this info 1
    this.selecteddata.client_name = modaldata.client_name;
    this.selecteddata.client_email = modaldata.client_email;
  }

  // Edit button
  edit() {
    this.formsdata.client_email = this.selecteddata.client_email;
    this.formsdata.id = this.selecteddata.id;
    this.formsdata.client_name = this.selecteddata.client_name;
   // console.log(this.formsdata.client_email);
   // console.log(this.formsdata.client_name);
  }

  editdata() {
    this.spinner.show();
    this.formsdata.client_email = this.selecteddata.client_email;
    this.formsdata.id = this.selecteddata.id;
    this.formsdata.client_name = this.selecteddata.client_name;
    this.data.Editleads(this.formsdata).subscribe(
      result => {
    //    console.log(result);
        if (result.success == true) {
          this.showdupdate();
          this.getleads();
          this.spinner.hide();
        } else {
          this.spinner.hide();
          this.ErrorMessage = "Error : " + result.message;
          this.showderror(this.ErrorMessage);
        }
      },
      err => {
        this.spinner.hide();
        this.ErrorMessage =
          "Error : " + err + " .Please tell admin about this error";
      }
    );
  }

  // Delete Button
  leadDelete() {
    this.spinner.show();
    this.data.Deleteleads(this.selecteddata.id).subscribe(
      result => {
      //  console.log(result);
        if (result) {
          this.showdelete();
          this.getleads();
          this.spinner.hide();
        }
      },
      err => {
        this.spinner.hide();
        this.ErrorMessage =
          "Error : " + err + " .Please tell admin about this error";
      }
    );
  }

  // Create Proposal button
  CreateProposal(companyName) {
    (document.querySelector(".content_Wrapper") as HTMLElement).style.display =
      "none";
    (document.querySelector(
      ".customPKG_page_Edit"
    ) as HTMLElement).style.display = "block";
    this.cName = companyName; // this info 2
    this.selecteddataid.id = this.selectedItems_; // this info 3
    this.getProductlists();
    //console.log(companyName);
    //console.log(this.selecteddataid.id);
  }

  //create lead
  leadInformation() {
    this.spinner.show();
    this.formsdata.client_email = this.formsdataforpost.client_email;
    this.formsdata.client_name = this.formsdataforpost.client_name;

    //console.log(this.formsdata);
    if (this.formsdata.client_email != "" && this.formsdata.client_name != "") {
      this.data.Createleads(this.formsdata).subscribe(
        result => {
        //  console.log(result);
          if (result) {

            this.showSuccess();
            this.formsdataforpost.client_email = "";
            this.formsdataforpost.client_name = "";
            this.getleads();
            this.spinner.hide();
          }
        },
        err => {
          this.spinner.hide();
          this.ErrorMessage =
            "Error : " + err + " .Please tell admin about this error";
        }
      );
    } else {
      this.spinner.hide();
      this.ErrorMessage = "Email or Name cannot be blank";
    }
  }

  getdropdown() {
    this.data.Getdropdwonlist().subscribe(
      result => {
        //console.log(result);
        if (result) {
          this.dropdownList = result.data;
          this.spinner.hide();
        }
      },
      err => {
        this.spinner.hide();
        this.ErrorMessage =
          "Error : " + err + " .Please tell admin about this error";
      }
    );
  }

  getProductlists() {
    //console.log(this.selecteddataid);
    this.data.GetProductlist(this.selecteddataid).subscribe(
      result => {
      //  console.log(result);
        if (result) {
          this.dropdownList2 = result.data;
          this.spinner.hide();
        }
      },
      err => {
        this.spinner.hide();
        this.ErrorMessage =
          "Error : " + err + " .Please tell admin about this error";
      }
    );
  }

  onItemSelect(item: any) {
    this.selectedItems_ = item.id;

   // console.log(this.selectedItems_);
  }

  Verify() {
    
    this.storedata.productId = this.setOptions // this is all the packages/Products selected 
    this.storedata.clientId = this.selecteddata.id  // this is the data id of the client
    this.storedata.companyName = this.cName // Company name 
    this.storedata.packageId = this.selecteddataid.id //the package name
    

    this.router.navigate(['dashboard/description'])
    // this.data.GetProductlist(this.selecteddataid).subscribe((result) => {
    //   console.log(result);
    //   if (result) {
    //     this.dropdownList2 = result.data
    //     this.spinner.hide();
    //   }
    // }, (err) => {
    //   this.spinner.hide();
    //   this.ErrorMessage = "Error : " + err + " .Please tell admin about this error";
    // });
  }

  showSuccess() {
    this.toastr.success("Lead Created", "Success");
  }

  showdelete() {
    this.toastr.error("Lead Deleted", "");
  }

  showdupdate() {
    this.toastr.warning("Lead Updated", "");
  }

  showderror(error) {
    this.toastr.error(error, "error");
  }

  back(){
    (document.querySelector(".customPKG_page_Edit") as HTMLElement).style.display =
      "none";
    (document.querySelector(
      ".content_Wrapper "
    ) as HTMLElement).style.display = "block";
    this.router.navigate(['dashboard/create']);
  }


}
