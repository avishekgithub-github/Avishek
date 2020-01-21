import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
   }

   login(data) {

    console.log("Data...",data);

   if(data.email=="avishekbhaumick@gmail.com" && data.pswd=="1234567"){
   console.log('logged in');}
   else{
     console.log('no data');
   }

}
}
