import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieAppRoutingModule } from './movie-app-routing.module';
import { MovieAppComponent } from './movie-app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [MovieAppComponent, MovieComponent],
  providers: [MoviesService],
  imports: [CommonModule, HttpClientModule, MovieAppRoutingModule, FormsModule],
})
export class MovieAppModule {}
