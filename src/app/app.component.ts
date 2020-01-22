import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  id : any;
  constructor(private router: Router){}
 
ngOnInit(){
  this.id = localStorage.getItem('ID');
  this.checkforLogin();
}



checkforLogin()
{
  if(this.id==null || this.id=="")
  {
    this.router.navigate(['login']);

  }
}
}
