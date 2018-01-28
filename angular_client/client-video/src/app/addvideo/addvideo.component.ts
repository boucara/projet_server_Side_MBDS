import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
 titre:string;
 description:string;
 url: string ;
 urlimg: string;
 ob:object;
  constructor(private http: Http , private videoService:VideoService) {

  }

  ngOnInit() {
  }
  newVideo(){
  this.ob={titre:this.titre ,description:this.description ,url:this.url, urlimg:this.urlimg};
  this.videoService.postVideos(this.ob).subscribe(response=> console.log(response.data));
 alert("ajout réussi");

  }
}
