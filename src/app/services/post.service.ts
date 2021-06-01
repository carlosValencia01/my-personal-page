import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts:post[]=[
    {
      title:"¿Que es Node.js?",
      description:"Este es un post de prueba para el card",
      category:"blog",
      url:"que-es-node",
      date:new Date(2021,5,1),
      image:"https://lh3.googleusercontent.com/gnDvRn8qMtLBVUcY_WWMzbZHfOpa4GpJgEZZ-OhGxksRSTdyWnQGMTJipn0o3zjaLptybQRNqJHSBWv-Mof4Nxt9oPuVzF_wEoTx6nouR6ZMKb3pR5uvykHrvCbu2yYcu7lvXdd7CH5rXe1scq60xeEwBbsO8R0RwEzIpviESj78sJhPx2gjGVi1arkZ1Pm9ZUKmTzsucHoYQkkZG26jwue6Hh-9Yk6macvN2Rj4IjpCPqUZMsFvqIZsNCJxck_fZabJfpXefA4o98-7QrV8vZUoIRzSewnfbXPLW-NH-0e03VjGWz-MxgUqxaCBhTy0fxgs7BbsbHUvfcUtU3VfyAiEh3fp9tu0f0Vt8-eAr3Mj92Vqc4gsbzK5dkoaHnG7zc6mFy-8-ckBsFOnLDmVNK2MdneM8xeFY3HyQHwzjP6t4tiU7MRI3DTsLoND4renMArYmTF3ibf4crio0fYHSUcO3d4Q1WGQBChnNk5Hv15h2Dt5ygaKrdHIO77WQGXWS6azE6VDuA9tRXPXKdpupU6BavqFKuseW9eZNIZCDh19tc38yJ0q-mYcj-_fqlAvgy0Kyqu_YyPYZkO5-tKwO8BegGTIH6K0TzI_PEF4H45Uu_WVvTTgWXXbWQBuRhmQLBY5NFeeE1NWlv4NclMnWVxfRYLdexS0WzRHw5wntdYmzzMPE5tH3xrmKA5_n8RtL7scbWyfVFApHS7y7CIUedW2=w1200-h627-no?authuser=0"
    },
    {
      title:"test post 2",
      description:"Descripcion de prueba del post 2",
      category:"blog",
      url:"test",
      date:new Date(),
      image:"https://lh3.googleusercontent.com/NICn0kodFxEqm5G9Dg9urBpjpSZ3V9AarBWVgu98fG9aFpquvHmcwD6Ei_fPS5cobXKqyGO804_2jbur0SgqLDpSqyLhAGhLBTJcSn6jXFT7Sf8qEkghFrCSy5TAiXtvHm84B16u-cSEU5Ul9a_9BsbZVtcoOicg_Jf3gyBWdRdQ1askF4CBQVnjyIdFmr3RllYVyZTnG19oit5FG8CugXpQ2zKdNIJc8QmUHlFm92Ocfgp09P0RmSn_yerLcrOGWXO2MWsWBKRh6BKDW0mAJN6V-pDnWpJ2fFU9VPQn8XfdYl7fAtWHf7eZWXwhac-Aq_3UxnT0Yj2rGQnHdZiSaJnIhDCQrzkY7S23wMS0K1Rgg_Ipd0C8D7zpV_7RBzpWyUqwLvL_CMQWOvxzlWx-dHz6mjVPkupQ6nmsaPuI6KxHrhk-SZNsd3fof7gO4Euj0i6BhjkuqpJgLvFwwXaAtEcNcgAgBTryqz_9_Em7sCjKvq_qiPE1kkmtywaL6MjKq_5fTeERLHxk2o1KnIqIU6d_1t1cc841kOaloNBT-uGNrZGC3mznHaIFgMQ8A1wbkAjDmwSIsDUbx63IwbdQG3y5JaPjoc6rTnH7cmk0yyLCqdUlFxQszTnPSOb8Lj1ArxUt07j_wX3oS8Oq8DPn2Tmt6rDsix6Fvuw9dJJfY_MXo87VLKnzQfQz6fH5ZxoooV9qJJTdEBj7dwV6WnCwBG-M=w900-h520-no?authuser=0"
    },
    {
      title:"test post 3",
      description:"Descripcion de prueba del post 3",
      category:"blog",
      url:"test",
      date:new Date(),
      image:"https://lh3.googleusercontent.com/NICn0kodFxEqm5G9Dg9urBpjpSZ3V9AarBWVgu98fG9aFpquvHmcwD6Ei_fPS5cobXKqyGO804_2jbur0SgqLDpSqyLhAGhLBTJcSn6jXFT7Sf8qEkghFrCSy5TAiXtvHm84B16u-cSEU5Ul9a_9BsbZVtcoOicg_Jf3gyBWdRdQ1askF4CBQVnjyIdFmr3RllYVyZTnG19oit5FG8CugXpQ2zKdNIJc8QmUHlFm92Ocfgp09P0RmSn_yerLcrOGWXO2MWsWBKRh6BKDW0mAJN6V-pDnWpJ2fFU9VPQn8XfdYl7fAtWHf7eZWXwhac-Aq_3UxnT0Yj2rGQnHdZiSaJnIhDCQrzkY7S23wMS0K1Rgg_Ipd0C8D7zpV_7RBzpWyUqwLvL_CMQWOvxzlWx-dHz6mjVPkupQ6nmsaPuI6KxHrhk-SZNsd3fof7gO4Euj0i6BhjkuqpJgLvFwwXaAtEcNcgAgBTryqz_9_Em7sCjKvq_qiPE1kkmtywaL6MjKq_5fTeERLHxk2o1KnIqIU6d_1t1cc841kOaloNBT-uGNrZGC3mznHaIFgMQ8A1wbkAjDmwSIsDUbx63IwbdQG3y5JaPjoc6rTnH7cmk0yyLCqdUlFxQszTnPSOb8Lj1ArxUt07j_wX3oS8Oq8DPn2Tmt6rDsix6Fvuw9dJJfY_MXo87VLKnzQfQz6fH5ZxoooV9qJJTdEBj7dwV6WnCwBG-M=w900-h520-no?authuser=0"
    },
    {
      title:"test post 4",
      description:"Descripcion de prueba del post 4",
      category:"blog",
      url:"test",
      date:new Date(),
      image:"https://lh3.googleusercontent.com/NICn0kodFxEqm5G9Dg9urBpjpSZ3V9AarBWVgu98fG9aFpquvHmcwD6Ei_fPS5cobXKqyGO804_2jbur0SgqLDpSqyLhAGhLBTJcSn6jXFT7Sf8qEkghFrCSy5TAiXtvHm84B16u-cSEU5Ul9a_9BsbZVtcoOicg_Jf3gyBWdRdQ1askF4CBQVnjyIdFmr3RllYVyZTnG19oit5FG8CugXpQ2zKdNIJc8QmUHlFm92Ocfgp09P0RmSn_yerLcrOGWXO2MWsWBKRh6BKDW0mAJN6V-pDnWpJ2fFU9VPQn8XfdYl7fAtWHf7eZWXwhac-Aq_3UxnT0Yj2rGQnHdZiSaJnIhDCQrzkY7S23wMS0K1Rgg_Ipd0C8D7zpV_7RBzpWyUqwLvL_CMQWOvxzlWx-dHz6mjVPkupQ6nmsaPuI6KxHrhk-SZNsd3fof7gO4Euj0i6BhjkuqpJgLvFwwXaAtEcNcgAgBTryqz_9_Em7sCjKvq_qiPE1kkmtywaL6MjKq_5fTeERLHxk2o1KnIqIU6d_1t1cc841kOaloNBT-uGNrZGC3mznHaIFgMQ8A1wbkAjDmwSIsDUbx63IwbdQG3y5JaPjoc6rTnH7cmk0yyLCqdUlFxQszTnPSOb8Lj1ArxUt07j_wX3oS8Oq8DPn2Tmt6rDsix6Fvuw9dJJfY_MXo87VLKnzQfQz6fH5ZxoooV9qJJTdEBj7dwV6WnCwBG-M=w900-h520-no?authuser=0"
    },
    {
      title:"test post 5",
      description:"Descripcion de prueba del post 5",
      category:"blog",
      url:"test",
      date:new Date(),
      image:"https://lh3.googleusercontent.com/NICn0kodFxEqm5G9Dg9urBpjpSZ3V9AarBWVgu98fG9aFpquvHmcwD6Ei_fPS5cobXKqyGO804_2jbur0SgqLDpSqyLhAGhLBTJcSn6jXFT7Sf8qEkghFrCSy5TAiXtvHm84B16u-cSEU5Ul9a_9BsbZVtcoOicg_Jf3gyBWdRdQ1askF4CBQVnjyIdFmr3RllYVyZTnG19oit5FG8CugXpQ2zKdNIJc8QmUHlFm92Ocfgp09P0RmSn_yerLcrOGWXO2MWsWBKRh6BKDW0mAJN6V-pDnWpJ2fFU9VPQn8XfdYl7fAtWHf7eZWXwhac-Aq_3UxnT0Yj2rGQnHdZiSaJnIhDCQrzkY7S23wMS0K1Rgg_Ipd0C8D7zpV_7RBzpWyUqwLvL_CMQWOvxzlWx-dHz6mjVPkupQ6nmsaPuI6KxHrhk-SZNsd3fof7gO4Euj0i6BhjkuqpJgLvFwwXaAtEcNcgAgBTryqz_9_Em7sCjKvq_qiPE1kkmtywaL6MjKq_5fTeERLHxk2o1KnIqIU6d_1t1cc841kOaloNBT-uGNrZGC3mznHaIFgMQ8A1wbkAjDmwSIsDUbx63IwbdQG3y5JaPjoc6rTnH7cmk0yyLCqdUlFxQszTnPSOb8Lj1ArxUt07j_wX3oS8Oq8DPn2Tmt6rDsix6Fvuw9dJJfY_MXo87VLKnzQfQz6fH5ZxoooV9qJJTdEBj7dwV6WnCwBG-M=w900-h520-no?authuser=0"
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
  url:string,
  date:Date,
  image:string
}
