import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Car } from '../models/car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  public url: string;
  
  constructor(
    public _http: HttpClient
  ) { 
    this.url = Global.url;
  }

  test(): any{
    console.log('car.service funcionando')
  }

  create(token, car: Car): Observable<any>{
    let json = JSON.stringify(car);
    let params = "json="+json;

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this._http.post(this.url+'car', params, {headers: headers});
  }

  getCars(): Observable<any>{
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'car', {headers: headers});
  }
}
