import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocialmediaComponent } from './add-socialmedia.component';

describe('AddSocialmediaComponent', () => {
  let component: AddSocialmediaComponent;
  let fixture: ComponentFixture<AddSocialmediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSocialmediaComponent]
    });
    fixture = TestBed.createComponent(AddSocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
