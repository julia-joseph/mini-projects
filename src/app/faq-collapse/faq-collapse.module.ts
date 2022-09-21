import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqCollapseRoutingModule } from './faq-collapse-routing.module';
import { FaqCollapseComponent } from './faq-collapse.component';
import { FaqItemComponent } from './faq-item/faq-item.component';


@NgModule({
  declarations: [
    FaqCollapseComponent,
    FaqItemComponent
  ],
  imports: [
    CommonModule,
    FaqCollapseRoutingModule
  ]
})
export class FaqCollapseModule { }
