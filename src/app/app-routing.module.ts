import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioLogadoGuard } from './guards/usuario-logado.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren:  () => import('src/app/modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren:  () => import('src/app/modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [usuarioLogadoGuard],
  },
  {
    path: '',
    loadChildren:  () => import('src/app/modules/area-publica/area-publica.module').then(m => m.AreaPublicaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
