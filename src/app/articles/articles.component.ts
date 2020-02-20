import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 
  display:boolean = false;
  editable:boolean = false;
  article : Article ;

  listArticles : Article []= [];

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
   this.getArticles();
  }

  getArticles(){
    this.articleService.getAll().subscribe((response:Article[])=>{
      
      this.listArticles = response;
    });
  }

  persistArticle(data){
    if (data.invalid){
      return;
    }
    this.articleService.save(this.article).subscribe((response:Article)=>{
      this.listArticles = [response,...this.listArticles]
    }
    )
      data.reset();
  }
  updateArticle(form){
    if (form.invalid ) {
      return ;
    }
    this.articleService.update(this.article).subscribe(()=>{
      this.display = false;
      this.editable = false;
    })
  }
  deleteArticle(id:number){
    this.articleService.deleteArticle(id).subscribe(()=>{
      
    });
  }



}
