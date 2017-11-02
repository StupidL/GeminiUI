import {Component} from '@angular/core';
import {ArticleDetailService} from './article-detail.service';
import {Article} from './article';

@Component({
  selector: 'article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.css'],
})


export class ArticleDetailComponent {

  article: Article;

  constructor(private articleDetailService: ArticleDetailService) {

  }

  showArticleDetail(): void {
    this.article = this.articleDetailService.getArticleDetail();
  }

  hideArticleDetail(): void {
    this.article = null;
  }
}
