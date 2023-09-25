import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';


@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoEditComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
