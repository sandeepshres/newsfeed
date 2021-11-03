import { Component } from '@angular/core';
import { FetchMovieService } from './shared/fetch-movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News Feed app';
  movies: any;

  constructor(private movieService: FetchMovieService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe( data => this.movies = data);
  }
}
