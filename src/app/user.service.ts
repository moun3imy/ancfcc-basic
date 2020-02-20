import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi:string;

  constructor(private http:HttpClient) { 
    this.urlApi = "http://api.github.com/users"
  }

  getAll(){
    return this.http.get(this.urlApi);
  }
  searchUser(query:string){
    return this.http.get(`https://api.github.com/search/users?q=${query}`)
  }
}
