import { Component } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import {OmdbApiService} from './services/omdb-api.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {
  title = 'MyMovieData';
  movieData: IOMDBResponse;
  errorMessage: any;
  constructor(private _omdbService: OmdbApiService) {
 }
 getMovieDeatils(movieName: string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(movieData => {
      this.movieData = movieData;
      console.log('getMovieDetails:' + this.movieData);
   },
 // tslint:disable-next-line:no-shadowed-variable
 error => this.errorMessage = <any>error);
 return false;
  }
}
