import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtwonumbersComponent } from './addtwonumbers.component';

describe('AddtwonumbersComponent', () => {
  let component: AddtwonumbersComponent;
  let fixture: ComponentFixture<AddtwonumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtwonumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtwonumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
