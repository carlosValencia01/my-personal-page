import { Routes } from '@angular/router';

import { TestBlogComponent } from './test-blog/test-blog.component';
import { RenderBlogComponent } from './render-blog/render-blog.component';
import { WhatIsNodeComponent } from './what-is-node/what-is-node.component';


export const BLOGS_ROUTES: Routes = [
      {path:'que-es-node', component: WhatIsNodeComponent},
      {path:'test', component: TestBlogComponent},
      {path:'home', component: RenderBlogComponent}
];
