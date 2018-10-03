import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { MyMoviesComponent } from './components/movie-list/movies-component';
import { MyMovieComponent } from './components/movie-item/movie-component';
import { SearcherPipe } from './shared/pipes/searcher.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    MyMovieComponent,
    HeaderComponent,
    SearcherPipe,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
