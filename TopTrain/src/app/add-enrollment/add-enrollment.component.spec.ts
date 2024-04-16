import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnrollmentComponent } from './add-enrollment.component';

describe('AddEnrollmentComponent', () => {
  let component: AddEnrollmentComponent;
  let fixture: ComponentFixture<AddEnrollmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEnrollmentComponent]
    });
    fixture = TestBed.createComponent(AddEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
