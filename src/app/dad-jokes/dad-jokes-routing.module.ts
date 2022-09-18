import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadJokesComponent } from './dad-jokes.component';

const routes: Routes = [{ path: '', component: DadJokesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadJokesRoutingModule {}
