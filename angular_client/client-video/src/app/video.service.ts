import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http:Http) {

  }


  private pageNext=0;
  getVideos(){
    let url ='/api/videos?pagesize='+6+'&page='+this.pageNext;
    return this.http.get(url).map((response: Response) => response.json());
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

  putVideo(formdata:any){
    var url = '/api/video';
    return this.http.put(url,formdata).map((response: Response) => response.json());
  }

  getVideo(id){
    var url = '/api/'+id+'/video';
    return this.http.get(url).map((response :Response) => response.json());
  }

  checkURL(url){
    var url2 = '/api/checkurl/?url='+url;
    return this.http.get(url2).map((response:Response)=>response.json());
  }

  deleteVideo(id){
    var url = '/api/video/'+id;
    return this.http.delete(url).map((response:Response)=>response.json());
  }
}
