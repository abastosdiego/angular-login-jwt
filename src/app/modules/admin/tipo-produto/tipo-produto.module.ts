import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    TipoProdutoRoutingModule,
    FormsModule,
  ]
})
export class TipoProdutoModule { }
