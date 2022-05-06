import {Component} from "@angular/core";
import {Movie} from "./movie.model";
import {MovieService} from "./movie.service";
import {Router} from "@angular/router";

@Component({
    selector: 'movies',
    template: `
        <div class="movie-container">
            <h2>Now Playing</h2>
            <input type="text" placeholder="Filter..." [(ngModel)]="filterText" (keyup)="filter()">
            <ul>
                <li *ngFor="let movie of filteredMovies" (click)="showDetail(movie)">
                    <img src="http://image.tmdb.org/t/p/w300{{movie.poster_path}}"/>
                </li>
            </ul>
        </div>
    `,
    providers: [MovieService]
})
export class MoviesComponent {

    movies: any[] = [];
    filterText: string = "";
    filteredMovies: any[] = [];

    constructor(movieService:MovieService, private router:Router) {
        movieService.nowPlaying().subscribe((movies: any) => {
            console.log(movies)
            this.movies = movies;
            this.filteredMovies = movies;
        })
    }

    filter() {
        this.filteredMovies = this.movies.filter(movie =>
            movie.title.toLowerCase().match(this.filterText) !== null
        )
    }

    showDetail(movie:Movie) {
        this.router.navigate(['movies', movie.id]);
    }
}