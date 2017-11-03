import {Component, OnInit} from '@angular/core';
import {Article} from './article';
import {ArticleListService} from './article-list.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private articleListService: ArticleListService) {

  }

  ngOnInit(): void {
    this.articles = this.articleListService.getArticleList();
  }

}
