import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: any = {
    original_title: '',
    poster_path: '',
    vote_average: 0,
    overview: '',
  };
  showAbout: number = 400;

  constructor() {}

  ngOnInit(): void {}
}
