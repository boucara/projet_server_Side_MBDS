import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  ob:object;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.ob = this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];

      // In a real app: dispatch action to load the details here.
    });
  }

}
