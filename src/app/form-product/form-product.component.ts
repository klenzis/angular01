import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
 public product: Product;
  constructor(private prodService: ProductService , private route:Router) { }

  ngOnInit(): void {
    this.product= new Product()
  }
save(){
  //data
  this.product.nbrLike =0;
  console.log(this.product)
  //insert into db
  this.prodService.addProduct(this.product).subscribe(
    ()=>{ this.route.navigate(['/list'])},
    ()=>{console.log('error')},
    ()=>{console.log("complete")}
  )


}
}
