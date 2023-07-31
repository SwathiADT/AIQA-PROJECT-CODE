
import { Component,OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
 
import { ActivatedRoute, Router } from '@angular/router';
import { CTestPlan } from 'src/dto/ctestplan';
import { TestPlanService } from 'src/services/testplan.service';

import { Subscription } from "rxjs";


@Component({
  selector: 'iqa-show-test-plan',
  templateUrl: './show-test-plan.component.html',
  styleUrls: ['./show-test-plan.component.css']
})
export class ShowTestPlanComponent implements OnInit {
  
  pageTitle = 'Test Plan';
  errorMessage = '';
  sub!: Subscription;
  projectId:number=0;
  title = 'export-excel';
  fileName = 'TestPlan.xlsx';
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };

  testPlan: CTestPlan[] = [];

  constructor(private testPlanService: TestPlanService,private route: ActivatedRoute) {}

  
  ngOnInit(): void {

    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
   
    this.sub = this.testPlanService.getTestPlan(this.projectId).subscribe(data=>{

      this.testPlan=data;
    });
      
    }

    exportExcel(): void {
      /* pass here the table id */
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.testPlan);
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      /* save to file */
      XLSX.writeFile(wb, this.fileName);
  }

  
  

}

