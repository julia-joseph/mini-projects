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
  isLoading: boolean = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.isLoading = true;
    this.moviesService.getMovies().subscribe(
      (m: any) => {
        this.isLoading = false;
        this.data = m;
        this.movies = m.results;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  findMovies() {
    if (this.searchTitle && this.searchTitle.trim().length > 0) {
      this.isLoading = true;
      this.moviesService.searchMovies(this.searchTitle).subscribe(
        (m: any) => {
          this.isLoading = false;
          this.data = m;
          this.movies = m.results;
        },
        (error) => {
          this.isLoading = false;
        }
      );
    }
  }
}
