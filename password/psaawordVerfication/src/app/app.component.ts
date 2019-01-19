import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { PasswordValidator } from './password.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.registrationForm = this.fb.group( {
      
      password: [''],
      confirmPassword: ['']
     
    
   
      
    } , { validator: PasswordValidator }); 

  
  }

  





 




}
