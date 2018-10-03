import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Film } from '../../shared/models/movie.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './movies-component.html',
})
export class MyMoviesComponent implements OnInit{
  private patternWithObservable: string = '';
  private patternWithSnapshot: string = '';
  
  private movies: Array<Film> = this.service.getMovies();
  
  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    //LOADS ONLY ONCE THE SNAPSHOT
    this.patternWithSnapshot = this.route.snapshot.paramMap.get('pattern');
    
    //LOADS WHEN DATA CHANGES CAUSE OF SUBSCRIBE
    this.route.paramMap.subscribe((params: ParamMap) => {      
      this.patternWithObservable = params.get('pattern');
      this.movies = this.service.findMovieByPattern(params.get('pattern')); 
    })
  }
  
  onClickGoToMovieComponent(id:string):void{
    this.router.navigate([`/movie/${id}`]);    
  }
}
