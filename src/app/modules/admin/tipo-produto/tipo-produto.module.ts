import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { TipoProdutoListComponent } from './tipo-produto-list/tipo-produto-list.component';
import { TipoProdutoEditComponent } from './tipo-produto-edit/tipo-produto-edit.component';


@NgModule({
  declarations: [
    TipoProdutoListComponent,
    TipoProdutoEditComponent
  ],
  imports: [
    CommonModule,
    TipoProdutoRoutingModule
  ]
})
export class TipoProdutoModule { }
