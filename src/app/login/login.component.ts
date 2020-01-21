import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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

  constructor(private formbuilder:FormBuilder,
    private userService:UserService,
    private router: Router
    ){
    
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
    console.log('this data is.....',sendData);
    let data = this.userService.login(sendData);
    if(data == true){
      this.userService.alertForSuccess("You Have Successfully Logged In","Success");
      this.router.navigate(['about']);
      //this.spinner.hide();
    }else{
      this.userService.alertFordanger("Credentials Not Matching","Warning!");
      //this.spinner.hide();
    }
  }else{
    this.userService.alertForWarning("Please Fillup All Fields","Warning!");
    //this.spinner.hide();
  }
}
}