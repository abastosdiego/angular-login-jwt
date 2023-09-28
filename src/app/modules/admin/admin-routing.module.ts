import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseTemplateComponent } from './base-template/base-template.component';

const routes: Routes = [
  {
    path:'',
    component: BaseTemplateComponent,
    children: [
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
