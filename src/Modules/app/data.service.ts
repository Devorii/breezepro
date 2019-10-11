import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})


export class DataService {

  Urlendpoint = 'https://proposal.breezesquad.com/api/v1/';
  Apptoken;
  HttpHeaderOptions: any;


  constructor(private http: HttpClient) { 
   
      this.HttpHeaderOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data, application/json',
          'Authorization': 'Bearer ' + localStorage.token
        })
      };
  }


  login(product): Observable<any> {
    return this.http.post<any>(this.Urlendpoint + 'login', JSON.stringify(product), this.HttpHeaderOptions);
  }

}


