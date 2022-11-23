import { Component, OnInit } from '@angular/core';
import { Iuser } from '../shared/model/user';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  UserArr:Iuser[] =[] ;
  ActivatedId:number = 1;
  constructor(private userservice:UsersService){}
  ngOnInit(): void {
    this.UserArr = this.userservice.getAlluser()
  }
}
