import {RouterModule, Routes} from '@angular/router';
import {ArticleListComponent} from '../app/article/article-list.component';
import {ArticleDetailComponent} from '../app/article/article-detail.component';
import {AboutComponent} from '../app/about/about.component';
import {DonateComponent} from '../app/donate/donate.component';
import {NgModule} from '@angular/core';

const ROUTERS: Routes = [
  {
    path: '',
    redirectTo: '/article-list',
    pathMatch: 'full',
  },
  {
    path: 'article-list',
    component: ArticleListComponent,
  },
  {
    path: 'article-detail',
    component: ArticleDetailComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule]
})

export class RoutingModule {

}

