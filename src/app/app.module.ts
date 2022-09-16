import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';
import { CardsComponent } from './expanding-cards/cards/cards.component';
import { ProgressStepsComponent } from './progress-steps/progress-steps.component';
import { StepComponent } from './progress-steps/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandingCardsComponent,
    CardsComponent,
    ProgressStepsComponent,
    StepComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
