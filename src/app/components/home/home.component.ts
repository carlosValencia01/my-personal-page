import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:any[]=[];

  constructor(private postService:PostService,
              private router:Router) { }

  ngOnInit(): void {
    this.posts=this.postService.getNewPosts();
  }

  goToPost(url:string,category:string){
    let param="";
    switch (category){
      case 'blog': param="blogs-home"
      break;
    }
    this.router.navigate([param,url]);
  }

}
