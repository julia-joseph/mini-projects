import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KineticLoaderRoutingModule } from './kinetic-loader-routing.module';
import { KineticLoaderComponent } from './kinetic-loader.component';


@NgModule({
  declarations: [
    KineticLoaderComponent
  ],
  imports: [
    CommonModule,
    KineticLoaderRoutingModule
  ]
})
export class KineticLoaderModule { }
