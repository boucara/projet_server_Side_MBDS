import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http:Http) {
    
  }
   private url ='/api/videos'
   getVideos(){
    return this.http.get(this.url).map((response: Response) => response.json());

   }
  
}
