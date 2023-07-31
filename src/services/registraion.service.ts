import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { Registration } from 'src/dto/registration';


@Injectable({
  providedIn: 'root'
})
export class RegistraionService {
  private createAccountUrl = 'http://localhost:8080/api/registration/createAccount';



  constructor(private http: HttpClient) { }

  createAccount(registration:Registration): Observable<Object> {
       return this.http.post(this.createAccountUrl ,registration);
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
