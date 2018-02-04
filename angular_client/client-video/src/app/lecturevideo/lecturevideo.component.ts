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
 vote:number;
 urlimg:string;
 
 mycouleur1:string;
 mycouleur2:string;
 mycouleur3:string;
 mycouleur4:string;
 mycouleur5:string;
 etoile1:number=0;
 etoile2:number=0;
 etoile3:number=0;
 etoile4:number=0;
 etoile5:number=0;
 
 
 
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
      this.vote=response.vote;
      this.urlimg=response.urlimg;
      
    });
      
  });
 
  }
  serialiseURL(url:string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  vote1(){
    this.mycouleur1='red';
    this.etoile1=1;
    
  }
  vote2(){
    this.mycouleur2='red';
    this.etoile2=2;
   
  }
   vote3(){
    this.mycouleur3='red';
  
   }
   vote4(){
    this.mycouleur4='red';
    this.etoile4=4;
    
   }
   vote5(){
    this.mycouleur5='red';
    this.etoile5=5;
  
   }
   
  voteTotal():number{
    var voteTotal = (this.etoile1+this.etoile2+this.etoile3+this.etoile4+this.etoile5)/5 ;
    console.log("mes notes"+this.etoile1, this.etoile2, this.etoile3, this.etoile4, this.etoile5);
    console.log("moyenne"+voteTotal);
   return voteTotal;

    
  }
   envoieVote(){
    this.vote=this.voteTotal()+this.vote;
    let ob={id:this.id, titre:this.titre ,description:this.description ,url:this.url, urlimg:this.urlimg,vote:this.vote};
    this.videoService.putVideo(ob).subscribe(response=> console.log("donner vote"+response.data));
    alert("vote réussi");
    

   }

  


}
