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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.nowPlaying = function () {
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cf86200f49581725c527db61a5b017c6')
            .map(function (response) { return response.json().results || []; });
    };
    MovieService.prototype.movie = function (id) {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=cf86200f49581725c527db61a5b017c6')
            .map(function (response) { return response.json() || {}; });
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map