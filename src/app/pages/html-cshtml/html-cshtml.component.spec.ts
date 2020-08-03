import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCshtmlComponent } from './html-cshtml.component';

describe('HtmlCshtmlComponent', () => {
  let component: HtmlCshtmlComponent;
  let fixture: ComponentFixture<HtmlCshtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlCshtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCshtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
