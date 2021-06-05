import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm1 : FormGroup
  constructor(private fb: FormBuilder) { 
    this.angForm1 = this.fb.group({
      UserName : ['',Validators.required],
      Password : ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
