import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGanPageComponent } from './style-gan-page.component';

describe('StyleGanPageComponent', () => {
  let component: StyleGanPageComponent;
  let fixture: ComponentFixture<StyleGanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleGanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
