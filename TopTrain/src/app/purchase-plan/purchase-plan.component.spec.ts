import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePlanComponent } from './purchase-plan.component';

describe('PurchasePlanComponent', () => {
  let component: PurchasePlanComponent;
  let fixture: ComponentFixture<PurchasePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasePlanComponent]
    });
    fixture = TestBed.createComponent(PurchasePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
