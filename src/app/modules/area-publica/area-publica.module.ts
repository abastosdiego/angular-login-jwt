import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaPublicaRoutingModule } from './area-publica-routing.module';
import { IndexComponent } from './index/index.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { BaseTemplateComponent } from './base-template/base-template.component';


@NgModule({
  declarations: [
    IndexComponent,
    BaseTemplateComponent
  ],
  imports: [
    CommonModule,
    AreaPublicaRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AreaPublicaModule { }
