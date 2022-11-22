import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArr:Iproduct[]=[
    {
      Pname:'Samsung',
      Pid:1,
      Pstatus:'In Progress'
    },
    {
      Pname:'Samsung 31V',
      Pid:2,
      Pstatus:'Dispatched'
    },
    {
      Pname:'Iphone OnePlus',
      Pid:3,
      Pstatus:'Delivered'
    }
  ]
  constructor() { }
  getAllProducts():Iproduct[]{
    return this.productArr
  }
  getProduct(id:number):Iproduct | undefined{
    return this.productArr.find(prod => prod.Pid === id)
  }
}
