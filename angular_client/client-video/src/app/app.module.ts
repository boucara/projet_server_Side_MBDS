import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {VideoService} from'./video.service'
import { HttpModule } from '@angular/http';
import { AccueilComponent } from './accueil/accueil.component';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { RouterModule, Routes } from '@angular/router';
import { EditvideoComponent } from './editvideo/editvideo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LecturevideoComponent } from './lecturevideo/lecturevideo.component';

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'addvideo', component: AddvideoComponent },
  { path: 'editvideo/:id', component: EditvideoComponent},
  { path: 'play/:id', component: LecturevideoComponent },
  { path: '**', component:NotfoundComponent}
 


]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AddvideoComponent,
    EditvideoComponent,
    NotfoundComponent,
    LecturevideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VideoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
