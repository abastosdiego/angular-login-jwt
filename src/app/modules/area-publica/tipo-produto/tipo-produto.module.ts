import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { TipoProdutoFiltroComponent } from './tipo-produto-filtro/tipo-produto-filtro.component';


@NgModule({
  declarations: [
    TipoProdutoFiltroComponent,
  ],
  imports: [
    CommonModule,
    TipoProdutoRoutingModule
  ],
  exports: [
    TipoProdutoFiltroComponent
  ],
})
export class TipoProdutoModule { }
