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


  constructor(private http: HttpClient,public jwtHelper: JwtHelperService) { 
   
      this.HttpHeaderOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data, application/json',
          'Authorization': 'Bearer ' + localStorage.googletoken
        })
      };
  }


  setheader()
  {
    
    this.HttpHeaderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data, application/json',
        'Authorization': 'Bearer ' + localStorage.googletoken
      })
    };
  }


  
  public isAuthenticated(): boolean {

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(localStorage.googletoken);
  }

  login(product): Observable<any> {
    return this.http.post<any>(this.Urlendpoint + 'login', JSON.stringify(product), this.HttpHeaderOptions);
  }

  Getleads(): Observable<any> {
     return this.http.get<any>(this.Urlendpoint + 'leads', this.HttpHeaderOptions);
    //return this.http.get(this.Urlendpoint + 'leads',this.HttpHeaderOptions);
  }

  Getdropdwonlist(): Observable<any> {
    return this.http.get<any>(this.Urlendpoint + 'packages', this.HttpHeaderOptions);
   //return this.http.get(this.Urlendpoint + 'leads',this.HttpHeaderOptions);
 }

  Createleads(product): Observable<any> {
    return this.http.post<any>(this.Urlendpoint + 'leads', JSON.stringify(product), this.HttpHeaderOptions);
  }

  Editleads(product): Observable<any> {
    return this.http.put<any>(this.Urlendpoint + 'leads/'+product.id + '?' + product, JSON.stringify(product), this.HttpHeaderOptions);
  }

  Deleteleads(product): Observable<any> {
    return this.http.delete<any>(this.Urlendpoint + 'leads/'+product, this.HttpHeaderOptions);
  }

  GetProductlist(product): Observable<any> {
    return this.http.post<any>(this.Urlendpoint + 'products', JSON.stringify(product), this.HttpHeaderOptions);
   //return this.http.get(this.Urlendpoint + 'leads',this.HttpHeaderOptions);
 }


 PostProposal(product): Observable<any> {
  return this.http.post<any>(this.Urlendpoint + 'proposal', JSON.stringify(product), this.HttpHeaderOptions);
}

}


