import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private toastr: ToastrService) {}

   login(data) {

    console.log("Data...",data);

   if(data.email=="avishekbhaumick@gmail.com" && data.pswd=="1234567"){
   console.log('logged in');
   let id = uuid();
   console.log('my id.....',id);
   localStorage.setItem("ID",id);
   return true;
   }
   else{
     console.log('no data');
     return false;
   }
  }
   alertForSuccess(message,title){
    this.toastr.success(message, title);
  }
  alertForWarning(message,title){
    this.toastr.warning(message, title);
  }
  alertFordanger(message,title){
    this.toastr.error(message, title);
  }
}
