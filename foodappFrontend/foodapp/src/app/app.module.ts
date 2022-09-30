import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { CreateFoodProductComponent } from './create-food-product/create-food-product.component';
import { DeleteFoodProductComponent } from './delete-food-product/delete-food-product.component';
import { UpdateFoodProductComponent } from './update-food-product/update-food-product.component';
import { GetMenuComponent } from './get-menu/get-menu.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { GetFoodProductComponent } from './get-food-product/get-food-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMenuComponent,
    DeleteMenuComponent,
    CreateFoodProductComponent,
    DeleteFoodProductComponent,
    UpdateFoodProductComponent,
    GetMenuComponent,
    LoginComponent,
    GetFoodProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
