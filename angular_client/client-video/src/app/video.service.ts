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
   private url2 ='/api/videos';
   postVideos(formdata:Object){
    //this.url2=this.url2+"?titre="+titre+"&description="+description+"&url="+url ;
    return this.http.post(this.url2,formdata).map((response: Response) => response.json());
   }
  
}
