import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr:Iuser[]=[
    {
      name:'Nagesh',
      id:1
    },
    {
      name:'Vaibhav',
      id:2
    },
    {
      name:'Sadashiv',
      id:3
    }
  ]
  constructor() { }
  getAlluser():Iuser[]{
    return this.usersArr
  }
  getUser(id:number):Iuser | undefined{
    return this.usersArr.find(user=>user.id === id)
  }
}
