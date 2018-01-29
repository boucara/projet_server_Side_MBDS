import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VideoService} from "../video.service";

@Component({
  selector: 'app-editvideo',
  templateUrl: './editvideo.component.html',
  styleUrls: ['./editvideo.component.css']
})
export class EditvideoComponent implements OnInit {
  id:string;
  titre:string;
  description:string;
  url: string ;
  urlimg: string;

  constructor(private route: ActivatedRoute , private videoService:VideoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.videoService.getVideo(this.id).subscribe(response => {
        console.log(response);
        this.titre = response.titre;
        this.url = response.url;
        this.urlimg = response.urlimg;
        this.description = response.description;
      });

    });
  }

  editVideo(){
    if(this.controlInputs()){
      let ob={id:this.id, titre:this.titre ,description:this.description ,url:this.url, urlimg:this.urlimg};
      this.videoService.putVideo(ob).subscribe(response=> console.log(response.data));
      alert("modification réussi");
    }
    else{
      alert("les champs n'accèptent pas de valeurs null");
    }

  }

  controlInputs(){
    return !this.emptyorblank(this.titre) && !this.emptyorblank(this.description) && !this.emptyorblank(this.urlimg);
  }

  emptyorblank(s){
    return (0 === s.length) || (s.trim().length === 0);
  }

}
