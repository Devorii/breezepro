import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BreezePro';
test;
a;

constructor() { }

  ngOnInit() {

    this.test = localStorage.getItem('token');
    this.a = this.test;
  }

}