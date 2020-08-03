import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlCssEmbedComponent } from './pages/html-css-embed/html-css-embed.component';
import { HtmlCshtmlComponent } from './pages/html-cshtml/html-cshtml.component';
import { ExemploIframeComponent } from './pages/exemplo-iframe/exemplo-iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCssEmbedComponent,
    HtmlCshtmlComponent,
    ExemploIframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
