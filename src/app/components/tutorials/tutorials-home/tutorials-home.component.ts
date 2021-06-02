import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tutorials-home',
  templateUrl: './tutorials-home.component.html',
  styleUrls: ['./tutorials-home.component.css']
})
export class TutorialsHomeComponent implements OnInit {

  tutorials:any[]=[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.tutorials=this.postService.getTutorials();
  }

}
