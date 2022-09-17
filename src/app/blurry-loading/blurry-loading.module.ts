import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlurryLoadingRoutingModule } from './blurry-loading-routing.module';
import { BlurryLoadingComponent } from './blurry-loading.component';


@NgModule({
  declarations: [
    BlurryLoadingComponent
  ],
  imports: [
    CommonModule,
    BlurryLoadingRoutingModule
  ]
})
export class BlurryLoadingModule { }
