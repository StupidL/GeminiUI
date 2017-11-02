import {Article} from './article';

const MOCK_ARTICLE = {
  id: 1234567,
  title: 'Mock Article',
  author: 'Allen',
  time: '2017-11-02',
  content: 'Hello everyone! This is a mock article',
}

export class ArticleDetailService {
  getArticleDetail(): Article {
    return MOCK_ARTICLE;
  }
}
