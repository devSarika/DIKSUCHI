import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm=new FormGroup(
    {
    name: new FormControl(''),
    pass: new FormControl('')
    }
  );
  
   constructor() { }

   ngOnInit() {
  }
  n:string;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    alert("successfully logged in")
    
  }
  
  
   


}
