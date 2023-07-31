import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  pageTitle = 'Log In';
  constructor(
    private router: Router) { }

  login(): void {
    
        this.router.navigate(['/work_space']);
      }
    } 
  

