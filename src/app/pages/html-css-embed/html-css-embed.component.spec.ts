import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssEmbedComponent } from './html-css-embed.component';

describe('HtmlCssEmbedComponent', () => {
  let component: HtmlCssEmbedComponent;
  let fixture: ComponentFixture<HtmlCssEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlCssEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCssEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
