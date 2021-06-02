import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-blogs-home',
  templateUrl: './blogs-home.component.html',
  styleUrls: ['./blogs-home.component.css']
})
export class BlogsHomeComponent implements OnInit {

  blogs:any[]=[];

  constructor(private postService:PostService) { 
  }

  ngOnInit(): void {
    this.blogs = this.postService.getBlogs();
  }

}
