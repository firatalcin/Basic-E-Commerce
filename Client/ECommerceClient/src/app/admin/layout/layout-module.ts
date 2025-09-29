import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout';
import { ComponentsModule } from './components/components-module';
import { AppRoutingModule } from "../../app-routing-module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule
],
  exports: [
    Layout
  ]
})
export class LayoutModule { }
