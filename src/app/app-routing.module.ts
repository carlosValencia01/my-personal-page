import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsHomeComponent } from './components/blogs/blogs-home/blogs-home.component';
import { RenderBlogComponent } from './components/blogs/render-blog/render-blog.component';

import { BLOGS_ROUTES } from './components/blogs/blogs-routing.module';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {
    path:'blogs', 
    component: BlogsHomeComponent
  },
  {
    path:'blogs-home', 
    component: RenderBlogComponent,
    children: BLOGS_ROUTES
  },
  {path:'about',component:AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
