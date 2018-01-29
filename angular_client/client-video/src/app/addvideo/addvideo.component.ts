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
    if(this.controlInputs()){
      this.checkURL();
    }else{
      alert("les champs n'accèptent pas de valeurs null");
    }
  }

  checkURL(){
    this.videoService.checkURL(this.url).subscribe(response=> {
      if(!response.result){
        this.ob={titre:this.titre ,description:this.description ,url:this.url, urlimg:this.urlimg};
        this.videoService.postVideos(this.ob).subscribe(response2=> console.log(response2.data));
        alert("ajout réussi");
      }else {
        alert("l'url existe déjà en base de données");
      }
    });
  }

  controlInputs(){
    return !this.emptyorblank(this.titre) && !this.emptyorblank(this.description) && !this.emptyorblank(this.urlimg)&& !this.emptyorblank(this.url);
  }

  emptyorblank(s){
    return (0 === s.length) || (s.trim().length === 0);
  }
}
