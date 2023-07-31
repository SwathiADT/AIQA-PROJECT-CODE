import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { CWorkspace } from 'src/dto/cworkspace';


@Injectable({
  providedIn: 'root'
})
export class CWorkspaceService {
  private createWorkspaceUrl = 'http://localhost:8080/api/workspace/createWorkspace';


  private getWorkspaceUrl = 'http://localhost:8080/api/workspace/getWorkspace';



  constructor(private http: HttpClient) { }

  createWorkspace(c_workspace:CWorkspace): Observable<any> {
   
    console.log("cworkspace"+JSON.stringify(c_workspace));
    return this.http.post(this.createWorkspaceUrl ,c_workspace);
  }


  getWorkspace(): Observable<CWorkspace[]> {
   
    
    return this.http.get<CWorkspace[]>(this.getWorkspaceUrl);
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