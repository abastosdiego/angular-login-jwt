import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { TipoProdutoListComponent } from './tipo-produto-list/tipo-produto-list.component';


@NgModule({
  declarations: [
    TipoProdutoListComponent
  ],
  imports: [
    CommonModule,
    TipoProdutoRoutingModule
  ]
})
export class TipoProdutoModule { }
