import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
  {
    path: 'split-landing-page',
    loadChildren: () =>
      import('./split-landing-page/split-landing-page.module').then(
        (m) => m.SplitLandingPageModule
      ),
  },
  {
    path: 'form-wave-animation',
    loadChildren: () =>
      import('./form-wave-animation/form-wave-animation.module').then(
        (m) => m.FormWaveAnimationModule
      ),
  },
  {
    path: 'sound-board',
    loadChildren: () =>
      import('./sound-board/sound-board.module').then(
        (m) => m.SoundBoardModule
      ),
  },
  {
    path: 'dad-jokes',
    loadChildren: () =>
      import('./dad-jokes/dad-jokes.module').then((m) => m.DadJokesModule),
  },
  {
    path: 'event-keycodes',
    loadChildren: () =>
      import('./event-keycodes/event-keycodes.module').then(
        (m) => m.EventKeycodesModule
      ),
  },
  {
    path: 'faq-collapse',
    loadChildren: () =>
      import('./faq-collapse/faq-collapse.module').then(
        (m) => m.FaqCollapseModule
      ),
  },
  {
    path: 'random-choice-picker',
    loadChildren: () =>
      import('./random-choice-picker/random-choice-picker.module').then(
        (m) => m.RandomChoicePickerModule
      ),
  },
  {
    path: 'animated-navigation',
    loadChildren: () =>
      import('./animated-navigation/animated-navigation.module').then(
        (m) => m.AnimatedNavigationModule
      ),
  },
  {
    path: 'incrementing-counter',
    loadChildren: () =>
      import('./incrementing-counter/incrementing-counter.module').then(
        (m) => m.IncrementingCounterModule
      ),
  },
  {
    path: 'drink-water',
    loadChildren: () =>
      import('./drink-water/drink-water.module').then(
        (m) => m.DrinkWaterModule
      ),
  },
  {
    path: 'movie-app',
    loadChildren: () =>
      import('./movie-app/movie-app.module').then((m) => m.MovieAppModule),
  },
  {
    path: 'background-slider',
    loadChildren: () =>
      import('./background-slider/background-slider.module').then(
        (m) => m.BackgroundSliderModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
