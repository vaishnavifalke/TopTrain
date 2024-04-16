import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillListComponent } from './user-skill-list.component';

describe('UserSkillListComponent', () => {
  let component: UserSkillListComponent;
  let fixture: ComponentFixture<UserSkillListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSkillListComponent]
    });
    fixture = TestBed.createComponent(UserSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
