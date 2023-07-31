import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { CProject } from 'src/dto/cproject';


@Injectable({
  providedIn: 'root'
})
export class CProjectService {
  private createprojectUrl = 'http://localhost:8080/api/project/createProject';
  private getprojectUrl = 'http://localhost:8080/api/project/getProject';



  constructor(private http: HttpClient) { }

  createProject(cproject:CProject): Observable<any> {
   
    console.log("cproject"+JSON.stringify(cproject));
    return this.http.post(this.createprojectUrl ,cproject);
  }
  getProject(workSpaceId:number): Observable<CProject[]> {
   
    
    return this.http.post<CProject[]>(this.getprojectUrl,workSpaceId);
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