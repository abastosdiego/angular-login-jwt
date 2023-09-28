import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BaseTemplateComponent } from './base-template/base-template.component';

@NgModule({
  declarations: [
  
    BaseTemplateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
