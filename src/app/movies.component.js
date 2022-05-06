"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movie_service_1 = require("./movie.service");
var router_1 = require("@angular/router");
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieService, router) {
        var _this = this;
        this.router = router;
        movieService.nowPlaying().subscribe(function (movies) {
            _this.movies = movies;
            _this.filteredMovies = movies;
        });
    }
    MoviesComponent.prototype.filter = function () {
        var _this = this;
        this.filteredMovies = this.movies.filter(function (movie) {
            return movie.title.toLowerCase().match(_this.filterText) !== null;
        });
    };
    MoviesComponent.prototype.showDetail = function (movie) {
        this.router.navigate(['movies', movie.id]);
    };
    MoviesComponent = __decorate([
        core_1.Component({
            selector: 'movies',
            template: "\n        <div class=\"movie-container\">\n            <h2>Now Playing</h2>\n            <input type=\"text\" placeholder=\"Filter...\" [(ngModel)]=\"filterText\" (keyup)=\"filter()\">\n            <ul>\n                <li *ngFor=\"let movie of filteredMovies\" (click)=\"showDetail(movie)\">\n                    <img src=\"http://image.tmdb.org/t/p/w300{{movie.poster_path}}\"/>\n                </li>\n            </ul>\n        </div>\n    ",
            providers: [movie_service_1.MovieService]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService, router_1.Router])
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map