import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SideLinksComponent } from './core/side-links/side-links.component';
import { ThreadComponent } from './core/thread/thread.component';
import { ThreadPageComponent } from './pages/thread-page/thread-page.component';
import { CreatePostComponent } from './core/create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ThreadComponent,
    SideLinksComponent,
    ThreadPageComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
