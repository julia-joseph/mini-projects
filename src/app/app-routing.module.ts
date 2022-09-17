import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './rotating-navigation/rotating-navigation.component';

const routes: Routes = [
  { path: '', component: RotatingNavigationComponent },
  { path: 'expanding-cards', component: ExpandingCardsComponent },
  { path: 'progress-steps', component: ProgressStepsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
