import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,FormBuilder} from '@angular/forms';
import { CProject } from 'src/dto/cproject';
import { CProjectService } from 'src/services/cproject.service';
import {Router,ActivatedRoute} from "@angular/router"


@Component({
  selector: 'iqa-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit{
  cProjectForm:FormGroup ;
  cProject=new CProject();
  message:String='';
  workspaceId:number=0;
 

  constructor(private fb: FormBuilder,private cWorkspaceService:CProjectService,private router: Router,private route: ActivatedRoute) { }
  ngOnInit(){
    this.workspaceId = Number(this.route.snapshot.paramMap.get('id'));

    this.cProjectForm=new FormGroup({
      projectName:new FormControl()
    });
  }

  save(): void {

    this.cProject.projectName=this.cProjectForm.value.projectName;
    this.cProject.workSpaceId=this.workspaceId;
     this.cWorkspaceService.createProject(this.cProject).subscribe(data=>{
      this.router.navigate(['/project',this.cProject.workSpaceId]);
    });

  }

}
