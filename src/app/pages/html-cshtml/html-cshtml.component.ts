import {
  Component,
  Directive,
  NgModule,
  Input,
  ViewContainerRef,
  Compiler,
  ComponentFactory,
  ModuleWithComponentFactories,
  ComponentRef,
  ReflectiveInjector, OnInit, OnDestroy, NO_ERRORS_SCHEMA
} from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export function createComponentFactory(compiler: Compiler, metadata: Component): Promise<ComponentFactory<any>> {
  const cmpClass = class DynamicComponent { };
  const decoratedCmp = Component(metadata)(cmpClass);

  @NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [decoratedCmp],
    schemas: [NO_ERRORS_SCHEMA]
  })
  class DynamicHtmlModule { }

  return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
    .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
      return moduleWithComponentFactory.componentFactories.find(x => x.componentType === decoratedCmp);
    });
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'mvc-partial',
})
// tslint:disable-next-line: directive-class-suffix
export class HtmlCshtmlComponent implements OnInit, OnDestroy {
  html = '<p></p>';

  objeto: any;

  @Input() url: string;
  cmpRef: ComponentRef<any>;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler, private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get(this.url, { responseType: 'text' })
      .pipe(map(res => res.toString()))
      .subscribe(
        (html) => {
          this.html = html;
          if (!html) { return; }

          if (this.cmpRef) {
            this.cmpRef.destroy();
          }

          const compMetadata = new Component({
            selector: 'dynamic-html',
            template: this.html,
            /*
                  template: `@{{ '{' }}var quote = "The future depends on what you do today. - Mahatma Gandhi";{{ '}' }}<p>@quote</p>@{{ '{' }}quote = "Hate cannot drive out hate, only love can do that. - Martin Luther King, Jr.";{{ '}' }}<p>@quote</p>`,
                  //templateUrl: './razorblocos.cshtml'
                  /*template: `<p>The future depends on what you do today. - Mahatma Gandhi</p>
                <p>Hate cannot drive out hate, only love can do that. - Martin Luther King, Jr.</p>`*/

            styles: [`p { font-weight: 800; } button {
              background-color: #4CAF50 !important; /* Green */
              border: none;
              color: white;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
            }`]
          });

          createComponentFactory(this.compiler, compMetadata)
            .then(factory => {
              const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
              this.cmpRef = this.vcRef.createComponent(factory, 0, injector, []);
            });
        },

        err => console.log(err),
        () => console.log('MvcPartial complete')
      );
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
