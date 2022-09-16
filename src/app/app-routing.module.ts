import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';

const routes: Routes = [
  { path: '', component: ProgressStepsComponent },
  { path: 'expanding-cards', component: ExpandingCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
