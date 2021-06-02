import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsHomeComponent } from './components/blogs/blogs-home/blogs-home.component';
import { RenderBlogComponent } from './components/blogs/render-blog/render-blog.component';
import { TutorialsHomeComponent } from './components/tutorials/tutorials-home/tutorials-home.component';
import { RenderTutorialComponent } from './components/tutorials/render-tutorial/render-tutorial.component';

import { BLOGS_ROUTES } from './components/blogs/blogs-routing.module';
import { TUTORIALS_ROUTES } from './components/tutorials/tutorials-routing.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'blogs', component: BlogsHomeComponent },
  {
    path:'blogs-home', 
    component: RenderBlogComponent,
    children: BLOGS_ROUTES
  },
  { path:'tutorials', component: TutorialsHomeComponent },
  {
    path:'tutorials-home', 
    component: RenderTutorialComponent,
    children: TUTORIALS_ROUTES
  },
  {path:'about',component:AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
