import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioLogadoGuard } from '../../guards/usuario-logado.guard';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () => import('./produto/produto.module').then(mod => mod.ProdutoModule),
  },
  {
    path: 'tiposprodutos',
    loadChildren: () => import('./tipo-produto/tipo-produto.module').then(mod => mod.TipoProdutoModule),
  },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(mod => mod.IndexModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
