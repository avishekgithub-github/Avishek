import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id: string;

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
    this.getIfFromLocalStorage();
  }
  getIfFromLocalStorage(){
   this.id = localStorage.getItem("ID");
   console.log('My id...',this.id);
  }
  logout(){
    localStorage.removeItem("ID");
    console.log('logout successfully');
    this.router.navigate(['login']);

  }

}
