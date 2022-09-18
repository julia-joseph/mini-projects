import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitLandingPageComponent } from './split-landing-page.component';
import { SplitLandingPageRoutingModule } from './split-landing-page-routing.module';
import { LandingHoverDirective } from './landing-hover.directive';

@NgModule({
  declarations: [SplitLandingPageComponent, LandingHoverDirective],
  imports: [CommonModule, SplitLandingPageRoutingModule],
})
export class SplitLandingPageModule {}
