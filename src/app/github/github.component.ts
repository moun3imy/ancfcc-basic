import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  loading:boolean=true;
  query:string="";
  users:any[] = [];
  usersInitial :any[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getAll().subscribe((response:any)=>{
      console.log(response);
      this.users = response;
      this.usersInitial = response;
      this.loading = false;
    });
  }
  searchUser(){
    this.loading = true;
    if(this.query==""){
      console.log("I am here");
      this.users = this.usersInitial;
      this.loading = false;
      return;
    }
    this.userService.searchUser(this.query).subscribe((response:any)=>{
      this.loading = true;
      
      console.log(response);
      this.users = response.items;
      this.loading = false;
    });
  }



}
