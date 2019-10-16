import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username;
  first;
  last;
  constructor() { }

  ngOnInit() {
   
     this.first =  localStorage.googlename.charAt(0)
     this.last = localStorage.googlename.split(/(?<=^\S+)\s/);
     console.log(this.last)
     this.last =  this.last[1]
     this.last =  this.last.charAt(0)

    this.username = localStorage.googlename
  }

  dateTime = Date.now();

}
