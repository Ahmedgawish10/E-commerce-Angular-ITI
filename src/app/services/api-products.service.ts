import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httpApiProducts:HttpClient) {
    
   }
getAllProducts(){
  return this.httpApiProducts.get("https://dummyjson.com/products")
}
getSelectedProduct(id:any){
  return this.httpApiProducts.get(`https://dummyjson.com/products/${id}`)
}


}
