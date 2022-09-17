import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollingAnimationRoutingModule } from './scrolling-animation-routing.module';
import { ScrollingAnimationComponent } from './scrolling-animation.component';
import { ScrollingDirective } from './scrolling.directive';

@NgModule({
  declarations: [ScrollingAnimationComponent, ScrollingDirective],
  imports: [CommonModule, ScrollingAnimationRoutingModule],
})
export class ScrollingAnimationModule {}
