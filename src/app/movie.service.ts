import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Movie} from "./movie.model";
import { map } from 'rxjs/operators';

@Injectable()
export class MovieService {

    constructor(private http:HttpClient) {
    }

    nowPlaying() {
        const url: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=cf86200f49581725c527db61a5b017c6'
        // const data: any = this.http.get(url).pipe(map((data: any) => data.json() || {}))
        // console.log(data)
        // return data
        // return this.http.get(url)
        // .pipe(map((data: any) => data.json() || {}))
        return this.http.get(url).pipe(map((data: any) => data.result))
    }

    movie(id:number) {
        const url: string = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=cf86200f49581725c527db61a5b017c6'
        // const data: any = this.http.get(url).pipe(map((data: any) => data.json() || {}))
        // console.log(data)
        // return data
        // return this.http.get(url)
        // .pipe(map((data: any) => data.json() || {}))
        return this.http.get(url).pipe(map((data: any) => data.result))
        }
}