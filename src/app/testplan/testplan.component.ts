import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,FormBuilder} from '@angular/forms';
import { TestPlanService } from 'src/services/testplan.service';
import { CTestPlan } from 'src/dto/ctestplan';
import {Router,ActivatedRoute} from "@angular/router"

@Component({
  selector: 'iqa-testplan',
  templateUrl: './testplan.component.html',
  styleUrls: ['./testplan.component.css']
})
export class TestplanComponent implements OnInit{

  cTestPlanForm:FormGroup ;
  cTestPlan=new CTestPlan();
  message:String='';
  projectId:number=0;

  constructor(private fb: FormBuilder,private cTestPlanService:TestPlanService,private route: ActivatedRoute,private router: Router) { }
  ngOnInit(){
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.cTestPlanForm=new FormGroup({
      planName:new FormControl(),
      release:new FormControl(),
      team:new FormControl(),
      sprint:new FormControl(),
      feature:new FormControl(),
      description:new FormControl()
    });
  }

  save(): void {
    console.log(this.cTestPlanForm);
    this.cTestPlan.planName=this.cTestPlanForm.value.planName;
    this.cTestPlan.release=this.cTestPlanForm.value.release;
      this.cTestPlan.team=this.cTestPlanForm.value.team;
      this.cTestPlan.sprint=this.cTestPlanForm.value.sprint;
    this.cTestPlan.feature=this.cTestPlanForm.value.feature;
    this.cTestPlan.description=this.cTestPlanForm.value.description;
    this.cTestPlan.projectId=this.projectId;
    this.cTestPlanService.createTestPlan(this.cTestPlan).subscribe(result=>this.message);

    this.router.navigate(['/testplan',this.cTestPlan.projectId]);
  
  }
  

  requirements: any = {};

  saveRequirements() {
    // Logic to save the requirements
    console.log(this.requirements);
  }

  handleFileChange(event: any) {
    const file = event.target.files[0];
    // Logic to handle the file
    console.log(file);
  }




}



