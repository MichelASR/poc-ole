import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploIframeComponent } from './exemplo-iframe.component';

describe('ExemploIframeComponent', () => {
  let component: ExemploIframeComponent;
  let fixture: ComponentFixture<ExemploIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
