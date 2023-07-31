import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,FormBuilder} from '@angular/forms';
import { TestCase } from 'src/dto/itestcase';
import { TestCaseService } from 'src/services/testcase.service';




@Component({
  selector: 'iqa-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.css']
})
export class TestcaseComponent implements OnInit {

  testCaseForm:FormGroup ;
  testCase=new TestCase();
  message:String='';

  constructor(private fb: FormBuilder,private testCaseService:TestCaseService) { }
  ngOnInit(){

    this.testCaseForm=new FormGroup({
      name:new FormControl(),
      version:new FormControl(),
      userStory:new FormControl(),
      module:new FormControl(),
      label:new FormControl(),
      type:new FormControl()

    });
  }

  save(): void {
    console.log(this.testCaseForm);
    this.testCase.name=this.testCaseForm.value.name;
    this.testCase.version=this.testCaseForm.value.version;
    this.testCase.userStory=this.testCaseForm.value.userStory;
    this.testCase.module=this.testCaseForm.value.module;
    this.testCase.label=this.testCaseForm.value.label;
    this.testCase.type=this.testCaseForm.value.type;
    this.testCaseService.createTC(this.testCase).subscribe(result=>this.message);
  //  console.log('Saved: ' + JSON.stringify(this.testCaseForm.value));

   // console.log('RestCase value: ' + JSON.stringify(this.testCase));
  }
}

