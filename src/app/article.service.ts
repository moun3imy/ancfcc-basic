import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article} from '../app/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  urlApi:string ;

  
  constructor(private http:HttpClient) { 
    this.urlApi = "http://localhost/posts"
  }

  getAll(){
    return this.http.get(this.urlApi);
  }
  save(data){
    return this.http.post(this.urlApi,data);
  }
  update(data){
    return this.http.put(`${this.urlApi}/${data.id}`,data);
  }
  deleteArticle(id:number, index:number){
    return this.http.delete(`${this.urlApi}/${id}`);
  }

}
