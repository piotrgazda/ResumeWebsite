import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbysTableComponent } from './hobbys-table.component';

describe('HobbysTableComponent', () => {
  let component: HobbysTableComponent;
  let fixture: ComponentFixture<HobbysTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbysTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
