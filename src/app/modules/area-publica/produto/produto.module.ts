import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';


@NgModule({
  declarations: [
    ProdutoListComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: [
    ProdutoListComponent
  ]
})
export class ProdutoModule { }
