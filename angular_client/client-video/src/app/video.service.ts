import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http:Http) {
    
  }
 
  
  private pageNext=0;
    private  url ='/api/videos?pagesize='+6;
   getVideos(){
     return this.http.get(this.url).map((response: Response) => response.json());
  }
   private url2 ='/api/videos';
   postVideos(formdata:any){
    return this.http.post(this.url2,formdata).map((response: Response) => response.json());
   }
   getVideosPage(){
     this.pageNext=this.pageNext+1;
    var url ='/api/videos?pagesize='+6+'&page='+this.pageNext;
    console.log(url);
    console.log(this.pageNext);
    
    return this.http.get(url).map((response: Response) => response.json());
  
   }
   getVideosPagePrevious(){
     if(this.pageNext>0){
      this.pageNext=this.pageNext-1;
     }
    
   var url ='/api/videos?pagesize='+6+'&page='+this.pageNext;
   console.log(url);
   console.log(this.pageNext);

   return this.http.get(url).map((response: Response) => response.json());
 
  }
  
}
