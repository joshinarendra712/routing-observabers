import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ProductsComponent,
    UsersComponent,
    UserComponent,
    ProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
