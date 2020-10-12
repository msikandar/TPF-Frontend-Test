import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AppService {

  public url = "https://nodepractice-atrmy.run-ap-south1.goorm.io/";
  constructor(public http: HttpClient,) { }


  
public async getCsv() {
  return await this.http.get(this.url + "csv/e3e7a500a6ce6c83b6e874bb456da05b.csv", {responseType: 'text'});
}

}
