import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class VideoService {

  constructor(private http:HttpClient) {
     
   }
   private url ='/api/videos?page=1'
}
