import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ThreadPageComponent } from './pages/thread-page/thread-page.component';
import { DragAndDropComponent } from './pages/drag-and-drop/drag-and-drop.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubredditPageComponent } from './pages/subreddit-page/subreddit-page.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "threadPage/:id", component: ThreadPageComponent},
  {path: "profilePage/:username", component: ProfileComponent},
  {path: "dragAndDrop", component: DragAndDropComponent},
  {path: "subredditPage/:subreddit", component: SubredditPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
