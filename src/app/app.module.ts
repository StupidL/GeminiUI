import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ArticleDetailComponent} from './article/article-detail.component';
import {RoutingModule} from '../routing/routing.module';
import {AboutComponent} from './about/about.component';
import {AboutService} from "./about/about.service";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArticleDetailComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
