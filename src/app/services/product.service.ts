import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url = environment.url+'products/'

  /*public listService:Product[]=[
    {id:12,
      name:'T-shirt 1',
      price: 23,
      quantity: 5,
      picture: 'https://www.exist.com.tn/61485-large_default/t-shirt.jpg',
      nbrLike: 10
    },
    { id:11,
      name:'T-shirt 1',
      price: 23,
      quantity: 0,
      picture: 'https://www.exist.com.tn/81822-large_default/t-shirt-de-sport.jpg',
      nbrLike: 10
    }
  ]*/

  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get<Product[]>(this.url);
  }

  addProduct(p:Product){
    return this.http.post(this.url,p)
  }

  deleteProduct(id:number){
    return this.http.delete(this.url+id)
  }

  updateProduct(p:Product){
    return this.http.put(this.url+p.id, p)
  }



}
