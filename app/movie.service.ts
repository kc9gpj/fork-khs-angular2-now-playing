import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Movie} from "./movie.model";

@Injectable()
export class MovieService {

    constructor(private http:HttpClient) {
    }

    nowPlaying() {
        const data: any = this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cf86200f49581725c527db61a5b017c6')
        return data.map(response => response.json().results || [])
        // return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cf86200f49581725c527db61a5b017c6')
        //     .map(response => response.json().results || [])
    }

    movie(id:number) {
        const data: any = this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=cf86200f49581725c527db61a5b017c6')
        return data.map(response => response.json().results || [])
        // return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=cf86200f49581725c527db61a5b017c6')
        //     .map(response => response.json() || {})
    }
}