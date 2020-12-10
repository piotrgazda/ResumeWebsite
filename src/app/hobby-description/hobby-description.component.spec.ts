import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyDescriptionComponent } from './hobby-description.component';

describe('HobbyDescriptionComponent', () => {
  let component: HobbyDescriptionComponent;
  let fixture: ComponentFixture<HobbyDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
