import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../shared/services/movies.service';
import { Film } from '../../../shared/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {  
  movieToFind:Film;

  constructor(private service: MoviesService, private router:Router) { }
  
  ngOnInit() {
    
  }
  submitForm(movie:string):void{
    this.movieToFind = this.service.findMovie(movie)[0];
    this.router.navigate([`/movie/${this.movieToFind.id}`]);    
  }
  
}

