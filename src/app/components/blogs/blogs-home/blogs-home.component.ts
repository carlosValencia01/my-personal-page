import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-blogs-home',
  templateUrl: './blogs-home.component.html',
  styleUrls: ['./blogs-home.component.css']
})
export class BlogsHomeComponent implements OnInit {

  blogs:any[]=[];

  constructor(private postService:PostService,
              private router:Router) { 
  }

  ngOnInit(): void {
    this.blogs = this.postService.getBlogs();
  }

  goToPost(url:string){
    this.router.navigate(['blogs-home',url]);
  }

}
