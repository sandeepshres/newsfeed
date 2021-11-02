import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { API_KEY } from '../config/apikey';
import { Movies } from './movies';
import { Observable, of } from 'rxjs';

const API = {
  MOVIES: 'https://api.themoviedb.org/3/discover/movie?api_key=<api_key>&sort_by=popularity.desc'
}

@Injectable({
  providedIn: 'root'
})
export class FetchMovieService {
  
  private apiKey: string = API_KEY;

  constructor(private httpClient : HttpClient) { }

  getMovies(): Observable<Movies[]> {
    return this.httpClient.get<Movies[]>(API.MOVIES.replace('<api_key>', `${this.apiKey}`));
  }
}
