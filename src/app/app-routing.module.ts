import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ThreadPageComponent } from './pages/thread-page/thread-page.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "threadPage", component: ThreadPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
