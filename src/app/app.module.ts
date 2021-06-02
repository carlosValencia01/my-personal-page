import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TestBlogComponent } from './components/blogs/test-blog/test-blog.component';
import { TestTutorialComponent } from './components/tutorials/test-tutorial/test-tutorial.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/shared/card/card.component';
import { BlogsHomeComponent } from './components/blogs/blogs-home/blogs-home.component';
import { RenderBlogComponent } from './components/blogs/render-blog/render-blog.component';
import { WhatIsNodeComponent } from './components/blogs/what-is-node/what-is-node.component';
import { RenderTutorialComponent } from './components/tutorials/render-tutorial/render-tutorial.component';
import { TutorialsHomeComponent } from './components/tutorials/tutorials-home/tutorials-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestBlogComponent,
    TestTutorialComponent,
    SearchComponent,
    AboutComponent,
    HomeComponent,
    CardComponent,
    BlogsHomeComponent,
    RenderBlogComponent,
    WhatIsNodeComponent,
    RenderTutorialComponent,
    TutorialsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
