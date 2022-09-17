import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotatingNavigationRoutingModule } from './rotating-navigation-routing.module';
import { RotatingNavigationComponent } from './rotating-navigation.component';
import { ContentComponent } from './content/content.component';
import { NavigationIconComponent } from './navigation-icon/navigation-icon.component';
import { NavigationContentComponent } from './navigation-content/navigation-content.component';

@NgModule({
  declarations: [
    RotatingNavigationComponent,
    ContentComponent,
    NavigationIconComponent,
    NavigationContentComponent,
  ],
  imports: [CommonModule, RotatingNavigationRoutingModule],
})
export class RotatingNavigationModule {}
