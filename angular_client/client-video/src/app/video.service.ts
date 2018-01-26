import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
=======
>>>>>>> 2ba871741701de9778d9041b14fc92f6e75f7028

@Injectable()
export class VideoService {

<<<<<<< HEAD
  constructor(private http:Http) {
     
=======
  constructor(private http:HttpClient) {

>>>>>>> 2ba871741701de9778d9041b14fc92f6e75f7028
   }
   private url ='/api/videos'
   getVideos(){
    return this.http.get(this.url).map((response: Response) => response.json());

   }
  
}
