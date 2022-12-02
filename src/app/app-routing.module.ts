import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { FormProductComponent } from './form-product/form-product.component';


const ROUTES: Routes =[
  {path:'list', component:ListProductComponent},
  {path:'new', component: FormProductComponent}


  //{path:'', component: }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
