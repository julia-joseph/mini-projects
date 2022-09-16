import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandingCardsComponent } from './expanding-cards/expanding-cards.component';

const routes: Routes = [{ path: '', component: ExpandingCardsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
