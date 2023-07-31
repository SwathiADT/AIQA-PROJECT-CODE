import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { Iproject } from 'src/dto/iproject';
import { Itestplan } from 'src/dto/itestplan';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
 
  private projectUrl = 'assets/api/projects/project.json';
  private testplanUrl = 'assets/api/testplans/testplan.json';


  constructor(private http: HttpClient) { }

  
  getWorkSpace(): Observable<Iproject[]> {
    return this.http.get<Iproject[]>(this.projectUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );

      }
      getProjects(): Observable<Iproject[]> {
        return this.http.get<Iproject[]>(this.testplanUrl)
          .pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
          );
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
