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

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['book_id'];
      });
      this.userService.getSingleBookViewDetails(this.id).subscribe(
        res => {
          this.docs = res['docs'];
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
  }


}
