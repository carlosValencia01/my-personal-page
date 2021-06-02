import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PostService, post } from 'src/app/services/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() posts:post=
  {
    title:"",
    description:"",
    category:"",
    url:"",
    date:new Date(),
    image:""
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToPost(url:string,category:string){
    let param="";
    switch (category){
      case 'blog': param="blogs-home"
      break;
      case 'tutorials': param="tutorials-home"
      break;
    }
    this.router.navigate([param,url]);
  }

}
