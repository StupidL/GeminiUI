import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ArticleDetailComponent} from './article/article-detail.component';
import {RoutingModule} from '../routing/routing.module';
import {AboutComponent} from './about/about.component';
import {AboutService} from './about/about.service';
import {ArticleListComponent} from './article/article-list.component';
import {ArticleListService} from './article/article-list.service';
import {ArticleDetailService} from './article/article-detail.service';
import {DonateComponent} from './donate/donate.component';
import {DonateService} from './donate/donate.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    AboutComponent,
    DonateComponent,
    ArticleDetailComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [AboutService, ArticleListService, ArticleDetailService, DonateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
