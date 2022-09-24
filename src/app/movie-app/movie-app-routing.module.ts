import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAppComponent } from './movie-app.component';

const routes: Routes = [{ path: '', component: MovieAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieAppRoutingModule {}
