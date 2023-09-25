import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoListComponent } from './tipo-produto/tipo-produto-list/tipo-produto-list.component';
import { IndexComponent } from './index/index/index.component';
import { TipoProdutoEditComponent } from './tipo-produto/tipo-produto-edit/tipo-produto-edit.component';

const routes: Routes = [
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then(mod => mod.ProdutoModule),
  },
  {
    path: 'tiposprodutos/:id',
    component: TipoProdutoEditComponent
  },
  {
    path: 'tiposprodutos',
    component: TipoProdutoListComponent
  },
  {
    path: '',
    component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
