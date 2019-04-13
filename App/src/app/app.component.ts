import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private userService: UserService, private router : Router) { }
  userDetails;
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
    window.location.reload();
  }

} 
