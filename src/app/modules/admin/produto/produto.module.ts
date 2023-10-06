import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoEditComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule
  ]
})
export class ProdutoModule { }
