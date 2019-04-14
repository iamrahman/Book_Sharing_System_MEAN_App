import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Book } from '../dashboard/postbook/Book';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private userService: UserService) { }
  docs:any;
  name:any;
  location:any;
  landmark:any;

  ngOnInit() {
    this.userService.allbooks().subscribe(
      res => {
        this.docs = res['docs'];
      },
      err => { 
        console.log(err);
      }
    )
  }

  searchBook(){
    const Book = {
      name: this.name,
      location: this.location,
      landmark: this.landmark
    };
    this.userService.filterBook(Book).subscribe(
      res => {
        this.docs = res['docs'];
      },
      err => { 
        console.log(err);
      }
    )
  }

  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=>this.showPosition(pos));
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
    "Longitude: " + position.coords.longitude);
    const Location ={
      lat: position.coords.latitude,
      log: position.coords.longitude
    };
    this.userService.getListByLocation(Location).subscribe(
      res => {
        this.docs = res['docs'];
      },
      err => {
        console.log(err);
      }
    );
  }

}
