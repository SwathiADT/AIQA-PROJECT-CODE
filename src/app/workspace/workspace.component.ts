import { Component } from '@angular/core';
import { Subscription } from "rxjs";
import { CWorkspace } from 'src/dto/cworkspace';
import { CWorkspaceService } from 'src/services/cworkspace.service';

@Component({
  selector: 'iqa-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
  pageTitle = 'Work Space';
  errorMessage = '';
  sub!: Subscription;

  workSpace: CWorkspace[] = [];

  constructor(private workspaceService: CWorkspaceService) {}

  
  ngOnInit(): void {
    this.sub = this.workspaceService.getWorkspace().subscribe(data=>{

      this.workSpace=data;
    });
      
    }


  


}
