import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {VideoService} from'./video.service'
import { HttpModule } from '@angular/http';
import { AccueilComponent } from './accueil/accueil.component';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'addvideo', component: AddvideoComponent },
 
  
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AddvideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VideoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
