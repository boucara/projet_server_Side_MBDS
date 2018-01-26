import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';
import { VideoService } from './video.service';
import {Http, Response} from '@angular/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent  implements OnInit{
  videos:String[];
 data:object;
 tabdata = new Array();
 
  constructor(private http: Http , private videoService:VideoService, private sanitizer: DomSanitizer){
    
  }
  ngOnInit(): void {
    this.videoService.getVideos().subscribe(response =>{
      this.videos=response.data ;

      console.log(this.videos);
      });

   
  }
  serialiseURL(url:string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
//   flatten (tab:String[])  {
//     var   ob: Object;
//     for (var i in tab) {
//       ob =tab[i];
//       }
    
//     return ob;
//   }
//  flattenObject = function(ob) {
//     var toReturn = {};
    
//     for (var i in ob) {
//       if (!ob.hasOwnProperty(i)) continue;
      
//       if ((typeof ob[i]) == 'object') {
//         var flatObject = this.flattenObject(ob[i]);
//         for (var x in flatObject) {
//           if (!flatObject.hasOwnProperty(x)) continue;
          
//           toReturn[i + '.' + x] = flatObject[x];
//         }
//       } else {
//         toReturn[i] = ob[i];
//       }
//     }
//     return toReturn;
//   };
  

  title = 'app';
  
  
}
