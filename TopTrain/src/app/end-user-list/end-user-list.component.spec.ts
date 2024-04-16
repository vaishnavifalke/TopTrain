import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserListComponent } from './end-user-list.component';

describe('EndUserListComponent', () => {
  let component: EndUserListComponent;
  let fixture: ComponentFixture<EndUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndUserListComponent]
    });
    fixture = TestBed.createComponent(EndUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
