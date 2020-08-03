import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlCssEmbedComponent } from './html-css-embed.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HtmlCssEmbedComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HtmlCssEmbedModule { }
