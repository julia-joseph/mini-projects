import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.scss'],
})
export class DadJokesComponent implements OnInit {
  joke: string | undefined = undefined;
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getJoke() {
    this.joke = undefined;
    this.loading = true;
    this.http
      .get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      })
      .subscribe(
        (data: any) => {
          this.loading = false;
          this.joke = data?.joke;
        },
        (error) => {
          this.loading = false;
          this.joke = 'Error! :(';
        }
      );
  }
}
