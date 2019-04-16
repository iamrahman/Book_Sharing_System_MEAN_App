import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private userService: UserService) { }
  docs:any;
  message:any;
  ngOnInit() {
    this.userService.getCurrentUserBook().subscribe(
      res => {
        this.docs = res['docs'];
      },
      err => { 
        console.log(err);
      }
    )
  }

  deleteBook(ID){
   var confirmation = confirm("Do you want to delete data ?");
   if(confirmation){
     this.userService.deleteBook(ID).subscribe(
       res => {
         this.message = res['message'];
         this.userService.getCurrentUserBook().subscribe(
          res => {
            this.docs = res['docs'];
          },
          err => { 
            console.log(err);
          }
         );
       },
       err => {
         console.log(err);
       }
     )
   }
  }

}
