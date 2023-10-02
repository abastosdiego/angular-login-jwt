import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoListComponent } from './tipo-produto-list/tipo-produto-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoProdutoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoProdutoRoutingModule { }
