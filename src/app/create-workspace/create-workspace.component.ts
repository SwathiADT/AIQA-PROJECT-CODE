import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,FormBuilder} from '@angular/forms';
import { CWorkspace } from 'src/dto/cworkspace';
import { CWorkspaceService } from 'src/services/cworkspace.service';
import {Router} from "@angular/router"


@Component({
  selector: 'iqa-create-workspace',
  templateUrl: './create-workspace.component.html',
  styleUrls: ['./create-workspace.component.css']
})
export class CreateWorkspaceComponent implements OnInit{
  cWorkspaceForm:FormGroup ;
  cWorkspace=new CWorkspace();
  message:String='';

  constructor(private fb: FormBuilder,private cWorkspaceService:CWorkspaceService,private router: Router) { }
  ngOnInit(){

    this.cWorkspaceForm=new FormGroup({
      workSpaceName:new FormControl()
    });
  }

  save(): void {
    console.log(this.cWorkspaceForm);
    this.cWorkspace.workSpaceName=this.cWorkspaceForm.value.workSpaceName;
    this.cWorkspaceService.createWorkspace(this.cWorkspace).subscribe(data=>{
      this.router.navigate(['/work_space']);
    });
  //  console.log('Saved: ' + JSON.stringify(this.cWorkspaceForm.value));

   // console.log('RestCase value: ' + JSON.stringify(this.cWorkspace));
  }
}
