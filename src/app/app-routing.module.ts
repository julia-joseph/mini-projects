import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rotating-navigation', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'expanding-cards',
    loadChildren: () =>
      import('./expanding-cards/expanding-cards.module').then(
        (m) => m.ExpandingCardsModule
      ),
  },
  {
    path: 'progress-steps',
    loadChildren: () =>
      import('./progress-steps/progress-steps.module').then(
        (m) => m.ProgressStepsModule
      ),
  },
  {
    path: 'rotating-navigation',
    loadChildren: () =>
      import('./rotating-navigation/rotating-navigation.module').then(
        (m) => m.RotatingNavigationModule
      ),
  },
  {
    path: 'hidden-search',
    loadChildren: () =>
      import('./hidden-search/hidden-search.module').then(
        (m) => m.HiddenSearchModule
      ),
  },
  {
    path: 'blurry-loading',
    loadChildren: () =>
      import('./blurry-loading/blurry-loading.module').then(
        (m) => m.BlurryLoadingModule
      ),
  },
  {
    path: 'scrolling-animation',
    loadChildren: () =>
      import('./scrolling-animation/scrolling-animation.module').then(
        (m) => m.ScrollingAnimationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
