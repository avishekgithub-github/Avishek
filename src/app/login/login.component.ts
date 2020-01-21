import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  email: AbstractControl;
  pswd: AbstractControl;
  remember:AbstractControl;
  userService: any;

  constructor(private formbuilder:FormBuilder){
    
      this.loginform=formbuilder.group({
        email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
        pswd: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
      });
      this.email=this.loginform.controls['email'];
      this.pswd=this.loginform.controls['pswd'];
    }

  ngOnInit() {
  }
  login(){
    console.log("Method Running.....");
    if(this.loginform.value.email && this.loginform.value.pswd){
    let sendData={
      email:this.loginform.value.email,
      pswd:this.loginform.value.pswd
    }
   //console.log(sendData);
    //console.log('My Data Prepared.........',sendData);
    let data = this.userService.login(sendData);
  }
  else{
    console.log('no data found.........');
  }

}
}
