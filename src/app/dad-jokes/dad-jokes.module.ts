import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DadJokesRoutingModule } from './dad-jokes-routing.module';
import { DadJokesComponent } from './dad-jokes.component';

@NgModule({
  declarations: [DadJokesComponent],
  imports: [CommonModule, DadJokesRoutingModule, HttpClientModule],
})
export class DadJokesModule {}
