import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  
logout()
{
  //alert("called")
  localStorage.clear();
  localStorage.token = '';

  localStorage.user_id = '';
  //console.log(a);
  this.router.navigate(['login'])
}

}
