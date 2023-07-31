import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,FormBuilder} from '@angular/forms';
import { Registration } from 'src/dto/registration';
import { RegistraionService } from 'src/services/registraion.service';

@Component({
  selector: 'iqa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  registrationForm:FormGroup ;
  registration=new Registration();
  message:String='';

  constructor(private fb: FormBuilder,private registrationService:RegistraionService) { }
  ngOnInit(){

    this.registrationForm=new FormGroup({
      userName:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      confirmPassword:new FormControl()

    });
  }

  save(): void {
    console.log(this.registrationForm);
    this.registration.userName=this.registrationForm.value.userName;
    this.registration.email=this.registrationForm.value.email;
    this.registration.password=this.registrationForm.value.password;
    this.registration.confirmPassword=this.registrationForm.value.confirmPassword;
    this.registrationService.createAccount(this.registration).subscribe(data=>
      {
console.log(data);
      },
     error=>console.log(error));
    }

  }


