import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';
import { VideoService } from './video.service';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  videos:String[];
 data:object;
  constructor(private http: Http , private videoService:VideoService){
    
  }
  ngOnInit(): void {
    this.videoService.getVideos().subscribe(response =>{
      this.videos=response.data ;
     // console.log(this.videos);
      console.log(this.flattenObject(this.videos));
      this.data=this.flattenObject(this.videos);
      for(var i in this.data){
        console.log(this.data[i]);
      }

      
      
    });

   
  }
  flatten (tab:String[])  {
    var   ob: Object;
    for (var i in tab) {
      ob =tab[i];
      }
    
    return ob;
  }
 flattenObject = function(ob) {
    var toReturn = {};
    
    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;
      
      if ((typeof ob[i]) == 'object') {
        var flatObject = this.flattenObject(ob[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
          
          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  };
  

  title = 'app';
  
  
}
