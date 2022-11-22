import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productObj: Iproduct | undefined;
  productId!: number;
  constructor(private productservice: ProductsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((myparam: Params) => {
      this.productId = +myparam['id']
      this.productObj = this.productservice.getProduct(this.productId)
    })
  }

}
