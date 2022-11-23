import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',   component:HomeComponent,
  },
  {
    path:'products',   component:ProductsComponent,
    children:[
      {
        path:':id', component:ProductComponent
      },
      {
        path:':id/:Edit', component:EditProductComponent
      },
      {
        path:':id/:Edit/CanEdit', component:EditProductComponent
      }
    ]
  },
  {
    path:'users',   component:UsersComponent,
    children:[
      {
        path:':id', component:UserComponent
      }
    ]
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
