import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:8080/v1/alticci/";
  

  public constructor(private http : HttpClient) { }

public getAnswer(sequence:number):Observable<number>{
    return this.http.get<number>(this.APIUrl+sequence);
}




}