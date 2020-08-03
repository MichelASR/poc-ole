import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-html-css-embed',
  templateUrl: './html-css-embed.component.html',
  styleUrls: ['./html-css-embed.component.scss']
})


export class HtmlCssEmbedComponent implements OnInit {

  objeto: any;
  @Input() url: string;
  @Input() jsonEntrada: string;

  algumasVantagens: any;
  bannerPromocional: any;
  depoimentos: any;
  introducaoCurta: any;
  marcas: any;

  sobreProduto: any;

  url2: string;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {

    this.http
      .get(this.url, { responseType: 'json' })
      .subscribe(
        (resJson) => {

          if (this.jsonEntrada === 'livre') {
            this.algumasVantagens = resJson['data'].acf.algumasVantagens;
            this.bannerPromocional = resJson['data'].acf.bannerPromocional;
            this.depoimentos = resJson['data'].acf.depoimentos;
            this.introducaoCurta = resJson['data'].acf.introducaoCurta;
            this.marcas = resJson['data'].acf.marcas;
          }

          if (this.jsonEntrada === 'ole') {

            this.sobreProduto = resJson['result'].data.wordpressPage.acf.productAbout;

            console.log(this.sobreProduto);

          }

          this.objeto = resJson;
          console.log(this.objeto);
        },

        err => console.log(err),
        () => console.log('Json complete')
      );
  }

}
