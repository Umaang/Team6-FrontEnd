import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFoodProductComponent } from './create-food-product/create-food-product.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { DeleteFoodProductComponent } from './delete-food-product/delete-food-product.component';
import { GetFoodProductComponent } from './get-food-product/get-food-product.component';
import { UpdateFoodProductComponent } from './update-food-product/update-food-product.component';

const routes: Routes = [
  {path:"createMenu",component:CreateMenuComponent},
  {path:"addFoodProduct",component:CreateFoodProductComponent},
  {path:"getFoodProducts/:id",component:GetFoodProductComponent},
  {path:"editFoodProduct/:id",component:UpdateFoodProductComponent},
 // {path:"deleteFoodProduct/:id/:menu_id",component:DeleteFoodProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
