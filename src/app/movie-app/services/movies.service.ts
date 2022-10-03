import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(
      // 'https://api.themoviedb.org/3/movie/now_playing?api_key=ad03bec288c46b9722e4059377a42171'
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ad03bec288c46b9722e4059377a42171'
    );
  }

  searchMovies(searchTerm: string) {
    return this.http.get(
      // 'https://api.themoviedb.org/3/movie/now_playing?api_key=ad03bec288c46b9722e4059377a42171'
      `https://api.themoviedb.org/3/search/movie?api_key=ad03bec288c46b9722e4059377a42171&query="${searchTerm}"`
    );
  }
}
