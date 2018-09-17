import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Film } from '../../shared/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home-component.html',
})
export class MyHomeComponent implements OnInit {
  constructor(private movies: MoviesService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {    
  }
  
  onClickGoToMovieComponent(id:string):void{
    this.router.navigate([`/movie/${id}`]);    
  }
}
