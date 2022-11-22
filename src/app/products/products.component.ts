import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../shared/model/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productArr:Iproduct[] = []
  constructor(private productservice:ProductsService, private router:ActivatedRoute) { }
  ngOnInit(): void {
    this.productArr = this.productservice.getAllProducts()
  }
}
