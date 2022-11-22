import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
 productObj:Iproduct | undefined;
  constructor(private productservice: ProductsService) { }
  ngOnInit(): void {
    this.productObj = this.productservice.getProduct(1)
  }

}
