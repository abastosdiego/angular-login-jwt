import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: ProdutoEditComponent
  },
  {
    path: 'alterar/:id',
    component: ProdutoEditComponent
  },
  {
    path: '',
    component: ProdutoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
