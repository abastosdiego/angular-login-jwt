import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TipoProdutoListComponent } from './tipo-produto/tipo-produto-list/tipo-produto-list.component';
import { IndexComponent } from './index/index/index.component';
import { TipoProdutoEditComponent } from './tipo-produto/tipo-produto-edit/tipo-produto-edit.component';

@NgModule({
  declarations: [
  
    TipoProdutoListComponent,
       IndexComponent,
       TipoProdutoEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
