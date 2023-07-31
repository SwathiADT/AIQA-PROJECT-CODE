import { Component,OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import { CProject } from 'src/dto/cproject';
import { CProjectService } from 'src/services/cproject.service';

import { Subscription } from "rxjs";




@Component({

  selector: 'iqa-project',

  templateUrl: './project.component.html',

  styleUrls: ['./project.component.css']

})

export class ProjectComponent implements OnInit {
  pageTitle = 'Work Space';
  errorMessage = '';
  sub!: Subscription;
  workspaceId:number=0;

  project: CProject[] = [];

  constructor(private projectService: CProjectService,private route: ActivatedRoute) {}

  
  ngOnInit(): void {

    this.workspaceId = Number(this.route.snapshot.paramMap.get('id'));
   
    this.sub = this.projectService.getProject(this.workspaceId).subscribe(data=>{

      this.project=data;
    });
      
    }


  


}


 










  


