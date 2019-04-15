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

  // distance(lat1, lon1, lat2, lon2) {
  //   var p = 0.017453292519943295;    // Math.PI / 180
  //   var c = Math.cos;
  //   var a = 0.5 - c((lat2 - lat1) * p)/2 + 
  //           c(lat1 * p) * c(lat2 * p) * 
  //           (1 - c((lon2 - lon1) * p))/2;
  
  //   return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  // }

}
