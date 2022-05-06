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
var router_1 = require("@angular/router");
var movie_service_1 = require("./movie.service");
var MovieComponent = /** @class */ (function () {
    function MovieComponent(router, route, movieService) {
        var _this = this;
        this.router = router;
        route.params.subscribe(function (params) {
            return movieService.movie(params['id']).subscribe(function (movie) {
                return _this.movie = movie;
            });
        });
    }
    MovieComponent.prototype.close = function () {
        this.router.navigate(['/movies']);
    };
    MovieComponent = __decorate([
        core_1.Component({
            selector: 'movie',
            template: "\n        <div class=\"movie-detail\" *ngIf=\"movie\">\n            <h2>{{movie.title}}</h2>\n            <h3>{{movie.overview}}</h3>\n            <span class=\"close\" (click)=\"close()\"></span>\n            <img src=\"http://image.tmdb.org/t/p/w1280{{movie.backdrop_path}}\"/>\n        </div>\n    ",
            providers: [movie_service_1.MovieService]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, movie_service_1.MovieService])
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map