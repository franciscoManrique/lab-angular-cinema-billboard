import { Injectable, OnInit } from '@angular/core';
import { Film } from '../models/movie.model';
import movies from '../data/movies.data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService{
  private movies: Array<Film> = movies;
  
  constructor() { }
  
  getMovies():Array<Film>{
    return this.movies;
  }
  
  getMovie(id:number):Film{
    return this.movies.filter(m => m.id === id)[0];
  }
  
  findMovie(pattern:string):Array<Film>{
    const regex = new RegExp(pattern, 'i');
    return this.movies.filter(m => m.title.match(regex));  
  }
}
