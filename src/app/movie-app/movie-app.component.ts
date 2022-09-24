import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.scss'],
})
export class MovieAppComponent implements OnInit {
  data: any = null;
  movies: any = [];
  searchTitle: string = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe((m: any) => {
      this.data = m;
      this.movies = m.results;
      console.log(this.movies);
    });
  }

  findMovies() {}
}
