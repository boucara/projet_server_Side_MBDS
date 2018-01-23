import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoService {

  constructor(private http:HttpClient) {

   }
   private url ='/api/videos?page=1'
}
