import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassBookComponent } from './pass-book.component';

describe('PassBookComponent', () => {
  let component: PassBookComponent;
  let fixture: ComponentFixture<PassBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
