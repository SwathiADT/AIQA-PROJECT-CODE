import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { CTestPlan } from 'src/dto/ctestplan';


@Injectable({
  providedIn: 'root'
})
export class TestPlanService {
  private createTestPlanUrl = 'http://localhost:8080/api/testPlan/createTestPlan';


  private getTestPlanUrl = 'http://localhost:8080/api/testPlan/getTestPlan';



  constructor(private http: HttpClient) { }

  createTestPlan(testplan:CTestPlan): Observable<any> {
   
    console.log(testplan)
    return this.http.post(this.createTestPlanUrl ,testplan);
  }


  getTestPlan(projectId:number): Observable<CTestPlan[]> {
   
    
    return this.http.post<CTestPlan[]>(this.getTestPlanUrl,projectId);
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
