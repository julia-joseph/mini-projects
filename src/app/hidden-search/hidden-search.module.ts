import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiddenSearchRoutingModule } from './hidden-search-routing.module';
import { HiddenSearchComponent } from './hidden-search.component';

@NgModule({
  declarations: [HiddenSearchComponent],
  imports: [CommonModule, HiddenSearchRoutingModule],
})
export class HiddenSearchModule {}
