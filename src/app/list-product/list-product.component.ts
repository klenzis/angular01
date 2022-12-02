import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public appName: string;
  public list!: Product[];
  constructor(private prodService : ProductService) {

  }
  ngOnInit(): void {
    this.appName ='myApp Store';
    this.prodService.getAllProduct().subscribe((data:Product[])=>{this.list=data});
    //this.list=this.prodService.listService;

    console.log(this.list)
  }
incrementLike(product:Product):void{
  let i = this.list.indexOf(product);
  if(i!=-1){
    this.list[i].nbrLike++;
    this.prodService.updateProduct(this.list[i]).subscribe()
    console.log(this.list)
  }
}
buyProduct(i:number):void{

    if(this.list[i].quantity>0)
    this.list[i].quantity--
    this.prodService.updateProduct(this.list[i]).subscribe()

}
deleteProduct(id: number, i:number){
  this.prodService.deleteProduct(id).subscribe(
    ()=>{
      //splice(i,1)
      this.list.splice(i,1)
    }
  );

}

}
