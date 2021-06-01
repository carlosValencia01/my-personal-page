import { Routes } from '@angular/router';

import { TestBlogComponent } from './test-blog/test-blog.component';
import { RenderBlogComponent } from './render-blog/render-blog.component';


export const BLOGS_ROUTES: Routes = [
      {path:'test', component: TestBlogComponent},
      {path:'home', component: RenderBlogComponent},
      {path:'**', pathMatch:'full', redirectTo:'nuevo'}
];
