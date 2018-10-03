import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../models/movie.model';
import movies from './../data/movies.data';

@Pipe({
  name: 'searcher'
})
export class SearcherPipe implements PipeTransform {

  
  transform(): Array<Film> {
    console.log('dsads');

    return null;
  }

}

