import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoFiltroComponent } from './tipo-produto-filtro/tipo-produto-filtro.component';

const routes: Routes = [
  {
    path: '',
    component: TipoProdutoFiltroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoProdutoRoutingModule { }
