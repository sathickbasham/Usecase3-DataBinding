import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
angForm : FormGroup;
FirstName : string ="";
LastName : string ="";
Email:string = "";
Password:string ="";
ConfirmPassword:string="";
personArray:Array<User>=[];
  constructor(private fb:FormBuilder) { 
    this.angForm=this.fb.group({
      FirstName: ['', Validators.required ],  
      LastName: ['', Validators.required ],  
      Email: ['', Validators.required ],
      Password:['', Validators.required],
      ConfirmPassword:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  Register(){
    let person = new User(this.FirstName, this.LastName, this.Email, this.Password,this.ConfirmPassword)
    this.personArray.push(person);   
    this.FirstName="";
    this.LastName="";
    this.Email="";
    this.Password="";
    this.ConfirmPassword="";
  }

}
class User{

  FirstName:string="";
  LastName:string ="";
  Email:string="";
  Password:string="";
  ConfirmPassword:string="";
  constructor(FirstName:string, LastName:string, Email:string, Password:string, ConfirmPassword:string)
  {
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.Email=Email;
    this.Password=Password;
    this.ConfirmPassword = ConfirmPassword;
  }
}