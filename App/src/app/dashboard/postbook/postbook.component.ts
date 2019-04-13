import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Book } from './Book';
@Component({
  selector: 'app-postbook',
  templateUrl: './postbook.component.html',
  styleUrls: ['./postbook.component.css']
})
export class PostbookComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  ngOnInit() {
  }

      name: any;
      author: any;
      publisher: any;
      location: any;
      zip: any;
      anyphoto: any;
      back_photo: any;
      price: any;
      price_type: any;
      front_photo: any;
      edition:any;
      landmark:any;
      success:any;
      error:any;
      
  postBook(){
    const Book = {
      name: this.name,
      author: this.author,
      publisher: this.publisher,
      location: this.location,
      zip: this.zip,
      front_photo: this.front_photo,
      back_photo: this.back_photo,
      price: this.price,
      price_type: this.price_type,
      edition: this.edition,
      landmark: this.landmark
    }
    this.userService.postBook(Book).subscribe(
      res=>{
        this.success = true;
      },
      err=>{
        this.error = err.error;
      });
    }
}
