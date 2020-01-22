import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup
  fname: AbstractControl;
  mail: AbstractControl;
  pass: AbstractControl;
  userList: Array<any> = [];
  preparedData: Array<any> = [];
  userService: any;

 
  

  constructor(private formbuilder: FormBuilder,private userservice:UserService, private router: Router) { 

    this.registerform=this.formbuilder.group({

      fname: ['',[Validators.required]],
      mail: ['',[Validators.required]],
      pass:['',[Validators.required]],
      gender: ['',[Validators.required]]

    });
    this.fname=this.registerform.controls['fname'];
    this.mail=this.registerform.controls['mail'];
    this.pass=this.registerform.controls['pass'];
    

  }

  ngOnInit() {this.userservice.currentMessage.subscribe(data => {
    console.log('Remaining data.....',data);
    if(data){
      let newData = JSON.parse(data);
      console.log('',newData);
      this.preparedData = newData;
    }
  });
    

  }

  registered()
  {
    if(this.registerform.value.name && this.registerform.value.email
      && this.registerform.value.pswd && this.registerform.value.pswd){
      let sendData = {
        name: this.registerform.value.name,
        email: this.registerform.value.email,
        pswd: this.registerform.value.pswd,
        gender: this.registerform.value.gender
      }
      // this.userService.changeMessage(JSON.stringify(sendData));

      //Extra
      this.userList.push(sendData);
      console.log('Data pushed......',this.userList);

      if(this.preparedData && this.preparedData.length > 0){
        console.log("prepared in if......",this.preparedData);
        this.preparedData.push(sendData);
        this.userService.changeMessage(JSON.stringify(this.preparedData));
        this.router.navigate(['contact']);
      }else{
        console.log('Prepared in else.... ', this.preparedData);
        this.userService.changeMessage(JSON.stringify(this.userList));
        this.router.navigate(['contact']);
      }
      // this.router.navigate(['contact']);
    }else{
      this.userService.alertForWarning("Please Fillup All Fields","Warning!");
    }
  }
}