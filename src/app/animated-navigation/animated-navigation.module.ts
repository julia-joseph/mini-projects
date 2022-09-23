import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimatedNavigationRoutingModule } from './animated-navigation-routing.module';
import { AnimatedNavigationComponent } from './animated-navigation.component';


@NgModule({
  declarations: [
    AnimatedNavigationComponent
  ],
  imports: [
    CommonModule,
    AnimatedNavigationRoutingModule
  ]
})
export class AnimatedNavigationModule { }
