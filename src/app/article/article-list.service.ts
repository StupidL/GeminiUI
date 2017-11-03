import {Article} from './article';

const ARTICLES: Article[] = [
  {
    id: 1234567,
    title: 'Mock Article 01',
    author: 'Allen',
    time: '2017-11-02',
    content: 'Hello everyone! This is a mock article',
  },
  {
    id: 2345678,
    title: 'Mock Article 02',
    author: 'Love',
    time: '2017-11-02',
    content: 'Hello everyone! This is a mock article',
  },
  {
    id: 3456789,
    title: 'Mock Article 03',
    author: 'Gates',
    time: '2017-11-02',
    content: 'Hello everyone! This is a mock article',
  },
]

export class ArticleListService {

  getArticleList(): Article[] {
    return ARTICLES;
  }
}
