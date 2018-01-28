import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import {Http, Response} from '@angular/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  videos:String[];
  data:object;
  tabdata = new Array();
  numpage=0;
  constructor(private http: Http , private videoService:VideoService, private sanitizer: DomSanitizer) {
  
   }

  ngOnInit() {
    this.videoService.getVideos().subscribe(response =>{
      this.videos=response.data ;

      console.log(this.videos);
      });

  }
  serialiseURL(url:string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  pageSuivante(){
    this.videoService.getVideos().subscribe(response =>{
      this.videos=response.data ;

      console.log(this.videos);
      });
     
    

  }
}
