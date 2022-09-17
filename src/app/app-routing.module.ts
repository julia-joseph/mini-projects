import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { HomeComponent } from './home/home.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './rotating-navigation/rotating-navigation.component';

const routes: Routes = [
  { path: '', redirectTo: 'rotating-navigation', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'expanding-cards', component: ExpandingCardsComponent },
  { path: 'progress-steps', component: ProgressStepsComponent },
  { path: 'rotating-navigation', component: RotatingNavigationComponent },
  {
    path: 'hidden-search',
    loadChildren: () =>
      import('./hidden-search/hidden-search.module').then(
        (m) => m.HiddenSearchModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
