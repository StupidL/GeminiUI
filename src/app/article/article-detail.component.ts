import {Component} from '@angular/core';
import {ArticleDetailService} from './article-detail.service';

@Component({
  selector: 'article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.css'],
})


export class ArticleDetailComponent {
  constructor(private articleDetailService: ArticleDetailService) {

  }

  showArticleDetail(): void {

  }

  hideArticleDetail(): void {

  }
}
