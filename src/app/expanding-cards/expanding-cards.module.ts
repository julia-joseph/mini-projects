import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandingCardsRoutingModule } from './expanding-cards-routing.module';
import { ExpandingCardsComponent } from './expanding-cards.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [ExpandingCardsComponent, CardsComponent],
  imports: [CommonModule, ExpandingCardsRoutingModule],
})
export class ExpandingCardsModule {}
