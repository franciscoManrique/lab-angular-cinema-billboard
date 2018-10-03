import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMoviesComponent } from './components/movie-list/movies-component';
import { MyMovieComponent } from './components/movie-item/movie-component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: MyMoviesComponent},
  {path: 'movies/search/:pattern', component: MyMoviesComponent},
  {path: 'movie/:id', component: MyMovieComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

