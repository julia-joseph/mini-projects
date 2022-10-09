import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPlaceholderRoutingModule } from './content-placeholder-routing.module';
import { ContentPlaceholderComponent } from './content-placeholder.component';


@NgModule({
  declarations: [
    ContentPlaceholderComponent
  ],
  imports: [
    CommonModule,
    ContentPlaceholderRoutingModule
  ]
})
export class ContentPlaceholderModule { }
