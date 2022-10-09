import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickyNavbarRoutingModule } from './sticky-navbar-routing.module';
import { StickyNavbarComponent } from './sticky-navbar.component';


@NgModule({
  declarations: [
    StickyNavbarComponent
  ],
  imports: [
    CommonModule,
    StickyNavbarRoutingModule
  ]
})
export class StickyNavbarModule { }
