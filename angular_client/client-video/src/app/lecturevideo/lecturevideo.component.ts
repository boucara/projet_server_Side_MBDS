import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VideoService} from "../video.service";
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

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
 constructor(private route: ActivatedRoute , private videoService:VideoService,private sanitizer: DomSanitizer) { 
  

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
    console.log(params);
    this.id = params['id'];
    this.videoService.getVideo(this.id).subscribe(response=> {
      console.log(response);
       this.url = response.url;
      this.description = response.description;
      this.titre=response.titre;
    });

  });

  }
  serialiseURL(url:string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
