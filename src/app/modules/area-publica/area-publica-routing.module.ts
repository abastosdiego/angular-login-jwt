import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BaseTemplateComponent } from './base-template/base-template.component';

const routes: Routes = [
  {
    path:'',
    component: BaseTemplateComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  },
  /*{
    path:'tipos-produtos',
    loadChildren: () => import('./tipo-produto/tipo-produto.module').then(mod => mod.TipoProdutoModule),
  }*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaPublicaRoutingModule { }
