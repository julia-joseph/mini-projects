import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-search',
  templateUrl: './hidden-search.component.html',
  styleUrls: ['./hidden-search.component.scss'],
})
export class HiddenSearchComponent implements OnInit {
  expandSearch: boolean = false;
  searchResults: number | null = null;
  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  search() {
    this.expandSearch = !this.expandSearch;
  }

  getResults() {
    this.searchResults = null;
    this.isLoading = true;
    setTimeout(() => {
      this.searchResults = Math.round(Math.random());
      this.isLoading = false;
    }, 3000);
  }
}
