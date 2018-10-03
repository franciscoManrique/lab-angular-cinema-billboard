import { Component, OnInit, OnChanges } from '@angular/core';
import { MoviesService } from '../../../shared/services/movies.service';
import { Film } from '../../../shared/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {  
  movieToFind:Film;
  pattern: string = '';
  constructor(private service: MoviesService, private router:Router) { }
  
  ngOnInit() {
  
  }
  
  searchmovie(pattern:string){
    this.router.navigate([`/movies/search/${pattern}`]);
  }
  
}


