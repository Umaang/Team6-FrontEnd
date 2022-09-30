import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BranchServiceService {

  constructor(private http:HttpClient) { }

  //creating menu
  createMenu(user_id:any,menu:any){
    return this.http.post(`http://localhost:8080/createMenu/${user_id}`,menu)
  }
  addFoodProduct(user_id:any,menu_id:any,foodproduct:any){
    return this.http.post(`http://localhost:8080/createProduct/${user_id}/${menu_id}`,foodproduct)
  }
  getFoodProduct(menu_id:any){
    return this.http.get(`http://localhost:8080/getproductList/${menu_id}`)
  }

  updateFoodProduct(foodproduct_id:any,foodproduct:any){
    return this.http.put(`http://localhost:8080/updateproduct/${foodproduct_id}`,foodproduct)
  }
  deleteFoodProduct(menu_id:any,foodproduct_id:any){
    return this.http.delete(`http://localhost:8080/deleteproduct/${foodproduct_id}/${menu_id}`)
  }
}
