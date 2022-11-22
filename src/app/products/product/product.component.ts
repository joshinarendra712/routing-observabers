import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  ProductObj:Iproduct | undefined;
  ProdId = 1
  constructor(private productservice:ProductsService , private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.ProdId = +this.route.snapshot.params['id']
    
    this.ProductObj = this.productservice.getProduct(this.ProdId)
  }
}
