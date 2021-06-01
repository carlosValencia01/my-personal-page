import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts:post[]=[
    {
      title:"test post 1",
      description:"Este es un post de prueba para el card",
      category:"blog",
      url:"test"
    },
    {
      title:"test post 2",
      description:"Descripcion de prueba del post 2",
      category:"blog",
      url:"test"
    },
    {
      title:"test post 3",
      description:"Descripcion de prueba del post 3",
      category:"blog",
      url:"test"
    },
    {
      title:"test post 4",
      description:"Descripcion de prueba del post 4",
      category:"blog",
      url:"test"
    },
    {
      title:"test post 5",
      description:"Descripcion de prueba del post 5",
      category:"blog",
      url:"test"
    },
  ]


  constructor() { }


  getBlogs(){
    let blogsArr:post[] = [];
      for (let post of this.posts){
        if(post.category == "blog"){
          blogsArr.push(post);
        }
      }
    return blogsArr;
  }





}

export interface post{
  title:string,
  description:string,
  category:string,
  url:string
}
