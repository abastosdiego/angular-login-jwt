import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoEditComponent } from './tipo-produto-edit/tipo-produto-edit.component';
import { TipoProdutoListComponent } from './tipo-produto-list/tipo-produto-list.component';

const routes: Routes = [
  {
    path: 'novo',
    component: TipoProdutoEditComponent
  },
  {
    path: ':id',
    component: TipoProdutoEditComponent
  },
  {
    path: '',
    component: TipoProdutoListComponent
  },
  {
    path: '**',
    component: TipoProdutoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoProdutoRoutingModule { }
