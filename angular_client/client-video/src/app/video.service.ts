import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http:Http) {
    
  }
 
  
  private pageNext=0;
   private url ='/api/videos?pagesize='+6;
   getVideos(){
    console.log(this.url);
    console.log(this.pageNext);
    this.url=this.url+'&page='+this.pageNext;
    this.pageNext++;
    return this.http.get(this.url).map((response: Response) => response.json());
  

   }
   private url2 ='/api/videos';
   postVideos(formdata:Object){
    //this.url2=this.url2+"?titre="+titre+"&description="+description+"&url="+url ;
    return this.http.post(this.url2,formdata).map((response: Response) => response.json());
   }
  
}
