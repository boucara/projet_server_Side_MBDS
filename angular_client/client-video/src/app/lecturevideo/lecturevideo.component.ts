import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VideoService} from "../video.service";
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-lecturevideo',
  templateUrl: './lecturevideo.component.html',
  styleUrls: ['./lecturevideo.component.css']
})
export class LecturevideoComponent implements OnInit {
 id: string;
 description:string;
 url: string;
 titre:string;
 mycouleur1:string;
 mycouleur2:string;
 mycouleur3:string;
 mycouleur4:string;
 mycouleur5:string;
 
 
 
 constructor(private route: ActivatedRoute , private videoService:VideoService,private sanitizer: DomSanitizer) { 
  

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
    console.log(params);
    this.id = params['id'];
    this.videoService.getVideo(this.id).subscribe(response=> {
      console.log(response);
       this.url = response.url+"?autoplay="+1;
      this.description = response.description;
      this.titre=response.titre;
    });

  });

  }
  serialiseURL(url:string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  vote1(){
    this.mycouleur1='red';
  }
  vote2(){
    this.mycouleur2='red';
  }
   vote3(){
    this.mycouleur3='red';
   }
   vote4(){
    this.mycouleur4='red';
   }
   vote5(){
    this.mycouleur5='red';
   }
   
  voteTotal(){
    if(this.mycouleur1=='red'){

    }
    
  }
   

  


}
