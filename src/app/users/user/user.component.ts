import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userObj: Iuser | undefined;
  UserId!: number;
  constructor(private userservice: UsersService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.UserId = +this.route.snapshot.params['id']
    this.userObj = this.userservice.getUser(this.UserId)
    // console.log(this.userObj);

  }

}
