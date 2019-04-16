import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  id:any;
  sub:any;
  docs:any;
  user:any;
  btn:any;

  lat: number;
  lng: number;
  distance: any;
  geolocation:any;
  maxdistance:number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['book_id'];
      });
      this.userService.getSingleBookViewDetails(this.id).subscribe(
        res => {
          this.docs = res['docs'];
          this.lat = Number(this.docs.lat);
          this.lng = Number(this.docs.log);
          this.userService.getSingleBookUserDetails(this.docs.user_id).subscribe(
            res => {
              this.user = res['user'];
            },
            err => {
              console.log(err);
            }
          );
        },
        err => {
          console.log(err);
        }
      );
  //Geo Location
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition((pos)=>this.showPosition(pos));
      } else { 
        console.log("Geolocation is not supported by this browser.");
      }
  }
  //End Og ngOnInit

  showPosition(position) {
    this.geolocation = position.coords;
    console.log(this.geolocation+ this.lng);

    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((this.lat - this.geolocation.latitude) * p)/2 + 
          c(this.geolocation.latitude * p) * c(this.lat * p) * 
          (1 - c((this.lng - this.geolocation.longitude) * p))/2;
    this.distance = Number((12742 * Math.asin(Math.sqrt(a))).toFixed(1));
    this.maxdistance = Number(this.distance + 1);
  }


}
