import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { TestCase } from 'src/dto/itestcase';


@Injectable({
  providedIn: 'root'
})
export class TestCaseService {
  private createTCUrl = 'http://localhost:8080/api/registration/createAccount';



  constructor(private http: HttpClient) { }

  createTC(testcase:TestCase): Observable<any> {
   
    console.log("testcase"+JSON.stringify(testcase));
    return this.http.post(this.createTCUrl ,testcase);
  }
      
  
  private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
       errorMessage = `An error occurred: ${err.error.message}`;
    } else {
         errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}